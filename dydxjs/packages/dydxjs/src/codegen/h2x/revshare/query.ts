//@ts-nocheck
import { MarketMapperRevenueShareParams, MarketMapperRevenueShareParamsAmino, MarketMapperRevenueShareParamsSDKType } from "./params";
import { MarketMapperRevShareDetails, MarketMapperRevShareDetailsAmino, MarketMapperRevShareDetailsSDKType, UnconditionalRevShareConfig, UnconditionalRevShareConfigAmino, UnconditionalRevShareConfigSDKType, OrderRouterRevShare, OrderRouterRevShareAmino, OrderRouterRevShareSDKType } from "./revshare";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Queries for the default market mapper revenue share params */
export interface QueryMarketMapperRevenueShareParams {}
export interface QueryMarketMapperRevenueShareParamsProtoMsg {
  typeUrl: "/h2x.revshare.QueryMarketMapperRevenueShareParams";
  value: Uint8Array;
}
/**
 * Queries for the default market mapper revenue share params
 * @name QueryMarketMapperRevenueShareParamsAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.QueryMarketMapperRevenueShareParams
 */
export interface QueryMarketMapperRevenueShareParamsAmino {}
export interface QueryMarketMapperRevenueShareParamsAminoMsg {
  type: "/h2x.revshare.QueryMarketMapperRevenueShareParams";
  value: QueryMarketMapperRevenueShareParamsAmino;
}
/** Queries for the default market mapper revenue share params */
export interface QueryMarketMapperRevenueShareParamsSDKType {}
/** Response type for QueryMarketMapperRevenueShareParams */
export interface QueryMarketMapperRevenueShareParamsResponse {
  params: MarketMapperRevenueShareParams;
}
export interface QueryMarketMapperRevenueShareParamsResponseProtoMsg {
  typeUrl: "/h2x.revshare.QueryMarketMapperRevenueShareParamsResponse";
  value: Uint8Array;
}
/**
 * Response type for QueryMarketMapperRevenueShareParams
 * @name QueryMarketMapperRevenueShareParamsResponseAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.QueryMarketMapperRevenueShareParamsResponse
 */
export interface QueryMarketMapperRevenueShareParamsResponseAmino {
  params?: MarketMapperRevenueShareParamsAmino;
}
export interface QueryMarketMapperRevenueShareParamsResponseAminoMsg {
  type: "/h2x.revshare.QueryMarketMapperRevenueShareParamsResponse";
  value: QueryMarketMapperRevenueShareParamsResponseAmino;
}
/** Response type for QueryMarketMapperRevenueShareParams */
export interface QueryMarketMapperRevenueShareParamsResponseSDKType {
  params: MarketMapperRevenueShareParamsSDKType;
}
/** Queries market mapper revenue share details for a specific market */
export interface QueryMarketMapperRevShareDetails {
  marketId: number;
}
export interface QueryMarketMapperRevShareDetailsProtoMsg {
  typeUrl: "/h2x.revshare.QueryMarketMapperRevShareDetails";
  value: Uint8Array;
}
/**
 * Queries market mapper revenue share details for a specific market
 * @name QueryMarketMapperRevShareDetailsAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.QueryMarketMapperRevShareDetails
 */
export interface QueryMarketMapperRevShareDetailsAmino {
  market_id?: number;
}
export interface QueryMarketMapperRevShareDetailsAminoMsg {
  type: "/h2x.revshare.QueryMarketMapperRevShareDetails";
  value: QueryMarketMapperRevShareDetailsAmino;
}
/** Queries market mapper revenue share details for a specific market */
export interface QueryMarketMapperRevShareDetailsSDKType {
  market_id: number;
}
/** Response type for QueryMarketMapperRevShareDetails */
export interface QueryMarketMapperRevShareDetailsResponse {
  details: MarketMapperRevShareDetails;
}
export interface QueryMarketMapperRevShareDetailsResponseProtoMsg {
  typeUrl: "/h2x.revshare.QueryMarketMapperRevShareDetailsResponse";
  value: Uint8Array;
}
/**
 * Response type for QueryMarketMapperRevShareDetails
 * @name QueryMarketMapperRevShareDetailsResponseAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.QueryMarketMapperRevShareDetailsResponse
 */
export interface QueryMarketMapperRevShareDetailsResponseAmino {
  details?: MarketMapperRevShareDetailsAmino;
}
export interface QueryMarketMapperRevShareDetailsResponseAminoMsg {
  type: "/h2x.revshare.QueryMarketMapperRevShareDetailsResponse";
  value: QueryMarketMapperRevShareDetailsResponseAmino;
}
/** Response type for QueryMarketMapperRevShareDetails */
export interface QueryMarketMapperRevShareDetailsResponseSDKType {
  details: MarketMapperRevShareDetailsSDKType;
}
/** Queries unconditional revenue share details */
export interface QueryUnconditionalRevShareConfig {}
export interface QueryUnconditionalRevShareConfigProtoMsg {
  typeUrl: "/h2x.revshare.QueryUnconditionalRevShareConfig";
  value: Uint8Array;
}
/**
 * Queries unconditional revenue share details
 * @name QueryUnconditionalRevShareConfigAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.QueryUnconditionalRevShareConfig
 */
export interface QueryUnconditionalRevShareConfigAmino {}
export interface QueryUnconditionalRevShareConfigAminoMsg {
  type: "/h2x.revshare.QueryUnconditionalRevShareConfig";
  value: QueryUnconditionalRevShareConfigAmino;
}
/** Queries unconditional revenue share details */
export interface QueryUnconditionalRevShareConfigSDKType {}
/** Response type for QueryUnconditionalRevShareConfig */
export interface QueryUnconditionalRevShareConfigResponse {
  config: UnconditionalRevShareConfig;
}
export interface QueryUnconditionalRevShareConfigResponseProtoMsg {
  typeUrl: "/h2x.revshare.QueryUnconditionalRevShareConfigResponse";
  value: Uint8Array;
}
/**
 * Response type for QueryUnconditionalRevShareConfig
 * @name QueryUnconditionalRevShareConfigResponseAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.QueryUnconditionalRevShareConfigResponse
 */
export interface QueryUnconditionalRevShareConfigResponseAmino {
  config?: UnconditionalRevShareConfigAmino;
}
export interface QueryUnconditionalRevShareConfigResponseAminoMsg {
  type: "/h2x.revshare.QueryUnconditionalRevShareConfigResponse";
  value: QueryUnconditionalRevShareConfigResponseAmino;
}
/** Response type for QueryUnconditionalRevShareConfig */
export interface QueryUnconditionalRevShareConfigResponseSDKType {
  config: UnconditionalRevShareConfigSDKType;
}
/** Queries order router rev shares */
export interface QueryOrderRouterRevShare {
  address: string;
}
export interface QueryOrderRouterRevShareProtoMsg {
  typeUrl: "/h2x.revshare.QueryOrderRouterRevShare";
  value: Uint8Array;
}
/**
 * Queries order router rev shares
 * @name QueryOrderRouterRevShareAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.QueryOrderRouterRevShare
 */
export interface QueryOrderRouterRevShareAmino {
  address?: string;
}
export interface QueryOrderRouterRevShareAminoMsg {
  type: "/h2x.revshare.QueryOrderRouterRevShare";
  value: QueryOrderRouterRevShareAmino;
}
/** Queries order router rev shares */
export interface QueryOrderRouterRevShareSDKType {
  address: string;
}
/** Response type for QueryOrderRouterRevShare */
export interface QueryOrderRouterRevShareResponse {
  orderRouterRevShare: OrderRouterRevShare;
}
export interface QueryOrderRouterRevShareResponseProtoMsg {
  typeUrl: "/h2x.revshare.QueryOrderRouterRevShareResponse";
  value: Uint8Array;
}
/**
 * Response type for QueryOrderRouterRevShare
 * @name QueryOrderRouterRevShareResponseAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.QueryOrderRouterRevShareResponse
 */
export interface QueryOrderRouterRevShareResponseAmino {
  order_router_rev_share?: OrderRouterRevShareAmino;
}
export interface QueryOrderRouterRevShareResponseAminoMsg {
  type: "/h2x.revshare.QueryOrderRouterRevShareResponse";
  value: QueryOrderRouterRevShareResponseAmino;
}
/** Response type for QueryOrderRouterRevShare */
export interface QueryOrderRouterRevShareResponseSDKType {
  order_router_rev_share: OrderRouterRevShareSDKType;
}
function createBaseQueryMarketMapperRevenueShareParams(): QueryMarketMapperRevenueShareParams {
  return {};
}
export const QueryMarketMapperRevenueShareParams = {
  typeUrl: "/h2x.revshare.QueryMarketMapperRevenueShareParams",
  encode(_: QueryMarketMapperRevenueShareParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketMapperRevenueShareParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketMapperRevenueShareParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryMarketMapperRevenueShareParams>): QueryMarketMapperRevenueShareParams {
    const message = createBaseQueryMarketMapperRevenueShareParams();
    return message;
  },
  fromAmino(_: QueryMarketMapperRevenueShareParamsAmino): QueryMarketMapperRevenueShareParams {
    const message = createBaseQueryMarketMapperRevenueShareParams();
    return message;
  },
  toAmino(_: QueryMarketMapperRevenueShareParams): QueryMarketMapperRevenueShareParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMarketMapperRevenueShareParamsAminoMsg): QueryMarketMapperRevenueShareParams {
    return QueryMarketMapperRevenueShareParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketMapperRevenueShareParamsProtoMsg): QueryMarketMapperRevenueShareParams {
    return QueryMarketMapperRevenueShareParams.decode(message.value);
  },
  toProto(message: QueryMarketMapperRevenueShareParams): Uint8Array {
    return QueryMarketMapperRevenueShareParams.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketMapperRevenueShareParams): QueryMarketMapperRevenueShareParamsProtoMsg {
    return {
      typeUrl: "/h2x.revshare.QueryMarketMapperRevenueShareParams",
      value: QueryMarketMapperRevenueShareParams.encode(message).finish()
    };
  }
};
function createBaseQueryMarketMapperRevenueShareParamsResponse(): QueryMarketMapperRevenueShareParamsResponse {
  return {
    params: MarketMapperRevenueShareParams.fromPartial({})
  };
}
export const QueryMarketMapperRevenueShareParamsResponse = {
  typeUrl: "/h2x.revshare.QueryMarketMapperRevenueShareParamsResponse",
  encode(message: QueryMarketMapperRevenueShareParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      MarketMapperRevenueShareParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketMapperRevenueShareParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketMapperRevenueShareParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = MarketMapperRevenueShareParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketMapperRevenueShareParamsResponse>): QueryMarketMapperRevenueShareParamsResponse {
    const message = createBaseQueryMarketMapperRevenueShareParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? MarketMapperRevenueShareParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryMarketMapperRevenueShareParamsResponseAmino): QueryMarketMapperRevenueShareParamsResponse {
    const message = createBaseQueryMarketMapperRevenueShareParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = MarketMapperRevenueShareParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryMarketMapperRevenueShareParamsResponse): QueryMarketMapperRevenueShareParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? MarketMapperRevenueShareParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketMapperRevenueShareParamsResponseAminoMsg): QueryMarketMapperRevenueShareParamsResponse {
    return QueryMarketMapperRevenueShareParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketMapperRevenueShareParamsResponseProtoMsg): QueryMarketMapperRevenueShareParamsResponse {
    return QueryMarketMapperRevenueShareParamsResponse.decode(message.value);
  },
  toProto(message: QueryMarketMapperRevenueShareParamsResponse): Uint8Array {
    return QueryMarketMapperRevenueShareParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketMapperRevenueShareParamsResponse): QueryMarketMapperRevenueShareParamsResponseProtoMsg {
    return {
      typeUrl: "/h2x.revshare.QueryMarketMapperRevenueShareParamsResponse",
      value: QueryMarketMapperRevenueShareParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketMapperRevShareDetails(): QueryMarketMapperRevShareDetails {
  return {
    marketId: 0
  };
}
export const QueryMarketMapperRevShareDetails = {
  typeUrl: "/h2x.revshare.QueryMarketMapperRevShareDetails",
  encode(message: QueryMarketMapperRevShareDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== 0) {
      writer.uint32(8).uint32(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketMapperRevShareDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketMapperRevShareDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketMapperRevShareDetails>): QueryMarketMapperRevShareDetails {
    const message = createBaseQueryMarketMapperRevShareDetails();
    message.marketId = object.marketId ?? 0;
    return message;
  },
  fromAmino(object: QueryMarketMapperRevShareDetailsAmino): QueryMarketMapperRevShareDetails {
    const message = createBaseQueryMarketMapperRevShareDetails();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryMarketMapperRevShareDetails): QueryMarketMapperRevShareDetailsAmino {
    const obj: any = {};
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryMarketMapperRevShareDetailsAminoMsg): QueryMarketMapperRevShareDetails {
    return QueryMarketMapperRevShareDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketMapperRevShareDetailsProtoMsg): QueryMarketMapperRevShareDetails {
    return QueryMarketMapperRevShareDetails.decode(message.value);
  },
  toProto(message: QueryMarketMapperRevShareDetails): Uint8Array {
    return QueryMarketMapperRevShareDetails.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketMapperRevShareDetails): QueryMarketMapperRevShareDetailsProtoMsg {
    return {
      typeUrl: "/h2x.revshare.QueryMarketMapperRevShareDetails",
      value: QueryMarketMapperRevShareDetails.encode(message).finish()
    };
  }
};
function createBaseQueryMarketMapperRevShareDetailsResponse(): QueryMarketMapperRevShareDetailsResponse {
  return {
    details: MarketMapperRevShareDetails.fromPartial({})
  };
}
export const QueryMarketMapperRevShareDetailsResponse = {
  typeUrl: "/h2x.revshare.QueryMarketMapperRevShareDetailsResponse",
  encode(message: QueryMarketMapperRevShareDetailsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.details !== undefined) {
      MarketMapperRevShareDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketMapperRevShareDetailsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketMapperRevShareDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.details = MarketMapperRevShareDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketMapperRevShareDetailsResponse>): QueryMarketMapperRevShareDetailsResponse {
    const message = createBaseQueryMarketMapperRevShareDetailsResponse();
    message.details = object.details !== undefined && object.details !== null ? MarketMapperRevShareDetails.fromPartial(object.details) : undefined;
    return message;
  },
  fromAmino(object: QueryMarketMapperRevShareDetailsResponseAmino): QueryMarketMapperRevShareDetailsResponse {
    const message = createBaseQueryMarketMapperRevShareDetailsResponse();
    if (object.details !== undefined && object.details !== null) {
      message.details = MarketMapperRevShareDetails.fromAmino(object.details);
    }
    return message;
  },
  toAmino(message: QueryMarketMapperRevShareDetailsResponse): QueryMarketMapperRevShareDetailsResponseAmino {
    const obj: any = {};
    obj.details = message.details ? MarketMapperRevShareDetails.toAmino(message.details) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketMapperRevShareDetailsResponseAminoMsg): QueryMarketMapperRevShareDetailsResponse {
    return QueryMarketMapperRevShareDetailsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketMapperRevShareDetailsResponseProtoMsg): QueryMarketMapperRevShareDetailsResponse {
    return QueryMarketMapperRevShareDetailsResponse.decode(message.value);
  },
  toProto(message: QueryMarketMapperRevShareDetailsResponse): Uint8Array {
    return QueryMarketMapperRevShareDetailsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketMapperRevShareDetailsResponse): QueryMarketMapperRevShareDetailsResponseProtoMsg {
    return {
      typeUrl: "/h2x.revshare.QueryMarketMapperRevShareDetailsResponse",
      value: QueryMarketMapperRevShareDetailsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnconditionalRevShareConfig(): QueryUnconditionalRevShareConfig {
  return {};
}
export const QueryUnconditionalRevShareConfig = {
  typeUrl: "/h2x.revshare.QueryUnconditionalRevShareConfig",
  encode(_: QueryUnconditionalRevShareConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnconditionalRevShareConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnconditionalRevShareConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryUnconditionalRevShareConfig>): QueryUnconditionalRevShareConfig {
    const message = createBaseQueryUnconditionalRevShareConfig();
    return message;
  },
  fromAmino(_: QueryUnconditionalRevShareConfigAmino): QueryUnconditionalRevShareConfig {
    const message = createBaseQueryUnconditionalRevShareConfig();
    return message;
  },
  toAmino(_: QueryUnconditionalRevShareConfig): QueryUnconditionalRevShareConfigAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryUnconditionalRevShareConfigAminoMsg): QueryUnconditionalRevShareConfig {
    return QueryUnconditionalRevShareConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnconditionalRevShareConfigProtoMsg): QueryUnconditionalRevShareConfig {
    return QueryUnconditionalRevShareConfig.decode(message.value);
  },
  toProto(message: QueryUnconditionalRevShareConfig): Uint8Array {
    return QueryUnconditionalRevShareConfig.encode(message).finish();
  },
  toProtoMsg(message: QueryUnconditionalRevShareConfig): QueryUnconditionalRevShareConfigProtoMsg {
    return {
      typeUrl: "/h2x.revshare.QueryUnconditionalRevShareConfig",
      value: QueryUnconditionalRevShareConfig.encode(message).finish()
    };
  }
};
function createBaseQueryUnconditionalRevShareConfigResponse(): QueryUnconditionalRevShareConfigResponse {
  return {
    config: UnconditionalRevShareConfig.fromPartial({})
  };
}
export const QueryUnconditionalRevShareConfigResponse = {
  typeUrl: "/h2x.revshare.QueryUnconditionalRevShareConfigResponse",
  encode(message: QueryUnconditionalRevShareConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== undefined) {
      UnconditionalRevShareConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnconditionalRevShareConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnconditionalRevShareConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = UnconditionalRevShareConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUnconditionalRevShareConfigResponse>): QueryUnconditionalRevShareConfigResponse {
    const message = createBaseQueryUnconditionalRevShareConfigResponse();
    message.config = object.config !== undefined && object.config !== null ? UnconditionalRevShareConfig.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: QueryUnconditionalRevShareConfigResponseAmino): QueryUnconditionalRevShareConfigResponse {
    const message = createBaseQueryUnconditionalRevShareConfigResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = UnconditionalRevShareConfig.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: QueryUnconditionalRevShareConfigResponse): QueryUnconditionalRevShareConfigResponseAmino {
    const obj: any = {};
    obj.config = message.config ? UnconditionalRevShareConfig.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnconditionalRevShareConfigResponseAminoMsg): QueryUnconditionalRevShareConfigResponse {
    return QueryUnconditionalRevShareConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnconditionalRevShareConfigResponseProtoMsg): QueryUnconditionalRevShareConfigResponse {
    return QueryUnconditionalRevShareConfigResponse.decode(message.value);
  },
  toProto(message: QueryUnconditionalRevShareConfigResponse): Uint8Array {
    return QueryUnconditionalRevShareConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnconditionalRevShareConfigResponse): QueryUnconditionalRevShareConfigResponseProtoMsg {
    return {
      typeUrl: "/h2x.revshare.QueryUnconditionalRevShareConfigResponse",
      value: QueryUnconditionalRevShareConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOrderRouterRevShare(): QueryOrderRouterRevShare {
  return {
    address: ""
  };
}
export const QueryOrderRouterRevShare = {
  typeUrl: "/h2x.revshare.QueryOrderRouterRevShare",
  encode(message: QueryOrderRouterRevShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrderRouterRevShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRouterRevShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOrderRouterRevShare>): QueryOrderRouterRevShare {
    const message = createBaseQueryOrderRouterRevShare();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryOrderRouterRevShareAmino): QueryOrderRouterRevShare {
    const message = createBaseQueryOrderRouterRevShare();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryOrderRouterRevShare): QueryOrderRouterRevShareAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryOrderRouterRevShareAminoMsg): QueryOrderRouterRevShare {
    return QueryOrderRouterRevShare.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderRouterRevShareProtoMsg): QueryOrderRouterRevShare {
    return QueryOrderRouterRevShare.decode(message.value);
  },
  toProto(message: QueryOrderRouterRevShare): Uint8Array {
    return QueryOrderRouterRevShare.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderRouterRevShare): QueryOrderRouterRevShareProtoMsg {
    return {
      typeUrl: "/h2x.revshare.QueryOrderRouterRevShare",
      value: QueryOrderRouterRevShare.encode(message).finish()
    };
  }
};
function createBaseQueryOrderRouterRevShareResponse(): QueryOrderRouterRevShareResponse {
  return {
    orderRouterRevShare: OrderRouterRevShare.fromPartial({})
  };
}
export const QueryOrderRouterRevShareResponse = {
  typeUrl: "/h2x.revshare.QueryOrderRouterRevShareResponse",
  encode(message: QueryOrderRouterRevShareResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderRouterRevShare !== undefined) {
      OrderRouterRevShare.encode(message.orderRouterRevShare, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrderRouterRevShareResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRouterRevShareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderRouterRevShare = OrderRouterRevShare.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOrderRouterRevShareResponse>): QueryOrderRouterRevShareResponse {
    const message = createBaseQueryOrderRouterRevShareResponse();
    message.orderRouterRevShare = object.orderRouterRevShare !== undefined && object.orderRouterRevShare !== null ? OrderRouterRevShare.fromPartial(object.orderRouterRevShare) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderRouterRevShareResponseAmino): QueryOrderRouterRevShareResponse {
    const message = createBaseQueryOrderRouterRevShareResponse();
    if (object.order_router_rev_share !== undefined && object.order_router_rev_share !== null) {
      message.orderRouterRevShare = OrderRouterRevShare.fromAmino(object.order_router_rev_share);
    }
    return message;
  },
  toAmino(message: QueryOrderRouterRevShareResponse): QueryOrderRouterRevShareResponseAmino {
    const obj: any = {};
    obj.order_router_rev_share = message.orderRouterRevShare ? OrderRouterRevShare.toAmino(message.orderRouterRevShare) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderRouterRevShareResponseAminoMsg): QueryOrderRouterRevShareResponse {
    return QueryOrderRouterRevShareResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderRouterRevShareResponseProtoMsg): QueryOrderRouterRevShareResponse {
    return QueryOrderRouterRevShareResponse.decode(message.value);
  },
  toProto(message: QueryOrderRouterRevShareResponse): Uint8Array {
    return QueryOrderRouterRevShareResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderRouterRevShareResponse): QueryOrderRouterRevShareResponseProtoMsg {
    return {
      typeUrl: "/h2x.revshare.QueryOrderRouterRevShareResponse",
      value: QueryOrderRouterRevShareResponse.encode(message).finish()
    };
  }
};