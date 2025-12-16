//@ts-nocheck
import { MsgProposedOperations, MsgPlaceOrder, MsgCancelOrder, MsgBatchCancel, MsgCreateClobPair, MsgUpdateClobPair, MsgUpdateEquityTierLimitConfiguration, MsgUpdateBlockRateLimitConfiguration, MsgUpdateLiquidationsConfig } from "./tx";
export const AminoConverter = {
  "/h2x.clob.MsgProposedOperations": {
    aminoType: "/h2x.clob.MsgProposedOperations",
    toAmino: MsgProposedOperations.toAmino,
    fromAmino: MsgProposedOperations.fromAmino
  },
  "/h2x.clob.MsgPlaceOrder": {
    aminoType: "/h2x.clob.MsgPlaceOrder",
    toAmino: MsgPlaceOrder.toAmino,
    fromAmino: MsgPlaceOrder.fromAmino
  },
  "/h2x.clob.MsgCancelOrder": {
    aminoType: "/h2x.clob.MsgCancelOrder",
    toAmino: MsgCancelOrder.toAmino,
    fromAmino: MsgCancelOrder.fromAmino
  },
  "/h2x.clob.MsgBatchCancel": {
    aminoType: "/h2x.clob.MsgBatchCancel",
    toAmino: MsgBatchCancel.toAmino,
    fromAmino: MsgBatchCancel.fromAmino
  },
  "/h2x.clob.MsgCreateClobPair": {
    aminoType: "/h2x.clob.MsgCreateClobPair",
    toAmino: MsgCreateClobPair.toAmino,
    fromAmino: MsgCreateClobPair.fromAmino
  },
  "/h2x.clob.MsgUpdateClobPair": {
    aminoType: "/h2x.clob.MsgUpdateClobPair",
    toAmino: MsgUpdateClobPair.toAmino,
    fromAmino: MsgUpdateClobPair.fromAmino
  },
  "/h2x.clob.MsgUpdateEquityTierLimitConfiguration": {
    aminoType: "/h2x.clob.MsgUpdateEquityTierLimitConfiguration",
    toAmino: MsgUpdateEquityTierLimitConfiguration.toAmino,
    fromAmino: MsgUpdateEquityTierLimitConfiguration.fromAmino
  },
  "/h2x.clob.MsgUpdateBlockRateLimitConfiguration": {
    aminoType: "/h2x.clob.MsgUpdateBlockRateLimitConfiguration",
    toAmino: MsgUpdateBlockRateLimitConfiguration.toAmino,
    fromAmino: MsgUpdateBlockRateLimitConfiguration.fromAmino
  },
  "/h2x.clob.MsgUpdateLiquidationsConfig": {
    aminoType: "/h2x.clob.MsgUpdateLiquidationsConfig",
    toAmino: MsgUpdateLiquidationsConfig.toAmino,
    fromAmino: MsgUpdateLiquidationsConfig.fromAmino
  }
};