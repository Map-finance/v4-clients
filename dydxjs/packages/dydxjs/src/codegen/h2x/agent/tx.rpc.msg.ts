//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgRegisterAgent, MsgRegisterAgentResponse, MsgRemoveAgent, MsgRemoveAgentResponse, MsgUpdateAgentParams, MsgUpdateAgentParamsResponse } from "./tx";
/** Msg defines the agent module Msg service. */
export interface Msg {
  /**
   * RegisterAgent registers a new agent for a master account.
   * Must be signed by the master wallet.
   */
  registerAgent(request: MsgRegisterAgent): Promise<MsgRegisterAgentResponse>;
  /**
   * RemoveAgent removes an existing agent authorization.
   * Must be signed by the master wallet.
   */
  removeAgent(request: MsgRemoveAgent): Promise<MsgRemoveAgentResponse>;
  /**
   * UpdateAgentParams updates the module parameters.
   * Can only be called through governance.
   */
  updateAgentParams(request: MsgUpdateAgentParams): Promise<MsgUpdateAgentParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerAgent = this.registerAgent.bind(this);
    this.removeAgent = this.removeAgent.bind(this);
    this.updateAgentParams = this.updateAgentParams.bind(this);
  }
  registerAgent(request: MsgRegisterAgent): Promise<MsgRegisterAgentResponse> {
    const data = MsgRegisterAgent.encode(request).finish();
    const promise = this.rpc.request("h2x.agent.Msg", "RegisterAgent", data);
    return promise.then(data => MsgRegisterAgentResponse.decode(new BinaryReader(data)));
  }
  removeAgent(request: MsgRemoveAgent): Promise<MsgRemoveAgentResponse> {
    const data = MsgRemoveAgent.encode(request).finish();
    const promise = this.rpc.request("h2x.agent.Msg", "RemoveAgent", data);
    return promise.then(data => MsgRemoveAgentResponse.decode(new BinaryReader(data)));
  }
  updateAgentParams(request: MsgUpdateAgentParams): Promise<MsgUpdateAgentParamsResponse> {
    const data = MsgUpdateAgentParams.encode(request).finish();
    const promise = this.rpc.request("h2x.agent.Msg", "UpdateAgentParams", data);
    return promise.then(data => MsgUpdateAgentParamsResponse.decode(new BinaryReader(data)));
  }
}