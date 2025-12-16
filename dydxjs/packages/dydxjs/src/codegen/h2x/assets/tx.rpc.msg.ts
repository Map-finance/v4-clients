//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCreateAsset, MsgCreateAssetResponse, MsgUpdateAsset, MsgUpdateAssetResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** CreateAsset creates a new asset. */
  createAsset(request: MsgCreateAsset): Promise<MsgCreateAssetResponse>;
  /** UpdateAsset updates an existing asset. */
  updateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createAsset = this.createAsset.bind(this);
    this.updateAsset = this.updateAsset.bind(this);
  }
  createAsset(request: MsgCreateAsset): Promise<MsgCreateAssetResponse> {
    const data = MsgCreateAsset.encode(request).finish();
    const promise = this.rpc.request("h2x.assets.Msg", "CreateAsset", data);
    return promise.then(data => MsgCreateAssetResponse.decode(new BinaryReader(data)));
  }
  updateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse> {
    const data = MsgUpdateAsset.encode(request).finish();
    const promise = this.rpc.request("h2x.assets.Msg", "UpdateAsset", data);
    return promise.then(data => MsgUpdateAssetResponse.decode(new BinaryReader(data)));
  }
}