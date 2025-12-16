//@ts-nocheck
import { ClobPair, ClobPairAmino, ClobPairSDKType } from "./clob_pair";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * ClobStagedFinalizeBlockEvent defines a CLOB event staged during
 * FinalizeBlock.
 */
export interface ClobStagedFinalizeBlockEvent {
  /** create_clob_pair indicates a new CLOB pair creation. */
  createClobPair?: ClobPair;
}
export interface ClobStagedFinalizeBlockEventProtoMsg {
  typeUrl: "/h2x.clob.ClobStagedFinalizeBlockEvent";
  value: Uint8Array;
}
/**
 * ClobStagedFinalizeBlockEvent defines a CLOB event staged during
 * FinalizeBlock.
 * @name ClobStagedFinalizeBlockEventAmino
 * @package h2x.clob
 * @see proto type: h2x.clob.ClobStagedFinalizeBlockEvent
 */
export interface ClobStagedFinalizeBlockEventAmino {
  /**
   * create_clob_pair indicates a new CLOB pair creation.
   */
  create_clob_pair?: ClobPairAmino;
}
export interface ClobStagedFinalizeBlockEventAminoMsg {
  type: "/h2x.clob.ClobStagedFinalizeBlockEvent";
  value: ClobStagedFinalizeBlockEventAmino;
}
/**
 * ClobStagedFinalizeBlockEvent defines a CLOB event staged during
 * FinalizeBlock.
 */
export interface ClobStagedFinalizeBlockEventSDKType {
  create_clob_pair?: ClobPairSDKType;
}
function createBaseClobStagedFinalizeBlockEvent(): ClobStagedFinalizeBlockEvent {
  return {
    createClobPair: undefined
  };
}
export const ClobStagedFinalizeBlockEvent = {
  typeUrl: "/h2x.clob.ClobStagedFinalizeBlockEvent",
  encode(message: ClobStagedFinalizeBlockEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createClobPair !== undefined) {
      ClobPair.encode(message.createClobPair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClobStagedFinalizeBlockEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClobStagedFinalizeBlockEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createClobPair = ClobPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ClobStagedFinalizeBlockEvent>): ClobStagedFinalizeBlockEvent {
    const message = createBaseClobStagedFinalizeBlockEvent();
    message.createClobPair = object.createClobPair !== undefined && object.createClobPair !== null ? ClobPair.fromPartial(object.createClobPair) : undefined;
    return message;
  },
  fromAmino(object: ClobStagedFinalizeBlockEventAmino): ClobStagedFinalizeBlockEvent {
    const message = createBaseClobStagedFinalizeBlockEvent();
    if (object.create_clob_pair !== undefined && object.create_clob_pair !== null) {
      message.createClobPair = ClobPair.fromAmino(object.create_clob_pair);
    }
    return message;
  },
  toAmino(message: ClobStagedFinalizeBlockEvent): ClobStagedFinalizeBlockEventAmino {
    const obj: any = {};
    obj.create_clob_pair = message.createClobPair ? ClobPair.toAmino(message.createClobPair) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClobStagedFinalizeBlockEventAminoMsg): ClobStagedFinalizeBlockEvent {
    return ClobStagedFinalizeBlockEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ClobStagedFinalizeBlockEventProtoMsg): ClobStagedFinalizeBlockEvent {
    return ClobStagedFinalizeBlockEvent.decode(message.value);
  },
  toProto(message: ClobStagedFinalizeBlockEvent): Uint8Array {
    return ClobStagedFinalizeBlockEvent.encode(message).finish();
  },
  toProtoMsg(message: ClobStagedFinalizeBlockEvent): ClobStagedFinalizeBlockEventProtoMsg {
    return {
      typeUrl: "/h2x.clob.ClobStagedFinalizeBlockEvent",
      value: ClobStagedFinalizeBlockEvent.encode(message).finish()
    };
  }
};