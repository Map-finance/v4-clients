//@ts-nocheck
import { MsgAddOperators, MsgRemoveOperators, MsgUpdateOperatorPermissions } from "./tx";
export const AminoConverter = {
  "/h2x.operators.MsgAddOperators": {
    aminoType: "/h2x.operators.MsgAddOperators",
    toAmino: MsgAddOperators.toAmino,
    fromAmino: MsgAddOperators.fromAmino
  },
  "/h2x.operators.MsgRemoveOperators": {
    aminoType: "/h2x.operators.MsgRemoveOperators",
    toAmino: MsgRemoveOperators.toAmino,
    fromAmino: MsgRemoveOperators.fromAmino
  },
  "/h2x.operators.MsgUpdateOperatorPermissions": {
    aminoType: "/h2x.operators.MsgUpdateOperatorPermissions",
    toAmino: MsgUpdateOperatorPermissions.toAmino,
    fromAmino: MsgUpdateOperatorPermissions.fromAmino
  }
};