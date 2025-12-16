//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetMarketMapperRevenueShare, MsgSetMarketMapperRevShareDetailsForMarket, MsgUpdateUnconditionalRevShareConfig, MsgSetOrderRouterRevShare } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.revshare.MsgSetMarketMapperRevenueShare", MsgSetMarketMapperRevenueShare], ["/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket", MsgSetMarketMapperRevShareDetailsForMarket], ["/h2x.revshare.MsgUpdateUnconditionalRevShareConfig", MsgUpdateUnconditionalRevShareConfig], ["/h2x.revshare.MsgSetOrderRouterRevShare", MsgSetOrderRouterRevShare]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setMarketMapperRevenueShare(value: MsgSetMarketMapperRevenueShare) {
      return {
        typeUrl: "/h2x.revshare.MsgSetMarketMapperRevenueShare",
        value: MsgSetMarketMapperRevenueShare.encode(value).finish()
      };
    },
    setMarketMapperRevShareDetailsForMarket(value: MsgSetMarketMapperRevShareDetailsForMarket) {
      return {
        typeUrl: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
        value: MsgSetMarketMapperRevShareDetailsForMarket.encode(value).finish()
      };
    },
    updateUnconditionalRevShareConfig(value: MsgUpdateUnconditionalRevShareConfig) {
      return {
        typeUrl: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfig",
        value: MsgUpdateUnconditionalRevShareConfig.encode(value).finish()
      };
    },
    setOrderRouterRevShare(value: MsgSetOrderRouterRevShare) {
      return {
        typeUrl: "/h2x.revshare.MsgSetOrderRouterRevShare",
        value: MsgSetOrderRouterRevShare.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setMarketMapperRevenueShare(value: MsgSetMarketMapperRevenueShare) {
      return {
        typeUrl: "/h2x.revshare.MsgSetMarketMapperRevenueShare",
        value
      };
    },
    setMarketMapperRevShareDetailsForMarket(value: MsgSetMarketMapperRevShareDetailsForMarket) {
      return {
        typeUrl: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
        value
      };
    },
    updateUnconditionalRevShareConfig(value: MsgUpdateUnconditionalRevShareConfig) {
      return {
        typeUrl: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfig",
        value
      };
    },
    setOrderRouterRevShare(value: MsgSetOrderRouterRevShare) {
      return {
        typeUrl: "/h2x.revshare.MsgSetOrderRouterRevShare",
        value
      };
    }
  },
  fromPartial: {
    setMarketMapperRevenueShare(value: MsgSetMarketMapperRevenueShare) {
      return {
        typeUrl: "/h2x.revshare.MsgSetMarketMapperRevenueShare",
        value: MsgSetMarketMapperRevenueShare.fromPartial(value)
      };
    },
    setMarketMapperRevShareDetailsForMarket(value: MsgSetMarketMapperRevShareDetailsForMarket) {
      return {
        typeUrl: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
        value: MsgSetMarketMapperRevShareDetailsForMarket.fromPartial(value)
      };
    },
    updateUnconditionalRevShareConfig(value: MsgUpdateUnconditionalRevShareConfig) {
      return {
        typeUrl: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfig",
        value: MsgUpdateUnconditionalRevShareConfig.fromPartial(value)
      };
    },
    setOrderRouterRevShare(value: MsgSetOrderRouterRevShare) {
      return {
        typeUrl: "/h2x.revshare.MsgSetOrderRouterRevShare",
        value: MsgSetOrderRouterRevShare.fromPartial(value)
      };
    }
  }
};