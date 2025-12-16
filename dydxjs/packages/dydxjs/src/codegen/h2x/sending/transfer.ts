//@ts-nocheck
import { SubaccountId, SubaccountIdAmino, SubaccountIdSDKType } from "../subaccounts/subaccount";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/** Transfer represents a single transfer between two subaccounts. */
export interface Transfer {
  /** The sender subaccount ID. */
  sender: SubaccountId;
  /** The recipient subaccount ID. */
  recipient: SubaccountId;
  /** Id of the asset to transfer. */
  assetId: number;
  /**
   * The amount of asset to transfer (in quantums)
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals)
   */
  amount: Uint8Array;
}
export interface TransferProtoMsg {
  typeUrl: "/h2x.sending.Transfer";
  value: Uint8Array;
}
/**
 * Transfer represents a single transfer between two subaccounts.
 * @name TransferAmino
 * @package h2x.sending
 * @see proto type: h2x.sending.Transfer
 */
export interface TransferAmino {
  /**
   * The sender subaccount ID.
   */
  sender?: SubaccountIdAmino;
  /**
   * The recipient subaccount ID.
   */
  recipient?: SubaccountIdAmino;
  /**
   * Id of the asset to transfer.
   */
  asset_id?: number;
  /**
   * The amount of asset to transfer (in quantums)
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals)
   */
  amount?: string;
}
export interface TransferAminoMsg {
  type: "/h2x.sending.Transfer";
  value: TransferAmino;
}
/** Transfer represents a single transfer between two subaccounts. */
export interface TransferSDKType {
  sender: SubaccountIdSDKType;
  recipient: SubaccountIdSDKType;
  asset_id: number;
  amount: Uint8Array;
}
/**
 * MsgDepositToSubaccount represents a single transfer from an `x/bank`
 * account to an `x/subaccounts` subaccount.
 */
export interface MsgDepositToSubaccount {
  /** The sender wallet address. */
  sender: string;
  /** The recipient subaccount ID. */
  recipient: SubaccountId;
  /** Id of the asset to transfer. */
  assetId: number;
  /**
   * The number of quantums of asset to transfer.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals)
   */
  quantums: Uint8Array;
}
export interface MsgDepositToSubaccountProtoMsg {
  typeUrl: "/h2x.sending.MsgDepositToSubaccount";
  value: Uint8Array;
}
/**
 * MsgDepositToSubaccount represents a single transfer from an `x/bank`
 * account to an `x/subaccounts` subaccount.
 * @name MsgDepositToSubaccountAmino
 * @package h2x.sending
 * @see proto type: h2x.sending.MsgDepositToSubaccount
 */
export interface MsgDepositToSubaccountAmino {
  /**
   * The sender wallet address.
   */
  sender?: string;
  /**
   * The recipient subaccount ID.
   */
  recipient?: SubaccountIdAmino;
  /**
   * Id of the asset to transfer.
   */
  asset_id?: number;
  /**
   * The number of quantums of asset to transfer.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals)
   */
  quantums?: string;
}
export interface MsgDepositToSubaccountAminoMsg {
  type: "/h2x.sending.MsgDepositToSubaccount";
  value: MsgDepositToSubaccountAmino;
}
/**
 * MsgDepositToSubaccount represents a single transfer from an `x/bank`
 * account to an `x/subaccounts` subaccount.
 */
export interface MsgDepositToSubaccountSDKType {
  sender: string;
  recipient: SubaccountIdSDKType;
  asset_id: number;
  quantums: Uint8Array;
}
/**
 * MsgWithdrawFromSubaccount represents a single transfer from an
 * `x/subaccounts` subaccount to an `x/bank` account.
 */
export interface MsgWithdrawFromSubaccount {
  /** The sender subaccount ID. */
  sender: SubaccountId;
  /** The recipient wallet address. */
  recipient: string;
  /** Id of the asset to transfer. */
  assetId: number;
  /**
   * The number of quantums of asset to transfer.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals)
   */
  quantums: Uint8Array;
}
export interface MsgWithdrawFromSubaccountProtoMsg {
  typeUrl: "/h2x.sending.MsgWithdrawFromSubaccount";
  value: Uint8Array;
}
/**
 * MsgWithdrawFromSubaccount represents a single transfer from an
 * `x/subaccounts` subaccount to an `x/bank` account.
 * @name MsgWithdrawFromSubaccountAmino
 * @package h2x.sending
 * @see proto type: h2x.sending.MsgWithdrawFromSubaccount
 */
export interface MsgWithdrawFromSubaccountAmino {
  /**
   * The sender subaccount ID.
   */
  sender?: SubaccountIdAmino;
  /**
   * The recipient wallet address.
   */
  recipient?: string;
  /**
   * Id of the asset to transfer.
   */
  asset_id?: number;
  /**
   * The number of quantums of asset to transfer.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals)
   */
  quantums?: string;
}
export interface MsgWithdrawFromSubaccountAminoMsg {
  type: "/h2x.sending.MsgWithdrawFromSubaccount";
  value: MsgWithdrawFromSubaccountAmino;
}
/**
 * MsgWithdrawFromSubaccount represents a single transfer from an
 * `x/subaccounts` subaccount to an `x/bank` account.
 */
export interface MsgWithdrawFromSubaccountSDKType {
  sender: SubaccountIdSDKType;
  recipient: string;
  asset_id: number;
  quantums: Uint8Array;
}
/**
 * MsgSendFromModuleToAccount represents a single transfer from a module
 * to an `x/bank` account (can be either a module account address or a user
 * account address).
 * Should only be executed by governance.
 */
export interface MsgSendFromModuleToAccount {
  authority: string;
  /** The sender module name. */
  senderModuleName: string;
  /**
   * The recipient account address (can be either a module account address
   * or a user account address).
   */
  recipient: string;
  /** The coin to transfer, which specifies both denom and amount. */
  coin: Coin;
}
export interface MsgSendFromModuleToAccountProtoMsg {
  typeUrl: "/h2x.sending.MsgSendFromModuleToAccount";
  value: Uint8Array;
}
/**
 * MsgSendFromModuleToAccount represents a single transfer from a module
 * to an `x/bank` account (can be either a module account address or a user
 * account address).
 * Should only be executed by governance.
 * @name MsgSendFromModuleToAccountAmino
 * @package h2x.sending
 * @see proto type: h2x.sending.MsgSendFromModuleToAccount
 */
export interface MsgSendFromModuleToAccountAmino {
  authority?: string;
  /**
   * The sender module name.
   */
  sender_module_name?: string;
  /**
   * The recipient account address (can be either a module account address
   * or a user account address).
   */
  recipient?: string;
  /**
   * The coin to transfer, which specifies both denom and amount.
   */
  coin?: CoinAmino;
}
export interface MsgSendFromModuleToAccountAminoMsg {
  type: "/h2x.sending.MsgSendFromModuleToAccount";
  value: MsgSendFromModuleToAccountAmino;
}
/**
 * MsgSendFromModuleToAccount represents a single transfer from a module
 * to an `x/bank` account (can be either a module account address or a user
 * account address).
 * Should only be executed by governance.
 */
export interface MsgSendFromModuleToAccountSDKType {
  authority: string;
  sender_module_name: string;
  recipient: string;
  coin: CoinSDKType;
}
export interface MsgCreateBridgeTransfer {
  senderAddress: string;
  /** The sender subaccount ID. */
  sender: SubaccountId;
  /** Id of the asset to transfer. */
  assetId: number;
  /**
   * The number of quantums of asset to transfer.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals)
   */
  quantums: Uint8Array;
  chainId: string;
  receiveAddress: string;
}
export interface MsgCreateBridgeTransferProtoMsg {
  typeUrl: "/h2x.sending.MsgCreateBridgeTransfer";
  value: Uint8Array;
}
/**
 * @name MsgCreateBridgeTransferAmino
 * @package h2x.sending
 * @see proto type: h2x.sending.MsgCreateBridgeTransfer
 */
export interface MsgCreateBridgeTransferAmino {
  sender_address?: string;
  /**
   * The sender subaccount ID.
   */
  sender?: SubaccountIdAmino;
  /**
   * Id of the asset to transfer.
   */
  asset_id?: number;
  /**
   * The number of quantums of asset to transfer.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals)
   */
  quantums?: string;
  chain_id?: string;
  receive_address?: string;
}
export interface MsgCreateBridgeTransferAminoMsg {
  type: "/h2x.sending.MsgCreateBridgeTransfer";
  value: MsgCreateBridgeTransferAmino;
}
export interface MsgCreateBridgeTransferSDKType {
  sender_address: string;
  sender: SubaccountIdSDKType;
  asset_id: number;
  quantums: Uint8Array;
  chain_id: string;
  receive_address: string;
}
function createBaseTransfer(): Transfer {
  return {
    sender: SubaccountId.fromPartial({}),
    recipient: SubaccountId.fromPartial({}),
    assetId: 0,
    amount: new Uint8Array()
  };
}
export const Transfer = {
  typeUrl: "/h2x.sending.Transfer",
  encode(message: Transfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      SubaccountId.encode(message.sender, writer.uint32(10).fork()).ldelim();
    }
    if (message.recipient !== undefined) {
      SubaccountId.encode(message.recipient, writer.uint32(18).fork()).ldelim();
    }
    if (message.assetId !== 0) {
      writer.uint32(24).uint32(message.assetId);
    }
    if (message.amount.length !== 0) {
      writer.uint32(34).bytes(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Transfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = SubaccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.recipient = SubaccountId.decode(reader, reader.uint32());
          break;
        case 3:
          message.assetId = reader.uint32();
          break;
        case 4:
          message.amount = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Transfer>): Transfer {
    const message = createBaseTransfer();
    message.sender = object.sender !== undefined && object.sender !== null ? SubaccountId.fromPartial(object.sender) : undefined;
    message.recipient = object.recipient !== undefined && object.recipient !== null ? SubaccountId.fromPartial(object.recipient) : undefined;
    message.assetId = object.assetId ?? 0;
    message.amount = object.amount ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TransferAmino): Transfer {
    const message = createBaseTransfer();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = SubaccountId.fromAmino(object.sender);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = SubaccountId.fromAmino(object.recipient);
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = bytesFromBase64(object.amount);
    }
    return message;
  },
  toAmino(message: Transfer): TransferAmino {
    const obj: any = {};
    obj.sender = message.sender ? SubaccountId.toAmino(message.sender) : undefined;
    obj.recipient = message.recipient ? SubaccountId.toAmino(message.recipient) : undefined;
    obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
    obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferAminoMsg): Transfer {
    return Transfer.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferProtoMsg): Transfer {
    return Transfer.decode(message.value);
  },
  toProto(message: Transfer): Uint8Array {
    return Transfer.encode(message).finish();
  },
  toProtoMsg(message: Transfer): TransferProtoMsg {
    return {
      typeUrl: "/h2x.sending.Transfer",
      value: Transfer.encode(message).finish()
    };
  }
};
function createBaseMsgDepositToSubaccount(): MsgDepositToSubaccount {
  return {
    sender: "",
    recipient: SubaccountId.fromPartial({}),
    assetId: 0,
    quantums: new Uint8Array()
  };
}
export const MsgDepositToSubaccount = {
  typeUrl: "/h2x.sending.MsgDepositToSubaccount",
  encode(message: MsgDepositToSubaccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== undefined) {
      SubaccountId.encode(message.recipient, writer.uint32(18).fork()).ldelim();
    }
    if (message.assetId !== 0) {
      writer.uint32(24).uint32(message.assetId);
    }
    if (message.quantums.length !== 0) {
      writer.uint32(34).bytes(message.quantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositToSubaccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositToSubaccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = SubaccountId.decode(reader, reader.uint32());
          break;
        case 3:
          message.assetId = reader.uint32();
          break;
        case 4:
          message.quantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDepositToSubaccount>): MsgDepositToSubaccount {
    const message = createBaseMsgDepositToSubaccount();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient !== undefined && object.recipient !== null ? SubaccountId.fromPartial(object.recipient) : undefined;
    message.assetId = object.assetId ?? 0;
    message.quantums = object.quantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgDepositToSubaccountAmino): MsgDepositToSubaccount {
    const message = createBaseMsgDepositToSubaccount();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = SubaccountId.fromAmino(object.recipient);
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.quantums !== undefined && object.quantums !== null) {
      message.quantums = bytesFromBase64(object.quantums);
    }
    return message;
  },
  toAmino(message: MsgDepositToSubaccount): MsgDepositToSubaccountAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient ? SubaccountId.toAmino(message.recipient) : undefined;
    obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
    obj.quantums = message.quantums ? base64FromBytes(message.quantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDepositToSubaccountAminoMsg): MsgDepositToSubaccount {
    return MsgDepositToSubaccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositToSubaccountProtoMsg): MsgDepositToSubaccount {
    return MsgDepositToSubaccount.decode(message.value);
  },
  toProto(message: MsgDepositToSubaccount): Uint8Array {
    return MsgDepositToSubaccount.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositToSubaccount): MsgDepositToSubaccountProtoMsg {
    return {
      typeUrl: "/h2x.sending.MsgDepositToSubaccount",
      value: MsgDepositToSubaccount.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawFromSubaccount(): MsgWithdrawFromSubaccount {
  return {
    sender: SubaccountId.fromPartial({}),
    recipient: "",
    assetId: 0,
    quantums: new Uint8Array()
  };
}
export const MsgWithdrawFromSubaccount = {
  typeUrl: "/h2x.sending.MsgWithdrawFromSubaccount",
  encode(message: MsgWithdrawFromSubaccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      SubaccountId.encode(message.sender, writer.uint32(18).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.assetId !== 0) {
      writer.uint32(24).uint32(message.assetId);
    }
    if (message.quantums.length !== 0) {
      writer.uint32(34).bytes(message.quantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFromSubaccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromSubaccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.sender = SubaccountId.decode(reader, reader.uint32());
          break;
        case 1:
          message.recipient = reader.string();
          break;
        case 3:
          message.assetId = reader.uint32();
          break;
        case 4:
          message.quantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawFromSubaccount>): MsgWithdrawFromSubaccount {
    const message = createBaseMsgWithdrawFromSubaccount();
    message.sender = object.sender !== undefined && object.sender !== null ? SubaccountId.fromPartial(object.sender) : undefined;
    message.recipient = object.recipient ?? "";
    message.assetId = object.assetId ?? 0;
    message.quantums = object.quantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgWithdrawFromSubaccountAmino): MsgWithdrawFromSubaccount {
    const message = createBaseMsgWithdrawFromSubaccount();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = SubaccountId.fromAmino(object.sender);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.quantums !== undefined && object.quantums !== null) {
      message.quantums = bytesFromBase64(object.quantums);
    }
    return message;
  },
  toAmino(message: MsgWithdrawFromSubaccount): MsgWithdrawFromSubaccountAmino {
    const obj: any = {};
    obj.sender = message.sender ? SubaccountId.toAmino(message.sender) : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
    obj.quantums = message.quantums ? base64FromBytes(message.quantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFromSubaccountAminoMsg): MsgWithdrawFromSubaccount {
    return MsgWithdrawFromSubaccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawFromSubaccountProtoMsg): MsgWithdrawFromSubaccount {
    return MsgWithdrawFromSubaccount.decode(message.value);
  },
  toProto(message: MsgWithdrawFromSubaccount): Uint8Array {
    return MsgWithdrawFromSubaccount.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFromSubaccount): MsgWithdrawFromSubaccountProtoMsg {
    return {
      typeUrl: "/h2x.sending.MsgWithdrawFromSubaccount",
      value: MsgWithdrawFromSubaccount.encode(message).finish()
    };
  }
};
function createBaseMsgSendFromModuleToAccount(): MsgSendFromModuleToAccount {
  return {
    authority: "",
    senderModuleName: "",
    recipient: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgSendFromModuleToAccount = {
  typeUrl: "/h2x.sending.MsgSendFromModuleToAccount",
  encode(message: MsgSendFromModuleToAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.senderModuleName !== "") {
      writer.uint32(18).string(message.senderModuleName);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendFromModuleToAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendFromModuleToAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.senderModuleName = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSendFromModuleToAccount>): MsgSendFromModuleToAccount {
    const message = createBaseMsgSendFromModuleToAccount();
    message.authority = object.authority ?? "";
    message.senderModuleName = object.senderModuleName ?? "";
    message.recipient = object.recipient ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgSendFromModuleToAccountAmino): MsgSendFromModuleToAccount {
    const message = createBaseMsgSendFromModuleToAccount();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.sender_module_name !== undefined && object.sender_module_name !== null) {
      message.senderModuleName = object.sender_module_name;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgSendFromModuleToAccount): MsgSendFromModuleToAccountAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.sender_module_name = message.senderModuleName === "" ? undefined : message.senderModuleName;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendFromModuleToAccountAminoMsg): MsgSendFromModuleToAccount {
    return MsgSendFromModuleToAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendFromModuleToAccountProtoMsg): MsgSendFromModuleToAccount {
    return MsgSendFromModuleToAccount.decode(message.value);
  },
  toProto(message: MsgSendFromModuleToAccount): Uint8Array {
    return MsgSendFromModuleToAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgSendFromModuleToAccount): MsgSendFromModuleToAccountProtoMsg {
    return {
      typeUrl: "/h2x.sending.MsgSendFromModuleToAccount",
      value: MsgSendFromModuleToAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBridgeTransfer(): MsgCreateBridgeTransfer {
  return {
    senderAddress: "",
    sender: SubaccountId.fromPartial({}),
    assetId: 0,
    quantums: new Uint8Array(),
    chainId: "",
    receiveAddress: ""
  };
}
export const MsgCreateBridgeTransfer = {
  typeUrl: "/h2x.sending.MsgCreateBridgeTransfer",
  encode(message: MsgCreateBridgeTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.sender !== undefined) {
      SubaccountId.encode(message.sender, writer.uint32(18).fork()).ldelim();
    }
    if (message.assetId !== 0) {
      writer.uint32(24).int32(message.assetId);
    }
    if (message.quantums.length !== 0) {
      writer.uint32(34).bytes(message.quantums);
    }
    if (message.chainId !== "") {
      writer.uint32(42).string(message.chainId);
    }
    if (message.receiveAddress !== "") {
      writer.uint32(50).string(message.receiveAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBridgeTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBridgeTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        case 2:
          message.sender = SubaccountId.decode(reader, reader.uint32());
          break;
        case 3:
          message.assetId = reader.int32();
          break;
        case 4:
          message.quantums = reader.bytes();
          break;
        case 5:
          message.chainId = reader.string();
          break;
        case 6:
          message.receiveAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateBridgeTransfer>): MsgCreateBridgeTransfer {
    const message = createBaseMsgCreateBridgeTransfer();
    message.senderAddress = object.senderAddress ?? "";
    message.sender = object.sender !== undefined && object.sender !== null ? SubaccountId.fromPartial(object.sender) : undefined;
    message.assetId = object.assetId ?? 0;
    message.quantums = object.quantums ?? new Uint8Array();
    message.chainId = object.chainId ?? "";
    message.receiveAddress = object.receiveAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCreateBridgeTransferAmino): MsgCreateBridgeTransfer {
    const message = createBaseMsgCreateBridgeTransfer();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = SubaccountId.fromAmino(object.sender);
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.quantums !== undefined && object.quantums !== null) {
      message.quantums = bytesFromBase64(object.quantums);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.receive_address !== undefined && object.receive_address !== null) {
      message.receiveAddress = object.receive_address;
    }
    return message;
  },
  toAmino(message: MsgCreateBridgeTransfer): MsgCreateBridgeTransferAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress;
    obj.sender = message.sender ? SubaccountId.toAmino(message.sender) : undefined;
    obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
    obj.quantums = message.quantums ? base64FromBytes(message.quantums) : undefined;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.receive_address = message.receiveAddress === "" ? undefined : message.receiveAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBridgeTransferAminoMsg): MsgCreateBridgeTransfer {
    return MsgCreateBridgeTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBridgeTransferProtoMsg): MsgCreateBridgeTransfer {
    return MsgCreateBridgeTransfer.decode(message.value);
  },
  toProto(message: MsgCreateBridgeTransfer): Uint8Array {
    return MsgCreateBridgeTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBridgeTransfer): MsgCreateBridgeTransferProtoMsg {
    return {
      typeUrl: "/h2x.sending.MsgCreateBridgeTransfer",
      value: MsgCreateBridgeTransfer.encode(message).finish()
    };
  }
};