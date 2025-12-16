//@ts-nocheck
import { MsgSetLimitParams } from "./tx";
export const AminoConverter = {
  "/h2x.ratelimit.MsgSetLimitParams": {
    aminoType: "/h2x.ratelimit.MsgSetLimitParams",
    toAmino: MsgSetLimitParams.toAmino,
    fromAmino: MsgSetLimitParams.fromAmino
  }
};