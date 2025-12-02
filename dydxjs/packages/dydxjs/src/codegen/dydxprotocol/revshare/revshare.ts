//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * MarketMapperRevShareDetails specifies any details associated with the market
 * mapper revenue share
 */
export interface MarketMapperRevShareDetails {
  /** Unix timestamp recorded when the market revenue share expires */
  expirationTs: bigint;
}
export interface MarketMapperRevShareDetailsProtoMsg {
  typeUrl: "/dydxprotocol.revshare.MarketMapperRevShareDetails";
  value: Uint8Array;
}
/**
 * MarketMapperRevShareDetails specifies any details associated with the market
 * mapper revenue share
 * @name MarketMapperRevShareDetailsAmino
 * @package dydxprotocol.revshare
 * @see proto type: dydxprotocol.revshare.MarketMapperRevShareDetails
 */
export interface MarketMapperRevShareDetailsAmino {
  /**
   * Unix timestamp recorded when the market revenue share expires
   */
  expiration_ts?: string;
}
export interface MarketMapperRevShareDetailsAminoMsg {
  type: "/dydxprotocol.revshare.MarketMapperRevShareDetails";
  value: MarketMapperRevShareDetailsAmino;
}
/**
 * MarketMapperRevShareDetails specifies any details associated with the market
 * mapper revenue share
 */
export interface MarketMapperRevShareDetailsSDKType {
  expiration_ts: bigint;
}
/**
 * UnconditionalRevShareConfig stores recipients that
 * receive a share of net revenue unconditionally.
 */
export interface UnconditionalRevShareConfig {
  /** Configs for each recipient. */
  configs: UnconditionalRevShareConfig_RecipientConfig[];
}
export interface UnconditionalRevShareConfigProtoMsg {
  typeUrl: "/dydxprotocol.revshare.UnconditionalRevShareConfig";
  value: Uint8Array;
}
/**
 * UnconditionalRevShareConfig stores recipients that
 * receive a share of net revenue unconditionally.
 * @name UnconditionalRevShareConfigAmino
 * @package dydxprotocol.revshare
 * @see proto type: dydxprotocol.revshare.UnconditionalRevShareConfig
 */
export interface UnconditionalRevShareConfigAmino {
  /**
   * Configs for each recipient.
   */
  configs?: UnconditionalRevShareConfig_RecipientConfigAmino[];
}
export interface UnconditionalRevShareConfigAminoMsg {
  type: "/dydxprotocol.revshare.UnconditionalRevShareConfig";
  value: UnconditionalRevShareConfigAmino;
}
/**
 * UnconditionalRevShareConfig stores recipients that
 * receive a share of net revenue unconditionally.
 */
export interface UnconditionalRevShareConfigSDKType {
  configs: UnconditionalRevShareConfig_RecipientConfigSDKType[];
}
/** Describes the config of a recipient */
export interface UnconditionalRevShareConfig_RecipientConfig {
  /** Address of the recepient. */
  address: string;
  /** Percentage of net revenue to share with recipient, in parts-per-million. */
  sharePpm: number;
}
export interface UnconditionalRevShareConfig_RecipientConfigProtoMsg {
  typeUrl: "/dydxprotocol.revshare.RecipientConfig";
  value: Uint8Array;
}
/**
 * Describes the config of a recipient
 * @name UnconditionalRevShareConfig_RecipientConfigAmino
 * @package dydxprotocol.revshare
 * @see proto type: dydxprotocol.revshare.UnconditionalRevShareConfig_RecipientConfig
 */
export interface UnconditionalRevShareConfig_RecipientConfigAmino {
  /**
   * Address of the recepient.
   */
  address?: string;
  /**
   * Percentage of net revenue to share with recipient, in parts-per-million.
   */
  share_ppm?: number;
}
export interface UnconditionalRevShareConfig_RecipientConfigAminoMsg {
  type: "/dydxprotocol.revshare.RecipientConfig";
  value: UnconditionalRevShareConfig_RecipientConfigAmino;
}
/** Describes the config of a recipient */
export interface UnconditionalRevShareConfig_RecipientConfigSDKType {
  address: string;
  share_ppm: number;
}
/** Message to set the order router revenue share */
export interface OrderRouterRevShare {
  /** The address of the order router. */
  address: string;
  /** The share of the revenue to be paid to the order router. */
  sharePpm: number;
}
export interface OrderRouterRevShareProtoMsg {
  typeUrl: "/dydxprotocol.revshare.OrderRouterRevShare";
  value: Uint8Array;
}
/**
 * Message to set the order router revenue share
 * @name OrderRouterRevShareAmino
 * @package dydxprotocol.revshare
 * @see proto type: dydxprotocol.revshare.OrderRouterRevShare
 */
export interface OrderRouterRevShareAmino {
  /**
   * The address of the order router.
   */
  address?: string;
  /**
   * The share of the revenue to be paid to the order router.
   */
  share_ppm?: number;
}
export interface OrderRouterRevShareAminoMsg {
  type: "/dydxprotocol.revshare.OrderRouterRevShare";
  value: OrderRouterRevShareAmino;
}
/** Message to set the order router revenue share */
export interface OrderRouterRevShareSDKType {
  address: string;
  share_ppm: number;
}
function createBaseMarketMapperRevShareDetails(): MarketMapperRevShareDetails {
  return {
    expirationTs: BigInt(0)
  };
}
export const MarketMapperRevShareDetails = {
  typeUrl: "/dydxprotocol.revshare.MarketMapperRevShareDetails",
  encode(message: MarketMapperRevShareDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expirationTs !== BigInt(0)) {
      writer.uint32(8).uint64(message.expirationTs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketMapperRevShareDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketMapperRevShareDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expirationTs = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MarketMapperRevShareDetails>): MarketMapperRevShareDetails {
    const message = createBaseMarketMapperRevShareDetails();
    message.expirationTs = object.expirationTs !== undefined && object.expirationTs !== null ? BigInt(object.expirationTs.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MarketMapperRevShareDetailsAmino): MarketMapperRevShareDetails {
    const message = createBaseMarketMapperRevShareDetails();
    if (object.expiration_ts !== undefined && object.expiration_ts !== null) {
      message.expirationTs = BigInt(object.expiration_ts);
    }
    return message;
  },
  toAmino(message: MarketMapperRevShareDetails): MarketMapperRevShareDetailsAmino {
    const obj: any = {};
    obj.expiration_ts = message.expirationTs !== BigInt(0) ? message.expirationTs?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MarketMapperRevShareDetailsAminoMsg): MarketMapperRevShareDetails {
    return MarketMapperRevShareDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketMapperRevShareDetailsProtoMsg): MarketMapperRevShareDetails {
    return MarketMapperRevShareDetails.decode(message.value);
  },
  toProto(message: MarketMapperRevShareDetails): Uint8Array {
    return MarketMapperRevShareDetails.encode(message).finish();
  },
  toProtoMsg(message: MarketMapperRevShareDetails): MarketMapperRevShareDetailsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.revshare.MarketMapperRevShareDetails",
      value: MarketMapperRevShareDetails.encode(message).finish()
    };
  }
};
function createBaseUnconditionalRevShareConfig(): UnconditionalRevShareConfig {
  return {
    configs: []
  };
}
export const UnconditionalRevShareConfig = {
  typeUrl: "/dydxprotocol.revshare.UnconditionalRevShareConfig",
  encode(message: UnconditionalRevShareConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.configs) {
      UnconditionalRevShareConfig_RecipientConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnconditionalRevShareConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnconditionalRevShareConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configs.push(UnconditionalRevShareConfig_RecipientConfig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnconditionalRevShareConfig>): UnconditionalRevShareConfig {
    const message = createBaseUnconditionalRevShareConfig();
    message.configs = object.configs?.map(e => UnconditionalRevShareConfig_RecipientConfig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UnconditionalRevShareConfigAmino): UnconditionalRevShareConfig {
    const message = createBaseUnconditionalRevShareConfig();
    message.configs = object.configs?.map(e => UnconditionalRevShareConfig_RecipientConfig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UnconditionalRevShareConfig): UnconditionalRevShareConfigAmino {
    const obj: any = {};
    if (message.configs) {
      obj.configs = message.configs.map(e => e ? UnconditionalRevShareConfig_RecipientConfig.toAmino(e) : undefined);
    } else {
      obj.configs = message.configs;
    }
    return obj;
  },
  fromAminoMsg(object: UnconditionalRevShareConfigAminoMsg): UnconditionalRevShareConfig {
    return UnconditionalRevShareConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: UnconditionalRevShareConfigProtoMsg): UnconditionalRevShareConfig {
    return UnconditionalRevShareConfig.decode(message.value);
  },
  toProto(message: UnconditionalRevShareConfig): Uint8Array {
    return UnconditionalRevShareConfig.encode(message).finish();
  },
  toProtoMsg(message: UnconditionalRevShareConfig): UnconditionalRevShareConfigProtoMsg {
    return {
      typeUrl: "/dydxprotocol.revshare.UnconditionalRevShareConfig",
      value: UnconditionalRevShareConfig.encode(message).finish()
    };
  }
};
function createBaseUnconditionalRevShareConfig_RecipientConfig(): UnconditionalRevShareConfig_RecipientConfig {
  return {
    address: "",
    sharePpm: 0
  };
}
export const UnconditionalRevShareConfig_RecipientConfig = {
  typeUrl: "/dydxprotocol.revshare.RecipientConfig",
  encode(message: UnconditionalRevShareConfig_RecipientConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.sharePpm !== 0) {
      writer.uint32(16).uint32(message.sharePpm);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnconditionalRevShareConfig_RecipientConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnconditionalRevShareConfig_RecipientConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.sharePpm = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnconditionalRevShareConfig_RecipientConfig>): UnconditionalRevShareConfig_RecipientConfig {
    const message = createBaseUnconditionalRevShareConfig_RecipientConfig();
    message.address = object.address ?? "";
    message.sharePpm = object.sharePpm ?? 0;
    return message;
  },
  fromAmino(object: UnconditionalRevShareConfig_RecipientConfigAmino): UnconditionalRevShareConfig_RecipientConfig {
    const message = createBaseUnconditionalRevShareConfig_RecipientConfig();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.share_ppm !== undefined && object.share_ppm !== null) {
      message.sharePpm = object.share_ppm;
    }
    return message;
  },
  toAmino(message: UnconditionalRevShareConfig_RecipientConfig): UnconditionalRevShareConfig_RecipientConfigAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.share_ppm = message.sharePpm === 0 ? undefined : message.sharePpm;
    return obj;
  },
  fromAminoMsg(object: UnconditionalRevShareConfig_RecipientConfigAminoMsg): UnconditionalRevShareConfig_RecipientConfig {
    return UnconditionalRevShareConfig_RecipientConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: UnconditionalRevShareConfig_RecipientConfigProtoMsg): UnconditionalRevShareConfig_RecipientConfig {
    return UnconditionalRevShareConfig_RecipientConfig.decode(message.value);
  },
  toProto(message: UnconditionalRevShareConfig_RecipientConfig): Uint8Array {
    return UnconditionalRevShareConfig_RecipientConfig.encode(message).finish();
  },
  toProtoMsg(message: UnconditionalRevShareConfig_RecipientConfig): UnconditionalRevShareConfig_RecipientConfigProtoMsg {
    return {
      typeUrl: "/dydxprotocol.revshare.RecipientConfig",
      value: UnconditionalRevShareConfig_RecipientConfig.encode(message).finish()
    };
  }
};
function createBaseOrderRouterRevShare(): OrderRouterRevShare {
  return {
    address: "",
    sharePpm: 0
  };
}
export const OrderRouterRevShare = {
  typeUrl: "/dydxprotocol.revshare.OrderRouterRevShare",
  encode(message: OrderRouterRevShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.sharePpm !== 0) {
      writer.uint32(16).uint32(message.sharePpm);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderRouterRevShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderRouterRevShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.sharePpm = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OrderRouterRevShare>): OrderRouterRevShare {
    const message = createBaseOrderRouterRevShare();
    message.address = object.address ?? "";
    message.sharePpm = object.sharePpm ?? 0;
    return message;
  },
  fromAmino(object: OrderRouterRevShareAmino): OrderRouterRevShare {
    const message = createBaseOrderRouterRevShare();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.share_ppm !== undefined && object.share_ppm !== null) {
      message.sharePpm = object.share_ppm;
    }
    return message;
  },
  toAmino(message: OrderRouterRevShare): OrderRouterRevShareAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.share_ppm = message.sharePpm === 0 ? undefined : message.sharePpm;
    return obj;
  },
  fromAminoMsg(object: OrderRouterRevShareAminoMsg): OrderRouterRevShare {
    return OrderRouterRevShare.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderRouterRevShareProtoMsg): OrderRouterRevShare {
    return OrderRouterRevShare.decode(message.value);
  },
  toProto(message: OrderRouterRevShare): Uint8Array {
    return OrderRouterRevShare.encode(message).finish();
  },
  toProtoMsg(message: OrderRouterRevShare): OrderRouterRevShareProtoMsg {
    return {
      typeUrl: "/dydxprotocol.revshare.OrderRouterRevShare",
      value: OrderRouterRevShare.encode(message).finish()
    };
  }
};