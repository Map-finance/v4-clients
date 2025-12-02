//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAffiliate, MsgUpdateAffiliateTiers, MsgUpdateAffiliateWhitelist, MsgUpdateAffiliateParameters, MsgUpdateAffiliateOverrides } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/dydxprotocol.affiliates.MsgRegisterAffiliate", MsgRegisterAffiliate], ["/dydxprotocol.affiliates.MsgUpdateAffiliateTiers", MsgUpdateAffiliateTiers], ["/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist", MsgUpdateAffiliateWhitelist], ["/dydxprotocol.affiliates.MsgUpdateAffiliateParameters", MsgUpdateAffiliateParameters], ["/dydxprotocol.affiliates.MsgUpdateAffiliateOverrides", MsgUpdateAffiliateOverrides]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAffiliate(value: MsgRegisterAffiliate) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgRegisterAffiliate",
        value: MsgRegisterAffiliate.encode(value).finish()
      };
    },
    updateAffiliateTiers(value: MsgUpdateAffiliateTiers) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiers",
        value: MsgUpdateAffiliateTiers.encode(value).finish()
      };
    },
    updateAffiliateWhitelist(value: MsgUpdateAffiliateWhitelist) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist",
        value: MsgUpdateAffiliateWhitelist.encode(value).finish()
      };
    },
    updateAffiliateParameters(value: MsgUpdateAffiliateParameters) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateParameters",
        value: MsgUpdateAffiliateParameters.encode(value).finish()
      };
    },
    updateAffiliateOverrides(value: MsgUpdateAffiliateOverrides) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverrides",
        value: MsgUpdateAffiliateOverrides.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAffiliate(value: MsgRegisterAffiliate) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgRegisterAffiliate",
        value
      };
    },
    updateAffiliateTiers(value: MsgUpdateAffiliateTiers) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiers",
        value
      };
    },
    updateAffiliateWhitelist(value: MsgUpdateAffiliateWhitelist) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist",
        value
      };
    },
    updateAffiliateParameters(value: MsgUpdateAffiliateParameters) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateParameters",
        value
      };
    },
    updateAffiliateOverrides(value: MsgUpdateAffiliateOverrides) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverrides",
        value
      };
    }
  },
  fromPartial: {
    registerAffiliate(value: MsgRegisterAffiliate) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgRegisterAffiliate",
        value: MsgRegisterAffiliate.fromPartial(value)
      };
    },
    updateAffiliateTiers(value: MsgUpdateAffiliateTiers) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiers",
        value: MsgUpdateAffiliateTiers.fromPartial(value)
      };
    },
    updateAffiliateWhitelist(value: MsgUpdateAffiliateWhitelist) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist",
        value: MsgUpdateAffiliateWhitelist.fromPartial(value)
      };
    },
    updateAffiliateParameters(value: MsgUpdateAffiliateParameters) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateParameters",
        value: MsgUpdateAffiliateParameters.fromPartial(value)
      };
    },
    updateAffiliateOverrides(value: MsgUpdateAffiliateOverrides) {
      return {
        typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverrides",
        value: MsgUpdateAffiliateOverrides.fromPartial(value)
      };
    }
  }
};