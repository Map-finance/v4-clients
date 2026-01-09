//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAgent, MsgRemoveAgent, MsgUpdateAgentParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.agent.MsgRegisterAgent", MsgRegisterAgent], ["/h2x.agent.MsgRemoveAgent", MsgRemoveAgent], ["/h2x.agent.MsgUpdateAgentParams", MsgUpdateAgentParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAgent(value: MsgRegisterAgent) {
      return {
        typeUrl: "/h2x.agent.MsgRegisterAgent",
        value: MsgRegisterAgent.encode(value).finish()
      };
    },
    removeAgent(value: MsgRemoveAgent) {
      return {
        typeUrl: "/h2x.agent.MsgRemoveAgent",
        value: MsgRemoveAgent.encode(value).finish()
      };
    },
    updateAgentParams(value: MsgUpdateAgentParams) {
      return {
        typeUrl: "/h2x.agent.MsgUpdateAgentParams",
        value: MsgUpdateAgentParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAgent(value: MsgRegisterAgent) {
      return {
        typeUrl: "/h2x.agent.MsgRegisterAgent",
        value
      };
    },
    removeAgent(value: MsgRemoveAgent) {
      return {
        typeUrl: "/h2x.agent.MsgRemoveAgent",
        value
      };
    },
    updateAgentParams(value: MsgUpdateAgentParams) {
      return {
        typeUrl: "/h2x.agent.MsgUpdateAgentParams",
        value
      };
    }
  },
  fromPartial: {
    registerAgent(value: MsgRegisterAgent) {
      return {
        typeUrl: "/h2x.agent.MsgRegisterAgent",
        value: MsgRegisterAgent.fromPartial(value)
      };
    },
    removeAgent(value: MsgRemoveAgent) {
      return {
        typeUrl: "/h2x.agent.MsgRemoveAgent",
        value: MsgRemoveAgent.fromPartial(value)
      };
    },
    updateAgentParams(value: MsgUpdateAgentParams) {
      return {
        typeUrl: "/h2x.agent.MsgUpdateAgentParams",
        value: MsgUpdateAgentParams.fromPartial(value)
      };
    }
  }
};