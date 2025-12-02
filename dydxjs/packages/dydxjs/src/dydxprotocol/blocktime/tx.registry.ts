//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateDowntimeParams, MsgUpdateSynchronyParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/dydxprotocol.blocktime.MsgUpdateDowntimeParams", MsgUpdateDowntimeParams], ["/dydxprotocol.blocktime.MsgUpdateSynchronyParams", MsgUpdateSynchronyParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateDowntimeParams(value: MsgUpdateDowntimeParams) {
      return {
        typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams",
        value: MsgUpdateDowntimeParams.encode(value).finish()
      };
    },
    updateSynchronyParams(value: MsgUpdateSynchronyParams) {
      return {
        typeUrl: "/dydxprotocol.blocktime.MsgUpdateSynchronyParams",
        value: MsgUpdateSynchronyParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateDowntimeParams(value: MsgUpdateDowntimeParams) {
      return {
        typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams",
        value
      };
    },
    updateSynchronyParams(value: MsgUpdateSynchronyParams) {
      return {
        typeUrl: "/dydxprotocol.blocktime.MsgUpdateSynchronyParams",
        value
      };
    }
  },
  fromPartial: {
    updateDowntimeParams(value: MsgUpdateDowntimeParams) {
      return {
        typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams",
        value: MsgUpdateDowntimeParams.fromPartial(value)
      };
    },
    updateSynchronyParams(value: MsgUpdateSynchronyParams) {
      return {
        typeUrl: "/dydxprotocol.blocktime.MsgUpdateSynchronyParams",
        value: MsgUpdateSynchronyParams.fromPartial(value)
      };
    }
  }
};