//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAffiliate, MsgUpdateAffiliateTiers, MsgUpdateAffiliateWhitelist, MsgUpdateAffiliateParameters, MsgUpdateAffiliateOverrides } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.affiliates.MsgRegisterAffiliate", MsgRegisterAffiliate], ["/h2x.affiliates.MsgUpdateAffiliateTiers", MsgUpdateAffiliateTiers], ["/h2x.affiliates.MsgUpdateAffiliateWhitelist", MsgUpdateAffiliateWhitelist], ["/h2x.affiliates.MsgUpdateAffiliateParameters", MsgUpdateAffiliateParameters], ["/h2x.affiliates.MsgUpdateAffiliateOverrides", MsgUpdateAffiliateOverrides]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAffiliate(value: MsgRegisterAffiliate) {
      return {
        typeUrl: "/h2x.affiliates.MsgRegisterAffiliate",
        value: MsgRegisterAffiliate.encode(value).finish()
      };
    },
    updateAffiliateTiers(value: MsgUpdateAffiliateTiers) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateTiers",
        value: MsgUpdateAffiliateTiers.encode(value).finish()
      };
    },
    updateAffiliateWhitelist(value: MsgUpdateAffiliateWhitelist) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateWhitelist",
        value: MsgUpdateAffiliateWhitelist.encode(value).finish()
      };
    },
    updateAffiliateParameters(value: MsgUpdateAffiliateParameters) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateParameters",
        value: MsgUpdateAffiliateParameters.encode(value).finish()
      };
    },
    updateAffiliateOverrides(value: MsgUpdateAffiliateOverrides) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateOverrides",
        value: MsgUpdateAffiliateOverrides.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAffiliate(value: MsgRegisterAffiliate) {
      return {
        typeUrl: "/h2x.affiliates.MsgRegisterAffiliate",
        value
      };
    },
    updateAffiliateTiers(value: MsgUpdateAffiliateTiers) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateTiers",
        value
      };
    },
    updateAffiliateWhitelist(value: MsgUpdateAffiliateWhitelist) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateWhitelist",
        value
      };
    },
    updateAffiliateParameters(value: MsgUpdateAffiliateParameters) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateParameters",
        value
      };
    },
    updateAffiliateOverrides(value: MsgUpdateAffiliateOverrides) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateOverrides",
        value
      };
    }
  },
  fromPartial: {
    registerAffiliate(value: MsgRegisterAffiliate) {
      return {
        typeUrl: "/h2x.affiliates.MsgRegisterAffiliate",
        value: MsgRegisterAffiliate.fromPartial(value)
      };
    },
    updateAffiliateTiers(value: MsgUpdateAffiliateTiers) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateTiers",
        value: MsgUpdateAffiliateTiers.fromPartial(value)
      };
    },
    updateAffiliateWhitelist(value: MsgUpdateAffiliateWhitelist) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateWhitelist",
        value: MsgUpdateAffiliateWhitelist.fromPartial(value)
      };
    },
    updateAffiliateParameters(value: MsgUpdateAffiliateParameters) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateParameters",
        value: MsgUpdateAffiliateParameters.fromPartial(value)
      };
    },
    updateAffiliateOverrides(value: MsgUpdateAffiliateOverrides) {
      return {
        typeUrl: "/h2x.affiliates.MsgUpdateAffiliateOverrides",
        value: MsgUpdateAffiliateOverrides.fromPartial(value)
      };
    }
  }
};