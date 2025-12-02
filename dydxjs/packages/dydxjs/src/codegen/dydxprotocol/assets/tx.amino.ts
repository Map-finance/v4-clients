//@ts-nocheck
import { MsgCreateAsset, MsgUpdateAsset } from "./tx";
export const AminoConverter = {
  "/dydxprotocol.assets.MsgCreateAsset": {
    aminoType: "/dydxprotocol.assets.MsgCreateAsset",
    toAmino: MsgCreateAsset.toAmino,
    fromAmino: MsgCreateAsset.fromAmino
  },
  "/dydxprotocol.assets.MsgUpdateAsset": {
    aminoType: "/dydxprotocol.assets.MsgUpdateAsset",
    toAmino: MsgUpdateAsset.toAmino,
    fromAmino: MsgUpdateAsset.fromAmino
  }
};