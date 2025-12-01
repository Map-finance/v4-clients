import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import {
  MsgAddAuthenticator,
  MsgRemoveAuthenticator,
} from '@dydxprotocol/v4-proto/src/codegen/dydxprotocol/accountplus/tx';
import { MsgRegisterAffiliate } from '@dydxprotocol/v4-proto/src/codegen/dydxprotocol/affiliates/tx';
import {
  MsgPlaceOrder,
  MsgCancelOrder,
  MsgCreateClobPair,
  MsgUpdateClobPair,
  MsgBatchCancel,
} from '@dydxprotocol/v4-proto/src/codegen/dydxprotocol/clob/tx';
import { MsgDelayMessage } from '@dydxprotocol/v4-proto/src/codegen/dydxprotocol/delaymsg/tx';
import { MsgCreateMarketPermissionless } from '@dydxprotocol/v4-proto/src/codegen/dydxprotocol/listing/tx';
import { MsgCreatePerpetual } from '@dydxprotocol/v4-proto/src/codegen/dydxprotocol/perpetuals/tx';
import { MsgCreateOracleMarket } from '@dydxprotocol/v4-proto/src/codegen/dydxprotocol/prices/tx';
import {
  MsgWithdrawFromSubaccount,
  MsgDepositToSubaccount,
} from '@dydxprotocol/v4-proto/src/codegen/dydxprotocol/sending/transfer';
import { MsgCreateBridgeTransfer, Transfer, MsgCreateTransfer } from '../modules/composer';
import {
  MsgDepositToMegavault,
  MsgWithdrawFromMegavault,
} from '@dydxprotocol/v4-proto/src/codegen/dydxprotocol/vault/tx';
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

export const registry: ReadonlyArray<[string, GeneratedType]> = [];

// Transfer 编码解码器
const TransferCodec = {
  encode(
    message: Transfer,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
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
  encode(
    message: MsgCreateTransfer,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
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

    // 编码 quantums (field 4, uint64)
    // 使用 toString() 保持 18+ 位精度，protobuf uint64 支持字符串参数
    if (message.quantums) {
      const quantumsValue =
        typeof message.quantums === 'object' && 'toString' in message.quantums
          ? message.quantums.toString()
          : String(message.quantums);
      writer.uint32(32).uint64(quantumsValue);
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

export function generateRegistry(): Registry {
  return new Registry([
    // clob
    [TYPE_URL_MSG_PLACE_ORDER, MsgPlaceOrder as GeneratedType],
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
