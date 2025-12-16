//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgProposedOperations, MsgPlaceOrder, MsgCancelOrder, MsgBatchCancel, MsgCreateClobPair, MsgUpdateClobPair, MsgUpdateEquityTierLimitConfiguration, MsgUpdateBlockRateLimitConfiguration, MsgUpdateLiquidationsConfig } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.clob.MsgProposedOperations", MsgProposedOperations], ["/h2x.clob.MsgPlaceOrder", MsgPlaceOrder], ["/h2x.clob.MsgCancelOrder", MsgCancelOrder], ["/h2x.clob.MsgBatchCancel", MsgBatchCancel], ["/h2x.clob.MsgCreateClobPair", MsgCreateClobPair], ["/h2x.clob.MsgUpdateClobPair", MsgUpdateClobPair], ["/h2x.clob.MsgUpdateEquityTierLimitConfiguration", MsgUpdateEquityTierLimitConfiguration], ["/h2x.clob.MsgUpdateBlockRateLimitConfiguration", MsgUpdateBlockRateLimitConfiguration], ["/h2x.clob.MsgUpdateLiquidationsConfig", MsgUpdateLiquidationsConfig]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    proposedOperations(value: MsgProposedOperations) {
      return {
        typeUrl: "/h2x.clob.MsgProposedOperations",
        value: MsgProposedOperations.encode(value).finish()
      };
    },
    placeOrder(value: MsgPlaceOrder) {
      return {
        typeUrl: "/h2x.clob.MsgPlaceOrder",
        value: MsgPlaceOrder.encode(value).finish()
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/h2x.clob.MsgCancelOrder",
        value: MsgCancelOrder.encode(value).finish()
      };
    },
    batchCancel(value: MsgBatchCancel) {
      return {
        typeUrl: "/h2x.clob.MsgBatchCancel",
        value: MsgBatchCancel.encode(value).finish()
      };
    },
    createClobPair(value: MsgCreateClobPair) {
      return {
        typeUrl: "/h2x.clob.MsgCreateClobPair",
        value: MsgCreateClobPair.encode(value).finish()
      };
    },
    updateClobPair(value: MsgUpdateClobPair) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateClobPair",
        value: MsgUpdateClobPair.encode(value).finish()
      };
    },
    updateEquityTierLimitConfiguration(value: MsgUpdateEquityTierLimitConfiguration) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateEquityTierLimitConfiguration",
        value: MsgUpdateEquityTierLimitConfiguration.encode(value).finish()
      };
    },
    updateBlockRateLimitConfiguration(value: MsgUpdateBlockRateLimitConfiguration) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateBlockRateLimitConfiguration",
        value: MsgUpdateBlockRateLimitConfiguration.encode(value).finish()
      };
    },
    updateLiquidationsConfig(value: MsgUpdateLiquidationsConfig) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateLiquidationsConfig",
        value: MsgUpdateLiquidationsConfig.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    proposedOperations(value: MsgProposedOperations) {
      return {
        typeUrl: "/h2x.clob.MsgProposedOperations",
        value
      };
    },
    placeOrder(value: MsgPlaceOrder) {
      return {
        typeUrl: "/h2x.clob.MsgPlaceOrder",
        value
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/h2x.clob.MsgCancelOrder",
        value
      };
    },
    batchCancel(value: MsgBatchCancel) {
      return {
        typeUrl: "/h2x.clob.MsgBatchCancel",
        value
      };
    },
    createClobPair(value: MsgCreateClobPair) {
      return {
        typeUrl: "/h2x.clob.MsgCreateClobPair",
        value
      };
    },
    updateClobPair(value: MsgUpdateClobPair) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateClobPair",
        value
      };
    },
    updateEquityTierLimitConfiguration(value: MsgUpdateEquityTierLimitConfiguration) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateEquityTierLimitConfiguration",
        value
      };
    },
    updateBlockRateLimitConfiguration(value: MsgUpdateBlockRateLimitConfiguration) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateBlockRateLimitConfiguration",
        value
      };
    },
    updateLiquidationsConfig(value: MsgUpdateLiquidationsConfig) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateLiquidationsConfig",
        value
      };
    }
  },
  fromPartial: {
    proposedOperations(value: MsgProposedOperations) {
      return {
        typeUrl: "/h2x.clob.MsgProposedOperations",
        value: MsgProposedOperations.fromPartial(value)
      };
    },
    placeOrder(value: MsgPlaceOrder) {
      return {
        typeUrl: "/h2x.clob.MsgPlaceOrder",
        value: MsgPlaceOrder.fromPartial(value)
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/h2x.clob.MsgCancelOrder",
        value: MsgCancelOrder.fromPartial(value)
      };
    },
    batchCancel(value: MsgBatchCancel) {
      return {
        typeUrl: "/h2x.clob.MsgBatchCancel",
        value: MsgBatchCancel.fromPartial(value)
      };
    },
    createClobPair(value: MsgCreateClobPair) {
      return {
        typeUrl: "/h2x.clob.MsgCreateClobPair",
        value: MsgCreateClobPair.fromPartial(value)
      };
    },
    updateClobPair(value: MsgUpdateClobPair) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateClobPair",
        value: MsgUpdateClobPair.fromPartial(value)
      };
    },
    updateEquityTierLimitConfiguration(value: MsgUpdateEquityTierLimitConfiguration) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateEquityTierLimitConfiguration",
        value: MsgUpdateEquityTierLimitConfiguration.fromPartial(value)
      };
    },
    updateBlockRateLimitConfiguration(value: MsgUpdateBlockRateLimitConfiguration) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateBlockRateLimitConfiguration",
        value: MsgUpdateBlockRateLimitConfiguration.fromPartial(value)
      };
    },
    updateLiquidationsConfig(value: MsgUpdateLiquidationsConfig) {
      return {
        typeUrl: "/h2x.clob.MsgUpdateLiquidationsConfig",
        value: MsgUpdateLiquidationsConfig.fromPartial(value)
      };
    }
  }
};