//@ts-nocheck
import { MsgDelayMessage } from "./tx";
export const AminoConverter = {
  "/h2x.delaymsg.MsgDelayMessage": {
    aminoType: "/h2x.delaymsg.MsgDelayMessage",
    toAmino: MsgDelayMessage.toAmino,
    fromAmino: MsgDelayMessage.fromAmino
  }
};