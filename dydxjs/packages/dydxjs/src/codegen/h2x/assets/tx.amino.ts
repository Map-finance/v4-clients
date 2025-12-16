//@ts-nocheck
import { MsgCreateAsset, MsgUpdateAsset } from "./tx";
export const AminoConverter = {
  "/h2x.assets.MsgCreateAsset": {
    aminoType: "/h2x.assets.MsgCreateAsset",
    toAmino: MsgCreateAsset.toAmino,
    fromAmino: MsgCreateAsset.fromAmino
  },
  "/h2x.assets.MsgUpdateAsset": {
    aminoType: "/h2x.assets.MsgUpdateAsset",
    toAmino: MsgUpdateAsset.toAmino,
    fromAmino: MsgUpdateAsset.fromAmino
  }
};