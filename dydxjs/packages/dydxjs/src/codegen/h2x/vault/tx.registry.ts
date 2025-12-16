//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDepositToMegavault, MsgWithdrawFromMegavault, MsgUpdateDefaultQuotingParams, MsgUpdateOperatorParams, MsgSetVaultParams, MsgUnlockShares, MsgAllocateToVault, MsgRetrieveFromVault } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.vault.MsgDepositToMegavault", MsgDepositToMegavault], ["/h2x.vault.MsgWithdrawFromMegavault", MsgWithdrawFromMegavault], ["/h2x.vault.MsgUpdateDefaultQuotingParams", MsgUpdateDefaultQuotingParams], ["/h2x.vault.MsgUpdateOperatorParams", MsgUpdateOperatorParams], ["/h2x.vault.MsgSetVaultParams", MsgSetVaultParams], ["/h2x.vault.MsgUnlockShares", MsgUnlockShares], ["/h2x.vault.MsgAllocateToVault", MsgAllocateToVault], ["/h2x.vault.MsgRetrieveFromVault", MsgRetrieveFromVault]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    depositToMegavault(value: MsgDepositToMegavault) {
      return {
        typeUrl: "/h2x.vault.MsgDepositToMegavault",
        value: MsgDepositToMegavault.encode(value).finish()
      };
    },
    withdrawFromMegavault(value: MsgWithdrawFromMegavault) {
      return {
        typeUrl: "/h2x.vault.MsgWithdrawFromMegavault",
        value: MsgWithdrawFromMegavault.encode(value).finish()
      };
    },
    updateDefaultQuotingParams(value: MsgUpdateDefaultQuotingParams) {
      return {
        typeUrl: "/h2x.vault.MsgUpdateDefaultQuotingParams",
        value: MsgUpdateDefaultQuotingParams.encode(value).finish()
      };
    },
    updateOperatorParams(value: MsgUpdateOperatorParams) {
      return {
        typeUrl: "/h2x.vault.MsgUpdateOperatorParams",
        value: MsgUpdateOperatorParams.encode(value).finish()
      };
    },
    setVaultParams(value: MsgSetVaultParams) {
      return {
        typeUrl: "/h2x.vault.MsgSetVaultParams",
        value: MsgSetVaultParams.encode(value).finish()
      };
    },
    unlockShares(value: MsgUnlockShares) {
      return {
        typeUrl: "/h2x.vault.MsgUnlockShares",
        value: MsgUnlockShares.encode(value).finish()
      };
    },
    allocateToVault(value: MsgAllocateToVault) {
      return {
        typeUrl: "/h2x.vault.MsgAllocateToVault",
        value: MsgAllocateToVault.encode(value).finish()
      };
    },
    retrieveFromVault(value: MsgRetrieveFromVault) {
      return {
        typeUrl: "/h2x.vault.MsgRetrieveFromVault",
        value: MsgRetrieveFromVault.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    depositToMegavault(value: MsgDepositToMegavault) {
      return {
        typeUrl: "/h2x.vault.MsgDepositToMegavault",
        value
      };
    },
    withdrawFromMegavault(value: MsgWithdrawFromMegavault) {
      return {
        typeUrl: "/h2x.vault.MsgWithdrawFromMegavault",
        value
      };
    },
    updateDefaultQuotingParams(value: MsgUpdateDefaultQuotingParams) {
      return {
        typeUrl: "/h2x.vault.MsgUpdateDefaultQuotingParams",
        value
      };
    },
    updateOperatorParams(value: MsgUpdateOperatorParams) {
      return {
        typeUrl: "/h2x.vault.MsgUpdateOperatorParams",
        value
      };
    },
    setVaultParams(value: MsgSetVaultParams) {
      return {
        typeUrl: "/h2x.vault.MsgSetVaultParams",
        value
      };
    },
    unlockShares(value: MsgUnlockShares) {
      return {
        typeUrl: "/h2x.vault.MsgUnlockShares",
        value
      };
    },
    allocateToVault(value: MsgAllocateToVault) {
      return {
        typeUrl: "/h2x.vault.MsgAllocateToVault",
        value
      };
    },
    retrieveFromVault(value: MsgRetrieveFromVault) {
      return {
        typeUrl: "/h2x.vault.MsgRetrieveFromVault",
        value
      };
    }
  },
  fromPartial: {
    depositToMegavault(value: MsgDepositToMegavault) {
      return {
        typeUrl: "/h2x.vault.MsgDepositToMegavault",
        value: MsgDepositToMegavault.fromPartial(value)
      };
    },
    withdrawFromMegavault(value: MsgWithdrawFromMegavault) {
      return {
        typeUrl: "/h2x.vault.MsgWithdrawFromMegavault",
        value: MsgWithdrawFromMegavault.fromPartial(value)
      };
    },
    updateDefaultQuotingParams(value: MsgUpdateDefaultQuotingParams) {
      return {
        typeUrl: "/h2x.vault.MsgUpdateDefaultQuotingParams",
        value: MsgUpdateDefaultQuotingParams.fromPartial(value)
      };
    },
    updateOperatorParams(value: MsgUpdateOperatorParams) {
      return {
        typeUrl: "/h2x.vault.MsgUpdateOperatorParams",
        value: MsgUpdateOperatorParams.fromPartial(value)
      };
    },
    setVaultParams(value: MsgSetVaultParams) {
      return {
        typeUrl: "/h2x.vault.MsgSetVaultParams",
        value: MsgSetVaultParams.fromPartial(value)
      };
    },
    unlockShares(value: MsgUnlockShares) {
      return {
        typeUrl: "/h2x.vault.MsgUnlockShares",
        value: MsgUnlockShares.fromPartial(value)
      };
    },
    allocateToVault(value: MsgAllocateToVault) {
      return {
        typeUrl: "/h2x.vault.MsgAllocateToVault",
        value: MsgAllocateToVault.fromPartial(value)
      };
    },
    retrieveFromVault(value: MsgRetrieveFromVault) {
      return {
        typeUrl: "/h2x.vault.MsgRetrieveFromVault",
        value: MsgRetrieveFromVault.fromPartial(value)
      };
    }
  }
};