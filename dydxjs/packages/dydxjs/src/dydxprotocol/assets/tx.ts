//@ts-nocheck
import { Asset, AssetAmino, AssetSDKType } from "./asset";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * MsgCreateAsset is a message used by x/gov for creating a new asset through
 * governance.
 */
export interface MsgCreateAsset {
  /** The address that controls the module (governance module only). */
  authority: string;
  /** `asset` defines parameters for the new asset. */
  asset: Asset;
}
export interface MsgCreateAssetProtoMsg {
  typeUrl: "/dydxprotocol.assets.MsgCreateAsset";
  value: Uint8Array;
}
/**
 * MsgCreateAsset is a message used by x/gov for creating a new asset through
 * governance.
 * @name MsgCreateAssetAmino
 * @package dydxprotocol.assets
 * @see proto type: dydxprotocol.assets.MsgCreateAsset
 */
export interface MsgCreateAssetAmino {
  /**
   * The address that controls the module (governance module only).
   */
  authority?: string;
  /**
   * `asset` defines parameters for the new asset.
   */
  asset?: AssetAmino;
}
export interface MsgCreateAssetAminoMsg {
  type: "/dydxprotocol.assets.MsgCreateAsset";
  value: MsgCreateAssetAmino;
}
/**
 * MsgCreateAsset is a message used by x/gov for creating a new asset through
 * governance.
 */
export interface MsgCreateAssetSDKType {
  authority: string;
  asset: AssetSDKType;
}
/** MsgCreateAssetResponse defines the CreateAsset response type. */
export interface MsgCreateAssetResponse {}
export interface MsgCreateAssetResponseProtoMsg {
  typeUrl: "/dydxprotocol.assets.MsgCreateAssetResponse";
  value: Uint8Array;
}
/**
 * MsgCreateAssetResponse defines the CreateAsset response type.
 * @name MsgCreateAssetResponseAmino
 * @package dydxprotocol.assets
 * @see proto type: dydxprotocol.assets.MsgCreateAssetResponse
 */
export interface MsgCreateAssetResponseAmino {}
export interface MsgCreateAssetResponseAminoMsg {
  type: "/dydxprotocol.assets.MsgCreateAssetResponse";
  value: MsgCreateAssetResponseAmino;
}
/** MsgCreateAssetResponse defines the CreateAsset response type. */
export interface MsgCreateAssetResponseSDKType {}
/**
 * MsgUpdateAsset is a message used by x/gov for updating an existing asset
 * through governance.
 */
export interface MsgUpdateAsset {
  /** The address that controls the module (governance module only). */
  authority: string;
  /** `asset` defines the updated asset parameters. All fields must be set. */
  asset: Asset;
}
export interface MsgUpdateAssetProtoMsg {
  typeUrl: "/dydxprotocol.assets.MsgUpdateAsset";
  value: Uint8Array;
}
/**
 * MsgUpdateAsset is a message used by x/gov for updating an existing asset
 * through governance.
 * @name MsgUpdateAssetAmino
 * @package dydxprotocol.assets
 * @see proto type: dydxprotocol.assets.MsgUpdateAsset
 */
export interface MsgUpdateAssetAmino {
  /**
   * The address that controls the module (governance module only).
   */
  authority?: string;
  /**
   * `asset` defines the updated asset parameters. All fields must be set.
   */
  asset?: AssetAmino;
}
export interface MsgUpdateAssetAminoMsg {
  type: "/dydxprotocol.assets.MsgUpdateAsset";
  value: MsgUpdateAssetAmino;
}
/**
 * MsgUpdateAsset is a message used by x/gov for updating an existing asset
 * through governance.
 */
export interface MsgUpdateAssetSDKType {
  authority: string;
  asset: AssetSDKType;
}
/** MsgUpdateAssetResponse defines the UpdateAsset response type. */
export interface MsgUpdateAssetResponse {}
export interface MsgUpdateAssetResponseProtoMsg {
  typeUrl: "/dydxprotocol.assets.MsgUpdateAssetResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateAssetResponse defines the UpdateAsset response type.
 * @name MsgUpdateAssetResponseAmino
 * @package dydxprotocol.assets
 * @see proto type: dydxprotocol.assets.MsgUpdateAssetResponse
 */
export interface MsgUpdateAssetResponseAmino {}
export interface MsgUpdateAssetResponseAminoMsg {
  type: "/dydxprotocol.assets.MsgUpdateAssetResponse";
  value: MsgUpdateAssetResponseAmino;
}
/** MsgUpdateAssetResponse defines the UpdateAsset response type. */
export interface MsgUpdateAssetResponseSDKType {}
function createBaseMsgCreateAsset(): MsgCreateAsset {
  return {
    authority: "",
    asset: Asset.fromPartial({})
  };
}
export const MsgCreateAsset = {
  typeUrl: "/dydxprotocol.assets.MsgCreateAsset",
  encode(message: MsgCreateAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateAsset>): MsgCreateAsset {
    const message = createBaseMsgCreateAsset();
    message.authority = object.authority ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateAssetAmino): MsgCreateAsset {
    const message = createBaseMsgCreateAsset();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgCreateAsset): MsgCreateAssetAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAssetAminoMsg): MsgCreateAsset {
    return MsgCreateAsset.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAssetProtoMsg): MsgCreateAsset {
    return MsgCreateAsset.decode(message.value);
  },
  toProto(message: MsgCreateAsset): Uint8Array {
    return MsgCreateAsset.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAsset): MsgCreateAssetProtoMsg {
    return {
      typeUrl: "/dydxprotocol.assets.MsgCreateAsset",
      value: MsgCreateAsset.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAssetResponse(): MsgCreateAssetResponse {
  return {};
}
export const MsgCreateAssetResponse = {
  typeUrl: "/dydxprotocol.assets.MsgCreateAssetResponse",
  encode(_: MsgCreateAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAssetResponse();
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
  fromPartial(_: Partial<MsgCreateAssetResponse>): MsgCreateAssetResponse {
    const message = createBaseMsgCreateAssetResponse();
    return message;
  },
  fromAmino(_: MsgCreateAssetResponseAmino): MsgCreateAssetResponse {
    const message = createBaseMsgCreateAssetResponse();
    return message;
  },
  toAmino(_: MsgCreateAssetResponse): MsgCreateAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAssetResponseAminoMsg): MsgCreateAssetResponse {
    return MsgCreateAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAssetResponseProtoMsg): MsgCreateAssetResponse {
    return MsgCreateAssetResponse.decode(message.value);
  },
  toProto(message: MsgCreateAssetResponse): Uint8Array {
    return MsgCreateAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAssetResponse): MsgCreateAssetResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.assets.MsgCreateAssetResponse",
      value: MsgCreateAssetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAsset(): MsgUpdateAsset {
  return {
    authority: "",
    asset: Asset.fromPartial({})
  };
}
export const MsgUpdateAsset = {
  typeUrl: "/dydxprotocol.assets.MsgUpdateAsset",
  encode(message: MsgUpdateAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAsset>): MsgUpdateAsset {
    const message = createBaseMsgUpdateAsset();
    message.authority = object.authority ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAssetAmino): MsgUpdateAsset {
    const message = createBaseMsgUpdateAsset();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgUpdateAsset): MsgUpdateAssetAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAssetAminoMsg): MsgUpdateAsset {
    return MsgUpdateAsset.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAssetProtoMsg): MsgUpdateAsset {
    return MsgUpdateAsset.decode(message.value);
  },
  toProto(message: MsgUpdateAsset): Uint8Array {
    return MsgUpdateAsset.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAsset): MsgUpdateAssetProtoMsg {
    return {
      typeUrl: "/dydxprotocol.assets.MsgUpdateAsset",
      value: MsgUpdateAsset.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAssetResponse(): MsgUpdateAssetResponse {
  return {};
}
export const MsgUpdateAssetResponse = {
  typeUrl: "/dydxprotocol.assets.MsgUpdateAssetResponse",
  encode(_: MsgUpdateAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAssetResponse();
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
  fromPartial(_: Partial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse {
    const message = createBaseMsgUpdateAssetResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAssetResponseAmino): MsgUpdateAssetResponse {
    const message = createBaseMsgUpdateAssetResponse();
    return message;
  },
  toAmino(_: MsgUpdateAssetResponse): MsgUpdateAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAssetResponseAminoMsg): MsgUpdateAssetResponse {
    return MsgUpdateAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAssetResponseProtoMsg): MsgUpdateAssetResponse {
    return MsgUpdateAssetResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAssetResponse): Uint8Array {
    return MsgUpdateAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAssetResponse): MsgUpdateAssetResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.assets.MsgUpdateAssetResponse",
      value: MsgUpdateAssetResponse.encode(message).finish()
    };
  }
};