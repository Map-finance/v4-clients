//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddAuthenticator, MsgRemoveAuthenticator, MsgSetActiveState } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.accountplus.MsgAddAuthenticator", MsgAddAuthenticator], ["/h2x.accountplus.MsgRemoveAuthenticator", MsgRemoveAuthenticator], ["/h2x.accountplus.MsgSetActiveState", MsgSetActiveState]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addAuthenticator(value: MsgAddAuthenticator) {
      return {
        typeUrl: "/h2x.accountplus.MsgAddAuthenticator",
        value: MsgAddAuthenticator.encode(value).finish()
      };
    },
    removeAuthenticator(value: MsgRemoveAuthenticator) {
      return {
        typeUrl: "/h2x.accountplus.MsgRemoveAuthenticator",
        value: MsgRemoveAuthenticator.encode(value).finish()
      };
    },
    setActiveState(value: MsgSetActiveState) {
      return {
        typeUrl: "/h2x.accountplus.MsgSetActiveState",
        value: MsgSetActiveState.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addAuthenticator(value: MsgAddAuthenticator) {
      return {
        typeUrl: "/h2x.accountplus.MsgAddAuthenticator",
        value
      };
    },
    removeAuthenticator(value: MsgRemoveAuthenticator) {
      return {
        typeUrl: "/h2x.accountplus.MsgRemoveAuthenticator",
        value
      };
    },
    setActiveState(value: MsgSetActiveState) {
      return {
        typeUrl: "/h2x.accountplus.MsgSetActiveState",
        value
      };
    }
  },
  fromPartial: {
    addAuthenticator(value: MsgAddAuthenticator) {
      return {
        typeUrl: "/h2x.accountplus.MsgAddAuthenticator",
        value: MsgAddAuthenticator.fromPartial(value)
      };
    },
    removeAuthenticator(value: MsgRemoveAuthenticator) {
      return {
        typeUrl: "/h2x.accountplus.MsgRemoveAuthenticator",
        value: MsgRemoveAuthenticator.fromPartial(value)
      };
    },
    setActiveState(value: MsgSetActiveState) {
      return {
        typeUrl: "/h2x.accountplus.MsgSetActiveState",
        value: MsgSetActiveState.fromPartial(value)
      };
    }
  }
};