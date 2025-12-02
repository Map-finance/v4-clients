//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddAuthenticator, MsgRemoveAuthenticator, MsgSetActiveState } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/dydxprotocol.accountplus.MsgAddAuthenticator", MsgAddAuthenticator], ["/dydxprotocol.accountplus.MsgRemoveAuthenticator", MsgRemoveAuthenticator], ["/dydxprotocol.accountplus.MsgSetActiveState", MsgSetActiveState]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addAuthenticator(value: MsgAddAuthenticator) {
      return {
        typeUrl: "/dydxprotocol.accountplus.MsgAddAuthenticator",
        value: MsgAddAuthenticator.encode(value).finish()
      };
    },
    removeAuthenticator(value: MsgRemoveAuthenticator) {
      return {
        typeUrl: "/dydxprotocol.accountplus.MsgRemoveAuthenticator",
        value: MsgRemoveAuthenticator.encode(value).finish()
      };
    },
    setActiveState(value: MsgSetActiveState) {
      return {
        typeUrl: "/dydxprotocol.accountplus.MsgSetActiveState",
        value: MsgSetActiveState.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addAuthenticator(value: MsgAddAuthenticator) {
      return {
        typeUrl: "/dydxprotocol.accountplus.MsgAddAuthenticator",
        value
      };
    },
    removeAuthenticator(value: MsgRemoveAuthenticator) {
      return {
        typeUrl: "/dydxprotocol.accountplus.MsgRemoveAuthenticator",
        value
      };
    },
    setActiveState(value: MsgSetActiveState) {
      return {
        typeUrl: "/dydxprotocol.accountplus.MsgSetActiveState",
        value
      };
    }
  },
  fromPartial: {
    addAuthenticator(value: MsgAddAuthenticator) {
      return {
        typeUrl: "/dydxprotocol.accountplus.MsgAddAuthenticator",
        value: MsgAddAuthenticator.fromPartial(value)
      };
    },
    removeAuthenticator(value: MsgRemoveAuthenticator) {
      return {
        typeUrl: "/dydxprotocol.accountplus.MsgRemoveAuthenticator",
        value: MsgRemoveAuthenticator.fromPartial(value)
      };
    },
    setActiveState(value: MsgSetActiveState) {
      return {
        typeUrl: "/dydxprotocol.accountplus.MsgSetActiveState",
        value: MsgSetActiveState.fromPartial(value)
      };
    }
  }
};