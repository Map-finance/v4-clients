//@ts-nocheck
import { MsgUpdateDowntimeParams, MsgUpdateSynchronyParams } from "./tx";
export const AminoConverter = {
  "/dydxprotocol.blocktime.MsgUpdateDowntimeParams": {
    aminoType: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams",
    toAmino: MsgUpdateDowntimeParams.toAmino,
    fromAmino: MsgUpdateDowntimeParams.fromAmino
  },
  "/dydxprotocol.blocktime.MsgUpdateSynchronyParams": {
    aminoType: "/dydxprotocol.blocktime.MsgUpdateSynchronyParams",
    toAmino: MsgUpdateSynchronyParams.toAmino,
    fromAmino: MsgUpdateSynchronyParams.fromAmino
  }
};