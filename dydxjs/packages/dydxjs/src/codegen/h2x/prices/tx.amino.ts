//@ts-nocheck
import { MsgUpdateMarketPrices, MsgCreateOracleMarket, MsgUpdateMarketParam } from "./tx";
export const AminoConverter = {
  "/h2x.prices.MsgUpdateMarketPrices": {
    aminoType: "/h2x.prices.MsgUpdateMarketPrices",
    toAmino: MsgUpdateMarketPrices.toAmino,
    fromAmino: MsgUpdateMarketPrices.fromAmino
  },
  "/h2x.prices.MsgCreateOracleMarket": {
    aminoType: "/h2x.prices.MsgCreateOracleMarket",
    toAmino: MsgCreateOracleMarket.toAmino,
    fromAmino: MsgCreateOracleMarket.fromAmino
  },
  "/h2x.prices.MsgUpdateMarketParam": {
    aminoType: "/h2x.prices.MsgUpdateMarketParam",
    toAmino: MsgUpdateMarketParam.toAmino,
    fromAmino: MsgUpdateMarketParam.fromAmino
  }
};