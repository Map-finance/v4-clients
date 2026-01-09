//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddOperators, MsgRemoveOperators, MsgUpdateOperatorPermissions } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/h2x.operators.MsgAddOperators", MsgAddOperators], ["/h2x.operators.MsgRemoveOperators", MsgRemoveOperators], ["/h2x.operators.MsgUpdateOperatorPermissions", MsgUpdateOperatorPermissions]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addOperators(value: MsgAddOperators) {
      return {
        typeUrl: "/h2x.operators.MsgAddOperators",
        value: MsgAddOperators.encode(value).finish()
      };
    },
    removeOperators(value: MsgRemoveOperators) {
      return {
        typeUrl: "/h2x.operators.MsgRemoveOperators",
        value: MsgRemoveOperators.encode(value).finish()
      };
    },
    updateOperatorPermissions(value: MsgUpdateOperatorPermissions) {
      return {
        typeUrl: "/h2x.operators.MsgUpdateOperatorPermissions",
        value: MsgUpdateOperatorPermissions.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addOperators(value: MsgAddOperators) {
      return {
        typeUrl: "/h2x.operators.MsgAddOperators",
        value
      };
    },
    removeOperators(value: MsgRemoveOperators) {
      return {
        typeUrl: "/h2x.operators.MsgRemoveOperators",
        value
      };
    },
    updateOperatorPermissions(value: MsgUpdateOperatorPermissions) {
      return {
        typeUrl: "/h2x.operators.MsgUpdateOperatorPermissions",
        value
      };
    }
  },
  fromPartial: {
    addOperators(value: MsgAddOperators) {
      return {
        typeUrl: "/h2x.operators.MsgAddOperators",
        value: MsgAddOperators.fromPartial(value)
      };
    },
    removeOperators(value: MsgRemoveOperators) {
      return {
        typeUrl: "/h2x.operators.MsgRemoveOperators",
        value: MsgRemoveOperators.fromPartial(value)
      };
    },
    updateOperatorPermissions(value: MsgUpdateOperatorPermissions) {
      return {
        typeUrl: "/h2x.operators.MsgUpdateOperatorPermissions",
        value: MsgUpdateOperatorPermissions.fromPartial(value)
      };
    }
  }
};