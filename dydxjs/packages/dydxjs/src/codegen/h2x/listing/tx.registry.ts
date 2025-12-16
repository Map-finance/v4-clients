//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetMarketsHardCap, MsgCreateMarketPermissionless, MsgSetListingVaultDepositParams, MsgUpgradeIsolatedPerpetualToCross } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.listing.MsgSetMarketsHardCap", MsgSetMarketsHardCap], ["/h2x.listing.MsgCreateMarketPermissionless", MsgCreateMarketPermissionless], ["/h2x.listing.MsgSetListingVaultDepositParams", MsgSetListingVaultDepositParams], ["/h2x.listing.MsgUpgradeIsolatedPerpetualToCross", MsgUpgradeIsolatedPerpetualToCross]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setMarketsHardCap(value: MsgSetMarketsHardCap) {
      return {
        typeUrl: "/h2x.listing.MsgSetMarketsHardCap",
        value: MsgSetMarketsHardCap.encode(value).finish()
      };
    },
    createMarketPermissionless(value: MsgCreateMarketPermissionless) {
      return {
        typeUrl: "/h2x.listing.MsgCreateMarketPermissionless",
        value: MsgCreateMarketPermissionless.encode(value).finish()
      };
    },
    setListingVaultDepositParams(value: MsgSetListingVaultDepositParams) {
      return {
        typeUrl: "/h2x.listing.MsgSetListingVaultDepositParams",
        value: MsgSetListingVaultDepositParams.encode(value).finish()
      };
    },
    upgradeIsolatedPerpetualToCross(value: MsgUpgradeIsolatedPerpetualToCross) {
      return {
        typeUrl: "/h2x.listing.MsgUpgradeIsolatedPerpetualToCross",
        value: MsgUpgradeIsolatedPerpetualToCross.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setMarketsHardCap(value: MsgSetMarketsHardCap) {
      return {
        typeUrl: "/h2x.listing.MsgSetMarketsHardCap",
        value
      };
    },
    createMarketPermissionless(value: MsgCreateMarketPermissionless) {
      return {
        typeUrl: "/h2x.listing.MsgCreateMarketPermissionless",
        value
      };
    },
    setListingVaultDepositParams(value: MsgSetListingVaultDepositParams) {
      return {
        typeUrl: "/h2x.listing.MsgSetListingVaultDepositParams",
        value
      };
    },
    upgradeIsolatedPerpetualToCross(value: MsgUpgradeIsolatedPerpetualToCross) {
      return {
        typeUrl: "/h2x.listing.MsgUpgradeIsolatedPerpetualToCross",
        value
      };
    }
  },
  fromPartial: {
    setMarketsHardCap(value: MsgSetMarketsHardCap) {
      return {
        typeUrl: "/h2x.listing.MsgSetMarketsHardCap",
        value: MsgSetMarketsHardCap.fromPartial(value)
      };
    },
    createMarketPermissionless(value: MsgCreateMarketPermissionless) {
      return {
        typeUrl: "/h2x.listing.MsgCreateMarketPermissionless",
        value: MsgCreateMarketPermissionless.fromPartial(value)
      };
    },
    setListingVaultDepositParams(value: MsgSetListingVaultDepositParams) {
      return {
        typeUrl: "/h2x.listing.MsgSetListingVaultDepositParams",
        value: MsgSetListingVaultDepositParams.fromPartial(value)
      };
    },
    upgradeIsolatedPerpetualToCross(value: MsgUpgradeIsolatedPerpetualToCross) {
      return {
        typeUrl: "/h2x.listing.MsgUpgradeIsolatedPerpetualToCross",
        value: MsgUpgradeIsolatedPerpetualToCross.fromPartial(value)
      };
    }
  }
};