import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import {
  MsgAddAuthenticator,
  MsgRemoveAuthenticator,
} from '@dydxprotocol/v4-proto/src/codegen/h2x/accountplus/tx';
import { MsgRegisterAffiliate } from '@dydxprotocol/v4-proto/src/codegen/h2x/affiliates/tx';
import {
  MsgPlaceOrder,
  MsgCancelOrder,
  MsgCreateClobPair,
  MsgUpdateClobPair,
  MsgBatchCancel,
} from '@dydxprotocol/v4-proto/src/codegen/h2x/clob/tx';
import { Order, OrderId, TwapParameters } from '@dydxprotocol/v4-proto/src/codegen/h2x/clob/order';
import { SubaccountId } from '@dydxprotocol/v4-proto/src/codegen/h2x/subaccounts/subaccount';
import { MsgDelayMessage } from '@dydxprotocol/v4-proto/src/codegen/h2x/delaymsg/tx';
import { MsgCreateMarketPermissionless } from '@dydxprotocol/v4-proto/src/codegen/h2x/listing/tx';
import { MsgCreatePerpetual } from '@dydxprotocol/v4-proto/src/codegen/h2x/perpetuals/tx';
import { MsgCreateOracleMarket } from '@dydxprotocol/v4-proto/src/codegen/h2x/prices/tx';
import {
  MsgWithdrawFromSubaccount,
  MsgDepositToSubaccount,
} from '@dydxprotocol/v4-proto/src/codegen/h2x/sending/transfer';
import { MsgCreateBridgeTransfer, Transfer, MsgCreateTransfer } from '../modules/composer';
import {
  MsgDepositToMegavault,
  MsgWithdrawFromMegavault,
} from '@dydxprotocol/v4-proto/src/codegen/h2x/vault/tx';
import { BinaryWriter } from 'cosmjs-types/binary';
import {
  TYPE_URL_MSG_PLACE_ORDER,
  TYPE_URL_MSG_CANCEL_ORDER,
  TYPE_URL_MSG_CREATE_CLOB_PAIR,
  TYPE_URL_MSG_UPDATE_CLOB_PAIR,
  TYPE_URL_MSG_DELAY_MESSAGE,
  TYPE_URL_MSG_CREATE_PERPETUAL,
  TYPE_URL_MSG_CREATE_ORACLE_MARKET,
  TYPE_URL_MSG_CREATE_TRANSFER,
  TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT,
  TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT,
  TYPE_URL_BATCH_CANCEL,
  TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT,
  TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT,
  TYPE_URL_MSG_REGISTER_AFFILIATE,
  TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS,
  TYPE_URL_MSG_ADD_AUTHENTICATOR,
  TYPE_URL_MSG_REMOVE_AUTHENTICATOR,
  TYPE_URL_MSG_CREATE_BRIDGE_TRANSFER,
} from '../constants';
import { Long } from '../../lib/long';
import { bigIntToBytes } from '../../lib/helpers';

export const registry: ReadonlyArray<[string, GeneratedType]> = [];

// Transfer 编码解码器
const TransferCodec = {
  encode(message: Transfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    // 编码 sender (field 1, SubaccountId)
    if (message.sender) {
      const senderWriter = writer.uint32(10).fork();
      if (message.sender.owner) {
        senderWriter.uint32(10).string(message.sender.owner);
      }
      if (message.sender.number !== undefined) {
        senderWriter.uint32(16).uint32(message.sender.number);
      }
      senderWriter.ldelim();
    }

    // 编码 recipient (field 2, SubaccountId)
    if (message.recipient) {
      const recipientWriter = writer.uint32(18).fork();
      if (message.recipient.owner) {
        recipientWriter.uint32(10).string(message.recipient.owner);
      }
      if (message.recipient.number !== undefined) {
        recipientWriter.uint32(16).uint32(message.recipient.number);
      }
      recipientWriter.ldelim();
    }

    // 编码 assetId (field 3, uint32)
    if (message.assetId !== undefined) {
      writer.uint32(24).uint32(message.assetId);
    }

    // 编码 amount (field 4, bytes) - 使用 SerializableInt 格式
    if (message.amount && message.amount.length > 0) {
      writer.uint32(34).bytes(message.amount);
    }

    return writer;
  },
  decode: (input: any) => input as Transfer,
  fromPartial: (object: Partial<Transfer>) => ({
    sender: object.sender ?? { owner: '', number: 0 },
    recipient: object.recipient ?? { owner: '', number: 0 },
    assetId: object.assetId ?? 0,
    amount: object.amount ?? new Uint8Array(),
  }),
} as any;

// MsgCreateTransfer 编码解码器
const MsgCreateTransferCodec = {
  encode(message: MsgCreateTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    // 编码 transfer (field 1, Transfer)
    if (message.transfer) {
      const transferWriter = writer.uint32(10).fork();
      TransferCodec.encode(message.transfer, transferWriter);
      transferWriter.ldelim();
    }

    return writer;
  },
  decode: (input: any) => input as MsgCreateTransfer,
  fromPartial: (object: Partial<MsgCreateTransfer>) => ({
    transfer: object.transfer
      ? TransferCodec.fromPartial(object.transfer)
      : TransferCodec.fromPartial({}),
  }),
} as any;

const MsgCreateBridgeTransferCodec = {
  encode(
    message: MsgCreateBridgeTransfer,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    // 编码 senderAddress (field 1, string)
    if (message.senderAddress) {
      writer.uint32(10).string(message.senderAddress);
    }

    // 编码 sender (field 2, SubaccountId)
    if (message.sender) {
      const senderWriter = writer.uint32(18).fork();
      if (message.sender.owner) {
        senderWriter.uint32(10).string(message.sender.owner);
      }
      if (message.sender.number !== undefined) {
        senderWriter.uint32(16).uint32(message.sender.number);
      }
      senderWriter.ldelim();
    }

    // 编码 assetId (field 3, int32)
    if (message.assetId !== undefined) {
      writer.uint32(24).int32(message.assetId);
    }

    // 编码 quantums (field 4, bytes) - 使用 SerializableInt 格式
    // 服务器期望 bytes wire type，而不是 varint
    // 注意：即使 quantums 是 0 或 BigInt(0)，也必须编码
    if (message.quantums !== undefined && message.quantums !== null) {
      // 将 quantums 转换为 BigInt，然后转换为 SerializableInt 格式的 bytes
      let quantumsBigInt: bigint;
      if (typeof message.quantums === 'bigint') {
        quantumsBigInt = message.quantums;
      } else if (typeof message.quantums === 'string') {
        quantumsBigInt = BigInt(message.quantums);
      } else if (typeof message.quantums === 'object' && 'toString' in message.quantums) {
        // Long 类型 - 转换为字符串再转换为 BigInt 以保持精度
        quantumsBigInt = BigInt(message.quantums.toString());
      } else {
        quantumsBigInt = BigInt(message.quantums);
      }
      const quantumsBytes = bigIntToBytes(quantumsBigInt);
      writer.uint32(34).bytes(quantumsBytes);
    } else {
      // 如果 quantums 未定义，编码默认值 0
      const quantumsBytes = bigIntToBytes(BigInt(0));
      writer.uint32(34).bytes(quantumsBytes);
    }

    // 编码 chainId (field 5, string)
    if (message.chainId) {
      writer.uint32(42).string(message.chainId);
    }

    // 编码 receiveAddress (field 6, string)
    if (message.receiveAddress) {
      writer.uint32(50).string(message.receiveAddress);
    }

    return writer; // 返回 writer，有 finish() 方法
  },
  decode: (input: any) => input as MsgCreateBridgeTransfer,
  fromPartial: (object: Partial<MsgCreateBridgeTransfer>) => ({
    senderAddress: object.senderAddress ?? '',
    sender: object.sender ?? { owner: '', number: 0 },
    assetId: object.assetId ?? 0,
    quantums: object.quantums ?? Long.fromInt(0),
    chainId: object.chainId ?? '',
    receiveAddress: object.receiveAddress ?? '',
  }),
} as any;

// Order 编码解码器 - 字段 3 (quantums) 和字段 4 (subticks) 使用 bytes (SerializableInt 格式)
const OrderCodec = {
  encode(message: Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    // 编码 orderId (field 1, OrderId)
    if (message.orderId) {
      const orderIdWriter = writer.uint32(10).fork();
      if (message.orderId.subaccountId) {
        const subaccountIdWriter = orderIdWriter.uint32(10).fork();
        if (message.orderId.subaccountId.owner) {
          subaccountIdWriter.uint32(10).string(message.orderId.subaccountId.owner);
        }
        if (message.orderId.subaccountId.number !== undefined) {
          subaccountIdWriter.uint32(16).uint32(message.orderId.subaccountId.number);
        }
        subaccountIdWriter.ldelim();
      }
      if (message.orderId.clientId !== undefined) {
        orderIdWriter.uint32(21).fixed32(message.orderId.clientId);
      }
      if (message.orderId.orderFlags !== undefined) {
        orderIdWriter.uint32(24).uint32(message.orderId.orderFlags);
      }
      if (message.orderId.clobPairId !== undefined) {
        orderIdWriter.uint32(32).uint32(message.orderId.clobPairId);
      }
      orderIdWriter.ldelim();
    }

    // 编码 side (field 2, int32)
    if (message.side !== undefined && message.side !== 0) {
      writer.uint32(16).int32(message.side);
    }

    // 编码 quantums (field 3, bytes) - 使用 SerializableInt 格式
    // 服务器期望 bytes wire type，而不是 varint
    // 注意：即使 quantums 是 0 或 BigInt(0)，也必须编码
    if (message.quantums !== undefined && message.quantums !== null) {
      let quantumsBigInt: bigint;
      if (typeof message.quantums === 'bigint') {
        quantumsBigInt = message.quantums;
      } else if (typeof message.quantums === 'string') {
        quantumsBigInt = BigInt(message.quantums);
      } else if (typeof message.quantums === 'object' && 'toString' in message.quantums) {
        // Long 类型 - 转换为字符串再转换为 BigInt 以保持精度
        quantumsBigInt = BigInt(message.quantums.toString());
      } else {
        quantumsBigInt = BigInt(message.quantums);
      }
      const quantumsBytes = bigIntToBytes(quantumsBigInt);
      writer.uint32(26).bytes(quantumsBytes);
    } else {
      // 如果 quantums 未定义，编码默认值 0
      const quantumsBytes = bigIntToBytes(BigInt(0));
      writer.uint32(26).bytes(quantumsBytes);
    }

    // 编码 subticks (field 4, bytes) - 使用 SerializableInt 格式
    // 服务器期望 bytes wire type，而不是 varint
    // 注意：即使 subticks 是 0 或 BigInt(0)，也必须编码
    if (message.subticks !== undefined && message.subticks !== null) {
      let subticksBigInt: bigint;
      if (typeof message.subticks === 'bigint') {
        subticksBigInt = message.subticks;
      } else if (typeof message.subticks === 'string') {
        subticksBigInt = BigInt(message.subticks);
      } else if (typeof message.subticks === 'object' && 'toString' in message.subticks) {
        // Long 类型 - 转换为字符串再转换为 BigInt 以保持精度
        subticksBigInt = BigInt(message.subticks.toString());
      } else {
        subticksBigInt = BigInt(message.subticks);
      }
      const subticksBytes = bigIntToBytes(subticksBigInt);
      writer.uint32(34).bytes(subticksBytes);
    } else {
      // 如果 subticks 未定义，编码默认值 0
      const subticksBytes = bigIntToBytes(BigInt(0));
      writer.uint32(34).bytes(subticksBytes);
    }

    // 编码 goodTilBlock (field 5, uint32, oneof)
    if (message.goodTilBlock !== undefined) {
      writer.uint32(40).uint32(message.goodTilBlock);
    }

    // 编码 goodTilBlockTime (field 6, fixed32, oneof)
    if (message.goodTilBlockTime !== undefined) {
      writer.uint32(53).fixed32(message.goodTilBlockTime);
    }

    // 编码 timeInForce (field 7, int32)
    if (message.timeInForce !== undefined && message.timeInForce !== 0) {
      writer.uint32(56).int32(message.timeInForce);
    }

    // 编码 reduceOnly (field 8, bool)
    if (message.reduceOnly === true) {
      writer.uint32(64).bool(message.reduceOnly);
    }

    // 编码 clientMetadata (field 9, uint32)
    if (message.clientMetadata !== undefined && message.clientMetadata !== 0) {
      writer.uint32(72).uint32(message.clientMetadata);
    }

    // 编码 conditionType (field 10, int32)
    if (message.conditionType !== undefined && message.conditionType !== 0) {
      writer.uint32(80).int32(message.conditionType);
    }

    // 编码 conditionalOrderTriggerSubticks (field 11, uint64)
    // 注意：这个字段可能也需要使用 bytes，但先保持 uint64 看看
    if (message.conditionalOrderTriggerSubticks !== undefined) {
      let triggerSubticksBigInt: bigint;
      if (typeof message.conditionalOrderTriggerSubticks === 'bigint') {
        triggerSubticksBigInt = message.conditionalOrderTriggerSubticks;
      } else if (typeof message.conditionalOrderTriggerSubticks === 'string') {
        triggerSubticksBigInt = BigInt(message.conditionalOrderTriggerSubticks);
      } else if (
        typeof message.conditionalOrderTriggerSubticks === 'object' &&
        'toString' in message.conditionalOrderTriggerSubticks
      ) {
        triggerSubticksBigInt = BigInt(message.conditionalOrderTriggerSubticks.toString());
      } else {
        triggerSubticksBigInt = BigInt(message.conditionalOrderTriggerSubticks);
      }
      const triggerSubticksBytes = bigIntToBytes(triggerSubticksBigInt);
      writer.uint32(90).bytes(triggerSubticksBytes);
    }

    // 编码 twapParameters (field 12, TwapParameters)
    if (message.twapParameters) {
      const twapWriter = writer.uint32(98).fork();
      if (message.twapParameters.duration !== undefined) {
        twapWriter.uint32(8).uint32(message.twapParameters.duration);
      }
      if (message.twapParameters.interval !== undefined) {
        twapWriter.uint32(16).uint32(message.twapParameters.interval);
      }
      if (message.twapParameters.priceTolerance !== undefined) {
        twapWriter.uint32(24).uint32(message.twapParameters.priceTolerance);
      }
      twapWriter.ldelim();
    }

    // 编码 builderCodeParameters (field 13, BuilderCodeParameters)
    if (message.builderCodeParameters) {
      const builderWriter = writer.uint32(106).fork();
      if (message.builderCodeParameters.builderAddress) {
        builderWriter.uint32(10).string(message.builderCodeParameters.builderAddress);
      }
      if (message.builderCodeParameters.feePpm !== undefined) {
        builderWriter.uint32(16).uint32(message.builderCodeParameters.feePpm);
      }
      builderWriter.ldelim();
    }

    // 编码 orderRouterAddress (field 14, string)
    if (message.orderRouterAddress) {
      writer.uint32(114).string(message.orderRouterAddress);
    }

    return writer;
  },
  decode: (input: any) => input as Order,
  fromPartial: (object: Partial<Order>) => ({
    orderId: object.orderId ?? {
      subaccountId: { owner: '', number: 0 },
      clientId: 0,
      orderFlags: 0,
      clobPairId: 0,
    },
    side: object.side ?? 0,
    quantums: object.quantums ?? BigInt(0),
    subticks: object.subticks ?? BigInt(0),
    goodTilBlock: object.goodTilBlock,
    goodTilBlockTime: object.goodTilBlockTime,
    timeInForce: object.timeInForce ?? 0,
    reduceOnly: object.reduceOnly ?? false,
    clientMetadata: object.clientMetadata ?? 0,
    conditionType: object.conditionType ?? 0,
    conditionalOrderTriggerSubticks: object.conditionalOrderTriggerSubticks ?? BigInt(0),
    twapParameters: object.twapParameters,
    builderCodeParameters: object.builderCodeParameters,
    orderRouterAddress: object.orderRouterAddress ?? '',
  }),
} as any;

// MsgPlaceOrder 编码解码器
const MsgPlaceOrderCodec = {
  encode(message: MsgPlaceOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    // 编码 order (field 1, Order)
    if (message.order) {
      const orderWriter = writer.uint32(10).fork();
      OrderCodec.encode(message.order, orderWriter);
      orderWriter.ldelim();
    }

    return writer;
  },
  decode: (input: any) => input as MsgPlaceOrder,
  fromPartial: (object: Partial<MsgPlaceOrder>) => ({
    order: object.order ? OrderCodec.fromPartial(object.order) : OrderCodec.fromPartial({}),
  }),
} as any;

export function generateRegistry(): Registry {
  return new Registry([
    // clob - 使用手动编码的版本
    [TYPE_URL_MSG_PLACE_ORDER, MsgPlaceOrderCodec as GeneratedType],
    [TYPE_URL_MSG_CANCEL_ORDER, MsgCancelOrder as GeneratedType],
    [TYPE_URL_BATCH_CANCEL, MsgBatchCancel as GeneratedType],
    [TYPE_URL_MSG_CREATE_CLOB_PAIR, MsgCreateClobPair as GeneratedType],
    [TYPE_URL_MSG_UPDATE_CLOB_PAIR, MsgUpdateClobPair as GeneratedType],

    // delaymsg
    [TYPE_URL_MSG_DELAY_MESSAGE, MsgDelayMessage as GeneratedType],

    // listing
    [TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS, MsgCreateMarketPermissionless as GeneratedType],

    // perpetuals
    [TYPE_URL_MSG_CREATE_PERPETUAL, MsgCreatePerpetual as GeneratedType],

    // prices
    [TYPE_URL_MSG_CREATE_ORACLE_MARKET, MsgCreateOracleMarket as GeneratedType],

    // vaults
    [TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT, MsgDepositToMegavault as GeneratedType],
    [TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT, MsgWithdrawFromMegavault as GeneratedType],

    // sending - 使用手动编码的版本
    [TYPE_URL_MSG_CREATE_TRANSFER, MsgCreateTransferCodec as GeneratedType],
    [TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT, MsgWithdrawFromSubaccount as GeneratedType],
    [TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT, MsgDepositToSubaccount as GeneratedType],
    [TYPE_URL_MSG_CREATE_BRIDGE_TRANSFER, MsgCreateBridgeTransferCodec as GeneratedType],

    // affiliates
    [TYPE_URL_MSG_REGISTER_AFFILIATE, MsgRegisterAffiliate as GeneratedType],

    // authentication
    [TYPE_URL_MSG_ADD_AUTHENTICATOR, MsgAddAuthenticator as GeneratedType],
    [TYPE_URL_MSG_REMOVE_AUTHENTICATOR, MsgRemoveAuthenticator as GeneratedType],

    // default types
    ...defaultRegistryTypes,
  ]);
}
