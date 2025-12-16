//@ts-nocheck
import { AffiliateTiers, AffiliateTiersAmino, AffiliateTiersSDKType } from "./affiliates";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines generis state of `x/affiliates` */
export interface GenesisState {
  /** The list of affiliate tiers */
  affiliateTiers: AffiliateTiers;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/h2x.affiliates.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines generis state of `x/affiliates`
 * @name GenesisStateAmino
 * @package h2x.affiliates
 * @see proto type: h2x.affiliates.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * The list of affiliate tiers
   */
  affiliate_tiers?: AffiliateTiersAmino;
}
export interface GenesisStateAminoMsg {
  type: "/h2x.affiliates.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines generis state of `x/affiliates` */
export interface GenesisStateSDKType {
  affiliate_tiers: AffiliateTiersSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    affiliateTiers: AffiliateTiers.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/h2x.affiliates.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.affiliateTiers !== undefined) {
      AffiliateTiers.encode(message.affiliateTiers, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.affiliateTiers = AffiliateTiers.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.affiliateTiers = object.affiliateTiers !== undefined && object.affiliateTiers !== null ? AffiliateTiers.fromPartial(object.affiliateTiers) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.affiliate_tiers !== undefined && object.affiliate_tiers !== null) {
      message.affiliateTiers = AffiliateTiers.fromAmino(object.affiliate_tiers);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.affiliate_tiers = message.affiliateTiers ? AffiliateTiers.toAmino(message.affiliateTiers) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/h2x.affiliates.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};