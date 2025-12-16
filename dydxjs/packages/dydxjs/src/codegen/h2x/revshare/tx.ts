//@ts-nocheck
import { MarketMapperRevenueShareParams, MarketMapperRevenueShareParamsAmino, MarketMapperRevenueShareParamsSDKType } from "./params";
import { MarketMapperRevShareDetails, MarketMapperRevShareDetailsAmino, MarketMapperRevShareDetailsSDKType, UnconditionalRevShareConfig, UnconditionalRevShareConfigAmino, UnconditionalRevShareConfigSDKType, OrderRouterRevShare, OrderRouterRevShareAmino, OrderRouterRevShareSDKType } from "./revshare";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Message to set the market mapper revenue share */
export interface MsgSetMarketMapperRevenueShare {
  authority: string;
  /** Parameters for the revenue share */
  params: MarketMapperRevenueShareParams;
}
export interface MsgSetMarketMapperRevenueShareProtoMsg {
  typeUrl: "/h2x.revshare.MsgSetMarketMapperRevenueShare";
  value: Uint8Array;
}
/**
 * Message to set the market mapper revenue share
 * @name MsgSetMarketMapperRevenueShareAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.MsgSetMarketMapperRevenueShare
 */
export interface MsgSetMarketMapperRevenueShareAmino {
  authority?: string;
  /**
   * Parameters for the revenue share
   */
  params?: MarketMapperRevenueShareParamsAmino;
}
export interface MsgSetMarketMapperRevenueShareAminoMsg {
  type: "/h2x.revshare.MsgSetMarketMapperRevenueShare";
  value: MsgSetMarketMapperRevenueShareAmino;
}
/** Message to set the market mapper revenue share */
export interface MsgSetMarketMapperRevenueShareSDKType {
  authority: string;
  params: MarketMapperRevenueShareParamsSDKType;
}
/** Response to a MsgSetMarketMapperRevenueShare */
export interface MsgSetMarketMapperRevenueShareResponse {}
export interface MsgSetMarketMapperRevenueShareResponseProtoMsg {
  typeUrl: "/h2x.revshare.MsgSetMarketMapperRevenueShareResponse";
  value: Uint8Array;
}
/**
 * Response to a MsgSetMarketMapperRevenueShare
 * @name MsgSetMarketMapperRevenueShareResponseAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.MsgSetMarketMapperRevenueShareResponse
 */
export interface MsgSetMarketMapperRevenueShareResponseAmino {}
export interface MsgSetMarketMapperRevenueShareResponseAminoMsg {
  type: "/h2x.revshare.MsgSetMarketMapperRevenueShareResponse";
  value: MsgSetMarketMapperRevenueShareResponseAmino;
}
/** Response to a MsgSetMarketMapperRevenueShare */
export interface MsgSetMarketMapperRevenueShareResponseSDKType {}
/**
 * Msg to set market mapper revenue share details (e.g. expiration timestamp)
 * for a specific market. To be used as an override for existing revenue share
 * settings set by the MsgSetMarketMapperRevenueShare msg
 */
export interface MsgSetMarketMapperRevShareDetailsForMarket {
  authority: string;
  /** The market ID for which to set the revenue share details */
  marketId: number;
  /** Parameters for the revenue share details */
  params: MarketMapperRevShareDetails;
}
export interface MsgSetMarketMapperRevShareDetailsForMarketProtoMsg {
  typeUrl: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket";
  value: Uint8Array;
}
/**
 * Msg to set market mapper revenue share details (e.g. expiration timestamp)
 * for a specific market. To be used as an override for existing revenue share
 * settings set by the MsgSetMarketMapperRevenueShare msg
 * @name MsgSetMarketMapperRevShareDetailsForMarketAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket
 */
export interface MsgSetMarketMapperRevShareDetailsForMarketAmino {
  authority?: string;
  /**
   * The market ID for which to set the revenue share details
   */
  market_id?: number;
  /**
   * Parameters for the revenue share details
   */
  params?: MarketMapperRevShareDetailsAmino;
}
export interface MsgSetMarketMapperRevShareDetailsForMarketAminoMsg {
  type: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket";
  value: MsgSetMarketMapperRevShareDetailsForMarketAmino;
}
/**
 * Msg to set market mapper revenue share details (e.g. expiration timestamp)
 * for a specific market. To be used as an override for existing revenue share
 * settings set by the MsgSetMarketMapperRevenueShare msg
 */
export interface MsgSetMarketMapperRevShareDetailsForMarketSDKType {
  authority: string;
  market_id: number;
  params: MarketMapperRevShareDetailsSDKType;
}
/** Response to a MsgSetMarketMapperRevShareDetailsForMarket */
export interface MsgSetMarketMapperRevShareDetailsForMarketResponse {}
export interface MsgSetMarketMapperRevShareDetailsForMarketResponseProtoMsg {
  typeUrl: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarketResponse";
  value: Uint8Array;
}
/**
 * Response to a MsgSetMarketMapperRevShareDetailsForMarket
 * @name MsgSetMarketMapperRevShareDetailsForMarketResponseAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarketResponse
 */
export interface MsgSetMarketMapperRevShareDetailsForMarketResponseAmino {}
export interface MsgSetMarketMapperRevShareDetailsForMarketResponseAminoMsg {
  type: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarketResponse";
  value: MsgSetMarketMapperRevShareDetailsForMarketResponseAmino;
}
/** Response to a MsgSetMarketMapperRevShareDetailsForMarket */
export interface MsgSetMarketMapperRevShareDetailsForMarketResponseSDKType {}
/** Message to update the unconditional revenue share config. */
export interface MsgUpdateUnconditionalRevShareConfig {
  authority: string;
  /** The config to update. */
  config: UnconditionalRevShareConfig;
}
export interface MsgUpdateUnconditionalRevShareConfigProtoMsg {
  typeUrl: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfig";
  value: Uint8Array;
}
/**
 * Message to update the unconditional revenue share config.
 * @name MsgUpdateUnconditionalRevShareConfigAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.MsgUpdateUnconditionalRevShareConfig
 */
export interface MsgUpdateUnconditionalRevShareConfigAmino {
  authority?: string;
  /**
   * The config to update.
   */
  config?: UnconditionalRevShareConfigAmino;
}
export interface MsgUpdateUnconditionalRevShareConfigAminoMsg {
  type: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfig";
  value: MsgUpdateUnconditionalRevShareConfigAmino;
}
/** Message to update the unconditional revenue share config. */
export interface MsgUpdateUnconditionalRevShareConfigSDKType {
  authority: string;
  config: UnconditionalRevShareConfigSDKType;
}
/** Response to MsgUpdateUnconditionalRevShareConfig */
export interface MsgUpdateUnconditionalRevShareConfigResponse {}
export interface MsgUpdateUnconditionalRevShareConfigResponseProtoMsg {
  typeUrl: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfigResponse";
  value: Uint8Array;
}
/**
 * Response to MsgUpdateUnconditionalRevShareConfig
 * @name MsgUpdateUnconditionalRevShareConfigResponseAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.MsgUpdateUnconditionalRevShareConfigResponse
 */
export interface MsgUpdateUnconditionalRevShareConfigResponseAmino {}
export interface MsgUpdateUnconditionalRevShareConfigResponseAminoMsg {
  type: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfigResponse";
  value: MsgUpdateUnconditionalRevShareConfigResponseAmino;
}
/** Response to MsgUpdateUnconditionalRevShareConfig */
export interface MsgUpdateUnconditionalRevShareConfigResponseSDKType {}
/** Governance message to create or update the order router revenue share */
export interface MsgSetOrderRouterRevShare {
  authority: string;
  /** The order router rev share to create or update. */
  orderRouterRevShare: OrderRouterRevShare;
}
export interface MsgSetOrderRouterRevShareProtoMsg {
  typeUrl: "/h2x.revshare.MsgSetOrderRouterRevShare";
  value: Uint8Array;
}
/**
 * Governance message to create or update the order router revenue share
 * @name MsgSetOrderRouterRevShareAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.MsgSetOrderRouterRevShare
 */
export interface MsgSetOrderRouterRevShareAmino {
  authority?: string;
  /**
   * The order router rev share to create or update.
   */
  order_router_rev_share?: OrderRouterRevShareAmino;
}
export interface MsgSetOrderRouterRevShareAminoMsg {
  type: "/h2x.revshare.MsgSetOrderRouterRevShare";
  value: MsgSetOrderRouterRevShareAmino;
}
/** Governance message to create or update the order router revenue share */
export interface MsgSetOrderRouterRevShareSDKType {
  authority: string;
  order_router_rev_share: OrderRouterRevShareSDKType;
}
/** Response to MsgSetOrderRouterRevShare */
export interface MsgSetOrderRouterRevShareResponse {}
export interface MsgSetOrderRouterRevShareResponseProtoMsg {
  typeUrl: "/h2x.revshare.MsgSetOrderRouterRevShareResponse";
  value: Uint8Array;
}
/**
 * Response to MsgSetOrderRouterRevShare
 * @name MsgSetOrderRouterRevShareResponseAmino
 * @package h2x.revshare
 * @see proto type: h2x.revshare.MsgSetOrderRouterRevShareResponse
 */
export interface MsgSetOrderRouterRevShareResponseAmino {}
export interface MsgSetOrderRouterRevShareResponseAminoMsg {
  type: "/h2x.revshare.MsgSetOrderRouterRevShareResponse";
  value: MsgSetOrderRouterRevShareResponseAmino;
}
/** Response to MsgSetOrderRouterRevShare */
export interface MsgSetOrderRouterRevShareResponseSDKType {}
function createBaseMsgSetMarketMapperRevenueShare(): MsgSetMarketMapperRevenueShare {
  return {
    authority: "",
    params: MarketMapperRevenueShareParams.fromPartial({})
  };
}
export const MsgSetMarketMapperRevenueShare = {
  typeUrl: "/h2x.revshare.MsgSetMarketMapperRevenueShare",
  encode(message: MsgSetMarketMapperRevenueShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      MarketMapperRevenueShareParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMarketMapperRevenueShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMarketMapperRevenueShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = MarketMapperRevenueShareParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMarketMapperRevenueShare>): MsgSetMarketMapperRevenueShare {
    const message = createBaseMsgSetMarketMapperRevenueShare();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? MarketMapperRevenueShareParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgSetMarketMapperRevenueShareAmino): MsgSetMarketMapperRevenueShare {
    const message = createBaseMsgSetMarketMapperRevenueShare();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = MarketMapperRevenueShareParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgSetMarketMapperRevenueShare): MsgSetMarketMapperRevenueShareAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? MarketMapperRevenueShareParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetMarketMapperRevenueShareAminoMsg): MsgSetMarketMapperRevenueShare {
    return MsgSetMarketMapperRevenueShare.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMarketMapperRevenueShareProtoMsg): MsgSetMarketMapperRevenueShare {
    return MsgSetMarketMapperRevenueShare.decode(message.value);
  },
  toProto(message: MsgSetMarketMapperRevenueShare): Uint8Array {
    return MsgSetMarketMapperRevenueShare.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMarketMapperRevenueShare): MsgSetMarketMapperRevenueShareProtoMsg {
    return {
      typeUrl: "/h2x.revshare.MsgSetMarketMapperRevenueShare",
      value: MsgSetMarketMapperRevenueShare.encode(message).finish()
    };
  }
};
function createBaseMsgSetMarketMapperRevenueShareResponse(): MsgSetMarketMapperRevenueShareResponse {
  return {};
}
export const MsgSetMarketMapperRevenueShareResponse = {
  typeUrl: "/h2x.revshare.MsgSetMarketMapperRevenueShareResponse",
  encode(_: MsgSetMarketMapperRevenueShareResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMarketMapperRevenueShareResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMarketMapperRevenueShareResponse();
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
  fromPartial(_: Partial<MsgSetMarketMapperRevenueShareResponse>): MsgSetMarketMapperRevenueShareResponse {
    const message = createBaseMsgSetMarketMapperRevenueShareResponse();
    return message;
  },
  fromAmino(_: MsgSetMarketMapperRevenueShareResponseAmino): MsgSetMarketMapperRevenueShareResponse {
    const message = createBaseMsgSetMarketMapperRevenueShareResponse();
    return message;
  },
  toAmino(_: MsgSetMarketMapperRevenueShareResponse): MsgSetMarketMapperRevenueShareResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMarketMapperRevenueShareResponseAminoMsg): MsgSetMarketMapperRevenueShareResponse {
    return MsgSetMarketMapperRevenueShareResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMarketMapperRevenueShareResponseProtoMsg): MsgSetMarketMapperRevenueShareResponse {
    return MsgSetMarketMapperRevenueShareResponse.decode(message.value);
  },
  toProto(message: MsgSetMarketMapperRevenueShareResponse): Uint8Array {
    return MsgSetMarketMapperRevenueShareResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMarketMapperRevenueShareResponse): MsgSetMarketMapperRevenueShareResponseProtoMsg {
    return {
      typeUrl: "/h2x.revshare.MsgSetMarketMapperRevenueShareResponse",
      value: MsgSetMarketMapperRevenueShareResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMarketMapperRevShareDetailsForMarket(): MsgSetMarketMapperRevShareDetailsForMarket {
  return {
    authority: "",
    marketId: 0,
    params: MarketMapperRevShareDetails.fromPartial({})
  };
}
export const MsgSetMarketMapperRevShareDetailsForMarket = {
  typeUrl: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
  encode(message: MsgSetMarketMapperRevShareDetailsForMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.marketId !== 0) {
      writer.uint32(16).uint32(message.marketId);
    }
    if (message.params !== undefined) {
      MarketMapperRevShareDetails.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMarketMapperRevShareDetailsForMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMarketMapperRevShareDetailsForMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.marketId = reader.uint32();
          break;
        case 3:
          message.params = MarketMapperRevShareDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMarketMapperRevShareDetailsForMarket>): MsgSetMarketMapperRevShareDetailsForMarket {
    const message = createBaseMsgSetMarketMapperRevShareDetailsForMarket();
    message.authority = object.authority ?? "";
    message.marketId = object.marketId ?? 0;
    message.params = object.params !== undefined && object.params !== null ? MarketMapperRevShareDetails.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgSetMarketMapperRevShareDetailsForMarketAmino): MsgSetMarketMapperRevShareDetailsForMarket {
    const message = createBaseMsgSetMarketMapperRevShareDetailsForMarket();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = MarketMapperRevShareDetails.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgSetMarketMapperRevShareDetailsForMarket): MsgSetMarketMapperRevShareDetailsForMarketAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    obj.params = message.params ? MarketMapperRevShareDetails.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetMarketMapperRevShareDetailsForMarketAminoMsg): MsgSetMarketMapperRevShareDetailsForMarket {
    return MsgSetMarketMapperRevShareDetailsForMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMarketMapperRevShareDetailsForMarketProtoMsg): MsgSetMarketMapperRevShareDetailsForMarket {
    return MsgSetMarketMapperRevShareDetailsForMarket.decode(message.value);
  },
  toProto(message: MsgSetMarketMapperRevShareDetailsForMarket): Uint8Array {
    return MsgSetMarketMapperRevShareDetailsForMarket.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMarketMapperRevShareDetailsForMarket): MsgSetMarketMapperRevShareDetailsForMarketProtoMsg {
    return {
      typeUrl: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarket",
      value: MsgSetMarketMapperRevShareDetailsForMarket.encode(message).finish()
    };
  }
};
function createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse(): MsgSetMarketMapperRevShareDetailsForMarketResponse {
  return {};
}
export const MsgSetMarketMapperRevShareDetailsForMarketResponse = {
  typeUrl: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarketResponse",
  encode(_: MsgSetMarketMapperRevShareDetailsForMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMarketMapperRevShareDetailsForMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse();
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
  fromPartial(_: Partial<MsgSetMarketMapperRevShareDetailsForMarketResponse>): MsgSetMarketMapperRevShareDetailsForMarketResponse {
    const message = createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse();
    return message;
  },
  fromAmino(_: MsgSetMarketMapperRevShareDetailsForMarketResponseAmino): MsgSetMarketMapperRevShareDetailsForMarketResponse {
    const message = createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse();
    return message;
  },
  toAmino(_: MsgSetMarketMapperRevShareDetailsForMarketResponse): MsgSetMarketMapperRevShareDetailsForMarketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMarketMapperRevShareDetailsForMarketResponseAminoMsg): MsgSetMarketMapperRevShareDetailsForMarketResponse {
    return MsgSetMarketMapperRevShareDetailsForMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMarketMapperRevShareDetailsForMarketResponseProtoMsg): MsgSetMarketMapperRevShareDetailsForMarketResponse {
    return MsgSetMarketMapperRevShareDetailsForMarketResponse.decode(message.value);
  },
  toProto(message: MsgSetMarketMapperRevShareDetailsForMarketResponse): Uint8Array {
    return MsgSetMarketMapperRevShareDetailsForMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMarketMapperRevShareDetailsForMarketResponse): MsgSetMarketMapperRevShareDetailsForMarketResponseProtoMsg {
    return {
      typeUrl: "/h2x.revshare.MsgSetMarketMapperRevShareDetailsForMarketResponse",
      value: MsgSetMarketMapperRevShareDetailsForMarketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUnconditionalRevShareConfig(): MsgUpdateUnconditionalRevShareConfig {
  return {
    authority: "",
    config: UnconditionalRevShareConfig.fromPartial({})
  };
}
export const MsgUpdateUnconditionalRevShareConfig = {
  typeUrl: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfig",
  encode(message: MsgUpdateUnconditionalRevShareConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.config !== undefined) {
      UnconditionalRevShareConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateUnconditionalRevShareConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUnconditionalRevShareConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.config = UnconditionalRevShareConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateUnconditionalRevShareConfig>): MsgUpdateUnconditionalRevShareConfig {
    const message = createBaseMsgUpdateUnconditionalRevShareConfig();
    message.authority = object.authority ?? "";
    message.config = object.config !== undefined && object.config !== null ? UnconditionalRevShareConfig.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateUnconditionalRevShareConfigAmino): MsgUpdateUnconditionalRevShareConfig {
    const message = createBaseMsgUpdateUnconditionalRevShareConfig();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = UnconditionalRevShareConfig.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: MsgUpdateUnconditionalRevShareConfig): MsgUpdateUnconditionalRevShareConfigAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.config = message.config ? UnconditionalRevShareConfig.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUnconditionalRevShareConfigAminoMsg): MsgUpdateUnconditionalRevShareConfig {
    return MsgUpdateUnconditionalRevShareConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUnconditionalRevShareConfigProtoMsg): MsgUpdateUnconditionalRevShareConfig {
    return MsgUpdateUnconditionalRevShareConfig.decode(message.value);
  },
  toProto(message: MsgUpdateUnconditionalRevShareConfig): Uint8Array {
    return MsgUpdateUnconditionalRevShareConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUnconditionalRevShareConfig): MsgUpdateUnconditionalRevShareConfigProtoMsg {
    return {
      typeUrl: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfig",
      value: MsgUpdateUnconditionalRevShareConfig.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUnconditionalRevShareConfigResponse(): MsgUpdateUnconditionalRevShareConfigResponse {
  return {};
}
export const MsgUpdateUnconditionalRevShareConfigResponse = {
  typeUrl: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfigResponse",
  encode(_: MsgUpdateUnconditionalRevShareConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateUnconditionalRevShareConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUnconditionalRevShareConfigResponse();
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
  fromPartial(_: Partial<MsgUpdateUnconditionalRevShareConfigResponse>): MsgUpdateUnconditionalRevShareConfigResponse {
    const message = createBaseMsgUpdateUnconditionalRevShareConfigResponse();
    return message;
  },
  fromAmino(_: MsgUpdateUnconditionalRevShareConfigResponseAmino): MsgUpdateUnconditionalRevShareConfigResponse {
    const message = createBaseMsgUpdateUnconditionalRevShareConfigResponse();
    return message;
  },
  toAmino(_: MsgUpdateUnconditionalRevShareConfigResponse): MsgUpdateUnconditionalRevShareConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUnconditionalRevShareConfigResponseAminoMsg): MsgUpdateUnconditionalRevShareConfigResponse {
    return MsgUpdateUnconditionalRevShareConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUnconditionalRevShareConfigResponseProtoMsg): MsgUpdateUnconditionalRevShareConfigResponse {
    return MsgUpdateUnconditionalRevShareConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateUnconditionalRevShareConfigResponse): Uint8Array {
    return MsgUpdateUnconditionalRevShareConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUnconditionalRevShareConfigResponse): MsgUpdateUnconditionalRevShareConfigResponseProtoMsg {
    return {
      typeUrl: "/h2x.revshare.MsgUpdateUnconditionalRevShareConfigResponse",
      value: MsgUpdateUnconditionalRevShareConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetOrderRouterRevShare(): MsgSetOrderRouterRevShare {
  return {
    authority: "",
    orderRouterRevShare: OrderRouterRevShare.fromPartial({})
  };
}
export const MsgSetOrderRouterRevShare = {
  typeUrl: "/h2x.revshare.MsgSetOrderRouterRevShare",
  encode(message: MsgSetOrderRouterRevShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.orderRouterRevShare !== undefined) {
      OrderRouterRevShare.encode(message.orderRouterRevShare, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOrderRouterRevShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrderRouterRevShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.orderRouterRevShare = OrderRouterRevShare.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOrderRouterRevShare>): MsgSetOrderRouterRevShare {
    const message = createBaseMsgSetOrderRouterRevShare();
    message.authority = object.authority ?? "";
    message.orderRouterRevShare = object.orderRouterRevShare !== undefined && object.orderRouterRevShare !== null ? OrderRouterRevShare.fromPartial(object.orderRouterRevShare) : undefined;
    return message;
  },
  fromAmino(object: MsgSetOrderRouterRevShareAmino): MsgSetOrderRouterRevShare {
    const message = createBaseMsgSetOrderRouterRevShare();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.order_router_rev_share !== undefined && object.order_router_rev_share !== null) {
      message.orderRouterRevShare = OrderRouterRevShare.fromAmino(object.order_router_rev_share);
    }
    return message;
  },
  toAmino(message: MsgSetOrderRouterRevShare): MsgSetOrderRouterRevShareAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.order_router_rev_share = message.orderRouterRevShare ? OrderRouterRevShare.toAmino(message.orderRouterRevShare) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetOrderRouterRevShareAminoMsg): MsgSetOrderRouterRevShare {
    return MsgSetOrderRouterRevShare.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOrderRouterRevShareProtoMsg): MsgSetOrderRouterRevShare {
    return MsgSetOrderRouterRevShare.decode(message.value);
  },
  toProto(message: MsgSetOrderRouterRevShare): Uint8Array {
    return MsgSetOrderRouterRevShare.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrderRouterRevShare): MsgSetOrderRouterRevShareProtoMsg {
    return {
      typeUrl: "/h2x.revshare.MsgSetOrderRouterRevShare",
      value: MsgSetOrderRouterRevShare.encode(message).finish()
    };
  }
};
function createBaseMsgSetOrderRouterRevShareResponse(): MsgSetOrderRouterRevShareResponse {
  return {};
}
export const MsgSetOrderRouterRevShareResponse = {
  typeUrl: "/h2x.revshare.MsgSetOrderRouterRevShareResponse",
  encode(_: MsgSetOrderRouterRevShareResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOrderRouterRevShareResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrderRouterRevShareResponse();
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
  fromPartial(_: Partial<MsgSetOrderRouterRevShareResponse>): MsgSetOrderRouterRevShareResponse {
    const message = createBaseMsgSetOrderRouterRevShareResponse();
    return message;
  },
  fromAmino(_: MsgSetOrderRouterRevShareResponseAmino): MsgSetOrderRouterRevShareResponse {
    const message = createBaseMsgSetOrderRouterRevShareResponse();
    return message;
  },
  toAmino(_: MsgSetOrderRouterRevShareResponse): MsgSetOrderRouterRevShareResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetOrderRouterRevShareResponseAminoMsg): MsgSetOrderRouterRevShareResponse {
    return MsgSetOrderRouterRevShareResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOrderRouterRevShareResponseProtoMsg): MsgSetOrderRouterRevShareResponse {
    return MsgSetOrderRouterRevShareResponse.decode(message.value);
  },
  toProto(message: MsgSetOrderRouterRevShareResponse): Uint8Array {
    return MsgSetOrderRouterRevShareResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrderRouterRevShareResponse): MsgSetOrderRouterRevShareResponseProtoMsg {
    return {
      typeUrl: "/h2x.revshare.MsgSetOrderRouterRevShareResponse",
      value: MsgSetOrderRouterRevShareResponse.encode(message).finish()
    };
  }
};