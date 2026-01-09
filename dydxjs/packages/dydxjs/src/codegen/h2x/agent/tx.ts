//@ts-nocheck
import { AgentParams, AgentParamsAmino, AgentParamsSDKType } from "./agent";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgRegisterAgent is the request type for registering a new agent. */
export interface MsgRegisterAgent {
  /** The master wallet address (signer). */
  masterAddress: string;
  /** The agent wallet address to authorize. */
  agentAddress: string;
  /** Optional name for the agent (max 20 characters). */
  name: string;
  /** Optional custom expiry timestamp. If 0, uses default duration. */
  expiryTimestamp: bigint;
}
export interface MsgRegisterAgentProtoMsg {
  typeUrl: "/h2x.agent.MsgRegisterAgent";
  value: Uint8Array;
}
/**
 * MsgRegisterAgent is the request type for registering a new agent.
 * @name MsgRegisterAgentAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.MsgRegisterAgent
 */
export interface MsgRegisterAgentAmino {
  /**
   * The master wallet address (signer).
   */
  master_address?: string;
  /**
   * The agent wallet address to authorize.
   */
  agent_address?: string;
  /**
   * Optional name for the agent (max 20 characters).
   */
  name?: string;
  /**
   * Optional custom expiry timestamp. If 0, uses default duration.
   */
  expiry_timestamp?: string;
}
export interface MsgRegisterAgentAminoMsg {
  type: "/h2x.agent.MsgRegisterAgent";
  value: MsgRegisterAgentAmino;
}
/** MsgRegisterAgent is the request type for registering a new agent. */
export interface MsgRegisterAgentSDKType {
  master_address: string;
  agent_address: string;
  name: string;
  expiry_timestamp: bigint;
}
/** MsgRegisterAgentResponse is the response type for RegisterAgent. */
export interface MsgRegisterAgentResponse {}
export interface MsgRegisterAgentResponseProtoMsg {
  typeUrl: "/h2x.agent.MsgRegisterAgentResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterAgentResponse is the response type for RegisterAgent.
 * @name MsgRegisterAgentResponseAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.MsgRegisterAgentResponse
 */
export interface MsgRegisterAgentResponseAmino {}
export interface MsgRegisterAgentResponseAminoMsg {
  type: "/h2x.agent.MsgRegisterAgentResponse";
  value: MsgRegisterAgentResponseAmino;
}
/** MsgRegisterAgentResponse is the response type for RegisterAgent. */
export interface MsgRegisterAgentResponseSDKType {}
/** MsgRemoveAgent is the request type for removing an agent. */
export interface MsgRemoveAgent {
  /** The master wallet address (signer). */
  masterAddress: string;
  /** The agent wallet address to remove. */
  agentAddress: string;
}
export interface MsgRemoveAgentProtoMsg {
  typeUrl: "/h2x.agent.MsgRemoveAgent";
  value: Uint8Array;
}
/**
 * MsgRemoveAgent is the request type for removing an agent.
 * @name MsgRemoveAgentAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.MsgRemoveAgent
 */
export interface MsgRemoveAgentAmino {
  /**
   * The master wallet address (signer).
   */
  master_address?: string;
  /**
   * The agent wallet address to remove.
   */
  agent_address?: string;
}
export interface MsgRemoveAgentAminoMsg {
  type: "/h2x.agent.MsgRemoveAgent";
  value: MsgRemoveAgentAmino;
}
/** MsgRemoveAgent is the request type for removing an agent. */
export interface MsgRemoveAgentSDKType {
  master_address: string;
  agent_address: string;
}
/** MsgRemoveAgentResponse is the response type for RemoveAgent. */
export interface MsgRemoveAgentResponse {}
export interface MsgRemoveAgentResponseProtoMsg {
  typeUrl: "/h2x.agent.MsgRemoveAgentResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveAgentResponse is the response type for RemoveAgent.
 * @name MsgRemoveAgentResponseAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.MsgRemoveAgentResponse
 */
export interface MsgRemoveAgentResponseAmino {}
export interface MsgRemoveAgentResponseAminoMsg {
  type: "/h2x.agent.MsgRemoveAgentResponse";
  value: MsgRemoveAgentResponseAmino;
}
/** MsgRemoveAgentResponse is the response type for RemoveAgent. */
export interface MsgRemoveAgentResponseSDKType {}
/** MsgUpdateAgentParams is the request type for updating module parameters. */
export interface MsgUpdateAgentParams {
  /** The address that controls the module (governance module account). */
  authority: string;
  /** The new parameters to set. */
  params: AgentParams;
}
export interface MsgUpdateAgentParamsProtoMsg {
  typeUrl: "/h2x.agent.MsgUpdateAgentParams";
  value: Uint8Array;
}
/**
 * MsgUpdateAgentParams is the request type for updating module parameters.
 * @name MsgUpdateAgentParamsAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.MsgUpdateAgentParams
 */
export interface MsgUpdateAgentParamsAmino {
  /**
   * The address that controls the module (governance module account).
   */
  authority?: string;
  /**
   * The new parameters to set.
   */
  params?: AgentParamsAmino;
}
export interface MsgUpdateAgentParamsAminoMsg {
  type: "/h2x.agent.MsgUpdateAgentParams";
  value: MsgUpdateAgentParamsAmino;
}
/** MsgUpdateAgentParams is the request type for updating module parameters. */
export interface MsgUpdateAgentParamsSDKType {
  authority: string;
  params: AgentParamsSDKType;
}
/** MsgUpdateAgentParamsResponse is the response type for UpdateAgentParams. */
export interface MsgUpdateAgentParamsResponse {}
export interface MsgUpdateAgentParamsResponseProtoMsg {
  typeUrl: "/h2x.agent.MsgUpdateAgentParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateAgentParamsResponse is the response type for UpdateAgentParams.
 * @name MsgUpdateAgentParamsResponseAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.MsgUpdateAgentParamsResponse
 */
export interface MsgUpdateAgentParamsResponseAmino {}
export interface MsgUpdateAgentParamsResponseAminoMsg {
  type: "/h2x.agent.MsgUpdateAgentParamsResponse";
  value: MsgUpdateAgentParamsResponseAmino;
}
/** MsgUpdateAgentParamsResponse is the response type for UpdateAgentParams. */
export interface MsgUpdateAgentParamsResponseSDKType {}
function createBaseMsgRegisterAgent(): MsgRegisterAgent {
  return {
    masterAddress: "",
    agentAddress: "",
    name: "",
    expiryTimestamp: BigInt(0)
  };
}
export const MsgRegisterAgent = {
  typeUrl: "/h2x.agent.MsgRegisterAgent",
  encode(message: MsgRegisterAgent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.masterAddress !== "") {
      writer.uint32(10).string(message.masterAddress);
    }
    if (message.agentAddress !== "") {
      writer.uint32(18).string(message.agentAddress);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.expiryTimestamp !== BigInt(0)) {
      writer.uint32(32).uint64(message.expiryTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAgent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterAddress = reader.string();
          break;
        case 2:
          message.agentAddress = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.expiryTimestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterAgent>): MsgRegisterAgent {
    const message = createBaseMsgRegisterAgent();
    message.masterAddress = object.masterAddress ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.name = object.name ?? "";
    message.expiryTimestamp = object.expiryTimestamp !== undefined && object.expiryTimestamp !== null ? BigInt(object.expiryTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRegisterAgentAmino): MsgRegisterAgent {
    const message = createBaseMsgRegisterAgent();
    if (object.master_address !== undefined && object.master_address !== null) {
      message.masterAddress = object.master_address;
    }
    if (object.agent_address !== undefined && object.agent_address !== null) {
      message.agentAddress = object.agent_address;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.expiry_timestamp !== undefined && object.expiry_timestamp !== null) {
      message.expiryTimestamp = BigInt(object.expiry_timestamp);
    }
    return message;
  },
  toAmino(message: MsgRegisterAgent): MsgRegisterAgentAmino {
    const obj: any = {};
    obj.master_address = message.masterAddress === "" ? undefined : message.masterAddress;
    obj.agent_address = message.agentAddress === "" ? undefined : message.agentAddress;
    obj.name = message.name === "" ? undefined : message.name;
    obj.expiry_timestamp = message.expiryTimestamp !== BigInt(0) ? message.expiryTimestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAgentAminoMsg): MsgRegisterAgent {
    return MsgRegisterAgent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAgentProtoMsg): MsgRegisterAgent {
    return MsgRegisterAgent.decode(message.value);
  },
  toProto(message: MsgRegisterAgent): Uint8Array {
    return MsgRegisterAgent.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAgent): MsgRegisterAgentProtoMsg {
    return {
      typeUrl: "/h2x.agent.MsgRegisterAgent",
      value: MsgRegisterAgent.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAgentResponse(): MsgRegisterAgentResponse {
  return {};
}
export const MsgRegisterAgentResponse = {
  typeUrl: "/h2x.agent.MsgRegisterAgentResponse",
  encode(_: MsgRegisterAgentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAgentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAgentResponse();
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
  fromPartial(_: Partial<MsgRegisterAgentResponse>): MsgRegisterAgentResponse {
    const message = createBaseMsgRegisterAgentResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAgentResponseAmino): MsgRegisterAgentResponse {
    const message = createBaseMsgRegisterAgentResponse();
    return message;
  },
  toAmino(_: MsgRegisterAgentResponse): MsgRegisterAgentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAgentResponseAminoMsg): MsgRegisterAgentResponse {
    return MsgRegisterAgentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAgentResponseProtoMsg): MsgRegisterAgentResponse {
    return MsgRegisterAgentResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAgentResponse): Uint8Array {
    return MsgRegisterAgentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAgentResponse): MsgRegisterAgentResponseProtoMsg {
    return {
      typeUrl: "/h2x.agent.MsgRegisterAgentResponse",
      value: MsgRegisterAgentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAgent(): MsgRemoveAgent {
  return {
    masterAddress: "",
    agentAddress: ""
  };
}
export const MsgRemoveAgent = {
  typeUrl: "/h2x.agent.MsgRemoveAgent",
  encode(message: MsgRemoveAgent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.masterAddress !== "") {
      writer.uint32(10).string(message.masterAddress);
    }
    if (message.agentAddress !== "") {
      writer.uint32(18).string(message.agentAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAgent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterAddress = reader.string();
          break;
        case 2:
          message.agentAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveAgent>): MsgRemoveAgent {
    const message = createBaseMsgRemoveAgent();
    message.masterAddress = object.masterAddress ?? "";
    message.agentAddress = object.agentAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveAgentAmino): MsgRemoveAgent {
    const message = createBaseMsgRemoveAgent();
    if (object.master_address !== undefined && object.master_address !== null) {
      message.masterAddress = object.master_address;
    }
    if (object.agent_address !== undefined && object.agent_address !== null) {
      message.agentAddress = object.agent_address;
    }
    return message;
  },
  toAmino(message: MsgRemoveAgent): MsgRemoveAgentAmino {
    const obj: any = {};
    obj.master_address = message.masterAddress === "" ? undefined : message.masterAddress;
    obj.agent_address = message.agentAddress === "" ? undefined : message.agentAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAgentAminoMsg): MsgRemoveAgent {
    return MsgRemoveAgent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAgentProtoMsg): MsgRemoveAgent {
    return MsgRemoveAgent.decode(message.value);
  },
  toProto(message: MsgRemoveAgent): Uint8Array {
    return MsgRemoveAgent.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAgent): MsgRemoveAgentProtoMsg {
    return {
      typeUrl: "/h2x.agent.MsgRemoveAgent",
      value: MsgRemoveAgent.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAgentResponse(): MsgRemoveAgentResponse {
  return {};
}
export const MsgRemoveAgentResponse = {
  typeUrl: "/h2x.agent.MsgRemoveAgentResponse",
  encode(_: MsgRemoveAgentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAgentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAgentResponse();
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
  fromPartial(_: Partial<MsgRemoveAgentResponse>): MsgRemoveAgentResponse {
    const message = createBaseMsgRemoveAgentResponse();
    return message;
  },
  fromAmino(_: MsgRemoveAgentResponseAmino): MsgRemoveAgentResponse {
    const message = createBaseMsgRemoveAgentResponse();
    return message;
  },
  toAmino(_: MsgRemoveAgentResponse): MsgRemoveAgentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAgentResponseAminoMsg): MsgRemoveAgentResponse {
    return MsgRemoveAgentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAgentResponseProtoMsg): MsgRemoveAgentResponse {
    return MsgRemoveAgentResponse.decode(message.value);
  },
  toProto(message: MsgRemoveAgentResponse): Uint8Array {
    return MsgRemoveAgentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAgentResponse): MsgRemoveAgentResponseProtoMsg {
    return {
      typeUrl: "/h2x.agent.MsgRemoveAgentResponse",
      value: MsgRemoveAgentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAgentParams(): MsgUpdateAgentParams {
  return {
    authority: "",
    params: AgentParams.fromPartial({})
  };
}
export const MsgUpdateAgentParams = {
  typeUrl: "/h2x.agent.MsgUpdateAgentParams",
  encode(message: MsgUpdateAgentParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      AgentParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAgentParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAgentParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = AgentParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAgentParams>): MsgUpdateAgentParams {
    const message = createBaseMsgUpdateAgentParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? AgentParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAgentParamsAmino): MsgUpdateAgentParams {
    const message = createBaseMsgUpdateAgentParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = AgentParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateAgentParams): MsgUpdateAgentParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? AgentParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAgentParamsAminoMsg): MsgUpdateAgentParams {
    return MsgUpdateAgentParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAgentParamsProtoMsg): MsgUpdateAgentParams {
    return MsgUpdateAgentParams.decode(message.value);
  },
  toProto(message: MsgUpdateAgentParams): Uint8Array {
    return MsgUpdateAgentParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAgentParams): MsgUpdateAgentParamsProtoMsg {
    return {
      typeUrl: "/h2x.agent.MsgUpdateAgentParams",
      value: MsgUpdateAgentParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAgentParamsResponse(): MsgUpdateAgentParamsResponse {
  return {};
}
export const MsgUpdateAgentParamsResponse = {
  typeUrl: "/h2x.agent.MsgUpdateAgentParamsResponse",
  encode(_: MsgUpdateAgentParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAgentParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAgentParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateAgentParamsResponse>): MsgUpdateAgentParamsResponse {
    const message = createBaseMsgUpdateAgentParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAgentParamsResponseAmino): MsgUpdateAgentParamsResponse {
    const message = createBaseMsgUpdateAgentParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateAgentParamsResponse): MsgUpdateAgentParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAgentParamsResponseAminoMsg): MsgUpdateAgentParamsResponse {
    return MsgUpdateAgentParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAgentParamsResponseProtoMsg): MsgUpdateAgentParamsResponse {
    return MsgUpdateAgentParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAgentParamsResponse): Uint8Array {
    return MsgUpdateAgentParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAgentParamsResponse): MsgUpdateAgentParamsResponseProtoMsg {
    return {
      typeUrl: "/h2x.agent.MsgUpdateAgentParamsResponse",
      value: MsgUpdateAgentParamsResponse.encode(message).finish()
    };
  }
};