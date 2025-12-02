//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDepositToMegavault, MsgWithdrawFromMegavault, MsgUpdateDefaultQuotingParams, MsgUpdateOperatorParams, MsgSetVaultParams, MsgUnlockShares, MsgAllocateToVault, MsgRetrieveFromVault } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/dydxprotocol.vault.MsgDepositToMegavault", MsgDepositToMegavault], ["/dydxprotocol.vault.MsgWithdrawFromMegavault", MsgWithdrawFromMegavault], ["/dydxprotocol.vault.MsgUpdateDefaultQuotingParams", MsgUpdateDefaultQuotingParams], ["/dydxprotocol.vault.MsgUpdateOperatorParams", MsgUpdateOperatorParams], ["/dydxprotocol.vault.MsgSetVaultParams", MsgSetVaultParams], ["/dydxprotocol.vault.MsgUnlockShares", MsgUnlockShares], ["/dydxprotocol.vault.MsgAllocateToVault", MsgAllocateToVault], ["/dydxprotocol.vault.MsgRetrieveFromVault", MsgRetrieveFromVault]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    depositToMegavault(value: MsgDepositToMegavault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgDepositToMegavault",
        value: MsgDepositToMegavault.encode(value).finish()
      };
    },
    withdrawFromMegavault(value: MsgWithdrawFromMegavault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgWithdrawFromMegavault",
        value: MsgWithdrawFromMegavault.encode(value).finish()
      };
    },
    updateDefaultQuotingParams(value: MsgUpdateDefaultQuotingParams) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParams",
        value: MsgUpdateDefaultQuotingParams.encode(value).finish()
      };
    },
    updateOperatorParams(value: MsgUpdateOperatorParams) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgUpdateOperatorParams",
        value: MsgUpdateOperatorParams.encode(value).finish()
      };
    },
    setVaultParams(value: MsgSetVaultParams) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgSetVaultParams",
        value: MsgSetVaultParams.encode(value).finish()
      };
    },
    unlockShares(value: MsgUnlockShares) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgUnlockShares",
        value: MsgUnlockShares.encode(value).finish()
      };
    },
    allocateToVault(value: MsgAllocateToVault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgAllocateToVault",
        value: MsgAllocateToVault.encode(value).finish()
      };
    },
    retrieveFromVault(value: MsgRetrieveFromVault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgRetrieveFromVault",
        value: MsgRetrieveFromVault.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    depositToMegavault(value: MsgDepositToMegavault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgDepositToMegavault",
        value
      };
    },
    withdrawFromMegavault(value: MsgWithdrawFromMegavault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgWithdrawFromMegavault",
        value
      };
    },
    updateDefaultQuotingParams(value: MsgUpdateDefaultQuotingParams) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParams",
        value
      };
    },
    updateOperatorParams(value: MsgUpdateOperatorParams) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgUpdateOperatorParams",
        value
      };
    },
    setVaultParams(value: MsgSetVaultParams) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgSetVaultParams",
        value
      };
    },
    unlockShares(value: MsgUnlockShares) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgUnlockShares",
        value
      };
    },
    allocateToVault(value: MsgAllocateToVault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgAllocateToVault",
        value
      };
    },
    retrieveFromVault(value: MsgRetrieveFromVault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgRetrieveFromVault",
        value
      };
    }
  },
  fromPartial: {
    depositToMegavault(value: MsgDepositToMegavault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgDepositToMegavault",
        value: MsgDepositToMegavault.fromPartial(value)
      };
    },
    withdrawFromMegavault(value: MsgWithdrawFromMegavault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgWithdrawFromMegavault",
        value: MsgWithdrawFromMegavault.fromPartial(value)
      };
    },
    updateDefaultQuotingParams(value: MsgUpdateDefaultQuotingParams) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParams",
        value: MsgUpdateDefaultQuotingParams.fromPartial(value)
      };
    },
    updateOperatorParams(value: MsgUpdateOperatorParams) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgUpdateOperatorParams",
        value: MsgUpdateOperatorParams.fromPartial(value)
      };
    },
    setVaultParams(value: MsgSetVaultParams) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgSetVaultParams",
        value: MsgSetVaultParams.fromPartial(value)
      };
    },
    unlockShares(value: MsgUnlockShares) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgUnlockShares",
        value: MsgUnlockShares.fromPartial(value)
      };
    },
    allocateToVault(value: MsgAllocateToVault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgAllocateToVault",
        value: MsgAllocateToVault.fromPartial(value)
      };
    },
    retrieveFromVault(value: MsgRetrieveFromVault) {
      return {
        typeUrl: "/dydxprotocol.vault.MsgRetrieveFromVault",
        value: MsgRetrieveFromVault.fromPartial(value)
      };
    }
  }
};