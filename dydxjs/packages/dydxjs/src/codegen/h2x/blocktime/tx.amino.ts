//@ts-nocheck
import { MsgUpdateDowntimeParams, MsgUpdateSynchronyParams } from "./tx";
export const AminoConverter = {
  "/h2x.blocktime.MsgUpdateDowntimeParams": {
    aminoType: "/h2x.blocktime.MsgUpdateDowntimeParams",
    toAmino: MsgUpdateDowntimeParams.toAmino,
    fromAmino: MsgUpdateDowntimeParams.fromAmino
  },
  "/h2x.blocktime.MsgUpdateSynchronyParams": {
    aminoType: "/h2x.blocktime.MsgUpdateSynchronyParams",
    toAmino: MsgUpdateSynchronyParams.toAmino,
    fromAmino: MsgUpdateSynchronyParams.fromAmino
  }
};