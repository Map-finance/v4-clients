//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgAddToBlacklist, MsgAddToBlacklistResponse, MsgRemoveFromBlacklist, MsgRemoveFromBlacklistResponse, MsgBatchAddToBlacklist, MsgBatchAddToBlacklistResponse, MsgBatchRemoveFromBlacklist, MsgBatchRemoveFromBlacklistResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** AddToBlacklist adds an address to the blacklist. */
  addToBlacklist(request: MsgAddToBlacklist): Promise<MsgAddToBlacklistResponse>;
  /** RemoveFromBlacklist removes an address from the blacklist. */
  removeFromBlacklist(request: MsgRemoveFromBlacklist): Promise<MsgRemoveFromBlacklistResponse>;
  /** BatchAddToBlacklist adds multiple addresses to the blacklist. */
  batchAddToBlacklist(request: MsgBatchAddToBlacklist): Promise<MsgBatchAddToBlacklistResponse>;
  /** BatchRemoveFromBlacklist removes multiple addresses from the blacklist. */
  batchRemoveFromBlacklist(request: MsgBatchRemoveFromBlacklist): Promise<MsgBatchRemoveFromBlacklistResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addToBlacklist = this.addToBlacklist.bind(this);
    this.removeFromBlacklist = this.removeFromBlacklist.bind(this);
    this.batchAddToBlacklist = this.batchAddToBlacklist.bind(this);
    this.batchRemoveFromBlacklist = this.batchRemoveFromBlacklist.bind(this);
  }
  addToBlacklist(request: MsgAddToBlacklist): Promise<MsgAddToBlacklistResponse> {
    const data = MsgAddToBlacklist.encode(request).finish();
    const promise = this.rpc.request("h2x.blacklist.Msg", "AddToBlacklist", data);
    return promise.then(data => MsgAddToBlacklistResponse.decode(new BinaryReader(data)));
  }
  removeFromBlacklist(request: MsgRemoveFromBlacklist): Promise<MsgRemoveFromBlacklistResponse> {
    const data = MsgRemoveFromBlacklist.encode(request).finish();
    const promise = this.rpc.request("h2x.blacklist.Msg", "RemoveFromBlacklist", data);
    return promise.then(data => MsgRemoveFromBlacklistResponse.decode(new BinaryReader(data)));
  }
  batchAddToBlacklist(request: MsgBatchAddToBlacklist): Promise<MsgBatchAddToBlacklistResponse> {
    const data = MsgBatchAddToBlacklist.encode(request).finish();
    const promise = this.rpc.request("h2x.blacklist.Msg", "BatchAddToBlacklist", data);
    return promise.then(data => MsgBatchAddToBlacklistResponse.decode(new BinaryReader(data)));
  }
  batchRemoveFromBlacklist(request: MsgBatchRemoveFromBlacklist): Promise<MsgBatchRemoveFromBlacklistResponse> {
    const data = MsgBatchRemoveFromBlacklist.encode(request).finish();
    const promise = this.rpc.request("h2x.blacklist.Msg", "BatchRemoveFromBlacklist", data);
    return promise.then(data => MsgBatchRemoveFromBlacklistResponse.decode(new BinaryReader(data)));
  }
}