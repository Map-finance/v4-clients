//@ts-nocheck
import { BlacklistedAddressInfo, BlacklistedAddressInfoAmino, BlacklistedAddressInfoSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryIsBlacklistedRequest is the request type for the IsBlacklisted RPC method. */
export interface QueryIsBlacklistedRequest {
  address: string;
}
export interface QueryIsBlacklistedRequestProtoMsg {
  typeUrl: "/h2x.blacklist.QueryIsBlacklistedRequest";
  value: Uint8Array;
}
/**
 * QueryIsBlacklistedRequest is the request type for the IsBlacklisted RPC method.
 * @name QueryIsBlacklistedRequestAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.QueryIsBlacklistedRequest
 */
export interface QueryIsBlacklistedRequestAmino {
  address?: string;
}
export interface QueryIsBlacklistedRequestAminoMsg {
  type: "/h2x.blacklist.QueryIsBlacklistedRequest";
  value: QueryIsBlacklistedRequestAmino;
}
/** QueryIsBlacklistedRequest is the request type for the IsBlacklisted RPC method. */
export interface QueryIsBlacklistedRequestSDKType {
  address: string;
}
/** QueryIsBlacklistedResponse is the response type for the IsBlacklisted RPC method. */
export interface QueryIsBlacklistedResponse {
  /** Whether the address is currently blacklisted. */
  isBlacklisted: boolean;
  /** The reason for blacklisting. */
  reason: string;
  /** Unix timestamp when the address was blocked. */
  blockedAt: bigint;
  /** Unix timestamp when the address was unblocked (0 if still blocked). */
  unblockedAt: bigint;
  /** The reason for unblocking. */
  unblockReason: string;
}
export interface QueryIsBlacklistedResponseProtoMsg {
  typeUrl: "/h2x.blacklist.QueryIsBlacklistedResponse";
  value: Uint8Array;
}
/**
 * QueryIsBlacklistedResponse is the response type for the IsBlacklisted RPC method.
 * @name QueryIsBlacklistedResponseAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.QueryIsBlacklistedResponse
 */
export interface QueryIsBlacklistedResponseAmino {
  /**
   * Whether the address is currently blacklisted.
   */
  is_blacklisted?: boolean;
  /**
   * The reason for blacklisting.
   */
  reason?: string;
  /**
   * Unix timestamp when the address was blocked.
   */
  blocked_at?: string;
  /**
   * Unix timestamp when the address was unblocked (0 if still blocked).
   */
  unblocked_at?: string;
  /**
   * The reason for unblocking.
   */
  unblock_reason?: string;
}
export interface QueryIsBlacklistedResponseAminoMsg {
  type: "/h2x.blacklist.QueryIsBlacklistedResponse";
  value: QueryIsBlacklistedResponseAmino;
}
/** QueryIsBlacklistedResponse is the response type for the IsBlacklisted RPC method. */
export interface QueryIsBlacklistedResponseSDKType {
  is_blacklisted: boolean;
  reason: string;
  blocked_at: bigint;
  unblocked_at: bigint;
  unblock_reason: string;
}
/**
 * QueryAllBlacklistedAddressesRequest is the request type for the
 * GetAllBlacklistedAddresses RPC method.
 */
export interface QueryAllBlacklistedAddressesRequest {}
export interface QueryAllBlacklistedAddressesRequestProtoMsg {
  typeUrl: "/h2x.blacklist.QueryAllBlacklistedAddressesRequest";
  value: Uint8Array;
}
/**
 * QueryAllBlacklistedAddressesRequest is the request type for the
 * GetAllBlacklistedAddresses RPC method.
 * @name QueryAllBlacklistedAddressesRequestAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.QueryAllBlacklistedAddressesRequest
 */
export interface QueryAllBlacklistedAddressesRequestAmino {}
export interface QueryAllBlacklistedAddressesRequestAminoMsg {
  type: "/h2x.blacklist.QueryAllBlacklistedAddressesRequest";
  value: QueryAllBlacklistedAddressesRequestAmino;
}
/**
 * QueryAllBlacklistedAddressesRequest is the request type for the
 * GetAllBlacklistedAddresses RPC method.
 */
export interface QueryAllBlacklistedAddressesRequestSDKType {}
/**
 * QueryAllBlacklistedAddressesResponse is the response type for the
 * GetAllBlacklistedAddresses RPC method.
 */
export interface QueryAllBlacklistedAddressesResponse {
  /** All blacklist entries with full information. */
  entries: BlacklistedAddressInfo[];
}
export interface QueryAllBlacklistedAddressesResponseProtoMsg {
  typeUrl: "/h2x.blacklist.QueryAllBlacklistedAddressesResponse";
  value: Uint8Array;
}
/**
 * QueryAllBlacklistedAddressesResponse is the response type for the
 * GetAllBlacklistedAddresses RPC method.
 * @name QueryAllBlacklistedAddressesResponseAmino
 * @package h2x.blacklist
 * @see proto type: h2x.blacklist.QueryAllBlacklistedAddressesResponse
 */
export interface QueryAllBlacklistedAddressesResponseAmino {
  /**
   * All blacklist entries with full information.
   */
  entries?: BlacklistedAddressInfoAmino[];
}
export interface QueryAllBlacklistedAddressesResponseAminoMsg {
  type: "/h2x.blacklist.QueryAllBlacklistedAddressesResponse";
  value: QueryAllBlacklistedAddressesResponseAmino;
}
/**
 * QueryAllBlacklistedAddressesResponse is the response type for the
 * GetAllBlacklistedAddresses RPC method.
 */
export interface QueryAllBlacklistedAddressesResponseSDKType {
  entries: BlacklistedAddressInfoSDKType[];
}
function createBaseQueryIsBlacklistedRequest(): QueryIsBlacklistedRequest {
  return {
    address: ""
  };
}
export const QueryIsBlacklistedRequest = {
  typeUrl: "/h2x.blacklist.QueryIsBlacklistedRequest",
  encode(message: QueryIsBlacklistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsBlacklistedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsBlacklistedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIsBlacklistedRequest>): QueryIsBlacklistedRequest {
    const message = createBaseQueryIsBlacklistedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryIsBlacklistedRequestAmino): QueryIsBlacklistedRequest {
    const message = createBaseQueryIsBlacklistedRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryIsBlacklistedRequest): QueryIsBlacklistedRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryIsBlacklistedRequestAminoMsg): QueryIsBlacklistedRequest {
    return QueryIsBlacklistedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsBlacklistedRequestProtoMsg): QueryIsBlacklistedRequest {
    return QueryIsBlacklistedRequest.decode(message.value);
  },
  toProto(message: QueryIsBlacklistedRequest): Uint8Array {
    return QueryIsBlacklistedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsBlacklistedRequest): QueryIsBlacklistedRequestProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.QueryIsBlacklistedRequest",
      value: QueryIsBlacklistedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsBlacklistedResponse(): QueryIsBlacklistedResponse {
  return {
    isBlacklisted: false,
    reason: "",
    blockedAt: BigInt(0),
    unblockedAt: BigInt(0),
    unblockReason: ""
  };
}
export const QueryIsBlacklistedResponse = {
  typeUrl: "/h2x.blacklist.QueryIsBlacklistedResponse",
  encode(message: QueryIsBlacklistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isBlacklisted === true) {
      writer.uint32(8).bool(message.isBlacklisted);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.blockedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.blockedAt);
    }
    if (message.unblockedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.unblockedAt);
    }
    if (message.unblockReason !== "") {
      writer.uint32(42).string(message.unblockReason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsBlacklistedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsBlacklistedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isBlacklisted = reader.bool();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.blockedAt = reader.int64();
          break;
        case 4:
          message.unblockedAt = reader.int64();
          break;
        case 5:
          message.unblockReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIsBlacklistedResponse>): QueryIsBlacklistedResponse {
    const message = createBaseQueryIsBlacklistedResponse();
    message.isBlacklisted = object.isBlacklisted ?? false;
    message.reason = object.reason ?? "";
    message.blockedAt = object.blockedAt !== undefined && object.blockedAt !== null ? BigInt(object.blockedAt.toString()) : BigInt(0);
    message.unblockedAt = object.unblockedAt !== undefined && object.unblockedAt !== null ? BigInt(object.unblockedAt.toString()) : BigInt(0);
    message.unblockReason = object.unblockReason ?? "";
    return message;
  },
  fromAmino(object: QueryIsBlacklistedResponseAmino): QueryIsBlacklistedResponse {
    const message = createBaseQueryIsBlacklistedResponse();
    if (object.is_blacklisted !== undefined && object.is_blacklisted !== null) {
      message.isBlacklisted = object.is_blacklisted;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.blocked_at !== undefined && object.blocked_at !== null) {
      message.blockedAt = BigInt(object.blocked_at);
    }
    if (object.unblocked_at !== undefined && object.unblocked_at !== null) {
      message.unblockedAt = BigInt(object.unblocked_at);
    }
    if (object.unblock_reason !== undefined && object.unblock_reason !== null) {
      message.unblockReason = object.unblock_reason;
    }
    return message;
  },
  toAmino(message: QueryIsBlacklistedResponse): QueryIsBlacklistedResponseAmino {
    const obj: any = {};
    obj.is_blacklisted = message.isBlacklisted === false ? undefined : message.isBlacklisted;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.blocked_at = message.blockedAt !== BigInt(0) ? message.blockedAt?.toString() : undefined;
    obj.unblocked_at = message.unblockedAt !== BigInt(0) ? message.unblockedAt?.toString() : undefined;
    obj.unblock_reason = message.unblockReason === "" ? undefined : message.unblockReason;
    return obj;
  },
  fromAminoMsg(object: QueryIsBlacklistedResponseAminoMsg): QueryIsBlacklistedResponse {
    return QueryIsBlacklistedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsBlacklistedResponseProtoMsg): QueryIsBlacklistedResponse {
    return QueryIsBlacklistedResponse.decode(message.value);
  },
  toProto(message: QueryIsBlacklistedResponse): Uint8Array {
    return QueryIsBlacklistedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsBlacklistedResponse): QueryIsBlacklistedResponseProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.QueryIsBlacklistedResponse",
      value: QueryIsBlacklistedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBlacklistedAddressesRequest(): QueryAllBlacklistedAddressesRequest {
  return {};
}
export const QueryAllBlacklistedAddressesRequest = {
  typeUrl: "/h2x.blacklist.QueryAllBlacklistedAddressesRequest",
  encode(_: QueryAllBlacklistedAddressesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBlacklistedAddressesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBlacklistedAddressesRequest();
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
  fromPartial(_: Partial<QueryAllBlacklistedAddressesRequest>): QueryAllBlacklistedAddressesRequest {
    const message = createBaseQueryAllBlacklistedAddressesRequest();
    return message;
  },
  fromAmino(_: QueryAllBlacklistedAddressesRequestAmino): QueryAllBlacklistedAddressesRequest {
    const message = createBaseQueryAllBlacklistedAddressesRequest();
    return message;
  },
  toAmino(_: QueryAllBlacklistedAddressesRequest): QueryAllBlacklistedAddressesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllBlacklistedAddressesRequestAminoMsg): QueryAllBlacklistedAddressesRequest {
    return QueryAllBlacklistedAddressesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBlacklistedAddressesRequestProtoMsg): QueryAllBlacklistedAddressesRequest {
    return QueryAllBlacklistedAddressesRequest.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedAddressesRequest): Uint8Array {
    return QueryAllBlacklistedAddressesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedAddressesRequest): QueryAllBlacklistedAddressesRequestProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.QueryAllBlacklistedAddressesRequest",
      value: QueryAllBlacklistedAddressesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBlacklistedAddressesResponse(): QueryAllBlacklistedAddressesResponse {
  return {
    entries: []
  };
}
export const QueryAllBlacklistedAddressesResponse = {
  typeUrl: "/h2x.blacklist.QueryAllBlacklistedAddressesResponse",
  encode(message: QueryAllBlacklistedAddressesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      BlacklistedAddressInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBlacklistedAddressesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBlacklistedAddressesResponse();
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
  fromPartial(object: Partial<QueryAllBlacklistedAddressesResponse>): QueryAllBlacklistedAddressesResponse {
    const message = createBaseQueryAllBlacklistedAddressesResponse();
    message.entries = object.entries?.map(e => BlacklistedAddressInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllBlacklistedAddressesResponseAmino): QueryAllBlacklistedAddressesResponse {
    const message = createBaseQueryAllBlacklistedAddressesResponse();
    message.entries = object.entries?.map(e => BlacklistedAddressInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllBlacklistedAddressesResponse): QueryAllBlacklistedAddressesResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? BlacklistedAddressInfo.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllBlacklistedAddressesResponseAminoMsg): QueryAllBlacklistedAddressesResponse {
    return QueryAllBlacklistedAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBlacklistedAddressesResponseProtoMsg): QueryAllBlacklistedAddressesResponse {
    return QueryAllBlacklistedAddressesResponse.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedAddressesResponse): Uint8Array {
    return QueryAllBlacklistedAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedAddressesResponse): QueryAllBlacklistedAddressesResponseProtoMsg {
    return {
      typeUrl: "/h2x.blacklist.QueryAllBlacklistedAddressesResponse",
      value: QueryAllBlacklistedAddressesResponse.encode(message).finish()
    };
  }
};