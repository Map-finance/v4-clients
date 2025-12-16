//@ts-nocheck
import { MsgAcknowledgeBridges, MsgCompleteBridge, MsgUpdateEventParams, MsgUpdateProposeParams, MsgUpdateSafetyParams, MsgUpdateAcknowledgedEventInfo } from "./tx";
export const AminoConverter = {
  "/h2x.bridge.MsgAcknowledgeBridges": {
    aminoType: "/h2x.bridge.MsgAcknowledgeBridges",
    toAmino: MsgAcknowledgeBridges.toAmino,
    fromAmino: MsgAcknowledgeBridges.fromAmino
  },
  "/h2x.bridge.MsgCompleteBridge": {
    aminoType: "/h2x.bridge.MsgCompleteBridge",
    toAmino: MsgCompleteBridge.toAmino,
    fromAmino: MsgCompleteBridge.fromAmino
  },
  "/h2x.bridge.MsgUpdateEventParams": {
    aminoType: "/h2x.bridge.MsgUpdateEventParams",
    toAmino: MsgUpdateEventParams.toAmino,
    fromAmino: MsgUpdateEventParams.fromAmino
  },
  "/h2x.bridge.MsgUpdateProposeParams": {
    aminoType: "/h2x.bridge.MsgUpdateProposeParams",
    toAmino: MsgUpdateProposeParams.toAmino,
    fromAmino: MsgUpdateProposeParams.fromAmino
  },
  "/h2x.bridge.MsgUpdateSafetyParams": {
    aminoType: "/h2x.bridge.MsgUpdateSafetyParams",
    toAmino: MsgUpdateSafetyParams.toAmino,
    fromAmino: MsgUpdateSafetyParams.fromAmino
  },
  "/h2x.bridge.MsgUpdateAcknowledgedEventInfo": {
    aminoType: "/h2x.bridge.MsgUpdateAcknowledgedEventInfo",
    toAmino: MsgUpdateAcknowledgedEventInfo.toAmino,
    fromAmino: MsgUpdateAcknowledgedEventInfo.fromAmino
  }
};