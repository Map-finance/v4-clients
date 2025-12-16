//@ts-nocheck
import { MsgAddPremiumVotes, MsgCreatePerpetual, MsgSetLiquidityTier, MsgUpdatePerpetualParams, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/h2x.perpetuals.MsgAddPremiumVotes": {
    aminoType: "/h2x.perpetuals.MsgAddPremiumVotes",
    toAmino: MsgAddPremiumVotes.toAmino,
    fromAmino: MsgAddPremiumVotes.fromAmino
  },
  "/h2x.perpetuals.MsgCreatePerpetual": {
    aminoType: "/h2x.perpetuals.MsgCreatePerpetual",
    toAmino: MsgCreatePerpetual.toAmino,
    fromAmino: MsgCreatePerpetual.fromAmino
  },
  "/h2x.perpetuals.MsgSetLiquidityTier": {
    aminoType: "/h2x.perpetuals.MsgSetLiquidityTier",
    toAmino: MsgSetLiquidityTier.toAmino,
    fromAmino: MsgSetLiquidityTier.fromAmino
  },
  "/h2x.perpetuals.MsgUpdatePerpetualParams": {
    aminoType: "/h2x.perpetuals.MsgUpdatePerpetualParams",
    toAmino: MsgUpdatePerpetualParams.toAmino,
    fromAmino: MsgUpdatePerpetualParams.fromAmino
  },
  "/h2x.perpetuals.MsgUpdateParams": {
    aminoType: "/h2x.perpetuals.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};