//@ts-nocheck
import { MsgRegisterAffiliate, MsgUpdateAffiliateTiers, MsgUpdateAffiliateWhitelist, MsgUpdateAffiliateParameters, MsgUpdateAffiliateOverrides } from "./tx";
export const AminoConverter = {
  "/dydxprotocol.affiliates.MsgRegisterAffiliate": {
    aminoType: "/dydxprotocol.affiliates.MsgRegisterAffiliate",
    toAmino: MsgRegisterAffiliate.toAmino,
    fromAmino: MsgRegisterAffiliate.fromAmino
  },
  "/dydxprotocol.affiliates.MsgUpdateAffiliateTiers": {
    aminoType: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiers",
    toAmino: MsgUpdateAffiliateTiers.toAmino,
    fromAmino: MsgUpdateAffiliateTiers.fromAmino
  },
  "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist": {
    aminoType: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist",
    toAmino: MsgUpdateAffiliateWhitelist.toAmino,
    fromAmino: MsgUpdateAffiliateWhitelist.fromAmino
  },
  "/dydxprotocol.affiliates.MsgUpdateAffiliateParameters": {
    aminoType: "/dydxprotocol.affiliates.MsgUpdateAffiliateParameters",
    toAmino: MsgUpdateAffiliateParameters.toAmino,
    fromAmino: MsgUpdateAffiliateParameters.fromAmino
  },
  "/dydxprotocol.affiliates.MsgUpdateAffiliateOverrides": {
    aminoType: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverrides",
    toAmino: MsgUpdateAffiliateOverrides.toAmino,
    fromAmino: MsgUpdateAffiliateOverrides.fromAmino
  }
};