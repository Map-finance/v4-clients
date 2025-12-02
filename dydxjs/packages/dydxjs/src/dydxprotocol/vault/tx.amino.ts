//@ts-nocheck
import { MsgDepositToMegavault, MsgWithdrawFromMegavault, MsgUpdateDefaultQuotingParams, MsgUpdateOperatorParams, MsgSetVaultParams, MsgUnlockShares, MsgAllocateToVault, MsgRetrieveFromVault } from "./tx";
export const AminoConverter = {
  "/dydxprotocol.vault.MsgDepositToMegavault": {
    aminoType: "/dydxprotocol.vault.MsgDepositToMegavault",
    toAmino: MsgDepositToMegavault.toAmino,
    fromAmino: MsgDepositToMegavault.fromAmino
  },
  "/dydxprotocol.vault.MsgWithdrawFromMegavault": {
    aminoType: "/dydxprotocol.vault.MsgWithdrawFromMegavault",
    toAmino: MsgWithdrawFromMegavault.toAmino,
    fromAmino: MsgWithdrawFromMegavault.fromAmino
  },
  "/dydxprotocol.vault.MsgUpdateDefaultQuotingParams": {
    aminoType: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParams",
    toAmino: MsgUpdateDefaultQuotingParams.toAmino,
    fromAmino: MsgUpdateDefaultQuotingParams.fromAmino
  },
  "/dydxprotocol.vault.MsgUpdateOperatorParams": {
    aminoType: "/dydxprotocol.vault.MsgUpdateOperatorParams",
    toAmino: MsgUpdateOperatorParams.toAmino,
    fromAmino: MsgUpdateOperatorParams.fromAmino
  },
  "/dydxprotocol.vault.MsgSetVaultParams": {
    aminoType: "/dydxprotocol.vault.MsgSetVaultParams",
    toAmino: MsgSetVaultParams.toAmino,
    fromAmino: MsgSetVaultParams.fromAmino
  },
  "/dydxprotocol.vault.MsgUnlockShares": {
    aminoType: "/dydxprotocol.vault.MsgUnlockShares",
    toAmino: MsgUnlockShares.toAmino,
    fromAmino: MsgUnlockShares.fromAmino
  },
  "/dydxprotocol.vault.MsgAllocateToVault": {
    aminoType: "/dydxprotocol.vault.MsgAllocateToVault",
    toAmino: MsgAllocateToVault.toAmino,
    fromAmino: MsgAllocateToVault.fromAmino
  },
  "/dydxprotocol.vault.MsgRetrieveFromVault": {
    aminoType: "/dydxprotocol.vault.MsgRetrieveFromVault",
    toAmino: MsgRetrieveFromVault.toAmino,
    fromAmino: MsgRetrieveFromVault.fromAmino
  }
};