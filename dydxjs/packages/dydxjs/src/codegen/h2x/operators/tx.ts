//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * OperatorToAdd 表示要添加的运营账户及其权限。
 * 用于批量添加运营账户时指定每个账户的权限。
 */
export interface OperatorToAdd {
  /** 运营账户的链上地址（bech32 格式） */
  address: string;
  /**
   * 要授予的权限列表。
   * 使用 OperatorPermission 枚举值的数组。
   * 例如：
   *   permissions = [0] 表示全部权限
   *   permissions = [1, 3, 6] 表示只能创建资产、创建交易对、创建预言机市场
   */
  permissions: number[];
}
export interface OperatorToAddProtoMsg {
  typeUrl: "/h2x.operators.OperatorToAdd";
  value: Uint8Array;
}
/**
 * OperatorToAdd 表示要添加的运营账户及其权限。
 * 用于批量添加运营账户时指定每个账户的权限。
 * @name OperatorToAddAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.OperatorToAdd
 */
export interface OperatorToAddAmino {
  /**
   * 运营账户的链上地址（bech32 格式）
   */
  address?: string;
  /**
   * 要授予的权限列表。
   * 使用 OperatorPermission 枚举值的数组。
   * 例如：
   *   permissions = [0] 表示全部权限
   *   permissions = [1, 3, 6] 表示只能创建资产、创建交易对、创建预言机市场
   */
  permissions?: number[];
}
export interface OperatorToAddAminoMsg {
  type: "/h2x.operators.OperatorToAdd";
  value: OperatorToAddAmino;
}
/**
 * OperatorToAdd 表示要添加的运营账户及其权限。
 * 用于批量添加运营账户时指定每个账户的权限。
 */
export interface OperatorToAddSDKType {
  address: string;
  permissions: number[];
}
/**
 * MsgAddOperators 是添加运营账户的请求消息。
 * 支持两种方式添加运营账户：
 * 1. 使用 operator_addresses（已弃用）：添加的运营账户拥有全部权限
 * 2. 使用 operators_to_add（推荐）：可以为每个运营账户指定不同的权限
 */
export interface MsgAddOperators {
  authority: string;
  /**
   * 要添加的运营账户地址列表（已弃用，使用全部权限）。
   * 已弃用：请使用 operators_to_add 代替。
   * 为了向后兼容保留此字段。
   */
  operatorAddresses: string[];
  /**
   * 要添加的运营账户列表（包含地址和权限）。
   * 推荐使用此字段，可以为每个运营账户指定具体权限。
   */
  operatorsToAdd: OperatorToAdd[];
}
export interface MsgAddOperatorsProtoMsg {
  typeUrl: "/h2x.operators.MsgAddOperators";
  value: Uint8Array;
}
/**
 * MsgAddOperators 是添加运营账户的请求消息。
 * 支持两种方式添加运营账户：
 * 1. 使用 operator_addresses（已弃用）：添加的运营账户拥有全部权限
 * 2. 使用 operators_to_add（推荐）：可以为每个运营账户指定不同的权限
 * @name MsgAddOperatorsAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.MsgAddOperators
 */
export interface MsgAddOperatorsAmino {
  authority?: string;
  /**
   * 要添加的运营账户地址列表（已弃用，使用全部权限）。
   * 已弃用：请使用 operators_to_add 代替。
   * 为了向后兼容保留此字段。
   */
  operator_addresses?: string[];
  /**
   * 要添加的运营账户列表（包含地址和权限）。
   * 推荐使用此字段，可以为每个运营账户指定具体权限。
   */
  operators_to_add?: OperatorToAddAmino[];
}
export interface MsgAddOperatorsAminoMsg {
  type: "/h2x.operators.MsgAddOperators";
  value: MsgAddOperatorsAmino;
}
/**
 * MsgAddOperators 是添加运营账户的请求消息。
 * 支持两种方式添加运营账户：
 * 1. 使用 operator_addresses（已弃用）：添加的运营账户拥有全部权限
 * 2. 使用 operators_to_add（推荐）：可以为每个运营账户指定不同的权限
 */
export interface MsgAddOperatorsSDKType {
  authority: string;
  operator_addresses: string[];
  operators_to_add: OperatorToAddSDKType[];
}
/** MsgAddOperatorsResponse 是添加运营账户的响应消息。 */
export interface MsgAddOperatorsResponse {}
export interface MsgAddOperatorsResponseProtoMsg {
  typeUrl: "/h2x.operators.MsgAddOperatorsResponse";
  value: Uint8Array;
}
/**
 * MsgAddOperatorsResponse 是添加运营账户的响应消息。
 * @name MsgAddOperatorsResponseAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.MsgAddOperatorsResponse
 */
export interface MsgAddOperatorsResponseAmino {}
export interface MsgAddOperatorsResponseAminoMsg {
  type: "/h2x.operators.MsgAddOperatorsResponse";
  value: MsgAddOperatorsResponseAmino;
}
/** MsgAddOperatorsResponse 是添加运营账户的响应消息。 */
export interface MsgAddOperatorsResponseSDKType {}
/**
 * MsgRemoveOperators 是移除运营账户的请求消息。
 * 移除后该地址将失去所有运营权限。
 */
export interface MsgRemoveOperators {
  authority: string;
  /**
   * 要移除的运营账户地址列表。
   * 如果地址不存在，将返回错误。
   */
  operatorAddresses: string[];
}
export interface MsgRemoveOperatorsProtoMsg {
  typeUrl: "/h2x.operators.MsgRemoveOperators";
  value: Uint8Array;
}
/**
 * MsgRemoveOperators 是移除运营账户的请求消息。
 * 移除后该地址将失去所有运营权限。
 * @name MsgRemoveOperatorsAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.MsgRemoveOperators
 */
export interface MsgRemoveOperatorsAmino {
  authority?: string;
  /**
   * 要移除的运营账户地址列表。
   * 如果地址不存在，将返回错误。
   */
  operator_addresses?: string[];
}
export interface MsgRemoveOperatorsAminoMsg {
  type: "/h2x.operators.MsgRemoveOperators";
  value: MsgRemoveOperatorsAmino;
}
/**
 * MsgRemoveOperators 是移除运营账户的请求消息。
 * 移除后该地址将失去所有运营权限。
 */
export interface MsgRemoveOperatorsSDKType {
  authority: string;
  operator_addresses: string[];
}
/** MsgRemoveOperatorsResponse 是移除运营账户的响应消息。 */
export interface MsgRemoveOperatorsResponse {}
export interface MsgRemoveOperatorsResponseProtoMsg {
  typeUrl: "/h2x.operators.MsgRemoveOperatorsResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveOperatorsResponse 是移除运营账户的响应消息。
 * @name MsgRemoveOperatorsResponseAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.MsgRemoveOperatorsResponse
 */
export interface MsgRemoveOperatorsResponseAmino {}
export interface MsgRemoveOperatorsResponseAminoMsg {
  type: "/h2x.operators.MsgRemoveOperatorsResponse";
  value: MsgRemoveOperatorsResponseAmino;
}
/** MsgRemoveOperatorsResponse 是移除运营账户的响应消息。 */
export interface MsgRemoveOperatorsResponseSDKType {}
/**
 * MsgUpdateOperatorPermissions 是更新运营账户权限的请求消息。
 * 可以用于：
 * 1. 增加权限：在数组中添加新的权限值
 * 2. 减少权限：移除数组中的某些权限值
 * 3. 完全替换权限：直接设置新的权限数组
 */
export interface MsgUpdateOperatorPermissions {
  authority: string;
  /**
   * 要更新权限的运营账户地址。
   * 该地址必须已经是运营账户，否则返回错误。
   */
  operatorAddress: string;
  /**
   * 新的权限列表，将完全替换原有权限。
   * 使用 OperatorPermission 枚举值的数组。
   * 例如：
   *   permissions = [0]：全部权限
   *   permissions = [1, 2]：只有创建资产和更新资产权限
   *   permissions = [1, 3, 6]：只能创建资产、创建交易对、创建预言机市场
   *   permissions = []：移除所有权限（但仍保留运营账户身份）
   */
  permissions: number[];
}
export interface MsgUpdateOperatorPermissionsProtoMsg {
  typeUrl: "/h2x.operators.MsgUpdateOperatorPermissions";
  value: Uint8Array;
}
/**
 * MsgUpdateOperatorPermissions 是更新运营账户权限的请求消息。
 * 可以用于：
 * 1. 增加权限：在数组中添加新的权限值
 * 2. 减少权限：移除数组中的某些权限值
 * 3. 完全替换权限：直接设置新的权限数组
 * @name MsgUpdateOperatorPermissionsAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.MsgUpdateOperatorPermissions
 */
export interface MsgUpdateOperatorPermissionsAmino {
  authority?: string;
  /**
   * 要更新权限的运营账户地址。
   * 该地址必须已经是运营账户，否则返回错误。
   */
  operator_address?: string;
  /**
   * 新的权限列表，将完全替换原有权限。
   * 使用 OperatorPermission 枚举值的数组。
   * 例如：
   *   permissions = [0]：全部权限
   *   permissions = [1, 2]：只有创建资产和更新资产权限
   *   permissions = [1, 3, 6]：只能创建资产、创建交易对、创建预言机市场
   *   permissions = []：移除所有权限（但仍保留运营账户身份）
   */
  permissions?: number[];
}
export interface MsgUpdateOperatorPermissionsAminoMsg {
  type: "/h2x.operators.MsgUpdateOperatorPermissions";
  value: MsgUpdateOperatorPermissionsAmino;
}
/**
 * MsgUpdateOperatorPermissions 是更新运营账户权限的请求消息。
 * 可以用于：
 * 1. 增加权限：在数组中添加新的权限值
 * 2. 减少权限：移除数组中的某些权限值
 * 3. 完全替换权限：直接设置新的权限数组
 */
export interface MsgUpdateOperatorPermissionsSDKType {
  authority: string;
  operator_address: string;
  permissions: number[];
}
/** MsgUpdateOperatorPermissionsResponse 是更新权限的响应消息。 */
export interface MsgUpdateOperatorPermissionsResponse {}
export interface MsgUpdateOperatorPermissionsResponseProtoMsg {
  typeUrl: "/h2x.operators.MsgUpdateOperatorPermissionsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateOperatorPermissionsResponse 是更新权限的响应消息。
 * @name MsgUpdateOperatorPermissionsResponseAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.MsgUpdateOperatorPermissionsResponse
 */
export interface MsgUpdateOperatorPermissionsResponseAmino {}
export interface MsgUpdateOperatorPermissionsResponseAminoMsg {
  type: "/h2x.operators.MsgUpdateOperatorPermissionsResponse";
  value: MsgUpdateOperatorPermissionsResponseAmino;
}
/** MsgUpdateOperatorPermissionsResponse 是更新权限的响应消息。 */
export interface MsgUpdateOperatorPermissionsResponseSDKType {}
function createBaseOperatorToAdd(): OperatorToAdd {
  return {
    address: "",
    permissions: []
  };
}
export const OperatorToAdd = {
  typeUrl: "/h2x.operators.OperatorToAdd",
  encode(message: OperatorToAdd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    writer.uint32(18).fork();
    for (const v of message.permissions) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorToAdd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorToAdd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.permissions.push(reader.uint32());
            }
          } else {
            message.permissions.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OperatorToAdd>): OperatorToAdd {
    const message = createBaseOperatorToAdd();
    message.address = object.address ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OperatorToAddAmino): OperatorToAdd {
    const message = createBaseOperatorToAdd();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  toAmino(message: OperatorToAdd): OperatorToAddAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = message.permissions;
    }
    return obj;
  },
  fromAminoMsg(object: OperatorToAddAminoMsg): OperatorToAdd {
    return OperatorToAdd.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorToAddProtoMsg): OperatorToAdd {
    return OperatorToAdd.decode(message.value);
  },
  toProto(message: OperatorToAdd): Uint8Array {
    return OperatorToAdd.encode(message).finish();
  },
  toProtoMsg(message: OperatorToAdd): OperatorToAddProtoMsg {
    return {
      typeUrl: "/h2x.operators.OperatorToAdd",
      value: OperatorToAdd.encode(message).finish()
    };
  }
};
function createBaseMsgAddOperators(): MsgAddOperators {
  return {
    authority: "",
    operatorAddresses: [],
    operatorsToAdd: []
  };
}
export const MsgAddOperators = {
  typeUrl: "/h2x.operators.MsgAddOperators",
  encode(message: MsgAddOperators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.operatorAddresses) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.operatorsToAdd) {
      OperatorToAdd.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddOperators {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOperators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operatorAddresses.push(reader.string());
          break;
        case 3:
          message.operatorsToAdd.push(OperatorToAdd.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddOperators>): MsgAddOperators {
    const message = createBaseMsgAddOperators();
    message.authority = object.authority ?? "";
    message.operatorAddresses = object.operatorAddresses?.map(e => e) || [];
    message.operatorsToAdd = object.operatorsToAdd?.map(e => OperatorToAdd.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddOperatorsAmino): MsgAddOperators {
    const message = createBaseMsgAddOperators();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.operatorAddresses = object.operator_addresses?.map(e => e) || [];
    message.operatorsToAdd = object.operators_to_add?.map(e => OperatorToAdd.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddOperators): MsgAddOperatorsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.operatorAddresses) {
      obj.operator_addresses = message.operatorAddresses.map(e => e);
    } else {
      obj.operator_addresses = message.operatorAddresses;
    }
    if (message.operatorsToAdd) {
      obj.operators_to_add = message.operatorsToAdd.map(e => e ? OperatorToAdd.toAmino(e) : undefined);
    } else {
      obj.operators_to_add = message.operatorsToAdd;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddOperatorsAminoMsg): MsgAddOperators {
    return MsgAddOperators.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddOperatorsProtoMsg): MsgAddOperators {
    return MsgAddOperators.decode(message.value);
  },
  toProto(message: MsgAddOperators): Uint8Array {
    return MsgAddOperators.encode(message).finish();
  },
  toProtoMsg(message: MsgAddOperators): MsgAddOperatorsProtoMsg {
    return {
      typeUrl: "/h2x.operators.MsgAddOperators",
      value: MsgAddOperators.encode(message).finish()
    };
  }
};
function createBaseMsgAddOperatorsResponse(): MsgAddOperatorsResponse {
  return {};
}
export const MsgAddOperatorsResponse = {
  typeUrl: "/h2x.operators.MsgAddOperatorsResponse",
  encode(_: MsgAddOperatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddOperatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOperatorsResponse();
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
  fromPartial(_: Partial<MsgAddOperatorsResponse>): MsgAddOperatorsResponse {
    const message = createBaseMsgAddOperatorsResponse();
    return message;
  },
  fromAmino(_: MsgAddOperatorsResponseAmino): MsgAddOperatorsResponse {
    const message = createBaseMsgAddOperatorsResponse();
    return message;
  },
  toAmino(_: MsgAddOperatorsResponse): MsgAddOperatorsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddOperatorsResponseAminoMsg): MsgAddOperatorsResponse {
    return MsgAddOperatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddOperatorsResponseProtoMsg): MsgAddOperatorsResponse {
    return MsgAddOperatorsResponse.decode(message.value);
  },
  toProto(message: MsgAddOperatorsResponse): Uint8Array {
    return MsgAddOperatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddOperatorsResponse): MsgAddOperatorsResponseProtoMsg {
    return {
      typeUrl: "/h2x.operators.MsgAddOperatorsResponse",
      value: MsgAddOperatorsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOperators(): MsgRemoveOperators {
  return {
    authority: "",
    operatorAddresses: []
  };
}
export const MsgRemoveOperators = {
  typeUrl: "/h2x.operators.MsgRemoveOperators",
  encode(message: MsgRemoveOperators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.operatorAddresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOperators {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOperators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operatorAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveOperators>): MsgRemoveOperators {
    const message = createBaseMsgRemoveOperators();
    message.authority = object.authority ?? "";
    message.operatorAddresses = object.operatorAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRemoveOperatorsAmino): MsgRemoveOperators {
    const message = createBaseMsgRemoveOperators();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.operatorAddresses = object.operator_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRemoveOperators): MsgRemoveOperatorsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.operatorAddresses) {
      obj.operator_addresses = message.operatorAddresses.map(e => e);
    } else {
      obj.operator_addresses = message.operatorAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRemoveOperatorsAminoMsg): MsgRemoveOperators {
    return MsgRemoveOperators.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveOperatorsProtoMsg): MsgRemoveOperators {
    return MsgRemoveOperators.decode(message.value);
  },
  toProto(message: MsgRemoveOperators): Uint8Array {
    return MsgRemoveOperators.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveOperators): MsgRemoveOperatorsProtoMsg {
    return {
      typeUrl: "/h2x.operators.MsgRemoveOperators",
      value: MsgRemoveOperators.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOperatorsResponse(): MsgRemoveOperatorsResponse {
  return {};
}
export const MsgRemoveOperatorsResponse = {
  typeUrl: "/h2x.operators.MsgRemoveOperatorsResponse",
  encode(_: MsgRemoveOperatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOperatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOperatorsResponse();
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
  fromPartial(_: Partial<MsgRemoveOperatorsResponse>): MsgRemoveOperatorsResponse {
    const message = createBaseMsgRemoveOperatorsResponse();
    return message;
  },
  fromAmino(_: MsgRemoveOperatorsResponseAmino): MsgRemoveOperatorsResponse {
    const message = createBaseMsgRemoveOperatorsResponse();
    return message;
  },
  toAmino(_: MsgRemoveOperatorsResponse): MsgRemoveOperatorsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveOperatorsResponseAminoMsg): MsgRemoveOperatorsResponse {
    return MsgRemoveOperatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveOperatorsResponseProtoMsg): MsgRemoveOperatorsResponse {
    return MsgRemoveOperatorsResponse.decode(message.value);
  },
  toProto(message: MsgRemoveOperatorsResponse): Uint8Array {
    return MsgRemoveOperatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveOperatorsResponse): MsgRemoveOperatorsResponseProtoMsg {
    return {
      typeUrl: "/h2x.operators.MsgRemoveOperatorsResponse",
      value: MsgRemoveOperatorsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperatorPermissions(): MsgUpdateOperatorPermissions {
  return {
    authority: "",
    operatorAddress: "",
    permissions: []
  };
}
export const MsgUpdateOperatorPermissions = {
  typeUrl: "/h2x.operators.MsgUpdateOperatorPermissions",
  encode(message: MsgUpdateOperatorPermissions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    writer.uint32(26).fork();
    for (const v of message.permissions) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperatorPermissions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperatorPermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operatorAddress = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.permissions.push(reader.uint32());
            }
          } else {
            message.permissions.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateOperatorPermissions>): MsgUpdateOperatorPermissions {
    const message = createBaseMsgUpdateOperatorPermissions();
    message.authority = object.authority ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdateOperatorPermissionsAmino): MsgUpdateOperatorPermissions {
    const message = createBaseMsgUpdateOperatorPermissions();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdateOperatorPermissions): MsgUpdateOperatorPermissionsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = message.permissions;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperatorPermissionsAminoMsg): MsgUpdateOperatorPermissions {
    return MsgUpdateOperatorPermissions.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperatorPermissionsProtoMsg): MsgUpdateOperatorPermissions {
    return MsgUpdateOperatorPermissions.decode(message.value);
  },
  toProto(message: MsgUpdateOperatorPermissions): Uint8Array {
    return MsgUpdateOperatorPermissions.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperatorPermissions): MsgUpdateOperatorPermissionsProtoMsg {
    return {
      typeUrl: "/h2x.operators.MsgUpdateOperatorPermissions",
      value: MsgUpdateOperatorPermissions.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperatorPermissionsResponse(): MsgUpdateOperatorPermissionsResponse {
  return {};
}
export const MsgUpdateOperatorPermissionsResponse = {
  typeUrl: "/h2x.operators.MsgUpdateOperatorPermissionsResponse",
  encode(_: MsgUpdateOperatorPermissionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperatorPermissionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperatorPermissionsResponse();
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
  fromPartial(_: Partial<MsgUpdateOperatorPermissionsResponse>): MsgUpdateOperatorPermissionsResponse {
    const message = createBaseMsgUpdateOperatorPermissionsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperatorPermissionsResponseAmino): MsgUpdateOperatorPermissionsResponse {
    const message = createBaseMsgUpdateOperatorPermissionsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperatorPermissionsResponse): MsgUpdateOperatorPermissionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperatorPermissionsResponseAminoMsg): MsgUpdateOperatorPermissionsResponse {
    return MsgUpdateOperatorPermissionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperatorPermissionsResponseProtoMsg): MsgUpdateOperatorPermissionsResponse {
    return MsgUpdateOperatorPermissionsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperatorPermissionsResponse): Uint8Array {
    return MsgUpdateOperatorPermissionsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperatorPermissionsResponse): MsgUpdateOperatorPermissionsResponseProtoMsg {
    return {
      typeUrl: "/h2x.operators.MsgUpdateOperatorPermissionsResponse",
      value: MsgUpdateOperatorPermissionsResponse.encode(message).finish()
    };
  }
};