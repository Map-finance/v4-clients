//@ts-nocheck
import { MsgRegisterAffiliate, MsgUpdateAffiliateTiers, MsgUpdateAffiliateWhitelist, MsgUpdateAffiliateParameters, MsgUpdateAffiliateOverrides } from "./tx";
export const AminoConverter = {
  "/h2x.affiliates.MsgRegisterAffiliate": {
    aminoType: "/h2x.affiliates.MsgRegisterAffiliate",
    toAmino: MsgRegisterAffiliate.toAmino,
    fromAmino: MsgRegisterAffiliate.fromAmino
  },
  "/h2x.affiliates.MsgUpdateAffiliateTiers": {
    aminoType: "/h2x.affiliates.MsgUpdateAffiliateTiers",
    toAmino: MsgUpdateAffiliateTiers.toAmino,
    fromAmino: MsgUpdateAffiliateTiers.fromAmino
  },
  "/h2x.affiliates.MsgUpdateAffiliateWhitelist": {
    aminoType: "/h2x.affiliates.MsgUpdateAffiliateWhitelist",
    toAmino: MsgUpdateAffiliateWhitelist.toAmino,
    fromAmino: MsgUpdateAffiliateWhitelist.fromAmino
  },
  "/h2x.affiliates.MsgUpdateAffiliateParameters": {
    aminoType: "/h2x.affiliates.MsgUpdateAffiliateParameters",
    toAmino: MsgUpdateAffiliateParameters.toAmino,
    fromAmino: MsgUpdateAffiliateParameters.fromAmino
  },
  "/h2x.affiliates.MsgUpdateAffiliateOverrides": {
    aminoType: "/h2x.affiliates.MsgUpdateAffiliateOverrides",
    toAmino: MsgUpdateAffiliateOverrides.toAmino,
    fromAmino: MsgUpdateAffiliateOverrides.fromAmino
  }
};