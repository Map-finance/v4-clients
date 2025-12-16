//@ts-nocheck
import { MsgSetMarketsHardCap, MsgCreateMarketPermissionless, MsgSetListingVaultDepositParams, MsgUpgradeIsolatedPerpetualToCross } from "./tx";
export const AminoConverter = {
  "/h2x.listing.MsgSetMarketsHardCap": {
    aminoType: "/h2x.listing.MsgSetMarketsHardCap",
    toAmino: MsgSetMarketsHardCap.toAmino,
    fromAmino: MsgSetMarketsHardCap.fromAmino
  },
  "/h2x.listing.MsgCreateMarketPermissionless": {
    aminoType: "/h2x.listing.MsgCreateMarketPermissionless",
    toAmino: MsgCreateMarketPermissionless.toAmino,
    fromAmino: MsgCreateMarketPermissionless.fromAmino
  },
  "/h2x.listing.MsgSetListingVaultDepositParams": {
    aminoType: "/h2x.listing.MsgSetListingVaultDepositParams",
    toAmino: MsgSetListingVaultDepositParams.toAmino,
    fromAmino: MsgSetListingVaultDepositParams.fromAmino
  },
  "/h2x.listing.MsgUpgradeIsolatedPerpetualToCross": {
    aminoType: "/h2x.listing.MsgUpgradeIsolatedPerpetualToCross",
    toAmino: MsgUpgradeIsolatedPerpetualToCross.toAmino,
    fromAmino: MsgUpgradeIsolatedPerpetualToCross.fromAmino
  }
};