//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryIsBlacklistedRequest, QueryIsBlacklistedResponse, QueryAllBlacklistedAddressesRequest, QueryAllBlacklistedAddressesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** IsBlacklisted checks if an address is blacklisted. */
  isBlacklisted(request: QueryIsBlacklistedRequest): Promise<QueryIsBlacklistedResponse>;
  /** GetAllBlacklistedAddresses returns all blacklisted addresses. */
  getAllBlacklistedAddresses(request?: QueryAllBlacklistedAddressesRequest): Promise<QueryAllBlacklistedAddressesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.isBlacklisted = this.isBlacklisted.bind(this);
    this.getAllBlacklistedAddresses = this.getAllBlacklistedAddresses.bind(this);
  }
  isBlacklisted(request: QueryIsBlacklistedRequest): Promise<QueryIsBlacklistedResponse> {
    const data = QueryIsBlacklistedRequest.encode(request).finish();
    const promise = this.rpc.request("h2x.blacklist.Query", "IsBlacklisted", data);
    return promise.then(data => QueryIsBlacklistedResponse.decode(new BinaryReader(data)));
  }
  getAllBlacklistedAddresses(request: QueryAllBlacklistedAddressesRequest = {}): Promise<QueryAllBlacklistedAddressesResponse> {
    const data = QueryAllBlacklistedAddressesRequest.encode(request).finish();
    const promise = this.rpc.request("h2x.blacklist.Query", "GetAllBlacklistedAddresses", data);
    return promise.then(data => QueryAllBlacklistedAddressesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    isBlacklisted(request: QueryIsBlacklistedRequest): Promise<QueryIsBlacklistedResponse> {
      return queryService.isBlacklisted(request);
    },
    getAllBlacklistedAddresses(request?: QueryAllBlacklistedAddressesRequest): Promise<QueryAllBlacklistedAddressesResponse> {
      return queryService.getAllBlacklistedAddresses(request);
    }
  };
};