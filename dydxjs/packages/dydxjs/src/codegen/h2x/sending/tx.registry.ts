//@ts-nocheck
import { MsgCreateBridgeTransfer, MsgDepositToSubaccount, MsgWithdrawFromSubaccount, MsgSendFromModuleToAccount } from "./transfer";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateTransfer } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.sending.MsgCreateBridgeTransfer", MsgCreateBridgeTransfer], ["/h2x.sending.MsgCreateTransfer", MsgCreateTransfer], ["/h2x.sending.MsgDepositToSubaccount", MsgDepositToSubaccount], ["/h2x.sending.MsgWithdrawFromSubaccount", MsgWithdrawFromSubaccount], ["/h2x.sending.MsgSendFromModuleToAccount", MsgSendFromModuleToAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBridgeTransfer(value: MsgCreateBridgeTransfer) {
      return {
        typeUrl: "/h2x.sending.MsgCreateBridgeTransfer",
        value: MsgCreateBridgeTransfer.encode(value).finish()
      };
    },
    createTransfer(value: MsgCreateTransfer) {
      return {
        typeUrl: "/h2x.sending.MsgCreateTransfer",
        value: MsgCreateTransfer.encode(value).finish()
      };
    },
    depositToSubaccount(value: MsgDepositToSubaccount) {
      return {
        typeUrl: "/h2x.sending.MsgDepositToSubaccount",
        value: MsgDepositToSubaccount.encode(value).finish()
      };
    },
    withdrawFromSubaccount(value: MsgWithdrawFromSubaccount) {
      return {
        typeUrl: "/h2x.sending.MsgWithdrawFromSubaccount",
        value: MsgWithdrawFromSubaccount.encode(value).finish()
      };
    },
    sendFromModuleToAccount(value: MsgSendFromModuleToAccount) {
      return {
        typeUrl: "/h2x.sending.MsgSendFromModuleToAccount",
        value: MsgSendFromModuleToAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBridgeTransfer(value: MsgCreateBridgeTransfer) {
      return {
        typeUrl: "/h2x.sending.MsgCreateBridgeTransfer",
        value
      };
    },
    createTransfer(value: MsgCreateTransfer) {
      return {
        typeUrl: "/h2x.sending.MsgCreateTransfer",
        value
      };
    },
    depositToSubaccount(value: MsgDepositToSubaccount) {
      return {
        typeUrl: "/h2x.sending.MsgDepositToSubaccount",
        value
      };
    },
    withdrawFromSubaccount(value: MsgWithdrawFromSubaccount) {
      return {
        typeUrl: "/h2x.sending.MsgWithdrawFromSubaccount",
        value
      };
    },
    sendFromModuleToAccount(value: MsgSendFromModuleToAccount) {
      return {
        typeUrl: "/h2x.sending.MsgSendFromModuleToAccount",
        value
      };
    }
  },
  fromPartial: {
    createBridgeTransfer(value: MsgCreateBridgeTransfer) {
      return {
        typeUrl: "/h2x.sending.MsgCreateBridgeTransfer",
        value: MsgCreateBridgeTransfer.fromPartial(value)
      };
    },
    createTransfer(value: MsgCreateTransfer) {
      return {
        typeUrl: "/h2x.sending.MsgCreateTransfer",
        value: MsgCreateTransfer.fromPartial(value)
      };
    },
    depositToSubaccount(value: MsgDepositToSubaccount) {
      return {
        typeUrl: "/h2x.sending.MsgDepositToSubaccount",
        value: MsgDepositToSubaccount.fromPartial(value)
      };
    },
    withdrawFromSubaccount(value: MsgWithdrawFromSubaccount) {
      return {
        typeUrl: "/h2x.sending.MsgWithdrawFromSubaccount",
        value: MsgWithdrawFromSubaccount.fromPartial(value)
      };
    },
    sendFromModuleToAccount(value: MsgSendFromModuleToAccount) {
      return {
        typeUrl: "/h2x.sending.MsgSendFromModuleToAccount",
        value: MsgSendFromModuleToAccount.fromPartial(value)
      };
    }
  }
};