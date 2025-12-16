//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateMarketPrices, MsgCreateOracleMarket, MsgUpdateMarketParam } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.prices.MsgUpdateMarketPrices", MsgUpdateMarketPrices], ["/h2x.prices.MsgCreateOracleMarket", MsgCreateOracleMarket], ["/h2x.prices.MsgUpdateMarketParam", MsgUpdateMarketParam]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateMarketPrices(value: MsgUpdateMarketPrices) {
      return {
        typeUrl: "/h2x.prices.MsgUpdateMarketPrices",
        value: MsgUpdateMarketPrices.encode(value).finish()
      };
    },
    createOracleMarket(value: MsgCreateOracleMarket) {
      return {
        typeUrl: "/h2x.prices.MsgCreateOracleMarket",
        value: MsgCreateOracleMarket.encode(value).finish()
      };
    },
    updateMarketParam(value: MsgUpdateMarketParam) {
      return {
        typeUrl: "/h2x.prices.MsgUpdateMarketParam",
        value: MsgUpdateMarketParam.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateMarketPrices(value: MsgUpdateMarketPrices) {
      return {
        typeUrl: "/h2x.prices.MsgUpdateMarketPrices",
        value
      };
    },
    createOracleMarket(value: MsgCreateOracleMarket) {
      return {
        typeUrl: "/h2x.prices.MsgCreateOracleMarket",
        value
      };
    },
    updateMarketParam(value: MsgUpdateMarketParam) {
      return {
        typeUrl: "/h2x.prices.MsgUpdateMarketParam",
        value
      };
    }
  },
  fromPartial: {
    updateMarketPrices(value: MsgUpdateMarketPrices) {
      return {
        typeUrl: "/h2x.prices.MsgUpdateMarketPrices",
        value: MsgUpdateMarketPrices.fromPartial(value)
      };
    },
    createOracleMarket(value: MsgCreateOracleMarket) {
      return {
        typeUrl: "/h2x.prices.MsgCreateOracleMarket",
        value: MsgCreateOracleMarket.fromPartial(value)
      };
    },
    updateMarketParam(value: MsgUpdateMarketParam) {
      return {
        typeUrl: "/h2x.prices.MsgUpdateMarketParam",
        value: MsgUpdateMarketParam.fromPartial(value)
      };
    }
  }
};