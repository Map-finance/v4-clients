//@ts-nocheck
import { Subaccount, SubaccountAmino, SubaccountSDKType } from "./subaccount";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the subaccounts module's genesis state. */
export interface GenesisState {
  subaccounts: Subaccount[];
  /** params defines the parameters for the subaccounts module */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/h2x.subaccounts.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the subaccounts module's genesis state.
 * @name GenesisStateAmino
 * @package h2x.subaccounts
 * @see proto type: h2x.subaccounts.GenesisState
 */
export interface GenesisStateAmino {
  subaccounts?: SubaccountAmino[];
  /**
   * params defines the parameters for the subaccounts module
   */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/h2x.subaccounts.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the subaccounts module's genesis state. */
export interface GenesisStateSDKType {
  subaccounts: SubaccountSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    subaccounts: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/h2x.subaccounts.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subaccounts) {
      Subaccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.subaccounts.push(Subaccount.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
    message.subaccounts = object.subaccounts?.map(e => Subaccount.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.subaccounts = object.subaccounts?.map(e => Subaccount.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.subaccounts) {
      obj.subaccounts = message.subaccounts.map(e => e ? Subaccount.toAmino(e) : undefined);
    } else {
      obj.subaccounts = message.subaccounts;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/h2x.subaccounts.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};