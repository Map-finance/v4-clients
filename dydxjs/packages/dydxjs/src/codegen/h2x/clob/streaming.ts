//@ts-nocheck
import { StreamOrderbookFill, StreamOrderbookFillAmino, StreamOrderbookFillSDKType, StreamOrderbookUpdate, StreamOrderbookUpdateAmino, StreamOrderbookUpdateSDKType } from "./query";
import { StreamSubaccountUpdate, StreamSubaccountUpdateAmino, StreamSubaccountUpdateSDKType } from "../subaccounts/streaming";
import { StreamPriceUpdate, StreamPriceUpdateAmino, StreamPriceUpdateSDKType } from "../prices/streaming";
import { BinaryReader, BinaryWriter } from "../../binary";
/** StagedFinalizeBlockEvent is an event staged during `FinalizeBlock`. */
export interface StagedFinalizeBlockEvent {
  orderFill?: StreamOrderbookFill;
  subaccountUpdate?: StreamSubaccountUpdate;
  orderbookUpdate?: StreamOrderbookUpdate;
  priceUpdate?: StreamPriceUpdate;
}
export interface StagedFinalizeBlockEventProtoMsg {
  typeUrl: "/h2x.clob.StagedFinalizeBlockEvent";
  value: Uint8Array;
}
/**
 * StagedFinalizeBlockEvent is an event staged during `FinalizeBlock`.
 * @name StagedFinalizeBlockEventAmino
 * @package h2x.clob
 * @see proto type: h2x.clob.StagedFinalizeBlockEvent
 */
export interface StagedFinalizeBlockEventAmino {
  order_fill?: StreamOrderbookFillAmino;
  subaccount_update?: StreamSubaccountUpdateAmino;
  orderbook_update?: StreamOrderbookUpdateAmino;
  price_update?: StreamPriceUpdateAmino;
}
export interface StagedFinalizeBlockEventAminoMsg {
  type: "/h2x.clob.StagedFinalizeBlockEvent";
  value: StagedFinalizeBlockEventAmino;
}
/** StagedFinalizeBlockEvent is an event staged during `FinalizeBlock`. */
export interface StagedFinalizeBlockEventSDKType {
  order_fill?: StreamOrderbookFillSDKType;
  subaccount_update?: StreamSubaccountUpdateSDKType;
  orderbook_update?: StreamOrderbookUpdateSDKType;
  price_update?: StreamPriceUpdateSDKType;
}
function createBaseStagedFinalizeBlockEvent(): StagedFinalizeBlockEvent {
  return {
    orderFill: undefined,
    subaccountUpdate: undefined,
    orderbookUpdate: undefined,
    priceUpdate: undefined
  };
}
export const StagedFinalizeBlockEvent = {
  typeUrl: "/h2x.clob.StagedFinalizeBlockEvent",
  encode(message: StagedFinalizeBlockEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderFill !== undefined) {
      StreamOrderbookFill.encode(message.orderFill, writer.uint32(10).fork()).ldelim();
    }
    if (message.subaccountUpdate !== undefined) {
      StreamSubaccountUpdate.encode(message.subaccountUpdate, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderbookUpdate !== undefined) {
      StreamOrderbookUpdate.encode(message.orderbookUpdate, writer.uint32(26).fork()).ldelim();
    }
    if (message.priceUpdate !== undefined) {
      StreamPriceUpdate.encode(message.priceUpdate, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StagedFinalizeBlockEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStagedFinalizeBlockEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderFill = StreamOrderbookFill.decode(reader, reader.uint32());
          break;
        case 2:
          message.subaccountUpdate = StreamSubaccountUpdate.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderbookUpdate = StreamOrderbookUpdate.decode(reader, reader.uint32());
          break;
        case 4:
          message.priceUpdate = StreamPriceUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StagedFinalizeBlockEvent>): StagedFinalizeBlockEvent {
    const message = createBaseStagedFinalizeBlockEvent();
    message.orderFill = object.orderFill !== undefined && object.orderFill !== null ? StreamOrderbookFill.fromPartial(object.orderFill) : undefined;
    message.subaccountUpdate = object.subaccountUpdate !== undefined && object.subaccountUpdate !== null ? StreamSubaccountUpdate.fromPartial(object.subaccountUpdate) : undefined;
    message.orderbookUpdate = object.orderbookUpdate !== undefined && object.orderbookUpdate !== null ? StreamOrderbookUpdate.fromPartial(object.orderbookUpdate) : undefined;
    message.priceUpdate = object.priceUpdate !== undefined && object.priceUpdate !== null ? StreamPriceUpdate.fromPartial(object.priceUpdate) : undefined;
    return message;
  },
  fromAmino(object: StagedFinalizeBlockEventAmino): StagedFinalizeBlockEvent {
    const message = createBaseStagedFinalizeBlockEvent();
    if (object.order_fill !== undefined && object.order_fill !== null) {
      message.orderFill = StreamOrderbookFill.fromAmino(object.order_fill);
    }
    if (object.subaccount_update !== undefined && object.subaccount_update !== null) {
      message.subaccountUpdate = StreamSubaccountUpdate.fromAmino(object.subaccount_update);
    }
    if (object.orderbook_update !== undefined && object.orderbook_update !== null) {
      message.orderbookUpdate = StreamOrderbookUpdate.fromAmino(object.orderbook_update);
    }
    if (object.price_update !== undefined && object.price_update !== null) {
      message.priceUpdate = StreamPriceUpdate.fromAmino(object.price_update);
    }
    return message;
  },
  toAmino(message: StagedFinalizeBlockEvent): StagedFinalizeBlockEventAmino {
    const obj: any = {};
    obj.order_fill = message.orderFill ? StreamOrderbookFill.toAmino(message.orderFill) : undefined;
    obj.subaccount_update = message.subaccountUpdate ? StreamSubaccountUpdate.toAmino(message.subaccountUpdate) : undefined;
    obj.orderbook_update = message.orderbookUpdate ? StreamOrderbookUpdate.toAmino(message.orderbookUpdate) : undefined;
    obj.price_update = message.priceUpdate ? StreamPriceUpdate.toAmino(message.priceUpdate) : undefined;
    return obj;
  },
  fromAminoMsg(object: StagedFinalizeBlockEventAminoMsg): StagedFinalizeBlockEvent {
    return StagedFinalizeBlockEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: StagedFinalizeBlockEventProtoMsg): StagedFinalizeBlockEvent {
    return StagedFinalizeBlockEvent.decode(message.value);
  },
  toProto(message: StagedFinalizeBlockEvent): Uint8Array {
    return StagedFinalizeBlockEvent.encode(message).finish();
  },
  toProtoMsg(message: StagedFinalizeBlockEvent): StagedFinalizeBlockEventProtoMsg {
    return {
      typeUrl: "/h2x.clob.StagedFinalizeBlockEvent",
      value: StagedFinalizeBlockEvent.encode(message).finish()
    };
  }
};