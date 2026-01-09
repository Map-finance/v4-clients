//@ts-nocheck
import { AgentParams, AgentParamsAmino, AgentParamsSDKType, AgentInfo, AgentInfoAmino, AgentInfoSDKType } from "./agent";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the agent module's genesis state. */
export interface GenesisState {
  /** Module parameters. */
  params: AgentParams;
  /** List of all registered agents. */
  agents: AgentInfo[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/h2x.agent.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the agent module's genesis state.
 * @name GenesisStateAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * Module parameters.
   */
  params?: AgentParamsAmino;
  /**
   * List of all registered agents.
   */
  agents?: AgentInfoAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/h2x.agent.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the agent module's genesis state. */
export interface GenesisStateSDKType {
  params: AgentParamsSDKType;
  agents: AgentInfoSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: AgentParams.fromPartial({}),
    agents: []
  };
}
export const GenesisState = {
  typeUrl: "/h2x.agent.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      AgentParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.agents) {
      AgentInfo.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.params = AgentParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.agents.push(AgentInfo.decode(reader, reader.uint32()));
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
    message.params = object.params !== undefined && object.params !== null ? AgentParams.fromPartial(object.params) : undefined;
    message.agents = object.agents?.map(e => AgentInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = AgentParams.fromAmino(object.params);
    }
    message.agents = object.agents?.map(e => AgentInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? AgentParams.toAmino(message.params) : undefined;
    if (message.agents) {
      obj.agents = message.agents.map(e => e ? AgentInfo.toAmino(e) : undefined);
    } else {
      obj.agents = message.agents;
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
      typeUrl: "/h2x.agent.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};