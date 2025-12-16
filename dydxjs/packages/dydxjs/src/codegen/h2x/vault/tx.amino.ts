//@ts-nocheck
import { MsgDepositToMegavault, MsgWithdrawFromMegavault, MsgUpdateDefaultQuotingParams, MsgUpdateOperatorParams, MsgSetVaultParams, MsgUnlockShares, MsgAllocateToVault, MsgRetrieveFromVault } from "./tx";
export const AminoConverter = {
  "/h2x.vault.MsgDepositToMegavault": {
    aminoType: "/h2x.vault.MsgDepositToMegavault",
    toAmino: MsgDepositToMegavault.toAmino,
    fromAmino: MsgDepositToMegavault.fromAmino
  },
  "/h2x.vault.MsgWithdrawFromMegavault": {
    aminoType: "/h2x.vault.MsgWithdrawFromMegavault",
    toAmino: MsgWithdrawFromMegavault.toAmino,
    fromAmino: MsgWithdrawFromMegavault.fromAmino
  },
  "/h2x.vault.MsgUpdateDefaultQuotingParams": {
    aminoType: "/h2x.vault.MsgUpdateDefaultQuotingParams",
    toAmino: MsgUpdateDefaultQuotingParams.toAmino,
    fromAmino: MsgUpdateDefaultQuotingParams.fromAmino
  },
  "/h2x.vault.MsgUpdateOperatorParams": {
    aminoType: "/h2x.vault.MsgUpdateOperatorParams",
    toAmino: MsgUpdateOperatorParams.toAmino,
    fromAmino: MsgUpdateOperatorParams.fromAmino
  },
  "/h2x.vault.MsgSetVaultParams": {
    aminoType: "/h2x.vault.MsgSetVaultParams",
    toAmino: MsgSetVaultParams.toAmino,
    fromAmino: MsgSetVaultParams.fromAmino
  },
  "/h2x.vault.MsgUnlockShares": {
    aminoType: "/h2x.vault.MsgUnlockShares",
    toAmino: MsgUnlockShares.toAmino,
    fromAmino: MsgUnlockShares.fromAmino
  },
  "/h2x.vault.MsgAllocateToVault": {
    aminoType: "/h2x.vault.MsgAllocateToVault",
    toAmino: MsgAllocateToVault.toAmino,
    fromAmino: MsgAllocateToVault.fromAmino
  },
  "/h2x.vault.MsgRetrieveFromVault": {
    aminoType: "/h2x.vault.MsgRetrieveFromVault",
    toAmino: MsgRetrieveFromVault.toAmino,
    fromAmino: MsgRetrieveFromVault.fromAmino
  }
};