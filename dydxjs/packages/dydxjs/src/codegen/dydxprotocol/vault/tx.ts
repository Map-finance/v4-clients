//@ts-nocheck
import { SubaccountId, SubaccountIdAmino, SubaccountIdSDKType } from "../subaccounts/subaccount";
import { NumShares, NumSharesAmino, NumSharesSDKType } from "./share";
import { QuotingParams, QuotingParamsAmino, QuotingParamsSDKType, OperatorParams, OperatorParamsAmino, OperatorParamsSDKType, VaultParams, VaultParamsAmino, VaultParamsSDKType, Params, ParamsAmino, ParamsSDKType } from "./params";
import { VaultId, VaultIdAmino, VaultIdSDKType } from "./vault";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * MsgDepositToMegavault deposits the specified asset from the subaccount to
 * megavault.
 */
export interface MsgDepositToMegavault {
  /** The subaccount to deposit from. */
  subaccountId?: SubaccountId;
  /** Number of quote quantums to deposit. */
  quoteQuantums: Uint8Array;
}
export interface MsgDepositToMegavaultProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgDepositToMegavault";
  value: Uint8Array;
}
/**
 * MsgDepositToMegavault deposits the specified asset from the subaccount to
 * megavault.
 * @name MsgDepositToMegavaultAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgDepositToMegavault
 */
export interface MsgDepositToMegavaultAmino {
  /**
   * The subaccount to deposit from.
   */
  subaccount_id?: SubaccountIdAmino;
  /**
   * Number of quote quantums to deposit.
   */
  quote_quantums?: string;
}
export interface MsgDepositToMegavaultAminoMsg {
  type: "/dydxprotocol.vault.MsgDepositToMegavault";
  value: MsgDepositToMegavaultAmino;
}
/**
 * MsgDepositToMegavault deposits the specified asset from the subaccount to
 * megavault.
 */
export interface MsgDepositToMegavaultSDKType {
  subaccount_id?: SubaccountIdSDKType;
  quote_quantums: Uint8Array;
}
/** MsgDepositToMegavaultResponse is the Msg/DepositToMegavault response type. */
export interface MsgDepositToMegavaultResponse {
  /** The number of shares minted from the deposit. */
  mintedShares: NumShares;
}
export interface MsgDepositToMegavaultResponseProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgDepositToMegavaultResponse";
  value: Uint8Array;
}
/**
 * MsgDepositToMegavaultResponse is the Msg/DepositToMegavault response type.
 * @name MsgDepositToMegavaultResponseAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgDepositToMegavaultResponse
 */
export interface MsgDepositToMegavaultResponseAmino {
  /**
   * The number of shares minted from the deposit.
   */
  minted_shares?: NumSharesAmino;
}
export interface MsgDepositToMegavaultResponseAminoMsg {
  type: "/dydxprotocol.vault.MsgDepositToMegavaultResponse";
  value: MsgDepositToMegavaultResponseAmino;
}
/** MsgDepositToMegavaultResponse is the Msg/DepositToMegavault response type. */
export interface MsgDepositToMegavaultResponseSDKType {
  minted_shares: NumSharesSDKType;
}
/**
 * MsgWithdrawFromMegavault withdraws the specified shares from megavault to
 * a subaccount.
 */
export interface MsgWithdrawFromMegavault {
  /** The subaccount to withdraw to. */
  subaccountId: SubaccountId;
  /** Number of shares to withdraw. */
  shares: NumShares;
  /**
   * The minimum number of quote quantums above shares should redeem, i.e.
   * transaction fails if above shares redeem less than min_quote_quantums.
   */
  minQuoteQuantums: Uint8Array;
}
export interface MsgWithdrawFromMegavaultProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgWithdrawFromMegavault";
  value: Uint8Array;
}
/**
 * MsgWithdrawFromMegavault withdraws the specified shares from megavault to
 * a subaccount.
 * @name MsgWithdrawFromMegavaultAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgWithdrawFromMegavault
 */
export interface MsgWithdrawFromMegavaultAmino {
  /**
   * The subaccount to withdraw to.
   */
  subaccount_id?: SubaccountIdAmino;
  /**
   * Number of shares to withdraw.
   */
  shares?: NumSharesAmino;
  /**
   * The minimum number of quote quantums above shares should redeem, i.e.
   * transaction fails if above shares redeem less than min_quote_quantums.
   */
  min_quote_quantums?: string;
}
export interface MsgWithdrawFromMegavaultAminoMsg {
  type: "/dydxprotocol.vault.MsgWithdrawFromMegavault";
  value: MsgWithdrawFromMegavaultAmino;
}
/**
 * MsgWithdrawFromMegavault withdraws the specified shares from megavault to
 * a subaccount.
 */
export interface MsgWithdrawFromMegavaultSDKType {
  subaccount_id: SubaccountIdSDKType;
  shares: NumSharesSDKType;
  min_quote_quantums: Uint8Array;
}
/**
 * MsgWithdrawFromMegavaultResponse is the Msg/WithdrawFromMegavault response
 * type.
 */
export interface MsgWithdrawFromMegavaultResponse {
  /** The number of quote quantums redeemed from the withdrawal. */
  quoteQuantums: Uint8Array;
}
export interface MsgWithdrawFromMegavaultResponseProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgWithdrawFromMegavaultResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawFromMegavaultResponse is the Msg/WithdrawFromMegavault response
 * type.
 * @name MsgWithdrawFromMegavaultResponseAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgWithdrawFromMegavaultResponse
 */
export interface MsgWithdrawFromMegavaultResponseAmino {
  /**
   * The number of quote quantums redeemed from the withdrawal.
   */
  quote_quantums?: string;
}
export interface MsgWithdrawFromMegavaultResponseAminoMsg {
  type: "/dydxprotocol.vault.MsgWithdrawFromMegavaultResponse";
  value: MsgWithdrawFromMegavaultResponseAmino;
}
/**
 * MsgWithdrawFromMegavaultResponse is the Msg/WithdrawFromMegavault response
 * type.
 */
export interface MsgWithdrawFromMegavaultResponseSDKType {
  quote_quantums: Uint8Array;
}
/**
 * MsgUpdateDefaultQuotingParams is the Msg/UpdateDefaultQuotingParams request
 * type.
 */
export interface MsgUpdateDefaultQuotingParams {
  authority: string;
  /** The quoting parameters to update to. Every field must be set. */
  defaultQuotingParams: QuotingParams;
}
export interface MsgUpdateDefaultQuotingParamsProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParams";
  value: Uint8Array;
}
/**
 * MsgUpdateDefaultQuotingParams is the Msg/UpdateDefaultQuotingParams request
 * type.
 * @name MsgUpdateDefaultQuotingParamsAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgUpdateDefaultQuotingParams
 */
export interface MsgUpdateDefaultQuotingParamsAmino {
  authority?: string;
  /**
   * The quoting parameters to update to. Every field must be set.
   */
  default_quoting_params?: QuotingParamsAmino;
}
export interface MsgUpdateDefaultQuotingParamsAminoMsg {
  type: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParams";
  value: MsgUpdateDefaultQuotingParamsAmino;
}
/**
 * MsgUpdateDefaultQuotingParams is the Msg/UpdateDefaultQuotingParams request
 * type.
 */
export interface MsgUpdateDefaultQuotingParamsSDKType {
  authority: string;
  default_quoting_params: QuotingParamsSDKType;
}
/**
 * MsgUpdateDefaultQuotingParamsResponse is the Msg/UpdateDefaultQuotingParams
 * response type.
 */
export interface MsgUpdateDefaultQuotingParamsResponse {}
export interface MsgUpdateDefaultQuotingParamsResponseProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateDefaultQuotingParamsResponse is the Msg/UpdateDefaultQuotingParams
 * response type.
 * @name MsgUpdateDefaultQuotingParamsResponseAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgUpdateDefaultQuotingParamsResponse
 */
export interface MsgUpdateDefaultQuotingParamsResponseAmino {}
export interface MsgUpdateDefaultQuotingParamsResponseAminoMsg {
  type: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParamsResponse";
  value: MsgUpdateDefaultQuotingParamsResponseAmino;
}
/**
 * MsgUpdateDefaultQuotingParamsResponse is the Msg/UpdateDefaultQuotingParams
 * response type.
 */
export interface MsgUpdateDefaultQuotingParamsResponseSDKType {}
/** MsgSetVaultParams is the Msg/SetVaultParams request type. */
export interface MsgSetVaultParams {
  authority: string;
  /** The vault to set params of. */
  vaultId: VaultId;
  /** The parameters to set. */
  vaultParams: VaultParams;
}
export interface MsgSetVaultParamsProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgSetVaultParams";
  value: Uint8Array;
}
/**
 * MsgSetVaultParams is the Msg/SetVaultParams request type.
 * @name MsgSetVaultParamsAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgSetVaultParams
 */
export interface MsgSetVaultParamsAmino {
  authority?: string;
  /**
   * The vault to set params of.
   */
  vault_id?: VaultIdAmino;
  /**
   * The parameters to set.
   */
  vault_params?: VaultParamsAmino;
}
export interface MsgSetVaultParamsAminoMsg {
  type: "/dydxprotocol.vault.MsgSetVaultParams";
  value: MsgSetVaultParamsAmino;
}
/** MsgSetVaultParams is the Msg/SetVaultParams request type. */
export interface MsgSetVaultParamsSDKType {
  authority: string;
  vault_id: VaultIdSDKType;
  vault_params: VaultParamsSDKType;
}
/** MsgSetVaultParamsResponse is the Msg/SetVaultParams response type. */
export interface MsgSetVaultParamsResponse {}
export interface MsgSetVaultParamsResponseProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgSetVaultParamsResponse";
  value: Uint8Array;
}
/**
 * MsgSetVaultParamsResponse is the Msg/SetVaultParams response type.
 * @name MsgSetVaultParamsResponseAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgSetVaultParamsResponse
 */
export interface MsgSetVaultParamsResponseAmino {}
export interface MsgSetVaultParamsResponseAminoMsg {
  type: "/dydxprotocol.vault.MsgSetVaultParamsResponse";
  value: MsgSetVaultParamsResponseAmino;
}
/** MsgSetVaultParamsResponse is the Msg/SetVaultParams response type. */
export interface MsgSetVaultParamsResponseSDKType {}
/** MsgUnlockShares is the Msg/UnlockShares request type. */
export interface MsgUnlockShares {
  authority: string;
  /** Address of the owner to unlock shares of. */
  ownerAddress: string;
}
export interface MsgUnlockSharesProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgUnlockShares";
  value: Uint8Array;
}
/**
 * MsgUnlockShares is the Msg/UnlockShares request type.
 * @name MsgUnlockSharesAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgUnlockShares
 */
export interface MsgUnlockSharesAmino {
  authority?: string;
  /**
   * Address of the owner to unlock shares of.
   */
  owner_address?: string;
}
export interface MsgUnlockSharesAminoMsg {
  type: "/dydxprotocol.vault.MsgUnlockShares";
  value: MsgUnlockSharesAmino;
}
/** MsgUnlockShares is the Msg/UnlockShares request type. */
export interface MsgUnlockSharesSDKType {
  authority: string;
  owner_address: string;
}
/** MsgUnlockSharesResponse is the Msg/UnlockShares response type. */
export interface MsgUnlockSharesResponse {
  /** The number of shares unlocked. */
  unlockedShares: NumShares;
}
export interface MsgUnlockSharesResponseProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgUnlockSharesResponse";
  value: Uint8Array;
}
/**
 * MsgUnlockSharesResponse is the Msg/UnlockShares response type.
 * @name MsgUnlockSharesResponseAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgUnlockSharesResponse
 */
export interface MsgUnlockSharesResponseAmino {
  /**
   * The number of shares unlocked.
   */
  unlocked_shares?: NumSharesAmino;
}
export interface MsgUnlockSharesResponseAminoMsg {
  type: "/dydxprotocol.vault.MsgUnlockSharesResponse";
  value: MsgUnlockSharesResponseAmino;
}
/** MsgUnlockSharesResponse is the Msg/UnlockShares response type. */
export interface MsgUnlockSharesResponseSDKType {
  unlocked_shares: NumSharesSDKType;
}
/** MsgUpdateOperatorParams is the Msg/UpdateOperatorParams request type. */
export interface MsgUpdateOperatorParams {
  authority: string;
  /** Operator parameters to set. */
  params: OperatorParams;
}
export interface MsgUpdateOperatorParamsProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgUpdateOperatorParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperatorParams is the Msg/UpdateOperatorParams request type.
 * @name MsgUpdateOperatorParamsAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgUpdateOperatorParams
 */
export interface MsgUpdateOperatorParamsAmino {
  authority?: string;
  /**
   * Operator parameters to set.
   */
  params?: OperatorParamsAmino;
}
export interface MsgUpdateOperatorParamsAminoMsg {
  type: "/dydxprotocol.vault.MsgUpdateOperatorParams";
  value: MsgUpdateOperatorParamsAmino;
}
/** MsgUpdateOperatorParams is the Msg/UpdateOperatorParams request type. */
export interface MsgUpdateOperatorParamsSDKType {
  authority: string;
  params: OperatorParamsSDKType;
}
/** MsgUpdateVaultParamsResponse is the Msg/UpdateOperatorParams response type. */
export interface MsgUpdateOperatorParamsResponse {}
export interface MsgUpdateOperatorParamsResponseProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgUpdateOperatorParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateVaultParamsResponse is the Msg/UpdateOperatorParams response type.
 * @name MsgUpdateOperatorParamsResponseAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgUpdateOperatorParamsResponse
 */
export interface MsgUpdateOperatorParamsResponseAmino {}
export interface MsgUpdateOperatorParamsResponseAminoMsg {
  type: "/dydxprotocol.vault.MsgUpdateOperatorParamsResponse";
  value: MsgUpdateOperatorParamsResponseAmino;
}
/** MsgUpdateVaultParamsResponse is the Msg/UpdateOperatorParams response type. */
export interface MsgUpdateOperatorParamsResponseSDKType {}
/** MsgAllocateToVault is the Msg/AllocateToVault request type. */
export interface MsgAllocateToVault {
  authority: string;
  /** The vault to allocate to. */
  vaultId: VaultId;
  /** Number of quote quantums to allocate. */
  quoteQuantums: Uint8Array;
}
export interface MsgAllocateToVaultProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgAllocateToVault";
  value: Uint8Array;
}
/**
 * MsgAllocateToVault is the Msg/AllocateToVault request type.
 * @name MsgAllocateToVaultAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgAllocateToVault
 */
export interface MsgAllocateToVaultAmino {
  authority?: string;
  /**
   * The vault to allocate to.
   */
  vault_id?: VaultIdAmino;
  /**
   * Number of quote quantums to allocate.
   */
  quote_quantums?: string;
}
export interface MsgAllocateToVaultAminoMsg {
  type: "/dydxprotocol.vault.MsgAllocateToVault";
  value: MsgAllocateToVaultAmino;
}
/** MsgAllocateToVault is the Msg/AllocateToVault request type. */
export interface MsgAllocateToVaultSDKType {
  authority: string;
  vault_id: VaultIdSDKType;
  quote_quantums: Uint8Array;
}
/** MsgAllocateToVaultResponse is the Msg/AllocateToVault response type. */
export interface MsgAllocateToVaultResponse {}
export interface MsgAllocateToVaultResponseProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgAllocateToVaultResponse";
  value: Uint8Array;
}
/**
 * MsgAllocateToVaultResponse is the Msg/AllocateToVault response type.
 * @name MsgAllocateToVaultResponseAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgAllocateToVaultResponse
 */
export interface MsgAllocateToVaultResponseAmino {}
export interface MsgAllocateToVaultResponseAminoMsg {
  type: "/dydxprotocol.vault.MsgAllocateToVaultResponse";
  value: MsgAllocateToVaultResponseAmino;
}
/** MsgAllocateToVaultResponse is the Msg/AllocateToVault response type. */
export interface MsgAllocateToVaultResponseSDKType {}
/** MsgRetrieveFromVault is the Msg/RetrieveFromVault request type. */
export interface MsgRetrieveFromVault {
  authority: string;
  /** The vault to retrieve from. */
  vaultId: VaultId;
  /** Number of quote quantums to retrieve. */
  quoteQuantums: Uint8Array;
}
export interface MsgRetrieveFromVaultProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgRetrieveFromVault";
  value: Uint8Array;
}
/**
 * MsgRetrieveFromVault is the Msg/RetrieveFromVault request type.
 * @name MsgRetrieveFromVaultAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgRetrieveFromVault
 */
export interface MsgRetrieveFromVaultAmino {
  authority?: string;
  /**
   * The vault to retrieve from.
   */
  vault_id?: VaultIdAmino;
  /**
   * Number of quote quantums to retrieve.
   */
  quote_quantums?: string;
}
export interface MsgRetrieveFromVaultAminoMsg {
  type: "/dydxprotocol.vault.MsgRetrieveFromVault";
  value: MsgRetrieveFromVaultAmino;
}
/** MsgRetrieveFromVault is the Msg/RetrieveFromVault request type. */
export interface MsgRetrieveFromVaultSDKType {
  authority: string;
  vault_id: VaultIdSDKType;
  quote_quantums: Uint8Array;
}
/** MsgRetrieveFromVaultResponse is the Msg/RetrieveFromVault response type. */
export interface MsgRetrieveFromVaultResponse {}
export interface MsgRetrieveFromVaultResponseProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgRetrieveFromVaultResponse";
  value: Uint8Array;
}
/**
 * MsgRetrieveFromVaultResponse is the Msg/RetrieveFromVault response type.
 * @name MsgRetrieveFromVaultResponseAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgRetrieveFromVaultResponse
 */
export interface MsgRetrieveFromVaultResponseAmino {}
export interface MsgRetrieveFromVaultResponseAminoMsg {
  type: "/dydxprotocol.vault.MsgRetrieveFromVaultResponse";
  value: MsgRetrieveFromVaultResponseAmino;
}
/** MsgRetrieveFromVaultResponse is the Msg/RetrieveFromVault response type. */
export interface MsgRetrieveFromVaultResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * Deprecated since v6.x as is replaced by MsgUpdateDefaultQuotingParams.
 */
/** @deprecated */
export interface MsgUpdateParams {
  authority: string;
  /** The parameters to update. Each field must be set. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * Deprecated since v6.x as is replaced by MsgUpdateDefaultQuotingParams.
 * @name MsgUpdateParamsAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgUpdateParams
 * @deprecated
 */
export interface MsgUpdateParamsAmino {
  authority?: string;
  /**
   * The parameters to update. Each field must be set.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/dydxprotocol.vault.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * Deprecated since v6.x as is replaced by MsgUpdateDefaultQuotingParams.
 */
/** @deprecated */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgSetVaultQuotingParams is the Msg/SetVaultQuotingParams request type.
 * Deprecated since v6.x as is replaced by MsgSetVaultParams.
 */
/** @deprecated */
export interface MsgSetVaultQuotingParams {
  authority: string;
  /** The vault to set quoting params of. */
  vaultId: VaultId;
  /** The quoting parameters to set. Each field must be set. */
  quotingParams: QuotingParams;
}
export interface MsgSetVaultQuotingParamsProtoMsg {
  typeUrl: "/dydxprotocol.vault.MsgSetVaultQuotingParams";
  value: Uint8Array;
}
/**
 * MsgSetVaultQuotingParams is the Msg/SetVaultQuotingParams request type.
 * Deprecated since v6.x as is replaced by MsgSetVaultParams.
 * @name MsgSetVaultQuotingParamsAmino
 * @package dydxprotocol.vault
 * @see proto type: dydxprotocol.vault.MsgSetVaultQuotingParams
 * @deprecated
 */
export interface MsgSetVaultQuotingParamsAmino {
  authority?: string;
  /**
   * The vault to set quoting params of.
   */
  vault_id?: VaultIdAmino;
  /**
   * The quoting parameters to set. Each field must be set.
   */
  quoting_params?: QuotingParamsAmino;
}
export interface MsgSetVaultQuotingParamsAminoMsg {
  type: "/dydxprotocol.vault.MsgSetVaultQuotingParams";
  value: MsgSetVaultQuotingParamsAmino;
}
/**
 * MsgSetVaultQuotingParams is the Msg/SetVaultQuotingParams request type.
 * Deprecated since v6.x as is replaced by MsgSetVaultParams.
 */
/** @deprecated */
export interface MsgSetVaultQuotingParamsSDKType {
  authority: string;
  vault_id: VaultIdSDKType;
  quoting_params: QuotingParamsSDKType;
}
function createBaseMsgDepositToMegavault(): MsgDepositToMegavault {
  return {
    subaccountId: undefined,
    quoteQuantums: new Uint8Array()
  };
}
export const MsgDepositToMegavault = {
  typeUrl: "/dydxprotocol.vault.MsgDepositToMegavault",
  encode(message: MsgDepositToMegavault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== undefined) {
      SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.quoteQuantums.length !== 0) {
      writer.uint32(18).bytes(message.quoteQuantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositToMegavault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositToMegavault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = SubaccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.quoteQuantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDepositToMegavault>): MsgDepositToMegavault {
    const message = createBaseMsgDepositToMegavault();
    message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? SubaccountId.fromPartial(object.subaccountId) : undefined;
    message.quoteQuantums = object.quoteQuantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgDepositToMegavaultAmino): MsgDepositToMegavault {
    const message = createBaseMsgDepositToMegavault();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = SubaccountId.fromAmino(object.subaccount_id);
    }
    if (object.quote_quantums !== undefined && object.quote_quantums !== null) {
      message.quoteQuantums = bytesFromBase64(object.quote_quantums);
    }
    return message;
  },
  toAmino(message: MsgDepositToMegavault): MsgDepositToMegavaultAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId ? SubaccountId.toAmino(message.subaccountId) : undefined;
    obj.quote_quantums = message.quoteQuantums ? base64FromBytes(message.quoteQuantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDepositToMegavaultAminoMsg): MsgDepositToMegavault {
    return MsgDepositToMegavault.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositToMegavaultProtoMsg): MsgDepositToMegavault {
    return MsgDepositToMegavault.decode(message.value);
  },
  toProto(message: MsgDepositToMegavault): Uint8Array {
    return MsgDepositToMegavault.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositToMegavault): MsgDepositToMegavaultProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgDepositToMegavault",
      value: MsgDepositToMegavault.encode(message).finish()
    };
  }
};
function createBaseMsgDepositToMegavaultResponse(): MsgDepositToMegavaultResponse {
  return {
    mintedShares: NumShares.fromPartial({})
  };
}
export const MsgDepositToMegavaultResponse = {
  typeUrl: "/dydxprotocol.vault.MsgDepositToMegavaultResponse",
  encode(message: MsgDepositToMegavaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintedShares !== undefined) {
      NumShares.encode(message.mintedShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositToMegavaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositToMegavaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintedShares = NumShares.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDepositToMegavaultResponse>): MsgDepositToMegavaultResponse {
    const message = createBaseMsgDepositToMegavaultResponse();
    message.mintedShares = object.mintedShares !== undefined && object.mintedShares !== null ? NumShares.fromPartial(object.mintedShares) : undefined;
    return message;
  },
  fromAmino(object: MsgDepositToMegavaultResponseAmino): MsgDepositToMegavaultResponse {
    const message = createBaseMsgDepositToMegavaultResponse();
    if (object.minted_shares !== undefined && object.minted_shares !== null) {
      message.mintedShares = NumShares.fromAmino(object.minted_shares);
    }
    return message;
  },
  toAmino(message: MsgDepositToMegavaultResponse): MsgDepositToMegavaultResponseAmino {
    const obj: any = {};
    obj.minted_shares = message.mintedShares ? NumShares.toAmino(message.mintedShares) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDepositToMegavaultResponseAminoMsg): MsgDepositToMegavaultResponse {
    return MsgDepositToMegavaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositToMegavaultResponseProtoMsg): MsgDepositToMegavaultResponse {
    return MsgDepositToMegavaultResponse.decode(message.value);
  },
  toProto(message: MsgDepositToMegavaultResponse): Uint8Array {
    return MsgDepositToMegavaultResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositToMegavaultResponse): MsgDepositToMegavaultResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgDepositToMegavaultResponse",
      value: MsgDepositToMegavaultResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawFromMegavault(): MsgWithdrawFromMegavault {
  return {
    subaccountId: SubaccountId.fromPartial({}),
    shares: NumShares.fromPartial({}),
    minQuoteQuantums: new Uint8Array()
  };
}
export const MsgWithdrawFromMegavault = {
  typeUrl: "/dydxprotocol.vault.MsgWithdrawFromMegavault",
  encode(message: MsgWithdrawFromMegavault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== undefined) {
      SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.shares !== undefined) {
      NumShares.encode(message.shares, writer.uint32(18).fork()).ldelim();
    }
    if (message.minQuoteQuantums.length !== 0) {
      writer.uint32(26).bytes(message.minQuoteQuantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFromMegavault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromMegavault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = SubaccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.shares = NumShares.decode(reader, reader.uint32());
          break;
        case 3:
          message.minQuoteQuantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawFromMegavault>): MsgWithdrawFromMegavault {
    const message = createBaseMsgWithdrawFromMegavault();
    message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? SubaccountId.fromPartial(object.subaccountId) : undefined;
    message.shares = object.shares !== undefined && object.shares !== null ? NumShares.fromPartial(object.shares) : undefined;
    message.minQuoteQuantums = object.minQuoteQuantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgWithdrawFromMegavaultAmino): MsgWithdrawFromMegavault {
    const message = createBaseMsgWithdrawFromMegavault();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = SubaccountId.fromAmino(object.subaccount_id);
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = NumShares.fromAmino(object.shares);
    }
    if (object.min_quote_quantums !== undefined && object.min_quote_quantums !== null) {
      message.minQuoteQuantums = bytesFromBase64(object.min_quote_quantums);
    }
    return message;
  },
  toAmino(message: MsgWithdrawFromMegavault): MsgWithdrawFromMegavaultAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId ? SubaccountId.toAmino(message.subaccountId) : undefined;
    obj.shares = message.shares ? NumShares.toAmino(message.shares) : undefined;
    obj.min_quote_quantums = message.minQuoteQuantums ? base64FromBytes(message.minQuoteQuantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFromMegavaultAminoMsg): MsgWithdrawFromMegavault {
    return MsgWithdrawFromMegavault.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawFromMegavaultProtoMsg): MsgWithdrawFromMegavault {
    return MsgWithdrawFromMegavault.decode(message.value);
  },
  toProto(message: MsgWithdrawFromMegavault): Uint8Array {
    return MsgWithdrawFromMegavault.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFromMegavault): MsgWithdrawFromMegavaultProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgWithdrawFromMegavault",
      value: MsgWithdrawFromMegavault.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawFromMegavaultResponse(): MsgWithdrawFromMegavaultResponse {
  return {
    quoteQuantums: new Uint8Array()
  };
}
export const MsgWithdrawFromMegavaultResponse = {
  typeUrl: "/dydxprotocol.vault.MsgWithdrawFromMegavaultResponse",
  encode(message: MsgWithdrawFromMegavaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quoteQuantums.length !== 0) {
      writer.uint32(10).bytes(message.quoteQuantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFromMegavaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromMegavaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoteQuantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawFromMegavaultResponse>): MsgWithdrawFromMegavaultResponse {
    const message = createBaseMsgWithdrawFromMegavaultResponse();
    message.quoteQuantums = object.quoteQuantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgWithdrawFromMegavaultResponseAmino): MsgWithdrawFromMegavaultResponse {
    const message = createBaseMsgWithdrawFromMegavaultResponse();
    if (object.quote_quantums !== undefined && object.quote_quantums !== null) {
      message.quoteQuantums = bytesFromBase64(object.quote_quantums);
    }
    return message;
  },
  toAmino(message: MsgWithdrawFromMegavaultResponse): MsgWithdrawFromMegavaultResponseAmino {
    const obj: any = {};
    obj.quote_quantums = message.quoteQuantums ? base64FromBytes(message.quoteQuantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFromMegavaultResponseAminoMsg): MsgWithdrawFromMegavaultResponse {
    return MsgWithdrawFromMegavaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawFromMegavaultResponseProtoMsg): MsgWithdrawFromMegavaultResponse {
    return MsgWithdrawFromMegavaultResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawFromMegavaultResponse): Uint8Array {
    return MsgWithdrawFromMegavaultResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFromMegavaultResponse): MsgWithdrawFromMegavaultResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgWithdrawFromMegavaultResponse",
      value: MsgWithdrawFromMegavaultResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDefaultQuotingParams(): MsgUpdateDefaultQuotingParams {
  return {
    authority: "",
    defaultQuotingParams: QuotingParams.fromPartial({})
  };
}
export const MsgUpdateDefaultQuotingParams = {
  typeUrl: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParams",
  encode(message: MsgUpdateDefaultQuotingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.defaultQuotingParams !== undefined) {
      QuotingParams.encode(message.defaultQuotingParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDefaultQuotingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDefaultQuotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.defaultQuotingParams = QuotingParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDefaultQuotingParams>): MsgUpdateDefaultQuotingParams {
    const message = createBaseMsgUpdateDefaultQuotingParams();
    message.authority = object.authority ?? "";
    message.defaultQuotingParams = object.defaultQuotingParams !== undefined && object.defaultQuotingParams !== null ? QuotingParams.fromPartial(object.defaultQuotingParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateDefaultQuotingParamsAmino): MsgUpdateDefaultQuotingParams {
    const message = createBaseMsgUpdateDefaultQuotingParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.default_quoting_params !== undefined && object.default_quoting_params !== null) {
      message.defaultQuotingParams = QuotingParams.fromAmino(object.default_quoting_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateDefaultQuotingParams): MsgUpdateDefaultQuotingParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.default_quoting_params = message.defaultQuotingParams ? QuotingParams.toAmino(message.defaultQuotingParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDefaultQuotingParamsAminoMsg): MsgUpdateDefaultQuotingParams {
    return MsgUpdateDefaultQuotingParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDefaultQuotingParamsProtoMsg): MsgUpdateDefaultQuotingParams {
    return MsgUpdateDefaultQuotingParams.decode(message.value);
  },
  toProto(message: MsgUpdateDefaultQuotingParams): Uint8Array {
    return MsgUpdateDefaultQuotingParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDefaultQuotingParams): MsgUpdateDefaultQuotingParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParams",
      value: MsgUpdateDefaultQuotingParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDefaultQuotingParamsResponse(): MsgUpdateDefaultQuotingParamsResponse {
  return {};
}
export const MsgUpdateDefaultQuotingParamsResponse = {
  typeUrl: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParamsResponse",
  encode(_: MsgUpdateDefaultQuotingParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDefaultQuotingParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDefaultQuotingParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateDefaultQuotingParamsResponse>): MsgUpdateDefaultQuotingParamsResponse {
    const message = createBaseMsgUpdateDefaultQuotingParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDefaultQuotingParamsResponseAmino): MsgUpdateDefaultQuotingParamsResponse {
    const message = createBaseMsgUpdateDefaultQuotingParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateDefaultQuotingParamsResponse): MsgUpdateDefaultQuotingParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDefaultQuotingParamsResponseAminoMsg): MsgUpdateDefaultQuotingParamsResponse {
    return MsgUpdateDefaultQuotingParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDefaultQuotingParamsResponseProtoMsg): MsgUpdateDefaultQuotingParamsResponse {
    return MsgUpdateDefaultQuotingParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDefaultQuotingParamsResponse): Uint8Array {
    return MsgUpdateDefaultQuotingParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDefaultQuotingParamsResponse): MsgUpdateDefaultQuotingParamsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgUpdateDefaultQuotingParamsResponse",
      value: MsgUpdateDefaultQuotingParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetVaultParams(): MsgSetVaultParams {
  return {
    authority: "",
    vaultId: VaultId.fromPartial({}),
    vaultParams: VaultParams.fromPartial({})
  };
}
export const MsgSetVaultParams = {
  typeUrl: "/dydxprotocol.vault.MsgSetVaultParams",
  encode(message: MsgSetVaultParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.vaultId !== undefined) {
      VaultId.encode(message.vaultId, writer.uint32(18).fork()).ldelim();
    }
    if (message.vaultParams !== undefined) {
      VaultParams.encode(message.vaultParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetVaultParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVaultParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.vaultId = VaultId.decode(reader, reader.uint32());
          break;
        case 3:
          message.vaultParams = VaultParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetVaultParams>): MsgSetVaultParams {
    const message = createBaseMsgSetVaultParams();
    message.authority = object.authority ?? "";
    message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? VaultId.fromPartial(object.vaultId) : undefined;
    message.vaultParams = object.vaultParams !== undefined && object.vaultParams !== null ? VaultParams.fromPartial(object.vaultParams) : undefined;
    return message;
  },
  fromAmino(object: MsgSetVaultParamsAmino): MsgSetVaultParams {
    const message = createBaseMsgSetVaultParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.vault_id !== undefined && object.vault_id !== null) {
      message.vaultId = VaultId.fromAmino(object.vault_id);
    }
    if (object.vault_params !== undefined && object.vault_params !== null) {
      message.vaultParams = VaultParams.fromAmino(object.vault_params);
    }
    return message;
  },
  toAmino(message: MsgSetVaultParams): MsgSetVaultParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.vault_id = message.vaultId ? VaultId.toAmino(message.vaultId) : undefined;
    obj.vault_params = message.vaultParams ? VaultParams.toAmino(message.vaultParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetVaultParamsAminoMsg): MsgSetVaultParams {
    return MsgSetVaultParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetVaultParamsProtoMsg): MsgSetVaultParams {
    return MsgSetVaultParams.decode(message.value);
  },
  toProto(message: MsgSetVaultParams): Uint8Array {
    return MsgSetVaultParams.encode(message).finish();
  },
  toProtoMsg(message: MsgSetVaultParams): MsgSetVaultParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgSetVaultParams",
      value: MsgSetVaultParams.encode(message).finish()
    };
  }
};
function createBaseMsgSetVaultParamsResponse(): MsgSetVaultParamsResponse {
  return {};
}
export const MsgSetVaultParamsResponse = {
  typeUrl: "/dydxprotocol.vault.MsgSetVaultParamsResponse",
  encode(_: MsgSetVaultParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetVaultParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVaultParamsResponse();
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
  fromPartial(_: Partial<MsgSetVaultParamsResponse>): MsgSetVaultParamsResponse {
    const message = createBaseMsgSetVaultParamsResponse();
    return message;
  },
  fromAmino(_: MsgSetVaultParamsResponseAmino): MsgSetVaultParamsResponse {
    const message = createBaseMsgSetVaultParamsResponse();
    return message;
  },
  toAmino(_: MsgSetVaultParamsResponse): MsgSetVaultParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetVaultParamsResponseAminoMsg): MsgSetVaultParamsResponse {
    return MsgSetVaultParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetVaultParamsResponseProtoMsg): MsgSetVaultParamsResponse {
    return MsgSetVaultParamsResponse.decode(message.value);
  },
  toProto(message: MsgSetVaultParamsResponse): Uint8Array {
    return MsgSetVaultParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetVaultParamsResponse): MsgSetVaultParamsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgSetVaultParamsResponse",
      value: MsgSetVaultParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnlockShares(): MsgUnlockShares {
  return {
    authority: "",
    ownerAddress: ""
  };
}
export const MsgUnlockShares = {
  typeUrl: "/dydxprotocol.vault.MsgUnlockShares",
  encode(message: MsgUnlockShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlockShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnlockShares>): MsgUnlockShares {
    const message = createBaseMsgUnlockShares();
    message.authority = object.authority ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnlockSharesAmino): MsgUnlockShares {
    const message = createBaseMsgUnlockShares();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    return message;
  },
  toAmino(message: MsgUnlockShares): MsgUnlockSharesAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnlockSharesAminoMsg): MsgUnlockShares {
    return MsgUnlockShares.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlockSharesProtoMsg): MsgUnlockShares {
    return MsgUnlockShares.decode(message.value);
  },
  toProto(message: MsgUnlockShares): Uint8Array {
    return MsgUnlockShares.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlockShares): MsgUnlockSharesProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgUnlockShares",
      value: MsgUnlockShares.encode(message).finish()
    };
  }
};
function createBaseMsgUnlockSharesResponse(): MsgUnlockSharesResponse {
  return {
    unlockedShares: NumShares.fromPartial({})
  };
}
export const MsgUnlockSharesResponse = {
  typeUrl: "/dydxprotocol.vault.MsgUnlockSharesResponse",
  encode(message: MsgUnlockSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unlockedShares !== undefined) {
      NumShares.encode(message.unlockedShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlockSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlockedShares = NumShares.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnlockSharesResponse>): MsgUnlockSharesResponse {
    const message = createBaseMsgUnlockSharesResponse();
    message.unlockedShares = object.unlockedShares !== undefined && object.unlockedShares !== null ? NumShares.fromPartial(object.unlockedShares) : undefined;
    return message;
  },
  fromAmino(object: MsgUnlockSharesResponseAmino): MsgUnlockSharesResponse {
    const message = createBaseMsgUnlockSharesResponse();
    if (object.unlocked_shares !== undefined && object.unlocked_shares !== null) {
      message.unlockedShares = NumShares.fromAmino(object.unlocked_shares);
    }
    return message;
  },
  toAmino(message: MsgUnlockSharesResponse): MsgUnlockSharesResponseAmino {
    const obj: any = {};
    obj.unlocked_shares = message.unlockedShares ? NumShares.toAmino(message.unlockedShares) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnlockSharesResponseAminoMsg): MsgUnlockSharesResponse {
    return MsgUnlockSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlockSharesResponseProtoMsg): MsgUnlockSharesResponse {
    return MsgUnlockSharesResponse.decode(message.value);
  },
  toProto(message: MsgUnlockSharesResponse): Uint8Array {
    return MsgUnlockSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlockSharesResponse): MsgUnlockSharesResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgUnlockSharesResponse",
      value: MsgUnlockSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperatorParams(): MsgUpdateOperatorParams {
  return {
    authority: "",
    params: OperatorParams.fromPartial({})
  };
}
export const MsgUpdateOperatorParams = {
  typeUrl: "/dydxprotocol.vault.MsgUpdateOperatorParams",
  encode(message: MsgUpdateOperatorParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      OperatorParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperatorParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = OperatorParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateOperatorParams>): MsgUpdateOperatorParams {
    const message = createBaseMsgUpdateOperatorParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? OperatorParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperatorParamsAmino): MsgUpdateOperatorParams {
    const message = createBaseMsgUpdateOperatorParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = OperatorParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperatorParams): MsgUpdateOperatorParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? OperatorParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperatorParamsAminoMsg): MsgUpdateOperatorParams {
    return MsgUpdateOperatorParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperatorParamsProtoMsg): MsgUpdateOperatorParams {
    return MsgUpdateOperatorParams.decode(message.value);
  },
  toProto(message: MsgUpdateOperatorParams): Uint8Array {
    return MsgUpdateOperatorParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperatorParams): MsgUpdateOperatorParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgUpdateOperatorParams",
      value: MsgUpdateOperatorParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperatorParamsResponse(): MsgUpdateOperatorParamsResponse {
  return {};
}
export const MsgUpdateOperatorParamsResponse = {
  typeUrl: "/dydxprotocol.vault.MsgUpdateOperatorParamsResponse",
  encode(_: MsgUpdateOperatorParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperatorParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperatorParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateOperatorParamsResponse>): MsgUpdateOperatorParamsResponse {
    const message = createBaseMsgUpdateOperatorParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperatorParamsResponseAmino): MsgUpdateOperatorParamsResponse {
    const message = createBaseMsgUpdateOperatorParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperatorParamsResponse): MsgUpdateOperatorParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperatorParamsResponseAminoMsg): MsgUpdateOperatorParamsResponse {
    return MsgUpdateOperatorParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperatorParamsResponseProtoMsg): MsgUpdateOperatorParamsResponse {
    return MsgUpdateOperatorParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperatorParamsResponse): Uint8Array {
    return MsgUpdateOperatorParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperatorParamsResponse): MsgUpdateOperatorParamsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgUpdateOperatorParamsResponse",
      value: MsgUpdateOperatorParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAllocateToVault(): MsgAllocateToVault {
  return {
    authority: "",
    vaultId: VaultId.fromPartial({}),
    quoteQuantums: new Uint8Array()
  };
}
export const MsgAllocateToVault = {
  typeUrl: "/dydxprotocol.vault.MsgAllocateToVault",
  encode(message: MsgAllocateToVault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.vaultId !== undefined) {
      VaultId.encode(message.vaultId, writer.uint32(18).fork()).ldelim();
    }
    if (message.quoteQuantums.length !== 0) {
      writer.uint32(26).bytes(message.quoteQuantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAllocateToVault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAllocateToVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.vaultId = VaultId.decode(reader, reader.uint32());
          break;
        case 3:
          message.quoteQuantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAllocateToVault>): MsgAllocateToVault {
    const message = createBaseMsgAllocateToVault();
    message.authority = object.authority ?? "";
    message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? VaultId.fromPartial(object.vaultId) : undefined;
    message.quoteQuantums = object.quoteQuantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgAllocateToVaultAmino): MsgAllocateToVault {
    const message = createBaseMsgAllocateToVault();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.vault_id !== undefined && object.vault_id !== null) {
      message.vaultId = VaultId.fromAmino(object.vault_id);
    }
    if (object.quote_quantums !== undefined && object.quote_quantums !== null) {
      message.quoteQuantums = bytesFromBase64(object.quote_quantums);
    }
    return message;
  },
  toAmino(message: MsgAllocateToVault): MsgAllocateToVaultAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.vault_id = message.vaultId ? VaultId.toAmino(message.vaultId) : undefined;
    obj.quote_quantums = message.quoteQuantums ? base64FromBytes(message.quoteQuantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAllocateToVaultAminoMsg): MsgAllocateToVault {
    return MsgAllocateToVault.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAllocateToVaultProtoMsg): MsgAllocateToVault {
    return MsgAllocateToVault.decode(message.value);
  },
  toProto(message: MsgAllocateToVault): Uint8Array {
    return MsgAllocateToVault.encode(message).finish();
  },
  toProtoMsg(message: MsgAllocateToVault): MsgAllocateToVaultProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgAllocateToVault",
      value: MsgAllocateToVault.encode(message).finish()
    };
  }
};
function createBaseMsgAllocateToVaultResponse(): MsgAllocateToVaultResponse {
  return {};
}
export const MsgAllocateToVaultResponse = {
  typeUrl: "/dydxprotocol.vault.MsgAllocateToVaultResponse",
  encode(_: MsgAllocateToVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAllocateToVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAllocateToVaultResponse();
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
  fromPartial(_: Partial<MsgAllocateToVaultResponse>): MsgAllocateToVaultResponse {
    const message = createBaseMsgAllocateToVaultResponse();
    return message;
  },
  fromAmino(_: MsgAllocateToVaultResponseAmino): MsgAllocateToVaultResponse {
    const message = createBaseMsgAllocateToVaultResponse();
    return message;
  },
  toAmino(_: MsgAllocateToVaultResponse): MsgAllocateToVaultResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAllocateToVaultResponseAminoMsg): MsgAllocateToVaultResponse {
    return MsgAllocateToVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAllocateToVaultResponseProtoMsg): MsgAllocateToVaultResponse {
    return MsgAllocateToVaultResponse.decode(message.value);
  },
  toProto(message: MsgAllocateToVaultResponse): Uint8Array {
    return MsgAllocateToVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAllocateToVaultResponse): MsgAllocateToVaultResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgAllocateToVaultResponse",
      value: MsgAllocateToVaultResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRetrieveFromVault(): MsgRetrieveFromVault {
  return {
    authority: "",
    vaultId: VaultId.fromPartial({}),
    quoteQuantums: new Uint8Array()
  };
}
export const MsgRetrieveFromVault = {
  typeUrl: "/dydxprotocol.vault.MsgRetrieveFromVault",
  encode(message: MsgRetrieveFromVault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.vaultId !== undefined) {
      VaultId.encode(message.vaultId, writer.uint32(18).fork()).ldelim();
    }
    if (message.quoteQuantums.length !== 0) {
      writer.uint32(26).bytes(message.quoteQuantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetrieveFromVault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetrieveFromVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.vaultId = VaultId.decode(reader, reader.uint32());
          break;
        case 3:
          message.quoteQuantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRetrieveFromVault>): MsgRetrieveFromVault {
    const message = createBaseMsgRetrieveFromVault();
    message.authority = object.authority ?? "";
    message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? VaultId.fromPartial(object.vaultId) : undefined;
    message.quoteQuantums = object.quoteQuantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgRetrieveFromVaultAmino): MsgRetrieveFromVault {
    const message = createBaseMsgRetrieveFromVault();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.vault_id !== undefined && object.vault_id !== null) {
      message.vaultId = VaultId.fromAmino(object.vault_id);
    }
    if (object.quote_quantums !== undefined && object.quote_quantums !== null) {
      message.quoteQuantums = bytesFromBase64(object.quote_quantums);
    }
    return message;
  },
  toAmino(message: MsgRetrieveFromVault): MsgRetrieveFromVaultAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.vault_id = message.vaultId ? VaultId.toAmino(message.vaultId) : undefined;
    obj.quote_quantums = message.quoteQuantums ? base64FromBytes(message.quoteQuantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRetrieveFromVaultAminoMsg): MsgRetrieveFromVault {
    return MsgRetrieveFromVault.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetrieveFromVaultProtoMsg): MsgRetrieveFromVault {
    return MsgRetrieveFromVault.decode(message.value);
  },
  toProto(message: MsgRetrieveFromVault): Uint8Array {
    return MsgRetrieveFromVault.encode(message).finish();
  },
  toProtoMsg(message: MsgRetrieveFromVault): MsgRetrieveFromVaultProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgRetrieveFromVault",
      value: MsgRetrieveFromVault.encode(message).finish()
    };
  }
};
function createBaseMsgRetrieveFromVaultResponse(): MsgRetrieveFromVaultResponse {
  return {};
}
export const MsgRetrieveFromVaultResponse = {
  typeUrl: "/dydxprotocol.vault.MsgRetrieveFromVaultResponse",
  encode(_: MsgRetrieveFromVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetrieveFromVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetrieveFromVaultResponse();
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
  fromPartial(_: Partial<MsgRetrieveFromVaultResponse>): MsgRetrieveFromVaultResponse {
    const message = createBaseMsgRetrieveFromVaultResponse();
    return message;
  },
  fromAmino(_: MsgRetrieveFromVaultResponseAmino): MsgRetrieveFromVaultResponse {
    const message = createBaseMsgRetrieveFromVaultResponse();
    return message;
  },
  toAmino(_: MsgRetrieveFromVaultResponse): MsgRetrieveFromVaultResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRetrieveFromVaultResponseAminoMsg): MsgRetrieveFromVaultResponse {
    return MsgRetrieveFromVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetrieveFromVaultResponseProtoMsg): MsgRetrieveFromVaultResponse {
    return MsgRetrieveFromVaultResponse.decode(message.value);
  },
  toProto(message: MsgRetrieveFromVaultResponse): Uint8Array {
    return MsgRetrieveFromVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRetrieveFromVaultResponse): MsgRetrieveFromVaultResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgRetrieveFromVaultResponse",
      value: MsgRetrieveFromVaultResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/dydxprotocol.vault.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgSetVaultQuotingParams(): MsgSetVaultQuotingParams {
  return {
    authority: "",
    vaultId: VaultId.fromPartial({}),
    quotingParams: QuotingParams.fromPartial({})
  };
}
export const MsgSetVaultQuotingParams = {
  typeUrl: "/dydxprotocol.vault.MsgSetVaultQuotingParams",
  encode(message: MsgSetVaultQuotingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.vaultId !== undefined) {
      VaultId.encode(message.vaultId, writer.uint32(18).fork()).ldelim();
    }
    if (message.quotingParams !== undefined) {
      QuotingParams.encode(message.quotingParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetVaultQuotingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVaultQuotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.vaultId = VaultId.decode(reader, reader.uint32());
          break;
        case 3:
          message.quotingParams = QuotingParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetVaultQuotingParams>): MsgSetVaultQuotingParams {
    const message = createBaseMsgSetVaultQuotingParams();
    message.authority = object.authority ?? "";
    message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? VaultId.fromPartial(object.vaultId) : undefined;
    message.quotingParams = object.quotingParams !== undefined && object.quotingParams !== null ? QuotingParams.fromPartial(object.quotingParams) : undefined;
    return message;
  },
  fromAmino(object: MsgSetVaultQuotingParamsAmino): MsgSetVaultQuotingParams {
    const message = createBaseMsgSetVaultQuotingParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.vault_id !== undefined && object.vault_id !== null) {
      message.vaultId = VaultId.fromAmino(object.vault_id);
    }
    if (object.quoting_params !== undefined && object.quoting_params !== null) {
      message.quotingParams = QuotingParams.fromAmino(object.quoting_params);
    }
    return message;
  },
  toAmino(message: MsgSetVaultQuotingParams): MsgSetVaultQuotingParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.vault_id = message.vaultId ? VaultId.toAmino(message.vaultId) : undefined;
    obj.quoting_params = message.quotingParams ? QuotingParams.toAmino(message.quotingParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetVaultQuotingParamsAminoMsg): MsgSetVaultQuotingParams {
    return MsgSetVaultQuotingParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetVaultQuotingParamsProtoMsg): MsgSetVaultQuotingParams {
    return MsgSetVaultQuotingParams.decode(message.value);
  },
  toProto(message: MsgSetVaultQuotingParams): Uint8Array {
    return MsgSetVaultQuotingParams.encode(message).finish();
  },
  toProtoMsg(message: MsgSetVaultQuotingParams): MsgSetVaultQuotingParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vault.MsgSetVaultQuotingParams",
      value: MsgSetVaultQuotingParams.encode(message).finish()
    };
  }
};