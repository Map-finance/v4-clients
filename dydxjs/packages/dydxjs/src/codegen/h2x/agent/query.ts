//@ts-nocheck
import { AgentInfo, AgentInfoAmino, AgentInfoSDKType, AgentParams, AgentParamsAmino, AgentParamsSDKType } from "./agent";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryGetAgentInfoRequest is the request type for GetAgentInfo. */
export interface QueryGetAgentInfoRequest {
  agentAddress: string;
}
export interface QueryGetAgentInfoRequestProtoMsg {
  typeUrl: "/h2x.agent.QueryGetAgentInfoRequest";
  value: Uint8Array;
}
/**
 * QueryGetAgentInfoRequest is the request type for GetAgentInfo.
 * @name QueryGetAgentInfoRequestAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.QueryGetAgentInfoRequest
 */
export interface QueryGetAgentInfoRequestAmino {
  agent_address?: string;
}
export interface QueryGetAgentInfoRequestAminoMsg {
  type: "/h2x.agent.QueryGetAgentInfoRequest";
  value: QueryGetAgentInfoRequestAmino;
}
/** QueryGetAgentInfoRequest is the request type for GetAgentInfo. */
export interface QueryGetAgentInfoRequestSDKType {
  agent_address: string;
}
/** QueryGetAgentInfoResponse is the response type for GetAgentInfo. */
export interface QueryGetAgentInfoResponse {
  agentInfo?: AgentInfo;
}
export interface QueryGetAgentInfoResponseProtoMsg {
  typeUrl: "/h2x.agent.QueryGetAgentInfoResponse";
  value: Uint8Array;
}
/**
 * QueryGetAgentInfoResponse is the response type for GetAgentInfo.
 * @name QueryGetAgentInfoResponseAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.QueryGetAgentInfoResponse
 */
export interface QueryGetAgentInfoResponseAmino {
  agent_info?: AgentInfoAmino;
}
export interface QueryGetAgentInfoResponseAminoMsg {
  type: "/h2x.agent.QueryGetAgentInfoResponse";
  value: QueryGetAgentInfoResponseAmino;
}
/** QueryGetAgentInfoResponse is the response type for GetAgentInfo. */
export interface QueryGetAgentInfoResponseSDKType {
  agent_info?: AgentInfoSDKType;
}
/** QueryGetAgentsByMasterRequest is the request type for GetAgentsByMaster. */
export interface QueryGetAgentsByMasterRequest {
  masterAddress: string;
}
export interface QueryGetAgentsByMasterRequestProtoMsg {
  typeUrl: "/h2x.agent.QueryGetAgentsByMasterRequest";
  value: Uint8Array;
}
/**
 * QueryGetAgentsByMasterRequest is the request type for GetAgentsByMaster.
 * @name QueryGetAgentsByMasterRequestAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.QueryGetAgentsByMasterRequest
 */
export interface QueryGetAgentsByMasterRequestAmino {
  master_address?: string;
}
export interface QueryGetAgentsByMasterRequestAminoMsg {
  type: "/h2x.agent.QueryGetAgentsByMasterRequest";
  value: QueryGetAgentsByMasterRequestAmino;
}
/** QueryGetAgentsByMasterRequest is the request type for GetAgentsByMaster. */
export interface QueryGetAgentsByMasterRequestSDKType {
  master_address: string;
}
/** QueryGetAgentsByMasterResponse is the response type for GetAgentsByMaster. */
export interface QueryGetAgentsByMasterResponse {
  agents: AgentInfo[];
}
export interface QueryGetAgentsByMasterResponseProtoMsg {
  typeUrl: "/h2x.agent.QueryGetAgentsByMasterResponse";
  value: Uint8Array;
}
/**
 * QueryGetAgentsByMasterResponse is the response type for GetAgentsByMaster.
 * @name QueryGetAgentsByMasterResponseAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.QueryGetAgentsByMasterResponse
 */
export interface QueryGetAgentsByMasterResponseAmino {
  agents?: AgentInfoAmino[];
}
export interface QueryGetAgentsByMasterResponseAminoMsg {
  type: "/h2x.agent.QueryGetAgentsByMasterResponse";
  value: QueryGetAgentsByMasterResponseAmino;
}
/** QueryGetAgentsByMasterResponse is the response type for GetAgentsByMaster. */
export interface QueryGetAgentsByMasterResponseSDKType {
  agents: AgentInfoSDKType[];
}
/** QueryGetParamsRequest is the request type for GetParams. */
export interface QueryGetParamsRequest {}
export interface QueryGetParamsRequestProtoMsg {
  typeUrl: "/h2x.agent.QueryGetParamsRequest";
  value: Uint8Array;
}
/**
 * QueryGetParamsRequest is the request type for GetParams.
 * @name QueryGetParamsRequestAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.QueryGetParamsRequest
 */
export interface QueryGetParamsRequestAmino {}
export interface QueryGetParamsRequestAminoMsg {
  type: "/h2x.agent.QueryGetParamsRequest";
  value: QueryGetParamsRequestAmino;
}
/** QueryGetParamsRequest is the request type for GetParams. */
export interface QueryGetParamsRequestSDKType {}
/** QueryGetParamsResponse is the response type for GetParams. */
export interface QueryGetParamsResponse {
  params: AgentParams;
}
export interface QueryGetParamsResponseProtoMsg {
  typeUrl: "/h2x.agent.QueryGetParamsResponse";
  value: Uint8Array;
}
/**
 * QueryGetParamsResponse is the response type for GetParams.
 * @name QueryGetParamsResponseAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.QueryGetParamsResponse
 */
export interface QueryGetParamsResponseAmino {
  params?: AgentParamsAmino;
}
export interface QueryGetParamsResponseAminoMsg {
  type: "/h2x.agent.QueryGetParamsResponse";
  value: QueryGetParamsResponseAmino;
}
/** QueryGetParamsResponse is the response type for GetParams. */
export interface QueryGetParamsResponseSDKType {
  params: AgentParamsSDKType;
}
/** QueryGetMasterByAgentRequest is the request type for GetMasterByAgent. */
export interface QueryGetMasterByAgentRequest {
  agentAddress: string;
}
export interface QueryGetMasterByAgentRequestProtoMsg {
  typeUrl: "/h2x.agent.QueryGetMasterByAgentRequest";
  value: Uint8Array;
}
/**
 * QueryGetMasterByAgentRequest is the request type for GetMasterByAgent.
 * @name QueryGetMasterByAgentRequestAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.QueryGetMasterByAgentRequest
 */
export interface QueryGetMasterByAgentRequestAmino {
  agent_address?: string;
}
export interface QueryGetMasterByAgentRequestAminoMsg {
  type: "/h2x.agent.QueryGetMasterByAgentRequest";
  value: QueryGetMasterByAgentRequestAmino;
}
/** QueryGetMasterByAgentRequest is the request type for GetMasterByAgent. */
export interface QueryGetMasterByAgentRequestSDKType {
  agent_address: string;
}
/** QueryGetMasterByAgentResponse is the response type for GetMasterByAgent. */
export interface QueryGetMasterByAgentResponse {
  masterAddress: string;
  isValid: boolean;
}
export interface QueryGetMasterByAgentResponseProtoMsg {
  typeUrl: "/h2x.agent.QueryGetMasterByAgentResponse";
  value: Uint8Array;
}
/**
 * QueryGetMasterByAgentResponse is the response type for GetMasterByAgent.
 * @name QueryGetMasterByAgentResponseAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.QueryGetMasterByAgentResponse
 */
export interface QueryGetMasterByAgentResponseAmino {
  master_address?: string;
  is_valid?: boolean;
}
export interface QueryGetMasterByAgentResponseAminoMsg {
  type: "/h2x.agent.QueryGetMasterByAgentResponse";
  value: QueryGetMasterByAgentResponseAmino;
}
/** QueryGetMasterByAgentResponse is the response type for GetMasterByAgent. */
export interface QueryGetMasterByAgentResponseSDKType {
  master_address: string;
  is_valid: boolean;
}
function createBaseQueryGetAgentInfoRequest(): QueryGetAgentInfoRequest {
  return {
    agentAddress: ""
  };
}
export const QueryGetAgentInfoRequest = {
  typeUrl: "/h2x.agent.QueryGetAgentInfoRequest",
  encode(message: QueryGetAgentInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.agentAddress !== "") {
      writer.uint32(10).string(message.agentAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAgentInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAgentInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAgentInfoRequest>): QueryGetAgentInfoRequest {
    const message = createBaseQueryGetAgentInfoRequest();
    message.agentAddress = object.agentAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetAgentInfoRequestAmino): QueryGetAgentInfoRequest {
    const message = createBaseQueryGetAgentInfoRequest();
    if (object.agent_address !== undefined && object.agent_address !== null) {
      message.agentAddress = object.agent_address;
    }
    return message;
  },
  toAmino(message: QueryGetAgentInfoRequest): QueryGetAgentInfoRequestAmino {
    const obj: any = {};
    obj.agent_address = message.agentAddress === "" ? undefined : message.agentAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetAgentInfoRequestAminoMsg): QueryGetAgentInfoRequest {
    return QueryGetAgentInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAgentInfoRequestProtoMsg): QueryGetAgentInfoRequest {
    return QueryGetAgentInfoRequest.decode(message.value);
  },
  toProto(message: QueryGetAgentInfoRequest): Uint8Array {
    return QueryGetAgentInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAgentInfoRequest): QueryGetAgentInfoRequestProtoMsg {
    return {
      typeUrl: "/h2x.agent.QueryGetAgentInfoRequest",
      value: QueryGetAgentInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAgentInfoResponse(): QueryGetAgentInfoResponse {
  return {
    agentInfo: undefined
  };
}
export const QueryGetAgentInfoResponse = {
  typeUrl: "/h2x.agent.QueryGetAgentInfoResponse",
  encode(message: QueryGetAgentInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.agentInfo !== undefined) {
      AgentInfo.encode(message.agentInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAgentInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAgentInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentInfo = AgentInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAgentInfoResponse>): QueryGetAgentInfoResponse {
    const message = createBaseQueryGetAgentInfoResponse();
    message.agentInfo = object.agentInfo !== undefined && object.agentInfo !== null ? AgentInfo.fromPartial(object.agentInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAgentInfoResponseAmino): QueryGetAgentInfoResponse {
    const message = createBaseQueryGetAgentInfoResponse();
    if (object.agent_info !== undefined && object.agent_info !== null) {
      message.agentInfo = AgentInfo.fromAmino(object.agent_info);
    }
    return message;
  },
  toAmino(message: QueryGetAgentInfoResponse): QueryGetAgentInfoResponseAmino {
    const obj: any = {};
    obj.agent_info = message.agentInfo ? AgentInfo.toAmino(message.agentInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAgentInfoResponseAminoMsg): QueryGetAgentInfoResponse {
    return QueryGetAgentInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAgentInfoResponseProtoMsg): QueryGetAgentInfoResponse {
    return QueryGetAgentInfoResponse.decode(message.value);
  },
  toProto(message: QueryGetAgentInfoResponse): Uint8Array {
    return QueryGetAgentInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAgentInfoResponse): QueryGetAgentInfoResponseProtoMsg {
    return {
      typeUrl: "/h2x.agent.QueryGetAgentInfoResponse",
      value: QueryGetAgentInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetAgentsByMasterRequest(): QueryGetAgentsByMasterRequest {
  return {
    masterAddress: ""
  };
}
export const QueryGetAgentsByMasterRequest = {
  typeUrl: "/h2x.agent.QueryGetAgentsByMasterRequest",
  encode(message: QueryGetAgentsByMasterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.masterAddress !== "") {
      writer.uint32(10).string(message.masterAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAgentsByMasterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAgentsByMasterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAgentsByMasterRequest>): QueryGetAgentsByMasterRequest {
    const message = createBaseQueryGetAgentsByMasterRequest();
    message.masterAddress = object.masterAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetAgentsByMasterRequestAmino): QueryGetAgentsByMasterRequest {
    const message = createBaseQueryGetAgentsByMasterRequest();
    if (object.master_address !== undefined && object.master_address !== null) {
      message.masterAddress = object.master_address;
    }
    return message;
  },
  toAmino(message: QueryGetAgentsByMasterRequest): QueryGetAgentsByMasterRequestAmino {
    const obj: any = {};
    obj.master_address = message.masterAddress === "" ? undefined : message.masterAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetAgentsByMasterRequestAminoMsg): QueryGetAgentsByMasterRequest {
    return QueryGetAgentsByMasterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAgentsByMasterRequestProtoMsg): QueryGetAgentsByMasterRequest {
    return QueryGetAgentsByMasterRequest.decode(message.value);
  },
  toProto(message: QueryGetAgentsByMasterRequest): Uint8Array {
    return QueryGetAgentsByMasterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAgentsByMasterRequest): QueryGetAgentsByMasterRequestProtoMsg {
    return {
      typeUrl: "/h2x.agent.QueryGetAgentsByMasterRequest",
      value: QueryGetAgentsByMasterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAgentsByMasterResponse(): QueryGetAgentsByMasterResponse {
  return {
    agents: []
  };
}
export const QueryGetAgentsByMasterResponse = {
  typeUrl: "/h2x.agent.QueryGetAgentsByMasterResponse",
  encode(message: QueryGetAgentsByMasterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.agents) {
      AgentInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAgentsByMasterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAgentsByMasterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agents.push(AgentInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAgentsByMasterResponse>): QueryGetAgentsByMasterResponse {
    const message = createBaseQueryGetAgentsByMasterResponse();
    message.agents = object.agents?.map(e => AgentInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetAgentsByMasterResponseAmino): QueryGetAgentsByMasterResponse {
    const message = createBaseQueryGetAgentsByMasterResponse();
    message.agents = object.agents?.map(e => AgentInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetAgentsByMasterResponse): QueryGetAgentsByMasterResponseAmino {
    const obj: any = {};
    if (message.agents) {
      obj.agents = message.agents.map(e => e ? AgentInfo.toAmino(e) : undefined);
    } else {
      obj.agents = message.agents;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetAgentsByMasterResponseAminoMsg): QueryGetAgentsByMasterResponse {
    return QueryGetAgentsByMasterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAgentsByMasterResponseProtoMsg): QueryGetAgentsByMasterResponse {
    return QueryGetAgentsByMasterResponse.decode(message.value);
  },
  toProto(message: QueryGetAgentsByMasterResponse): Uint8Array {
    return QueryGetAgentsByMasterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAgentsByMasterResponse): QueryGetAgentsByMasterResponseProtoMsg {
    return {
      typeUrl: "/h2x.agent.QueryGetAgentsByMasterResponse",
      value: QueryGetAgentsByMasterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetParamsRequest(): QueryGetParamsRequest {
  return {};
}
export const QueryGetParamsRequest = {
  typeUrl: "/h2x.agent.QueryGetParamsRequest",
  encode(_: QueryGetParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetParamsRequest();
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
  fromPartial(_: Partial<QueryGetParamsRequest>): QueryGetParamsRequest {
    const message = createBaseQueryGetParamsRequest();
    return message;
  },
  fromAmino(_: QueryGetParamsRequestAmino): QueryGetParamsRequest {
    const message = createBaseQueryGetParamsRequest();
    return message;
  },
  toAmino(_: QueryGetParamsRequest): QueryGetParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetParamsRequestAminoMsg): QueryGetParamsRequest {
    return QueryGetParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetParamsRequestProtoMsg): QueryGetParamsRequest {
    return QueryGetParamsRequest.decode(message.value);
  },
  toProto(message: QueryGetParamsRequest): Uint8Array {
    return QueryGetParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetParamsRequest): QueryGetParamsRequestProtoMsg {
    return {
      typeUrl: "/h2x.agent.QueryGetParamsRequest",
      value: QueryGetParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetParamsResponse(): QueryGetParamsResponse {
  return {
    params: AgentParams.fromPartial({})
  };
}
export const QueryGetParamsResponse = {
  typeUrl: "/h2x.agent.QueryGetParamsResponse",
  encode(message: QueryGetParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      AgentParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = AgentParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetParamsResponse>): QueryGetParamsResponse {
    const message = createBaseQueryGetParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? AgentParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryGetParamsResponseAmino): QueryGetParamsResponse {
    const message = createBaseQueryGetParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = AgentParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryGetParamsResponse): QueryGetParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? AgentParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetParamsResponseAminoMsg): QueryGetParamsResponse {
    return QueryGetParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetParamsResponseProtoMsg): QueryGetParamsResponse {
    return QueryGetParamsResponse.decode(message.value);
  },
  toProto(message: QueryGetParamsResponse): Uint8Array {
    return QueryGetParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetParamsResponse): QueryGetParamsResponseProtoMsg {
    return {
      typeUrl: "/h2x.agent.QueryGetParamsResponse",
      value: QueryGetParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMasterByAgentRequest(): QueryGetMasterByAgentRequest {
  return {
    agentAddress: ""
  };
}
export const QueryGetMasterByAgentRequest = {
  typeUrl: "/h2x.agent.QueryGetMasterByAgentRequest",
  encode(message: QueryGetMasterByAgentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.agentAddress !== "") {
      writer.uint32(10).string(message.agentAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMasterByAgentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMasterByAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMasterByAgentRequest>): QueryGetMasterByAgentRequest {
    const message = createBaseQueryGetMasterByAgentRequest();
    message.agentAddress = object.agentAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetMasterByAgentRequestAmino): QueryGetMasterByAgentRequest {
    const message = createBaseQueryGetMasterByAgentRequest();
    if (object.agent_address !== undefined && object.agent_address !== null) {
      message.agentAddress = object.agent_address;
    }
    return message;
  },
  toAmino(message: QueryGetMasterByAgentRequest): QueryGetMasterByAgentRequestAmino {
    const obj: any = {};
    obj.agent_address = message.agentAddress === "" ? undefined : message.agentAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetMasterByAgentRequestAminoMsg): QueryGetMasterByAgentRequest {
    return QueryGetMasterByAgentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMasterByAgentRequestProtoMsg): QueryGetMasterByAgentRequest {
    return QueryGetMasterByAgentRequest.decode(message.value);
  },
  toProto(message: QueryGetMasterByAgentRequest): Uint8Array {
    return QueryGetMasterByAgentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMasterByAgentRequest): QueryGetMasterByAgentRequestProtoMsg {
    return {
      typeUrl: "/h2x.agent.QueryGetMasterByAgentRequest",
      value: QueryGetMasterByAgentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMasterByAgentResponse(): QueryGetMasterByAgentResponse {
  return {
    masterAddress: "",
    isValid: false
  };
}
export const QueryGetMasterByAgentResponse = {
  typeUrl: "/h2x.agent.QueryGetMasterByAgentResponse",
  encode(message: QueryGetMasterByAgentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.masterAddress !== "") {
      writer.uint32(10).string(message.masterAddress);
    }
    if (message.isValid === true) {
      writer.uint32(16).bool(message.isValid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMasterByAgentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMasterByAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterAddress = reader.string();
          break;
        case 2:
          message.isValid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMasterByAgentResponse>): QueryGetMasterByAgentResponse {
    const message = createBaseQueryGetMasterByAgentResponse();
    message.masterAddress = object.masterAddress ?? "";
    message.isValid = object.isValid ?? false;
    return message;
  },
  fromAmino(object: QueryGetMasterByAgentResponseAmino): QueryGetMasterByAgentResponse {
    const message = createBaseQueryGetMasterByAgentResponse();
    if (object.master_address !== undefined && object.master_address !== null) {
      message.masterAddress = object.master_address;
    }
    if (object.is_valid !== undefined && object.is_valid !== null) {
      message.isValid = object.is_valid;
    }
    return message;
  },
  toAmino(message: QueryGetMasterByAgentResponse): QueryGetMasterByAgentResponseAmino {
    const obj: any = {};
    obj.master_address = message.masterAddress === "" ? undefined : message.masterAddress;
    obj.is_valid = message.isValid === false ? undefined : message.isValid;
    return obj;
  },
  fromAminoMsg(object: QueryGetMasterByAgentResponseAminoMsg): QueryGetMasterByAgentResponse {
    return QueryGetMasterByAgentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMasterByAgentResponseProtoMsg): QueryGetMasterByAgentResponse {
    return QueryGetMasterByAgentResponse.decode(message.value);
  },
  toProto(message: QueryGetMasterByAgentResponse): Uint8Array {
    return QueryGetMasterByAgentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMasterByAgentResponse): QueryGetMasterByAgentResponseProtoMsg {
    return {
      typeUrl: "/h2x.agent.QueryGetMasterByAgentResponse",
      value: QueryGetMasterByAgentResponse.encode(message).finish()
    };
  }
};