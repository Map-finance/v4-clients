//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddToBlacklist, MsgRemoveFromBlacklist, MsgBatchAddToBlacklist, MsgBatchRemoveFromBlacklist } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.blacklist.MsgAddToBlacklist", MsgAddToBlacklist], ["/h2x.blacklist.MsgRemoveFromBlacklist", MsgRemoveFromBlacklist], ["/h2x.blacklist.MsgBatchAddToBlacklist", MsgBatchAddToBlacklist], ["/h2x.blacklist.MsgBatchRemoveFromBlacklist", MsgBatchRemoveFromBlacklist]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addToBlacklist(value: MsgAddToBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgAddToBlacklist",
        value: MsgAddToBlacklist.encode(value).finish()
      };
    },
    removeFromBlacklist(value: MsgRemoveFromBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgRemoveFromBlacklist",
        value: MsgRemoveFromBlacklist.encode(value).finish()
      };
    },
    batchAddToBlacklist(value: MsgBatchAddToBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgBatchAddToBlacklist",
        value: MsgBatchAddToBlacklist.encode(value).finish()
      };
    },
    batchRemoveFromBlacklist(value: MsgBatchRemoveFromBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgBatchRemoveFromBlacklist",
        value: MsgBatchRemoveFromBlacklist.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addToBlacklist(value: MsgAddToBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgAddToBlacklist",
        value
      };
    },
    removeFromBlacklist(value: MsgRemoveFromBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgRemoveFromBlacklist",
        value
      };
    },
    batchAddToBlacklist(value: MsgBatchAddToBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgBatchAddToBlacklist",
        value
      };
    },
    batchRemoveFromBlacklist(value: MsgBatchRemoveFromBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgBatchRemoveFromBlacklist",
        value
      };
    }
  },
  fromPartial: {
    addToBlacklist(value: MsgAddToBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgAddToBlacklist",
        value: MsgAddToBlacklist.fromPartial(value)
      };
    },
    removeFromBlacklist(value: MsgRemoveFromBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgRemoveFromBlacklist",
        value: MsgRemoveFromBlacklist.fromPartial(value)
      };
    },
    batchAddToBlacklist(value: MsgBatchAddToBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgBatchAddToBlacklist",
        value: MsgBatchAddToBlacklist.fromPartial(value)
      };
    },
    batchRemoveFromBlacklist(value: MsgBatchRemoveFromBlacklist) {
      return {
        typeUrl: "/h2x.blacklist.MsgBatchRemoveFromBlacklist",
        value: MsgBatchRemoveFromBlacklist.fromPartial(value)
      };
    }
  }
};