//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * IsSmartAccountActive defines the state of the authenticator.
   * If set to false, the authenticator module will not be used
   * and the classic cosmos sdk authentication will be used instead.
   */
  isSmartAccountActive: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/dydxprotocol.accountplus.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package dydxprotocol.accountplus
 * @see proto type: dydxprotocol.accountplus.Params
 */
export interface ParamsAmino {
  /**
   * IsSmartAccountActive defines the state of the authenticator.
   * If set to false, the authenticator module will not be used
   * and the classic cosmos sdk authentication will be used instead.
   */
  is_smart_account_active?: boolean;
}
export interface ParamsAminoMsg {
  type: "/dydxprotocol.accountplus.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  is_smart_account_active: boolean;
}
function createBaseParams(): Params {
  return {
    isSmartAccountActive: false
  };
}
export const Params = {
  typeUrl: "/dydxprotocol.accountplus.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isSmartAccountActive === true) {
      writer.uint32(8).bool(message.isSmartAccountActive);
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
          message.isSmartAccountActive = reader.bool();
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
    message.isSmartAccountActive = object.isSmartAccountActive ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.is_smart_account_active !== undefined && object.is_smart_account_active !== null) {
      message.isSmartAccountActive = object.is_smart_account_active;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.is_smart_account_active = message.isSmartAccountActive === false ? undefined : message.isSmartAccountActive;
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
      typeUrl: "/dydxprotocol.accountplus.Params",
      value: Params.encode(message).finish()
    };
  }
};