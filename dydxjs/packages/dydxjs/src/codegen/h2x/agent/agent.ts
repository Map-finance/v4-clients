//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** AgentInfo stores the information about a registered agent. */
export interface AgentInfo {
  /** The address of the agent wallet. */
  agentAddress: string;
  /** The address of the master wallet that authorized this agent. */
  masterAddress: string;
  /** Unix timestamp when this agent authorization expires. */
  expiryTimestamp: bigint;
  /** Optional name for the agent (max 20 characters). */
  name: string;
}
export interface AgentInfoProtoMsg {
  typeUrl: "/h2x.agent.AgentInfo";
  value: Uint8Array;
}
/**
 * AgentInfo stores the information about a registered agent.
 * @name AgentInfoAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.AgentInfo
 */
export interface AgentInfoAmino {
  /**
   * The address of the agent wallet.
   */
  agent_address?: string;
  /**
   * The address of the master wallet that authorized this agent.
   */
  master_address?: string;
  /**
   * Unix timestamp when this agent authorization expires.
   */
  expiry_timestamp?: string;
  /**
   * Optional name for the agent (max 20 characters).
   */
  name?: string;
}
export interface AgentInfoAminoMsg {
  type: "/h2x.agent.AgentInfo";
  value: AgentInfoAmino;
}
/** AgentInfo stores the information about a registered agent. */
export interface AgentInfoSDKType {
  agent_address: string;
  master_address: string;
  expiry_timestamp: bigint;
  name: string;
}
/**
 * MasterAgentList stores the list of agent addresses for a master wallet.
 * Used for efficient lookup of all agents belonging to a master address.
 * 存储主钱包的代理地址列表，用于高效查找主钱包下的所有代理
 */
export interface MasterAgentList {
  /**
   * List of agent addresses registered by this master wallet.
   * 该主钱包注册的代理地址列表
   */
  agentAddresses: string[];
}
export interface MasterAgentListProtoMsg {
  typeUrl: "/h2x.agent.MasterAgentList";
  value: Uint8Array;
}
/**
 * MasterAgentList stores the list of agent addresses for a master wallet.
 * Used for efficient lookup of all agents belonging to a master address.
 * 存储主钱包的代理地址列表，用于高效查找主钱包下的所有代理
 * @name MasterAgentListAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.MasterAgentList
 */
export interface MasterAgentListAmino {
  /**
   * List of agent addresses registered by this master wallet.
   * 该主钱包注册的代理地址列表
   */
  agent_addresses?: string[];
}
export interface MasterAgentListAminoMsg {
  type: "/h2x.agent.MasterAgentList";
  value: MasterAgentListAmino;
}
/**
 * MasterAgentList stores the list of agent addresses for a master wallet.
 * Used for efficient lookup of all agents belonging to a master address.
 * 存储主钱包的代理地址列表，用于高效查找主钱包下的所有代理
 */
export interface MasterAgentListSDKType {
  agent_addresses: string[];
}
/**
 * AgentParams defines the parameters for the agent module.
 * 代理模块参数定义
 * Agent 模块只负责维护代理注册表，不做消息类型限制
 */
export interface AgentParams {
  /**
   * Maximum number of agents allowed per master account (default: 4).
   * 每个主钱包允许的最大代理数量（默认：4个）
   */
  maxAgentsPerMaster: number;
  /**
   * Default expiry duration in seconds (default: 180 days = 15552000).
   * 代理授权的默认有效期（秒）（默认：180天 = 15552000秒）
   */
  defaultExpiryDuration: bigint;
  /**
   * Whether the agent feature is enabled (governance controlled).
   * 是否启用代理功能（通过治理控制）
   */
  enabled: boolean;
}
export interface AgentParamsProtoMsg {
  typeUrl: "/h2x.agent.AgentParams";
  value: Uint8Array;
}
/**
 * AgentParams defines the parameters for the agent module.
 * 代理模块参数定义
 * Agent 模块只负责维护代理注册表，不做消息类型限制
 * @name AgentParamsAmino
 * @package h2x.agent
 * @see proto type: h2x.agent.AgentParams
 */
export interface AgentParamsAmino {
  /**
   * Maximum number of agents allowed per master account (default: 4).
   * 每个主钱包允许的最大代理数量（默认：4个）
   */
  max_agents_per_master?: number;
  /**
   * Default expiry duration in seconds (default: 180 days = 15552000).
   * 代理授权的默认有效期（秒）（默认：180天 = 15552000秒）
   */
  default_expiry_duration?: string;
  /**
   * Whether the agent feature is enabled (governance controlled).
   * 是否启用代理功能（通过治理控制）
   */
  enabled?: boolean;
}
export interface AgentParamsAminoMsg {
  type: "/h2x.agent.AgentParams";
  value: AgentParamsAmino;
}
/**
 * AgentParams defines the parameters for the agent module.
 * 代理模块参数定义
 * Agent 模块只负责维护代理注册表，不做消息类型限制
 */
export interface AgentParamsSDKType {
  max_agents_per_master: number;
  default_expiry_duration: bigint;
  enabled: boolean;
}
function createBaseAgentInfo(): AgentInfo {
  return {
    agentAddress: "",
    masterAddress: "",
    expiryTimestamp: BigInt(0),
    name: ""
  };
}
export const AgentInfo = {
  typeUrl: "/h2x.agent.AgentInfo",
  encode(message: AgentInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.agentAddress !== "") {
      writer.uint32(10).string(message.agentAddress);
    }
    if (message.masterAddress !== "") {
      writer.uint32(18).string(message.masterAddress);
    }
    if (message.expiryTimestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.expiryTimestamp);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AgentInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgentInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentAddress = reader.string();
          break;
        case 2:
          message.masterAddress = reader.string();
          break;
        case 3:
          message.expiryTimestamp = reader.uint64();
          break;
        case 4:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AgentInfo>): AgentInfo {
    const message = createBaseAgentInfo();
    message.agentAddress = object.agentAddress ?? "";
    message.masterAddress = object.masterAddress ?? "";
    message.expiryTimestamp = object.expiryTimestamp !== undefined && object.expiryTimestamp !== null ? BigInt(object.expiryTimestamp.toString()) : BigInt(0);
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: AgentInfoAmino): AgentInfo {
    const message = createBaseAgentInfo();
    if (object.agent_address !== undefined && object.agent_address !== null) {
      message.agentAddress = object.agent_address;
    }
    if (object.master_address !== undefined && object.master_address !== null) {
      message.masterAddress = object.master_address;
    }
    if (object.expiry_timestamp !== undefined && object.expiry_timestamp !== null) {
      message.expiryTimestamp = BigInt(object.expiry_timestamp);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: AgentInfo): AgentInfoAmino {
    const obj: any = {};
    obj.agent_address = message.agentAddress === "" ? undefined : message.agentAddress;
    obj.master_address = message.masterAddress === "" ? undefined : message.masterAddress;
    obj.expiry_timestamp = message.expiryTimestamp !== BigInt(0) ? message.expiryTimestamp?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: AgentInfoAminoMsg): AgentInfo {
    return AgentInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: AgentInfoProtoMsg): AgentInfo {
    return AgentInfo.decode(message.value);
  },
  toProto(message: AgentInfo): Uint8Array {
    return AgentInfo.encode(message).finish();
  },
  toProtoMsg(message: AgentInfo): AgentInfoProtoMsg {
    return {
      typeUrl: "/h2x.agent.AgentInfo",
      value: AgentInfo.encode(message).finish()
    };
  }
};
function createBaseMasterAgentList(): MasterAgentList {
  return {
    agentAddresses: []
  };
}
export const MasterAgentList = {
  typeUrl: "/h2x.agent.MasterAgentList",
  encode(message: MasterAgentList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.agentAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MasterAgentList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterAgentList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MasterAgentList>): MasterAgentList {
    const message = createBaseMasterAgentList();
    message.agentAddresses = object.agentAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MasterAgentListAmino): MasterAgentList {
    const message = createBaseMasterAgentList();
    message.agentAddresses = object.agent_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: MasterAgentList): MasterAgentListAmino {
    const obj: any = {};
    if (message.agentAddresses) {
      obj.agent_addresses = message.agentAddresses.map(e => e);
    } else {
      obj.agent_addresses = message.agentAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: MasterAgentListAminoMsg): MasterAgentList {
    return MasterAgentList.fromAmino(object.value);
  },
  fromProtoMsg(message: MasterAgentListProtoMsg): MasterAgentList {
    return MasterAgentList.decode(message.value);
  },
  toProto(message: MasterAgentList): Uint8Array {
    return MasterAgentList.encode(message).finish();
  },
  toProtoMsg(message: MasterAgentList): MasterAgentListProtoMsg {
    return {
      typeUrl: "/h2x.agent.MasterAgentList",
      value: MasterAgentList.encode(message).finish()
    };
  }
};
function createBaseAgentParams(): AgentParams {
  return {
    maxAgentsPerMaster: 0,
    defaultExpiryDuration: BigInt(0),
    enabled: false
  };
}
export const AgentParams = {
  typeUrl: "/h2x.agent.AgentParams",
  encode(message: AgentParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxAgentsPerMaster !== 0) {
      writer.uint32(8).uint32(message.maxAgentsPerMaster);
    }
    if (message.defaultExpiryDuration !== BigInt(0)) {
      writer.uint32(16).uint64(message.defaultExpiryDuration);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AgentParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgentParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgentsPerMaster = reader.uint32();
          break;
        case 2:
          message.defaultExpiryDuration = reader.uint64();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AgentParams>): AgentParams {
    const message = createBaseAgentParams();
    message.maxAgentsPerMaster = object.maxAgentsPerMaster ?? 0;
    message.defaultExpiryDuration = object.defaultExpiryDuration !== undefined && object.defaultExpiryDuration !== null ? BigInt(object.defaultExpiryDuration.toString()) : BigInt(0);
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: AgentParamsAmino): AgentParams {
    const message = createBaseAgentParams();
    if (object.max_agents_per_master !== undefined && object.max_agents_per_master !== null) {
      message.maxAgentsPerMaster = object.max_agents_per_master;
    }
    if (object.default_expiry_duration !== undefined && object.default_expiry_duration !== null) {
      message.defaultExpiryDuration = BigInt(object.default_expiry_duration);
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: AgentParams): AgentParamsAmino {
    const obj: any = {};
    obj.max_agents_per_master = message.maxAgentsPerMaster === 0 ? undefined : message.maxAgentsPerMaster;
    obj.default_expiry_duration = message.defaultExpiryDuration !== BigInt(0) ? message.defaultExpiryDuration?.toString() : undefined;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    return obj;
  },
  fromAminoMsg(object: AgentParamsAminoMsg): AgentParams {
    return AgentParams.fromAmino(object.value);
  },
  fromProtoMsg(message: AgentParamsProtoMsg): AgentParams {
    return AgentParams.decode(message.value);
  },
  toProto(message: AgentParams): Uint8Array {
    return AgentParams.encode(message).finish();
  },
  toProtoMsg(message: AgentParams): AgentParamsProtoMsg {
    return {
      typeUrl: "/h2x.agent.AgentParams",
      value: AgentParams.encode(message).finish()
    };
  }
};