//@ts-nocheck
import { MsgAddAuthenticator, MsgRemoveAuthenticator, MsgSetActiveState } from "./tx";
export const AminoConverter = {
  "/h2x.accountplus.MsgAddAuthenticator": {
    aminoType: "h2x/accountplus/add-authenticator",
    toAmino: MsgAddAuthenticator.toAmino,
    fromAmino: MsgAddAuthenticator.fromAmino
  },
  "/h2x.accountplus.MsgRemoveAuthenticator": {
    aminoType: "h2x/accountplus/remove-authenticator",
    toAmino: MsgRemoveAuthenticator.toAmino,
    fromAmino: MsgRemoveAuthenticator.fromAmino
  },
  "/h2x.accountplus.MsgSetActiveState": {
    aminoType: "h2x/accountplus/set-active-state",
    toAmino: MsgSetActiveState.toAmino,
    fromAmino: MsgSetActiveState.fromAmino
  }
};