//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
/** DowntimeParams defines the parameters for downtime. */
export interface DowntimeParams {
  /**
   * Durations tracked for downtime. The durations must be sorted from
   * shortest to longest and must all be positive.
   */
  durations: Duration[];
}
export interface DowntimeParamsProtoMsg {
  typeUrl: "/h2x.blocktime.DowntimeParams";
  value: Uint8Array;
}
/**
 * DowntimeParams defines the parameters for downtime.
 * @name DowntimeParamsAmino
 * @package h2x.blocktime
 * @see proto type: h2x.blocktime.DowntimeParams
 */
export interface DowntimeParamsAmino {
  /**
   * Durations tracked for downtime. The durations must be sorted from
   * shortest to longest and must all be positive.
   */
  durations?: DurationAmino[];
}
export interface DowntimeParamsAminoMsg {
  type: "/h2x.blocktime.DowntimeParams";
  value: DowntimeParamsAmino;
}
/** DowntimeParams defines the parameters for downtime. */
export interface DowntimeParamsSDKType {
  durations: DurationSDKType[];
}
/** SynchronyParams defines the parameters for block synchrony. */
export interface SynchronyParams {
  /**
   * next_block_delay replaces the locally configured timeout_commit in
   * CometBFT. It determines the amount of time the CometBFT waits after the
   * `CommitTime` (subjective time when +2/3 precommits were received), before
   * moving to next height.
   * If the application sends next_block_delay = 0 to the consensus engine, the
   * latter defaults back to using timeout_commit.
   */
  nextBlockDelay: Duration;
}
export interface SynchronyParamsProtoMsg {
  typeUrl: "/h2x.blocktime.SynchronyParams";
  value: Uint8Array;
}
/**
 * SynchronyParams defines the parameters for block synchrony.
 * @name SynchronyParamsAmino
 * @package h2x.blocktime
 * @see proto type: h2x.blocktime.SynchronyParams
 */
export interface SynchronyParamsAmino {
  /**
   * next_block_delay replaces the locally configured timeout_commit in
   * CometBFT. It determines the amount of time the CometBFT waits after the
   * `CommitTime` (subjective time when +2/3 precommits were received), before
   * moving to next height.
   * If the application sends next_block_delay = 0 to the consensus engine, the
   * latter defaults back to using timeout_commit.
   */
  next_block_delay?: DurationAmino;
}
export interface SynchronyParamsAminoMsg {
  type: "/h2x.blocktime.SynchronyParams";
  value: SynchronyParamsAmino;
}
/** SynchronyParams defines the parameters for block synchrony. */
export interface SynchronyParamsSDKType {
  next_block_delay: DurationSDKType;
}
function createBaseDowntimeParams(): DowntimeParams {
  return {
    durations: []
  };
}
export const DowntimeParams = {
  typeUrl: "/h2x.blocktime.DowntimeParams",
  encode(message: DowntimeParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.durations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DowntimeParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDowntimeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.durations.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DowntimeParams>): DowntimeParams {
    const message = createBaseDowntimeParams();
    message.durations = object.durations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DowntimeParamsAmino): DowntimeParams {
    const message = createBaseDowntimeParams();
    message.durations = object.durations?.map(e => Duration.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DowntimeParams): DowntimeParamsAmino {
    const obj: any = {};
    if (message.durations) {
      obj.durations = message.durations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.durations = message.durations;
    }
    return obj;
  },
  fromAminoMsg(object: DowntimeParamsAminoMsg): DowntimeParams {
    return DowntimeParams.fromAmino(object.value);
  },
  fromProtoMsg(message: DowntimeParamsProtoMsg): DowntimeParams {
    return DowntimeParams.decode(message.value);
  },
  toProto(message: DowntimeParams): Uint8Array {
    return DowntimeParams.encode(message).finish();
  },
  toProtoMsg(message: DowntimeParams): DowntimeParamsProtoMsg {
    return {
      typeUrl: "/h2x.blocktime.DowntimeParams",
      value: DowntimeParams.encode(message).finish()
    };
  }
};
function createBaseSynchronyParams(): SynchronyParams {
  return {
    nextBlockDelay: Duration.fromPartial({})
  };
}
export const SynchronyParams = {
  typeUrl: "/h2x.blocktime.SynchronyParams",
  encode(message: SynchronyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextBlockDelay !== undefined) {
      Duration.encode(message.nextBlockDelay, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SynchronyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSynchronyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextBlockDelay = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SynchronyParams>): SynchronyParams {
    const message = createBaseSynchronyParams();
    message.nextBlockDelay = object.nextBlockDelay !== undefined && object.nextBlockDelay !== null ? Duration.fromPartial(object.nextBlockDelay) : undefined;
    return message;
  },
  fromAmino(object: SynchronyParamsAmino): SynchronyParams {
    const message = createBaseSynchronyParams();
    if (object.next_block_delay !== undefined && object.next_block_delay !== null) {
      message.nextBlockDelay = Duration.fromAmino(object.next_block_delay);
    }
    return message;
  },
  toAmino(message: SynchronyParams): SynchronyParamsAmino {
    const obj: any = {};
    obj.next_block_delay = message.nextBlockDelay ? Duration.toAmino(message.nextBlockDelay) : undefined;
    return obj;
  },
  fromAminoMsg(object: SynchronyParamsAminoMsg): SynchronyParams {
    return SynchronyParams.fromAmino(object.value);
  },
  fromProtoMsg(message: SynchronyParamsProtoMsg): SynchronyParams {
    return SynchronyParams.decode(message.value);
  },
  toProto(message: SynchronyParams): Uint8Array {
    return SynchronyParams.encode(message).finish();
  },
  toProtoMsg(message: SynchronyParams): SynchronyParamsProtoMsg {
    return {
      typeUrl: "/h2x.blocktime.SynchronyParams",
      value: SynchronyParams.encode(message).finish()
    };
  }
};