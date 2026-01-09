//@ts-nocheck
import { MsgCreateBridgeTransfer, MsgDepositToSubaccount, MsgWithdrawFromSubaccount, MsgSendFromModuleToAccount, MsgCreateCtfBridgeTransfer } from "./transfer";
import { MsgCreateTransfer } from "./tx";
export const AminoConverter = {
  "/h2x.sending.MsgCreateBridgeTransfer": {
    aminoType: "/h2x.sending.MsgCreateBridgeTransfer",
    toAmino: MsgCreateBridgeTransfer.toAmino,
    fromAmino: MsgCreateBridgeTransfer.fromAmino
  },
  "/h2x.sending.MsgCreateTransfer": {
    aminoType: "/h2x.sending.MsgCreateTransfer",
    toAmino: MsgCreateTransfer.toAmino,
    fromAmino: MsgCreateTransfer.fromAmino
  },
  "/h2x.sending.MsgDepositToSubaccount": {
    aminoType: "/h2x.sending.MsgDepositToSubaccount",
    toAmino: MsgDepositToSubaccount.toAmino,
    fromAmino: MsgDepositToSubaccount.fromAmino
  },
  "/h2x.sending.MsgWithdrawFromSubaccount": {
    aminoType: "/h2x.sending.MsgWithdrawFromSubaccount",
    toAmino: MsgWithdrawFromSubaccount.toAmino,
    fromAmino: MsgWithdrawFromSubaccount.fromAmino
  },
  "/h2x.sending.MsgSendFromModuleToAccount": {
    aminoType: "/h2x.sending.MsgSendFromModuleToAccount",
    toAmino: MsgSendFromModuleToAccount.toAmino,
    fromAmino: MsgSendFromModuleToAccount.fromAmino
  },
  "/h2x.sending.MsgCreateCtfBridgeTransfer": {
    aminoType: "/h2x.sending.MsgCreateCtfBridgeTransfer",
    toAmino: MsgCreateCtfBridgeTransfer.toAmino,
    fromAmino: MsgCreateCtfBridgeTransfer.fromAmino
  }
};