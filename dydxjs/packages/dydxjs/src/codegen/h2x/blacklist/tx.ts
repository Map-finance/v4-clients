//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgAddToBlacklist is the Msg/AddToBlacklist request type. */
export interface MsgAddToBlacklist {
  authority: string;
  /** The address to add to the blacklist. */
  address: string;
  /** The reason for blacklisting (optional, max 500 chars). */
  reason: string;
}
export interface MsgAddToBlacklistProtoMsg {
  typeUrl: "/h2x.blacklist.MsgAddToBlacklist";
  value: Uint8Array;
}
/**
 * MsgAddToBlacklist is the Msg/AddToBlacklist request type.
 * @name MsgAddToBlacklistAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.MsgAddToBlacklist
 */
export interface MsgAddToBlacklistAmino {
  authority?: string;
  /**
   * The address to add to the blacklist.
   */
  address?: string;
  /**
   * The reason for blacklisting (optional, max 500 chars).
   */
  reason?: string;
}
export interface MsgAddToBlacklistAminoMsg {
  type: "/h2x.blacklist.MsgAddToBlacklist";
  value: MsgAddToBlacklistAmino;
}
/** MsgAddToBlacklist is the Msg/AddToBlacklist request type. */
export interface MsgAddToBlacklistSDKType {
  authority: string;
  address: string;
  reason: string;
}
/** MsgAddToBlacklistResponse is the Msg/AddToBlacklist response type. */
export interface MsgAddToBlacklistResponse {}
export interface MsgAddToBlacklistResponseProtoMsg {
  typeUrl: "/h2x.blacklist.MsgAddToBlacklistResponse";
  value: Uint8Array;
}
/**
 * MsgAddToBlacklistResponse is the Msg/AddToBlacklist response type.
 * @name MsgAddToBlacklistResponseAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.MsgAddToBlacklistResponse
 */
export interface MsgAddToBlacklistResponseAmino {}
export interface MsgAddToBlacklistResponseAminoMsg {
  type: "/h2x.blacklist.MsgAddToBlacklistResponse";
  value: MsgAddToBlacklistResponseAmino;
}
/** MsgAddToBlacklistResponse is the Msg/AddToBlacklist response type. */
export interface MsgAddToBlacklistResponseSDKType {}
/** MsgRemoveFromBlacklist is the Msg/RemoveFromBlacklist request type. */
export interface MsgRemoveFromBlacklist {
  authority: string;
  /** The address to remove from the blacklist. */
  address: string;
  /** The reason for unblocking (optional). */
  reason: string;
}
export interface MsgRemoveFromBlacklistProtoMsg {
  typeUrl: "/h2x.blacklist.MsgRemoveFromBlacklist";
  value: Uint8Array;
}
/**
 * MsgRemoveFromBlacklist is the Msg/RemoveFromBlacklist request type.
 * @name MsgRemoveFromBlacklistAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.MsgRemoveFromBlacklist
 */
export interface MsgRemoveFromBlacklistAmino {
  authority?: string;
  /**
   * The address to remove from the blacklist.
   */
  address?: string;
  /**
   * The reason for unblocking (optional).
   */
  reason?: string;
}
export interface MsgRemoveFromBlacklistAminoMsg {
  type: "/h2x.blacklist.MsgRemoveFromBlacklist";
  value: MsgRemoveFromBlacklistAmino;
}
/** MsgRemoveFromBlacklist is the Msg/RemoveFromBlacklist request type. */
export interface MsgRemoveFromBlacklistSDKType {
  authority: string;
  address: string;
  reason: string;
}
/** MsgRemoveFromBlacklistResponse is the Msg/RemoveFromBlacklist response type. */
export interface MsgRemoveFromBlacklistResponse {}
export interface MsgRemoveFromBlacklistResponseProtoMsg {
  typeUrl: "/h2x.blacklist.MsgRemoveFromBlacklistResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveFromBlacklistResponse is the Msg/RemoveFromBlacklist response type.
 * @name MsgRemoveFromBlacklistResponseAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.MsgRemoveFromBlacklistResponse
 */
export interface MsgRemoveFromBlacklistResponseAmino {}
export interface MsgRemoveFromBlacklistResponseAminoMsg {
  type: "/h2x.blacklist.MsgRemoveFromBlacklistResponse";
  value: MsgRemoveFromBlacklistResponseAmino;
}
/** MsgRemoveFromBlacklistResponse is the Msg/RemoveFromBlacklist response type. */
export interface MsgRemoveFromBlacklistResponseSDKType {}
/** BlacklistEntry represents a single blacklist entry with address and reason. */
export interface BlacklistEntry {
  address: string;
  reason: string;
}
export interface BlacklistEntryProtoMsg {
  typeUrl: "/h2x.blacklist.BlacklistEntry";
  value: Uint8Array;
}
/**
 * BlacklistEntry represents a single blacklist entry with address and reason.
 * @name BlacklistEntryAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.BlacklistEntry
 */
export interface BlacklistEntryAmino {
  address?: string;
  reason?: string;
}
export interface BlacklistEntryAminoMsg {
  type: "/h2x.blacklist.BlacklistEntry";
  value: BlacklistEntryAmino;
}
/** BlacklistEntry represents a single blacklist entry with address and reason. */
export interface BlacklistEntrySDKType {
  address: string;
  reason: string;
}
/** MsgBatchAddToBlacklist is the Msg/BatchAddToBlacklist request type. */
export interface MsgBatchAddToBlacklist {
  authority: string;
  /** The entries to add to the blacklist (each with address and optional reason). */
  entries: BlacklistEntry[];
}
export interface MsgBatchAddToBlacklistProtoMsg {
  typeUrl: "/h2x.blacklist.MsgBatchAddToBlacklist";
  value: Uint8Array;
}
/**
 * MsgBatchAddToBlacklist is the Msg/BatchAddToBlacklist request type.
 * @name MsgBatchAddToBlacklistAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.MsgBatchAddToBlacklist
 */
export interface MsgBatchAddToBlacklistAmino {
  authority?: string;
  /**
   * The entries to add to the blacklist (each with address and optional reason).
   */
  entries?: BlacklistEntryAmino[];
}
export interface MsgBatchAddToBlacklistAminoMsg {
  type: "/h2x.blacklist.MsgBatchAddToBlacklist";
  value: MsgBatchAddToBlacklistAmino;
}
/** MsgBatchAddToBlacklist is the Msg/BatchAddToBlacklist request type. */
export interface MsgBatchAddToBlacklistSDKType {
  authority: string;
  entries: BlacklistEntrySDKType[];
}
/** MsgBatchAddToBlacklistResponse is the Msg/BatchAddToBlacklist response type. */
export interface MsgBatchAddToBlacklistResponse {
  /** Number of addresses successfully added. */
  addedCount: number;
}
export interface MsgBatchAddToBlacklistResponseProtoMsg {
  typeUrl: "/h2x.blacklist.MsgBatchAddToBlacklistResponse";
  value: Uint8Array;
}
/**
 * MsgBatchAddToBlacklistResponse is the Msg/BatchAddToBlacklist response type.
 * @name MsgBatchAddToBlacklistResponseAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.MsgBatchAddToBlacklistResponse
 */
export interface MsgBatchAddToBlacklistResponseAmino {
  /**
   * Number of addresses successfully added.
   */
  added_count?: number;
}
export interface MsgBatchAddToBlacklistResponseAminoMsg {
  type: "/h2x.blacklist.MsgBatchAddToBlacklistResponse";
  value: MsgBatchAddToBlacklistResponseAmino;
}
/** MsgBatchAddToBlacklistResponse is the Msg/BatchAddToBlacklist response type. */
export interface MsgBatchAddToBlacklistResponseSDKType {
  added_count: number;
}
/** MsgBatchRemoveFromBlacklist is the Msg/BatchRemoveFromBlacklist request type. */
export interface MsgBatchRemoveFromBlacklist {
  authority: string;
  /** The entries to remove from the blacklist (each with address and optional reason). */
  entries: BlacklistEntry[];
}
export interface MsgBatchRemoveFromBlacklistProtoMsg {
  typeUrl: "/h2x.blacklist.MsgBatchRemoveFromBlacklist";
  value: Uint8Array;
}
/**
 * MsgBatchRemoveFromBlacklist is the Msg/BatchRemoveFromBlacklist request type.
 * @name MsgBatchRemoveFromBlacklistAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.MsgBatchRemoveFromBlacklist
 */
export interface MsgBatchRemoveFromBlacklistAmino {
  authority?: string;
  /**
   * The entries to remove from the blacklist (each with address and optional reason).
   */
  entries?: BlacklistEntryAmino[];
}
export interface MsgBatchRemoveFromBlacklistAminoMsg {
  type: "/h2x.blacklist.MsgBatchRemoveFromBlacklist";
  value: MsgBatchRemoveFromBlacklistAmino;
}
/** MsgBatchRemoveFromBlacklist is the Msg/BatchRemoveFromBlacklist request type. */
export interface MsgBatchRemoveFromBlacklistSDKType {
  authority: string;
  entries: BlacklistEntrySDKType[];
}
/** MsgBatchRemoveFromBlacklistResponse is the Msg/BatchRemoveFromBlacklist response type. */
export interface MsgBatchRemoveFromBlacklistResponse {
  /** Number of addresses successfully removed. */
  removedCount: number;
}
export interface MsgBatchRemoveFromBlacklistResponseProtoMsg {
  typeUrl: "/h2x.blacklist.MsgBatchRemoveFromBlacklistResponse";
  value: Uint8Array;
}
/**
 * MsgBatchRemoveFromBlacklistResponse is the Msg/BatchRemoveFromBlacklist response type.
 * @name MsgBatchRemoveFromBlacklistResponseAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.MsgBatchRemoveFromBlacklistResponse
 */
export interface MsgBatchRemoveFromBlacklistResponseAmino {
  /**
   * Number of addresses successfully removed.
   */
  removed_count?: number;
}
export interface MsgBatchRemoveFromBlacklistResponseAminoMsg {
  type: "/h2x.blacklist.MsgBatchRemoveFromBlacklistResponse";
  value: MsgBatchRemoveFromBlacklistResponseAmino;
}
/** MsgBatchRemoveFromBlacklistResponse is the Msg/BatchRemoveFromBlacklist response type. */
export interface MsgBatchRemoveFromBlacklistResponseSDKType {
  removed_count: number;
}
function createBaseMsgAddToBlacklist(): MsgAddToBlacklist {
  return {
    authority: "",
    address: "",
    reason: ""
  };
}
export const MsgAddToBlacklist = {
  typeUrl: "/h2x.blacklist.MsgAddToBlacklist",
  encode(message: MsgAddToBlacklist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToBlacklist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToBlacklist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddToBlacklist>): MsgAddToBlacklist {
    const message = createBaseMsgAddToBlacklist();
    message.authority = object.authority ?? "";
    message.address = object.address ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgAddToBlacklistAmino): MsgAddToBlacklist {
    const message = createBaseMsgAddToBlacklist();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgAddToBlacklist): MsgAddToBlacklistAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.address = message.address === "" ? undefined : message.address;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgAddToBlacklistAminoMsg): MsgAddToBlacklist {
    return MsgAddToBlacklist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddToBlacklistProtoMsg): MsgAddToBlacklist {
    return MsgAddToBlacklist.decode(message.value);
  },
  toProto(message: MsgAddToBlacklist): Uint8Array {
    return MsgAddToBlacklist.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToBlacklist): MsgAddToBlacklistProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.MsgAddToBlacklist",
      value: MsgAddToBlacklist.encode(message).finish()
    };
  }
};
function createBaseMsgAddToBlacklistResponse(): MsgAddToBlacklistResponse {
  return {};
}
export const MsgAddToBlacklistResponse = {
  typeUrl: "/h2x.blacklist.MsgAddToBlacklistResponse",
  encode(_: MsgAddToBlacklistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToBlacklistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToBlacklistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgAddToBlacklistResponse>): MsgAddToBlacklistResponse {
    const message = createBaseMsgAddToBlacklistResponse();
    return message;
  },
  fromAmino(_: MsgAddToBlacklistResponseAmino): MsgAddToBlacklistResponse {
    const message = createBaseMsgAddToBlacklistResponse();
    return message;
  },
  toAmino(_: MsgAddToBlacklistResponse): MsgAddToBlacklistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddToBlacklistResponseAminoMsg): MsgAddToBlacklistResponse {
    return MsgAddToBlacklistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddToBlacklistResponseProtoMsg): MsgAddToBlacklistResponse {
    return MsgAddToBlacklistResponse.decode(message.value);
  },
  toProto(message: MsgAddToBlacklistResponse): Uint8Array {
    return MsgAddToBlacklistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToBlacklistResponse): MsgAddToBlacklistResponseProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.MsgAddToBlacklistResponse",
      value: MsgAddToBlacklistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveFromBlacklist(): MsgRemoveFromBlacklist {
  return {
    authority: "",
    address: "",
    reason: ""
  };
}
export const MsgRemoveFromBlacklist = {
  typeUrl: "/h2x.blacklist.MsgRemoveFromBlacklist",
  encode(message: MsgRemoveFromBlacklist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveFromBlacklist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveFromBlacklist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveFromBlacklist>): MsgRemoveFromBlacklist {
    const message = createBaseMsgRemoveFromBlacklist();
    message.authority = object.authority ?? "";
    message.address = object.address ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveFromBlacklistAmino): MsgRemoveFromBlacklist {
    const message = createBaseMsgRemoveFromBlacklist();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgRemoveFromBlacklist): MsgRemoveFromBlacklistAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.address = message.address === "" ? undefined : message.address;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveFromBlacklistAminoMsg): MsgRemoveFromBlacklist {
    return MsgRemoveFromBlacklist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveFromBlacklistProtoMsg): MsgRemoveFromBlacklist {
    return MsgRemoveFromBlacklist.decode(message.value);
  },
  toProto(message: MsgRemoveFromBlacklist): Uint8Array {
    return MsgRemoveFromBlacklist.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveFromBlacklist): MsgRemoveFromBlacklistProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.MsgRemoveFromBlacklist",
      value: MsgRemoveFromBlacklist.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveFromBlacklistResponse(): MsgRemoveFromBlacklistResponse {
  return {};
}
export const MsgRemoveFromBlacklistResponse = {
  typeUrl: "/h2x.blacklist.MsgRemoveFromBlacklistResponse",
  encode(_: MsgRemoveFromBlacklistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveFromBlacklistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveFromBlacklistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgRemoveFromBlacklistResponse>): MsgRemoveFromBlacklistResponse {
    const message = createBaseMsgRemoveFromBlacklistResponse();
    return message;
  },
  fromAmino(_: MsgRemoveFromBlacklistResponseAmino): MsgRemoveFromBlacklistResponse {
    const message = createBaseMsgRemoveFromBlacklistResponse();
    return message;
  },
  toAmino(_: MsgRemoveFromBlacklistResponse): MsgRemoveFromBlacklistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveFromBlacklistResponseAminoMsg): MsgRemoveFromBlacklistResponse {
    return MsgRemoveFromBlacklistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveFromBlacklistResponseProtoMsg): MsgRemoveFromBlacklistResponse {
    return MsgRemoveFromBlacklistResponse.decode(message.value);
  },
  toProto(message: MsgRemoveFromBlacklistResponse): Uint8Array {
    return MsgRemoveFromBlacklistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveFromBlacklistResponse): MsgRemoveFromBlacklistResponseProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.MsgRemoveFromBlacklistResponse",
      value: MsgRemoveFromBlacklistResponse.encode(message).finish()
    };
  }
};
function createBaseBlacklistEntry(): BlacklistEntry {
  return {
    address: "",
    reason: ""
  };
}
export const BlacklistEntry = {
  typeUrl: "/h2x.blacklist.BlacklistEntry",
  encode(message: BlacklistEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlacklistEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlacklistEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlacklistEntry>): BlacklistEntry {
    const message = createBaseBlacklistEntry();
    message.address = object.address ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: BlacklistEntryAmino): BlacklistEntry {
    const message = createBaseBlacklistEntry();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: BlacklistEntry): BlacklistEntryAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: BlacklistEntryAminoMsg): BlacklistEntry {
    return BlacklistEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: BlacklistEntryProtoMsg): BlacklistEntry {
    return BlacklistEntry.decode(message.value);
  },
  toProto(message: BlacklistEntry): Uint8Array {
    return BlacklistEntry.encode(message).finish();
  },
  toProtoMsg(message: BlacklistEntry): BlacklistEntryProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.BlacklistEntry",
      value: BlacklistEntry.encode(message).finish()
    };
  }
};
function createBaseMsgBatchAddToBlacklist(): MsgBatchAddToBlacklist {
  return {
    authority: "",
    entries: []
  };
}
export const MsgBatchAddToBlacklist = {
  typeUrl: "/h2x.blacklist.MsgBatchAddToBlacklist",
  encode(message: MsgBatchAddToBlacklist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.entries) {
      BlacklistEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchAddToBlacklist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchAddToBlacklist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.entries.push(BlacklistEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBatchAddToBlacklist>): MsgBatchAddToBlacklist {
    const message = createBaseMsgBatchAddToBlacklist();
    message.authority = object.authority ?? "";
    message.entries = object.entries?.map(e => BlacklistEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBatchAddToBlacklistAmino): MsgBatchAddToBlacklist {
    const message = createBaseMsgBatchAddToBlacklist();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.entries = object.entries?.map(e => BlacklistEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBatchAddToBlacklist): MsgBatchAddToBlacklistAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? BlacklistEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchAddToBlacklistAminoMsg): MsgBatchAddToBlacklist {
    return MsgBatchAddToBlacklist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchAddToBlacklistProtoMsg): MsgBatchAddToBlacklist {
    return MsgBatchAddToBlacklist.decode(message.value);
  },
  toProto(message: MsgBatchAddToBlacklist): Uint8Array {
    return MsgBatchAddToBlacklist.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchAddToBlacklist): MsgBatchAddToBlacklistProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.MsgBatchAddToBlacklist",
      value: MsgBatchAddToBlacklist.encode(message).finish()
    };
  }
};
function createBaseMsgBatchAddToBlacklistResponse(): MsgBatchAddToBlacklistResponse {
  return {
    addedCount: 0
  };
}
export const MsgBatchAddToBlacklistResponse = {
  typeUrl: "/h2x.blacklist.MsgBatchAddToBlacklistResponse",
  encode(message: MsgBatchAddToBlacklistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addedCount !== 0) {
      writer.uint32(8).uint32(message.addedCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchAddToBlacklistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchAddToBlacklistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addedCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBatchAddToBlacklistResponse>): MsgBatchAddToBlacklistResponse {
    const message = createBaseMsgBatchAddToBlacklistResponse();
    message.addedCount = object.addedCount ?? 0;
    return message;
  },
  fromAmino(object: MsgBatchAddToBlacklistResponseAmino): MsgBatchAddToBlacklistResponse {
    const message = createBaseMsgBatchAddToBlacklistResponse();
    if (object.added_count !== undefined && object.added_count !== null) {
      message.addedCount = object.added_count;
    }
    return message;
  },
  toAmino(message: MsgBatchAddToBlacklistResponse): MsgBatchAddToBlacklistResponseAmino {
    const obj: any = {};
    obj.added_count = message.addedCount === 0 ? undefined : message.addedCount;
    return obj;
  },
  fromAminoMsg(object: MsgBatchAddToBlacklistResponseAminoMsg): MsgBatchAddToBlacklistResponse {
    return MsgBatchAddToBlacklistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchAddToBlacklistResponseProtoMsg): MsgBatchAddToBlacklistResponse {
    return MsgBatchAddToBlacklistResponse.decode(message.value);
  },
  toProto(message: MsgBatchAddToBlacklistResponse): Uint8Array {
    return MsgBatchAddToBlacklistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchAddToBlacklistResponse): MsgBatchAddToBlacklistResponseProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.MsgBatchAddToBlacklistResponse",
      value: MsgBatchAddToBlacklistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBatchRemoveFromBlacklist(): MsgBatchRemoveFromBlacklist {
  return {
    authority: "",
    entries: []
  };
}
export const MsgBatchRemoveFromBlacklist = {
  typeUrl: "/h2x.blacklist.MsgBatchRemoveFromBlacklist",
  encode(message: MsgBatchRemoveFromBlacklist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.entries) {
      BlacklistEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchRemoveFromBlacklist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchRemoveFromBlacklist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.entries.push(BlacklistEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBatchRemoveFromBlacklist>): MsgBatchRemoveFromBlacklist {
    const message = createBaseMsgBatchRemoveFromBlacklist();
    message.authority = object.authority ?? "";
    message.entries = object.entries?.map(e => BlacklistEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBatchRemoveFromBlacklistAmino): MsgBatchRemoveFromBlacklist {
    const message = createBaseMsgBatchRemoveFromBlacklist();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.entries = object.entries?.map(e => BlacklistEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBatchRemoveFromBlacklist): MsgBatchRemoveFromBlacklistAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? BlacklistEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchRemoveFromBlacklistAminoMsg): MsgBatchRemoveFromBlacklist {
    return MsgBatchRemoveFromBlacklist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchRemoveFromBlacklistProtoMsg): MsgBatchRemoveFromBlacklist {
    return MsgBatchRemoveFromBlacklist.decode(message.value);
  },
  toProto(message: MsgBatchRemoveFromBlacklist): Uint8Array {
    return MsgBatchRemoveFromBlacklist.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchRemoveFromBlacklist): MsgBatchRemoveFromBlacklistProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.MsgBatchRemoveFromBlacklist",
      value: MsgBatchRemoveFromBlacklist.encode(message).finish()
    };
  }
};
function createBaseMsgBatchRemoveFromBlacklistResponse(): MsgBatchRemoveFromBlacklistResponse {
  return {
    removedCount: 0
  };
}
export const MsgBatchRemoveFromBlacklistResponse = {
  typeUrl: "/h2x.blacklist.MsgBatchRemoveFromBlacklistResponse",
  encode(message: MsgBatchRemoveFromBlacklistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.removedCount !== 0) {
      writer.uint32(8).uint32(message.removedCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchRemoveFromBlacklistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchRemoveFromBlacklistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.removedCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBatchRemoveFromBlacklistResponse>): MsgBatchRemoveFromBlacklistResponse {
    const message = createBaseMsgBatchRemoveFromBlacklistResponse();
    message.removedCount = object.removedCount ?? 0;
    return message;
  },
  fromAmino(object: MsgBatchRemoveFromBlacklistResponseAmino): MsgBatchRemoveFromBlacklistResponse {
    const message = createBaseMsgBatchRemoveFromBlacklistResponse();
    if (object.removed_count !== undefined && object.removed_count !== null) {
      message.removedCount = object.removed_count;
    }
    return message;
  },
  toAmino(message: MsgBatchRemoveFromBlacklistResponse): MsgBatchRemoveFromBlacklistResponseAmino {
    const obj: any = {};
    obj.removed_count = message.removedCount === 0 ? undefined : message.removedCount;
    return obj;
  },
  fromAminoMsg(object: MsgBatchRemoveFromBlacklistResponseAminoMsg): MsgBatchRemoveFromBlacklistResponse {
    return MsgBatchRemoveFromBlacklistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchRemoveFromBlacklistResponseProtoMsg): MsgBatchRemoveFromBlacklistResponse {
    return MsgBatchRemoveFromBlacklistResponse.decode(message.value);
  },
  toProto(message: MsgBatchRemoveFromBlacklistResponse): Uint8Array {
    return MsgBatchRemoveFromBlacklistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchRemoveFromBlacklistResponse): MsgBatchRemoveFromBlacklistResponseProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.MsgBatchRemoveFromBlacklistResponse",
      value: MsgBatchRemoveFromBlacklistResponse.encode(message).finish()
    };
  }
};