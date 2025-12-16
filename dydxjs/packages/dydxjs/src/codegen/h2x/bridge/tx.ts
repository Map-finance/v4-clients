//@ts-nocheck
import { BridgeEvent, BridgeEventAmino, BridgeEventSDKType } from "./bridge_event";
import { EventParams, EventParamsAmino, EventParamsSDKType, ProposeParams, ProposeParamsAmino, ProposeParamsSDKType, SafetyParams, SafetyParamsAmino, SafetyParamsSDKType } from "./params";
import { BridgeEventInfo, BridgeEventInfoAmino, BridgeEventInfoSDKType } from "./bridge_event_info";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgAcknowledgeBridges is the Msg/AcknowledgeBridges request type. */
export interface MsgAcknowledgeBridges {
  /** The events to acknowledge. */
  events: BridgeEvent[];
}
export interface MsgAcknowledgeBridgesProtoMsg {
  typeUrl: "/h2x.bridge.MsgAcknowledgeBridges";
  value: Uint8Array;
}
/**
 * MsgAcknowledgeBridges is the Msg/AcknowledgeBridges request type.
 * @name MsgAcknowledgeBridgesAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgAcknowledgeBridges
 */
export interface MsgAcknowledgeBridgesAmino {
  /**
   * The events to acknowledge.
   */
  events?: BridgeEventAmino[];
}
export interface MsgAcknowledgeBridgesAminoMsg {
  type: "/h2x.bridge.MsgAcknowledgeBridges";
  value: MsgAcknowledgeBridgesAmino;
}
/** MsgAcknowledgeBridges is the Msg/AcknowledgeBridges request type. */
export interface MsgAcknowledgeBridgesSDKType {
  events: BridgeEventSDKType[];
}
/**
 * MsgAcknowledgeBridgesResponse is the Msg/AcknowledgeBridgesResponse response
 * type.
 */
export interface MsgAcknowledgeBridgesResponse {}
export interface MsgAcknowledgeBridgesResponseProtoMsg {
  typeUrl: "/h2x.bridge.MsgAcknowledgeBridgesResponse";
  value: Uint8Array;
}
/**
 * MsgAcknowledgeBridgesResponse is the Msg/AcknowledgeBridgesResponse response
 * type.
 * @name MsgAcknowledgeBridgesResponseAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgAcknowledgeBridgesResponse
 */
export interface MsgAcknowledgeBridgesResponseAmino {}
export interface MsgAcknowledgeBridgesResponseAminoMsg {
  type: "/h2x.bridge.MsgAcknowledgeBridgesResponse";
  value: MsgAcknowledgeBridgesResponseAmino;
}
/**
 * MsgAcknowledgeBridgesResponse is the Msg/AcknowledgeBridgesResponse response
 * type.
 */
export interface MsgAcknowledgeBridgesResponseSDKType {}
/** MsgCompleteBridge is the Msg/CompleteBridgeResponse request type. */
export interface MsgCompleteBridge {
  authority: string;
  /** The event to complete. */
  event: BridgeEvent;
}
export interface MsgCompleteBridgeProtoMsg {
  typeUrl: "/h2x.bridge.MsgCompleteBridge";
  value: Uint8Array;
}
/**
 * MsgCompleteBridge is the Msg/CompleteBridgeResponse request type.
 * @name MsgCompleteBridgeAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgCompleteBridge
 */
export interface MsgCompleteBridgeAmino {
  authority?: string;
  /**
   * The event to complete.
   */
  event?: BridgeEventAmino;
}
export interface MsgCompleteBridgeAminoMsg {
  type: "/h2x.bridge.MsgCompleteBridge";
  value: MsgCompleteBridgeAmino;
}
/** MsgCompleteBridge is the Msg/CompleteBridgeResponse request type. */
export interface MsgCompleteBridgeSDKType {
  authority: string;
  event: BridgeEventSDKType;
}
/** MsgCompleteBridgeResponse is the Msg/CompleteBridgeResponse response type. */
export interface MsgCompleteBridgeResponse {}
export interface MsgCompleteBridgeResponseProtoMsg {
  typeUrl: "/h2x.bridge.MsgCompleteBridgeResponse";
  value: Uint8Array;
}
/**
 * MsgCompleteBridgeResponse is the Msg/CompleteBridgeResponse response type.
 * @name MsgCompleteBridgeResponseAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgCompleteBridgeResponse
 */
export interface MsgCompleteBridgeResponseAmino {}
export interface MsgCompleteBridgeResponseAminoMsg {
  type: "/h2x.bridge.MsgCompleteBridgeResponse";
  value: MsgCompleteBridgeResponseAmino;
}
/** MsgCompleteBridgeResponse is the Msg/CompleteBridgeResponse response type. */
export interface MsgCompleteBridgeResponseSDKType {}
/** MsgUpdateEventParams is the Msg/UpdateEventParams request type. */
export interface MsgUpdateEventParams {
  authority: string;
  /** The parameters to update. Each field must be set. */
  params: EventParams;
}
export interface MsgUpdateEventParamsProtoMsg {
  typeUrl: "/h2x.bridge.MsgUpdateEventParams";
  value: Uint8Array;
}
/**
 * MsgUpdateEventParams is the Msg/UpdateEventParams request type.
 * @name MsgUpdateEventParamsAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgUpdateEventParams
 */
export interface MsgUpdateEventParamsAmino {
  authority?: string;
  /**
   * The parameters to update. Each field must be set.
   */
  params?: EventParamsAmino;
}
export interface MsgUpdateEventParamsAminoMsg {
  type: "/h2x.bridge.MsgUpdateEventParams";
  value: MsgUpdateEventParamsAmino;
}
/** MsgUpdateEventParams is the Msg/UpdateEventParams request type. */
export interface MsgUpdateEventParamsSDKType {
  authority: string;
  params: EventParamsSDKType;
}
/** MsgUpdateEventParamsResponse is the Msg/UpdateEventParams response type. */
export interface MsgUpdateEventParamsResponse {}
export interface MsgUpdateEventParamsResponseProtoMsg {
  typeUrl: "/h2x.bridge.MsgUpdateEventParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateEventParamsResponse is the Msg/UpdateEventParams response type.
 * @name MsgUpdateEventParamsResponseAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgUpdateEventParamsResponse
 */
export interface MsgUpdateEventParamsResponseAmino {}
export interface MsgUpdateEventParamsResponseAminoMsg {
  type: "/h2x.bridge.MsgUpdateEventParamsResponse";
  value: MsgUpdateEventParamsResponseAmino;
}
/** MsgUpdateEventParamsResponse is the Msg/UpdateEventParams response type. */
export interface MsgUpdateEventParamsResponseSDKType {}
/** MsgUpdateProposeParams is the Msg/UpdateProposeParams request type. */
export interface MsgUpdateProposeParams {
  authority: string;
  /** The parameters to update. Each field must be set. */
  params: ProposeParams;
}
export interface MsgUpdateProposeParamsProtoMsg {
  typeUrl: "/h2x.bridge.MsgUpdateProposeParams";
  value: Uint8Array;
}
/**
 * MsgUpdateProposeParams is the Msg/UpdateProposeParams request type.
 * @name MsgUpdateProposeParamsAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgUpdateProposeParams
 */
export interface MsgUpdateProposeParamsAmino {
  authority?: string;
  /**
   * The parameters to update. Each field must be set.
   */
  params?: ProposeParamsAmino;
}
export interface MsgUpdateProposeParamsAminoMsg {
  type: "/h2x.bridge.MsgUpdateProposeParams";
  value: MsgUpdateProposeParamsAmino;
}
/** MsgUpdateProposeParams is the Msg/UpdateProposeParams request type. */
export interface MsgUpdateProposeParamsSDKType {
  authority: string;
  params: ProposeParamsSDKType;
}
/** MsgUpdateProposeParamsResponse is the Msg/UpdateProposeParams response type. */
export interface MsgUpdateProposeParamsResponse {}
export interface MsgUpdateProposeParamsResponseProtoMsg {
  typeUrl: "/h2x.bridge.MsgUpdateProposeParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateProposeParamsResponse is the Msg/UpdateProposeParams response type.
 * @name MsgUpdateProposeParamsResponseAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgUpdateProposeParamsResponse
 */
export interface MsgUpdateProposeParamsResponseAmino {}
export interface MsgUpdateProposeParamsResponseAminoMsg {
  type: "/h2x.bridge.MsgUpdateProposeParamsResponse";
  value: MsgUpdateProposeParamsResponseAmino;
}
/** MsgUpdateProposeParamsResponse is the Msg/UpdateProposeParams response type. */
export interface MsgUpdateProposeParamsResponseSDKType {}
/** MsgUpdateSafetyParams is the Msg/UpdateSafetyParams request type. */
export interface MsgUpdateSafetyParams {
  authority: string;
  /** The parameters to update. Each field must be set. */
  params: SafetyParams;
}
export interface MsgUpdateSafetyParamsProtoMsg {
  typeUrl: "/h2x.bridge.MsgUpdateSafetyParams";
  value: Uint8Array;
}
/**
 * MsgUpdateSafetyParams is the Msg/UpdateSafetyParams request type.
 * @name MsgUpdateSafetyParamsAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgUpdateSafetyParams
 */
export interface MsgUpdateSafetyParamsAmino {
  authority?: string;
  /**
   * The parameters to update. Each field must be set.
   */
  params?: SafetyParamsAmino;
}
export interface MsgUpdateSafetyParamsAminoMsg {
  type: "/h2x.bridge.MsgUpdateSafetyParams";
  value: MsgUpdateSafetyParamsAmino;
}
/** MsgUpdateSafetyParams is the Msg/UpdateSafetyParams request type. */
export interface MsgUpdateSafetyParamsSDKType {
  authority: string;
  params: SafetyParamsSDKType;
}
/** MsgUpdateSafetyParamsResponse is the Msg/UpdateSafetyParams response type. */
export interface MsgUpdateSafetyParamsResponse {}
export interface MsgUpdateSafetyParamsResponseProtoMsg {
  typeUrl: "/h2x.bridge.MsgUpdateSafetyParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateSafetyParamsResponse is the Msg/UpdateSafetyParams response type.
 * @name MsgUpdateSafetyParamsResponseAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgUpdateSafetyParamsResponse
 */
export interface MsgUpdateSafetyParamsResponseAmino {}
export interface MsgUpdateSafetyParamsResponseAminoMsg {
  type: "/h2x.bridge.MsgUpdateSafetyParamsResponse";
  value: MsgUpdateSafetyParamsResponseAmino;
}
/** MsgUpdateSafetyParamsResponse is the Msg/UpdateSafetyParams response type. */
export interface MsgUpdateSafetyParamsResponseSDKType {}
/**
 * MsgUpdateAcknowledgedEventInfo is the Msg/UpdateAcknowledgedEventInfo request
 * type.
 */
export interface MsgUpdateAcknowledgedEventInfo {
  authority: string;
  /** The event info to update. Each field must be set. */
  eventInfo: BridgeEventInfo;
}
export interface MsgUpdateAcknowledgedEventInfoProtoMsg {
  typeUrl: "/h2x.bridge.MsgUpdateAcknowledgedEventInfo";
  value: Uint8Array;
}
/**
 * MsgUpdateAcknowledgedEventInfo is the Msg/UpdateAcknowledgedEventInfo request
 * type.
 * @name MsgUpdateAcknowledgedEventInfoAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgUpdateAcknowledgedEventInfo
 */
export interface MsgUpdateAcknowledgedEventInfoAmino {
  authority?: string;
  /**
   * The event info to update. Each field must be set.
   */
  event_info?: BridgeEventInfoAmino;
}
export interface MsgUpdateAcknowledgedEventInfoAminoMsg {
  type: "/h2x.bridge.MsgUpdateAcknowledgedEventInfo";
  value: MsgUpdateAcknowledgedEventInfoAmino;
}
/**
 * MsgUpdateAcknowledgedEventInfo is the Msg/UpdateAcknowledgedEventInfo request
 * type.
 */
export interface MsgUpdateAcknowledgedEventInfoSDKType {
  authority: string;
  event_info: BridgeEventInfoSDKType;
}
/**
 * MsgUpdateAcknowledgedEventInfoResponse is the Msg/UpdateAcknowledgedEventInfo
 * response type.
 */
export interface MsgUpdateAcknowledgedEventInfoResponse {}
export interface MsgUpdateAcknowledgedEventInfoResponseProtoMsg {
  typeUrl: "/h2x.bridge.MsgUpdateAcknowledgedEventInfoResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateAcknowledgedEventInfoResponse is the Msg/UpdateAcknowledgedEventInfo
 * response type.
 * @name MsgUpdateAcknowledgedEventInfoResponseAmino
 * @package h2x.bridge
 * @see proto type: h2x.bridge.MsgUpdateAcknowledgedEventInfoResponse
 */
export interface MsgUpdateAcknowledgedEventInfoResponseAmino {}
export interface MsgUpdateAcknowledgedEventInfoResponseAminoMsg {
  type: "/h2x.bridge.MsgUpdateAcknowledgedEventInfoResponse";
  value: MsgUpdateAcknowledgedEventInfoResponseAmino;
}
/**
 * MsgUpdateAcknowledgedEventInfoResponse is the Msg/UpdateAcknowledgedEventInfo
 * response type.
 */
export interface MsgUpdateAcknowledgedEventInfoResponseSDKType {}
function createBaseMsgAcknowledgeBridges(): MsgAcknowledgeBridges {
  return {
    events: []
  };
}
export const MsgAcknowledgeBridges = {
  typeUrl: "/h2x.bridge.MsgAcknowledgeBridges",
  encode(message: MsgAcknowledgeBridges, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      BridgeEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgeBridges {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgeBridges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(BridgeEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAcknowledgeBridges>): MsgAcknowledgeBridges {
    const message = createBaseMsgAcknowledgeBridges();
    message.events = object.events?.map(e => BridgeEvent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAcknowledgeBridgesAmino): MsgAcknowledgeBridges {
    const message = createBaseMsgAcknowledgeBridges();
    message.events = object.events?.map(e => BridgeEvent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAcknowledgeBridges): MsgAcknowledgeBridgesAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? BridgeEvent.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgeBridgesAminoMsg): MsgAcknowledgeBridges {
    return MsgAcknowledgeBridges.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcknowledgeBridgesProtoMsg): MsgAcknowledgeBridges {
    return MsgAcknowledgeBridges.decode(message.value);
  },
  toProto(message: MsgAcknowledgeBridges): Uint8Array {
    return MsgAcknowledgeBridges.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgeBridges): MsgAcknowledgeBridgesProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgAcknowledgeBridges",
      value: MsgAcknowledgeBridges.encode(message).finish()
    };
  }
};
function createBaseMsgAcknowledgeBridgesResponse(): MsgAcknowledgeBridgesResponse {
  return {};
}
export const MsgAcknowledgeBridgesResponse = {
  typeUrl: "/h2x.bridge.MsgAcknowledgeBridgesResponse",
  encode(_: MsgAcknowledgeBridgesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgeBridgesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgeBridgesResponse();
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
  fromPartial(_: Partial<MsgAcknowledgeBridgesResponse>): MsgAcknowledgeBridgesResponse {
    const message = createBaseMsgAcknowledgeBridgesResponse();
    return message;
  },
  fromAmino(_: MsgAcknowledgeBridgesResponseAmino): MsgAcknowledgeBridgesResponse {
    const message = createBaseMsgAcknowledgeBridgesResponse();
    return message;
  },
  toAmino(_: MsgAcknowledgeBridgesResponse): MsgAcknowledgeBridgesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgeBridgesResponseAminoMsg): MsgAcknowledgeBridgesResponse {
    return MsgAcknowledgeBridgesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcknowledgeBridgesResponseProtoMsg): MsgAcknowledgeBridgesResponse {
    return MsgAcknowledgeBridgesResponse.decode(message.value);
  },
  toProto(message: MsgAcknowledgeBridgesResponse): Uint8Array {
    return MsgAcknowledgeBridgesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgeBridgesResponse): MsgAcknowledgeBridgesResponseProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgAcknowledgeBridgesResponse",
      value: MsgAcknowledgeBridgesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteBridge(): MsgCompleteBridge {
  return {
    authority: "",
    event: BridgeEvent.fromPartial({})
  };
}
export const MsgCompleteBridge = {
  typeUrl: "/h2x.bridge.MsgCompleteBridge",
  encode(message: MsgCompleteBridge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.event !== undefined) {
      BridgeEvent.encode(message.event, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteBridge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.event = BridgeEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCompleteBridge>): MsgCompleteBridge {
    const message = createBaseMsgCompleteBridge();
    message.authority = object.authority ?? "";
    message.event = object.event !== undefined && object.event !== null ? BridgeEvent.fromPartial(object.event) : undefined;
    return message;
  },
  fromAmino(object: MsgCompleteBridgeAmino): MsgCompleteBridge {
    const message = createBaseMsgCompleteBridge();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.event !== undefined && object.event !== null) {
      message.event = BridgeEvent.fromAmino(object.event);
    }
    return message;
  },
  toAmino(message: MsgCompleteBridge): MsgCompleteBridgeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.event = message.event ? BridgeEvent.toAmino(message.event) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCompleteBridgeAminoMsg): MsgCompleteBridge {
    return MsgCompleteBridge.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteBridgeProtoMsg): MsgCompleteBridge {
    return MsgCompleteBridge.decode(message.value);
  },
  toProto(message: MsgCompleteBridge): Uint8Array {
    return MsgCompleteBridge.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteBridge): MsgCompleteBridgeProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgCompleteBridge",
      value: MsgCompleteBridge.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteBridgeResponse(): MsgCompleteBridgeResponse {
  return {};
}
export const MsgCompleteBridgeResponse = {
  typeUrl: "/h2x.bridge.MsgCompleteBridgeResponse",
  encode(_: MsgCompleteBridgeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteBridgeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteBridgeResponse();
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
  fromPartial(_: Partial<MsgCompleteBridgeResponse>): MsgCompleteBridgeResponse {
    const message = createBaseMsgCompleteBridgeResponse();
    return message;
  },
  fromAmino(_: MsgCompleteBridgeResponseAmino): MsgCompleteBridgeResponse {
    const message = createBaseMsgCompleteBridgeResponse();
    return message;
  },
  toAmino(_: MsgCompleteBridgeResponse): MsgCompleteBridgeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCompleteBridgeResponseAminoMsg): MsgCompleteBridgeResponse {
    return MsgCompleteBridgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteBridgeResponseProtoMsg): MsgCompleteBridgeResponse {
    return MsgCompleteBridgeResponse.decode(message.value);
  },
  toProto(message: MsgCompleteBridgeResponse): Uint8Array {
    return MsgCompleteBridgeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteBridgeResponse): MsgCompleteBridgeResponseProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgCompleteBridgeResponse",
      value: MsgCompleteBridgeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateEventParams(): MsgUpdateEventParams {
  return {
    authority: "",
    params: EventParams.fromPartial({})
  };
}
export const MsgUpdateEventParams = {
  typeUrl: "/h2x.bridge.MsgUpdateEventParams",
  encode(message: MsgUpdateEventParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      EventParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEventParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEventParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = EventParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateEventParams>): MsgUpdateEventParams {
    const message = createBaseMsgUpdateEventParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? EventParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateEventParamsAmino): MsgUpdateEventParams {
    const message = createBaseMsgUpdateEventParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = EventParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateEventParams): MsgUpdateEventParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? EventParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEventParamsAminoMsg): MsgUpdateEventParams {
    return MsgUpdateEventParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateEventParamsProtoMsg): MsgUpdateEventParams {
    return MsgUpdateEventParams.decode(message.value);
  },
  toProto(message: MsgUpdateEventParams): Uint8Array {
    return MsgUpdateEventParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEventParams): MsgUpdateEventParamsProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgUpdateEventParams",
      value: MsgUpdateEventParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateEventParamsResponse(): MsgUpdateEventParamsResponse {
  return {};
}
export const MsgUpdateEventParamsResponse = {
  typeUrl: "/h2x.bridge.MsgUpdateEventParamsResponse",
  encode(_: MsgUpdateEventParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEventParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEventParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateEventParamsResponse>): MsgUpdateEventParamsResponse {
    const message = createBaseMsgUpdateEventParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateEventParamsResponseAmino): MsgUpdateEventParamsResponse {
    const message = createBaseMsgUpdateEventParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateEventParamsResponse): MsgUpdateEventParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEventParamsResponseAminoMsg): MsgUpdateEventParamsResponse {
    return MsgUpdateEventParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateEventParamsResponseProtoMsg): MsgUpdateEventParamsResponse {
    return MsgUpdateEventParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateEventParamsResponse): Uint8Array {
    return MsgUpdateEventParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEventParamsResponse): MsgUpdateEventParamsResponseProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgUpdateEventParamsResponse",
      value: MsgUpdateEventParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProposeParams(): MsgUpdateProposeParams {
  return {
    authority: "",
    params: ProposeParams.fromPartial({})
  };
}
export const MsgUpdateProposeParams = {
  typeUrl: "/h2x.bridge.MsgUpdateProposeParams",
  encode(message: MsgUpdateProposeParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ProposeParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProposeParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProposeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = ProposeParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateProposeParams>): MsgUpdateProposeParams {
    const message = createBaseMsgUpdateProposeParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? ProposeParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateProposeParamsAmino): MsgUpdateProposeParams {
    const message = createBaseMsgUpdateProposeParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = ProposeParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateProposeParams): MsgUpdateProposeParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? ProposeParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProposeParamsAminoMsg): MsgUpdateProposeParams {
    return MsgUpdateProposeParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProposeParamsProtoMsg): MsgUpdateProposeParams {
    return MsgUpdateProposeParams.decode(message.value);
  },
  toProto(message: MsgUpdateProposeParams): Uint8Array {
    return MsgUpdateProposeParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProposeParams): MsgUpdateProposeParamsProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgUpdateProposeParams",
      value: MsgUpdateProposeParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProposeParamsResponse(): MsgUpdateProposeParamsResponse {
  return {};
}
export const MsgUpdateProposeParamsResponse = {
  typeUrl: "/h2x.bridge.MsgUpdateProposeParamsResponse",
  encode(_: MsgUpdateProposeParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProposeParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProposeParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateProposeParamsResponse>): MsgUpdateProposeParamsResponse {
    const message = createBaseMsgUpdateProposeParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateProposeParamsResponseAmino): MsgUpdateProposeParamsResponse {
    const message = createBaseMsgUpdateProposeParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateProposeParamsResponse): MsgUpdateProposeParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProposeParamsResponseAminoMsg): MsgUpdateProposeParamsResponse {
    return MsgUpdateProposeParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProposeParamsResponseProtoMsg): MsgUpdateProposeParamsResponse {
    return MsgUpdateProposeParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateProposeParamsResponse): Uint8Array {
    return MsgUpdateProposeParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProposeParamsResponse): MsgUpdateProposeParamsResponseProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgUpdateProposeParamsResponse",
      value: MsgUpdateProposeParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSafetyParams(): MsgUpdateSafetyParams {
  return {
    authority: "",
    params: SafetyParams.fromPartial({})
  };
}
export const MsgUpdateSafetyParams = {
  typeUrl: "/h2x.bridge.MsgUpdateSafetyParams",
  encode(message: MsgUpdateSafetyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      SafetyParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSafetyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSafetyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = SafetyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateSafetyParams>): MsgUpdateSafetyParams {
    const message = createBaseMsgUpdateSafetyParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? SafetyParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateSafetyParamsAmino): MsgUpdateSafetyParams {
    const message = createBaseMsgUpdateSafetyParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = SafetyParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateSafetyParams): MsgUpdateSafetyParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? SafetyParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSafetyParamsAminoMsg): MsgUpdateSafetyParams {
    return MsgUpdateSafetyParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSafetyParamsProtoMsg): MsgUpdateSafetyParams {
    return MsgUpdateSafetyParams.decode(message.value);
  },
  toProto(message: MsgUpdateSafetyParams): Uint8Array {
    return MsgUpdateSafetyParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSafetyParams): MsgUpdateSafetyParamsProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgUpdateSafetyParams",
      value: MsgUpdateSafetyParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSafetyParamsResponse(): MsgUpdateSafetyParamsResponse {
  return {};
}
export const MsgUpdateSafetyParamsResponse = {
  typeUrl: "/h2x.bridge.MsgUpdateSafetyParamsResponse",
  encode(_: MsgUpdateSafetyParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSafetyParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSafetyParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateSafetyParamsResponse>): MsgUpdateSafetyParamsResponse {
    const message = createBaseMsgUpdateSafetyParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateSafetyParamsResponseAmino): MsgUpdateSafetyParamsResponse {
    const message = createBaseMsgUpdateSafetyParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateSafetyParamsResponse): MsgUpdateSafetyParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSafetyParamsResponseAminoMsg): MsgUpdateSafetyParamsResponse {
    return MsgUpdateSafetyParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSafetyParamsResponseProtoMsg): MsgUpdateSafetyParamsResponse {
    return MsgUpdateSafetyParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSafetyParamsResponse): Uint8Array {
    return MsgUpdateSafetyParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSafetyParamsResponse): MsgUpdateSafetyParamsResponseProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgUpdateSafetyParamsResponse",
      value: MsgUpdateSafetyParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAcknowledgedEventInfo(): MsgUpdateAcknowledgedEventInfo {
  return {
    authority: "",
    eventInfo: BridgeEventInfo.fromPartial({})
  };
}
export const MsgUpdateAcknowledgedEventInfo = {
  typeUrl: "/h2x.bridge.MsgUpdateAcknowledgedEventInfo",
  encode(message: MsgUpdateAcknowledgedEventInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.eventInfo !== undefined) {
      BridgeEventInfo.encode(message.eventInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAcknowledgedEventInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAcknowledgedEventInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.eventInfo = BridgeEventInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAcknowledgedEventInfo>): MsgUpdateAcknowledgedEventInfo {
    const message = createBaseMsgUpdateAcknowledgedEventInfo();
    message.authority = object.authority ?? "";
    message.eventInfo = object.eventInfo !== undefined && object.eventInfo !== null ? BridgeEventInfo.fromPartial(object.eventInfo) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAcknowledgedEventInfoAmino): MsgUpdateAcknowledgedEventInfo {
    const message = createBaseMsgUpdateAcknowledgedEventInfo();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.event_info !== undefined && object.event_info !== null) {
      message.eventInfo = BridgeEventInfo.fromAmino(object.event_info);
    }
    return message;
  },
  toAmino(message: MsgUpdateAcknowledgedEventInfo): MsgUpdateAcknowledgedEventInfoAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.event_info = message.eventInfo ? BridgeEventInfo.toAmino(message.eventInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAcknowledgedEventInfoAminoMsg): MsgUpdateAcknowledgedEventInfo {
    return MsgUpdateAcknowledgedEventInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAcknowledgedEventInfoProtoMsg): MsgUpdateAcknowledgedEventInfo {
    return MsgUpdateAcknowledgedEventInfo.decode(message.value);
  },
  toProto(message: MsgUpdateAcknowledgedEventInfo): Uint8Array {
    return MsgUpdateAcknowledgedEventInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAcknowledgedEventInfo): MsgUpdateAcknowledgedEventInfoProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgUpdateAcknowledgedEventInfo",
      value: MsgUpdateAcknowledgedEventInfo.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAcknowledgedEventInfoResponse(): MsgUpdateAcknowledgedEventInfoResponse {
  return {};
}
export const MsgUpdateAcknowledgedEventInfoResponse = {
  typeUrl: "/h2x.bridge.MsgUpdateAcknowledgedEventInfoResponse",
  encode(_: MsgUpdateAcknowledgedEventInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAcknowledgedEventInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAcknowledgedEventInfoResponse();
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
  fromPartial(_: Partial<MsgUpdateAcknowledgedEventInfoResponse>): MsgUpdateAcknowledgedEventInfoResponse {
    const message = createBaseMsgUpdateAcknowledgedEventInfoResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAcknowledgedEventInfoResponseAmino): MsgUpdateAcknowledgedEventInfoResponse {
    const message = createBaseMsgUpdateAcknowledgedEventInfoResponse();
    return message;
  },
  toAmino(_: MsgUpdateAcknowledgedEventInfoResponse): MsgUpdateAcknowledgedEventInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAcknowledgedEventInfoResponseAminoMsg): MsgUpdateAcknowledgedEventInfoResponse {
    return MsgUpdateAcknowledgedEventInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAcknowledgedEventInfoResponseProtoMsg): MsgUpdateAcknowledgedEventInfoResponse {
    return MsgUpdateAcknowledgedEventInfoResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAcknowledgedEventInfoResponse): Uint8Array {
    return MsgUpdateAcknowledgedEventInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAcknowledgedEventInfoResponse): MsgUpdateAcknowledgedEventInfoResponseProtoMsg {
    return {
      typeUrl: "/h2x.bridge.MsgUpdateAcknowledgedEventInfoResponse",
      value: MsgUpdateAcknowledgedEventInfoResponse.encode(message).finish()
    };
  }
};