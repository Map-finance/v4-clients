//@ts-nocheck
import { MsgSetMarketMapperRevenueShare, MsgSetMarketMapperRevShareDetailsForMarket, MsgUpdateUnconditionalRevShareConfig, MsgSetOrderRouterRevShare } from "./tx";
export const AminoConverter = {
  "/dydxprotocol.revshare.MsgSetMarketMapperRevenueShare": {
    aminoType: "/dydxprotocol.revshare.MsgSetMarketMapperRevenueShare",
    toAmino: MsgSetMarketMapperRevenueShare.toAmino,
    fromAmino: MsgSetMarketMapperRevenueShare.fromAmino
  },
  "/dydxprotocol.revshare.MsgSetMarketMapperRevShareDetailsForMarket": {
    aminoType: "/dydxprotocol.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
    toAmino: MsgSetMarketMapperRevShareDetailsForMarket.toAmino,
    fromAmino: MsgSetMarketMapperRevShareDetailsForMarket.fromAmino
  },
  "/dydxprotocol.revshare.MsgUpdateUnconditionalRevShareConfig": {
    aminoType: "/dydxprotocol.revshare.MsgUpdateUnconditionalRevShareConfig",
    toAmino: MsgUpdateUnconditionalRevShareConfig.toAmino,
    fromAmino: MsgUpdateUnconditionalRevShareConfig.fromAmino
  },
  "/dydxprotocol.revshare.MsgSetOrderRouterRevShare": {
    aminoType: "/dydxprotocol.revshare.MsgSetOrderRouterRevShare",
    toAmino: MsgSetOrderRouterRevShare.toAmino,
    fromAmino: MsgSetOrderRouterRevShare.fromAmino
  }
};