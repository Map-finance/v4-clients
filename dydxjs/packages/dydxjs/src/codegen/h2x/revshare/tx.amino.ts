//@ts-nocheck
import { MsgSetMarketMapperRevenueShare, MsgSetMarketMapperRevShareDetailsForMarket, MsgUpdateUnconditionalRevShareConfig, MsgSetOrderRouterRevShare } from "./tx";
export const AminoConverter = {
  "/h2x.revshare.MsgSetMarketMapperRevenueShare": {
    aminoType: "/h2x.revshare.MsgSetMarketMapperRevenueShare",
    toAmino: MsgSetMarketMapperRevenueShare.toAmino,
    fromAmino: MsgSetMarketMapperRevenueShare.fromAmino
  },
  "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket": {
    aminoType: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
    toAmino: MsgSetMarketMapperRevShareDetailsForMarket.toAmino,
    fromAmino: MsgSetMarketMapperRevShareDetailsForMarket.fromAmino
  },
  "/h2x.revshare.MsgUpdateUnconditionalRevShareConfig": {
    aminoType: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfig",
    toAmino: MsgUpdateUnconditionalRevShareConfig.toAmino,
    fromAmino: MsgUpdateUnconditionalRevShareConfig.fromAmino
  },
  "/h2x.revshare.MsgSetOrderRouterRevShare": {
    aminoType: "/h2x.revshare.MsgSetOrderRouterRevShare",
    toAmino: MsgSetOrderRouterRevShare.toAmino,
    fromAmino: MsgSetOrderRouterRevShare.fromAmino
  }
};