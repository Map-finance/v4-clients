//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * OperatorPermission 定义运营账户可以拥有的细粒度权限类型。
 * 权限使用数组存储，允许精确控制每个操作。
 * 权限值 0 代表拥有全部权限（超级管理员）。
 * 
 * 权限分类：
 * - 资产管理：CREATE_ASSET(1), UPDATE_ASSET(2)
 * - 交易对管理：CREATE_CLOB_PAIR(3), UPDATE_CLOB_PAIR(4), DELIST_CLOB_PAIR(5)
 * - 预言机市场管理：CREATE_ORACLE_MARKET(6), UPDATE_ORACLE_MARKET(7)
 */
export enum OperatorPermission {
  /**
   * OPERATOR_PERMISSION_ALL - 全部权限（超级管理员）
   * 当 permissions 数组包含 0 时，代表拥有所有权限
   */
  OPERATOR_PERMISSION_ALL = 0,
  /**
   * OPERATOR_PERMISSION_CREATE_ASSET - 创建资产权限：允许添加新的资产（如 USDC）
   * 对应操作：MsgCreateAsset
   */
  OPERATOR_PERMISSION_CREATE_ASSET = 1,
  /**
   * OPERATOR_PERMISSION_UPDATE_ASSET - 更新资产权限：允许修改现有资产的参数
   * 对应操作：MsgUpdateAsset（如果有）
   */
  OPERATOR_PERMISSION_UPDATE_ASSET = 2,
  /**
   * OPERATOR_PERMISSION_CREATE_CLOB_PAIR - 创建交易对权限：允许添加新的永续合约或现货交易对
   * 对应操作：MsgCreateClobPair
   * 注意：创建交易对时同时会创建对应的 Perpetual
   */
  OPERATOR_PERMISSION_CREATE_CLOB_PAIR = 3,
  /**
   * OPERATOR_PERMISSION_UPDATE_CLOB_PAIR - 更新交易对权限：允许修改现有交易对的参数
   * 对应操作：MsgUpdateClobPair（不包括下架操作）
   */
  OPERATOR_PERMISSION_UPDATE_CLOB_PAIR = 4,
  /**
   * OPERATOR_PERMISSION_DELIST_CLOB_PAIR - 下架交易对权限：允许将交易对状态设为 FINAL_SETTLEMENT
   * 对应操作：MsgUpdateClobPair（仅限状态变更为下架）
   */
  OPERATOR_PERMISSION_DELIST_CLOB_PAIR = 5,
  /**
   * OPERATOR_PERMISSION_CREATE_ORACLE_MARKET - 创建预言机市场权限：允许添加新的预言机价格市场
   * 对应操作：MsgCreateOracleMarket
   */
  OPERATOR_PERMISSION_CREATE_ORACLE_MARKET = 6,
  /**
   * OPERATOR_PERMISSION_UPDATE_ORACLE_MARKET - 更新预言机市场权限：允许修改预言机市场参数
   * 对应操作：MsgUpdateMarketParam
   */
  OPERATOR_PERMISSION_UPDATE_ORACLE_MARKET = 7,
  UNRECOGNIZED = -1,
}
export const OperatorPermissionSDKType = OperatorPermission;
export const OperatorPermissionAmino = OperatorPermission;
export function operatorPermissionFromJSON(object: any): OperatorPermission {
  switch (object) {
    case 0:
    case "OPERATOR_PERMISSION_ALL":
      return OperatorPermission.OPERATOR_PERMISSION_ALL;
    case 1:
    case "OPERATOR_PERMISSION_CREATE_ASSET":
      return OperatorPermission.OPERATOR_PERMISSION_CREATE_ASSET;
    case 2:
    case "OPERATOR_PERMISSION_UPDATE_ASSET":
      return OperatorPermission.OPERATOR_PERMISSION_UPDATE_ASSET;
    case 3:
    case "OPERATOR_PERMISSION_CREATE_CLOB_PAIR":
      return OperatorPermission.OPERATOR_PERMISSION_CREATE_CLOB_PAIR;
    case 4:
    case "OPERATOR_PERMISSION_UPDATE_CLOB_PAIR":
      return OperatorPermission.OPERATOR_PERMISSION_UPDATE_CLOB_PAIR;
    case 5:
    case "OPERATOR_PERMISSION_DELIST_CLOB_PAIR":
      return OperatorPermission.OPERATOR_PERMISSION_DELIST_CLOB_PAIR;
    case 6:
    case "OPERATOR_PERMISSION_CREATE_ORACLE_MARKET":
      return OperatorPermission.OPERATOR_PERMISSION_CREATE_ORACLE_MARKET;
    case 7:
    case "OPERATOR_PERMISSION_UPDATE_ORACLE_MARKET":
      return OperatorPermission.OPERATOR_PERMISSION_UPDATE_ORACLE_MARKET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperatorPermission.UNRECOGNIZED;
  }
}
export function operatorPermissionToJSON(object: OperatorPermission): string {
  switch (object) {
    case OperatorPermission.OPERATOR_PERMISSION_ALL:
      return "OPERATOR_PERMISSION_ALL";
    case OperatorPermission.OPERATOR_PERMISSION_CREATE_ASSET:
      return "OPERATOR_PERMISSION_CREATE_ASSET";
    case OperatorPermission.OPERATOR_PERMISSION_UPDATE_ASSET:
      return "OPERATOR_PERMISSION_UPDATE_ASSET";
    case OperatorPermission.OPERATOR_PERMISSION_CREATE_CLOB_PAIR:
      return "OPERATOR_PERMISSION_CREATE_CLOB_PAIR";
    case OperatorPermission.OPERATOR_PERMISSION_UPDATE_CLOB_PAIR:
      return "OPERATOR_PERMISSION_UPDATE_CLOB_PAIR";
    case OperatorPermission.OPERATOR_PERMISSION_DELIST_CLOB_PAIR:
      return "OPERATOR_PERMISSION_DELIST_CLOB_PAIR";
    case OperatorPermission.OPERATOR_PERMISSION_CREATE_ORACLE_MARKET:
      return "OPERATOR_PERMISSION_CREATE_ORACLE_MARKET";
    case OperatorPermission.OPERATOR_PERMISSION_UPDATE_ORACLE_MARKET:
      return "OPERATOR_PERMISSION_UPDATE_ORACLE_MARKET";
    case OperatorPermission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Operator 表示一个拥有特殊权限的运营账户。
 * 运营账户可以执行原本只有治理模块才能执行的操作，
 * 但权限受到 permissions 数组的限制。
 */
export interface Operator {
  /** 运营账户的链上地址（bech32 格式） */
  address: string;
  /** 添加运营账户时的区块高度 */
  addedAt: bigint;
  /** 添加该运营账户的地址（通常是治理模块地址） */
  addedBy: string;
  /**
   * 权限列表。
   * 使用 OperatorPermission 枚举值的数组。
   * - 如果数组包含 0，表示拥有全部权限
   * - 如果数组为 [1, 2]，表示只有创建资产和更新资产的权限
   * - 如果数组为 [0, 1, 2]，仍然表示全部权限（0 会覆盖其他值）
   */
  permissions: number[];
}
export interface OperatorProtoMsg {
  typeUrl: "/h2x.operators.Operator";
  value: Uint8Array;
}
/**
 * Operator 表示一个拥有特殊权限的运营账户。
 * 运营账户可以执行原本只有治理模块才能执行的操作，
 * 但权限受到 permissions 数组的限制。
 * @name OperatorAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.Operator
 */
export interface OperatorAmino {
  /**
   * 运营账户的链上地址（bech32 格式）
   */
  address?: string;
  /**
   * 添加运营账户时的区块高度
   */
  added_at?: string;
  /**
   * 添加该运营账户的地址（通常是治理模块地址）
   */
  added_by?: string;
  /**
   * 权限列表。
   * 使用 OperatorPermission 枚举值的数组。
   * - 如果数组包含 0，表示拥有全部权限
   * - 如果数组为 [1, 2]，表示只有创建资产和更新资产的权限
   * - 如果数组为 [0, 1, 2]，仍然表示全部权限（0 会覆盖其他值）
   */
  permissions?: number[];
}
export interface OperatorAminoMsg {
  type: "/h2x.operators.Operator";
  value: OperatorAmino;
}
/**
 * Operator 表示一个拥有特殊权限的运营账户。
 * 运营账户可以执行原本只有治理模块才能执行的操作，
 * 但权限受到 permissions 数组的限制。
 */
export interface OperatorSDKType {
  address: string;
  added_at: bigint;
  added_by: string;
  permissions: number[];
}
function createBaseOperator(): Operator {
  return {
    address: "",
    addedAt: BigInt(0),
    addedBy: "",
    permissions: []
  };
}
export const Operator = {
  typeUrl: "/h2x.operators.Operator",
  encode(message: Operator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.addedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.addedAt);
    }
    if (message.addedBy !== "") {
      writer.uint32(26).string(message.addedBy);
    }
    writer.uint32(34).fork();
    for (const v of message.permissions) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Operator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.addedAt = reader.int64();
          break;
        case 3:
          message.addedBy = reader.string();
          break;
        case 4:
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
  fromPartial(object: Partial<Operator>): Operator {
    const message = createBaseOperator();
    message.address = object.address ?? "";
    message.addedAt = object.addedAt !== undefined && object.addedAt !== null ? BigInt(object.addedAt.toString()) : BigInt(0);
    message.addedBy = object.addedBy ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OperatorAmino): Operator {
    const message = createBaseOperator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.added_at !== undefined && object.added_at !== null) {
      message.addedAt = BigInt(object.added_at);
    }
    if (object.added_by !== undefined && object.added_by !== null) {
      message.addedBy = object.added_by;
    }
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  toAmino(message: Operator): OperatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.added_at = message.addedAt !== BigInt(0) ? message.addedAt?.toString() : undefined;
    obj.added_by = message.addedBy === "" ? undefined : message.addedBy;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = message.permissions;
    }
    return obj;
  },
  fromAminoMsg(object: OperatorAminoMsg): Operator {
    return Operator.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorProtoMsg): Operator {
    return Operator.decode(message.value);
  },
  toProto(message: Operator): Uint8Array {
    return Operator.encode(message).finish();
  },
  toProtoMsg(message: Operator): OperatorProtoMsg {
    return {
      typeUrl: "/h2x.operators.Operator",
      value: Operator.encode(message).finish()
    };
  }
};