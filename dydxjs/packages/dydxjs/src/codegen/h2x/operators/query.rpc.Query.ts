//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllOperatorsRequest, QueryAllOperatorsResponse, QueryIsOperatorRequest, QueryIsOperatorResponse } from "./query";
/** Query defines the gRPC querier service for the operators module. */
export interface Query {
  /** AllOperators queries all operators. */
  allOperators(request?: QueryAllOperatorsRequest): Promise<QueryAllOperatorsResponse>;
  /** IsOperator checks if an address is an operator. */
  isOperator(request: QueryIsOperatorRequest): Promise<QueryIsOperatorResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allOperators = this.allOperators.bind(this);
    this.isOperator = this.isOperator.bind(this);
  }
  allOperators(request: QueryAllOperatorsRequest = {}): Promise<QueryAllOperatorsResponse> {
    const data = QueryAllOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request("h2x.operators.Query", "AllOperators", data);
    return promise.then(data => QueryAllOperatorsResponse.decode(new BinaryReader(data)));
  }
  isOperator(request: QueryIsOperatorRequest): Promise<QueryIsOperatorResponse> {
    const data = QueryIsOperatorRequest.encode(request).finish();
    const promise = this.rpc.request("h2x.operators.Query", "IsOperator", data);
    return promise.then(data => QueryIsOperatorResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allOperators(request?: QueryAllOperatorsRequest): Promise<QueryAllOperatorsResponse> {
      return queryService.allOperators(request);
    },
    isOperator(request: QueryIsOperatorRequest): Promise<QueryIsOperatorResponse> {
      return queryService.isOperator(request);
    }
  };
};