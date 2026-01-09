//@ts-nocheck
import { MsgAddToBlacklist, MsgRemoveFromBlacklist, MsgBatchAddToBlacklist, MsgBatchRemoveFromBlacklist } from "./tx";
export const AminoConverter = {
  "/h2x.blacklist.MsgAddToBlacklist": {
    aminoType: "/h2x.blacklist.MsgAddToBlacklist",
    toAmino: MsgAddToBlacklist.toAmino,
    fromAmino: MsgAddToBlacklist.fromAmino
  },
  "/h2x.blacklist.MsgRemoveFromBlacklist": {
    aminoType: "/h2x.blacklist.MsgRemoveFromBlacklist",
    toAmino: MsgRemoveFromBlacklist.toAmino,
    fromAmino: MsgRemoveFromBlacklist.fromAmino
  },
  "/h2x.blacklist.MsgBatchAddToBlacklist": {
    aminoType: "/h2x.blacklist.MsgBatchAddToBlacklist",
    toAmino: MsgBatchAddToBlacklist.toAmino,
    fromAmino: MsgBatchAddToBlacklist.fromAmino
  },
  "/h2x.blacklist.MsgBatchRemoveFromBlacklist": {
    aminoType: "/h2x.blacklist.MsgBatchRemoveFromBlacklist",
    toAmino: MsgBatchRemoveFromBlacklist.toAmino,
    fromAmino: MsgBatchRemoveFromBlacklist.fromAmino
  }
};