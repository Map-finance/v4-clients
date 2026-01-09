//@ts-nocheck
import { MsgRegisterAgent, MsgRemoveAgent, MsgUpdateAgentParams } from "./tx";
export const AminoConverter = {
  "/h2x.agent.MsgRegisterAgent": {
    aminoType: "/h2x.agent.MsgRegisterAgent",
    toAmino: MsgRegisterAgent.toAmino,
    fromAmino: MsgRegisterAgent.fromAmino
  },
  "/h2x.agent.MsgRemoveAgent": {
    aminoType: "/h2x.agent.MsgRemoveAgent",
    toAmino: MsgRemoveAgent.toAmino,
    fromAmino: MsgRemoveAgent.fromAmino
  },
  "/h2x.agent.MsgUpdateAgentParams": {
    aminoType: "/h2x.agent.MsgUpdateAgentParams",
    toAmino: MsgUpdateAgentParams.toAmino,
    fromAmino: MsgUpdateAgentParams.fromAmino
  }
};