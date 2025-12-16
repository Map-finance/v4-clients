//@ts-nocheck
import { VaultStatus } from "./vault";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/** QuotingParams stores vault quoting parameters. */
export interface QuotingParams {
  /**
   * The number of layers of orders a vault places. For example if
   * `layers=2`, a vault places 2 asks and 2 bids.
   */
  layers: number;
  /** The minimum base spread when a vault quotes around reservation price. */
  spreadMinPpm: number;
  /**
   * The buffer amount to add to min_price_change_ppm to arrive at `spread`
   * according to formula:
   * `spread = max(spread_min_ppm, min_price_change_ppm + spread_buffer_ppm)`.
   */
  spreadBufferPpm: number;
  /** The factor that determines how aggressive a vault skews its orders. */
  skewFactorPpm: number;
  /** The percentage of vault equity that each order is sized at. */
  orderSizePctPpm: number;
  /** The duration that a vault's orders are valid for. */
  orderExpirationSeconds: number;
  /**
   * The number of quote quantums in quote asset that a vault with no perpetual
   * positions must have to activate, i.e. if a vault has no perpetual positions
   * and has strictly less than this amount of quote asset, it will not
   * activate.
   */
  activationThresholdQuoteQuantums: Uint8Array;
}
export interface QuotingParamsProtoMsg {
  typeUrl: "/h2x.vault.QuotingParams";
  value: Uint8Array;
}
/**
 * QuotingParams stores vault quoting parameters.
 * @name QuotingParamsAmino
 * @package h2x.vault
 * @see proto type: h2x.vault.QuotingParams
 */
export interface QuotingParamsAmino {
  /**
   * The number of layers of orders a vault places. For example if
   * `layers=2`, a vault places 2 asks and 2 bids.
   */
  layers?: number;
  /**
   * The minimum base spread when a vault quotes around reservation price.
   */
  spread_min_ppm?: number;
  /**
   * The buffer amount to add to min_price_change_ppm to arrive at `spread`
   * according to formula:
   * `spread = max(spread_min_ppm, min_price_change_ppm + spread_buffer_ppm)`.
   */
  spread_buffer_ppm?: number;
  /**
   * The factor that determines how aggressive a vault skews its orders.
   */
  skew_factor_ppm?: number;
  /**
   * The percentage of vault equity that each order is sized at.
   */
  order_size_pct_ppm?: number;
  /**
   * The duration that a vault's orders are valid for.
   */
  order_expiration_seconds?: number;
  /**
   * The number of quote quantums in quote asset that a vault with no perpetual
   * positions must have to activate, i.e. if a vault has no perpetual positions
   * and has strictly less than this amount of quote asset, it will not
   * activate.
   */
  activation_threshold_quote_quantums?: string;
}
export interface QuotingParamsAminoMsg {
  type: "/h2x.vault.QuotingParams";
  value: QuotingParamsAmino;
}
/** QuotingParams stores vault quoting parameters. */
export interface QuotingParamsSDKType {
  layers: number;
  spread_min_ppm: number;
  spread_buffer_ppm: number;
  skew_factor_ppm: number;
  order_size_pct_ppm: number;
  order_expiration_seconds: number;
  activation_threshold_quote_quantums: Uint8Array;
}
/** VaultParams stores vault parameters. */
export interface VaultParams {
  /** Status of the vault. */
  status: VaultStatus;
  /** Quoting parameters of the vault. */
  quotingParams?: QuotingParams;
}
export interface VaultParamsProtoMsg {
  typeUrl: "/h2x.vault.VaultParams";
  value: Uint8Array;
}
/**
 * VaultParams stores vault parameters.
 * @name VaultParamsAmino
 * @package h2x.vault
 * @see proto type: h2x.vault.VaultParams
 */
export interface VaultParamsAmino {
  /**
   * Status of the vault.
   */
  status?: VaultStatus;
  /**
   * Quoting parameters of the vault.
   */
  quoting_params?: QuotingParamsAmino;
}
export interface VaultParamsAminoMsg {
  type: "/h2x.vault.VaultParams";
  value: VaultParamsAmino;
}
/** VaultParams stores vault parameters. */
export interface VaultParamsSDKType {
  status: VaultStatus;
  quoting_params?: QuotingParamsSDKType;
}
/** OperatorParams stores parameters regarding megavault operator. */
export interface OperatorParams {
  /** Address of the operator. */
  operator: string;
  /** Metadata of the operator. */
  metadata: OperatorMetadata;
}
export interface OperatorParamsProtoMsg {
  typeUrl: "/h2x.vault.OperatorParams";
  value: Uint8Array;
}
/**
 * OperatorParams stores parameters regarding megavault operator.
 * @name OperatorParamsAmino
 * @package h2x.vault
 * @see proto type: h2x.vault.OperatorParams
 */
export interface OperatorParamsAmino {
  /**
   * Address of the operator.
   */
  operator?: string;
  /**
   * Metadata of the operator.
   */
  metadata?: OperatorMetadataAmino;
}
export interface OperatorParamsAminoMsg {
  type: "/h2x.vault.OperatorParams";
  value: OperatorParamsAmino;
}
/** OperatorParams stores parameters regarding megavault operator. */
export interface OperatorParamsSDKType {
  operator: string;
  metadata: OperatorMetadataSDKType;
}
/** OperatorMetadata stores metadata regarding megavault operator. */
export interface OperatorMetadata {
  /** Name of the operator. */
  name: string;
  /** Description of the operator. */
  description: string;
}
export interface OperatorMetadataProtoMsg {
  typeUrl: "/h2x.vault.OperatorMetadata";
  value: Uint8Array;
}
/**
 * OperatorMetadata stores metadata regarding megavault operator.
 * @name OperatorMetadataAmino
 * @package h2x.vault
 * @see proto type: h2x.vault.OperatorMetadata
 */
export interface OperatorMetadataAmino {
  /**
   * Name of the operator.
   */
  name?: string;
  /**
   * Description of the operator.
   */
  description?: string;
}
export interface OperatorMetadataAminoMsg {
  type: "/h2x.vault.OperatorMetadata";
  value: OperatorMetadataAmino;
}
/** OperatorMetadata stores metadata regarding megavault operator. */
export interface OperatorMetadataSDKType {
  name: string;
  description: string;
}
/**
 * Deprecated: Params stores `x/vault` parameters.
 * Deprecated since v6.x as is replaced by QuotingParams.
 */
export interface Params {
  /**
   * The number of layers of orders a vault places. For example if
   * `layers=2`, a vault places 2 asks and 2 bids.
   */
  layers: number;
  /** The minimum base spread when a vault quotes around reservation price. */
  spreadMinPpm: number;
  /**
   * The buffer amount to add to min_price_change_ppm to arrive at `spread`
   * according to formula:
   * `spread = max(spread_min_ppm, min_price_change_ppm + spread_buffer_ppm)`.
   */
  spreadBufferPpm: number;
  /** The factor that determines how aggressive a vault skews its orders. */
  skewFactorPpm: number;
  /** The percentage of vault equity that each order is sized at. */
  orderSizePctPpm: number;
  /** The duration that a vault's orders are valid for. */
  orderExpirationSeconds: number;
  /**
   * The number of quote quantums in quote asset that a vault with no perpetual
   * positions must have to activate, i.e. if a vault has no perpetual positions
   * and has strictly less than this amount of quote asset, it will not
   * activate.
   */
  activationThresholdQuoteQuantums: Uint8Array;
}
export interface ParamsProtoMsg {
  typeUrl: "/h2x.vault.Params";
  value: Uint8Array;
}
/**
 * Deprecated: Params stores `x/vault` parameters.
 * Deprecated since v6.x as is replaced by QuotingParams.
 * @name ParamsAmino
 * @package h2x.vault
 * @see proto type: h2x.vault.Params
 */
export interface ParamsAmino {
  /**
   * The number of layers of orders a vault places. For example if
   * `layers=2`, a vault places 2 asks and 2 bids.
   */
  layers?: number;
  /**
   * The minimum base spread when a vault quotes around reservation price.
   */
  spread_min_ppm?: number;
  /**
   * The buffer amount to add to min_price_change_ppm to arrive at `spread`
   * according to formula:
   * `spread = max(spread_min_ppm, min_price_change_ppm + spread_buffer_ppm)`.
   */
  spread_buffer_ppm?: number;
  /**
   * The factor that determines how aggressive a vault skews its orders.
   */
  skew_factor_ppm?: number;
  /**
   * The percentage of vault equity that each order is sized at.
   */
  order_size_pct_ppm?: number;
  /**
   * The duration that a vault's orders are valid for.
   */
  order_expiration_seconds?: number;
  /**
   * The number of quote quantums in quote asset that a vault with no perpetual
   * positions must have to activate, i.e. if a vault has no perpetual positions
   * and has strictly less than this amount of quote asset, it will not
   * activate.
   */
  activation_threshold_quote_quantums?: string;
}
export interface ParamsAminoMsg {
  type: "/h2x.vault.Params";
  value: ParamsAmino;
}
/**
 * Deprecated: Params stores `x/vault` parameters.
 * Deprecated since v6.x as is replaced by QuotingParams.
 */
export interface ParamsSDKType {
  layers: number;
  spread_min_ppm: number;
  spread_buffer_ppm: number;
  skew_factor_ppm: number;
  order_size_pct_ppm: number;
  order_expiration_seconds: number;
  activation_threshold_quote_quantums: Uint8Array;
}
function createBaseQuotingParams(): QuotingParams {
  return {
    layers: 0,
    spreadMinPpm: 0,
    spreadBufferPpm: 0,
    skewFactorPpm: 0,
    orderSizePctPpm: 0,
    orderExpirationSeconds: 0,
    activationThresholdQuoteQuantums: new Uint8Array()
  };
}
export const QuotingParams = {
  typeUrl: "/h2x.vault.QuotingParams",
  encode(message: QuotingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.layers !== 0) {
      writer.uint32(8).uint32(message.layers);
    }
    if (message.spreadMinPpm !== 0) {
      writer.uint32(16).uint32(message.spreadMinPpm);
    }
    if (message.spreadBufferPpm !== 0) {
      writer.uint32(24).uint32(message.spreadBufferPpm);
    }
    if (message.skewFactorPpm !== 0) {
      writer.uint32(32).uint32(message.skewFactorPpm);
    }
    if (message.orderSizePctPpm !== 0) {
      writer.uint32(40).uint32(message.orderSizePctPpm);
    }
    if (message.orderExpirationSeconds !== 0) {
      writer.uint32(48).uint32(message.orderExpirationSeconds);
    }
    if (message.activationThresholdQuoteQuantums.length !== 0) {
      writer.uint32(58).bytes(message.activationThresholdQuoteQuantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.layers = reader.uint32();
          break;
        case 2:
          message.spreadMinPpm = reader.uint32();
          break;
        case 3:
          message.spreadBufferPpm = reader.uint32();
          break;
        case 4:
          message.skewFactorPpm = reader.uint32();
          break;
        case 5:
          message.orderSizePctPpm = reader.uint32();
          break;
        case 6:
          message.orderExpirationSeconds = reader.uint32();
          break;
        case 7:
          message.activationThresholdQuoteQuantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuotingParams>): QuotingParams {
    const message = createBaseQuotingParams();
    message.layers = object.layers ?? 0;
    message.spreadMinPpm = object.spreadMinPpm ?? 0;
    message.spreadBufferPpm = object.spreadBufferPpm ?? 0;
    message.skewFactorPpm = object.skewFactorPpm ?? 0;
    message.orderSizePctPpm = object.orderSizePctPpm ?? 0;
    message.orderExpirationSeconds = object.orderExpirationSeconds ?? 0;
    message.activationThresholdQuoteQuantums = object.activationThresholdQuoteQuantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QuotingParamsAmino): QuotingParams {
    const message = createBaseQuotingParams();
    if (object.layers !== undefined && object.layers !== null) {
      message.layers = object.layers;
    }
    if (object.spread_min_ppm !== undefined && object.spread_min_ppm !== null) {
      message.spreadMinPpm = object.spread_min_ppm;
    }
    if (object.spread_buffer_ppm !== undefined && object.spread_buffer_ppm !== null) {
      message.spreadBufferPpm = object.spread_buffer_ppm;
    }
    if (object.skew_factor_ppm !== undefined && object.skew_factor_ppm !== null) {
      message.skewFactorPpm = object.skew_factor_ppm;
    }
    if (object.order_size_pct_ppm !== undefined && object.order_size_pct_ppm !== null) {
      message.orderSizePctPpm = object.order_size_pct_ppm;
    }
    if (object.order_expiration_seconds !== undefined && object.order_expiration_seconds !== null) {
      message.orderExpirationSeconds = object.order_expiration_seconds;
    }
    if (object.activation_threshold_quote_quantums !== undefined && object.activation_threshold_quote_quantums !== null) {
      message.activationThresholdQuoteQuantums = bytesFromBase64(object.activation_threshold_quote_quantums);
    }
    return message;
  },
  toAmino(message: QuotingParams): QuotingParamsAmino {
    const obj: any = {};
    obj.layers = message.layers === 0 ? undefined : message.layers;
    obj.spread_min_ppm = message.spreadMinPpm === 0 ? undefined : message.spreadMinPpm;
    obj.spread_buffer_ppm = message.spreadBufferPpm === 0 ? undefined : message.spreadBufferPpm;
    obj.skew_factor_ppm = message.skewFactorPpm === 0 ? undefined : message.skewFactorPpm;
    obj.order_size_pct_ppm = message.orderSizePctPpm === 0 ? undefined : message.orderSizePctPpm;
    obj.order_expiration_seconds = message.orderExpirationSeconds === 0 ? undefined : message.orderExpirationSeconds;
    obj.activation_threshold_quote_quantums = message.activationThresholdQuoteQuantums ? base64FromBytes(message.activationThresholdQuoteQuantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuotingParamsAminoMsg): QuotingParams {
    return QuotingParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotingParamsProtoMsg): QuotingParams {
    return QuotingParams.decode(message.value);
  },
  toProto(message: QuotingParams): Uint8Array {
    return QuotingParams.encode(message).finish();
  },
  toProtoMsg(message: QuotingParams): QuotingParamsProtoMsg {
    return {
      typeUrl: "/h2x.vault.QuotingParams",
      value: QuotingParams.encode(message).finish()
    };
  }
};
function createBaseVaultParams(): VaultParams {
  return {
    status: 0,
    quotingParams: undefined
  };
}
export const VaultParams = {
  typeUrl: "/h2x.vault.VaultParams",
  encode(message: VaultParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.quotingParams !== undefined) {
      QuotingParams.encode(message.quotingParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VaultParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.quotingParams = QuotingParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VaultParams>): VaultParams {
    const message = createBaseVaultParams();
    message.status = object.status ?? 0;
    message.quotingParams = object.quotingParams !== undefined && object.quotingParams !== null ? QuotingParams.fromPartial(object.quotingParams) : undefined;
    return message;
  },
  fromAmino(object: VaultParamsAmino): VaultParams {
    const message = createBaseVaultParams();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.quoting_params !== undefined && object.quoting_params !== null) {
      message.quotingParams = QuotingParams.fromAmino(object.quoting_params);
    }
    return message;
  },
  toAmino(message: VaultParams): VaultParamsAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.quoting_params = message.quotingParams ? QuotingParams.toAmino(message.quotingParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: VaultParamsAminoMsg): VaultParams {
    return VaultParams.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultParamsProtoMsg): VaultParams {
    return VaultParams.decode(message.value);
  },
  toProto(message: VaultParams): Uint8Array {
    return VaultParams.encode(message).finish();
  },
  toProtoMsg(message: VaultParams): VaultParamsProtoMsg {
    return {
      typeUrl: "/h2x.vault.VaultParams",
      value: VaultParams.encode(message).finish()
    };
  }
};
function createBaseOperatorParams(): OperatorParams {
  return {
    operator: "",
    metadata: OperatorMetadata.fromPartial({})
  };
}
export const OperatorParams = {
  typeUrl: "/h2x.vault.OperatorParams",
  encode(message: OperatorParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.metadata !== undefined) {
      OperatorMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.metadata = OperatorMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OperatorParams>): OperatorParams {
    const message = createBaseOperatorParams();
    message.operator = object.operator ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? OperatorMetadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: OperatorParamsAmino): OperatorParams {
    const message = createBaseOperatorParams();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = OperatorMetadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: OperatorParams): OperatorParamsAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.metadata = message.metadata ? OperatorMetadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: OperatorParamsAminoMsg): OperatorParams {
    return OperatorParams.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorParamsProtoMsg): OperatorParams {
    return OperatorParams.decode(message.value);
  },
  toProto(message: OperatorParams): Uint8Array {
    return OperatorParams.encode(message).finish();
  },
  toProtoMsg(message: OperatorParams): OperatorParamsProtoMsg {
    return {
      typeUrl: "/h2x.vault.OperatorParams",
      value: OperatorParams.encode(message).finish()
    };
  }
};
function createBaseOperatorMetadata(): OperatorMetadata {
  return {
    name: "",
    description: ""
  };
}
export const OperatorMetadata = {
  typeUrl: "/h2x.vault.OperatorMetadata",
  encode(message: OperatorMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OperatorMetadata>): OperatorMetadata {
    const message = createBaseOperatorMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: OperatorMetadataAmino): OperatorMetadata {
    const message = createBaseOperatorMetadata();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: OperatorMetadata): OperatorMetadataAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: OperatorMetadataAminoMsg): OperatorMetadata {
    return OperatorMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorMetadataProtoMsg): OperatorMetadata {
    return OperatorMetadata.decode(message.value);
  },
  toProto(message: OperatorMetadata): Uint8Array {
    return OperatorMetadata.encode(message).finish();
  },
  toProtoMsg(message: OperatorMetadata): OperatorMetadataProtoMsg {
    return {
      typeUrl: "/h2x.vault.OperatorMetadata",
      value: OperatorMetadata.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    layers: 0,
    spreadMinPpm: 0,
    spreadBufferPpm: 0,
    skewFactorPpm: 0,
    orderSizePctPpm: 0,
    orderExpirationSeconds: 0,
    activationThresholdQuoteQuantums: new Uint8Array()
  };
}
export const Params = {
  typeUrl: "/h2x.vault.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.layers !== 0) {
      writer.uint32(8).uint32(message.layers);
    }
    if (message.spreadMinPpm !== 0) {
      writer.uint32(16).uint32(message.spreadMinPpm);
    }
    if (message.spreadBufferPpm !== 0) {
      writer.uint32(24).uint32(message.spreadBufferPpm);
    }
    if (message.skewFactorPpm !== 0) {
      writer.uint32(32).uint32(message.skewFactorPpm);
    }
    if (message.orderSizePctPpm !== 0) {
      writer.uint32(40).uint32(message.orderSizePctPpm);
    }
    if (message.orderExpirationSeconds !== 0) {
      writer.uint32(48).uint32(message.orderExpirationSeconds);
    }
    if (message.activationThresholdQuoteQuantums.length !== 0) {
      writer.uint32(58).bytes(message.activationThresholdQuoteQuantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.layers = reader.uint32();
          break;
        case 2:
          message.spreadMinPpm = reader.uint32();
          break;
        case 3:
          message.spreadBufferPpm = reader.uint32();
          break;
        case 4:
          message.skewFactorPpm = reader.uint32();
          break;
        case 5:
          message.orderSizePctPpm = reader.uint32();
          break;
        case 6:
          message.orderExpirationSeconds = reader.uint32();
          break;
        case 7:
          message.activationThresholdQuoteQuantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.layers = object.layers ?? 0;
    message.spreadMinPpm = object.spreadMinPpm ?? 0;
    message.spreadBufferPpm = object.spreadBufferPpm ?? 0;
    message.skewFactorPpm = object.skewFactorPpm ?? 0;
    message.orderSizePctPpm = object.orderSizePctPpm ?? 0;
    message.orderExpirationSeconds = object.orderExpirationSeconds ?? 0;
    message.activationThresholdQuoteQuantums = object.activationThresholdQuoteQuantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.layers !== undefined && object.layers !== null) {
      message.layers = object.layers;
    }
    if (object.spread_min_ppm !== undefined && object.spread_min_ppm !== null) {
      message.spreadMinPpm = object.spread_min_ppm;
    }
    if (object.spread_buffer_ppm !== undefined && object.spread_buffer_ppm !== null) {
      message.spreadBufferPpm = object.spread_buffer_ppm;
    }
    if (object.skew_factor_ppm !== undefined && object.skew_factor_ppm !== null) {
      message.skewFactorPpm = object.skew_factor_ppm;
    }
    if (object.order_size_pct_ppm !== undefined && object.order_size_pct_ppm !== null) {
      message.orderSizePctPpm = object.order_size_pct_ppm;
    }
    if (object.order_expiration_seconds !== undefined && object.order_expiration_seconds !== null) {
      message.orderExpirationSeconds = object.order_expiration_seconds;
    }
    if (object.activation_threshold_quote_quantums !== undefined && object.activation_threshold_quote_quantums !== null) {
      message.activationThresholdQuoteQuantums = bytesFromBase64(object.activation_threshold_quote_quantums);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.layers = message.layers === 0 ? undefined : message.layers;
    obj.spread_min_ppm = message.spreadMinPpm === 0 ? undefined : message.spreadMinPpm;
    obj.spread_buffer_ppm = message.spreadBufferPpm === 0 ? undefined : message.spreadBufferPpm;
    obj.skew_factor_ppm = message.skewFactorPpm === 0 ? undefined : message.skewFactorPpm;
    obj.order_size_pct_ppm = message.orderSizePctPpm === 0 ? undefined : message.orderSizePctPpm;
    obj.order_expiration_seconds = message.orderExpirationSeconds === 0 ? undefined : message.orderExpirationSeconds;
    obj.activation_threshold_quote_quantums = message.activationThresholdQuoteQuantums ? base64FromBytes(message.activationThresholdQuoteQuantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/h2x.vault.Params",
      value: Params.encode(message).finish()
    };
  }
};