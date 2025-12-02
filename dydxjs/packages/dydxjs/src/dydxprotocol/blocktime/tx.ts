//@ts-nocheck
import { DowntimeParams, DowntimeParamsAmino, DowntimeParamsSDKType, SynchronyParams, SynchronyParamsAmino, SynchronyParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateDowntimeParams is the Msg/UpdateDowntimeParams request type. */
export interface MsgUpdateDowntimeParams {
  authority: string;
  /** Defines the parameters to update. All parameters must be supplied. */
  params: DowntimeParams;
}
export interface MsgUpdateDowntimeParamsProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams";
  value: Uint8Array;
}
/**
 * MsgUpdateDowntimeParams is the Msg/UpdateDowntimeParams request type.
 * @name MsgUpdateDowntimeParamsAmino
 * @package dydxprotocol.blocktime
 * @see proto type: dydxprotocol.blocktime.MsgUpdateDowntimeParams
 */
export interface MsgUpdateDowntimeParamsAmino {
  authority?: string;
  /**
   * Defines the parameters to update. All parameters must be supplied.
   */
  params?: DowntimeParamsAmino;
}
export interface MsgUpdateDowntimeParamsAminoMsg {
  type: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams";
  value: MsgUpdateDowntimeParamsAmino;
}
/** MsgUpdateDowntimeParams is the Msg/UpdateDowntimeParams request type. */
export interface MsgUpdateDowntimeParamsSDKType {
  authority: string;
  params: DowntimeParamsSDKType;
}
/**
 * MsgUpdateDowntimeParamsResponse is the Msg/UpdateDowntimeParams response
 * type.
 */
export interface MsgUpdateDowntimeParamsResponse {}
export interface MsgUpdateDowntimeParamsResponseProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateDowntimeParamsResponse is the Msg/UpdateDowntimeParams response
 * type.
 * @name MsgUpdateDowntimeParamsResponseAmino
 * @package dydxprotocol.blocktime
 * @see proto type: dydxprotocol.blocktime.MsgUpdateDowntimeParamsResponse
 */
export interface MsgUpdateDowntimeParamsResponseAmino {}
export interface MsgUpdateDowntimeParamsResponseAminoMsg {
  type: "/dydxprotocol.blocktime.MsgUpdateDowntimeParamsResponse";
  value: MsgUpdateDowntimeParamsResponseAmino;
}
/**
 * MsgUpdateDowntimeParamsResponse is the Msg/UpdateDowntimeParams response
 * type.
 */
export interface MsgUpdateDowntimeParamsResponseSDKType {}
/** MsgUpdateSynchronyParams is the Msg/UpdateSynchronyParams request type. */
export interface MsgUpdateSynchronyParams {
  authority: string;
  /** Defines the parameters to update. All parameters must be supplied. */
  params: SynchronyParams;
}
export interface MsgUpdateSynchronyParamsProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateSynchronyParams";
  value: Uint8Array;
}
/**
 * MsgUpdateSynchronyParams is the Msg/UpdateSynchronyParams request type.
 * @name MsgUpdateSynchronyParamsAmino
 * @package dydxprotocol.blocktime
 * @see proto type: dydxprotocol.blocktime.MsgUpdateSynchronyParams
 */
export interface MsgUpdateSynchronyParamsAmino {
  authority?: string;
  /**
   * Defines the parameters to update. All parameters must be supplied.
   */
  params?: SynchronyParamsAmino;
}
export interface MsgUpdateSynchronyParamsAminoMsg {
  type: "/dydxprotocol.blocktime.MsgUpdateSynchronyParams";
  value: MsgUpdateSynchronyParamsAmino;
}
/** MsgUpdateSynchronyParams is the Msg/UpdateSynchronyParams request type. */
export interface MsgUpdateSynchronyParamsSDKType {
  authority: string;
  params: SynchronyParamsSDKType;
}
/**
 * MsgUpdateSynchronyParamsResponse is the Msg/UpdateSynchronyParams response
 * type.
 */
export interface MsgUpdateSynchronyParamsResponse {}
export interface MsgUpdateSynchronyParamsResponseProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateSynchronyParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateSynchronyParamsResponse is the Msg/UpdateSynchronyParams response
 * type.
 * @name MsgUpdateSynchronyParamsResponseAmino
 * @package dydxprotocol.blocktime
 * @see proto type: dydxprotocol.blocktime.MsgUpdateSynchronyParamsResponse
 */
export interface MsgUpdateSynchronyParamsResponseAmino {}
export interface MsgUpdateSynchronyParamsResponseAminoMsg {
  type: "/dydxprotocol.blocktime.MsgUpdateSynchronyParamsResponse";
  value: MsgUpdateSynchronyParamsResponseAmino;
}
/**
 * MsgUpdateSynchronyParamsResponse is the Msg/UpdateSynchronyParams response
 * type.
 */
export interface MsgUpdateSynchronyParamsResponseSDKType {}
function createBaseMsgUpdateDowntimeParams(): MsgUpdateDowntimeParams {
  return {
    authority: "",
    params: DowntimeParams.fromPartial({})
  };
}
export const MsgUpdateDowntimeParams = {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams",
  encode(message: MsgUpdateDowntimeParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      DowntimeParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDowntimeParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDowntimeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = DowntimeParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDowntimeParams>): MsgUpdateDowntimeParams {
    const message = createBaseMsgUpdateDowntimeParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? DowntimeParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateDowntimeParamsAmino): MsgUpdateDowntimeParams {
    const message = createBaseMsgUpdateDowntimeParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = DowntimeParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateDowntimeParams): MsgUpdateDowntimeParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? DowntimeParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDowntimeParamsAminoMsg): MsgUpdateDowntimeParams {
    return MsgUpdateDowntimeParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDowntimeParamsProtoMsg): MsgUpdateDowntimeParams {
    return MsgUpdateDowntimeParams.decode(message.value);
  },
  toProto(message: MsgUpdateDowntimeParams): Uint8Array {
    return MsgUpdateDowntimeParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDowntimeParams): MsgUpdateDowntimeParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams",
      value: MsgUpdateDowntimeParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDowntimeParamsResponse(): MsgUpdateDowntimeParamsResponse {
  return {};
}
export const MsgUpdateDowntimeParamsResponse = {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParamsResponse",
  encode(_: MsgUpdateDowntimeParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDowntimeParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDowntimeParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateDowntimeParamsResponse>): MsgUpdateDowntimeParamsResponse {
    const message = createBaseMsgUpdateDowntimeParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDowntimeParamsResponseAmino): MsgUpdateDowntimeParamsResponse {
    const message = createBaseMsgUpdateDowntimeParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateDowntimeParamsResponse): MsgUpdateDowntimeParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDowntimeParamsResponseAminoMsg): MsgUpdateDowntimeParamsResponse {
    return MsgUpdateDowntimeParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDowntimeParamsResponseProtoMsg): MsgUpdateDowntimeParamsResponse {
    return MsgUpdateDowntimeParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDowntimeParamsResponse): Uint8Array {
    return MsgUpdateDowntimeParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDowntimeParamsResponse): MsgUpdateDowntimeParamsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParamsResponse",
      value: MsgUpdateDowntimeParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSynchronyParams(): MsgUpdateSynchronyParams {
  return {
    authority: "",
    params: SynchronyParams.fromPartial({})
  };
}
export const MsgUpdateSynchronyParams = {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateSynchronyParams",
  encode(message: MsgUpdateSynchronyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      SynchronyParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSynchronyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSynchronyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = SynchronyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateSynchronyParams>): MsgUpdateSynchronyParams {
    const message = createBaseMsgUpdateSynchronyParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? SynchronyParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateSynchronyParamsAmino): MsgUpdateSynchronyParams {
    const message = createBaseMsgUpdateSynchronyParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = SynchronyParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateSynchronyParams): MsgUpdateSynchronyParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? SynchronyParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSynchronyParamsAminoMsg): MsgUpdateSynchronyParams {
    return MsgUpdateSynchronyParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSynchronyParamsProtoMsg): MsgUpdateSynchronyParams {
    return MsgUpdateSynchronyParams.decode(message.value);
  },
  toProto(message: MsgUpdateSynchronyParams): Uint8Array {
    return MsgUpdateSynchronyParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSynchronyParams): MsgUpdateSynchronyParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.MsgUpdateSynchronyParams",
      value: MsgUpdateSynchronyParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSynchronyParamsResponse(): MsgUpdateSynchronyParamsResponse {
  return {};
}
export const MsgUpdateSynchronyParamsResponse = {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateSynchronyParamsResponse",
  encode(_: MsgUpdateSynchronyParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSynchronyParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSynchronyParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateSynchronyParamsResponse>): MsgUpdateSynchronyParamsResponse {
    const message = createBaseMsgUpdateSynchronyParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateSynchronyParamsResponseAmino): MsgUpdateSynchronyParamsResponse {
    const message = createBaseMsgUpdateSynchronyParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateSynchronyParamsResponse): MsgUpdateSynchronyParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSynchronyParamsResponseAminoMsg): MsgUpdateSynchronyParamsResponse {
    return MsgUpdateSynchronyParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSynchronyParamsResponseProtoMsg): MsgUpdateSynchronyParamsResponse {
    return MsgUpdateSynchronyParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSynchronyParamsResponse): Uint8Array {
    return MsgUpdateSynchronyParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSynchronyParamsResponse): MsgUpdateSynchronyParamsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.MsgUpdateSynchronyParamsResponse",
      value: MsgUpdateSynchronyParamsResponse.encode(message).finish()
    };
  }
};