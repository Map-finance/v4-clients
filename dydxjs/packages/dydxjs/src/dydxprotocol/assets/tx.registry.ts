//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateAsset, MsgUpdateAsset } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/dydxprotocol.assets.MsgCreateAsset", MsgCreateAsset], ["/dydxprotocol.assets.MsgUpdateAsset", MsgUpdateAsset]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createAsset(value: MsgCreateAsset) {
      return {
        typeUrl: "/dydxprotocol.assets.MsgCreateAsset",
        value: MsgCreateAsset.encode(value).finish()
      };
    },
    updateAsset(value: MsgUpdateAsset) {
      return {
        typeUrl: "/dydxprotocol.assets.MsgUpdateAsset",
        value: MsgUpdateAsset.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createAsset(value: MsgCreateAsset) {
      return {
        typeUrl: "/dydxprotocol.assets.MsgCreateAsset",
        value
      };
    },
    updateAsset(value: MsgUpdateAsset) {
      return {
        typeUrl: "/dydxprotocol.assets.MsgUpdateAsset",
        value
      };
    }
  },
  fromPartial: {
    createAsset(value: MsgCreateAsset) {
      return {
        typeUrl: "/dydxprotocol.assets.MsgCreateAsset",
        value: MsgCreateAsset.fromPartial(value)
      };
    },
    updateAsset(value: MsgUpdateAsset) {
      return {
        typeUrl: "/dydxprotocol.assets.MsgUpdateAsset",
        value: MsgUpdateAsset.fromPartial(value)
      };
    }
  }
};