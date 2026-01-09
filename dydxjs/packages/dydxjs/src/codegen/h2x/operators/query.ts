//@ts-nocheck
import { Operator, OperatorAmino, OperatorSDKType } from "./operators";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryAllOperatorsRequest is the request type for querying all operators. */
export interface QueryAllOperatorsRequest {}
export interface QueryAllOperatorsRequestProtoMsg {
  typeUrl: "/h2x.operators.QueryAllOperatorsRequest";
  value: Uint8Array;
}
/**
 * QueryAllOperatorsRequest is the request type for querying all operators.
 * @name QueryAllOperatorsRequestAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.QueryAllOperatorsRequest
 */
export interface QueryAllOperatorsRequestAmino {}
export interface QueryAllOperatorsRequestAminoMsg {
  type: "/h2x.operators.QueryAllOperatorsRequest";
  value: QueryAllOperatorsRequestAmino;
}
/** QueryAllOperatorsRequest is the request type for querying all operators. */
export interface QueryAllOperatorsRequestSDKType {}
/** QueryAllOperatorsResponse is the response type for querying all operators. */
export interface QueryAllOperatorsResponse {
  operators: Operator[];
}
export interface QueryAllOperatorsResponseProtoMsg {
  typeUrl: "/h2x.operators.QueryAllOperatorsResponse";
  value: Uint8Array;
}
/**
 * QueryAllOperatorsResponse is the response type for querying all operators.
 * @name QueryAllOperatorsResponseAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.QueryAllOperatorsResponse
 */
export interface QueryAllOperatorsResponseAmino {
  operators?: OperatorAmino[];
}
export interface QueryAllOperatorsResponseAminoMsg {
  type: "/h2x.operators.QueryAllOperatorsResponse";
  value: QueryAllOperatorsResponseAmino;
}
/** QueryAllOperatorsResponse is the response type for querying all operators. */
export interface QueryAllOperatorsResponseSDKType {
  operators: OperatorSDKType[];
}
/** QueryIsOperatorRequest is the request type for checking if an address is an operator. */
export interface QueryIsOperatorRequest {
  address: string;
}
export interface QueryIsOperatorRequestProtoMsg {
  typeUrl: "/h2x.operators.QueryIsOperatorRequest";
  value: Uint8Array;
}
/**
 * QueryIsOperatorRequest is the request type for checking if an address is an operator.
 * @name QueryIsOperatorRequestAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.QueryIsOperatorRequest
 */
export interface QueryIsOperatorRequestAmino {
  address?: string;
}
export interface QueryIsOperatorRequestAminoMsg {
  type: "/h2x.operators.QueryIsOperatorRequest";
  value: QueryIsOperatorRequestAmino;
}
/** QueryIsOperatorRequest is the request type for checking if an address is an operator. */
export interface QueryIsOperatorRequestSDKType {
  address: string;
}
/** QueryIsOperatorResponse is the response type for checking if an address is an operator. */
export interface QueryIsOperatorResponse {
  isOperator: boolean;
}
export interface QueryIsOperatorResponseProtoMsg {
  typeUrl: "/h2x.operators.QueryIsOperatorResponse";
  value: Uint8Array;
}
/**
 * QueryIsOperatorResponse is the response type for checking if an address is an operator.
 * @name QueryIsOperatorResponseAmino
 * @package h2x.operators
 * @see proto type: h2x.operators.QueryIsOperatorResponse
 */
export interface QueryIsOperatorResponseAmino {
  is_operator?: boolean;
}
export interface QueryIsOperatorResponseAminoMsg {
  type: "/h2x.operators.QueryIsOperatorResponse";
  value: QueryIsOperatorResponseAmino;
}
/** QueryIsOperatorResponse is the response type for checking if an address is an operator. */
export interface QueryIsOperatorResponseSDKType {
  is_operator: boolean;
}
function createBaseQueryAllOperatorsRequest(): QueryAllOperatorsRequest {
  return {};
}
export const QueryAllOperatorsRequest = {
  typeUrl: "/h2x.operators.QueryAllOperatorsRequest",
  encode(_: QueryAllOperatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllOperatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOperatorsRequest();
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
  fromPartial(_: Partial<QueryAllOperatorsRequest>): QueryAllOperatorsRequest {
    const message = createBaseQueryAllOperatorsRequest();
    return message;
  },
  fromAmino(_: QueryAllOperatorsRequestAmino): QueryAllOperatorsRequest {
    const message = createBaseQueryAllOperatorsRequest();
    return message;
  },
  toAmino(_: QueryAllOperatorsRequest): QueryAllOperatorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllOperatorsRequestAminoMsg): QueryAllOperatorsRequest {
    return QueryAllOperatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOperatorsRequestProtoMsg): QueryAllOperatorsRequest {
    return QueryAllOperatorsRequest.decode(message.value);
  },
  toProto(message: QueryAllOperatorsRequest): Uint8Array {
    return QueryAllOperatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOperatorsRequest): QueryAllOperatorsRequestProtoMsg {
    return {
      typeUrl: "/h2x.operators.QueryAllOperatorsRequest",
      value: QueryAllOperatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllOperatorsResponse(): QueryAllOperatorsResponse {
  return {
    operators: []
  };
}
export const QueryAllOperatorsResponse = {
  typeUrl: "/h2x.operators.QueryAllOperatorsResponse",
  encode(message: QueryAllOperatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllOperatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOperatorsResponse();
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
  fromPartial(object: Partial<QueryAllOperatorsResponse>): QueryAllOperatorsResponse {
    const message = createBaseQueryAllOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllOperatorsResponseAmino): QueryAllOperatorsResponse {
    const message = createBaseQueryAllOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllOperatorsResponse): QueryAllOperatorsResponseAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllOperatorsResponseAminoMsg): QueryAllOperatorsResponse {
    return QueryAllOperatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOperatorsResponseProtoMsg): QueryAllOperatorsResponse {
    return QueryAllOperatorsResponse.decode(message.value);
  },
  toProto(message: QueryAllOperatorsResponse): Uint8Array {
    return QueryAllOperatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOperatorsResponse): QueryAllOperatorsResponseProtoMsg {
    return {
      typeUrl: "/h2x.operators.QueryAllOperatorsResponse",
      value: QueryAllOperatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIsOperatorRequest(): QueryIsOperatorRequest {
  return {
    address: ""
  };
}
export const QueryIsOperatorRequest = {
  typeUrl: "/h2x.operators.QueryIsOperatorRequest",
  encode(message: QueryIsOperatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsOperatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsOperatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIsOperatorRequest>): QueryIsOperatorRequest {
    const message = createBaseQueryIsOperatorRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryIsOperatorRequestAmino): QueryIsOperatorRequest {
    const message = createBaseQueryIsOperatorRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryIsOperatorRequest): QueryIsOperatorRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryIsOperatorRequestAminoMsg): QueryIsOperatorRequest {
    return QueryIsOperatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsOperatorRequestProtoMsg): QueryIsOperatorRequest {
    return QueryIsOperatorRequest.decode(message.value);
  },
  toProto(message: QueryIsOperatorRequest): Uint8Array {
    return QueryIsOperatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsOperatorRequest): QueryIsOperatorRequestProtoMsg {
    return {
      typeUrl: "/h2x.operators.QueryIsOperatorRequest",
      value: QueryIsOperatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsOperatorResponse(): QueryIsOperatorResponse {
  return {
    isOperator: false
  };
}
export const QueryIsOperatorResponse = {
  typeUrl: "/h2x.operators.QueryIsOperatorResponse",
  encode(message: QueryIsOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isOperator === true) {
      writer.uint32(8).bool(message.isOperator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isOperator = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIsOperatorResponse>): QueryIsOperatorResponse {
    const message = createBaseQueryIsOperatorResponse();
    message.isOperator = object.isOperator ?? false;
    return message;
  },
  fromAmino(object: QueryIsOperatorResponseAmino): QueryIsOperatorResponse {
    const message = createBaseQueryIsOperatorResponse();
    if (object.is_operator !== undefined && object.is_operator !== null) {
      message.isOperator = object.is_operator;
    }
    return message;
  },
  toAmino(message: QueryIsOperatorResponse): QueryIsOperatorResponseAmino {
    const obj: any = {};
    obj.is_operator = message.isOperator === false ? undefined : message.isOperator;
    return obj;
  },
  fromAminoMsg(object: QueryIsOperatorResponseAminoMsg): QueryIsOperatorResponse {
    return QueryIsOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsOperatorResponseProtoMsg): QueryIsOperatorResponse {
    return QueryIsOperatorResponse.decode(message.value);
  },
  toProto(message: QueryIsOperatorResponse): Uint8Array {
    return QueryIsOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsOperatorResponse): QueryIsOperatorResponseProtoMsg {
    return {
      typeUrl: "/h2x.operators.QueryIsOperatorResponse",
      value: QueryIsOperatorResponse.encode(message).finish()
    };
  }
};