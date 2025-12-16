//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddPremiumVotes, MsgCreatePerpetual, MsgSetLiquidityTier, MsgUpdatePerpetualParams, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.perpetuals.MsgAddPremiumVotes", MsgAddPremiumVotes], ["/h2x.perpetuals.MsgCreatePerpetual", MsgCreatePerpetual], ["/h2x.perpetuals.MsgSetLiquidityTier", MsgSetLiquidityTier], ["/h2x.perpetuals.MsgUpdatePerpetualParams", MsgUpdatePerpetualParams], ["/h2x.perpetuals.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addPremiumVotes(value: MsgAddPremiumVotes) {
      return {
        typeUrl: "/h2x.perpetuals.MsgAddPremiumVotes",
        value: MsgAddPremiumVotes.encode(value).finish()
      };
    },
    createPerpetual(value: MsgCreatePerpetual) {
      return {
        typeUrl: "/h2x.perpetuals.MsgCreatePerpetual",
        value: MsgCreatePerpetual.encode(value).finish()
      };
    },
    setLiquidityTier(value: MsgSetLiquidityTier) {
      return {
        typeUrl: "/h2x.perpetuals.MsgSetLiquidityTier",
        value: MsgSetLiquidityTier.encode(value).finish()
      };
    },
    updatePerpetualParams(value: MsgUpdatePerpetualParams) {
      return {
        typeUrl: "/h2x.perpetuals.MsgUpdatePerpetualParams",
        value: MsgUpdatePerpetualParams.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/h2x.perpetuals.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addPremiumVotes(value: MsgAddPremiumVotes) {
      return {
        typeUrl: "/h2x.perpetuals.MsgAddPremiumVotes",
        value
      };
    },
    createPerpetual(value: MsgCreatePerpetual) {
      return {
        typeUrl: "/h2x.perpetuals.MsgCreatePerpetual",
        value
      };
    },
    setLiquidityTier(value: MsgSetLiquidityTier) {
      return {
        typeUrl: "/h2x.perpetuals.MsgSetLiquidityTier",
        value
      };
    },
    updatePerpetualParams(value: MsgUpdatePerpetualParams) {
      return {
        typeUrl: "/h2x.perpetuals.MsgUpdatePerpetualParams",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/h2x.perpetuals.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    addPremiumVotes(value: MsgAddPremiumVotes) {
      return {
        typeUrl: "/h2x.perpetuals.MsgAddPremiumVotes",
        value: MsgAddPremiumVotes.fromPartial(value)
      };
    },
    createPerpetual(value: MsgCreatePerpetual) {
      return {
        typeUrl: "/h2x.perpetuals.MsgCreatePerpetual",
        value: MsgCreatePerpetual.fromPartial(value)
      };
    },
    setLiquidityTier(value: MsgSetLiquidityTier) {
      return {
        typeUrl: "/h2x.perpetuals.MsgSetLiquidityTier",
        value: MsgSetLiquidityTier.fromPartial(value)
      };
    },
    updatePerpetualParams(value: MsgUpdatePerpetualParams) {
      return {
        typeUrl: "/h2x.perpetuals.MsgUpdatePerpetualParams",
        value: MsgUpdatePerpetualParams.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/h2x.perpetuals.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};