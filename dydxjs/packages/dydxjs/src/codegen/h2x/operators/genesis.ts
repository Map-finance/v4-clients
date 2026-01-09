//@ts-nocheck
import { Operator, OperatorAmino, OperatorSDKType } from "./operators";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the operators module's genesis state. */
export interface GenesisState {
  /** List of operators. */
  operators: Operator[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/h2x.operators.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the operators module's genesis state.
 * @name GenesisStateAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * List of operators.
   */
  operators?: OperatorAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/h2x.operators.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the operators module's genesis state. */
export interface GenesisStateSDKType {
  operators: OperatorSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    operators: []
  };
}
export const GenesisState = {
  typeUrl: "/h2x.operators.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.operators.push(Operator.decode(reader, reader.uint32()));
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
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
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
      typeUrl: "/h2x.operators.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};