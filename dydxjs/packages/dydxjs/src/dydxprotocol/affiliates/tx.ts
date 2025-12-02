//@ts-nocheck
import { AffiliateTiers, AffiliateTiersAmino, AffiliateTiersSDKType, AffiliateWhitelist, AffiliateWhitelistAmino, AffiliateWhitelistSDKType, AffiliateParameters, AffiliateParametersAmino, AffiliateParametersSDKType, AffiliateOverrides, AffiliateOverridesAmino, AffiliateOverridesSDKType } from "./affiliates";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Message to register a referee-affiliate relationship */
export interface MsgRegisterAffiliate {
  /** Address of the referee */
  referee: string;
  /** Address of the affiliate */
  affiliate: string;
}
export interface MsgRegisterAffiliateProtoMsg {
  typeUrl: "/dydxprotocol.affiliates.MsgRegisterAffiliate";
  value: Uint8Array;
}
/**
 * Message to register a referee-affiliate relationship
 * @name MsgRegisterAffiliateAmino
 * @package dydxprotocol.affiliates
 * @see proto type: dydxprotocol.affiliates.MsgRegisterAffiliate
 */
export interface MsgRegisterAffiliateAmino {
  /**
   * Address of the referee
   */
  referee?: string;
  /**
   * Address of the affiliate
   */
  affiliate?: string;
}
export interface MsgRegisterAffiliateAminoMsg {
  type: "/dydxprotocol.affiliates.MsgRegisterAffiliate";
  value: MsgRegisterAffiliateAmino;
}
/** Message to register a referee-affiliate relationship */
export interface MsgRegisterAffiliateSDKType {
  referee: string;
  affiliate: string;
}
/** Response to MsgRegisterAffiliate */
export interface MsgRegisterAffiliateResponse {}
export interface MsgRegisterAffiliateResponseProtoMsg {
  typeUrl: "/dydxprotocol.affiliates.MsgRegisterAffiliateResponse";
  value: Uint8Array;
}
/**
 * Response to MsgRegisterAffiliate
 * @name MsgRegisterAffiliateResponseAmino
 * @package dydxprotocol.affiliates
 * @see proto type: dydxprotocol.affiliates.MsgRegisterAffiliateResponse
 */
export interface MsgRegisterAffiliateResponseAmino {}
export interface MsgRegisterAffiliateResponseAminoMsg {
  type: "/dydxprotocol.affiliates.MsgRegisterAffiliateResponse";
  value: MsgRegisterAffiliateResponseAmino;
}
/** Response to MsgRegisterAffiliate */
export interface MsgRegisterAffiliateResponseSDKType {}
/** Message to update affiliate tiers */
export interface MsgUpdateAffiliateTiers {
  /** Authority sending this message. Will be sent by gov */
  authority: string;
  /** Updated affiliate tiers information */
  tiers: AffiliateTiers;
}
export interface MsgUpdateAffiliateTiersProtoMsg {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiers";
  value: Uint8Array;
}
/**
 * Message to update affiliate tiers
 * @name MsgUpdateAffiliateTiersAmino
 * @package dydxprotocol.affiliates
 * @see proto type: dydxprotocol.affiliates.MsgUpdateAffiliateTiers
 */
export interface MsgUpdateAffiliateTiersAmino {
  /**
   * Authority sending this message. Will be sent by gov
   */
  authority?: string;
  /**
   * Updated affiliate tiers information
   */
  tiers?: AffiliateTiersAmino;
}
export interface MsgUpdateAffiliateTiersAminoMsg {
  type: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiers";
  value: MsgUpdateAffiliateTiersAmino;
}
/** Message to update affiliate tiers */
export interface MsgUpdateAffiliateTiersSDKType {
  authority: string;
  tiers: AffiliateTiersSDKType;
}
/** Response to MsgUpdateAffiliateTiers */
export interface MsgUpdateAffiliateTiersResponse {}
export interface MsgUpdateAffiliateTiersResponseProtoMsg {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiersResponse";
  value: Uint8Array;
}
/**
 * Response to MsgUpdateAffiliateTiers
 * @name MsgUpdateAffiliateTiersResponseAmino
 * @package dydxprotocol.affiliates
 * @see proto type: dydxprotocol.affiliates.MsgUpdateAffiliateTiersResponse
 */
export interface MsgUpdateAffiliateTiersResponseAmino {}
export interface MsgUpdateAffiliateTiersResponseAminoMsg {
  type: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiersResponse";
  value: MsgUpdateAffiliateTiersResponseAmino;
}
/** Response to MsgUpdateAffiliateTiers */
export interface MsgUpdateAffiliateTiersResponseSDKType {}
/** Message to update affiliate whitelist */
export interface MsgUpdateAffiliateWhitelist {
  /** Authority sending this message. Will be sent by gov */
  authority: string;
  /** Updated affiliate whitelist information */
  whitelist: AffiliateWhitelist;
}
export interface MsgUpdateAffiliateWhitelistProtoMsg {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist";
  value: Uint8Array;
}
/**
 * Message to update affiliate whitelist
 * @name MsgUpdateAffiliateWhitelistAmino
 * @package dydxprotocol.affiliates
 * @see proto type: dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist
 */
export interface MsgUpdateAffiliateWhitelistAmino {
  /**
   * Authority sending this message. Will be sent by gov
   */
  authority?: string;
  /**
   * Updated affiliate whitelist information
   */
  whitelist?: AffiliateWhitelistAmino;
}
export interface MsgUpdateAffiliateWhitelistAminoMsg {
  type: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist";
  value: MsgUpdateAffiliateWhitelistAmino;
}
/** Message to update affiliate whitelist */
export interface MsgUpdateAffiliateWhitelistSDKType {
  authority: string;
  whitelist: AffiliateWhitelistSDKType;
}
/** Response to MsgUpdateAffiliateWhitelist */
export interface MsgUpdateAffiliateWhitelistResponse {}
export interface MsgUpdateAffiliateWhitelistResponseProtoMsg {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelistResponse";
  value: Uint8Array;
}
/**
 * Response to MsgUpdateAffiliateWhitelist
 * @name MsgUpdateAffiliateWhitelistResponseAmino
 * @package dydxprotocol.affiliates
 * @see proto type: dydxprotocol.affiliates.MsgUpdateAffiliateWhitelistResponse
 */
export interface MsgUpdateAffiliateWhitelistResponseAmino {}
export interface MsgUpdateAffiliateWhitelistResponseAminoMsg {
  type: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelistResponse";
  value: MsgUpdateAffiliateWhitelistResponseAmino;
}
/** Response to MsgUpdateAffiliateWhitelist */
export interface MsgUpdateAffiliateWhitelistResponseSDKType {}
/** Message to update affiliate program parameters */
export interface MsgUpdateAffiliateParameters {
  /** Authority sending this message. Will be sent by gov */
  authority: string;
  /** Affiliate program parameters */
  affiliateParameters: AffiliateParameters;
}
export interface MsgUpdateAffiliateParametersProtoMsg {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateParameters";
  value: Uint8Array;
}
/**
 * Message to update affiliate program parameters
 * @name MsgUpdateAffiliateParametersAmino
 * @package dydxprotocol.affiliates
 * @see proto type: dydxprotocol.affiliates.MsgUpdateAffiliateParameters
 */
export interface MsgUpdateAffiliateParametersAmino {
  /**
   * Authority sending this message. Will be sent by gov
   */
  authority?: string;
  /**
   * Affiliate program parameters
   */
  affiliate_parameters?: AffiliateParametersAmino;
}
export interface MsgUpdateAffiliateParametersAminoMsg {
  type: "/dydxprotocol.affiliates.MsgUpdateAffiliateParameters";
  value: MsgUpdateAffiliateParametersAmino;
}
/** Message to update affiliate program parameters */
export interface MsgUpdateAffiliateParametersSDKType {
  authority: string;
  affiliate_parameters: AffiliateParametersSDKType;
}
/** Response to MsgUpdateAffiliateParameters */
export interface MsgUpdateAffiliateParametersResponse {}
export interface MsgUpdateAffiliateParametersResponseProtoMsg {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateParametersResponse";
  value: Uint8Array;
}
/**
 * Response to MsgUpdateAffiliateParameters
 * @name MsgUpdateAffiliateParametersResponseAmino
 * @package dydxprotocol.affiliates
 * @see proto type: dydxprotocol.affiliates.MsgUpdateAffiliateParametersResponse
 */
export interface MsgUpdateAffiliateParametersResponseAmino {}
export interface MsgUpdateAffiliateParametersResponseAminoMsg {
  type: "/dydxprotocol.affiliates.MsgUpdateAffiliateParametersResponse";
  value: MsgUpdateAffiliateParametersResponseAmino;
}
/** Response to MsgUpdateAffiliateParameters */
export interface MsgUpdateAffiliateParametersResponseSDKType {}
/** Message to update affiliate overrides */
export interface MsgUpdateAffiliateOverrides {
  /** Authority sending this message. Will be sent by gov */
  authority: string;
  /** Addresses that automatically have the maximum affiliate tier */
  affiliateOverrides: AffiliateOverrides;
}
export interface MsgUpdateAffiliateOverridesProtoMsg {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverrides";
  value: Uint8Array;
}
/**
 * Message to update affiliate overrides
 * @name MsgUpdateAffiliateOverridesAmino
 * @package dydxprotocol.affiliates
 * @see proto type: dydxprotocol.affiliates.MsgUpdateAffiliateOverrides
 */
export interface MsgUpdateAffiliateOverridesAmino {
  /**
   * Authority sending this message. Will be sent by gov
   */
  authority?: string;
  /**
   * Addresses that automatically have the maximum affiliate tier
   */
  affiliate_overrides?: AffiliateOverridesAmino;
}
export interface MsgUpdateAffiliateOverridesAminoMsg {
  type: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverrides";
  value: MsgUpdateAffiliateOverridesAmino;
}
/** Message to update affiliate overrides */
export interface MsgUpdateAffiliateOverridesSDKType {
  authority: string;
  affiliate_overrides: AffiliateOverridesSDKType;
}
/** Response to MsgUpdateAffiliateOverrides */
export interface MsgUpdateAffiliateOverridesResponse {}
export interface MsgUpdateAffiliateOverridesResponseProtoMsg {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverridesResponse";
  value: Uint8Array;
}
/**
 * Response to MsgUpdateAffiliateOverrides
 * @name MsgUpdateAffiliateOverridesResponseAmino
 * @package dydxprotocol.affiliates
 * @see proto type: dydxprotocol.affiliates.MsgUpdateAffiliateOverridesResponse
 */
export interface MsgUpdateAffiliateOverridesResponseAmino {}
export interface MsgUpdateAffiliateOverridesResponseAminoMsg {
  type: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverridesResponse";
  value: MsgUpdateAffiliateOverridesResponseAmino;
}
/** Response to MsgUpdateAffiliateOverrides */
export interface MsgUpdateAffiliateOverridesResponseSDKType {}
function createBaseMsgRegisterAffiliate(): MsgRegisterAffiliate {
  return {
    referee: "",
    affiliate: ""
  };
}
export const MsgRegisterAffiliate = {
  typeUrl: "/dydxprotocol.affiliates.MsgRegisterAffiliate",
  encode(message: MsgRegisterAffiliate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.referee !== "") {
      writer.uint32(10).string(message.referee);
    }
    if (message.affiliate !== "") {
      writer.uint32(18).string(message.affiliate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAffiliate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAffiliate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referee = reader.string();
          break;
        case 2:
          message.affiliate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterAffiliate>): MsgRegisterAffiliate {
    const message = createBaseMsgRegisterAffiliate();
    message.referee = object.referee ?? "";
    message.affiliate = object.affiliate ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterAffiliateAmino): MsgRegisterAffiliate {
    const message = createBaseMsgRegisterAffiliate();
    if (object.referee !== undefined && object.referee !== null) {
      message.referee = object.referee;
    }
    if (object.affiliate !== undefined && object.affiliate !== null) {
      message.affiliate = object.affiliate;
    }
    return message;
  },
  toAmino(message: MsgRegisterAffiliate): MsgRegisterAffiliateAmino {
    const obj: any = {};
    obj.referee = message.referee === "" ? undefined : message.referee;
    obj.affiliate = message.affiliate === "" ? undefined : message.affiliate;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAffiliateAminoMsg): MsgRegisterAffiliate {
    return MsgRegisterAffiliate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAffiliateProtoMsg): MsgRegisterAffiliate {
    return MsgRegisterAffiliate.decode(message.value);
  },
  toProto(message: MsgRegisterAffiliate): Uint8Array {
    return MsgRegisterAffiliate.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAffiliate): MsgRegisterAffiliateProtoMsg {
    return {
      typeUrl: "/dydxprotocol.affiliates.MsgRegisterAffiliate",
      value: MsgRegisterAffiliate.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAffiliateResponse(): MsgRegisterAffiliateResponse {
  return {};
}
export const MsgRegisterAffiliateResponse = {
  typeUrl: "/dydxprotocol.affiliates.MsgRegisterAffiliateResponse",
  encode(_: MsgRegisterAffiliateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAffiliateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAffiliateResponse();
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
  fromPartial(_: Partial<MsgRegisterAffiliateResponse>): MsgRegisterAffiliateResponse {
    const message = createBaseMsgRegisterAffiliateResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAffiliateResponseAmino): MsgRegisterAffiliateResponse {
    const message = createBaseMsgRegisterAffiliateResponse();
    return message;
  },
  toAmino(_: MsgRegisterAffiliateResponse): MsgRegisterAffiliateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAffiliateResponseAminoMsg): MsgRegisterAffiliateResponse {
    return MsgRegisterAffiliateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAffiliateResponseProtoMsg): MsgRegisterAffiliateResponse {
    return MsgRegisterAffiliateResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAffiliateResponse): Uint8Array {
    return MsgRegisterAffiliateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAffiliateResponse): MsgRegisterAffiliateResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.affiliates.MsgRegisterAffiliateResponse",
      value: MsgRegisterAffiliateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAffiliateTiers(): MsgUpdateAffiliateTiers {
  return {
    authority: "",
    tiers: AffiliateTiers.fromPartial({})
  };
}
export const MsgUpdateAffiliateTiers = {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiers",
  encode(message: MsgUpdateAffiliateTiers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.tiers !== undefined) {
      AffiliateTiers.encode(message.tiers, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAffiliateTiers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAffiliateTiers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.tiers = AffiliateTiers.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAffiliateTiers>): MsgUpdateAffiliateTiers {
    const message = createBaseMsgUpdateAffiliateTiers();
    message.authority = object.authority ?? "";
    message.tiers = object.tiers !== undefined && object.tiers !== null ? AffiliateTiers.fromPartial(object.tiers) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAffiliateTiersAmino): MsgUpdateAffiliateTiers {
    const message = createBaseMsgUpdateAffiliateTiers();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.tiers !== undefined && object.tiers !== null) {
      message.tiers = AffiliateTiers.fromAmino(object.tiers);
    }
    return message;
  },
  toAmino(message: MsgUpdateAffiliateTiers): MsgUpdateAffiliateTiersAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.tiers = message.tiers ? AffiliateTiers.toAmino(message.tiers) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAffiliateTiersAminoMsg): MsgUpdateAffiliateTiers {
    return MsgUpdateAffiliateTiers.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAffiliateTiersProtoMsg): MsgUpdateAffiliateTiers {
    return MsgUpdateAffiliateTiers.decode(message.value);
  },
  toProto(message: MsgUpdateAffiliateTiers): Uint8Array {
    return MsgUpdateAffiliateTiers.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAffiliateTiers): MsgUpdateAffiliateTiersProtoMsg {
    return {
      typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiers",
      value: MsgUpdateAffiliateTiers.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAffiliateTiersResponse(): MsgUpdateAffiliateTiersResponse {
  return {};
}
export const MsgUpdateAffiliateTiersResponse = {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiersResponse",
  encode(_: MsgUpdateAffiliateTiersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAffiliateTiersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAffiliateTiersResponse();
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
  fromPartial(_: Partial<MsgUpdateAffiliateTiersResponse>): MsgUpdateAffiliateTiersResponse {
    const message = createBaseMsgUpdateAffiliateTiersResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAffiliateTiersResponseAmino): MsgUpdateAffiliateTiersResponse {
    const message = createBaseMsgUpdateAffiliateTiersResponse();
    return message;
  },
  toAmino(_: MsgUpdateAffiliateTiersResponse): MsgUpdateAffiliateTiersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAffiliateTiersResponseAminoMsg): MsgUpdateAffiliateTiersResponse {
    return MsgUpdateAffiliateTiersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAffiliateTiersResponseProtoMsg): MsgUpdateAffiliateTiersResponse {
    return MsgUpdateAffiliateTiersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAffiliateTiersResponse): Uint8Array {
    return MsgUpdateAffiliateTiersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAffiliateTiersResponse): MsgUpdateAffiliateTiersResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateTiersResponse",
      value: MsgUpdateAffiliateTiersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAffiliateWhitelist(): MsgUpdateAffiliateWhitelist {
  return {
    authority: "",
    whitelist: AffiliateWhitelist.fromPartial({})
  };
}
export const MsgUpdateAffiliateWhitelist = {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist",
  encode(message: MsgUpdateAffiliateWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.whitelist !== undefined) {
      AffiliateWhitelist.encode(message.whitelist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAffiliateWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAffiliateWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.whitelist = AffiliateWhitelist.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAffiliateWhitelist>): MsgUpdateAffiliateWhitelist {
    const message = createBaseMsgUpdateAffiliateWhitelist();
    message.authority = object.authority ?? "";
    message.whitelist = object.whitelist !== undefined && object.whitelist !== null ? AffiliateWhitelist.fromPartial(object.whitelist) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAffiliateWhitelistAmino): MsgUpdateAffiliateWhitelist {
    const message = createBaseMsgUpdateAffiliateWhitelist();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.whitelist !== undefined && object.whitelist !== null) {
      message.whitelist = AffiliateWhitelist.fromAmino(object.whitelist);
    }
    return message;
  },
  toAmino(message: MsgUpdateAffiliateWhitelist): MsgUpdateAffiliateWhitelistAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.whitelist = message.whitelist ? AffiliateWhitelist.toAmino(message.whitelist) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAffiliateWhitelistAminoMsg): MsgUpdateAffiliateWhitelist {
    return MsgUpdateAffiliateWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAffiliateWhitelistProtoMsg): MsgUpdateAffiliateWhitelist {
    return MsgUpdateAffiliateWhitelist.decode(message.value);
  },
  toProto(message: MsgUpdateAffiliateWhitelist): Uint8Array {
    return MsgUpdateAffiliateWhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAffiliateWhitelist): MsgUpdateAffiliateWhitelistProtoMsg {
    return {
      typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelist",
      value: MsgUpdateAffiliateWhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAffiliateWhitelistResponse(): MsgUpdateAffiliateWhitelistResponse {
  return {};
}
export const MsgUpdateAffiliateWhitelistResponse = {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelistResponse",
  encode(_: MsgUpdateAffiliateWhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAffiliateWhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAffiliateWhitelistResponse();
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
  fromPartial(_: Partial<MsgUpdateAffiliateWhitelistResponse>): MsgUpdateAffiliateWhitelistResponse {
    const message = createBaseMsgUpdateAffiliateWhitelistResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAffiliateWhitelistResponseAmino): MsgUpdateAffiliateWhitelistResponse {
    const message = createBaseMsgUpdateAffiliateWhitelistResponse();
    return message;
  },
  toAmino(_: MsgUpdateAffiliateWhitelistResponse): MsgUpdateAffiliateWhitelistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAffiliateWhitelistResponseAminoMsg): MsgUpdateAffiliateWhitelistResponse {
    return MsgUpdateAffiliateWhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAffiliateWhitelistResponseProtoMsg): MsgUpdateAffiliateWhitelistResponse {
    return MsgUpdateAffiliateWhitelistResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAffiliateWhitelistResponse): Uint8Array {
    return MsgUpdateAffiliateWhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAffiliateWhitelistResponse): MsgUpdateAffiliateWhitelistResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateWhitelistResponse",
      value: MsgUpdateAffiliateWhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAffiliateParameters(): MsgUpdateAffiliateParameters {
  return {
    authority: "",
    affiliateParameters: AffiliateParameters.fromPartial({})
  };
}
export const MsgUpdateAffiliateParameters = {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateParameters",
  encode(message: MsgUpdateAffiliateParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.affiliateParameters !== undefined) {
      AffiliateParameters.encode(message.affiliateParameters, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAffiliateParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAffiliateParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.affiliateParameters = AffiliateParameters.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAffiliateParameters>): MsgUpdateAffiliateParameters {
    const message = createBaseMsgUpdateAffiliateParameters();
    message.authority = object.authority ?? "";
    message.affiliateParameters = object.affiliateParameters !== undefined && object.affiliateParameters !== null ? AffiliateParameters.fromPartial(object.affiliateParameters) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAffiliateParametersAmino): MsgUpdateAffiliateParameters {
    const message = createBaseMsgUpdateAffiliateParameters();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.affiliate_parameters !== undefined && object.affiliate_parameters !== null) {
      message.affiliateParameters = AffiliateParameters.fromAmino(object.affiliate_parameters);
    }
    return message;
  },
  toAmino(message: MsgUpdateAffiliateParameters): MsgUpdateAffiliateParametersAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.affiliate_parameters = message.affiliateParameters ? AffiliateParameters.toAmino(message.affiliateParameters) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAffiliateParametersAminoMsg): MsgUpdateAffiliateParameters {
    return MsgUpdateAffiliateParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAffiliateParametersProtoMsg): MsgUpdateAffiliateParameters {
    return MsgUpdateAffiliateParameters.decode(message.value);
  },
  toProto(message: MsgUpdateAffiliateParameters): Uint8Array {
    return MsgUpdateAffiliateParameters.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAffiliateParameters): MsgUpdateAffiliateParametersProtoMsg {
    return {
      typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateParameters",
      value: MsgUpdateAffiliateParameters.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAffiliateParametersResponse(): MsgUpdateAffiliateParametersResponse {
  return {};
}
export const MsgUpdateAffiliateParametersResponse = {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateParametersResponse",
  encode(_: MsgUpdateAffiliateParametersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAffiliateParametersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAffiliateParametersResponse();
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
  fromPartial(_: Partial<MsgUpdateAffiliateParametersResponse>): MsgUpdateAffiliateParametersResponse {
    const message = createBaseMsgUpdateAffiliateParametersResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAffiliateParametersResponseAmino): MsgUpdateAffiliateParametersResponse {
    const message = createBaseMsgUpdateAffiliateParametersResponse();
    return message;
  },
  toAmino(_: MsgUpdateAffiliateParametersResponse): MsgUpdateAffiliateParametersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAffiliateParametersResponseAminoMsg): MsgUpdateAffiliateParametersResponse {
    return MsgUpdateAffiliateParametersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAffiliateParametersResponseProtoMsg): MsgUpdateAffiliateParametersResponse {
    return MsgUpdateAffiliateParametersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAffiliateParametersResponse): Uint8Array {
    return MsgUpdateAffiliateParametersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAffiliateParametersResponse): MsgUpdateAffiliateParametersResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateParametersResponse",
      value: MsgUpdateAffiliateParametersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAffiliateOverrides(): MsgUpdateAffiliateOverrides {
  return {
    authority: "",
    affiliateOverrides: AffiliateOverrides.fromPartial({})
  };
}
export const MsgUpdateAffiliateOverrides = {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverrides",
  encode(message: MsgUpdateAffiliateOverrides, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.affiliateOverrides !== undefined) {
      AffiliateOverrides.encode(message.affiliateOverrides, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAffiliateOverrides {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAffiliateOverrides();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.affiliateOverrides = AffiliateOverrides.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAffiliateOverrides>): MsgUpdateAffiliateOverrides {
    const message = createBaseMsgUpdateAffiliateOverrides();
    message.authority = object.authority ?? "";
    message.affiliateOverrides = object.affiliateOverrides !== undefined && object.affiliateOverrides !== null ? AffiliateOverrides.fromPartial(object.affiliateOverrides) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAffiliateOverridesAmino): MsgUpdateAffiliateOverrides {
    const message = createBaseMsgUpdateAffiliateOverrides();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.affiliate_overrides !== undefined && object.affiliate_overrides !== null) {
      message.affiliateOverrides = AffiliateOverrides.fromAmino(object.affiliate_overrides);
    }
    return message;
  },
  toAmino(message: MsgUpdateAffiliateOverrides): MsgUpdateAffiliateOverridesAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.affiliate_overrides = message.affiliateOverrides ? AffiliateOverrides.toAmino(message.affiliateOverrides) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAffiliateOverridesAminoMsg): MsgUpdateAffiliateOverrides {
    return MsgUpdateAffiliateOverrides.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAffiliateOverridesProtoMsg): MsgUpdateAffiliateOverrides {
    return MsgUpdateAffiliateOverrides.decode(message.value);
  },
  toProto(message: MsgUpdateAffiliateOverrides): Uint8Array {
    return MsgUpdateAffiliateOverrides.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAffiliateOverrides): MsgUpdateAffiliateOverridesProtoMsg {
    return {
      typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverrides",
      value: MsgUpdateAffiliateOverrides.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAffiliateOverridesResponse(): MsgUpdateAffiliateOverridesResponse {
  return {};
}
export const MsgUpdateAffiliateOverridesResponse = {
  typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverridesResponse",
  encode(_: MsgUpdateAffiliateOverridesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAffiliateOverridesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAffiliateOverridesResponse();
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
  fromPartial(_: Partial<MsgUpdateAffiliateOverridesResponse>): MsgUpdateAffiliateOverridesResponse {
    const message = createBaseMsgUpdateAffiliateOverridesResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAffiliateOverridesResponseAmino): MsgUpdateAffiliateOverridesResponse {
    const message = createBaseMsgUpdateAffiliateOverridesResponse();
    return message;
  },
  toAmino(_: MsgUpdateAffiliateOverridesResponse): MsgUpdateAffiliateOverridesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAffiliateOverridesResponseAminoMsg): MsgUpdateAffiliateOverridesResponse {
    return MsgUpdateAffiliateOverridesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAffiliateOverridesResponseProtoMsg): MsgUpdateAffiliateOverridesResponse {
    return MsgUpdateAffiliateOverridesResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAffiliateOverridesResponse): Uint8Array {
    return MsgUpdateAffiliateOverridesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAffiliateOverridesResponse): MsgUpdateAffiliateOverridesResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.affiliates.MsgUpdateAffiliateOverridesResponse",
      value: MsgUpdateAffiliateOverridesResponse.encode(message).finish()
    };
  }
};