//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** AffiliateTiers defines the affiliate tiers. */
export interface AffiliateTiers {
  /** All affiliate tiers */
  tiers: AffiliateTiers_Tier[];
}
export interface AffiliateTiersProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateTiers";
  value: Uint8Array;
}
/**
 * AffiliateTiers defines the affiliate tiers.
 * @name AffiliateTiersAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateTiers
 */
export interface AffiliateTiersAmino {
  /**
   * All affiliate tiers
   */
  tiers?: AffiliateTiers_TierAmino[];
}
export interface AffiliateTiersAminoMsg {
  type: "/h2x.affiliates.AffiliateTiers";
  value: AffiliateTiersAmino;
}
/** AffiliateTiers defines the affiliate tiers. */
export interface AffiliateTiersSDKType {
  tiers: AffiliateTiers_TierSDKType[];
}
/** Tier defines an affiliate tier. */
export interface AffiliateTiers_Tier {
  /** Required all-time referred volume in quote quantums. */
  reqReferredVolumeQuoteQuantums: bigint;
  /** Required currently staked native tokens (in whole coins). */
  reqStakedWholeCoins: number;
  /** Taker fee share in parts-per-million. */
  takerFeeSharePpm: number;
}
export interface AffiliateTiers_TierProtoMsg {
  typeUrl: "/h2x.affiliates.Tier";
  value: Uint8Array;
}
/**
 * Tier defines an affiliate tier.
 * @name AffiliateTiers_TierAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateTiers_Tier
 */
export interface AffiliateTiers_TierAmino {
  /**
   * Required all-time referred volume in quote quantums.
   */
  req_referred_volume_quote_quantums?: string;
  /**
   * Required currently staked native tokens (in whole coins).
   */
  req_staked_whole_coins?: number;
  /**
   * Taker fee share in parts-per-million.
   */
  taker_fee_share_ppm?: number;
}
export interface AffiliateTiers_TierAminoMsg {
  type: "/h2x.affiliates.Tier";
  value: AffiliateTiers_TierAmino;
}
/** Tier defines an affiliate tier. */
export interface AffiliateTiers_TierSDKType {
  req_referred_volume_quote_quantums: bigint;
  req_staked_whole_coins: number;
  taker_fee_share_ppm: number;
}
/**
 * AffiliateWhitelist specifies the whitelisted affiliates.
 * If an address is in the whitelist, then the affiliate fee share in
 * this object will override fee share from the regular affiliate tiers above.
 */
export interface AffiliateWhitelist {
  /** All affiliate whitelist tiers. */
  tiers: AffiliateWhitelist_Tier[];
}
export interface AffiliateWhitelistProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateWhitelist";
  value: Uint8Array;
}
/**
 * AffiliateWhitelist specifies the whitelisted affiliates.
 * If an address is in the whitelist, then the affiliate fee share in
 * this object will override fee share from the regular affiliate tiers above.
 * @name AffiliateWhitelistAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateWhitelist
 */
export interface AffiliateWhitelistAmino {
  /**
   * All affiliate whitelist tiers.
   */
  tiers?: AffiliateWhitelist_TierAmino[];
}
export interface AffiliateWhitelistAminoMsg {
  type: "/h2x.affiliates.AffiliateWhitelist";
  value: AffiliateWhitelistAmino;
}
/**
 * AffiliateWhitelist specifies the whitelisted affiliates.
 * If an address is in the whitelist, then the affiliate fee share in
 * this object will override fee share from the regular affiliate tiers above.
 */
export interface AffiliateWhitelistSDKType {
  tiers: AffiliateWhitelist_TierSDKType[];
}
/** Tier defines an affiliate whitelist tier. */
export interface AffiliateWhitelist_Tier {
  /** List of unique whitelisted addresses. */
  addresses: string[];
  /** Taker fee share in parts-per-million. */
  takerFeeSharePpm: number;
}
export interface AffiliateWhitelist_TierProtoMsg {
  typeUrl: "/h2x.affiliates.Tier";
  value: Uint8Array;
}
/**
 * Tier defines an affiliate whitelist tier.
 * @name AffiliateWhitelist_TierAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateWhitelist_Tier
 */
export interface AffiliateWhitelist_TierAmino {
  /**
   * List of unique whitelisted addresses.
   */
  addresses?: string[];
  /**
   * Taker fee share in parts-per-million.
   */
  taker_fee_share_ppm?: number;
}
export interface AffiliateWhitelist_TierAminoMsg {
  type: "/h2x.affiliates.Tier";
  value: AffiliateWhitelist_TierAmino;
}
/** Tier defines an affiliate whitelist tier. */
export interface AffiliateWhitelist_TierSDKType {
  addresses: string[];
  taker_fee_share_ppm: number;
}
/** AffiliateParameters defines the parameters for the affiliate program. */
export interface AffiliateParameters {
  /**
   * Maximum attributable volume for a referred user in a 30d rolling window in
   * notional
   */
  maximum30dAttributableVolumePerReferredUserNotional: bigint;
  /** Referred user automatically gets set to this fee tier */
  refereeMinimumFeeTierIdx: number;
  /**
   * Maximum attributable revenue for a referred user in a 30d rolling window in
   * quote quantums
   */
  maximum30dAttributableRevenuePerReferredUserQuoteQuantums: bigint;
}
export interface AffiliateParametersProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateParameters";
  value: Uint8Array;
}
/**
 * AffiliateParameters defines the parameters for the affiliate program.
 * @name AffiliateParametersAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateParameters
 */
export interface AffiliateParametersAmino {
  /**
   * Maximum attributable volume for a referred user in a 30d rolling window in
   * notional
   */
  maximum_30d_attributable_volume_per_referred_user_notional?: string;
  /**
   * Referred user automatically gets set to this fee tier
   */
  referee_minimum_fee_tier_idx?: number;
  /**
   * Maximum attributable revenue for a referred user in a 30d rolling window in
   * quote quantums
   */
  maximum_30d_attributable_revenue_per_referred_user_quote_quantums?: string;
}
export interface AffiliateParametersAminoMsg {
  type: "/h2x.affiliates.AffiliateParameters";
  value: AffiliateParametersAmino;
}
/** AffiliateParameters defines the parameters for the affiliate program. */
export interface AffiliateParametersSDKType {
  maximum_30d_attributable_volume_per_referred_user_notional: bigint;
  referee_minimum_fee_tier_idx: number;
  maximum_30d_attributable_revenue_per_referred_user_quote_quantums: bigint;
}
/** AffiliateOverrides defines the affiliate whitelist. */
export interface AffiliateOverrides {
  /**
   * List of unique whitelisted addresses.
   * These are automatically put at the maximum affiliate tier
   */
  addresses: string[];
}
export interface AffiliateOverridesProtoMsg {
  typeUrl: "/h2x.affiliates.AffiliateOverrides";
  value: Uint8Array;
}
/**
 * AffiliateOverrides defines the affiliate whitelist.
 * @name AffiliateOverridesAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.AffiliateOverrides
 */
export interface AffiliateOverridesAmino {
  /**
   * List of unique whitelisted addresses.
   * These are automatically put at the maximum affiliate tier
   */
  addresses?: string[];
}
export interface AffiliateOverridesAminoMsg {
  type: "/h2x.affiliates.AffiliateOverrides";
  value: AffiliateOverridesAmino;
}
/** AffiliateOverrides defines the affiliate whitelist. */
export interface AffiliateOverridesSDKType {
  addresses: string[];
}
function createBaseAffiliateTiers(): AffiliateTiers {
  return {
    tiers: []
  };
}
export const AffiliateTiers = {
  typeUrl: "/h2x.affiliates.AffiliateTiers",
  encode(message: AffiliateTiers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tiers) {
      AffiliateTiers_Tier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateTiers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateTiers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tiers.push(AffiliateTiers_Tier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AffiliateTiers>): AffiliateTiers {
    const message = createBaseAffiliateTiers();
    message.tiers = object.tiers?.map(e => AffiliateTiers_Tier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AffiliateTiersAmino): AffiliateTiers {
    const message = createBaseAffiliateTiers();
    message.tiers = object.tiers?.map(e => AffiliateTiers_Tier.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AffiliateTiers): AffiliateTiersAmino {
    const obj: any = {};
    if (message.tiers) {
      obj.tiers = message.tiers.map(e => e ? AffiliateTiers_Tier.toAmino(e) : undefined);
    } else {
      obj.tiers = message.tiers;
    }
    return obj;
  },
  fromAminoMsg(object: AffiliateTiersAminoMsg): AffiliateTiers {
    return AffiliateTiers.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateTiersProtoMsg): AffiliateTiers {
    return AffiliateTiers.decode(message.value);
  },
  toProto(message: AffiliateTiers): Uint8Array {
    return AffiliateTiers.encode(message).finish();
  },
  toProtoMsg(message: AffiliateTiers): AffiliateTiersProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateTiers",
      value: AffiliateTiers.encode(message).finish()
    };
  }
};
function createBaseAffiliateTiers_Tier(): AffiliateTiers_Tier {
  return {
    reqReferredVolumeQuoteQuantums: BigInt(0),
    reqStakedWholeCoins: 0,
    takerFeeSharePpm: 0
  };
}
export const AffiliateTiers_Tier = {
  typeUrl: "/h2x.affiliates.Tier",
  encode(message: AffiliateTiers_Tier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reqReferredVolumeQuoteQuantums !== BigInt(0)) {
      writer.uint32(8).uint64(message.reqReferredVolumeQuoteQuantums);
    }
    if (message.reqStakedWholeCoins !== 0) {
      writer.uint32(16).uint32(message.reqStakedWholeCoins);
    }
    if (message.takerFeeSharePpm !== 0) {
      writer.uint32(24).uint32(message.takerFeeSharePpm);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateTiers_Tier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateTiers_Tier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reqReferredVolumeQuoteQuantums = reader.uint64();
          break;
        case 2:
          message.reqStakedWholeCoins = reader.uint32();
          break;
        case 3:
          message.takerFeeSharePpm = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AffiliateTiers_Tier>): AffiliateTiers_Tier {
    const message = createBaseAffiliateTiers_Tier();
    message.reqReferredVolumeQuoteQuantums = object.reqReferredVolumeQuoteQuantums !== undefined && object.reqReferredVolumeQuoteQuantums !== null ? BigInt(object.reqReferredVolumeQuoteQuantums.toString()) : BigInt(0);
    message.reqStakedWholeCoins = object.reqStakedWholeCoins ?? 0;
    message.takerFeeSharePpm = object.takerFeeSharePpm ?? 0;
    return message;
  },
  fromAmino(object: AffiliateTiers_TierAmino): AffiliateTiers_Tier {
    const message = createBaseAffiliateTiers_Tier();
    if (object.req_referred_volume_quote_quantums !== undefined && object.req_referred_volume_quote_quantums !== null) {
      message.reqReferredVolumeQuoteQuantums = BigInt(object.req_referred_volume_quote_quantums);
    }
    if (object.req_staked_whole_coins !== undefined && object.req_staked_whole_coins !== null) {
      message.reqStakedWholeCoins = object.req_staked_whole_coins;
    }
    if (object.taker_fee_share_ppm !== undefined && object.taker_fee_share_ppm !== null) {
      message.takerFeeSharePpm = object.taker_fee_share_ppm;
    }
    return message;
  },
  toAmino(message: AffiliateTiers_Tier): AffiliateTiers_TierAmino {
    const obj: any = {};
    obj.req_referred_volume_quote_quantums = message.reqReferredVolumeQuoteQuantums !== BigInt(0) ? message.reqReferredVolumeQuoteQuantums?.toString() : undefined;
    obj.req_staked_whole_coins = message.reqStakedWholeCoins === 0 ? undefined : message.reqStakedWholeCoins;
    obj.taker_fee_share_ppm = message.takerFeeSharePpm === 0 ? undefined : message.takerFeeSharePpm;
    return obj;
  },
  fromAminoMsg(object: AffiliateTiers_TierAminoMsg): AffiliateTiers_Tier {
    return AffiliateTiers_Tier.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateTiers_TierProtoMsg): AffiliateTiers_Tier {
    return AffiliateTiers_Tier.decode(message.value);
  },
  toProto(message: AffiliateTiers_Tier): Uint8Array {
    return AffiliateTiers_Tier.encode(message).finish();
  },
  toProtoMsg(message: AffiliateTiers_Tier): AffiliateTiers_TierProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.Tier",
      value: AffiliateTiers_Tier.encode(message).finish()
    };
  }
};
function createBaseAffiliateWhitelist(): AffiliateWhitelist {
  return {
    tiers: []
  };
}
export const AffiliateWhitelist = {
  typeUrl: "/h2x.affiliates.AffiliateWhitelist",
  encode(message: AffiliateWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tiers) {
      AffiliateWhitelist_Tier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tiers.push(AffiliateWhitelist_Tier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AffiliateWhitelist>): AffiliateWhitelist {
    const message = createBaseAffiliateWhitelist();
    message.tiers = object.tiers?.map(e => AffiliateWhitelist_Tier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AffiliateWhitelistAmino): AffiliateWhitelist {
    const message = createBaseAffiliateWhitelist();
    message.tiers = object.tiers?.map(e => AffiliateWhitelist_Tier.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AffiliateWhitelist): AffiliateWhitelistAmino {
    const obj: any = {};
    if (message.tiers) {
      obj.tiers = message.tiers.map(e => e ? AffiliateWhitelist_Tier.toAmino(e) : undefined);
    } else {
      obj.tiers = message.tiers;
    }
    return obj;
  },
  fromAminoMsg(object: AffiliateWhitelistAminoMsg): AffiliateWhitelist {
    return AffiliateWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateWhitelistProtoMsg): AffiliateWhitelist {
    return AffiliateWhitelist.decode(message.value);
  },
  toProto(message: AffiliateWhitelist): Uint8Array {
    return AffiliateWhitelist.encode(message).finish();
  },
  toProtoMsg(message: AffiliateWhitelist): AffiliateWhitelistProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateWhitelist",
      value: AffiliateWhitelist.encode(message).finish()
    };
  }
};
function createBaseAffiliateWhitelist_Tier(): AffiliateWhitelist_Tier {
  return {
    addresses: [],
    takerFeeSharePpm: 0
  };
}
export const AffiliateWhitelist_Tier = {
  typeUrl: "/h2x.affiliates.Tier",
  encode(message: AffiliateWhitelist_Tier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    if (message.takerFeeSharePpm !== 0) {
      writer.uint32(16).uint32(message.takerFeeSharePpm);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateWhitelist_Tier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateWhitelist_Tier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        case 2:
          message.takerFeeSharePpm = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AffiliateWhitelist_Tier>): AffiliateWhitelist_Tier {
    const message = createBaseAffiliateWhitelist_Tier();
    message.addresses = object.addresses?.map(e => e) || [];
    message.takerFeeSharePpm = object.takerFeeSharePpm ?? 0;
    return message;
  },
  fromAmino(object: AffiliateWhitelist_TierAmino): AffiliateWhitelist_Tier {
    const message = createBaseAffiliateWhitelist_Tier();
    message.addresses = object.addresses?.map(e => e) || [];
    if (object.taker_fee_share_ppm !== undefined && object.taker_fee_share_ppm !== null) {
      message.takerFeeSharePpm = object.taker_fee_share_ppm;
    }
    return message;
  },
  toAmino(message: AffiliateWhitelist_Tier): AffiliateWhitelist_TierAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    obj.taker_fee_share_ppm = message.takerFeeSharePpm === 0 ? undefined : message.takerFeeSharePpm;
    return obj;
  },
  fromAminoMsg(object: AffiliateWhitelist_TierAminoMsg): AffiliateWhitelist_Tier {
    return AffiliateWhitelist_Tier.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateWhitelist_TierProtoMsg): AffiliateWhitelist_Tier {
    return AffiliateWhitelist_Tier.decode(message.value);
  },
  toProto(message: AffiliateWhitelist_Tier): Uint8Array {
    return AffiliateWhitelist_Tier.encode(message).finish();
  },
  toProtoMsg(message: AffiliateWhitelist_Tier): AffiliateWhitelist_TierProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.Tier",
      value: AffiliateWhitelist_Tier.encode(message).finish()
    };
  }
};
function createBaseAffiliateParameters(): AffiliateParameters {
  return {
    maximum30dAttributableVolumePerReferredUserNotional: BigInt(0),
    refereeMinimumFeeTierIdx: 0,
    maximum30dAttributableRevenuePerReferredUserQuoteQuantums: BigInt(0)
  };
}
export const AffiliateParameters = {
  typeUrl: "/h2x.affiliates.AffiliateParameters",
  encode(message: AffiliateParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maximum30dAttributableVolumePerReferredUserNotional !== BigInt(0)) {
      writer.uint32(8).uint64(message.maximum30dAttributableVolumePerReferredUserNotional);
    }
    if (message.refereeMinimumFeeTierIdx !== 0) {
      writer.uint32(16).uint32(message.refereeMinimumFeeTierIdx);
    }
    if (message.maximum30dAttributableRevenuePerReferredUserQuoteQuantums !== BigInt(0)) {
      writer.uint32(24).uint64(message.maximum30dAttributableRevenuePerReferredUserQuoteQuantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maximum30dAttributableVolumePerReferredUserNotional = reader.uint64();
          break;
        case 2:
          message.refereeMinimumFeeTierIdx = reader.uint32();
          break;
        case 3:
          message.maximum30dAttributableRevenuePerReferredUserQuoteQuantums = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AffiliateParameters>): AffiliateParameters {
    const message = createBaseAffiliateParameters();
    message.maximum30dAttributableVolumePerReferredUserNotional = object.maximum30dAttributableVolumePerReferredUserNotional !== undefined && object.maximum30dAttributableVolumePerReferredUserNotional !== null ? BigInt(object.maximum30dAttributableVolumePerReferredUserNotional.toString()) : BigInt(0);
    message.refereeMinimumFeeTierIdx = object.refereeMinimumFeeTierIdx ?? 0;
    message.maximum30dAttributableRevenuePerReferredUserQuoteQuantums = object.maximum30dAttributableRevenuePerReferredUserQuoteQuantums !== undefined && object.maximum30dAttributableRevenuePerReferredUserQuoteQuantums !== null ? BigInt(object.maximum30dAttributableRevenuePerReferredUserQuoteQuantums.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AffiliateParametersAmino): AffiliateParameters {
    const message = createBaseAffiliateParameters();
    if (object.maximum_30d_attributable_volume_per_referred_user_notional !== undefined && object.maximum_30d_attributable_volume_per_referred_user_notional !== null) {
      message.maximum30dAttributableVolumePerReferredUserNotional = BigInt(object.maximum_30d_attributable_volume_per_referred_user_notional);
    }
    if (object.referee_minimum_fee_tier_idx !== undefined && object.referee_minimum_fee_tier_idx !== null) {
      message.refereeMinimumFeeTierIdx = object.referee_minimum_fee_tier_idx;
    }
    if (object.maximum_30d_attributable_revenue_per_referred_user_quote_quantums !== undefined && object.maximum_30d_attributable_revenue_per_referred_user_quote_quantums !== null) {
      message.maximum30dAttributableRevenuePerReferredUserQuoteQuantums = BigInt(object.maximum_30d_attributable_revenue_per_referred_user_quote_quantums);
    }
    return message;
  },
  toAmino(message: AffiliateParameters): AffiliateParametersAmino {
    const obj: any = {};
    obj.maximum_30d_attributable_volume_per_referred_user_notional = message.maximum30dAttributableVolumePerReferredUserNotional !== BigInt(0) ? message.maximum30dAttributableVolumePerReferredUserNotional?.toString() : undefined;
    obj.referee_minimum_fee_tier_idx = message.refereeMinimumFeeTierIdx === 0 ? undefined : message.refereeMinimumFeeTierIdx;
    obj.maximum_30d_attributable_revenue_per_referred_user_quote_quantums = message.maximum30dAttributableRevenuePerReferredUserQuoteQuantums !== BigInt(0) ? message.maximum30dAttributableRevenuePerReferredUserQuoteQuantums?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AffiliateParametersAminoMsg): AffiliateParameters {
    return AffiliateParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateParametersProtoMsg): AffiliateParameters {
    return AffiliateParameters.decode(message.value);
  },
  toProto(message: AffiliateParameters): Uint8Array {
    return AffiliateParameters.encode(message).finish();
  },
  toProtoMsg(message: AffiliateParameters): AffiliateParametersProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateParameters",
      value: AffiliateParameters.encode(message).finish()
    };
  }
};
function createBaseAffiliateOverrides(): AffiliateOverrides {
  return {
    addresses: []
  };
}
export const AffiliateOverrides = {
  typeUrl: "/h2x.affiliates.AffiliateOverrides",
  encode(message: AffiliateOverrides, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AffiliateOverrides {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffiliateOverrides();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AffiliateOverrides>): AffiliateOverrides {
    const message = createBaseAffiliateOverrides();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AffiliateOverridesAmino): AffiliateOverrides {
    const message = createBaseAffiliateOverrides();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: AffiliateOverrides): AffiliateOverridesAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: AffiliateOverridesAminoMsg): AffiliateOverrides {
    return AffiliateOverrides.fromAmino(object.value);
  },
  fromProtoMsg(message: AffiliateOverridesProtoMsg): AffiliateOverrides {
    return AffiliateOverrides.decode(message.value);
  },
  toProto(message: AffiliateOverrides): Uint8Array {
    return AffiliateOverrides.encode(message).finish();
  },
  toProtoMsg(message: AffiliateOverrides): AffiliateOverridesProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.AffiliateOverrides",
      value: AffiliateOverrides.encode(message).finish()
    };
  }
};