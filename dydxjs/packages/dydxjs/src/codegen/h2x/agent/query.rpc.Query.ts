//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGetAgentInfoRequest, QueryGetAgentInfoResponse, QueryGetAgentsByMasterRequest, QueryGetAgentsByMasterResponse, QueryGetParamsRequest, QueryGetParamsResponse, QueryGetMasterByAgentRequest, QueryGetMasterByAgentResponse } from "./query";
/** Query defines the gRPC querier service for the agent module. */
export interface Query {
  /** GetAgentInfo queries the agent information by agent address. */
  getAgentInfo(request: QueryGetAgentInfoRequest): Promise<QueryGetAgentInfoResponse>;
  /** GetAgentsByMaster queries all agents for a given master address. */
  getAgentsByMaster(request: QueryGetAgentsByMasterRequest): Promise<QueryGetAgentsByMasterResponse>;
  /** GetParams queries the module parameters. */
  getParams(request?: QueryGetParamsRequest): Promise<QueryGetParamsResponse>;
  /** GetMasterByAgent queries the master address for a given agent address. */
  getMasterByAgent(request: QueryGetMasterByAgentRequest): Promise<QueryGetMasterByAgentResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.getAgentInfo = this.getAgentInfo.bind(this);
    this.getAgentsByMaster = this.getAgentsByMaster.bind(this);
    this.getParams = this.getParams.bind(this);
    this.getMasterByAgent = this.getMasterByAgent.bind(this);
  }
  getAgentInfo(request: QueryGetAgentInfoRequest): Promise<QueryGetAgentInfoResponse> {
    const data = QueryGetAgentInfoRequest.encode(request).finish();
    const promise = this.rpc.request("h2x.agent.Query", "GetAgentInfo", data);
    return promise.then(data => QueryGetAgentInfoResponse.decode(new BinaryReader(data)));
  }
  getAgentsByMaster(request: QueryGetAgentsByMasterRequest): Promise<QueryGetAgentsByMasterResponse> {
    const data = QueryGetAgentsByMasterRequest.encode(request).finish();
    const promise = this.rpc.request("h2x.agent.Query", "GetAgentsByMaster", data);
    return promise.then(data => QueryGetAgentsByMasterResponse.decode(new BinaryReader(data)));
  }
  getParams(request: QueryGetParamsRequest = {}): Promise<QueryGetParamsResponse> {
    const data = QueryGetParamsRequest.encode(request).finish();
    const promise = this.rpc.request("h2x.agent.Query", "GetParams", data);
    return promise.then(data => QueryGetParamsResponse.decode(new BinaryReader(data)));
  }
  getMasterByAgent(request: QueryGetMasterByAgentRequest): Promise<QueryGetMasterByAgentResponse> {
    const data = QueryGetMasterByAgentRequest.encode(request).finish();
    const promise = this.rpc.request("h2x.agent.Query", "GetMasterByAgent", data);
    return promise.then(data => QueryGetMasterByAgentResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    getAgentInfo(request: QueryGetAgentInfoRequest): Promise<QueryGetAgentInfoResponse> {
      return queryService.getAgentInfo(request);
    },
    getAgentsByMaster(request: QueryGetAgentsByMasterRequest): Promise<QueryGetAgentsByMasterResponse> {
      return queryService.getAgentsByMaster(request);
    },
    getParams(request?: QueryGetParamsRequest): Promise<QueryGetParamsResponse> {
      return queryService.getParams(request);
    },
    getMasterByAgent(request: QueryGetMasterByAgentRequest): Promise<QueryGetMasterByAgentResponse> {
      return queryService.getMasterByAgent(request);
    }
  };
};