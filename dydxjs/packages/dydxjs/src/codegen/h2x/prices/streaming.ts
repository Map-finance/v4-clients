//@ts-nocheck
import { MarketPrice, MarketPriceAmino, MarketPriceSDKType } from "./market_price";
import { BinaryReader, BinaryWriter } from "../../binary";
/** StreamPriceUpdate provides information on a price update. */
export interface StreamPriceUpdate {
  /** The `Id` of the `Market`. */
  marketId: number;
  /** The updated price. */
  price: MarketPrice;
  /** Snapshot indicates if the response is from a snapshot of the price. */
  snapshot: boolean;
}
export interface StreamPriceUpdateProtoMsg {
  typeUrl: "/h2x.prices.StreamPriceUpdate";
  value: Uint8Array;
}
/**
 * StreamPriceUpdate provides information on a price update.
 * @name StreamPriceUpdateAmino
 * @package h2x.prices
 * @see proto type: h2x.prices.StreamPriceUpdate
 */
export interface StreamPriceUpdateAmino {
  /**
   * The `Id` of the `Market`.
   */
  market_id?: number;
  /**
   * The updated price.
   */
  price?: MarketPriceAmino;
  /**
   * Snapshot indicates if the response is from a snapshot of the price.
   */
  snapshot?: boolean;
}
export interface StreamPriceUpdateAminoMsg {
  type: "/h2x.prices.StreamPriceUpdate";
  value: StreamPriceUpdateAmino;
}
/** StreamPriceUpdate provides information on a price update. */
export interface StreamPriceUpdateSDKType {
  market_id: number;
  price: MarketPriceSDKType;
  snapshot: boolean;
}
function createBaseStreamPriceUpdate(): StreamPriceUpdate {
  return {
    marketId: 0,
    price: MarketPrice.fromPartial({}),
    snapshot: false
  };
}
export const StreamPriceUpdate = {
  typeUrl: "/h2x.prices.StreamPriceUpdate",
  encode(message: StreamPriceUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== 0) {
      writer.uint32(8).uint32(message.marketId);
    }
    if (message.price !== undefined) {
      MarketPrice.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.snapshot === true) {
      writer.uint32(24).bool(message.snapshot);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StreamPriceUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamPriceUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.uint32();
          break;
        case 2:
          message.price = MarketPrice.decode(reader, reader.uint32());
          break;
        case 3:
          message.snapshot = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StreamPriceUpdate>): StreamPriceUpdate {
    const message = createBaseStreamPriceUpdate();
    message.marketId = object.marketId ?? 0;
    message.price = object.price !== undefined && object.price !== null ? MarketPrice.fromPartial(object.price) : undefined;
    message.snapshot = object.snapshot ?? false;
    return message;
  },
  fromAmino(object: StreamPriceUpdateAmino): StreamPriceUpdate {
    const message = createBaseStreamPriceUpdate();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = MarketPrice.fromAmino(object.price);
    }
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = object.snapshot;
    }
    return message;
  },
  toAmino(message: StreamPriceUpdate): StreamPriceUpdateAmino {
    const obj: any = {};
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    obj.price = message.price ? MarketPrice.toAmino(message.price) : undefined;
    obj.snapshot = message.snapshot === false ? undefined : message.snapshot;
    return obj;
  },
  fromAminoMsg(object: StreamPriceUpdateAminoMsg): StreamPriceUpdate {
    return StreamPriceUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamPriceUpdateProtoMsg): StreamPriceUpdate {
    return StreamPriceUpdate.decode(message.value);
  },
  toProto(message: StreamPriceUpdate): Uint8Array {
    return StreamPriceUpdate.encode(message).finish();
  },
  toProtoMsg(message: StreamPriceUpdate): StreamPriceUpdateProtoMsg {
    return {
      typeUrl: "/h2x.prices.StreamPriceUpdate",
      value: StreamPriceUpdate.encode(message).finish()
    };
  }
};