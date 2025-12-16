//@ts-nocheck
import { AccountState, AccountStateAmino, AccountStateSDKType } from "./accountplus";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AccountAuthenticator, AccountAuthenticatorAmino, AccountAuthenticatorSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../binary";
/** AccountStateRequest is request type for the Query/AccountState RPC method. */
export interface AccountStateRequest {
  address: string;
}
export interface AccountStateRequestProtoMsg {
  typeUrl: "/h2x.accountplus.AccountStateRequest";
  value: Uint8Array;
}
/**
 * AccountStateRequest is request type for the Query/AccountState RPC method.
 * @name AccountStateRequestAmino
 * @package h2x.accountplus
 * @see proto type: h2x.accountplus.AccountStateRequest
 */
export interface AccountStateRequestAmino {
  address?: string;
}
export interface AccountStateRequestAminoMsg {
  type: "/h2x.accountplus.AccountStateRequest";
  value: AccountStateRequestAmino;
}
/** AccountStateRequest is request type for the Query/AccountState RPC method. */
export interface AccountStateRequestSDKType {
  address: string;
}
/**
 * AccountStateResponse is response type for the Query/GetAccountState RPC
 * method.
 */
export interface AccountStateResponse {
  accountState?: AccountState;
}
export interface AccountStateResponseProtoMsg {
  typeUrl: "/h2x.accountplus.AccountStateResponse";
  value: Uint8Array;
}
/**
 * AccountStateResponse is response type for the Query/GetAccountState RPC
 * method.
 * @name AccountStateResponseAmino
 * @package h2x.accountplus
 * @see proto type: h2x.accountplus.AccountStateResponse
 */
export interface AccountStateResponseAmino {
  account_state?: AccountStateAmino;
}
export interface AccountStateResponseAminoMsg {
  type: "/h2x.accountplus.AccountStateResponse";
  value: AccountStateResponseAmino;
}
/**
 * AccountStateResponse is response type for the Query/GetAccountState RPC
 * method.
 */
export interface AccountStateResponseSDKType {
  account_state?: AccountStateSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/h2x.accountplus.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package h2x.accountplus
 * @see proto type: h2x.accountplus.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/h2x.accountplus.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/h2x.accountplus.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package h2x.accountplus
 * @see proto type: h2x.accountplus.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/h2x.accountplus.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
export interface GetAuthenticatorsRequest {
  account: string;
}
export interface GetAuthenticatorsRequestProtoMsg {
  typeUrl: "/h2x.accountplus.GetAuthenticatorsRequest";
  value: Uint8Array;
}
/**
 * MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type.
 * @name GetAuthenticatorsRequestAmino
 * @package h2x.accountplus
 * @see proto type: h2x.accountplus.GetAuthenticatorsRequest
 */
export interface GetAuthenticatorsRequestAmino {
  account?: string;
}
export interface GetAuthenticatorsRequestAminoMsg {
  type: "/h2x.accountplus.GetAuthenticatorsRequest";
  value: GetAuthenticatorsRequestAmino;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
export interface GetAuthenticatorsRequestSDKType {
  account: string;
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */
export interface GetAuthenticatorsResponse {
  accountAuthenticators: AccountAuthenticator[];
}
export interface GetAuthenticatorsResponseProtoMsg {
  typeUrl: "/h2x.accountplus.GetAuthenticatorsResponse";
  value: Uint8Array;
}
/**
 * MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type.
 * @name GetAuthenticatorsResponseAmino
 * @package h2x.accountplus
 * @see proto type: h2x.accountplus.GetAuthenticatorsResponse
 */
export interface GetAuthenticatorsResponseAmino {
  account_authenticators?: AccountAuthenticatorAmino[];
}
export interface GetAuthenticatorsResponseAminoMsg {
  type: "/h2x.accountplus.GetAuthenticatorsResponse";
  value: GetAuthenticatorsResponseAmino;
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */
export interface GetAuthenticatorsResponseSDKType {
  account_authenticators: AccountAuthenticatorSDKType[];
}
/** MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type. */
export interface GetAuthenticatorRequest {
  account: string;
  authenticatorId: bigint;
}
export interface GetAuthenticatorRequestProtoMsg {
  typeUrl: "/h2x.accountplus.GetAuthenticatorRequest";
  value: Uint8Array;
}
/**
 * MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type.
 * @name GetAuthenticatorRequestAmino
 * @package h2x.accountplus
 * @see proto type: h2x.accountplus.GetAuthenticatorRequest
 */
export interface GetAuthenticatorRequestAmino {
  account?: string;
  authenticator_id?: string;
}
export interface GetAuthenticatorRequestAminoMsg {
  type: "/h2x.accountplus.GetAuthenticatorRequest";
  value: GetAuthenticatorRequestAmino;
}
/** MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type. */
export interface GetAuthenticatorRequestSDKType {
  account: string;
  authenticator_id: bigint;
}
/** MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type. */
export interface GetAuthenticatorResponse {
  accountAuthenticator?: AccountAuthenticator;
}
export interface GetAuthenticatorResponseProtoMsg {
  typeUrl: "/h2x.accountplus.GetAuthenticatorResponse";
  value: Uint8Array;
}
/**
 * MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type.
 * @name GetAuthenticatorResponseAmino
 * @package h2x.accountplus
 * @see proto type: h2x.accountplus.GetAuthenticatorResponse
 */
export interface GetAuthenticatorResponseAmino {
  account_authenticator?: AccountAuthenticatorAmino;
}
export interface GetAuthenticatorResponseAminoMsg {
  type: "/h2x.accountplus.GetAuthenticatorResponse";
  value: GetAuthenticatorResponseAmino;
}
/** MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type. */
export interface GetAuthenticatorResponseSDKType {
  account_authenticator?: AccountAuthenticatorSDKType;
}
function createBaseAccountStateRequest(): AccountStateRequest {
  return {
    address: ""
  };
}
export const AccountStateRequest = {
  typeUrl: "/h2x.accountplus.AccountStateRequest",
  encode(message: AccountStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountStateRequest();
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
  fromPartial(object: Partial<AccountStateRequest>): AccountStateRequest {
    const message = createBaseAccountStateRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: AccountStateRequestAmino): AccountStateRequest {
    const message = createBaseAccountStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: AccountStateRequest): AccountStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: AccountStateRequestAminoMsg): AccountStateRequest {
    return AccountStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountStateRequestProtoMsg): AccountStateRequest {
    return AccountStateRequest.decode(message.value);
  },
  toProto(message: AccountStateRequest): Uint8Array {
    return AccountStateRequest.encode(message).finish();
  },
  toProtoMsg(message: AccountStateRequest): AccountStateRequestProtoMsg {
    return {
      typeUrl: "/h2x.accountplus.AccountStateRequest",
      value: AccountStateRequest.encode(message).finish()
    };
  }
};
function createBaseAccountStateResponse(): AccountStateResponse {
  return {
    accountState: undefined
  };
}
export const AccountStateResponse = {
  typeUrl: "/h2x.accountplus.AccountStateResponse",
  encode(message: AccountStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountState !== undefined) {
      AccountState.encode(message.accountState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountState = AccountState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AccountStateResponse>): AccountStateResponse {
    const message = createBaseAccountStateResponse();
    message.accountState = object.accountState !== undefined && object.accountState !== null ? AccountState.fromPartial(object.accountState) : undefined;
    return message;
  },
  fromAmino(object: AccountStateResponseAmino): AccountStateResponse {
    const message = createBaseAccountStateResponse();
    if (object.account_state !== undefined && object.account_state !== null) {
      message.accountState = AccountState.fromAmino(object.account_state);
    }
    return message;
  },
  toAmino(message: AccountStateResponse): AccountStateResponseAmino {
    const obj: any = {};
    obj.account_state = message.accountState ? AccountState.toAmino(message.accountState) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountStateResponseAminoMsg): AccountStateResponse {
    return AccountStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountStateResponseProtoMsg): AccountStateResponse {
    return AccountStateResponse.decode(message.value);
  },
  toProto(message: AccountStateResponse): Uint8Array {
    return AccountStateResponse.encode(message).finish();
  },
  toProtoMsg(message: AccountStateResponse): AccountStateResponseProtoMsg {
    return {
      typeUrl: "/h2x.accountplus.AccountStateResponse",
      value: AccountStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/h2x.accountplus.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/h2x.accountplus.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/h2x.accountplus.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/h2x.accountplus.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseGetAuthenticatorsRequest(): GetAuthenticatorsRequest {
  return {
    account: ""
  };
}
export const GetAuthenticatorsRequest = {
  typeUrl: "/h2x.accountplus.GetAuthenticatorsRequest",
  encode(message: GetAuthenticatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetAuthenticatorsRequest>): GetAuthenticatorsRequest {
    const message = createBaseGetAuthenticatorsRequest();
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: GetAuthenticatorsRequestAmino): GetAuthenticatorsRequest {
    const message = createBaseGetAuthenticatorsRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: GetAuthenticatorsRequest): GetAuthenticatorsRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    return obj;
  },
  fromAminoMsg(object: GetAuthenticatorsRequestAminoMsg): GetAuthenticatorsRequest {
    return GetAuthenticatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetAuthenticatorsRequestProtoMsg): GetAuthenticatorsRequest {
    return GetAuthenticatorsRequest.decode(message.value);
  },
  toProto(message: GetAuthenticatorsRequest): Uint8Array {
    return GetAuthenticatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetAuthenticatorsRequest): GetAuthenticatorsRequestProtoMsg {
    return {
      typeUrl: "/h2x.accountplus.GetAuthenticatorsRequest",
      value: GetAuthenticatorsRequest.encode(message).finish()
    };
  }
};
function createBaseGetAuthenticatorsResponse(): GetAuthenticatorsResponse {
  return {
    accountAuthenticators: []
  };
}
export const GetAuthenticatorsResponse = {
  typeUrl: "/h2x.accountplus.GetAuthenticatorsResponse",
  encode(message: GetAuthenticatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountAuthenticators) {
      AccountAuthenticator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAuthenticators.push(AccountAuthenticator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetAuthenticatorsResponse>): GetAuthenticatorsResponse {
    const message = createBaseGetAuthenticatorsResponse();
    message.accountAuthenticators = object.accountAuthenticators?.map(e => AccountAuthenticator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GetAuthenticatorsResponseAmino): GetAuthenticatorsResponse {
    const message = createBaseGetAuthenticatorsResponse();
    message.accountAuthenticators = object.account_authenticators?.map(e => AccountAuthenticator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GetAuthenticatorsResponse): GetAuthenticatorsResponseAmino {
    const obj: any = {};
    if (message.accountAuthenticators) {
      obj.account_authenticators = message.accountAuthenticators.map(e => e ? AccountAuthenticator.toAmino(e) : undefined);
    } else {
      obj.account_authenticators = message.accountAuthenticators;
    }
    return obj;
  },
  fromAminoMsg(object: GetAuthenticatorsResponseAminoMsg): GetAuthenticatorsResponse {
    return GetAuthenticatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetAuthenticatorsResponseProtoMsg): GetAuthenticatorsResponse {
    return GetAuthenticatorsResponse.decode(message.value);
  },
  toProto(message: GetAuthenticatorsResponse): Uint8Array {
    return GetAuthenticatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: GetAuthenticatorsResponse): GetAuthenticatorsResponseProtoMsg {
    return {
      typeUrl: "/h2x.accountplus.GetAuthenticatorsResponse",
      value: GetAuthenticatorsResponse.encode(message).finish()
    };
  }
};
function createBaseGetAuthenticatorRequest(): GetAuthenticatorRequest {
  return {
    account: "",
    authenticatorId: BigInt(0)
  };
}
export const GetAuthenticatorRequest = {
  typeUrl: "/h2x.accountplus.GetAuthenticatorRequest",
  encode(message: GetAuthenticatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.authenticatorId !== BigInt(0)) {
      writer.uint32(16).uint64(message.authenticatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.authenticatorId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetAuthenticatorRequest>): GetAuthenticatorRequest {
    const message = createBaseGetAuthenticatorRequest();
    message.account = object.account ?? "";
    message.authenticatorId = object.authenticatorId !== undefined && object.authenticatorId !== null ? BigInt(object.authenticatorId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GetAuthenticatorRequestAmino): GetAuthenticatorRequest {
    const message = createBaseGetAuthenticatorRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.authenticator_id !== undefined && object.authenticator_id !== null) {
      message.authenticatorId = BigInt(object.authenticator_id);
    }
    return message;
  },
  toAmino(message: GetAuthenticatorRequest): GetAuthenticatorRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.authenticator_id = message.authenticatorId !== BigInt(0) ? message.authenticatorId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GetAuthenticatorRequestAminoMsg): GetAuthenticatorRequest {
    return GetAuthenticatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetAuthenticatorRequestProtoMsg): GetAuthenticatorRequest {
    return GetAuthenticatorRequest.decode(message.value);
  },
  toProto(message: GetAuthenticatorRequest): Uint8Array {
    return GetAuthenticatorRequest.encode(message).finish();
  },
  toProtoMsg(message: GetAuthenticatorRequest): GetAuthenticatorRequestProtoMsg {
    return {
      typeUrl: "/h2x.accountplus.GetAuthenticatorRequest",
      value: GetAuthenticatorRequest.encode(message).finish()
    };
  }
};
function createBaseGetAuthenticatorResponse(): GetAuthenticatorResponse {
  return {
    accountAuthenticator: undefined
  };
}
export const GetAuthenticatorResponse = {
  typeUrl: "/h2x.accountplus.GetAuthenticatorResponse",
  encode(message: GetAuthenticatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAuthenticator !== undefined) {
      AccountAuthenticator.encode(message.accountAuthenticator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAuthenticator = AccountAuthenticator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetAuthenticatorResponse>): GetAuthenticatorResponse {
    const message = createBaseGetAuthenticatorResponse();
    message.accountAuthenticator = object.accountAuthenticator !== undefined && object.accountAuthenticator !== null ? AccountAuthenticator.fromPartial(object.accountAuthenticator) : undefined;
    return message;
  },
  fromAmino(object: GetAuthenticatorResponseAmino): GetAuthenticatorResponse {
    const message = createBaseGetAuthenticatorResponse();
    if (object.account_authenticator !== undefined && object.account_authenticator !== null) {
      message.accountAuthenticator = AccountAuthenticator.fromAmino(object.account_authenticator);
    }
    return message;
  },
  toAmino(message: GetAuthenticatorResponse): GetAuthenticatorResponseAmino {
    const obj: any = {};
    obj.account_authenticator = message.accountAuthenticator ? AccountAuthenticator.toAmino(message.accountAuthenticator) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetAuthenticatorResponseAminoMsg): GetAuthenticatorResponse {
    return GetAuthenticatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetAuthenticatorResponseProtoMsg): GetAuthenticatorResponse {
    return GetAuthenticatorResponse.decode(message.value);
  },
  toProto(message: GetAuthenticatorResponse): Uint8Array {
    return GetAuthenticatorResponse.encode(message).finish();
  },
  toProtoMsg(message: GetAuthenticatorResponse): GetAuthenticatorResponseProtoMsg {
    return {
      typeUrl: "/h2x.accountplus.GetAuthenticatorResponse",
      value: GetAuthenticatorResponse.encode(message).finish()
    };
  }
};