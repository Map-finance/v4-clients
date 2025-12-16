//@ts-nocheck
import { AffiliateTiers, AffiliateTiersAmino, AffiliateTiersSDKType, AffiliateWhitelist, AffiliateWhitelistAmino, AffiliateWhitelistSDKType, AffiliateOverrides, AffiliateOverridesAmino, AffiliateOverridesSDKType, AffiliateParameters, AffiliateParametersAmino, AffiliateParametersSDKType } from "./affiliates";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * AffiliateInfoRequest is the request type for the Query/AffiliateInfo RPC
 * method.
 */
export interface AffiliateInfoRequest {
  address: string;
}
export interface AffiliateInfoRequestProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateInfoRequest";
  value: Uint8Array;
}
/**
 * AffiliateInfoRequest is the request type for the Query/AffiliateInfo RPC
 * method.
 * @name AffiliateInfoRequestAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateInfoRequest
 */
export interface AffiliateInfoRequestAmino {
  address?: string;
}
export interface AffiliateInfoRequestAminoMsg {
  type: "/h2x.affiliates.AffiliateInfoRequest";
  value: AffiliateInfoRequestAmino;
}
/**
 * AffiliateInfoRequest is the request type for the Query/AffiliateInfo RPC
 * method.
 */
export interface AffiliateInfoRequestSDKType {
  address: string;
}
/**
 * AffiliateInfoResponse is the response type for the Query/AffiliateInfo RPC
 * method.
 */
export interface AffiliateInfoResponse {
  /** Whether the address is a whitelisted affiliate (VIP). */
  isWhitelisted: boolean;
  /**
   * If `is_whiteslisted == false`, the affiliate's tier qualified through
   * regular affiliate program.
   */
  tier: number;
  /**
   * The affiliate's taker fee share in parts-per-million (for both VIP and
   * regular affiliate).
   */
  feeSharePpm: number;
  /** The affiliate's all-time referred volume in quote quantums. */
  referredVolume: Uint8Array;
  /** The affiliate's currently staked native tokens (in whole coins). */
  stakedAmount: Uint8Array;
}
export interface AffiliateInfoResponseProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateInfoResponse";
  value: Uint8Array;
}
/**
 * AffiliateInfoResponse is the response type for the Query/AffiliateInfo RPC
 * method.
 * @name AffiliateInfoResponseAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateInfoResponse
 */
export interface AffiliateInfoResponseAmino {
  /**
   * Whether the address is a whitelisted affiliate (VIP).
   */
  is_whitelisted?: boolean;
  /**
   * If `is_whiteslisted == false`, the affiliate's tier qualified through
   * regular affiliate program.
   */
  tier?: number;
  /**
   * The affiliate's taker fee share in parts-per-million (for both VIP and
   * regular affiliate).
   */
  fee_share_ppm?: number;
  /**
   * The affiliate's all-time referred volume in quote quantums.
   */
  referred_volume?: string;
  /**
   * The affiliate's currently staked native tokens (in whole coins).
   */
  staked_amount?: string;
}
export interface AffiliateInfoResponseAminoMsg {
  type: "/h2x.affiliates.AffiliateInfoResponse";
  value: AffiliateInfoResponseAmino;
}
/**
 * AffiliateInfoResponse is the response type for the Query/AffiliateInfo RPC
 * method.
 */
export interface AffiliateInfoResponseSDKType {
  is_whitelisted: boolean;
  tier: number;
  fee_share_ppm: number;
  referred_volume: Uint8Array;
  staked_amount: Uint8Array;
}
/** ReferredByRequest is the request type for the Query/ReferredBy RPC method. */
export interface ReferredByRequest {
  /** The address to query. */
  address: string;
}
export interface ReferredByRequestProtoMsg {
  typeUrl: "/h2x.affiliates.ReferredByRequest";
  value: Uint8Array;
}
/**
 * ReferredByRequest is the request type for the Query/ReferredBy RPC method.
 * @name ReferredByRequestAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.ReferredByRequest
 */
export interface ReferredByRequestAmino {
  /**
   * The address to query.
   */
  address?: string;
}
export interface ReferredByRequestAminoMsg {
  type: "/h2x.affiliates.ReferredByRequest";
  value: ReferredByRequestAmino;
}
/** ReferredByRequest is the request type for the Query/ReferredBy RPC method. */
export interface ReferredByRequestSDKType {
  address: string;
}
/** ReferredByResponse is the response type for the Query/ReferredBy RPC method. */
export interface ReferredByResponse {
  /** The affiliate's address that referred the queried address. */
  affiliateAddress: string;
}
export interface ReferredByResponseProtoMsg {
  typeUrl: "/h2x.affiliates.ReferredByResponse";
  value: Uint8Array;
}
/**
 * ReferredByResponse is the response type for the Query/ReferredBy RPC method.
 * @name ReferredByResponseAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.ReferredByResponse
 */
export interface ReferredByResponseAmino {
  /**
   * The affiliate's address that referred the queried address.
   */
  affiliate_address?: string;
}
export interface ReferredByResponseAminoMsg {
  type: "/h2x.affiliates.ReferredByResponse";
  value: ReferredByResponseAmino;
}
/** ReferredByResponse is the response type for the Query/ReferredBy RPC method. */
export interface ReferredByResponseSDKType {
  affiliate_address: string;
}
/**
 * AllAffiliateTiersRequest is the request type for the Query/AllAffiliateTiers
 * RPC method.
 */
export interface AllAffiliateTiersRequest {}
export interface AllAffiliateTiersRequestProtoMsg {
  typeUrl: "/h2x.affiliates.AllAffiliateTiersRequest";
  value: Uint8Array;
}
/**
 * AllAffiliateTiersRequest is the request type for the Query/AllAffiliateTiers
 * RPC method.
 * @name AllAffiliateTiersRequestAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AllAffiliateTiersRequest
 */
export interface AllAffiliateTiersRequestAmino {}
export interface AllAffiliateTiersRequestAminoMsg {
  type: "/h2x.affiliates.AllAffiliateTiersRequest";
  value: AllAffiliateTiersRequestAmino;
}
/**
 * AllAffiliateTiersRequest is the request type for the Query/AllAffiliateTiers
 * RPC method.
 */
export interface AllAffiliateTiersRequestSDKType {}
/**
 * AllAffiliateTiersResponse is the response type for the
 * Query/AllAffiliateTiers RPC method.
 */
export interface AllAffiliateTiersResponse {
  /** All affiliate tiers information. */
  tiers: AffiliateTiers;
}
export interface AllAffiliateTiersResponseProtoMsg {
  typeUrl: "/h2x.affiliates.AllAffiliateTiersResponse";
  value: Uint8Array;
}
/**
 * AllAffiliateTiersResponse is the response type for the
 * Query/AllAffiliateTiers RPC method.
 * @name AllAffiliateTiersResponseAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AllAffiliateTiersResponse
 */
export interface AllAffiliateTiersResponseAmino {
  /**
   * All affiliate tiers information.
   */
  tiers?: AffiliateTiersAmino;
}
export interface AllAffiliateTiersResponseAminoMsg {
  type: "/h2x.affiliates.AllAffiliateTiersResponse";
  value: AllAffiliateTiersResponseAmino;
}
/**
 * AllAffiliateTiersResponse is the response type for the
 * Query/AllAffiliateTiers RPC method.
 */
export interface AllAffiliateTiersResponseSDKType {
  tiers: AffiliateTiersSDKType;
}
/**
 * AffiliateWhitelistRequest is the request type for the
 * Query/AffiliateWhitelist RPC method.
 */
export interface AffiliateWhitelistRequest {}
export interface AffiliateWhitelistRequestProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateWhitelistRequest";
  value: Uint8Array;
}
/**
 * AffiliateWhitelistRequest is the request type for the
 * Query/AffiliateWhitelist RPC method.
 * @name AffiliateWhitelistRequestAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateWhitelistRequest
 */
export interface AffiliateWhitelistRequestAmino {}
export interface AffiliateWhitelistRequestAminoMsg {
  type: "/h2x.affiliates.AffiliateWhitelistRequest";
  value: AffiliateWhitelistRequestAmino;
}
/**
 * AffiliateWhitelistRequest is the request type for the
 * Query/AffiliateWhitelist RPC method.
 */
export interface AffiliateWhitelistRequestSDKType {}
/**
 * AffiliateWhitelistResponse is the response type for the
 * Query/AffiliateWhitelist RPC method.
 */
export interface AffiliateWhitelistResponse {
  whitelist: AffiliateWhitelist;
}
export interface AffiliateWhitelistResponseProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateWhitelistResponse";
  value: Uint8Array;
}
/**
 * AffiliateWhitelistResponse is the response type for the
 * Query/AffiliateWhitelist RPC method.
 * @name AffiliateWhitelistResponseAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateWhitelistResponse
 */
export interface AffiliateWhitelistResponseAmino {
  whitelist?: AffiliateWhitelistAmino;
}
export interface AffiliateWhitelistResponseAminoMsg {
  type: "/h2x.affiliates.AffiliateWhitelistResponse";
  value: AffiliateWhitelistResponseAmino;
}
/**
 * AffiliateWhitelistResponse is the response type for the
 * Query/AffiliateWhitelist RPC method.
 */
export interface AffiliateWhitelistResponseSDKType {
  whitelist: AffiliateWhitelistSDKType;
}
/**
 * AffiliateOverridesRequest is the request type for the
 * Query/AffiliateOverrides RPC method.
 */
export interface AffiliateOverridesRequest {}
export interface AffiliateOverridesRequestProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateOverridesRequest";
  value: Uint8Array;
}
/**
 * AffiliateOverridesRequest is the request type for the
 * Query/AffiliateOverrides RPC method.
 * @name AffiliateOverridesRequestAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateOverridesRequest
 */
export interface AffiliateOverridesRequestAmino {}
export interface AffiliateOverridesRequestAminoMsg {
  type: "/h2x.affiliates.AffiliateOverridesRequest";
  value: AffiliateOverridesRequestAmino;
}
/**
 * AffiliateOverridesRequest is the request type for the
 * Query/AffiliateOverrides RPC method.
 */
export interface AffiliateOverridesRequestSDKType {}
/**
 * AffiliateOverridesResponse is the response type for the
 * Query/AffiliateOverrides RPC method.
 */
export interface AffiliateOverridesResponse {
  overrides: AffiliateOverrides;
}
export interface AffiliateOverridesResponseProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateOverridesResponse";
  value: Uint8Array;
}
/**
 * AffiliateOverridesResponse is the response type for the
 * Query/AffiliateOverrides RPC method.
 * @name AffiliateOverridesResponseAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateOverridesResponse
 */
export interface AffiliateOverridesResponseAmino {
  overrides?: AffiliateOverridesAmino;
}
export interface AffiliateOverridesResponseAminoMsg {
  type: "/h2x.affiliates.AffiliateOverridesResponse";
  value: AffiliateOverridesResponseAmino;
}
/**
 * AffiliateOverridesResponse is the response type for the
 * Query/AffiliateOverrides RPC method.
 */
export interface AffiliateOverridesResponseSDKType {
  overrides: AffiliateOverridesSDKType;
}
/**
 * AffiliateParametersRequest is the request type for the
 * Query/AffiliateParameters RPC method.
 */
export interface AffiliateParametersRequest {}
export interface AffiliateParametersRequestProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateParametersRequest";
  value: Uint8Array;
}
/**
 * AffiliateParametersRequest is the request type for the
 * Query/AffiliateParameters RPC method.
 * @name AffiliateParametersRequestAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateParametersRequest
 */
export interface AffiliateParametersRequestAmino {}
export interface AffiliateParametersRequestAminoMsg {
  type: "/h2x.affiliates.AffiliateParametersRequest";
  value: AffiliateParametersRequestAmino;
}
/**
 * AffiliateParametersRequest is the request type for the
 * Query/AffiliateParameters RPC method.
 */
export interface AffiliateParametersRequestSDKType {}
/**
 * AffiliateParametersResponse is the response type for the
 * Query/AffiliateParameters RPC method.
 */
export interface AffiliateParametersResponse {
  parameters: AffiliateParameters;
}
export interface AffiliateParametersResponseProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateParametersResponse";
  value: Uint8Array;
}
/**
 * AffiliateParametersResponse is the response type for the
 * Query/AffiliateParameters RPC method.
 * @name AffiliateParametersResponseAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateParametersResponse
 */
export interface AffiliateParametersResponseAmino {
  parameters?: AffiliateParametersAmino;
}
export interface AffiliateParametersResponseAminoMsg {
  type: "/h2x.affiliates.AffiliateParametersResponse";
  value: AffiliateParametersResponseAmino;
}
/**
 * AffiliateParametersResponse is the response type for the
 * Query/AffiliateParameters RPC method.
 */
export interface AffiliateParametersResponseSDKType {
  parameters: AffiliateParametersSDKType;
}
function createBaseAffiliateInfoRequest(): AffiliateInfoRequest {
  return {
    address: ""
  };
}
export const AffiliateInfoRequest = {
  typeUrl: "/h2x.affiliates.AffiliateInfoRequest",
  encode(message: AffiliateInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateInfoRequest();
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
  fromPartial(object: Partial<AffiliateInfoRequest>): AffiliateInfoRequest {
    const message = createBaseAffiliateInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: AffiliateInfoRequestAmino): AffiliateInfoRequest {
    const message = createBaseAffiliateInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: AffiliateInfoRequest): AffiliateInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: AffiliateInfoRequestAminoMsg): AffiliateInfoRequest {
    return AffiliateInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateInfoRequestProtoMsg): AffiliateInfoRequest {
    return AffiliateInfoRequest.decode(message.value);
  },
  toProto(message: AffiliateInfoRequest): Uint8Array {
    return AffiliateInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: AffiliateInfoRequest): AffiliateInfoRequestProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateInfoRequest",
      value: AffiliateInfoRequest.encode(message).finish()
    };
  }
};
function createBaseAffiliateInfoResponse(): AffiliateInfoResponse {
  return {
    isWhitelisted: false,
    tier: 0,
    feeSharePpm: 0,
    referredVolume: new Uint8Array(),
    stakedAmount: new Uint8Array()
  };
}
export const AffiliateInfoResponse = {
  typeUrl: "/h2x.affiliates.AffiliateInfoResponse",
  encode(message: AffiliateInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isWhitelisted === true) {
      writer.uint32(8).bool(message.isWhitelisted);
    }
    if (message.tier !== 0) {
      writer.uint32(16).uint32(message.tier);
    }
    if (message.feeSharePpm !== 0) {
      writer.uint32(24).uint32(message.feeSharePpm);
    }
    if (message.referredVolume.length !== 0) {
      writer.uint32(34).bytes(message.referredVolume);
    }
    if (message.stakedAmount.length !== 0) {
      writer.uint32(42).bytes(message.stakedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isWhitelisted = reader.bool();
          break;
        case 2:
          message.tier = reader.uint32();
          break;
        case 3:
          message.feeSharePpm = reader.uint32();
          break;
        case 4:
          message.referredVolume = reader.bytes();
          break;
        case 5:
          message.stakedAmount = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AffiliateInfoResponse>): AffiliateInfoResponse {
    const message = createBaseAffiliateInfoResponse();
    message.isWhitelisted = object.isWhitelisted ?? false;
    message.tier = object.tier ?? 0;
    message.feeSharePpm = object.feeSharePpm ?? 0;
    message.referredVolume = object.referredVolume ?? new Uint8Array();
    message.stakedAmount = object.stakedAmount ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AffiliateInfoResponseAmino): AffiliateInfoResponse {
    const message = createBaseAffiliateInfoResponse();
    if (object.is_whitelisted !== undefined && object.is_whitelisted !== null) {
      message.isWhitelisted = object.is_whitelisted;
    }
    if (object.tier !== undefined && object.tier !== null) {
      message.tier = object.tier;
    }
    if (object.fee_share_ppm !== undefined && object.fee_share_ppm !== null) {
      message.feeSharePpm = object.fee_share_ppm;
    }
    if (object.referred_volume !== undefined && object.referred_volume !== null) {
      message.referredVolume = bytesFromBase64(object.referred_volume);
    }
    if (object.staked_amount !== undefined && object.staked_amount !== null) {
      message.stakedAmount = bytesFromBase64(object.staked_amount);
    }
    return message;
  },
  toAmino(message: AffiliateInfoResponse): AffiliateInfoResponseAmino {
    const obj: any = {};
    obj.is_whitelisted = message.isWhitelisted === false ? undefined : message.isWhitelisted;
    obj.tier = message.tier === 0 ? undefined : message.tier;
    obj.fee_share_ppm = message.feeSharePpm === 0 ? undefined : message.feeSharePpm;
    obj.referred_volume = message.referredVolume ? base64FromBytes(message.referredVolume) : undefined;
    obj.staked_amount = message.stakedAmount ? base64FromBytes(message.stakedAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: AffiliateInfoResponseAminoMsg): AffiliateInfoResponse {
    return AffiliateInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateInfoResponseProtoMsg): AffiliateInfoResponse {
    return AffiliateInfoResponse.decode(message.value);
  },
  toProto(message: AffiliateInfoResponse): Uint8Array {
    return AffiliateInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: AffiliateInfoResponse): AffiliateInfoResponseProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateInfoResponse",
      value: AffiliateInfoResponse.encode(message).finish()
    };
  }
};
function createBaseReferredByRequest(): ReferredByRequest {
  return {
    address: ""
  };
}
export const ReferredByRequest = {
  typeUrl: "/h2x.affiliates.ReferredByRequest",
  encode(message: ReferredByRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReferredByRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReferredByRequest();
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
  fromPartial(object: Partial<ReferredByRequest>): ReferredByRequest {
    const message = createBaseReferredByRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: ReferredByRequestAmino): ReferredByRequest {
    const message = createBaseReferredByRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: ReferredByRequest): ReferredByRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: ReferredByRequestAminoMsg): ReferredByRequest {
    return ReferredByRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ReferredByRequestProtoMsg): ReferredByRequest {
    return ReferredByRequest.decode(message.value);
  },
  toProto(message: ReferredByRequest): Uint8Array {
    return ReferredByRequest.encode(message).finish();
  },
  toProtoMsg(message: ReferredByRequest): ReferredByRequestProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.ReferredByRequest",
      value: ReferredByRequest.encode(message).finish()
    };
  }
};
function createBaseReferredByResponse(): ReferredByResponse {
  return {
    affiliateAddress: ""
  };
}
export const ReferredByResponse = {
  typeUrl: "/h2x.affiliates.ReferredByResponse",
  encode(message: ReferredByResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.affiliateAddress !== "") {
      writer.uint32(10).string(message.affiliateAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReferredByResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReferredByResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.affiliateAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ReferredByResponse>): ReferredByResponse {
    const message = createBaseReferredByResponse();
    message.affiliateAddress = object.affiliateAddress ?? "";
    return message;
  },
  fromAmino(object: ReferredByResponseAmino): ReferredByResponse {
    const message = createBaseReferredByResponse();
    if (object.affiliate_address !== undefined && object.affiliate_address !== null) {
      message.affiliateAddress = object.affiliate_address;
    }
    return message;
  },
  toAmino(message: ReferredByResponse): ReferredByResponseAmino {
    const obj: any = {};
    obj.affiliate_address = message.affiliateAddress === "" ? undefined : message.affiliateAddress;
    return obj;
  },
  fromAminoMsg(object: ReferredByResponseAminoMsg): ReferredByResponse {
    return ReferredByResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ReferredByResponseProtoMsg): ReferredByResponse {
    return ReferredByResponse.decode(message.value);
  },
  toProto(message: ReferredByResponse): Uint8Array {
    return ReferredByResponse.encode(message).finish();
  },
  toProtoMsg(message: ReferredByResponse): ReferredByResponseProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.ReferredByResponse",
      value: ReferredByResponse.encode(message).finish()
    };
  }
};
function createBaseAllAffiliateTiersRequest(): AllAffiliateTiersRequest {
  return {};
}
export const AllAffiliateTiersRequest = {
  typeUrl: "/h2x.affiliates.AllAffiliateTiersRequest",
  encode(_: AllAffiliateTiersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllAffiliateTiersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAffiliateTiersRequest();
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
  fromPartial(_: Partial<AllAffiliateTiersRequest>): AllAffiliateTiersRequest {
    const message = createBaseAllAffiliateTiersRequest();
    return message;
  },
  fromAmino(_: AllAffiliateTiersRequestAmino): AllAffiliateTiersRequest {
    const message = createBaseAllAffiliateTiersRequest();
    return message;
  },
  toAmino(_: AllAffiliateTiersRequest): AllAffiliateTiersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AllAffiliateTiersRequestAminoMsg): AllAffiliateTiersRequest {
    return AllAffiliateTiersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AllAffiliateTiersRequestProtoMsg): AllAffiliateTiersRequest {
    return AllAffiliateTiersRequest.decode(message.value);
  },
  toProto(message: AllAffiliateTiersRequest): Uint8Array {
    return AllAffiliateTiersRequest.encode(message).finish();
  },
  toProtoMsg(message: AllAffiliateTiersRequest): AllAffiliateTiersRequestProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AllAffiliateTiersRequest",
      value: AllAffiliateTiersRequest.encode(message).finish()
    };
  }
};
function createBaseAllAffiliateTiersResponse(): AllAffiliateTiersResponse {
  return {
    tiers: AffiliateTiers.fromPartial({})
  };
}
export const AllAffiliateTiersResponse = {
  typeUrl: "/h2x.affiliates.AllAffiliateTiersResponse",
  encode(message: AllAffiliateTiersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tiers !== undefined) {
      AffiliateTiers.encode(message.tiers, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllAffiliateTiersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAffiliateTiersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tiers = AffiliateTiers.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AllAffiliateTiersResponse>): AllAffiliateTiersResponse {
    const message = createBaseAllAffiliateTiersResponse();
    message.tiers = object.tiers !== undefined && object.tiers !== null ? AffiliateTiers.fromPartial(object.tiers) : undefined;
    return message;
  },
  fromAmino(object: AllAffiliateTiersResponseAmino): AllAffiliateTiersResponse {
    const message = createBaseAllAffiliateTiersResponse();
    if (object.tiers !== undefined && object.tiers !== null) {
      message.tiers = AffiliateTiers.fromAmino(object.tiers);
    }
    return message;
  },
  toAmino(message: AllAffiliateTiersResponse): AllAffiliateTiersResponseAmino {
    const obj: any = {};
    obj.tiers = message.tiers ? AffiliateTiers.toAmino(message.tiers) : undefined;
    return obj;
  },
  fromAminoMsg(object: AllAffiliateTiersResponseAminoMsg): AllAffiliateTiersResponse {
    return AllAffiliateTiersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AllAffiliateTiersResponseProtoMsg): AllAffiliateTiersResponse {
    return AllAffiliateTiersResponse.decode(message.value);
  },
  toProto(message: AllAffiliateTiersResponse): Uint8Array {
    return AllAffiliateTiersResponse.encode(message).finish();
  },
  toProtoMsg(message: AllAffiliateTiersResponse): AllAffiliateTiersResponseProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AllAffiliateTiersResponse",
      value: AllAffiliateTiersResponse.encode(message).finish()
    };
  }
};
function createBaseAffiliateWhitelistRequest(): AffiliateWhitelistRequest {
  return {};
}
export const AffiliateWhitelistRequest = {
  typeUrl: "/h2x.affiliates.AffiliateWhitelistRequest",
  encode(_: AffiliateWhitelistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateWhitelistRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateWhitelistRequest();
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
  fromPartial(_: Partial<AffiliateWhitelistRequest>): AffiliateWhitelistRequest {
    const message = createBaseAffiliateWhitelistRequest();
    return message;
  },
  fromAmino(_: AffiliateWhitelistRequestAmino): AffiliateWhitelistRequest {
    const message = createBaseAffiliateWhitelistRequest();
    return message;
  },
  toAmino(_: AffiliateWhitelistRequest): AffiliateWhitelistRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AffiliateWhitelistRequestAminoMsg): AffiliateWhitelistRequest {
    return AffiliateWhitelistRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateWhitelistRequestProtoMsg): AffiliateWhitelistRequest {
    return AffiliateWhitelistRequest.decode(message.value);
  },
  toProto(message: AffiliateWhitelistRequest): Uint8Array {
    return AffiliateWhitelistRequest.encode(message).finish();
  },
  toProtoMsg(message: AffiliateWhitelistRequest): AffiliateWhitelistRequestProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateWhitelistRequest",
      value: AffiliateWhitelistRequest.encode(message).finish()
    };
  }
};
function createBaseAffiliateWhitelistResponse(): AffiliateWhitelistResponse {
  return {
    whitelist: AffiliateWhitelist.fromPartial({})
  };
}
export const AffiliateWhitelistResponse = {
  typeUrl: "/h2x.affiliates.AffiliateWhitelistResponse",
  encode(message: AffiliateWhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.whitelist !== undefined) {
      AffiliateWhitelist.encode(message.whitelist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateWhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelist = AffiliateWhitelist.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AffiliateWhitelistResponse>): AffiliateWhitelistResponse {
    const message = createBaseAffiliateWhitelistResponse();
    message.whitelist = object.whitelist !== undefined && object.whitelist !== null ? AffiliateWhitelist.fromPartial(object.whitelist) : undefined;
    return message;
  },
  fromAmino(object: AffiliateWhitelistResponseAmino): AffiliateWhitelistResponse {
    const message = createBaseAffiliateWhitelistResponse();
    if (object.whitelist !== undefined && object.whitelist !== null) {
      message.whitelist = AffiliateWhitelist.fromAmino(object.whitelist);
    }
    return message;
  },
  toAmino(message: AffiliateWhitelistResponse): AffiliateWhitelistResponseAmino {
    const obj: any = {};
    obj.whitelist = message.whitelist ? AffiliateWhitelist.toAmino(message.whitelist) : undefined;
    return obj;
  },
  fromAminoMsg(object: AffiliateWhitelistResponseAminoMsg): AffiliateWhitelistResponse {
    return AffiliateWhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateWhitelistResponseProtoMsg): AffiliateWhitelistResponse {
    return AffiliateWhitelistResponse.decode(message.value);
  },
  toProto(message: AffiliateWhitelistResponse): Uint8Array {
    return AffiliateWhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: AffiliateWhitelistResponse): AffiliateWhitelistResponseProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateWhitelistResponse",
      value: AffiliateWhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseAffiliateOverridesRequest(): AffiliateOverridesRequest {
  return {};
}
export const AffiliateOverridesRequest = {
  typeUrl: "/h2x.affiliates.AffiliateOverridesRequest",
  encode(_: AffiliateOverridesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateOverridesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateOverridesRequest();
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
  fromPartial(_: Partial<AffiliateOverridesRequest>): AffiliateOverridesRequest {
    const message = createBaseAffiliateOverridesRequest();
    return message;
  },
  fromAmino(_: AffiliateOverridesRequestAmino): AffiliateOverridesRequest {
    const message = createBaseAffiliateOverridesRequest();
    return message;
  },
  toAmino(_: AffiliateOverridesRequest): AffiliateOverridesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AffiliateOverridesRequestAminoMsg): AffiliateOverridesRequest {
    return AffiliateOverridesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateOverridesRequestProtoMsg): AffiliateOverridesRequest {
    return AffiliateOverridesRequest.decode(message.value);
  },
  toProto(message: AffiliateOverridesRequest): Uint8Array {
    return AffiliateOverridesRequest.encode(message).finish();
  },
  toProtoMsg(message: AffiliateOverridesRequest): AffiliateOverridesRequestProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateOverridesRequest",
      value: AffiliateOverridesRequest.encode(message).finish()
    };
  }
};
function createBaseAffiliateOverridesResponse(): AffiliateOverridesResponse {
  return {
    overrides: AffiliateOverrides.fromPartial({})
  };
}
export const AffiliateOverridesResponse = {
  typeUrl: "/h2x.affiliates.AffiliateOverridesResponse",
  encode(message: AffiliateOverridesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.overrides !== undefined) {
      AffiliateOverrides.encode(message.overrides, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateOverridesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateOverridesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overrides = AffiliateOverrides.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AffiliateOverridesResponse>): AffiliateOverridesResponse {
    const message = createBaseAffiliateOverridesResponse();
    message.overrides = object.overrides !== undefined && object.overrides !== null ? AffiliateOverrides.fromPartial(object.overrides) : undefined;
    return message;
  },
  fromAmino(object: AffiliateOverridesResponseAmino): AffiliateOverridesResponse {
    const message = createBaseAffiliateOverridesResponse();
    if (object.overrides !== undefined && object.overrides !== null) {
      message.overrides = AffiliateOverrides.fromAmino(object.overrides);
    }
    return message;
  },
  toAmino(message: AffiliateOverridesResponse): AffiliateOverridesResponseAmino {
    const obj: any = {};
    obj.overrides = message.overrides ? AffiliateOverrides.toAmino(message.overrides) : undefined;
    return obj;
  },
  fromAminoMsg(object: AffiliateOverridesResponseAminoMsg): AffiliateOverridesResponse {
    return AffiliateOverridesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateOverridesResponseProtoMsg): AffiliateOverridesResponse {
    return AffiliateOverridesResponse.decode(message.value);
  },
  toProto(message: AffiliateOverridesResponse): Uint8Array {
    return AffiliateOverridesResponse.encode(message).finish();
  },
  toProtoMsg(message: AffiliateOverridesResponse): AffiliateOverridesResponseProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateOverridesResponse",
      value: AffiliateOverridesResponse.encode(message).finish()
    };
  }
};
function createBaseAffiliateParametersRequest(): AffiliateParametersRequest {
  return {};
}
export const AffiliateParametersRequest = {
  typeUrl: "/h2x.affiliates.AffiliateParametersRequest",
  encode(_: AffiliateParametersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateParametersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateParametersRequest();
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
  fromPartial(_: Partial<AffiliateParametersRequest>): AffiliateParametersRequest {
    const message = createBaseAffiliateParametersRequest();
    return message;
  },
  fromAmino(_: AffiliateParametersRequestAmino): AffiliateParametersRequest {
    const message = createBaseAffiliateParametersRequest();
    return message;
  },
  toAmino(_: AffiliateParametersRequest): AffiliateParametersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AffiliateParametersRequestAminoMsg): AffiliateParametersRequest {
    return AffiliateParametersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateParametersRequestProtoMsg): AffiliateParametersRequest {
    return AffiliateParametersRequest.decode(message.value);
  },
  toProto(message: AffiliateParametersRequest): Uint8Array {
    return AffiliateParametersRequest.encode(message).finish();
  },
  toProtoMsg(message: AffiliateParametersRequest): AffiliateParametersRequestProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateParametersRequest",
      value: AffiliateParametersRequest.encode(message).finish()
    };
  }
};
function createBaseAffiliateParametersResponse(): AffiliateParametersResponse {
  return {
    parameters: AffiliateParameters.fromPartial({})
  };
}
export const AffiliateParametersResponse = {
  typeUrl: "/h2x.affiliates.AffiliateParametersResponse",
  encode(message: AffiliateParametersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parameters !== undefined) {
      AffiliateParameters.encode(message.parameters, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateParametersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateParametersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parameters = AffiliateParameters.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AffiliateParametersResponse>): AffiliateParametersResponse {
    const message = createBaseAffiliateParametersResponse();
    message.parameters = object.parameters !== undefined && object.parameters !== null ? AffiliateParameters.fromPartial(object.parameters) : undefined;
    return message;
  },
  fromAmino(object: AffiliateParametersResponseAmino): AffiliateParametersResponse {
    const message = createBaseAffiliateParametersResponse();
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = AffiliateParameters.fromAmino(object.parameters);
    }
    return message;
  },
  toAmino(message: AffiliateParametersResponse): AffiliateParametersResponseAmino {
    const obj: any = {};
    obj.parameters = message.parameters ? AffiliateParameters.toAmino(message.parameters) : undefined;
    return obj;
  },
  fromAminoMsg(object: AffiliateParametersResponseAminoMsg): AffiliateParametersResponse {
    return AffiliateParametersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateParametersResponseProtoMsg): AffiliateParametersResponse {
    return AffiliateParametersResponse.decode(message.value);
  },
  toProto(message: AffiliateParametersResponse): Uint8Array {
    return AffiliateParametersResponse.encode(message).finish();
  },
  toProtoMsg(message: AffiliateParametersResponse): AffiliateParametersResponseProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateParametersResponse",
      value: AffiliateParametersResponse.encode(message).finish()
    };
  }
};