//@ts-nocheck
import { MsgAddAuthenticator, MsgRemoveAuthenticator, MsgSetActiveState } from "./tx";
export const AminoConverter = {
  "/dydxprotocol.accountplus.MsgAddAuthenticator": {
    aminoType: "dydxprotocol/accountplus/add-authenticator",
    toAmino: MsgAddAuthenticator.toAmino,
    fromAmino: MsgAddAuthenticator.fromAmino
  },
  "/dydxprotocol.accountplus.MsgRemoveAuthenticator": {
    aminoType: "dydxprotocol/accountplus/remove-authenticator",
    toAmino: MsgRemoveAuthenticator.toAmino,
    fromAmino: MsgRemoveAuthenticator.fromAmino
  },
  "/dydxprotocol.accountplus.MsgSetActiveState": {
    aminoType: "dydxprotocol/accountplus/set-active-state",
    toAmino: MsgSetActiveState.toAmino,
    fromAmino: MsgSetActiveState.fromAmino
  }
};