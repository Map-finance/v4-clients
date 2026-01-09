//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** BlacklistedAddressInfo stores full information about a blacklisted address. */
export interface BlacklistedAddressInfo {
  /** The blacklisted address. */
  address: string;
  /** The reason for blacklisting. */
  reason: string;
  /** Unix timestamp when the address was blocked. */
  blockedAt: bigint;
  /** Whether the address is currently blocked. */
  isBlocked: boolean;
  /** Unix timestamp when the address was unblocked (0 if still blocked). */
  unblockedAt: bigint;
  /** The reason for unblocking. */
  unblockReason: string;
}
export interface BlacklistedAddressInfoProtoMsg {
  typeUrl: "/h2x.blacklist.BlacklistedAddressInfo";
  value: Uint8Array;
}
/**
 * BlacklistedAddressInfo stores full information about a blacklisted address.
 * @name BlacklistedAddressInfoAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.BlacklistedAddressInfo
 */
export interface BlacklistedAddressInfoAmino {
  /**
   * The blacklisted address.
   */
  address?: string;
  /**
   * The reason for blacklisting.
   */
  reason?: string;
  /**
   * Unix timestamp when the address was blocked.
   */
  blocked_at?: string;
  /**
   * Whether the address is currently blocked.
   */
  is_blocked?: boolean;
  /**
   * Unix timestamp when the address was unblocked (0 if still blocked).
   */
  unblocked_at?: string;
  /**
   * The reason for unblocking.
   */
  unblock_reason?: string;
}
export interface BlacklistedAddressInfoAminoMsg {
  type: "/h2x.blacklist.BlacklistedAddressInfo";
  value: BlacklistedAddressInfoAmino;
}
/** BlacklistedAddressInfo stores full information about a blacklisted address. */
export interface BlacklistedAddressInfoSDKType {
  address: string;
  reason: string;
  blocked_at: bigint;
  is_blocked: boolean;
  unblocked_at: bigint;
  unblock_reason: string;
}
/** GenesisState defines the blacklist module's genesis state. */
export interface GenesisState {
  /** entries defines the list of blacklist entries at genesis. */
  entries: BlacklistedAddressInfo[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/h2x.blacklist.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the blacklist module's genesis state.
 * @name GenesisStateAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * entries defines the list of blacklist entries at genesis.
   */
  entries?: BlacklistedAddressInfoAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/h2x.blacklist.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the blacklist module's genesis state. */
export interface GenesisStateSDKType {
  entries: BlacklistedAddressInfoSDKType[];
}
function createBaseBlacklistedAddressInfo(): BlacklistedAddressInfo {
  return {
    address: "",
    reason: "",
    blockedAt: BigInt(0),
    isBlocked: false,
    unblockedAt: BigInt(0),
    unblockReason: ""
  };
}
export const BlacklistedAddressInfo = {
  typeUrl: "/h2x.blacklist.BlacklistedAddressInfo",
  encode(message: BlacklistedAddressInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.blockedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.blockedAt);
    }
    if (message.isBlocked === true) {
      writer.uint32(32).bool(message.isBlocked);
    }
    if (message.unblockedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.unblockedAt);
    }
    if (message.unblockReason !== "") {
      writer.uint32(50).string(message.unblockReason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlacklistedAddressInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlacklistedAddressInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.blockedAt = reader.int64();
          break;
        case 4:
          message.isBlocked = reader.bool();
          break;
        case 5:
          message.unblockedAt = reader.int64();
          break;
        case 6:
          message.unblockReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlacklistedAddressInfo>): BlacklistedAddressInfo {
    const message = createBaseBlacklistedAddressInfo();
    message.address = object.address ?? "";
    message.reason = object.reason ?? "";
    message.blockedAt = object.blockedAt !== undefined && object.blockedAt !== null ? BigInt(object.blockedAt.toString()) : BigInt(0);
    message.isBlocked = object.isBlocked ?? false;
    message.unblockedAt = object.unblockedAt !== undefined && object.unblockedAt !== null ? BigInt(object.unblockedAt.toString()) : BigInt(0);
    message.unblockReason = object.unblockReason ?? "";
    return message;
  },
  fromAmino(object: BlacklistedAddressInfoAmino): BlacklistedAddressInfo {
    const message = createBaseBlacklistedAddressInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.blocked_at !== undefined && object.blocked_at !== null) {
      message.blockedAt = BigInt(object.blocked_at);
    }
    if (object.is_blocked !== undefined && object.is_blocked !== null) {
      message.isBlocked = object.is_blocked;
    }
    if (object.unblocked_at !== undefined && object.unblocked_at !== null) {
      message.unblockedAt = BigInt(object.unblocked_at);
    }
    if (object.unblock_reason !== undefined && object.unblock_reason !== null) {
      message.unblockReason = object.unblock_reason;
    }
    return message;
  },
  toAmino(message: BlacklistedAddressInfo): BlacklistedAddressInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.blocked_at = message.blockedAt !== BigInt(0) ? message.blockedAt?.toString() : undefined;
    obj.is_blocked = message.isBlocked === false ? undefined : message.isBlocked;
    obj.unblocked_at = message.unblockedAt !== BigInt(0) ? message.unblockedAt?.toString() : undefined;
    obj.unblock_reason = message.unblockReason === "" ? undefined : message.unblockReason;
    return obj;
  },
  fromAminoMsg(object: BlacklistedAddressInfoAminoMsg): BlacklistedAddressInfo {
    return BlacklistedAddressInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: BlacklistedAddressInfoProtoMsg): BlacklistedAddressInfo {
    return BlacklistedAddressInfo.decode(message.value);
  },
  toProto(message: BlacklistedAddressInfo): Uint8Array {
    return BlacklistedAddressInfo.encode(message).finish();
  },
  toProtoMsg(message: BlacklistedAddressInfo): BlacklistedAddressInfoProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.BlacklistedAddressInfo",
      value: BlacklistedAddressInfo.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    entries: []
  };
}
export const GenesisState = {
  typeUrl: "/h2x.blacklist.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      BlacklistedAddressInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(BlacklistedAddressInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.entries = object.entries?.map(e => BlacklistedAddressInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.entries = object.entries?.map(e => BlacklistedAddressInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? BlacklistedAddressInfo.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};