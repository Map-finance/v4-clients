//@ts-nocheck
import { MsgSetVestEntry, MsgDeleteVestEntry } from "./tx";
export const AminoConverter = {
  "/h2x.vest.MsgSetVestEntry": {
    aminoType: "/h2x.vest.MsgSetVestEntry",
    toAmino: MsgSetVestEntry.toAmino,
    fromAmino: MsgSetVestEntry.fromAmino
  },
  "/h2x.vest.MsgDeleteVestEntry": {
    aminoType: "/h2x.vest.MsgDeleteVestEntry",
    toAmino: MsgDeleteVestEntry.toAmino,
    fromAmino: MsgDeleteVestEntry.fromAmino
  }
};