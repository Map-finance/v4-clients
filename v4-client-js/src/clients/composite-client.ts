import { EncodeObject } from '@cosmjs/proto-signing';
import { Account, GasPrice, IndexedTx, StdFee } from '@cosmjs/stargate';
import { Method } from '@cosmjs/tendermint-rpc';
import {
  BroadcastTxAsyncResponse,
  BroadcastTxSyncResponse,
} from '@cosmjs/tendermint-rpc/build/tendermint37';
import { GetAuthenticatorsResponse } from '@dydxprotocol/v4-proto/src/codegen/h2x/accountplus/query';
import {
  Order_ConditionType,
  Order_TimeInForce,
} from '@dydxprotocol/v4-proto/src/codegen/h2x/clob/order';
import BigNumber from 'bignumber.js';
import { parseUnits } from 'ethers';
import { Long } from '../lib/long';
import protobuf from 'protobufjs';
import createDebug from 'debug';
import { bigIntToBytes } from '../lib/helpers';
import { isStatefulOrder, verifyOrderFlags } from '../lib/validation';
import { GovAddNewMarketParams, OrderFlags } from '../types';
import {
  Authenticator,
  AuthenticatorType,
  Network,
  OrderExecution,
  OrderSide,
  OrderTimeInForce,
  OrderType,
  SHORT_BLOCK_FORWARD,
  SHORT_BLOCK_WINDOW,
  SelectedGasDenom,
} from './constants';
import {
  calculateQuantums,
  calculateSubticks,
  calculateSide,
  calculateTimeInForce,
  calculateOrderFlags,
  calculateClientMetadata,
  calculateConditionType,
  calculateConditionalOrderTriggerSubticks,
  calculateVaultQuantums,
} from './helpers/chain-helpers';
import { IndexerClient } from './indexer-client';
import { UserError } from './lib/errors';
import { generateRegistry } from './lib/registry';
import LocalWallet from './modules/local-wallet';
import { SubaccountInfo } from './subaccount';
import { BroadcastMode } from './types';
import { OrderBatch } from '@dydxprotocol/v4-proto/src/codegen/h2x/clob/tx';
import { ValidatorClient } from './validator-client';

// Required for encoding and decoding queries that are of type Long.
// Must be done once but since the individal modules should be usable
// - must be set in each module that encounters encoding/decoding Longs.
// Reference: https://github.com/protobufjs/protobuf.js/issues/921
protobuf.util.Long = Long as any;
protobuf.configure();

const debug = createDebug('v4-client-js:composite-client');

export interface MarketInfo {
  clobPairId: number;
  atomicResolution: number;
  stepBaseQuantums: number;
  quantumConversionExponent: number;
  subticksPerTick: number;
}

export interface OrderBatchWithMarketId {
  marketId: string;
  clobPairId?: number;
  clientIds: number[];
}

export type PlaceOrderPayload = {
  subaccountNumber: number;
  marketId: string;
  type: OrderType;
  side: OrderSide;
  price: number;
  size: number;
  clientId: number;
  timeInForce?: OrderTimeInForce;
  goodTilTimeInSeconds?: number;
  execution?: OrderExecution;
  postOnly?: boolean;
  reduceOnly?: boolean;
  triggerPrice?: number;
  marketInfo?: MarketInfo;
  currentHeight?: number;
  goodTilBlock?: number;
};

export type CancelRawOrderPayload = {
  subaccountNumber: number;
  clientId: number;
  orderFlags: OrderFlags;
  clobPairId: number;
  goodTilBlock?: number;
  goodTilBlockTime?: number;
};

export type TransferToSubaccountPayload = {
  sourceSubaccountNumber: number;
  recipientSubaccountNumber: number;
  transferAmount: string;
};

export class CompositeClient {
  public readonly network: Network;
  public gasDenom: SelectedGasDenom = SelectedGasDenom.USDT;
  private _indexerClient: IndexerClient;
  private _validatorClient?: ValidatorClient;

  static async connect(network: Network): Promise<CompositeClient> {
    const client = new CompositeClient(network);
    await client.initialize();
    return client;
  }

  private constructor(network: Network, apiTimeout?: number) {
    this.network = network;
    this._indexerClient = new IndexerClient(network.indexerConfig, apiTimeout);
  }

  private async initialize(): Promise<void> {
    this._validatorClient = await ValidatorClient.connect(this.network.validatorConfig);
  }

  get indexerClient(): IndexerClient {
    /**
     * Get the validator client
     */
    return this._indexerClient!;
  }

  get validatorClient(): ValidatorClient {
    /**
     * Get the validator client
     */
    return this._validatorClient!;
  }

  get selectedGasDenom(): SelectedGasDenom | undefined {
    if (!this._validatorClient) return undefined;
    return this._validatorClient.selectedGasDenom;
  }

  setSelectedGasDenom(gasDenom: SelectedGasDenom): void {
    if (!this._validatorClient) throw new Error('Validator client not initialized');
    this._validatorClient.setSelectedGasDenom(gasDenom);
  }

  /**
   * Get quote asset decimals (USDT first, fallback to USDC)
   */
  private getQuoteDecimals(): number {
    const denoms = this._validatorClient?.config.denoms;
    if (!denoms) {
      throw new Error('Validator client not initialized');
    }
    // Prefer USDT, fallback to USDC
    return denoms.USDT_DECIMALS ?? denoms.USDC_DECIMALS ?? 6;
  }

  async populateAccountNumberCache(address: string): Promise<void> {
    if (!this._validatorClient) throw new Error('Validator client not initialized');
    await this._validatorClient.populateAccountNumberCache(address);
  }

  /**
   * @description Sign a list of messages with a wallet.
   * the calling function is responsible for creating the messages.
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The Signature.
   */
  async sign(
    subaccount: SubaccountInfo,
    messaging: () => Promise<EncodeObject[]>,
    zeroFee: boolean,
    gasPrice?: GasPrice,
    memo?: string,
    account?: () => Promise<Account>,
  ): Promise<Uint8Array> {
    return this.validatorClient.post.sign(subaccount, messaging, zeroFee, gasPrice, memo, account);
  }

  /**
   * @description Send a list of messages with a wallet.
   * the calling function is responsible for creating the messages.
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The Transaction Hash.
   */
  async send(
    subaccount: SubaccountInfo,
    messaging: () => Promise<EncodeObject[]>,
    zeroFee: boolean,
    gasPrice?: GasPrice,
    memo?: string,
    broadcastMode?: BroadcastMode,
    account?: () => Promise<Account>,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    return this.validatorClient.post.send(
      subaccount,
      messaging,
      zeroFee,
      gasPrice,
      memo,
      broadcastMode,
      account,
      undefined,
    );
  }

  /**
   * @description Send a signed transaction.
   *
   * @param signedTransaction The signed transaction to send.
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The Transaction Hash.
   */
  async sendSignedTransaction(
    signedTransaction: Uint8Array,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    return this.validatorClient.post.sendSignedTransaction(signedTransaction);
  }

  /**
   * @description Simulate a list of messages with a wallet.
   * the calling function is responsible for creating the messages.
   *
   * To send multiple messages with gas estimate:
   * 1. Client is responsible for creating the messages.
   * 2. Call simulate() to get the gas estimate.
   * 3. Call send() to send the messages.
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The gas estimate.
   */
  async simulate(
    subaccount: SubaccountInfo,
    messaging: () => Promise<EncodeObject[]>,
    gasPrice?: GasPrice,
    memo?: string,
    account?: () => Promise<Account>,
  ): Promise<StdFee> {
    return this.validatorClient.post.simulate(subaccount, messaging, gasPrice, memo, account);
  }

  /**
   * @description Calculate the goodTilBlock value for a SHORT_TERM order
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The goodTilBlock value
   */

  private async calculateGoodTilBlock(
    orderFlags: OrderFlags,
    currentHeight?: number,
    goodTilBlock?: number,
  ): Promise<number> {
    if (orderFlags === OrderFlags.SHORT_TERM) {
      if (goodTilBlock !== undefined && goodTilBlock !== 0 && goodTilBlock !== null) {
        return Promise.resolve(goodTilBlock);
      } else {
        const height = currentHeight ?? (await this.validatorClient.get.latestBlockHeight());
        return height + SHORT_BLOCK_FORWARD;
      }
    } else {
      return Promise.resolve(0);
    }
  }

  /**
   * @description Validate the goodTilBlock value for a SHORT_TERM order
   *
   * @param goodTilBlock Number of blocks from the current block height the order will
   * be valid for.
   *
   * @throws UserError if the goodTilBlock value is not valid given latest block height and
   * SHORT_BLOCK_WINDOW.
   */
  private async validateGoodTilBlock(goodTilBlock: number): Promise<void> {
    const height = await this.validatorClient.get.latestBlockHeight();
    const nextValidBlockHeight = height + 1;
    const lowerBound = nextValidBlockHeight;
    const upperBound = nextValidBlockHeight + SHORT_BLOCK_WINDOW;
    if (goodTilBlock < lowerBound || goodTilBlock > upperBound) {
      throw new UserError(`Invalid Short-Term order GoodTilBlock.
        Should be greater-than-or-equal-to ${lowerBound} and less-than-or-equal-to ${upperBound}.
        Provided good til block: ${goodTilBlock}`);
    }
  }

  /**
   * @description Calculate the goodTilBlockTime value for a LONG_TERM order
   * the calling function is responsible for creating the messages.
   *
   * @param goodTilTimeInSeconds The goodTilTimeInSeconds of the order to place.
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The goodTilBlockTime value
   */
  private calculateGoodTilBlockTime(goodTilTimeInSeconds: number): number {
    const now = new Date();
    const millisecondsPerSecond = 1000;
    const interval = goodTilTimeInSeconds * millisecondsPerSecond;
    const future = new Date(now.valueOf() + interval);
    return Math.round(future.getTime() / 1000);
  }

  /**
   * @description Place a short term order with human readable input.
   *
   * Use human readable form of input, including price and size
   * The quantum and subticks are calculated and submitted
   *
   * @param subaccount The subaccount to place the order under
   * @param marketId The market to place the order on
   * @param side The side of the order to place
   * @param price The price of the order to place
   * @param size The size of the order to place
   * @param clientId The client id of the order to place
   * @param timeInForce The time in force of the order to place
   * @param goodTilBlock The goodTilBlock of the order to place
   * @param reduceOnly The reduceOnly of the order to place
   *
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The transaction hash.
   */
  async placeShortTermOrder(
    subaccount: SubaccountInfo,
    marketId: string,
    side: OrderSide,
    price: number,
    size: number,
    clientId: number,
    goodTilBlock: number,
    timeInForce: Order_TimeInForce,
    reduceOnly: boolean,
    memo?: string,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    const msgs: Promise<EncodeObject[]> = new Promise((resolve, reject) => {
      const msg = this.placeShortTermOrderMessage(
        subaccount,
        marketId,
        side,
        price,
        size,
        clientId,
        goodTilBlock,
        timeInForce,
        reduceOnly,
      );
      msg
        .then((it) => {
          resolve([it]);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
    const account: Promise<Account> = this.validatorClient.post.account(
      subaccount.address,
      undefined,
    );
    return this.send(
      subaccount,
      () => msgs,
      true,
      undefined,
      memo,
      undefined,
      () => account,
    );
  }

  /**
   * @description Place an order with human readable input.
   *
   * Only MARKET and LIMIT types are supported right now
   * Use human readable form of input, including price and size
   * The quantum and subticks are calculated and submitted
   *
   * @param subaccount The subaccount to place the order on.
   * @param marketId The market to place the order on.
   * @param type The type of order to place.
   * @param side The side of the order to place.
   * @param price The price of the order to place.
   * @param size The size of the order to place.
   * @param clientId The client id of the order to place.
   * @param timeInForce The time in force of the order to place.
   * @param goodTilTimeInSeconds The goodTilTimeInSeconds of the order to place.
   * @param execution The execution of the order to place.
   * @param postOnly The postOnly of the order to place.
   * @param reduceOnly The reduceOnly of the order to place.
   * @param triggerPrice The trigger price of conditional orders.
   * @param marketInfo optional market information for calculating quantums and subticks.
   *        This can be constructed from Indexer API. If set to null, additional round
   *        trip to Indexer API will be made.
   * @param currentHeight Current block height. This can be obtained from ValidatorClient.
   *        If set to null, additional round trip to ValidatorClient will be made.
   *
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The transaction hash.
   */
  async placeOrder(
    subaccount: SubaccountInfo,
    marketId: string,
    type: OrderType,
    side: OrderSide,
    price: number,
    size: number,
    clientId: number,
    timeInForce?: OrderTimeInForce,
    goodTilTimeInSeconds?: number,
    execution?: OrderExecution,
    postOnly?: boolean,
    reduceOnly?: boolean,
    triggerPrice?: number,
    marketInfo?: MarketInfo,
    currentHeight?: number,
    goodTilBlock?: number,
    memo?: string,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    const msgs: Promise<EncodeObject[]> = new Promise((resolve) => {
      const msg = this.placeOrderMessage(
        subaccount,
        marketId,
        type,
        side,
        price,
        size,
        clientId,
        timeInForce,
        goodTilTimeInSeconds,
        execution,
        postOnly,
        reduceOnly,
        triggerPrice,
        marketInfo,
        currentHeight,
        goodTilBlock,
        undefined, // agentAddress - not used for normal orders
      );
      msg
        .then((it) => {
          // 调试打印：最终消息内容
          // 使用自定义 replacer 避免 BigInt 序列化问题
          const safeStringify = (obj: any): string => {
            return JSON.stringify(
              obj,
              (key, value) => {
                if (typeof value === 'bigint') {
                  return value.toString();
                }
                if (
                  value &&
                  typeof value === 'object' &&
                  value.constructor &&
                  value.constructor.name === 'Long'
                ) {
                  return value.toString();
                }
                return value;
              },
              2,
            );
          };

          if (debug.enabled) {
            try {
              debug('[DEBUG placeOrder] 最终订单消息:', {
                type: it.typeUrl,
                value: safeStringify(it.value),
              });
            } catch (e) {
              debug('[DEBUG placeOrder] 最终订单消息 (序列化失败):', {
                type: it.typeUrl,
                valueType: typeof it.value,
                error: e instanceof Error ? e.message : String(e),
              });
            }
          }

          resolve([it]);
        })
        .catch((err) => {
          console.error('[DEBUG placeOrder] 下单消息构建失败:', err);
          throw err;
        });
    });
    const orderFlags = calculateOrderFlags(type, timeInForce);
    const account: Promise<Account> = this.validatorClient.post.account(
      subaccount.address,
      orderFlags,
    );
    return this.send(
      subaccount,
      () => msgs,
      true,
      undefined,
      memo,
      broadcastMode,
      () => account,
    ).then((result) => {
      return result;
    });
  }

  /**
   * @description Calculate and create the place order message
   *
   * Only MARKET and LIMIT types are supported right now
   * Use human readable form of input, including price and size
   * The quantum and subticks are calculated and submitted
   *
   * @param subaccount The subaccount to place the order under
   * @param marketId The market to place the order on
   * @param type The type of order to place
   * @param side The side of the order to place
   * @param price The price of the order to place
   * @param size The size of the order to place
   * @param clientId The client id of the order to place
   * @param timeInForce The time in force of the order to place
   * @param goodTilTimeInSeconds The goodTilTimeInSeconds of the order to place
   * @param execution The execution of the order to place
   * @param postOnly The postOnly of the order to place
   * @param reduceOnly The reduceOnly of the order to place
   *
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The message to be passed into the protocol
   */
  private async placeOrderMessage(
    subaccount: SubaccountInfo,
    marketId: string,
    type: OrderType,
    side: OrderSide,
    price: number,
    size: number,
    clientId: number,
    timeInForce?: OrderTimeInForce,
    goodTilTimeInSeconds?: number,
    execution?: OrderExecution,
    postOnly?: boolean,
    reduceOnly?: boolean,
    triggerPrice?: number,
    marketInfo?: MarketInfo,
    currentHeight?: number,
    goodTilBlock?: number,
    agentAddress?: string,
  ): Promise<EncodeObject> {
    const orderFlags = calculateOrderFlags(type, timeInForce);

    const result = await Promise.all([
      this.calculateGoodTilBlock(orderFlags, currentHeight, goodTilBlock),
      this.retrieveMarketInfo(marketId, marketInfo),
    ]);
    const desiredGoodTilBlock = result[0];
    const clobPairId = result[1].clobPairId;
    const atomicResolution = result[1].atomicResolution;
    const stepBaseQuantums = result[1].stepBaseQuantums;
    const quantumConversionExponent = result[1].quantumConversionExponent;
    const subticksPerTick = result[1].subticksPerTick;
    const orderSide = calculateSide(side);
    const quantums = calculateQuantums(size, atomicResolution, stepBaseQuantums);
    const subticks = calculateSubticks(
      price,
      atomicResolution,
      quantumConversionExponent,
      subticksPerTick,
    );
    const orderTimeInForce = calculateTimeInForce(type, timeInForce, execution, postOnly);
    let goodTilBlockTime = 0;
    if (orderFlags === OrderFlags.LONG_TERM || orderFlags === OrderFlags.CONDITIONAL) {
      if (goodTilTimeInSeconds == null) {
        throw new Error('goodTilTimeInSeconds must be set for LONG_TERM or CONDITIONAL order');
      } else {
        goodTilBlockTime = this.calculateGoodTilBlockTime(goodTilTimeInSeconds);
      }
    }
    const clientMetadata = calculateClientMetadata(type);
    const conditionalType = calculateConditionType(type);
    const conditionalOrderTriggerSubticks = calculateConditionalOrderTriggerSubticks(
      type,
      atomicResolution,
      quantumConversionExponent,
      subticksPerTick,
      triggerPrice,
    );
    return this.validatorClient.post.composer.composeMsgPlaceOrder(
      subaccount.address,
      subaccount.subaccountNumber,
      clientId,
      clobPairId,
      orderFlags,
      desiredGoodTilBlock,
      goodTilBlockTime,
      orderSide,
      quantums,
      subticks,
      orderTimeInForce,
      reduceOnly ?? false,
      clientMetadata,
      conditionalType,
      conditionalOrderTriggerSubticks,
      undefined, // twapParameters
      undefined, // builderCodeParameters
      '', // orderRouterAddress
      agentAddress || '',
    );
  }

  private async retrieveMarketInfo(marketId: string, marketInfo?: MarketInfo): Promise<MarketInfo> {
    if (marketInfo) {
      return Promise.resolve(marketInfo);
    } else {
      const marketsResponse = await this.indexerClient.markets.getPerpetualMarkets(marketId);
      const market = marketsResponse.markets[marketId];
      const clobPairId = market.clobPairId;
      const atomicResolution = market.atomicResolution;
      const stepBaseQuantums = market.stepBaseQuantums;
      const quantumConversionExponent = market.quantumConversionExponent;
      const subticksPerTick = market.subticksPerTick;
      return {
        clobPairId,
        atomicResolution,
        stepBaseQuantums,
        quantumConversionExponent,
        subticksPerTick,
      };
    }
  }

  /**
   * @description Calculate and create the short term place order message
   *
   * Use human readable form of input, including price and size
   * The quantum and subticks are calculated and submitted
   *
   * @param subaccount The subaccount to place the order under
   * @param marketId The market to place the order on
   * @param side The side of the order to place
   * @param price The price of the order to place
   * @param size The size of the order to place
   * @param clientId The client id of the order to place
   * @param timeInForce The time in force of the order to place
   * @param goodTilBlock The goodTilBlock of the order to place
   * @param reduceOnly The reduceOnly of the order to place
   *
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The message to be passed into the protocol
   */
  private async placeShortTermOrderMessage(
    subaccount: SubaccountInfo,
    marketId: string,
    side: OrderSide,
    price: number,
    size: number,
    clientId: number,
    goodTilBlock: number,
    timeInForce: Order_TimeInForce,
    reduceOnly: boolean,
  ): Promise<EncodeObject> {
    await this.validateGoodTilBlock(goodTilBlock);

    const marketsResponse = await this.indexerClient.markets.getPerpetualMarkets(marketId);
    const market = marketsResponse.markets[marketId];
    const clobPairId = market.clobPairId;
    const atomicResolution = market.atomicResolution;
    const stepBaseQuantums = market.stepBaseQuantums;
    const quantumConversionExponent = market.quantumConversionExponent;
    const subticksPerTick = market.subticksPerTick;
    const orderSide = calculateSide(side);
    const quantums = calculateQuantums(size, atomicResolution, stepBaseQuantums);
    const subticks = calculateSubticks(
      price,
      atomicResolution,
      quantumConversionExponent,
      subticksPerTick,
    );
    const orderFlags = OrderFlags.SHORT_TERM;
    return this.validatorClient.post.composer.composeMsgPlaceOrder(
      subaccount.address,
      subaccount.subaccountNumber,
      clientId,
      clobPairId,
      orderFlags,
      goodTilBlock,
      0, // Short term orders use goodTilBlock.
      orderSide,
      quantums,
      subticks,
      timeInForce,
      reduceOnly,
      0, // Client metadata is 0 for short term orders.
      Order_ConditionType.CONDITION_TYPE_UNSPECIFIED, // Short term orders cannot be conditional.
      Long.fromInt(0), // Short term orders cannot be conditional.
    );
  }

  /**
   * @description Cancel an order with order information from web socket or REST.
   *
   * @param subaccount The subaccount to cancel the order from
   * @param clientId The client id of the order to cancel
   * @param orderFlags The order flags of the order to cancel
   * @param clobPairId The clob pair id of the order to cancel
   * @param goodTilBlock The goodTilBlock of the order to cancel
   * @param goodTilBlockTime The goodTilBlockTime of the order to cancel
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The transaction hash.
   */
  async cancelRawOrder(
    subaccount: SubaccountInfo,
    clientId: number,
    orderFlags: OrderFlags,
    clobPairId: number,
    goodTilBlock?: number,
    goodTilBlockTime?: number,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    return this.validatorClient.post.cancelOrder(
      subaccount,
      clientId,
      orderFlags,
      clobPairId,
      goodTilBlock,
      goodTilBlockTime,
    );
  }

  /**
   * @description Cancel an order with human readable input.
   *
   * @param subaccount The subaccount to cancel the order from
   * @param clientId The client id of the order to cancel
   * @param orderFlags The order flags of the order to cancel
   * @param marketId The market to cancel the order on
   * @param goodTilBlock The goodTilBlock of the order to cancel
   * @param goodTilBlockTime The goodTilBlockTime of the order to cancel
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The transaction hash.
   */
  async cancelOrder(
    subaccount: SubaccountInfo,
    clientId: number,
    orderFlags: OrderFlags,
    marketId: string,
    goodTilBlock?: number,
    goodTilTimeInSeconds?: number,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    const marketsResponse = await this.indexerClient.markets.getPerpetualMarkets(marketId);
    const market = marketsResponse.markets[marketId];
    const clobPairId = market.clobPairId;

    if (!verifyOrderFlags(orderFlags)) {
      throw new Error(`Invalid order flags: ${orderFlags}`);
    }

    let goodTilBlockTime;
    if (isStatefulOrder(orderFlags)) {
      if (goodTilTimeInSeconds === undefined || goodTilTimeInSeconds === 0) {
        throw new Error('goodTilTimeInSeconds must be set for LONG_TERM or CONDITIONAL order');
      }
      if (goodTilBlock !== 0) {
        throw new Error(
          'goodTilBlock should be zero since LONG_TERM or CONDITIONAL orders ' +
            'use goodTilTimeInSeconds instead of goodTilBlock.',
        );
      }
      goodTilBlockTime = this.calculateGoodTilBlockTime(goodTilTimeInSeconds);
    } else {
      if (goodTilBlock === undefined || goodTilBlock === 0) {
        throw new Error('goodTilBlock must be non-zero for SHORT_TERM orders');
      }
      if (goodTilTimeInSeconds !== undefined && goodTilTimeInSeconds !== 0) {
        throw new Error(
          'goodTilTimeInSeconds should be zero since SHORT_TERM orders use goodTilBlock instead of goodTilTimeInSeconds.',
        );
      }
    }

    return this.validatorClient.post.cancelOrder(
      subaccount,
      clientId,
      orderFlags,
      clobPairId,
      goodTilBlock,
      goodTilBlockTime,
    );
  }

  /**
   * @description Batch cancel short term orders using marketId to clobPairId translation.
   *
   * @param subaccount The subaccount to cancel the order from
   * @param shortTermOrders The list of short term order batches to cancel with marketId
   * @param goodTilBlock The goodTilBlock of the order to cancel
   * @returns The transaction hash.
   */
  async batchCancelShortTermOrdersWithMarketId(
    subaccount: SubaccountInfo,
    shortTermOrders: OrderBatchWithMarketId[],
    goodTilBlock: number,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    const orderBatches = await Promise.all(
      shortTermOrders.map(async ({ marketId, clobPairId, clientIds }) => ({
        clobPairId: (
          clobPairId ??
          (await this.indexerClient.markets.getPerpetualMarkets(marketId)).markets[marketId]
        ).clobPairId,
        clientIds,
      })),
    );

    return this.validatorClient.post.batchCancelShortTermOrders(
      subaccount,
      orderBatches,
      goodTilBlock,
      broadcastMode,
    );
  }

  /**
   * @description Batch cancel short term orders using clobPairId.
   *
   * @param subaccount The subaccount to cancel the order from
   * @param shortTermOrders The list of short term order batches to cancel with clobPairId
   * @param goodTilBlock The goodTilBlock of the order to cancel
   * @returns The transaction hash.
   */
  async batchCancelShortTermOrdersWithClobPairId(
    subaccount: SubaccountInfo,
    shortTermOrders: OrderBatch[],
    goodTilBlock: number,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    return this.validatorClient.post.batchCancelShortTermOrders(
      subaccount,
      shortTermOrders,
      goodTilBlock,
      broadcastMode,
    );
  }

  /**
   * @description Transfer from a subaccount to another subaccount
   *
   * @param subaccount The subaccount to transfer from
   * @param recipientAddress The recipient address
   * @param recipientSubaccountNumber The recipient subaccount number
   * @param amount The amount to transfer
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The transaction hash.
   */
  async transferToSubaccount(
    subaccount: SubaccountInfo,
    recipientAddress: string,
    recipientSubaccountNumber: number,
    amount: string,
    memo?: string,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    const msgs: Promise<EncodeObject[]> = new Promise((resolve) => {
      const msg = this.transferToSubaccountMessage(
        subaccount,
        recipientAddress,
        recipientSubaccountNumber,
        amount,
      );
      resolve([msg]);
    });
    return this.send(
      subaccount,
      () => msgs,
      false,
      undefined,
      memo,
      broadcastMode ?? Method.BroadcastTxCommit,
    );
  }

  /**
   * @description Create message to transfer from a subaccount to another subaccount
   *
   * @param subaccount The subaccount to transfer from
   * @param recipientAddress The recipient address
   * @param recipientSubaccountNumber The recipient subaccount number
   * @param amount The amount to transfer
   *
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The message
   */
  transferToSubaccountMessage(
    subaccount: SubaccountInfo,
    recipientAddress: string,
    recipientSubaccountNumber: number,
    amount: string,
  ): EncodeObject {
    const validatorClient = this._validatorClient;
    if (validatorClient === undefined) {
      throw new Error('validatorClient not set');
    }
    const quantums = parseUnits(amount, this.getQuoteDecimals());

    // Remove Long.MAX_VALUE check - Uint8Array can represent arbitrarily large integers
    // This allows support for tokens with high decimal places (e.g., 18 decimals)
    if (quantums < 0) {
      throw new Error('amount must be positive');
    }

    // Directly pass BigInt to avoid Long overflow for large values
    return this.validatorClient.post.composer.composeMsgTransfer(
      subaccount.address,
      subaccount.subaccountNumber,
      recipientAddress,
      recipientSubaccountNumber,
      0,
      quantums, // Pass BigInt directly instead of converting to Long
    );
  }

  /**
   * @description Deposit from wallet to subaccount
   *
   * @param subaccount The subaccount to deposit to
   * @param amount The amount to deposit
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The transaction hash.
   */
  async depositToSubaccount(
    subaccount: SubaccountInfo,
    amount: string,
    memo?: string,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    const msgs: Promise<EncodeObject[]> = new Promise((resolve) => {
      const msg = this.depositToSubaccountMessage(subaccount, amount);
      resolve([msg]);
    });
    return this.validatorClient.post.send(subaccount, () => msgs, false, undefined, memo);
  }

  /**
   * @description Create message to deposit from wallet to subaccount
   *
   * @param subaccount The subaccount to deposit to
   * @param amount The amount to deposit
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The message
   */
  depositToSubaccountMessage(subaccount: SubaccountInfo, amount: string): EncodeObject {
    const validatorClient = this._validatorClient;
    if (validatorClient === undefined) {
      throw new Error('validatorClient not set');
    }
    const quantums = parseUnits(amount, this.getQuoteDecimals());
    // Note: With bigint-based Long, we can handle much larger values than the original Long.MAX_VALUE
    // The check is kept for backward compatibility but now supports 18+ decimal precision
    if (quantums < 0) {
      throw new Error('amount must be positive');
    }

    return this.validatorClient.post.composer.composeMsgDepositToSubaccount(
      subaccount.address,
      subaccount.subaccountNumber,
      0,
      Long.fromString(quantums.toString()),
    );
  }

  /**
   * @description Withdraw from subaccount to wallet
   *
   * @param subaccount The subaccount to withdraw from
   * @param amount The amount to withdraw
   * @param recipient The recipient address, default to subaccount address
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The transaction hash
   */
  async withdrawFromSubaccount(
    subaccount: SubaccountInfo,
    amount: string,
    recipient?: string,
    memo?: string,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    const msgs: Promise<EncodeObject[]> = new Promise((resolve) => {
      const msg = this.withdrawFromSubaccountMessage(subaccount, amount, recipient);
      resolve([msg]);
    });
    return this.send(subaccount, () => msgs, false, undefined, memo);
  }

  /**
   * @description Create message to withdraw from subaccount to wallet
   * with human readable input.
   *
   * @param subaccount The subaccount to withdraw from
   * @param amount The amount to withdraw
   * @param recipient The recipient address
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The message
   */
  withdrawFromSubaccountMessage(
    subaccount: SubaccountInfo,
    amount: string,
    recipient?: string,
  ): EncodeObject {
    const validatorClient = this._validatorClient;
    if (validatorClient === undefined) {
      throw new Error('validatorClient not set');
    }
    const quantums = parseUnits(amount, this.getQuoteDecimals());
    // Note: With bigint-based Long, we can handle much larger values than the original Long.MAX_VALUE
    // The check is kept for backward compatibility but now supports 18+ decimal precision
    if (quantums < 0) {
      throw new Error('amount must be positive');
    }

    return this.validatorClient.post.composer.composeMsgWithdrawFromSubaccount(
      subaccount.address,
      subaccount.subaccountNumber,
      0,
      Long.fromString(quantums.toString()),
      recipient,
    );
  }

  /**
   * @description Bridge transfer (cross-chain transfer) from subaccount to another chain
   *
   * @param subaccount The subaccount to transfer from
   * @param destinationChainId The destination chain ID (e.g., 'ethereum-1', 'arbitrum-1')
   * @param receiveAddress The receiving address on the destination chain
   * @param amount The amount to transfer (human readable, e.g., "100.50")
   * @param assetId The asset ID to transfer (required)
   * @param atomicResolution The atomic resolution for quantums conversion (required, e.g., -6 for USDC, -8 for most other assets)
   * @param memo Optional memo for the transaction
   * @param broadcastMode Broadcast mode (default: BroadcastTxCommit)
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * @returns The transaction response
   */
  async bridgeTransfer(
    subaccount: SubaccountInfo,
    destinationChainId: string,
    receiveAddress: string,
    amount: string,
    assetId: number,
    atomicResolution: number,
    memo?: string,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    const msgs: Promise<EncodeObject[]> = new Promise((resolve) => {
      console.log('bridgeTransferMessage', {
        subaccount,
        destinationChainId,
        receiveAddress,
        amount,
        assetId,
        atomicResolution,
      });

      const msg = this.bridgeTransferMessage(
        subaccount,
        destinationChainId,
        receiveAddress,
        amount,
        assetId,
        atomicResolution,
      );

      console.log('bridgeTransferMessage', msg);

      resolve([msg]);
    });
    return this.send(
      subaccount,
      () => msgs,
      false,
      undefined,
      memo,
      broadcastMode ?? Method.BroadcastTxCommit,
    );
  }

  /**
   * @description Create message for bridge transfer (cross-chain transfer)
   *
   * @param subaccount The subaccount to transfer from
   * @param destinationChainId The destination chain ID
   * @param receiveAddress The receiving address on the destination chain
   * @param amount The amount to transfer (human readable)
   * @param assetId The asset ID to transfer (required)
   * @param atomicResolution The atomic resolution for quantums conversion (required, e.g., -6 for USDC, -8 for most other assets)
   *                         Example: atomicResolution = -6 means 10^6 quantums = 1 unit
   *
   * @throws Error if validatorClient is not set or amount is invalid
   * @returns The encoded message
   */
  bridgeTransferMessage(
    subaccount: SubaccountInfo,
    destinationChainId: string,
    receiveAddress: string,
    amount: string,
    assetId: number,
    atomicResolution: number,
  ): EncodeObject {
    const validatorClient = this._validatorClient;
    if (validatorClient === undefined) {
      throw new Error('validatorClient not set');
    }

    // 将 atomicResolution（负数）转换为 decimals（正数）
    // 例如：atomicResolution = -6 → decimals = 6
    //      atomicResolution = -18 → decimals = 18
    const decimals = -atomicResolution;

    // 使用 parseUnits 处理大整数，支持任意精度（包括 18 位）
    // parseUnits 返回 BigInt，可以安全处理 10^18 这样的超大整数
    const quantums = parseUnits(amount, decimals);

    return this.validatorClient.post.composer.composeMsgBridgeTransfer(
      subaccount.address,
      subaccount.subaccountNumber,
      assetId,
      Long.fromString(quantums.toString()), // 将 BigInt 转换为字符串，然后转换为 Long
      destinationChainId,
      receiveAddress,
    );
  }

  /**
   * @description Create message to send chain token from subaccount to wallet
   * with human readable input.
   *
   * @param subaccount The subaccount to withdraw from
   * @param amount The amount to withdraw
   * @param recipient The recipient address
   *
   * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
   * at any point.
   * @returns The message
   */
  sendTokenMessage(wallet: LocalWallet, amount: string, recipient: string): EncodeObject {
    const address = wallet.address;
    if (address === undefined) {
      throw new UserError('wallet address is not set. Call connectWallet() first');
    }
    const { CHAINTOKEN_DENOM: chainTokenDenom, CHAINTOKEN_DECIMALS: chainTokenDecimals } =
      this._validatorClient?.config.denoms || {};

    if (chainTokenDenom === undefined || chainTokenDecimals === undefined) {
      throw new Error('Chain token denom not set in validator config');
    }

    const quantums = parseUnits(amount, chainTokenDecimals);

    return this.validatorClient.post.composer.composeMsgSendToken(
      address,
      recipient,
      chainTokenDenom,
      quantums.toString(),
    );
  }

  async signPlaceOrder(
    subaccount: SubaccountInfo,
    marketId: string,
    type: OrderType,
    side: OrderSide,
    price: number,
    // trigger_price: number,   // not used for MARKET and LIMIT
    size: number,
    clientId: number,
    timeInForce: OrderTimeInForce,
    goodTilTimeInSeconds: number,
    execution: OrderExecution,
    postOnly: boolean,
    reduceOnly: boolean,
  ): Promise<string> {
    const msgs: Promise<EncodeObject[]> = new Promise((resolve) => {
      const msg = this.placeOrderMessage(
        subaccount,
        marketId,
        type,
        side,
        price,
        // trigger_price: number,   // not used for MARKET and LIMIT
        size,
        clientId,
        timeInForce,
        goodTilTimeInSeconds,
        execution,
        postOnly,
        reduceOnly,
        undefined, // triggerPrice
        undefined, // marketInfo
        undefined, // currentHeight
        undefined, // goodTilBlock
        undefined, // agentAddress
      );
      msg
        .then((it) => resolve([it]))
        .catch((err) => {
          console.log(err);
        });
    });
    const signature = await this.sign(subaccount, () => msgs, true);

    return Buffer.from(signature).toString('base64');
  }

  async signCancelOrder(
    subaccount: SubaccountInfo,
    clientId: number,
    orderFlags: OrderFlags,
    clobPairId: number,
    goodTilBlock: number,
    goodTilBlockTime: number,
    agentAddress?: string,
  ): Promise<string> {
    const msgs: Promise<EncodeObject[]> = new Promise((resolve) => {
      const msg = this.validatorClient.post.composer.composeMsgCancelOrder(
        subaccount.address,
        subaccount.subaccountNumber,
        clientId,
        clobPairId,
        orderFlags,
        goodTilBlock,
        goodTilBlockTime,
        agentAddress || '',
      );
      resolve([msg]);
    });
    const signature = await this.sign(subaccount, () => msgs, true);

    return Buffer.from(signature).toString('base64');
  }

  /**
   * @description Register an agent wallet for the master wallet.
   *
   * @param masterSubaccount The master wallet subaccount (must be subaccount 0)
   * @param agentAddress The agent wallet address to authorize
   * @param agentName Optional name for the agent (max 20 characters)
   * @param expiryTimestamp Optional custom expiry timestamp (Unix timestamp in seconds). If 0, uses default (180 days)
   * @param broadcastMode Optional broadcast mode
   * @returns The transaction hash.
   */
  async registerAgent(
    masterSubaccount: SubaccountInfo,
    agentAddress: string,
    agentName: string = '',
    expiryTimestamp: Long = Long.ZERO,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    return this.validatorClient.post.registerAgent(
      masterSubaccount,
      agentAddress,
      agentName,
      expiryTimestamp,
      broadcastMode,
    );
  }

  /**
   * @description Remove an agent wallet authorization.
   *
   * @param masterSubaccount The master wallet subaccount (must be subaccount 0)
   * @param agentAddress The agent wallet address to remove
   * @param broadcastMode Optional broadcast mode
   * @returns The transaction hash.
   */
  async removeAgent(
    masterSubaccount: SubaccountInfo,
    agentAddress: string,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    return this.validatorClient.post.removeAgent(masterSubaccount, agentAddress, broadcastMode);
  }

  /**
   * @description Place an order using an agent wallet.
   *
   * @param masterSubaccount The master wallet subaccount (order will be placed on this subaccount)
   * @param agentSubaccount The agent wallet subaccount (must be registered and active)
   * @param marketId The market to place the order on
   * @param type The order type
   * @param side The order side
   * @param price The order price
   * @param size The order size
   * @param clientId The client id
   * @param timeInForce The time in force
   * @param goodTilTimeInSeconds The good til time in seconds (for stateful orders)
   * @param execution The execution type
   * @param postOnly Whether the order is post only
   * @param reduceOnly Whether the order is reduce only
   * @param broadcastMode Optional broadcast mode
   * @returns The transaction hash.
   */
  async placeOrderWithAgent(
    masterSubaccount: SubaccountInfo,
    agentSubaccount: SubaccountInfo,
    marketId: string,
    type: OrderType,
    side: OrderSide,
    price: number,
    size: number,
    clientId: number,
    timeInForce: OrderTimeInForce,
    goodTilTimeInSeconds: number,
    execution: OrderExecution,
    postOnly: boolean,
    reduceOnly: boolean,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    return this.validatorClient.post.send(
      agentSubaccount,
      async () => {
        const msg = await this.placeOrderMessage(
          masterSubaccount,
          marketId,
          type,
          side,
          price,
          size,
          clientId,
          timeInForce,
          goodTilTimeInSeconds,
          execution,
          postOnly,
          reduceOnly,
          undefined, // triggerPrice
          undefined, // marketInfo
          undefined, // currentHeight
          undefined, // goodTilBlock
          agentSubaccount.address,
        );
        return [msg];
      },
      true,
      undefined,
      undefined,
      broadcastMode,
    );
  }

  /**
   * @description Cancel an order using an agent wallet.
   *
   * @param masterSubaccount The master wallet subaccount (order belongs to this subaccount)
   * @param agentSubaccount The agent wallet subaccount (must be registered and active)
   * @param clientId The client id of the order to cancel
   * @param orderFlags The order flags of the order to cancel
   * @param marketId The market to cancel the order on
   * @param goodTilBlock The goodTilBlock of the order to cancel (for SHORT_TERM orders)
   * @param goodTilTimeInSeconds The goodTilTimeInSeconds of the order to cancel (for stateful orders)
   * @param broadcastMode Optional broadcast mode
   * @returns The transaction hash.
   */
  async cancelOrderWithAgent(
    masterSubaccount: SubaccountInfo,
    agentSubaccount: SubaccountInfo,
    clientId: number,
    orderFlags: OrderFlags,
    marketId: string,
    goodTilBlock?: number,
    goodTilTimeInSeconds?: number,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    const marketsResponse = await this.indexerClient.markets.getPerpetualMarkets(marketId);
    const market = marketsResponse.markets[marketId];
    const clobPairId = market.clobPairId;

    if (!verifyOrderFlags(orderFlags)) {
      throw new Error(`Invalid order flags: ${orderFlags}`);
    }

    let goodTilBlockTime: number | undefined;
    if (isStatefulOrder(orderFlags)) {
      if (goodTilTimeInSeconds === undefined || goodTilTimeInSeconds === 0) {
        throw new Error('goodTilTimeInSeconds must be set for LONG_TERM or CONDITIONAL order');
      }
      if (goodTilBlock !== 0) {
        throw new Error(
          'goodTilBlock should be zero since LONG_TERM or CONDITIONAL orders ' +
            'use goodTilTimeInSeconds instead of goodTilBlock.',
        );
      }
      goodTilBlockTime = this.calculateGoodTilBlockTime(goodTilTimeInSeconds);
    } else {
      if (goodTilBlock === undefined || goodTilBlock === 0) {
        throw new Error('goodTilBlock must be non-zero for SHORT_TERM orders');
      }
      if (goodTilTimeInSeconds !== undefined && goodTilTimeInSeconds !== 0) {
        throw new Error(
          'goodTilTimeInSeconds should be zero since SHORT_TERM orders use goodTilBlock instead of goodTilTimeInSeconds.',
        );
      }
    }

    return this.validatorClient.post.send(
      agentSubaccount,
      async () => {
        const msg = await this.validatorClient.post.cancelOrderMsg(
          masterSubaccount.address,
          masterSubaccount.subaccountNumber,
          clientId,
          orderFlags,
          clobPairId,
          goodTilBlock,
          goodTilBlockTime,
          agentSubaccount.address,
        );
        return [msg];
      },
      true,
      undefined,
      undefined,
      broadcastMode,
    );
  }

  async bulkCancelAndTransferAndPlaceStatefulOrders(
    subaccount: SubaccountInfo,
    // these are executed in this order, all in one block, and all succeed or all fail
    cancelOrderPayloads: CancelRawOrderPayload[],
    transferToSubaccountPayload: TransferToSubaccountPayload | undefined,
    placeOrderPayloads: PlaceOrderPayload[],
    memo?: string,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    if (cancelOrderPayloads.some((c) => c.orderFlags === OrderFlags.SHORT_TERM)) {
      throw new Error('SHORT_TERM cancels cannot be batched');
    }

    if (
      placeOrderPayloads.some(
        (placePayload) =>
          calculateOrderFlags(placePayload.type, placePayload.timeInForce) ===
          OrderFlags.SHORT_TERM,
      )
    ) {
      throw new Error('SHORT_TERM orders cannot be batched');
    }

    const account: Promise<Account> = this.validatorClient.post.account(
      subaccount.address,
      undefined,
    );

    const msgs: Promise<EncodeObject[]> = (async () => {
      const cancelMsgPromises = cancelOrderPayloads.map(async (cancelPayload) => {
        const cancelSubaccount = subaccount.cloneWithSubaccount(cancelPayload.subaccountNumber);
        return this.validatorClient.post.cancelOrderMsg(
          cancelSubaccount.address,
          cancelSubaccount.subaccountNumber,
          cancelPayload.clientId,
          cancelPayload.orderFlags,
          cancelPayload.clobPairId,
          cancelPayload.goodTilBlock,
          cancelPayload.goodTilBlockTime,
        );
      });

      const transferMsg = (() => {
        if (transferToSubaccountPayload == null) {
          return undefined;
        }
        const transferSubaccount = subaccount.cloneWithSubaccount(
          transferToSubaccountPayload.sourceSubaccountNumber,
        );
        return this.transferToSubaccountMessage(
          transferSubaccount,
          transferSubaccount.address,
          transferToSubaccountPayload.recipientSubaccountNumber,
          transferToSubaccountPayload.transferAmount,
        );
      })();

      const placeOrderMsgPromises = placeOrderPayloads.map((placePayload) => {
        const placeSubaccount = subaccount.cloneWithSubaccount(placePayload.subaccountNumber);
        return this.placeOrderMessage(
          placeSubaccount,
          placePayload.marketId,
          placePayload.type,
          placePayload.side,
          placePayload.price,
          placePayload.size,
          placePayload.clientId,
          placePayload.timeInForce,
          placePayload.goodTilTimeInSeconds,
          placePayload.execution,
          placePayload.postOnly,
          placePayload.reduceOnly,
          placePayload.triggerPrice,
          placePayload.marketInfo,
          placePayload.currentHeight,
          placePayload.goodTilBlock,
          undefined, // agentAddress - not supported in bulk operations
        );
      });

      return Promise.all([
        ...cancelMsgPromises,
        ...(transferMsg != null ? [transferMsg] : []),
        ...placeOrderMsgPromises,
      ]);
    })();

    return this.send(
      subaccount,
      () => msgs,
      true,
      undefined,
      memo,
      broadcastMode ?? Method.BroadcastTxCommit,
      () => account,
    );
  }

  // vaults

  async depositToMegavault(
    subaccount: SubaccountInfo,
    amountUsdc: number,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    return this.validatorClient.post.depositToMegavault(
      subaccount,
      bigIntToBytes(calculateVaultQuantums(amountUsdc)),
      broadcastMode,
    );
  }

  depositToMegavaultMessage(subaccount: SubaccountInfo, amountUsdc: number): EncodeObject {
    return this.validatorClient.post.depositToMegavaultMsg(
      subaccount.address,
      subaccount.subaccountNumber,
      bigIntToBytes(calculateVaultQuantums(amountUsdc)),
    );
  }

  async withdrawFromMegavault(
    subaccount: SubaccountInfo,
    shares: number,
    minAmount: number,
    broadcastMode?: BroadcastMode,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    // 使用 BigNumber 处理 shares，避免大数字转换为科学计数法
    const sharesBN = BigNumber(shares).integerValue(BigNumber.ROUND_FLOOR);
    return this.validatorClient.post.withdrawFromMegavault(
      subaccount,
      bigIntToBytes(BigInt(sharesBN.toFixed(0, BigNumber.ROUND_FLOOR))),
      bigIntToBytes(calculateVaultQuantums(minAmount)),
      broadcastMode,
    );
  }

  withdrawFromMegavaultMessage(
    subaccount: SubaccountInfo,
    shares: number,
    minAmount: number,
  ): EncodeObject {
    // 使用 BigNumber 处理 shares，避免大数字转换为科学计数法
    const sharesBN = BigNumber(shares).integerValue(BigNumber.ROUND_FLOOR);
    return this.validatorClient.post.withdrawFromMegavaultMsg(
      subaccount.address,
      subaccount.subaccountNumber,
      bigIntToBytes(BigInt(sharesBN.toFixed(0, BigNumber.ROUND_FLOOR))),
      bigIntToBytes(calculateVaultQuantums(minAmount)),
    );
  }

  /**
   * @description Submit a governance proposal to add a new market.
   *
   * @param params Parameters neeeded to create a new market.
   * @param title Title of the gov proposal.
   * @param summary Summary of the gov proposal.
   * @param initialDepositAmount Initial deposit amount of the gov proposal.
   * @param proposer proposer of the gov proposal.
   *
   * @returns the transaction hash.
   */
  async submitGovAddNewMarketProposal(
    wallet: LocalWallet,
    params: GovAddNewMarketParams,
    title: string,
    summary: string,
    initialDepositAmount: string,
    memo?: string,
    metadata?: string,
    expedited?: boolean,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    const msg: Promise<EncodeObject[]> = new Promise((resolve) => {
      const composer = this.validatorClient.post.composer;
      const registry = generateRegistry();
      const msgs: EncodeObject[] = [];

      const isDydxUsd = params.ticker.toLowerCase() === 'dydx-usd';

      // x/prices.MsgCreateOracleMarket
      const createOracleMarket = composer.composeMsgCreateOracleMarket(
        params.id,
        params.ticker,
        params.priceExponent,
        params.minExchanges,
        params.minPriceChange,
        params.exchangeConfigJson,
      );

      // x/perpetuals.MsgCreatePerpetual
      const createPerpetual = composer.composeMsgCreatePerpetual(
        params.id,
        isDydxUsd ? 1000001 : params.id,
        params.ticker,
        params.atomicResolution,
        params.liquidityTier,
        params.marketType,
      );

      // x/clob.MsgCreateClobPair
      const createClobPair = composer.composeMsgCreateClobPair(
        params.id,
        params.id,
        params.quantumConversionExponent,
        params.stepBaseQuantums,
        params.subticksPerTick,
      );

      // x/clob.MsgUpdateClobPair
      const updateClobPair = composer.composeMsgUpdateClobPair(
        params.id,
        params.id,
        params.quantumConversionExponent,
        params.stepBaseQuantums,
        params.subticksPerTick,
      );

      // x/delaymsg.MsgDelayMessage
      const delayMessage = composer.composeMsgDelayMessage(
        // IMPORTANT: must wrap messages in Any type to fit into delaymsg.
        composer.wrapMessageAsAny(registry, updateClobPair),
        params.delayBlocks,
      );

      // The order matters.
      if (!isDydxUsd) {
        msgs.push(createOracleMarket);
      }
      msgs.push(createPerpetual);
      msgs.push(createClobPair);
      msgs.push(delayMessage);

      // x/gov.v1.MsgSubmitProposal
      const submitProposal = composer.composeMsgSubmitProposal(
        title,
        initialDepositAmount,
        this.validatorClient.config.denoms, // use the client denom.
        summary,
        // IMPORTANT: must wrap messages in Any type for gov's submit proposal.
        composer.wrapMessageArrAsAny(registry, msgs),
        wallet.address!, // proposer
        metadata,
        expedited,
      );

      resolve([submitProposal]);
    });

    return this.send(SubaccountInfo.forLocalWallet(wallet), () => msg, false, undefined, memo);
  }

  async createMarketPermissionless(
    subaccount: SubaccountInfo,
    ticker: string,
    broadcastMode?: BroadcastMode,
    gasAdjustment?: number,
    memo?: string,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    return this.validatorClient.post.createMarketPermissionless(
      ticker,
      subaccount,
      broadcastMode,
      gasAdjustment,
      memo,
    );
  }

  async addAuthenticator(
    subaccount: SubaccountInfo,
    authenticatorType: AuthenticatorType,
    data: Uint8Array,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    // Validate the provided authenticators before sending to the validator
    const authenticator: Authenticator = {
      type: authenticatorType,
      config: JSON.parse(new TextDecoder().decode(data)),
    };
    if (!this.validateAuthenticator(authenticator)) {
      throw new Error(
        'Invalid authenticator, please ensure the authenticator permissions are correct',
      );
    }

    return this.validatorClient.post.addAuthenticator(subaccount, authenticatorType, data);
  }

  async removeAuthenticator(
    subaccount: SubaccountInfo,
    id: string,
  ): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx> {
    return this.validatorClient.post.removeAuthenticator(subaccount, Long.fromString(id));
  }

  async getAuthenticators(address: string): Promise<GetAuthenticatorsResponse> {
    return this.validatorClient.get.getAuthenticators(address);
  }

  validateAuthenticator(authenticator: Authenticator): boolean {
    const decodeCompositeConfig = (config: unknown): Authenticator[] | null => {
      if (Array.isArray(config)) {
        return config as Authenticator[];
      }
      if (typeof config === 'string') {
        try {
          const decoded = Buffer.from(config, 'base64').toString('utf8');
          const parsed = JSON.parse(decoded);
          return Array.isArray(parsed) ? (parsed as Authenticator[]) : null;
        } catch {
          return null;
        }
      }
      return null;
    };

    const checkAuthenticator = (auth: Authenticator): boolean => {
      if (auth.type === AuthenticatorType.SIGNATURE_VERIFICATION) {
        return true;
      }

      if (auth.type === AuthenticatorType.ANY_OF || auth.type === AuthenticatorType.ALL_OF) {
        const subAuthenticators = decodeCompositeConfig(auth.config);
        if (subAuthenticators == null) {
          return false;
        }
        if (auth.type === AuthenticatorType.ANY_OF) {
          return subAuthenticators.every((nested) => checkAuthenticator(nested));
        }
        return subAuthenticators.some((nested) => checkAuthenticator(nested));
      }

      return false;
    };

    return checkAuthenticator(authenticator);
  }
}
