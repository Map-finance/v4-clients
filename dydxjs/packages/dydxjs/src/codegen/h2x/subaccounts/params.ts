//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the subaccounts module. */
export interface Params {
  /**
   * transfer_fee_quantums defines the fee charged for transfers between subaccounts
   * in quantums (e.g., 1_000_000 = 1 USDT with 6 decimals)
   * 子账户间转账手续费（quantums），例如 1_000_000 = 1 USDT（6位精度）
   * 同时也用于代理钱包注册费用
   */
  transferFeeQuantums: bigint;
  /**
   * min_transfer_quantums defines the minimum amount for transfers between subaccounts
   * in quantums (e.g., 10_000_000 = 10 USDT with 6 decimals)
   * 子账户间转账最小金额（quantums），例如 10_000_000 = 10 USDT（6位精度）
   */
  minTransferQuantums: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/h2x.subaccounts.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the subaccounts module.
 * @name ParamsAmino
 * @package h2x.subaccounts
 * @see proto type: h2x.subaccounts.Params
 */
export interface ParamsAmino {
  /**
   * transfer_fee_quantums defines the fee charged for transfers between subaccounts
   * in quantums (e.g., 1_000_000 = 1 USDT with 6 decimals)
   * 子账户间转账手续费（quantums），例如 1_000_000 = 1 USDT（6位精度）
   * 同时也用于代理钱包注册费用
   */
  transfer_fee_quantums?: string;
  /**
   * min_transfer_quantums defines the minimum amount for transfers between subaccounts
   * in quantums (e.g., 10_000_000 = 10 USDT with 6 decimals)
   * 子账户间转账最小金额（quantums），例如 10_000_000 = 10 USDT（6位精度）
   */
  min_transfer_quantums?: string;
}
export interface ParamsAminoMsg {
  type: "/h2x.subaccounts.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the subaccounts module. */
export interface ParamsSDKType {
  transfer_fee_quantums: bigint;
  min_transfer_quantums: bigint;
}
function createBaseParams(): Params {
  return {
    transferFeeQuantums: BigInt(0),
    minTransferQuantums: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/h2x.subaccounts.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transferFeeQuantums !== BigInt(0)) {
      writer.uint32(8).uint64(message.transferFeeQuantums);
    }
    if (message.minTransferQuantums !== BigInt(0)) {
      writer.uint32(16).uint64(message.minTransferQuantums);
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
          message.transferFeeQuantums = reader.uint64();
          break;
        case 2:
          message.minTransferQuantums = reader.uint64();
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
    message.transferFeeQuantums = object.transferFeeQuantums !== undefined && object.transferFeeQuantums !== null ? BigInt(object.transferFeeQuantums.toString()) : BigInt(0);
    message.minTransferQuantums = object.minTransferQuantums !== undefined && object.minTransferQuantums !== null ? BigInt(object.minTransferQuantums.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.transfer_fee_quantums !== undefined && object.transfer_fee_quantums !== null) {
      message.transferFeeQuantums = BigInt(object.transfer_fee_quantums);
    }
    if (object.min_transfer_quantums !== undefined && object.min_transfer_quantums !== null) {
      message.minTransferQuantums = BigInt(object.min_transfer_quantums);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.transfer_fee_quantums = message.transferFeeQuantums !== BigInt(0) ? message.transferFeeQuantums?.toString() : undefined;
    obj.min_transfer_quantums = message.minTransferQuantums !== BigInt(0) ? message.minTransferQuantums?.toString() : undefined;
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
      typeUrl: "/h2x.subaccounts.Params",
      value: Params.encode(message).finish()
    };
  }
};