//@ts-nocheck
import { IndexerSubaccountId, IndexerSubaccountIdAmino, IndexerSubaccountIdSDKType, IndexerPerpetualPosition, IndexerPerpetualPositionAmino, IndexerPerpetualPositionSDKType, IndexerAssetPosition, IndexerAssetPositionAmino, IndexerAssetPositionSDKType } from "../protocol/v1/subaccount";
import { IndexerOrder, IndexerOrderAmino, IndexerOrderSDKType, IndexerOrderId, IndexerOrderIdAmino, IndexerOrderIdSDKType, ClobPairStatus } from "../protocol/v1/clob";
import { OrderRemovalReason } from "../shared/removal_reason";
import { PerpetualMarketType } from "../protocol/v1/perpetual";
import { VaultStatus } from "../protocol/v1/vault";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** Type is the type for funding values. */
export enum FundingEventV1_Type {
  /** TYPE_UNSPECIFIED - Unspecified type. */
  TYPE_UNSPECIFIED = 0,
  /**
   * TYPE_PREMIUM_SAMPLE - Premium sample is the combined value from all premium votes during a
   * `funding-sample` epoch.
   */
  TYPE_PREMIUM_SAMPLE = 1,
  /**
   * TYPE_FUNDING_RATE_AND_INDEX - Funding rate is the final funding rate combining all premium samples
   * during a `funding-tick` epoch.
   */
  TYPE_FUNDING_RATE_AND_INDEX = 2,
  /**
   * TYPE_PREMIUM_VOTE - TODO(DEC-1513): Investigate whether premium vote values need to be
   * sent to indexer.
   */
  TYPE_PREMIUM_VOTE = 3,
  UNRECOGNIZED = -1,
}
export const FundingEventV1_TypeSDKType = FundingEventV1_Type;
export const FundingEventV1_TypeAmino = FundingEventV1_Type;
export function fundingEventV1_TypeFromJSON(object: any): FundingEventV1_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return FundingEventV1_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_PREMIUM_SAMPLE":
      return FundingEventV1_Type.TYPE_PREMIUM_SAMPLE;
    case 2:
    case "TYPE_FUNDING_RATE_AND_INDEX":
      return FundingEventV1_Type.TYPE_FUNDING_RATE_AND_INDEX;
    case 3:
    case "TYPE_PREMIUM_VOTE":
      return FundingEventV1_Type.TYPE_PREMIUM_VOTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FundingEventV1_Type.UNRECOGNIZED;
  }
}
export function fundingEventV1_TypeToJSON(object: FundingEventV1_Type): string {
  switch (object) {
    case FundingEventV1_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case FundingEventV1_Type.TYPE_PREMIUM_SAMPLE:
      return "TYPE_PREMIUM_SAMPLE";
    case FundingEventV1_Type.TYPE_FUNDING_RATE_AND_INDEX:
      return "TYPE_FUNDING_RATE_AND_INDEX";
    case FundingEventV1_Type.TYPE_PREMIUM_VOTE:
      return "TYPE_PREMIUM_VOTE";
    case FundingEventV1_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ActionType 定义运营账户可以执行的操作类型。 */
export enum OperatorActionEventV1_ActionType {
  /** ACTION_TYPE_UNSPECIFIED - 未指定 */
  ACTION_TYPE_UNSPECIFIED = 0,
  /** ACTION_TYPE_ADD_ASSET - 添加资产 */
  ACTION_TYPE_ADD_ASSET = 1,
  /** ACTION_TYPE_ADD_PERPETUAL - 添加永续合约交易对 */
  ACTION_TYPE_ADD_PERPETUAL = 2,
  /** ACTION_TYPE_ADD_SPOT_MARKET - 添加现货交易对 */
  ACTION_TYPE_ADD_SPOT_MARKET = 3,
  /** ACTION_TYPE_DELIST_PERPETUAL - 下架永续合约交易对 */
  ACTION_TYPE_DELIST_PERPETUAL = 4,
  /** ACTION_TYPE_DELIST_SPOT_MARKET - 下架现货交易对 */
  ACTION_TYPE_DELIST_SPOT_MARKET = 5,
  /** ACTION_TYPE_ADD_ORACLE_MARKET - 添加预言机价格市场 */
  ACTION_TYPE_ADD_ORACLE_MARKET = 6,
  /** ACTION_TYPE_UPDATE_ORACLE_MARKET - 更新预言机价格市场 */
  ACTION_TYPE_UPDATE_ORACLE_MARKET = 7,
  UNRECOGNIZED = -1,
}
export const OperatorActionEventV1_ActionTypeSDKType = OperatorActionEventV1_ActionType;
export const OperatorActionEventV1_ActionTypeAmino = OperatorActionEventV1_ActionType;
export function operatorActionEventV1_ActionTypeFromJSON(object: any): OperatorActionEventV1_ActionType {
  switch (object) {
    case 0:
    case "ACTION_TYPE_UNSPECIFIED":
      return OperatorActionEventV1_ActionType.ACTION_TYPE_UNSPECIFIED;
    case 1:
    case "ACTION_TYPE_ADD_ASSET":
      return OperatorActionEventV1_ActionType.ACTION_TYPE_ADD_ASSET;
    case 2:
    case "ACTION_TYPE_ADD_PERPETUAL":
      return OperatorActionEventV1_ActionType.ACTION_TYPE_ADD_PERPETUAL;
    case 3:
    case "ACTION_TYPE_ADD_SPOT_MARKET":
      return OperatorActionEventV1_ActionType.ACTION_TYPE_ADD_SPOT_MARKET;
    case 4:
    case "ACTION_TYPE_DELIST_PERPETUAL":
      return OperatorActionEventV1_ActionType.ACTION_TYPE_DELIST_PERPETUAL;
    case 5:
    case "ACTION_TYPE_DELIST_SPOT_MARKET":
      return OperatorActionEventV1_ActionType.ACTION_TYPE_DELIST_SPOT_MARKET;
    case 6:
    case "ACTION_TYPE_ADD_ORACLE_MARKET":
      return OperatorActionEventV1_ActionType.ACTION_TYPE_ADD_ORACLE_MARKET;
    case 7:
    case "ACTION_TYPE_UPDATE_ORACLE_MARKET":
      return OperatorActionEventV1_ActionType.ACTION_TYPE_UPDATE_ORACLE_MARKET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperatorActionEventV1_ActionType.UNRECOGNIZED;
  }
}
export function operatorActionEventV1_ActionTypeToJSON(object: OperatorActionEventV1_ActionType): string {
  switch (object) {
    case OperatorActionEventV1_ActionType.ACTION_TYPE_UNSPECIFIED:
      return "ACTION_TYPE_UNSPECIFIED";
    case OperatorActionEventV1_ActionType.ACTION_TYPE_ADD_ASSET:
      return "ACTION_TYPE_ADD_ASSET";
    case OperatorActionEventV1_ActionType.ACTION_TYPE_ADD_PERPETUAL:
      return "ACTION_TYPE_ADD_PERPETUAL";
    case OperatorActionEventV1_ActionType.ACTION_TYPE_ADD_SPOT_MARKET:
      return "ACTION_TYPE_ADD_SPOT_MARKET";
    case OperatorActionEventV1_ActionType.ACTION_TYPE_DELIST_PERPETUAL:
      return "ACTION_TYPE_DELIST_PERPETUAL";
    case OperatorActionEventV1_ActionType.ACTION_TYPE_DELIST_SPOT_MARKET:
      return "ACTION_TYPE_DELIST_SPOT_MARKET";
    case OperatorActionEventV1_ActionType.ACTION_TYPE_ADD_ORACLE_MARKET:
      return "ACTION_TYPE_ADD_ORACLE_MARKET";
    case OperatorActionEventV1_ActionType.ACTION_TYPE_UPDATE_ORACLE_MARKET:
      return "ACTION_TYPE_UPDATE_ORACLE_MARKET";
    case OperatorActionEventV1_ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** AgentRemovalType 代理钱包移除类型 */
export enum AgentRemovalType {
  /** AGENT_REMOVAL_TYPE_UNSPECIFIED - 未指定 */
  AGENT_REMOVAL_TYPE_UNSPECIFIED = 0,
  /** AGENT_REMOVAL_TYPE_MANUAL - 用户手动移除 */
  AGENT_REMOVAL_TYPE_MANUAL = 1,
  /** AGENT_REMOVAL_TYPE_EXPIRED - 过期自动移除（EndBlocker 清理） */
  AGENT_REMOVAL_TYPE_EXPIRED = 2,
  UNRECOGNIZED = -1,
}
export const AgentRemovalTypeSDKType = AgentRemovalType;
export const AgentRemovalTypeAmino = AgentRemovalType;
export function agentRemovalTypeFromJSON(object: any): AgentRemovalType {
  switch (object) {
    case 0:
    case "AGENT_REMOVAL_TYPE_UNSPECIFIED":
      return AgentRemovalType.AGENT_REMOVAL_TYPE_UNSPECIFIED;
    case 1:
    case "AGENT_REMOVAL_TYPE_MANUAL":
      return AgentRemovalType.AGENT_REMOVAL_TYPE_MANUAL;
    case 2:
    case "AGENT_REMOVAL_TYPE_EXPIRED":
      return AgentRemovalType.AGENT_REMOVAL_TYPE_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AgentRemovalType.UNRECOGNIZED;
  }
}
export function agentRemovalTypeToJSON(object: AgentRemovalType): string {
  switch (object) {
    case AgentRemovalType.AGENT_REMOVAL_TYPE_UNSPECIFIED:
      return "AGENT_REMOVAL_TYPE_UNSPECIFIED";
    case AgentRemovalType.AGENT_REMOVAL_TYPE_MANUAL:
      return "AGENT_REMOVAL_TYPE_MANUAL";
    case AgentRemovalType.AGENT_REMOVAL_TYPE_EXPIRED:
      return "AGENT_REMOVAL_TYPE_EXPIRED";
    case AgentRemovalType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * FundingUpdate is used for funding update events and includes a funding
 * value and an optional funding index that correspond to a perpetual market.
 */
export interface FundingUpdateV1 {
  /** The id of the perpetual market. */
  perpetualId: number;
  /**
   * funding value (in parts-per-million) can be premium vote, premium sample,
   * or funding rate.
   */
  fundingValuePpm: number;
  /**
   * funding index is required if and only if parent `FundingEvent` type is
   * `TYPE_FUNDING_RATE_AND_INDEX`.
   */
  fundingIndex: Uint8Array;
}
export interface FundingUpdateV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.FundingUpdateV1";
  value: Uint8Array;
}
/**
 * FundingUpdate is used for funding update events and includes a funding
 * value and an optional funding index that correspond to a perpetual market.
 * @name FundingUpdateV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.FundingUpdateV1
 */
export interface FundingUpdateV1Amino {
  /**
   * The id of the perpetual market.
   */
  perpetual_id?: number;
  /**
   * funding value (in parts-per-million) can be premium vote, premium sample,
   * or funding rate.
   */
  funding_value_ppm?: number;
  /**
   * funding index is required if and only if parent `FundingEvent` type is
   * `TYPE_FUNDING_RATE_AND_INDEX`.
   */
  funding_index?: string;
}
export interface FundingUpdateV1AminoMsg {
  type: "/h2x.indexer.events.FundingUpdateV1";
  value: FundingUpdateV1Amino;
}
/**
 * FundingUpdate is used for funding update events and includes a funding
 * value and an optional funding index that correspond to a perpetual market.
 */
export interface FundingUpdateV1SDKType {
  perpetual_id: number;
  funding_value_ppm: number;
  funding_index: Uint8Array;
}
/**
 * FundingEvent message contains a list of per-market funding values. The
 * funding values in the list is of the same type and the types are: which can
 * have one of the following types:
 * 1. Premium vote: votes on the premium values injected by block proposers.
 * 2. Premium sample: combined value from all premium votes during a
 *    `funding-sample` epoch.
 * 3. Funding rate and index: final funding rate combining all premium samples
 *    during a `funding-tick` epoch and funding index accordingly updated with
 *    `funding rate * price`.
 */
export interface FundingEventV1 {
  /**
   * updates is a list of per-market funding updates for all existing perpetual
   * markets. The list is sorted by `perpetualId`s which are unique.
   */
  updates: FundingUpdateV1[];
  /** type stores the type of funding updates. */
  type: FundingEventV1_Type;
}
export interface FundingEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.FundingEventV1";
  value: Uint8Array;
}
/**
 * FundingEvent message contains a list of per-market funding values. The
 * funding values in the list is of the same type and the types are: which can
 * have one of the following types:
 * 1. Premium vote: votes on the premium values injected by block proposers.
 * 2. Premium sample: combined value from all premium votes during a
 *    `funding-sample` epoch.
 * 3. Funding rate and index: final funding rate combining all premium samples
 *    during a `funding-tick` epoch and funding index accordingly updated with
 *    `funding rate * price`.
 * @name FundingEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.FundingEventV1
 */
export interface FundingEventV1Amino {
  /**
   * updates is a list of per-market funding updates for all existing perpetual
   * markets. The list is sorted by `perpetualId`s which are unique.
   */
  updates?: FundingUpdateV1Amino[];
  /**
   * type stores the type of funding updates.
   */
  type?: FundingEventV1_Type;
}
export interface FundingEventV1AminoMsg {
  type: "/h2x.indexer.events.FundingEventV1";
  value: FundingEventV1Amino;
}
/**
 * FundingEvent message contains a list of per-market funding values. The
 * funding values in the list is of the same type and the types are: which can
 * have one of the following types:
 * 1. Premium vote: votes on the premium values injected by block proposers.
 * 2. Premium sample: combined value from all premium votes during a
 *    `funding-sample` epoch.
 * 3. Funding rate and index: final funding rate combining all premium samples
 *    during a `funding-tick` epoch and funding index accordingly updated with
 *    `funding rate * price`.
 */
export interface FundingEventV1SDKType {
  updates: FundingUpdateV1SDKType[];
  type: FundingEventV1_Type;
}
/**
 * MarketEvent message contains all the information about a market event on
 * the dYdX chain.
 */
export interface MarketEventV1 {
  /** market id. */
  marketId: number;
  priceUpdate?: MarketPriceUpdateEventV1;
  marketCreate?: MarketCreateEventV1;
  marketModify?: MarketModifyEventV1;
}
export interface MarketEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.MarketEventV1";
  value: Uint8Array;
}
/**
 * MarketEvent message contains all the information about a market event on
 * the dYdX chain.
 * @name MarketEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.MarketEventV1
 */
export interface MarketEventV1Amino {
  /**
   * market id.
   */
  market_id?: number;
  price_update?: MarketPriceUpdateEventV1Amino;
  market_create?: MarketCreateEventV1Amino;
  market_modify?: MarketModifyEventV1Amino;
}
export interface MarketEventV1AminoMsg {
  type: "/h2x.indexer.events.MarketEventV1";
  value: MarketEventV1Amino;
}
/**
 * MarketEvent message contains all the information about a market event on
 * the dYdX chain.
 */
export interface MarketEventV1SDKType {
  market_id: number;
  price_update?: MarketPriceUpdateEventV1SDKType;
  market_create?: MarketCreateEventV1SDKType;
  market_modify?: MarketModifyEventV1SDKType;
}
/**
 * MarketPriceUpdateEvent message contains all the information about a price
 * update on the dYdX chain.
 */
export interface MarketPriceUpdateEventV1 {
  /**
   * price_with_exponent. Multiply by 10 ^ Exponent to get the human readable
   * price in dollars. For example if `Exponent == -5` then a `exponent_price`
   * of `1,000,000,000` represents “$10,000`.
   */
  priceWithExponent: bigint;
}
export interface MarketPriceUpdateEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.MarketPriceUpdateEventV1";
  value: Uint8Array;
}
/**
 * MarketPriceUpdateEvent message contains all the information about a price
 * update on the dYdX chain.
 * @name MarketPriceUpdateEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.MarketPriceUpdateEventV1
 */
export interface MarketPriceUpdateEventV1Amino {
  /**
   * price_with_exponent. Multiply by 10 ^ Exponent to get the human readable
   * price in dollars. For example if `Exponent == -5` then a `exponent_price`
   * of `1,000,000,000` represents “$10,000`.
   */
  price_with_exponent?: string;
}
export interface MarketPriceUpdateEventV1AminoMsg {
  type: "/h2x.indexer.events.MarketPriceUpdateEventV1";
  value: MarketPriceUpdateEventV1Amino;
}
/**
 * MarketPriceUpdateEvent message contains all the information about a price
 * update on the dYdX chain.
 */
export interface MarketPriceUpdateEventV1SDKType {
  price_with_exponent: bigint;
}
/** shared fields between MarketCreateEvent and MarketModifyEvent */
export interface MarketBaseEventV1 {
  /** String representation of the market pair, e.g. `BTC-USD` */
  pair: string;
  /**
   * The minimum allowable change in the Price value for a given update.
   * Measured as 1e-6.
   */
  minPriceChangePpm: number;
}
export interface MarketBaseEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.MarketBaseEventV1";
  value: Uint8Array;
}
/**
 * shared fields between MarketCreateEvent and MarketModifyEvent
 * @name MarketBaseEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.MarketBaseEventV1
 */
export interface MarketBaseEventV1Amino {
  /**
   * String representation of the market pair, e.g. `BTC-USD`
   */
  pair?: string;
  /**
   * The minimum allowable change in the Price value for a given update.
   * Measured as 1e-6.
   */
  min_price_change_ppm?: number;
}
export interface MarketBaseEventV1AminoMsg {
  type: "/h2x.indexer.events.MarketBaseEventV1";
  value: MarketBaseEventV1Amino;
}
/** shared fields between MarketCreateEvent and MarketModifyEvent */
export interface MarketBaseEventV1SDKType {
  pair: string;
  min_price_change_ppm: number;
}
/**
 * MarketCreateEvent message contains all the information about a new market on
 * the dYdX chain.
 */
export interface MarketCreateEventV1 {
  base?: MarketBaseEventV1;
  /**
   * Static value. The exponent of the price.
   * For example if Exponent == -5 then a `exponent_price` of 1,000,000,000
   * represents $10,000. Therefore 10 ^ Exponent represents the smallest
   * price step (in dollars) that can be recorded.
   */
  exponent: number;
}
export interface MarketCreateEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.MarketCreateEventV1";
  value: Uint8Array;
}
/**
 * MarketCreateEvent message contains all the information about a new market on
 * the dYdX chain.
 * @name MarketCreateEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.MarketCreateEventV1
 */
export interface MarketCreateEventV1Amino {
  base?: MarketBaseEventV1Amino;
  /**
   * Static value. The exponent of the price.
   * For example if Exponent == -5 then a `exponent_price` of 1,000,000,000
   * represents $10,000. Therefore 10 ^ Exponent represents the smallest
   * price step (in dollars) that can be recorded.
   */
  exponent?: number;
}
export interface MarketCreateEventV1AminoMsg {
  type: "/h2x.indexer.events.MarketCreateEventV1";
  value: MarketCreateEventV1Amino;
}
/**
 * MarketCreateEvent message contains all the information about a new market on
 * the dYdX chain.
 */
export interface MarketCreateEventV1SDKType {
  base?: MarketBaseEventV1SDKType;
  exponent: number;
}
/**
 * MarketModifyEvent message contains all the information about a market update
 * on the dYdX chain
 */
export interface MarketModifyEventV1 {
  base?: MarketBaseEventV1;
}
export interface MarketModifyEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.MarketModifyEventV1";
  value: Uint8Array;
}
/**
 * MarketModifyEvent message contains all the information about a market update
 * on the dYdX chain
 * @name MarketModifyEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.MarketModifyEventV1
 */
export interface MarketModifyEventV1Amino {
  base?: MarketBaseEventV1Amino;
}
export interface MarketModifyEventV1AminoMsg {
  type: "/h2x.indexer.events.MarketModifyEventV1";
  value: MarketModifyEventV1Amino;
}
/**
 * MarketModifyEvent message contains all the information about a market update
 * on the dYdX chain
 */
export interface MarketModifyEventV1SDKType {
  base?: MarketBaseEventV1SDKType;
}
/** SourceOfFunds is the source of funds in a transfer event. */
export interface SourceOfFunds {
  subaccountId?: IndexerSubaccountId;
  address?: string;
}
export interface SourceOfFundsProtoMsg {
  typeUrl: "/h2x.indexer.events.SourceOfFunds";
  value: Uint8Array;
}
/**
 * SourceOfFunds is the source of funds in a transfer event.
 * @name SourceOfFundsAmino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.SourceOfFunds
 */
export interface SourceOfFundsAmino {
  subaccount_id?: IndexerSubaccountIdAmino;
  address?: string;
}
export interface SourceOfFundsAminoMsg {
  type: "/h2x.indexer.events.SourceOfFunds";
  value: SourceOfFundsAmino;
}
/** SourceOfFunds is the source of funds in a transfer event. */
export interface SourceOfFundsSDKType {
  subaccount_id?: IndexerSubaccountIdSDKType;
  address?: string;
}
/**
 * TransferEvent message contains all the information about a transfer,
 * deposit-to-subaccount, or withdraw-from-subaccount on the dYdX chain.
 * When a subaccount is involved, a SubaccountUpdateEvent message will
 * be produced with the updated asset positions.
 */
export interface TransferEventV1 {
  senderSubaccountId?: IndexerSubaccountId;
  recipientSubaccountId?: IndexerSubaccountId;
  /** Id of the asset transfered. */
  assetId: number;
  /**
   * The amount of asset in quantums to transfer.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals)
   */
  amount: Uint8Array;
  /**
   * The sender is one of below
   * - a subaccount ID (in transfer and withdraw events).
   * - a wallet address (in deposit events).
   */
  sender?: SourceOfFunds;
  /**
   * The recipient is one of below
   * - a subaccount ID (in transfer and deposit events).
   * - a wallet address (in withdraw events).
   */
  recipient?: SourceOfFunds;
}
export interface TransferEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.TransferEventV1";
  value: Uint8Array;
}
/**
 * TransferEvent message contains all the information about a transfer,
 * deposit-to-subaccount, or withdraw-from-subaccount on the dYdX chain.
 * When a subaccount is involved, a SubaccountUpdateEvent message will
 * be produced with the updated asset positions.
 * @name TransferEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.TransferEventV1
 */
export interface TransferEventV1Amino {
  sender_subaccount_id?: IndexerSubaccountIdAmino;
  recipient_subaccount_id?: IndexerSubaccountIdAmino;
  /**
   * Id of the asset transfered.
   */
  asset_id?: number;
  /**
   * The amount of asset in quantums to transfer.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals)
   */
  amount?: string;
  /**
   * The sender is one of below
   * - a subaccount ID (in transfer and withdraw events).
   * - a wallet address (in deposit events).
   */
  sender?: SourceOfFundsAmino;
  /**
   * The recipient is one of below
   * - a subaccount ID (in transfer and deposit events).
   * - a wallet address (in withdraw events).
   */
  recipient?: SourceOfFundsAmino;
}
export interface TransferEventV1AminoMsg {
  type: "/h2x.indexer.events.TransferEventV1";
  value: TransferEventV1Amino;
}
/**
 * TransferEvent message contains all the information about a transfer,
 * deposit-to-subaccount, or withdraw-from-subaccount on the dYdX chain.
 * When a subaccount is involved, a SubaccountUpdateEvent message will
 * be produced with the updated asset positions.
 */
export interface TransferEventV1SDKType {
  sender_subaccount_id?: IndexerSubaccountIdSDKType;
  recipient_subaccount_id?: IndexerSubaccountIdSDKType;
  asset_id: number;
  amount: Uint8Array;
  sender?: SourceOfFundsSDKType;
  recipient?: SourceOfFundsSDKType;
}
/**
 * OrderFillEvent message contains all the information from an order match in
 * the dYdX chain. This includes the maker/taker orders that matched and the
 * amount filled.
 */
export interface OrderFillEventV1 {
  makerOrder: IndexerOrder;
  order?: IndexerOrder;
  liquidationOrder?: LiquidationOrderV1;
  /**
   * Fill amount in base quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  fillAmount: Uint8Array;
  /**
   * Maker fee in USDC quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  makerFee: Uint8Array;
  /**
   * Taker fee in USDC quantums. If the taker order is a liquidation, then this
   * represents the special liquidation fee, not the standard taker fee.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  takerFee: Uint8Array;
  /**
   * Total filled of the maker order in base quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  totalFilledMaker: Uint8Array;
  /**
   * Total filled of the taker order in base quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  totalFilledTaker: Uint8Array;
  /**
   * rev share for affiliates in USDC quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  affiliateRevShare: Uint8Array;
  /**
   * fee for maker builder in USDC quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  makerBuilderFee: Uint8Array;
  /**
   * fee for taker builder in USDC quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  takerBuilderFee: Uint8Array;
  /** builder address for maker */
  makerBuilderAddress: string;
  /** builder address for taker */
  takerBuilderAddress: string;
  /**
   * fee for maker order router in USDC quantums
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  makerOrderRouterFee: Uint8Array;
  /**
   * fee for taker order router in USDC quantums
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  takerOrderRouterFee: Uint8Array;
  /** order router address for maker */
  makerOrderRouterAddress: string;
  /** order router address for taker */
  takerOrderRouterAddress: string;
}
export interface OrderFillEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.OrderFillEventV1";
  value: Uint8Array;
}
/**
 * OrderFillEvent message contains all the information from an order match in
 * the dYdX chain. This includes the maker/taker orders that matched and the
 * amount filled.
 * @name OrderFillEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.OrderFillEventV1
 */
export interface OrderFillEventV1Amino {
  maker_order?: IndexerOrderAmino;
  order?: IndexerOrderAmino;
  liquidation_order?: LiquidationOrderV1Amino;
  /**
   * Fill amount in base quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  fill_amount?: string;
  /**
   * Maker fee in USDC quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  maker_fee?: string;
  /**
   * Taker fee in USDC quantums. If the taker order is a liquidation, then this
   * represents the special liquidation fee, not the standard taker fee.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  taker_fee?: string;
  /**
   * Total filled of the maker order in base quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  total_filled_maker?: string;
  /**
   * Total filled of the taker order in base quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  total_filled_taker?: string;
  /**
   * rev share for affiliates in USDC quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  affiliate_rev_share?: string;
  /**
   * fee for maker builder in USDC quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  maker_builder_fee?: string;
  /**
   * fee for taker builder in USDC quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  taker_builder_fee?: string;
  /**
   * builder address for maker
   */
  maker_builder_address?: string;
  /**
   * builder address for taker
   */
  taker_builder_address?: string;
  /**
   * fee for maker order router in USDC quantums
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  maker_order_router_fee?: string;
  /**
   * fee for taker order router in USDC quantums
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  taker_order_router_fee?: string;
  /**
   * order router address for maker
   */
  maker_order_router_address?: string;
  /**
   * order router address for taker
   */
  taker_order_router_address?: string;
}
export interface OrderFillEventV1AminoMsg {
  type: "/h2x.indexer.events.OrderFillEventV1";
  value: OrderFillEventV1Amino;
}
/**
 * OrderFillEvent message contains all the information from an order match in
 * the dYdX chain. This includes the maker/taker orders that matched and the
 * amount filled.
 */
export interface OrderFillEventV1SDKType {
  maker_order: IndexerOrderSDKType;
  order?: IndexerOrderSDKType;
  liquidation_order?: LiquidationOrderV1SDKType;
  fill_amount: Uint8Array;
  maker_fee: Uint8Array;
  taker_fee: Uint8Array;
  total_filled_maker: Uint8Array;
  total_filled_taker: Uint8Array;
  affiliate_rev_share: Uint8Array;
  maker_builder_fee: Uint8Array;
  taker_builder_fee: Uint8Array;
  maker_builder_address: string;
  taker_builder_address: string;
  maker_order_router_fee: Uint8Array;
  taker_order_router_fee: Uint8Array;
  maker_order_router_address: string;
  taker_order_router_address: string;
}
/**
 * DeleveragingEvent message contains all the information for a deleveraging
 * on the dYdX chain. This includes the liquidated/offsetting subaccounts and
 * the amount filled.
 */
export interface DeleveragingEventV1 {
  /** ID of the subaccount that was liquidated. */
  liquidated: IndexerSubaccountId;
  /** ID of the subaccount that was used to offset the position. */
  offsetting: IndexerSubaccountId;
  /** The ID of the perpetual that was liquidated. */
  perpetualId: number;
  /**
   * The amount filled between the liquidated and offsetting position, in
   * base quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  fillAmount: Uint8Array;
  /**
   * Total quote quantums filled.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  totalQuoteQuantums: Uint8Array;
  /** `true` if liquidating a short position, `false` otherwise. */
  isBuy: boolean;
  /**
   * `true` if the deleveraging event is for final settlement, indicating
   * the match occurred at the oracle price rather than bankruptcy price.
   * When this flag is `false`, the fill price is the bankruptcy price
   * of the liquidated subaccount.
   */
  isFinalSettlement: boolean;
}
export interface DeleveragingEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.DeleveragingEventV1";
  value: Uint8Array;
}
/**
 * DeleveragingEvent message contains all the information for a deleveraging
 * on the dYdX chain. This includes the liquidated/offsetting subaccounts and
 * the amount filled.
 * @name DeleveragingEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.DeleveragingEventV1
 */
export interface DeleveragingEventV1Amino {
  /**
   * ID of the subaccount that was liquidated.
   */
  liquidated?: IndexerSubaccountIdAmino;
  /**
   * ID of the subaccount that was used to offset the position.
   */
  offsetting?: IndexerSubaccountIdAmino;
  /**
   * The ID of the perpetual that was liquidated.
   */
  perpetual_id?: number;
  /**
   * The amount filled between the liquidated and offsetting position, in
   * base quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  fill_amount?: string;
  /**
   * Total quote quantums filled.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  total_quote_quantums?: string;
  /**
   * `true` if liquidating a short position, `false` otherwise.
   */
  is_buy?: boolean;
  /**
   * `true` if the deleveraging event is for final settlement, indicating
   * the match occurred at the oracle price rather than bankruptcy price.
   * When this flag is `false`, the fill price is the bankruptcy price
   * of the liquidated subaccount.
   */
  is_final_settlement?: boolean;
}
export interface DeleveragingEventV1AminoMsg {
  type: "/h2x.indexer.events.DeleveragingEventV1";
  value: DeleveragingEventV1Amino;
}
/**
 * DeleveragingEvent message contains all the information for a deleveraging
 * on the dYdX chain. This includes the liquidated/offsetting subaccounts and
 * the amount filled.
 */
export interface DeleveragingEventV1SDKType {
  liquidated: IndexerSubaccountIdSDKType;
  offsetting: IndexerSubaccountIdSDKType;
  perpetual_id: number;
  fill_amount: Uint8Array;
  total_quote_quantums: Uint8Array;
  is_buy: boolean;
  is_final_settlement: boolean;
}
/**
 * LiquidationOrder represents the liquidation taker order to be included in a
 * liquidation order fill event.
 */
export interface LiquidationOrderV1 {
  /** ID of the subaccount that was liquidated. */
  liquidated: IndexerSubaccountId;
  /** The ID of the clob pair involved in the liquidation. */
  clobPairId: number;
  /** The ID of the perpetual involved in the liquidation. */
  perpetualId: number;
  /**
   * The total size of the liquidation order including any unfilled size,
   * in base quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  totalSize: Uint8Array;
  /** `true` if liquidating a short position, `false` otherwise. */
  isBuy: boolean;
  /**
   * The fillable price in subticks.
   * This represents the lower-price-bound for liquidating longs
   * and the upper-price-bound for liquidating shorts.
   * Must be a multiple of ClobPair.SubticksPerTick
   * (where `ClobPair.Id = orderId.ClobPairId`).
   * Supports arbitrary precision for high-precision price calculations.
   */
  subticks: Uint8Array;
}
export interface LiquidationOrderV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.LiquidationOrderV1";
  value: Uint8Array;
}
/**
 * LiquidationOrder represents the liquidation taker order to be included in a
 * liquidation order fill event.
 * @name LiquidationOrderV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.LiquidationOrderV1
 */
export interface LiquidationOrderV1Amino {
  /**
   * ID of the subaccount that was liquidated.
   */
  liquidated?: IndexerSubaccountIdAmino;
  /**
   * The ID of the clob pair involved in the liquidation.
   */
  clob_pair_id?: number;
  /**
   * The ID of the perpetual involved in the liquidation.
   */
  perpetual_id?: number;
  /**
   * The total size of the liquidation order including any unfilled size,
   * in base quantums.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  total_size?: string;
  /**
   * `true` if liquidating a short position, `false` otherwise.
   */
  is_buy?: boolean;
  /**
   * The fillable price in subticks.
   * This represents the lower-price-bound for liquidating longs
   * and the upper-price-bound for liquidating shorts.
   * Must be a multiple of ClobPair.SubticksPerTick
   * (where `ClobPair.Id = orderId.ClobPairId`).
   * Supports arbitrary precision for high-precision price calculations.
   */
  subticks?: string;
}
export interface LiquidationOrderV1AminoMsg {
  type: "/h2x.indexer.events.LiquidationOrderV1";
  value: LiquidationOrderV1Amino;
}
/**
 * LiquidationOrder represents the liquidation taker order to be included in a
 * liquidation order fill event.
 */
export interface LiquidationOrderV1SDKType {
  liquidated: IndexerSubaccountIdSDKType;
  clob_pair_id: number;
  perpetual_id: number;
  total_size: Uint8Array;
  is_buy: boolean;
  subticks: Uint8Array;
}
/**
 * SubaccountUpdateEvent message contains information about an update to a
 * subaccount in the dYdX chain. This includes the list of updated perpetual
 * and asset positions for the subaccount.
 * Note: This event message will contain all the updates to a subaccount
 * at the end of a block which is why multiple asset/perpetual position
 * updates may exist.
 */
export interface SubaccountUpdateEventV1 {
  subaccountId?: IndexerSubaccountId;
  updatedPerpetualPositions: IndexerPerpetualPosition[];
  updatedAssetPositions: IndexerAssetPosition[];
}
export interface SubaccountUpdateEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.SubaccountUpdateEventV1";
  value: Uint8Array;
}
/**
 * SubaccountUpdateEvent message contains information about an update to a
 * subaccount in the dYdX chain. This includes the list of updated perpetual
 * and asset positions for the subaccount.
 * Note: This event message will contain all the updates to a subaccount
 * at the end of a block which is why multiple asset/perpetual position
 * updates may exist.
 * @name SubaccountUpdateEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.SubaccountUpdateEventV1
 */
export interface SubaccountUpdateEventV1Amino {
  subaccount_id?: IndexerSubaccountIdAmino;
  updated_perpetual_positions?: IndexerPerpetualPositionAmino[];
  updated_asset_positions?: IndexerAssetPositionAmino[];
}
export interface SubaccountUpdateEventV1AminoMsg {
  type: "/h2x.indexer.events.SubaccountUpdateEventV1";
  value: SubaccountUpdateEventV1Amino;
}
/**
 * SubaccountUpdateEvent message contains information about an update to a
 * subaccount in the dYdX chain. This includes the list of updated perpetual
 * and asset positions for the subaccount.
 * Note: This event message will contain all the updates to a subaccount
 * at the end of a block which is why multiple asset/perpetual position
 * updates may exist.
 */
export interface SubaccountUpdateEventV1SDKType {
  subaccount_id?: IndexerSubaccountIdSDKType;
  updated_perpetual_positions: IndexerPerpetualPositionSDKType[];
  updated_asset_positions: IndexerAssetPositionSDKType[];
}
/**
 * StatefulOrderEvent message contains information about a change to a stateful
 * order. Currently, this is either the placement of a long-term order, the
 * placement or triggering of a conditional order, or the removal of a
 * stateful order.
 */
export interface StatefulOrderEventV1 {
  /** @deprecated */
  orderPlace?: StatefulOrderEventV1_StatefulOrderPlacementV1;
  orderRemoval?: StatefulOrderEventV1_StatefulOrderRemovalV1;
  conditionalOrderPlacement?: StatefulOrderEventV1_ConditionalOrderPlacementV1;
  conditionalOrderTriggered?: StatefulOrderEventV1_ConditionalOrderTriggeredV1;
  longTermOrderPlacement?: StatefulOrderEventV1_LongTermOrderPlacementV1;
  orderReplacement?: StatefulOrderEventV1_LongTermOrderReplacementV1;
  twapOrderPlacement?: StatefulOrderEventV1_TwapOrderPlacementV1;
}
export interface StatefulOrderEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.StatefulOrderEventV1";
  value: Uint8Array;
}
/**
 * StatefulOrderEvent message contains information about a change to a stateful
 * order. Currently, this is either the placement of a long-term order, the
 * placement or triggering of a conditional order, or the removal of a
 * stateful order.
 * @name StatefulOrderEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.StatefulOrderEventV1
 */
export interface StatefulOrderEventV1Amino {
  /**
   * @deprecated
   */
  order_place?: StatefulOrderEventV1_StatefulOrderPlacementV1Amino;
  order_removal?: StatefulOrderEventV1_StatefulOrderRemovalV1Amino;
  conditional_order_placement?: StatefulOrderEventV1_ConditionalOrderPlacementV1Amino;
  conditional_order_triggered?: StatefulOrderEventV1_ConditionalOrderTriggeredV1Amino;
  long_term_order_placement?: StatefulOrderEventV1_LongTermOrderPlacementV1Amino;
  order_replacement?: StatefulOrderEventV1_LongTermOrderReplacementV1Amino;
  twap_order_placement?: StatefulOrderEventV1_TwapOrderPlacementV1Amino;
}
export interface StatefulOrderEventV1AminoMsg {
  type: "/h2x.indexer.events.StatefulOrderEventV1";
  value: StatefulOrderEventV1Amino;
}
/**
 * StatefulOrderEvent message contains information about a change to a stateful
 * order. Currently, this is either the placement of a long-term order, the
 * placement or triggering of a conditional order, or the removal of a
 * stateful order.
 */
export interface StatefulOrderEventV1SDKType {
  /** @deprecated */
  order_place?: StatefulOrderEventV1_StatefulOrderPlacementV1SDKType;
  order_removal?: StatefulOrderEventV1_StatefulOrderRemovalV1SDKType;
  conditional_order_placement?: StatefulOrderEventV1_ConditionalOrderPlacementV1SDKType;
  conditional_order_triggered?: StatefulOrderEventV1_ConditionalOrderTriggeredV1SDKType;
  long_term_order_placement?: StatefulOrderEventV1_LongTermOrderPlacementV1SDKType;
  order_replacement?: StatefulOrderEventV1_LongTermOrderReplacementV1SDKType;
  twap_order_placement?: StatefulOrderEventV1_TwapOrderPlacementV1SDKType;
}
/**
 * A stateful order placement contains an order.
 * Deprecated in favor of LongTermOrderPlacementV1.
 */
export interface StatefulOrderEventV1_StatefulOrderPlacementV1 {
  order?: IndexerOrder;
}
export interface StatefulOrderEventV1_StatefulOrderPlacementV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.StatefulOrderPlacementV1";
  value: Uint8Array;
}
/**
 * A stateful order placement contains an order.
 * Deprecated in favor of LongTermOrderPlacementV1.
 * @name StatefulOrderEventV1_StatefulOrderPlacementV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.StatefulOrderEventV1_StatefulOrderPlacementV1
 */
export interface StatefulOrderEventV1_StatefulOrderPlacementV1Amino {
  order?: IndexerOrderAmino;
}
export interface StatefulOrderEventV1_StatefulOrderPlacementV1AminoMsg {
  type: "/h2x.indexer.events.StatefulOrderPlacementV1";
  value: StatefulOrderEventV1_StatefulOrderPlacementV1Amino;
}
/**
 * A stateful order placement contains an order.
 * Deprecated in favor of LongTermOrderPlacementV1.
 */
export interface StatefulOrderEventV1_StatefulOrderPlacementV1SDKType {
  order?: IndexerOrderSDKType;
}
/**
 * A stateful order removal contains the id of an order that was already
 * placed and is now removed and the reason for the removal.
 */
export interface StatefulOrderEventV1_StatefulOrderRemovalV1 {
  removedOrderId?: IndexerOrderId;
  reason: OrderRemovalReason;
}
export interface StatefulOrderEventV1_StatefulOrderRemovalV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.StatefulOrderRemovalV1";
  value: Uint8Array;
}
/**
 * A stateful order removal contains the id of an order that was already
 * placed and is now removed and the reason for the removal.
 * @name StatefulOrderEventV1_StatefulOrderRemovalV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.StatefulOrderEventV1_StatefulOrderRemovalV1
 */
export interface StatefulOrderEventV1_StatefulOrderRemovalV1Amino {
  removed_order_id?: IndexerOrderIdAmino;
  reason?: OrderRemovalReason;
}
export interface StatefulOrderEventV1_StatefulOrderRemovalV1AminoMsg {
  type: "/h2x.indexer.events.StatefulOrderRemovalV1";
  value: StatefulOrderEventV1_StatefulOrderRemovalV1Amino;
}
/**
 * A stateful order removal contains the id of an order that was already
 * placed and is now removed and the reason for the removal.
 */
export interface StatefulOrderEventV1_StatefulOrderRemovalV1SDKType {
  removed_order_id?: IndexerOrderIdSDKType;
  reason: OrderRemovalReason;
}
/**
 * A conditional order placement contains an order. The order is newly-placed
 * and untriggered when this event is emitted.
 */
export interface StatefulOrderEventV1_ConditionalOrderPlacementV1 {
  order?: IndexerOrder;
}
export interface StatefulOrderEventV1_ConditionalOrderPlacementV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.ConditionalOrderPlacementV1";
  value: Uint8Array;
}
/**
 * A conditional order placement contains an order. The order is newly-placed
 * and untriggered when this event is emitted.
 * @name StatefulOrderEventV1_ConditionalOrderPlacementV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.StatefulOrderEventV1_ConditionalOrderPlacementV1
 */
export interface StatefulOrderEventV1_ConditionalOrderPlacementV1Amino {
  order?: IndexerOrderAmino;
}
export interface StatefulOrderEventV1_ConditionalOrderPlacementV1AminoMsg {
  type: "/h2x.indexer.events.ConditionalOrderPlacementV1";
  value: StatefulOrderEventV1_ConditionalOrderPlacementV1Amino;
}
/**
 * A conditional order placement contains an order. The order is newly-placed
 * and untriggered when this event is emitted.
 */
export interface StatefulOrderEventV1_ConditionalOrderPlacementV1SDKType {
  order?: IndexerOrderSDKType;
}
/**
 * A conditional order trigger event contains an order id and is emitted when
 * an order is triggered.
 */
export interface StatefulOrderEventV1_ConditionalOrderTriggeredV1 {
  triggeredOrderId?: IndexerOrderId;
}
export interface StatefulOrderEventV1_ConditionalOrderTriggeredV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.ConditionalOrderTriggeredV1";
  value: Uint8Array;
}
/**
 * A conditional order trigger event contains an order id and is emitted when
 * an order is triggered.
 * @name StatefulOrderEventV1_ConditionalOrderTriggeredV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.StatefulOrderEventV1_ConditionalOrderTriggeredV1
 */
export interface StatefulOrderEventV1_ConditionalOrderTriggeredV1Amino {
  triggered_order_id?: IndexerOrderIdAmino;
}
export interface StatefulOrderEventV1_ConditionalOrderTriggeredV1AminoMsg {
  type: "/h2x.indexer.events.ConditionalOrderTriggeredV1";
  value: StatefulOrderEventV1_ConditionalOrderTriggeredV1Amino;
}
/**
 * A conditional order trigger event contains an order id and is emitted when
 * an order is triggered.
 */
export interface StatefulOrderEventV1_ConditionalOrderTriggeredV1SDKType {
  triggered_order_id?: IndexerOrderIdSDKType;
}
/** A long term order placement contains an order. */
export interface StatefulOrderEventV1_LongTermOrderPlacementV1 {
  order?: IndexerOrder;
}
export interface StatefulOrderEventV1_LongTermOrderPlacementV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.LongTermOrderPlacementV1";
  value: Uint8Array;
}
/**
 * A long term order placement contains an order.
 * @name StatefulOrderEventV1_LongTermOrderPlacementV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.StatefulOrderEventV1_LongTermOrderPlacementV1
 */
export interface StatefulOrderEventV1_LongTermOrderPlacementV1Amino {
  order?: IndexerOrderAmino;
}
export interface StatefulOrderEventV1_LongTermOrderPlacementV1AminoMsg {
  type: "/h2x.indexer.events.LongTermOrderPlacementV1";
  value: StatefulOrderEventV1_LongTermOrderPlacementV1Amino;
}
/** A long term order placement contains an order. */
export interface StatefulOrderEventV1_LongTermOrderPlacementV1SDKType {
  order?: IndexerOrderSDKType;
}
/** A long term order replacement contains an old order ID and the new order. */
export interface StatefulOrderEventV1_LongTermOrderReplacementV1 {
  /** vault replaces orders with a different order ID */
  oldOrderId?: IndexerOrderId;
  order?: IndexerOrder;
}
export interface StatefulOrderEventV1_LongTermOrderReplacementV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.LongTermOrderReplacementV1";
  value: Uint8Array;
}
/**
 * A long term order replacement contains an old order ID and the new order.
 * @name StatefulOrderEventV1_LongTermOrderReplacementV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.StatefulOrderEventV1_LongTermOrderReplacementV1
 */
export interface StatefulOrderEventV1_LongTermOrderReplacementV1Amino {
  /**
   * vault replaces orders with a different order ID
   */
  old_order_id?: IndexerOrderIdAmino;
  order?: IndexerOrderAmino;
}
export interface StatefulOrderEventV1_LongTermOrderReplacementV1AminoMsg {
  type: "/h2x.indexer.events.LongTermOrderReplacementV1";
  value: StatefulOrderEventV1_LongTermOrderReplacementV1Amino;
}
/** A long term order replacement contains an old order ID and the new order. */
export interface StatefulOrderEventV1_LongTermOrderReplacementV1SDKType {
  old_order_id?: IndexerOrderIdSDKType;
  order?: IndexerOrderSDKType;
}
/** A twap order placement contains an order. */
export interface StatefulOrderEventV1_TwapOrderPlacementV1 {
  order?: IndexerOrder;
}
export interface StatefulOrderEventV1_TwapOrderPlacementV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.TwapOrderPlacementV1";
  value: Uint8Array;
}
/**
 * A twap order placement contains an order.
 * @name StatefulOrderEventV1_TwapOrderPlacementV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.StatefulOrderEventV1_TwapOrderPlacementV1
 */
export interface StatefulOrderEventV1_TwapOrderPlacementV1Amino {
  order?: IndexerOrderAmino;
}
export interface StatefulOrderEventV1_TwapOrderPlacementV1AminoMsg {
  type: "/h2x.indexer.events.TwapOrderPlacementV1";
  value: StatefulOrderEventV1_TwapOrderPlacementV1Amino;
}
/** A twap order placement contains an order. */
export interface StatefulOrderEventV1_TwapOrderPlacementV1SDKType {
  order?: IndexerOrderSDKType;
}
/**
 * AssetCreateEventV1 message contains all the information about an new Asset on
 * the dYdX chain.
 */
export interface AssetCreateEventV1 {
  /** Unique, sequentially-generated. */
  id: number;
  /**
   * The human readable symbol of the `Asset` (e.g. `USDC`, `ATOM`).
   * Must be uppercase, unique and correspond to the canonical symbol of the
   * full coin.
   */
  symbol: string;
  /** `true` if this `Asset` has a valid `MarketId` value. */
  hasMarket: boolean;
  /**
   * The `Id` of the `Market` associated with this `Asset`. It acts as the
   * oracle price for the purposes of calculating collateral
   * and margin requirements.
   */
  marketId: number;
  /**
   * The exponent for converting an atomic amount (1 'quantum')
   * to a full coin. For example, if `atomic_resolution = -8`
   * then an `asset_position` with `base_quantums = 1e8` is equivalent to
   * a position size of one full coin.
   */
  atomicResolution: number;
  /** The on-chain denomination of the asset (e.g. `uusdc`, `ibc/xxx`). */
  denom: string;
  /**
   * The exponent for converting the smallest on-chain unit to a human readable
   * amount. For example, if `denom_exponent = -6`, then 1e6 on-chain units
   * equals 1 human readable unit (like USDC with 6 decimals).
   */
  denomExponent: number;
  /** Asset type for categorization. Default is 0. */
  assetType: number;
}
export interface AssetCreateEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.AssetCreateEventV1";
  value: Uint8Array;
}
/**
 * AssetCreateEventV1 message contains all the information about an new Asset on
 * the dYdX chain.
 * @name AssetCreateEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.AssetCreateEventV1
 */
export interface AssetCreateEventV1Amino {
  /**
   * Unique, sequentially-generated.
   */
  id?: number;
  /**
   * The human readable symbol of the `Asset` (e.g. `USDC`, `ATOM`).
   * Must be uppercase, unique and correspond to the canonical symbol of the
   * full coin.
   */
  symbol?: string;
  /**
   * `true` if this `Asset` has a valid `MarketId` value.
   */
  has_market?: boolean;
  /**
   * The `Id` of the `Market` associated with this `Asset`. It acts as the
   * oracle price for the purposes of calculating collateral
   * and margin requirements.
   */
  market_id?: number;
  /**
   * The exponent for converting an atomic amount (1 'quantum')
   * to a full coin. For example, if `atomic_resolution = -8`
   * then an `asset_position` with `base_quantums = 1e8` is equivalent to
   * a position size of one full coin.
   */
  atomic_resolution?: number;
  /**
   * The on-chain denomination of the asset (e.g. `uusdc`, `ibc/xxx`).
   */
  denom?: string;
  /**
   * The exponent for converting the smallest on-chain unit to a human readable
   * amount. For example, if `denom_exponent = -6`, then 1e6 on-chain units
   * equals 1 human readable unit (like USDC with 6 decimals).
   */
  denom_exponent?: number;
  /**
   * Asset type for categorization. Default is 0.
   */
  asset_type?: number;
}
export interface AssetCreateEventV1AminoMsg {
  type: "/h2x.indexer.events.AssetCreateEventV1";
  value: AssetCreateEventV1Amino;
}
/**
 * AssetCreateEventV1 message contains all the information about an new Asset on
 * the dYdX chain.
 */
export interface AssetCreateEventV1SDKType {
  id: number;
  symbol: string;
  has_market: boolean;
  market_id: number;
  atomic_resolution: number;
  denom: string;
  denom_exponent: number;
  asset_type: number;
}
/**
 * SpotMarketCreateEventV1 message contains all the information about a
 * new Spot Market on the dYdX chain.
 */
export interface SpotMarketCreateEventV1 {
  /** Unique Spot Market id (same as clobPairId for spot markets). */
  id: number;
  /**
   * Unique clob pair Id associated with this spot market
   * Defined in clob.clob_pair
   */
  clobPairId: number;
  spotClobMetadata?: SpotMarketCreateEventV1_SpotClobMetadata;
  /** Status of the CLOB */
  status: ClobPairStatus;
  /**
   * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
   * per Subtick.
   * Defined in clob.clob_pair
   */
  quantumConversionExponent: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a spot position with `base_quantums = 1e8` is equivalent to
   * a position size of one full coin.
   */
  atomicResolution: number;
  /**
   * Defines the tick size of the orderbook by defining how many subticks
   * are in one tick. That is, the subticks of any valid order must be a
   * multiple of this value.
   */
  subticksPerTick: number;
  /**
   * Minimum increment in the size of orders on the CLOB, in base quantums.
   * Must be a power of 10.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  stepBaseQuantums: Uint8Array;
}
export interface SpotMarketCreateEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.SpotMarketCreateEventV1";
  value: Uint8Array;
}
/**
 * SpotMarketCreateEventV1 message contains all the information about a
 * new Spot Market on the dYdX chain.
 * @name SpotMarketCreateEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.SpotMarketCreateEventV1
 */
export interface SpotMarketCreateEventV1Amino {
  /**
   * Unique Spot Market id (same as clobPairId for spot markets).
   */
  id?: number;
  /**
   * Unique clob pair Id associated with this spot market
   * Defined in clob.clob_pair
   */
  clob_pair_id?: number;
  spot_clob_metadata?: SpotMarketCreateEventV1_SpotClobMetadataAmino;
  /**
   * Status of the CLOB
   */
  status?: ClobPairStatus;
  /**
   * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
   * per Subtick.
   * Defined in clob.clob_pair
   */
  quantum_conversion_exponent?: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a spot position with `base_quantums = 1e8` is equivalent to
   * a position size of one full coin.
   */
  atomic_resolution?: number;
  /**
   * Defines the tick size of the orderbook by defining how many subticks
   * are in one tick. That is, the subticks of any valid order must be a
   * multiple of this value.
   */
  subticks_per_tick?: number;
  /**
   * Minimum increment in the size of orders on the CLOB, in base quantums.
   * Must be a power of 10.
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  step_base_quantums?: string;
}
export interface SpotMarketCreateEventV1AminoMsg {
  type: "/h2x.indexer.events.SpotMarketCreateEventV1";
  value: SpotMarketCreateEventV1Amino;
}
/**
 * SpotMarketCreateEventV1 message contains all the information about a
 * new Spot Market on the dYdX chain.
 */
export interface SpotMarketCreateEventV1SDKType {
  id: number;
  clob_pair_id: number;
  spot_clob_metadata?: SpotMarketCreateEventV1_SpotClobMetadataSDKType;
  status: ClobPairStatus;
  quantum_conversion_exponent: number;
  atomic_resolution: number;
  subticks_per_tick: number;
  step_base_quantums: Uint8Array;
}
/** Spot-specific metadata */
export interface SpotMarketCreateEventV1_SpotClobMetadata {
  /** The base asset id (e.g. 1 for BTC) */
  baseAssetId: number;
  /** The quote asset id (e.g. 0 for USDC) */
  quoteAssetId: number;
}
export interface SpotMarketCreateEventV1_SpotClobMetadataProtoMsg {
  typeUrl: "/h2x.indexer.events.SpotClobMetadata";
  value: Uint8Array;
}
/**
 * Spot-specific metadata
 * @name SpotMarketCreateEventV1_SpotClobMetadataAmino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.SpotMarketCreateEventV1_SpotClobMetadata
 */
export interface SpotMarketCreateEventV1_SpotClobMetadataAmino {
  /**
   * The base asset id (e.g. 1 for BTC)
   */
  base_asset_id?: number;
  /**
   * The quote asset id (e.g. 0 for USDC)
   */
  quote_asset_id?: number;
}
export interface SpotMarketCreateEventV1_SpotClobMetadataAminoMsg {
  type: "/h2x.indexer.events.SpotClobMetadata";
  value: SpotMarketCreateEventV1_SpotClobMetadataAmino;
}
/** Spot-specific metadata */
export interface SpotMarketCreateEventV1_SpotClobMetadataSDKType {
  base_asset_id: number;
  quote_asset_id: number;
}
/**
 * PerpetualMarketCreateEventV1 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 * Deprecated. See PerpetualMarketCreateEventV2 for the most up to date message
 * for the event to create a new Perpetual Market.
 */
/** @deprecated */
export interface PerpetualMarketCreateEventV1 {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id: number;
  /**
   * Unique clob pair Id associated with this perpetual market
   * Defined in clob.clob_pair
   */
  clobPairId: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  marketId: number;
  /** Status of the CLOB */
  status: ClobPairStatus;
  /**
   * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
   * per Subtick.
   * Defined in clob.clob_pair
   */
  quantumConversionExponent: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomicResolution: number;
  /**
   * Defines the tick size of the orderbook by defining how many subticks
   * are in one tick. That is, the subticks of any valid order must be a
   * multiple of this value. Generally this value should start `>= 100`to
   * allow room for decreasing it.
   * Defined in clob.clob_pair
   */
  subticksPerTick: number;
  /**
   * Minimum increment in the size of orders on the CLOB, in base quantums.
   * Defined in clob.clob_pair
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  stepBaseQuantums: Uint8Array;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidityTier: number;
}
export interface PerpetualMarketCreateEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.PerpetualMarketCreateEventV1";
  value: Uint8Array;
}
/**
 * PerpetualMarketCreateEventV1 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 * Deprecated. See PerpetualMarketCreateEventV2 for the most up to date message
 * for the event to create a new Perpetual Market.
 * @name PerpetualMarketCreateEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.PerpetualMarketCreateEventV1
 * @deprecated
 */
export interface PerpetualMarketCreateEventV1Amino {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id?: number;
  /**
   * Unique clob pair Id associated with this perpetual market
   * Defined in clob.clob_pair
   */
  clob_pair_id?: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker?: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  market_id?: number;
  /**
   * Status of the CLOB
   */
  status?: ClobPairStatus;
  /**
   * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
   * per Subtick.
   * Defined in clob.clob_pair
   */
  quantum_conversion_exponent?: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomic_resolution?: number;
  /**
   * Defines the tick size of the orderbook by defining how many subticks
   * are in one tick. That is, the subticks of any valid order must be a
   * multiple of this value. Generally this value should start `>= 100`to
   * allow room for decreasing it.
   * Defined in clob.clob_pair
   */
  subticks_per_tick?: number;
  /**
   * Minimum increment in the size of orders on the CLOB, in base quantums.
   * Defined in clob.clob_pair
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  step_base_quantums?: string;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidity_tier?: number;
}
export interface PerpetualMarketCreateEventV1AminoMsg {
  type: "/h2x.indexer.events.PerpetualMarketCreateEventV1";
  value: PerpetualMarketCreateEventV1Amino;
}
/**
 * PerpetualMarketCreateEventV1 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 * Deprecated. See PerpetualMarketCreateEventV2 for the most up to date message
 * for the event to create a new Perpetual Market.
 */
/** @deprecated */
export interface PerpetualMarketCreateEventV1SDKType {
  id: number;
  clob_pair_id: number;
  ticker: string;
  market_id: number;
  status: ClobPairStatus;
  quantum_conversion_exponent: number;
  atomic_resolution: number;
  subticks_per_tick: number;
  step_base_quantums: Uint8Array;
  liquidity_tier: number;
}
/**
 * PerpetualMarketCreateEventV2 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 * Deprecated. Use PerpetualMarketCreateEventV3 for the most up to date message
 */
/** @deprecated */
export interface PerpetualMarketCreateEventV2 {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id: number;
  /**
   * Unique clob pair Id associated with this perpetual market
   * Defined in clob.clob_pair
   */
  clobPairId: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  marketId: number;
  /** Status of the CLOB */
  status: ClobPairStatus;
  /**
   * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
   * per Subtick.
   * Defined in clob.clob_pair
   */
  quantumConversionExponent: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomicResolution: number;
  /**
   * Defines the tick size of the orderbook by defining how many subticks
   * are in one tick. That is, the subticks of any valid order must be a
   * multiple of this value. Generally this value should start `>= 100`to
   * allow room for decreasing it.
   * Defined in clob.clob_pair
   */
  subticksPerTick: number;
  /**
   * Minimum increment in the size of orders on the CLOB, in base quantums.
   * Defined in clob.clob_pair
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  stepBaseQuantums: Uint8Array;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidityTier: number;
  /** Market type of the perpetual. */
  marketType: PerpetualMarketType;
}
export interface PerpetualMarketCreateEventV2ProtoMsg {
  typeUrl: "/h2x.indexer.events.PerpetualMarketCreateEventV2";
  value: Uint8Array;
}
/**
 * PerpetualMarketCreateEventV2 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 * Deprecated. Use PerpetualMarketCreateEventV3 for the most up to date message
 * @name PerpetualMarketCreateEventV2Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.PerpetualMarketCreateEventV2
 * @deprecated
 */
export interface PerpetualMarketCreateEventV2Amino {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id?: number;
  /**
   * Unique clob pair Id associated with this perpetual market
   * Defined in clob.clob_pair
   */
  clob_pair_id?: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker?: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  market_id?: number;
  /**
   * Status of the CLOB
   */
  status?: ClobPairStatus;
  /**
   * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
   * per Subtick.
   * Defined in clob.clob_pair
   */
  quantum_conversion_exponent?: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomic_resolution?: number;
  /**
   * Defines the tick size of the orderbook by defining how many subticks
   * are in one tick. That is, the subticks of any valid order must be a
   * multiple of this value. Generally this value should start `>= 100`to
   * allow room for decreasing it.
   * Defined in clob.clob_pair
   */
  subticks_per_tick?: number;
  /**
   * Minimum increment in the size of orders on the CLOB, in base quantums.
   * Defined in clob.clob_pair
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  step_base_quantums?: string;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidity_tier?: number;
  /**
   * Market type of the perpetual.
   */
  market_type?: PerpetualMarketType;
}
export interface PerpetualMarketCreateEventV2AminoMsg {
  type: "/h2x.indexer.events.PerpetualMarketCreateEventV2";
  value: PerpetualMarketCreateEventV2Amino;
}
/**
 * PerpetualMarketCreateEventV2 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 * Deprecated. Use PerpetualMarketCreateEventV3 for the most up to date message
 */
/** @deprecated */
export interface PerpetualMarketCreateEventV2SDKType {
  id: number;
  clob_pair_id: number;
  ticker: string;
  market_id: number;
  status: ClobPairStatus;
  quantum_conversion_exponent: number;
  atomic_resolution: number;
  subticks_per_tick: number;
  step_base_quantums: Uint8Array;
  liquidity_tier: number;
  market_type: PerpetualMarketType;
}
/**
 * PerpetualMarketCreateEventV3 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 */
export interface PerpetualMarketCreateEventV3 {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id: number;
  /**
   * Unique clob pair Id associated with this perpetual market
   * Defined in clob.clob_pair
   */
  clobPairId: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  marketId: number;
  /** Status of the CLOB */
  status: ClobPairStatus;
  /**
   * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
   * per Subtick.
   * Defined in clob.clob_pair
   */
  quantumConversionExponent: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomicResolution: number;
  /**
   * Defines the tick size of the orderbook by defining how many subticks
   * are in one tick. That is, the subticks of any valid order must be a
   * multiple of this value. Generally this value should start `>= 100`to
   * allow room for decreasing it.
   * Defined in clob.clob_pair
   */
  subticksPerTick: number;
  /**
   * Minimum increment in the size of orders on the CLOB, in base quantums.
   * Defined in clob.clob_pair
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  stepBaseQuantums: Uint8Array;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidityTier: number;
  /** Market type of the perpetual. */
  marketType: PerpetualMarketType;
  /** Default 8hr funding rate in parts-per-million. */
  defaultFunding8hrPpm: number;
}
export interface PerpetualMarketCreateEventV3ProtoMsg {
  typeUrl: "/h2x.indexer.events.PerpetualMarketCreateEventV3";
  value: Uint8Array;
}
/**
 * PerpetualMarketCreateEventV3 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 * @name PerpetualMarketCreateEventV3Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.PerpetualMarketCreateEventV3
 */
export interface PerpetualMarketCreateEventV3Amino {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id?: number;
  /**
   * Unique clob pair Id associated with this perpetual market
   * Defined in clob.clob_pair
   */
  clob_pair_id?: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker?: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  market_id?: number;
  /**
   * Status of the CLOB
   */
  status?: ClobPairStatus;
  /**
   * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
   * per Subtick.
   * Defined in clob.clob_pair
   */
  quantum_conversion_exponent?: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomic_resolution?: number;
  /**
   * Defines the tick size of the orderbook by defining how many subticks
   * are in one tick. That is, the subticks of any valid order must be a
   * multiple of this value. Generally this value should start `>= 100`to
   * allow room for decreasing it.
   * Defined in clob.clob_pair
   */
  subticks_per_tick?: number;
  /**
   * Minimum increment in the size of orders on the CLOB, in base quantums.
   * Defined in clob.clob_pair
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  step_base_quantums?: string;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidity_tier?: number;
  /**
   * Market type of the perpetual.
   */
  market_type?: PerpetualMarketType;
  /**
   * Default 8hr funding rate in parts-per-million.
   */
  default_funding8hr_ppm?: number;
}
export interface PerpetualMarketCreateEventV3AminoMsg {
  type: "/h2x.indexer.events.PerpetualMarketCreateEventV3";
  value: PerpetualMarketCreateEventV3Amino;
}
/**
 * PerpetualMarketCreateEventV3 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 */
export interface PerpetualMarketCreateEventV3SDKType {
  id: number;
  clob_pair_id: number;
  ticker: string;
  market_id: number;
  status: ClobPairStatus;
  quantum_conversion_exponent: number;
  atomic_resolution: number;
  subticks_per_tick: number;
  step_base_quantums: Uint8Array;
  liquidity_tier: number;
  market_type: PerpetualMarketType;
  default_funding8hr_ppm: number;
}
/**
 * LiquidityTierUpsertEventV1 message contains all the information to
 * create/update a Liquidity Tier on the dYdX chain.
 */
export interface LiquidityTierUpsertEventV1 {
  /** Unique id. */
  id: number;
  /** The name of the tier purely for mnemonic purposes, e.g. "Gold". */
  name: string;
  /**
   * The margin fraction needed to open a position.
   * In parts-per-million.
   */
  initialMarginPpm: number;
  /**
   * The fraction of the initial-margin that the maintenance-margin is,
   * e.g. 50%. In parts-per-million.
   */
  maintenanceFractionPpm: number;
  /**
   * The maximum position size at which the margin requirements are
   * not increased over the default values. Above this position size,
   * the margin requirements increase at a rate of sqrt(size).
   * 
   * Deprecated since v3.x.
   */
  /** @deprecated */
  basePositionNotional: bigint;
}
export interface LiquidityTierUpsertEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.LiquidityTierUpsertEventV1";
  value: Uint8Array;
}
/**
 * LiquidityTierUpsertEventV1 message contains all the information to
 * create/update a Liquidity Tier on the dYdX chain.
 * @name LiquidityTierUpsertEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.LiquidityTierUpsertEventV1
 */
export interface LiquidityTierUpsertEventV1Amino {
  /**
   * Unique id.
   */
  id?: number;
  /**
   * The name of the tier purely for mnemonic purposes, e.g. "Gold".
   */
  name?: string;
  /**
   * The margin fraction needed to open a position.
   * In parts-per-million.
   */
  initial_margin_ppm?: number;
  /**
   * The fraction of the initial-margin that the maintenance-margin is,
   * e.g. 50%. In parts-per-million.
   */
  maintenance_fraction_ppm?: number;
  /**
   * The maximum position size at which the margin requirements are
   * not increased over the default values. Above this position size,
   * the margin requirements increase at a rate of sqrt(size).
   * 
   * Deprecated since v3.x.
   * @deprecated
   */
  base_position_notional?: string;
}
export interface LiquidityTierUpsertEventV1AminoMsg {
  type: "/h2x.indexer.events.LiquidityTierUpsertEventV1";
  value: LiquidityTierUpsertEventV1Amino;
}
/**
 * LiquidityTierUpsertEventV1 message contains all the information to
 * create/update a Liquidity Tier on the dYdX chain.
 */
export interface LiquidityTierUpsertEventV1SDKType {
  id: number;
  name: string;
  initial_margin_ppm: number;
  maintenance_fraction_ppm: number;
  /** @deprecated */
  base_position_notional: bigint;
}
/**
 * UpdateClobPairEventV1 message contains all the information about an update to
 * a clob pair on the dYdX chain.
 */
export interface UpdateClobPairEventV1 {
  /**
   * Unique clob pair Id associated with this perpetual market
   * Defined in clob.clob_pair
   */
  clobPairId: number;
  /** Status of the CLOB */
  status: ClobPairStatus;
  /**
   * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
   * per Subtick.
   * Defined in clob.clob_pair
   */
  quantumConversionExponent: number;
  /**
   * Defines the tick size of the orderbook by defining how many subticks
   * are in one tick. That is, the subticks of any valid order must be a
   * multiple of this value. Generally this value should start `>= 100`to
   * allow room for decreasing it.
   * Defined in clob.clob_pair
   */
  subticksPerTick: number;
  /**
   * Minimum increment in the size of orders on the CLOB, in base quantums.
   * Defined in clob.clob_pair
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  stepBaseQuantums: Uint8Array;
}
export interface UpdateClobPairEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.UpdateClobPairEventV1";
  value: Uint8Array;
}
/**
 * UpdateClobPairEventV1 message contains all the information about an update to
 * a clob pair on the dYdX chain.
 * @name UpdateClobPairEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.UpdateClobPairEventV1
 */
export interface UpdateClobPairEventV1Amino {
  /**
   * Unique clob pair Id associated with this perpetual market
   * Defined in clob.clob_pair
   */
  clob_pair_id?: number;
  /**
   * Status of the CLOB
   */
  status?: ClobPairStatus;
  /**
   * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
   * per Subtick.
   * Defined in clob.clob_pair
   */
  quantum_conversion_exponent?: number;
  /**
   * Defines the tick size of the orderbook by defining how many subticks
   * are in one tick. That is, the subticks of any valid order must be a
   * multiple of this value. Generally this value should start `>= 100`to
   * allow room for decreasing it.
   * Defined in clob.clob_pair
   */
  subticks_per_tick?: number;
  /**
   * Minimum increment in the size of orders on the CLOB, in base quantums.
   * Defined in clob.clob_pair
   * Supports arbitrary precision for tokens with high decimal places (e.g., 18
   * decimals).
   */
  step_base_quantums?: string;
}
export interface UpdateClobPairEventV1AminoMsg {
  type: "/h2x.indexer.events.UpdateClobPairEventV1";
  value: UpdateClobPairEventV1Amino;
}
/**
 * UpdateClobPairEventV1 message contains all the information about an update to
 * a clob pair on the dYdX chain.
 */
export interface UpdateClobPairEventV1SDKType {
  clob_pair_id: number;
  status: ClobPairStatus;
  quantum_conversion_exponent: number;
  subticks_per_tick: number;
  step_base_quantums: Uint8Array;
}
/**
 * UpdatePerpetualEventV1 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 * Deprecated. See UpdatePerpetualEventV2 for the most up to date message
 * for the event to update a perpetual.
 */
/** @deprecated */
export interface UpdatePerpetualEventV1 {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  marketId: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomicResolution: number;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidityTier: number;
}
export interface UpdatePerpetualEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.UpdatePerpetualEventV1";
  value: Uint8Array;
}
/**
 * UpdatePerpetualEventV1 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 * Deprecated. See UpdatePerpetualEventV2 for the most up to date message
 * for the event to update a perpetual.
 * @name UpdatePerpetualEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.UpdatePerpetualEventV1
 * @deprecated
 */
export interface UpdatePerpetualEventV1Amino {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id?: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker?: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  market_id?: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomic_resolution?: number;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidity_tier?: number;
}
export interface UpdatePerpetualEventV1AminoMsg {
  type: "/h2x.indexer.events.UpdatePerpetualEventV1";
  value: UpdatePerpetualEventV1Amino;
}
/**
 * UpdatePerpetualEventV1 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 * Deprecated. See UpdatePerpetualEventV2 for the most up to date message
 * for the event to update a perpetual.
 */
/** @deprecated */
export interface UpdatePerpetualEventV1SDKType {
  id: number;
  ticker: string;
  market_id: number;
  atomic_resolution: number;
  liquidity_tier: number;
}
/**
 * UpdatePerpetualEventV2 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 * Deprecated. Use UpdatePerpetualEventV3.
 */
/** @deprecated */
export interface UpdatePerpetualEventV2 {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  marketId: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomicResolution: number;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidityTier: number;
  /** Market type of the perpetual. */
  marketType: PerpetualMarketType;
}
export interface UpdatePerpetualEventV2ProtoMsg {
  typeUrl: "/h2x.indexer.events.UpdatePerpetualEventV2";
  value: Uint8Array;
}
/**
 * UpdatePerpetualEventV2 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 * Deprecated. Use UpdatePerpetualEventV3.
 * @name UpdatePerpetualEventV2Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.UpdatePerpetualEventV2
 * @deprecated
 */
export interface UpdatePerpetualEventV2Amino {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id?: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker?: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  market_id?: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomic_resolution?: number;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidity_tier?: number;
  /**
   * Market type of the perpetual.
   */
  market_type?: PerpetualMarketType;
}
export interface UpdatePerpetualEventV2AminoMsg {
  type: "/h2x.indexer.events.UpdatePerpetualEventV2";
  value: UpdatePerpetualEventV2Amino;
}
/**
 * UpdatePerpetualEventV2 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 * Deprecated. Use UpdatePerpetualEventV3.
 */
/** @deprecated */
export interface UpdatePerpetualEventV2SDKType {
  id: number;
  ticker: string;
  market_id: number;
  atomic_resolution: number;
  liquidity_tier: number;
  market_type: PerpetualMarketType;
}
/**
 * UpdatePerpetualEventV3 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 */
export interface UpdatePerpetualEventV3 {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  marketId: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomicResolution: number;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidityTier: number;
  /** Market type of the perpetual. */
  marketType: PerpetualMarketType;
  /** Default 8hr funding rate in parts-per-million. */
  defaultFunding8hrPpm: number;
}
export interface UpdatePerpetualEventV3ProtoMsg {
  typeUrl: "/h2x.indexer.events.UpdatePerpetualEventV3";
  value: Uint8Array;
}
/**
 * UpdatePerpetualEventV3 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 * @name UpdatePerpetualEventV3Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.UpdatePerpetualEventV3
 */
export interface UpdatePerpetualEventV3Amino {
  /**
   * Unique Perpetual id.
   * Defined in perpetuals.perpetual
   */
  id?: number;
  /**
   * The name of the `Perpetual` (e.g. `BTC-USD`).
   * Defined in perpetuals.perpetual
   */
  ticker?: string;
  /**
   * Unique id of market param associated with this perpetual market.
   * Defined in perpetuals.perpetual
   */
  market_id?: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   * Defined in perpetuals.perpetual
   */
  atomic_resolution?: number;
  /**
   * The liquidity_tier that this perpetual is associated with.
   * Defined in perpetuals.perpetual
   */
  liquidity_tier?: number;
  /**
   * Market type of the perpetual.
   */
  market_type?: PerpetualMarketType;
  /**
   * Default 8hr funding rate in parts-per-million.
   */
  default_funding8hr_ppm?: number;
}
export interface UpdatePerpetualEventV3AminoMsg {
  type: "/h2x.indexer.events.UpdatePerpetualEventV3";
  value: UpdatePerpetualEventV3Amino;
}
/**
 * UpdatePerpetualEventV3 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 */
export interface UpdatePerpetualEventV3SDKType {
  id: number;
  ticker: string;
  market_id: number;
  atomic_resolution: number;
  liquidity_tier: number;
  market_type: PerpetualMarketType;
  default_funding8hr_ppm: number;
}
/**
 * TradingRewardsEventV1 is communicates all trading rewards for all accounts
 * that receive trade rewards in the block.
 */
export interface TradingRewardsEventV1 {
  /** The list of all trading rewards in the block. */
  tradingRewards: AddressTradingReward[];
}
export interface TradingRewardsEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.TradingRewardsEventV1";
  value: Uint8Array;
}
/**
 * TradingRewardsEventV1 is communicates all trading rewards for all accounts
 * that receive trade rewards in the block.
 * @name TradingRewardsEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.TradingRewardsEventV1
 */
export interface TradingRewardsEventV1Amino {
  /**
   * The list of all trading rewards in the block.
   */
  trading_rewards?: AddressTradingRewardAmino[];
}
export interface TradingRewardsEventV1AminoMsg {
  type: "/h2x.indexer.events.TradingRewardsEventV1";
  value: TradingRewardsEventV1Amino;
}
/**
 * TradingRewardsEventV1 is communicates all trading rewards for all accounts
 * that receive trade rewards in the block.
 */
export interface TradingRewardsEventV1SDKType {
  trading_rewards: AddressTradingRewardSDKType[];
}
/**
 * AddressTradingReward contains info on an instance of an address receiving a
 * reward
 */
export interface AddressTradingReward {
  /** The address of the wallet that will receive the trading reward. */
  owner: string;
  /**
   * The amount of trading rewards earned by the address above in denoms. 1e18
   * denoms is equivalent to a single coin.
   */
  denomAmount: Uint8Array;
}
export interface AddressTradingRewardProtoMsg {
  typeUrl: "/h2x.indexer.events.AddressTradingReward";
  value: Uint8Array;
}
/**
 * AddressTradingReward contains info on an instance of an address receiving a
 * reward
 * @name AddressTradingRewardAmino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.AddressTradingReward
 */
export interface AddressTradingRewardAmino {
  /**
   * The address of the wallet that will receive the trading reward.
   */
  owner?: string;
  /**
   * The amount of trading rewards earned by the address above in denoms. 1e18
   * denoms is equivalent to a single coin.
   */
  denom_amount?: string;
}
export interface AddressTradingRewardAminoMsg {
  type: "/h2x.indexer.events.AddressTradingReward";
  value: AddressTradingRewardAmino;
}
/**
 * AddressTradingReward contains info on an instance of an address receiving a
 * reward
 */
export interface AddressTradingRewardSDKType {
  owner: string;
  denom_amount: Uint8Array;
}
/**
 * OpenInterestUpdateEventV1 is used for open interest update events
 * Deprecated.
 */
/** @deprecated */
export interface OpenInterestUpdateEventV1 {
  openInterestUpdates: OpenInterestUpdate[];
}
export interface OpenInterestUpdateEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.OpenInterestUpdateEventV1";
  value: Uint8Array;
}
/**
 * OpenInterestUpdateEventV1 is used for open interest update events
 * Deprecated.
 * @name OpenInterestUpdateEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.OpenInterestUpdateEventV1
 * @deprecated
 */
export interface OpenInterestUpdateEventV1Amino {
  open_interest_updates?: OpenInterestUpdateAmino[];
}
export interface OpenInterestUpdateEventV1AminoMsg {
  type: "/h2x.indexer.events.OpenInterestUpdateEventV1";
  value: OpenInterestUpdateEventV1Amino;
}
/**
 * OpenInterestUpdateEventV1 is used for open interest update events
 * Deprecated.
 */
/** @deprecated */
export interface OpenInterestUpdateEventV1SDKType {
  open_interest_updates: OpenInterestUpdateSDKType[];
}
/**
 * OpenInterestUpdate contains a single open interest update for a perpetual
 * Deprecated.
 */
/** @deprecated */
export interface OpenInterestUpdate {
  perpetualId: number;
  /** The new open interest value for the perpetual market. */
  openInterest: Uint8Array;
}
export interface OpenInterestUpdateProtoMsg {
  typeUrl: "/h2x.indexer.events.OpenInterestUpdate";
  value: Uint8Array;
}
/**
 * OpenInterestUpdate contains a single open interest update for a perpetual
 * Deprecated.
 * @name OpenInterestUpdateAmino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.OpenInterestUpdate
 * @deprecated
 */
export interface OpenInterestUpdateAmino {
  perpetual_id?: number;
  /**
   * The new open interest value for the perpetual market.
   */
  open_interest?: string;
}
export interface OpenInterestUpdateAminoMsg {
  type: "/h2x.indexer.events.OpenInterestUpdate";
  value: OpenInterestUpdateAmino;
}
/**
 * OpenInterestUpdate contains a single open interest update for a perpetual
 * Deprecated.
 */
/** @deprecated */
export interface OpenInterestUpdateSDKType {
  perpetual_id: number;
  open_interest: Uint8Array;
}
/**
 * LiquidationEventV2 message contains all the information needed to update
 * the liquidity tiers. It contains all the fields from V1 along with the
 * open interest caps.
 */
export interface LiquidityTierUpsertEventV2 {
  /** Unique id. */
  id: number;
  /** The name of the tier purely for mnemonic purposes, e.g. "Gold". */
  name: string;
  /**
   * The margin fraction needed to open a position.
   * In parts-per-million.
   */
  initialMarginPpm: number;
  /**
   * The fraction of the initial-margin that the maintenance-margin is,
   * e.g. 50%. In parts-per-million.
   */
  maintenanceFractionPpm: number;
  /**
   * The maximum position size at which the margin requirements are
   * not increased over the default values. Above this position size,
   * the margin requirements increase at a rate of sqrt(size).
   * 
   * Deprecated since v3.x.
   */
  /** @deprecated */
  basePositionNotional: bigint;
  /** Lower cap of open interest in quote quantums. optional */
  openInterestLowerCap: bigint;
  /** Upper cap of open interest in quote quantums. */
  openInterestUpperCap: bigint;
}
export interface LiquidityTierUpsertEventV2ProtoMsg {
  typeUrl: "/h2x.indexer.events.LiquidityTierUpsertEventV2";
  value: Uint8Array;
}
/**
 * LiquidationEventV2 message contains all the information needed to update
 * the liquidity tiers. It contains all the fields from V1 along with the
 * open interest caps.
 * @name LiquidityTierUpsertEventV2Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.LiquidityTierUpsertEventV2
 */
export interface LiquidityTierUpsertEventV2Amino {
  /**
   * Unique id.
   */
  id?: number;
  /**
   * The name of the tier purely for mnemonic purposes, e.g. "Gold".
   */
  name?: string;
  /**
   * The margin fraction needed to open a position.
   * In parts-per-million.
   */
  initial_margin_ppm?: number;
  /**
   * The fraction of the initial-margin that the maintenance-margin is,
   * e.g. 50%. In parts-per-million.
   */
  maintenance_fraction_ppm?: number;
  /**
   * The maximum position size at which the margin requirements are
   * not increased over the default values. Above this position size,
   * the margin requirements increase at a rate of sqrt(size).
   * 
   * Deprecated since v3.x.
   * @deprecated
   */
  base_position_notional?: string;
  /**
   * Lower cap of open interest in quote quantums. optional
   */
  open_interest_lower_cap?: string;
  /**
   * Upper cap of open interest in quote quantums.
   */
  open_interest_upper_cap?: string;
}
export interface LiquidityTierUpsertEventV2AminoMsg {
  type: "/h2x.indexer.events.LiquidityTierUpsertEventV2";
  value: LiquidityTierUpsertEventV2Amino;
}
/**
 * LiquidationEventV2 message contains all the information needed to update
 * the liquidity tiers. It contains all the fields from V1 along with the
 * open interest caps.
 */
export interface LiquidityTierUpsertEventV2SDKType {
  id: number;
  name: string;
  initial_margin_ppm: number;
  maintenance_fraction_ppm: number;
  /** @deprecated */
  base_position_notional: bigint;
  open_interest_lower_cap: bigint;
  open_interest_upper_cap: bigint;
}
/** Event emitted when a referee is registered with an affiliate. */
export interface RegisterAffiliateEventV1 {
  /** Address of the referee being registered. */
  referee: string;
  /** Address of the affiliate associated with the referee. */
  affiliate: string;
}
export interface RegisterAffiliateEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.RegisterAffiliateEventV1";
  value: Uint8Array;
}
/**
 * Event emitted when a referee is registered with an affiliate.
 * @name RegisterAffiliateEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.RegisterAffiliateEventV1
 */
export interface RegisterAffiliateEventV1Amino {
  /**
   * Address of the referee being registered.
   */
  referee?: string;
  /**
   * Address of the affiliate associated with the referee.
   */
  affiliate?: string;
}
export interface RegisterAffiliateEventV1AminoMsg {
  type: "/h2x.indexer.events.RegisterAffiliateEventV1";
  value: RegisterAffiliateEventV1Amino;
}
/** Event emitted when a referee is registered with an affiliate. */
export interface RegisterAffiliateEventV1SDKType {
  referee: string;
  affiliate: string;
}
/** Event emitted when a vault is created / updated. */
export interface UpsertVaultEventV1 {
  /** Address of the vault. */
  address: string;
  /** Clob pair Id associated with the vault. */
  clobPairId: number;
  /** Status of the vault. */
  status: VaultStatus;
}
export interface UpsertVaultEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.UpsertVaultEventV1";
  value: Uint8Array;
}
/**
 * Event emitted when a vault is created / updated.
 * @name UpsertVaultEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.UpsertVaultEventV1
 */
export interface UpsertVaultEventV1Amino {
  /**
   * Address of the vault.
   */
  address?: string;
  /**
   * Clob pair Id associated with the vault.
   */
  clob_pair_id?: number;
  /**
   * Status of the vault.
   */
  status?: VaultStatus;
}
export interface UpsertVaultEventV1AminoMsg {
  type: "/h2x.indexer.events.UpsertVaultEventV1";
  value: UpsertVaultEventV1Amino;
}
/** Event emitted when a vault is created / updated. */
export interface UpsertVaultEventV1SDKType {
  address: string;
  clob_pair_id: number;
  status: VaultStatus;
}
/**
 * OperatorAddedEventV1 运营账户添加事件。
 * 当通过治理投票添加新的运营账户时触发。
 */
export interface OperatorAddedEventV1 {
  /** 被添加的运营账户地址 */
  operatorAddress: string;
  /** 添加该运营账户的地址（通常是治理模块地址） */
  addedBy: string;
  /**
   * 授予的权限列表。
   * 权限值说明：
   *   0 = ALL（全部权限）
   *   1 = CREATE_ASSET（创建资产权限）
   *   2 = UPDATE_ASSET（更新资产权限）
   *   3 = CREATE_CLOB_PAIR（创建交易对权限）
   *   4 = UPDATE_CLOB_PAIR（更新交易对权限）
   *   5 = DELIST_CLOB_PAIR（下架交易对权限）
   *   6 = CREATE_ORACLE_MARKET（创建预言机市场权限）
   *   7 = UPDATE_ORACLE_MARKET（更新预言机市场权限）
   */
  permissions: number[];
}
export interface OperatorAddedEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.OperatorAddedEventV1";
  value: Uint8Array;
}
/**
 * OperatorAddedEventV1 运营账户添加事件。
 * 当通过治理投票添加新的运营账户时触发。
 * @name OperatorAddedEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.OperatorAddedEventV1
 */
export interface OperatorAddedEventV1Amino {
  /**
   * 被添加的运营账户地址
   */
  operator_address?: string;
  /**
   * 添加该运营账户的地址（通常是治理模块地址）
   */
  added_by?: string;
  /**
   * 授予的权限列表。
   * 权限值说明：
   *   0 = ALL（全部权限）
   *   1 = CREATE_ASSET（创建资产权限）
   *   2 = UPDATE_ASSET（更新资产权限）
   *   3 = CREATE_CLOB_PAIR（创建交易对权限）
   *   4 = UPDATE_CLOB_PAIR（更新交易对权限）
   *   5 = DELIST_CLOB_PAIR（下架交易对权限）
   *   6 = CREATE_ORACLE_MARKET（创建预言机市场权限）
   *   7 = UPDATE_ORACLE_MARKET（更新预言机市场权限）
   */
  permissions?: number[];
}
export interface OperatorAddedEventV1AminoMsg {
  type: "/h2x.indexer.events.OperatorAddedEventV1";
  value: OperatorAddedEventV1Amino;
}
/**
 * OperatorAddedEventV1 运营账户添加事件。
 * 当通过治理投票添加新的运营账户时触发。
 */
export interface OperatorAddedEventV1SDKType {
  operator_address: string;
  added_by: string;
  permissions: number[];
}
/**
 * OperatorRemovedEventV1 运营账户移除事件。
 * 当通过治理投票移除运营账户时触发。
 */
export interface OperatorRemovedEventV1 {
  /** 被移除的运营账户地址 */
  operatorAddress: string;
  /** 移除该运营账户的地址（通常是治理模块地址） */
  removedBy: string;
}
export interface OperatorRemovedEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.OperatorRemovedEventV1";
  value: Uint8Array;
}
/**
 * OperatorRemovedEventV1 运营账户移除事件。
 * 当通过治理投票移除运营账户时触发。
 * @name OperatorRemovedEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.OperatorRemovedEventV1
 */
export interface OperatorRemovedEventV1Amino {
  /**
   * 被移除的运营账户地址
   */
  operator_address?: string;
  /**
   * 移除该运营账户的地址（通常是治理模块地址）
   */
  removed_by?: string;
}
export interface OperatorRemovedEventV1AminoMsg {
  type: "/h2x.indexer.events.OperatorRemovedEventV1";
  value: OperatorRemovedEventV1Amino;
}
/**
 * OperatorRemovedEventV1 运营账户移除事件。
 * 当通过治理投票移除运营账户时触发。
 */
export interface OperatorRemovedEventV1SDKType {
  operator_address: string;
  removed_by: string;
}
/**
 * OperatorPermissionsUpdatedEventV1 运营账户权限更新事件。
 * 当通过治理投票修改运营账户权限时触发。
 */
export interface OperatorPermissionsUpdatedEventV1 {
  /** 被更新权限的运营账户地址 */
  operatorAddress: string;
  /** 更新该运营账户权限的地址（通常是治理模块地址） */
  updatedBy: string;
  /** 更新前的权限列表 */
  oldPermissions: number[];
  /** 更新后的权限列表 */
  newPermissions: number[];
}
export interface OperatorPermissionsUpdatedEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.OperatorPermissionsUpdatedEventV1";
  value: Uint8Array;
}
/**
 * OperatorPermissionsUpdatedEventV1 运营账户权限更新事件。
 * 当通过治理投票修改运营账户权限时触发。
 * @name OperatorPermissionsUpdatedEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.OperatorPermissionsUpdatedEventV1
 */
export interface OperatorPermissionsUpdatedEventV1Amino {
  /**
   * 被更新权限的运营账户地址
   */
  operator_address?: string;
  /**
   * 更新该运营账户权限的地址（通常是治理模块地址）
   */
  updated_by?: string;
  /**
   * 更新前的权限列表
   */
  old_permissions?: number[];
  /**
   * 更新后的权限列表
   */
  new_permissions?: number[];
}
export interface OperatorPermissionsUpdatedEventV1AminoMsg {
  type: "/h2x.indexer.events.OperatorPermissionsUpdatedEventV1";
  value: OperatorPermissionsUpdatedEventV1Amino;
}
/**
 * OperatorPermissionsUpdatedEventV1 运营账户权限更新事件。
 * 当通过治理投票修改运营账户权限时触发。
 */
export interface OperatorPermissionsUpdatedEventV1SDKType {
  operator_address: string;
  updated_by: string;
  old_permissions: number[];
  new_permissions: number[];
}
/**
 * OperatorActionEventV1 运营账户操作事件。
 * 当运营账户执行添加/下架资产或交易对等操作时触发。
 */
export interface OperatorActionEventV1 {
  /** 执行的操作类型 */
  actionType: OperatorActionEventV1_ActionType;
  /** 执行此操作的运营账户地址 */
  triggeredBy: string;
  /** 与此操作关联的资源 ID（asset_id、perpetual_id 或 clob_pair_id、market_id） */
  resourceId: number;
}
export interface OperatorActionEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.OperatorActionEventV1";
  value: Uint8Array;
}
/**
 * OperatorActionEventV1 运营账户操作事件。
 * 当运营账户执行添加/下架资产或交易对等操作时触发。
 * @name OperatorActionEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.OperatorActionEventV1
 */
export interface OperatorActionEventV1Amino {
  /**
   * 执行的操作类型
   */
  action_type?: OperatorActionEventV1_ActionType;
  /**
   * 执行此操作的运营账户地址
   */
  triggered_by?: string;
  /**
   * 与此操作关联的资源 ID（asset_id、perpetual_id 或 clob_pair_id、market_id）
   */
  resource_id?: number;
}
export interface OperatorActionEventV1AminoMsg {
  type: "/h2x.indexer.events.OperatorActionEventV1";
  value: OperatorActionEventV1Amino;
}
/**
 * OperatorActionEventV1 运营账户操作事件。
 * 当运营账户执行添加/下架资产或交易对等操作时触发。
 */
export interface OperatorActionEventV1SDKType {
  action_type: OperatorActionEventV1_ActionType;
  triggered_by: string;
  resource_id: number;
}
/**
 * AgentRegisteredEventV1 代理钱包注册事件。
 * 当主钱包授权一个新的代理钱包时触发。
 */
export interface AgentRegisteredEventV1 {
  /** 主钱包地址（授权方） */
  masterAddress: string;
  /** 代理钱包地址（被授权方） */
  agentAddress: string;
  /** 代理名称（可选，最多20个字符） */
  name: string;
  /** 授权过期时间戳（Unix 秒） */
  expiryTimestamp: bigint;
}
export interface AgentRegisteredEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.AgentRegisteredEventV1";
  value: Uint8Array;
}
/**
 * AgentRegisteredEventV1 代理钱包注册事件。
 * 当主钱包授权一个新的代理钱包时触发。
 * @name AgentRegisteredEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.AgentRegisteredEventV1
 */
export interface AgentRegisteredEventV1Amino {
  /**
   * 主钱包地址（授权方）
   */
  master_address?: string;
  /**
   * 代理钱包地址（被授权方）
   */
  agent_address?: string;
  /**
   * 代理名称（可选，最多20个字符）
   */
  name?: string;
  /**
   * 授权过期时间戳（Unix 秒）
   */
  expiry_timestamp?: string;
}
export interface AgentRegisteredEventV1AminoMsg {
  type: "/h2x.indexer.events.AgentRegisteredEventV1";
  value: AgentRegisteredEventV1Amino;
}
/**
 * AgentRegisteredEventV1 代理钱包注册事件。
 * 当主钱包授权一个新的代理钱包时触发。
 */
export interface AgentRegisteredEventV1SDKType {
  master_address: string;
  agent_address: string;
  name: string;
  expiry_timestamp: bigint;
}
/**
 * AgentRemovedEventV1 代理钱包移除事件。
 * 当主钱包移除一个代理钱包的授权时触发。
 */
export interface AgentRemovedEventV1 {
  /** 主钱包地址 */
  masterAddress: string;
  /** 被移除授权的代理钱包地址 */
  agentAddress: string;
  /** 移除类型：手动移除 或 过期自动移除 */
  removalType: AgentRemovalType;
}
export interface AgentRemovedEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.AgentRemovedEventV1";
  value: Uint8Array;
}
/**
 * AgentRemovedEventV1 代理钱包移除事件。
 * 当主钱包移除一个代理钱包的授权时触发。
 * @name AgentRemovedEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.AgentRemovedEventV1
 */
export interface AgentRemovedEventV1Amino {
  /**
   * 主钱包地址
   */
  master_address?: string;
  /**
   * 被移除授权的代理钱包地址
   */
  agent_address?: string;
  /**
   * 移除类型：手动移除 或 过期自动移除
   */
  removal_type?: AgentRemovalType;
}
export interface AgentRemovedEventV1AminoMsg {
  type: "/h2x.indexer.events.AgentRemovedEventV1";
  value: AgentRemovedEventV1Amino;
}
/**
 * AgentRemovedEventV1 代理钱包移除事件。
 * 当主钱包移除一个代理钱包的授权时触发。
 */
export interface AgentRemovedEventV1SDKType {
  master_address: string;
  agent_address: string;
  removal_type: AgentRemovalType;
}
/**
 * BlacklistEventV1 黑名单事件。
 * 当地址被添加到黑名单或从黑名单移除时触发。
 */
export interface BlacklistEventV1 {
  /** 被操作的地址 */
  address: string;
  /** 封禁/解封原因 */
  reason: string;
  /**
   * 操作时间戳（Unix 秒）
   * 封禁时为 blocked_at，解封时为 unblocked_at
   */
  blockedAt: number;
  /** 操作类型：true = 封禁，false = 解封 */
  isBlocked: boolean;
}
export interface BlacklistEventV1ProtoMsg {
  typeUrl: "/h2x.indexer.events.BlacklistEventV1";
  value: Uint8Array;
}
/**
 * BlacklistEventV1 黑名单事件。
 * 当地址被添加到黑名单或从黑名单移除时触发。
 * @name BlacklistEventV1Amino
 * @package h2x.indexer.events
 * @see proto type: h2x.indexer.events.BlacklistEventV1
 */
export interface BlacklistEventV1Amino {
  /**
   * 被操作的地址
   */
  address?: string;
  /**
   * 封禁/解封原因
   */
  reason?: string;
  /**
   * 操作时间戳（Unix 秒）
   * 封禁时为 blocked_at，解封时为 unblocked_at
   */
  blocked_at?: number;
  /**
   * 操作类型：true = 封禁，false = 解封
   */
  is_blocked?: boolean;
}
export interface BlacklistEventV1AminoMsg {
  type: "/h2x.indexer.events.BlacklistEventV1";
  value: BlacklistEventV1Amino;
}
/**
 * BlacklistEventV1 黑名单事件。
 * 当地址被添加到黑名单或从黑名单移除时触发。
 */
export interface BlacklistEventV1SDKType {
  address: string;
  reason: string;
  blocked_at: number;
  is_blocked: boolean;
}
function createBaseFundingUpdateV1(): FundingUpdateV1 {
  return {
    perpetualId: 0,
    fundingValuePpm: 0,
    fundingIndex: new Uint8Array()
  };
}
export const FundingUpdateV1 = {
  typeUrl: "/h2x.indexer.events.FundingUpdateV1",
  encode(message: FundingUpdateV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.perpetualId !== 0) {
      writer.uint32(8).uint32(message.perpetualId);
    }
    if (message.fundingValuePpm !== 0) {
      writer.uint32(16).int32(message.fundingValuePpm);
    }
    if (message.fundingIndex.length !== 0) {
      writer.uint32(26).bytes(message.fundingIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FundingUpdateV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingUpdateV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualId = reader.uint32();
          break;
        case 2:
          message.fundingValuePpm = reader.int32();
          break;
        case 3:
          message.fundingIndex = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FundingUpdateV1>): FundingUpdateV1 {
    const message = createBaseFundingUpdateV1();
    message.perpetualId = object.perpetualId ?? 0;
    message.fundingValuePpm = object.fundingValuePpm ?? 0;
    message.fundingIndex = object.fundingIndex ?? new Uint8Array();
    return message;
  },
  fromAmino(object: FundingUpdateV1Amino): FundingUpdateV1 {
    const message = createBaseFundingUpdateV1();
    if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
      message.perpetualId = object.perpetual_id;
    }
    if (object.funding_value_ppm !== undefined && object.funding_value_ppm !== null) {
      message.fundingValuePpm = object.funding_value_ppm;
    }
    if (object.funding_index !== undefined && object.funding_index !== null) {
      message.fundingIndex = bytesFromBase64(object.funding_index);
    }
    return message;
  },
  toAmino(message: FundingUpdateV1): FundingUpdateV1Amino {
    const obj: any = {};
    obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
    obj.funding_value_ppm = message.fundingValuePpm === 0 ? undefined : message.fundingValuePpm;
    obj.funding_index = message.fundingIndex ? base64FromBytes(message.fundingIndex) : undefined;
    return obj;
  },
  fromAminoMsg(object: FundingUpdateV1AminoMsg): FundingUpdateV1 {
    return FundingUpdateV1.fromAmino(object.value);
  },
  fromProtoMsg(message: FundingUpdateV1ProtoMsg): FundingUpdateV1 {
    return FundingUpdateV1.decode(message.value);
  },
  toProto(message: FundingUpdateV1): Uint8Array {
    return FundingUpdateV1.encode(message).finish();
  },
  toProtoMsg(message: FundingUpdateV1): FundingUpdateV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.FundingUpdateV1",
      value: FundingUpdateV1.encode(message).finish()
    };
  }
};
function createBaseFundingEventV1(): FundingEventV1 {
  return {
    updates: [],
    type: 0
  };
}
export const FundingEventV1 = {
  typeUrl: "/h2x.indexer.events.FundingEventV1",
  encode(message: FundingEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.updates) {
      FundingUpdateV1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FundingEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updates.push(FundingUpdateV1.decode(reader, reader.uint32()));
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FundingEventV1>): FundingEventV1 {
    const message = createBaseFundingEventV1();
    message.updates = object.updates?.map(e => FundingUpdateV1.fromPartial(e)) || [];
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: FundingEventV1Amino): FundingEventV1 {
    const message = createBaseFundingEventV1();
    message.updates = object.updates?.map(e => FundingUpdateV1.fromAmino(e)) || [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: FundingEventV1): FundingEventV1Amino {
    const obj: any = {};
    if (message.updates) {
      obj.updates = message.updates.map(e => e ? FundingUpdateV1.toAmino(e) : undefined);
    } else {
      obj.updates = message.updates;
    }
    obj.type = message.type === 0 ? undefined : message.type;
    return obj;
  },
  fromAminoMsg(object: FundingEventV1AminoMsg): FundingEventV1 {
    return FundingEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: FundingEventV1ProtoMsg): FundingEventV1 {
    return FundingEventV1.decode(message.value);
  },
  toProto(message: FundingEventV1): Uint8Array {
    return FundingEventV1.encode(message).finish();
  },
  toProtoMsg(message: FundingEventV1): FundingEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.FundingEventV1",
      value: FundingEventV1.encode(message).finish()
    };
  }
};
function createBaseMarketEventV1(): MarketEventV1 {
  return {
    marketId: 0,
    priceUpdate: undefined,
    marketCreate: undefined,
    marketModify: undefined
  };
}
export const MarketEventV1 = {
  typeUrl: "/h2x.indexer.events.MarketEventV1",
  encode(message: MarketEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== 0) {
      writer.uint32(8).uint32(message.marketId);
    }
    if (message.priceUpdate !== undefined) {
      MarketPriceUpdateEventV1.encode(message.priceUpdate, writer.uint32(18).fork()).ldelim();
    }
    if (message.marketCreate !== undefined) {
      MarketCreateEventV1.encode(message.marketCreate, writer.uint32(26).fork()).ldelim();
    }
    if (message.marketModify !== undefined) {
      MarketModifyEventV1.encode(message.marketModify, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.uint32();
          break;
        case 2:
          message.priceUpdate = MarketPriceUpdateEventV1.decode(reader, reader.uint32());
          break;
        case 3:
          message.marketCreate = MarketCreateEventV1.decode(reader, reader.uint32());
          break;
        case 4:
          message.marketModify = MarketModifyEventV1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MarketEventV1>): MarketEventV1 {
    const message = createBaseMarketEventV1();
    message.marketId = object.marketId ?? 0;
    message.priceUpdate = object.priceUpdate !== undefined && object.priceUpdate !== null ? MarketPriceUpdateEventV1.fromPartial(object.priceUpdate) : undefined;
    message.marketCreate = object.marketCreate !== undefined && object.marketCreate !== null ? MarketCreateEventV1.fromPartial(object.marketCreate) : undefined;
    message.marketModify = object.marketModify !== undefined && object.marketModify !== null ? MarketModifyEventV1.fromPartial(object.marketModify) : undefined;
    return message;
  },
  fromAmino(object: MarketEventV1Amino): MarketEventV1 {
    const message = createBaseMarketEventV1();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.price_update !== undefined && object.price_update !== null) {
      message.priceUpdate = MarketPriceUpdateEventV1.fromAmino(object.price_update);
    }
    if (object.market_create !== undefined && object.market_create !== null) {
      message.marketCreate = MarketCreateEventV1.fromAmino(object.market_create);
    }
    if (object.market_modify !== undefined && object.market_modify !== null) {
      message.marketModify = MarketModifyEventV1.fromAmino(object.market_modify);
    }
    return message;
  },
  toAmino(message: MarketEventV1): MarketEventV1Amino {
    const obj: any = {};
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    obj.price_update = message.priceUpdate ? MarketPriceUpdateEventV1.toAmino(message.priceUpdate) : undefined;
    obj.market_create = message.marketCreate ? MarketCreateEventV1.toAmino(message.marketCreate) : undefined;
    obj.market_modify = message.marketModify ? MarketModifyEventV1.toAmino(message.marketModify) : undefined;
    return obj;
  },
  fromAminoMsg(object: MarketEventV1AminoMsg): MarketEventV1 {
    return MarketEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketEventV1ProtoMsg): MarketEventV1 {
    return MarketEventV1.decode(message.value);
  },
  toProto(message: MarketEventV1): Uint8Array {
    return MarketEventV1.encode(message).finish();
  },
  toProtoMsg(message: MarketEventV1): MarketEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.MarketEventV1",
      value: MarketEventV1.encode(message).finish()
    };
  }
};
function createBaseMarketPriceUpdateEventV1(): MarketPriceUpdateEventV1 {
  return {
    priceWithExponent: BigInt(0)
  };
}
export const MarketPriceUpdateEventV1 = {
  typeUrl: "/h2x.indexer.events.MarketPriceUpdateEventV1",
  encode(message: MarketPriceUpdateEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceWithExponent !== BigInt(0)) {
      writer.uint32(8).uint64(message.priceWithExponent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketPriceUpdateEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketPriceUpdateEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceWithExponent = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MarketPriceUpdateEventV1>): MarketPriceUpdateEventV1 {
    const message = createBaseMarketPriceUpdateEventV1();
    message.priceWithExponent = object.priceWithExponent !== undefined && object.priceWithExponent !== null ? BigInt(object.priceWithExponent.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MarketPriceUpdateEventV1Amino): MarketPriceUpdateEventV1 {
    const message = createBaseMarketPriceUpdateEventV1();
    if (object.price_with_exponent !== undefined && object.price_with_exponent !== null) {
      message.priceWithExponent = BigInt(object.price_with_exponent);
    }
    return message;
  },
  toAmino(message: MarketPriceUpdateEventV1): MarketPriceUpdateEventV1Amino {
    const obj: any = {};
    obj.price_with_exponent = message.priceWithExponent !== BigInt(0) ? message.priceWithExponent?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MarketPriceUpdateEventV1AminoMsg): MarketPriceUpdateEventV1 {
    return MarketPriceUpdateEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketPriceUpdateEventV1ProtoMsg): MarketPriceUpdateEventV1 {
    return MarketPriceUpdateEventV1.decode(message.value);
  },
  toProto(message: MarketPriceUpdateEventV1): Uint8Array {
    return MarketPriceUpdateEventV1.encode(message).finish();
  },
  toProtoMsg(message: MarketPriceUpdateEventV1): MarketPriceUpdateEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.MarketPriceUpdateEventV1",
      value: MarketPriceUpdateEventV1.encode(message).finish()
    };
  }
};
function createBaseMarketBaseEventV1(): MarketBaseEventV1 {
  return {
    pair: "",
    minPriceChangePpm: 0
  };
}
export const MarketBaseEventV1 = {
  typeUrl: "/h2x.indexer.events.MarketBaseEventV1",
  encode(message: MarketBaseEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.minPriceChangePpm !== 0) {
      writer.uint32(16).uint32(message.minPriceChangePpm);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketBaseEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketBaseEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.minPriceChangePpm = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MarketBaseEventV1>): MarketBaseEventV1 {
    const message = createBaseMarketBaseEventV1();
    message.pair = object.pair ?? "";
    message.minPriceChangePpm = object.minPriceChangePpm ?? 0;
    return message;
  },
  fromAmino(object: MarketBaseEventV1Amino): MarketBaseEventV1 {
    const message = createBaseMarketBaseEventV1();
    if (object.pair !== undefined && object.pair !== null) {
      message.pair = object.pair;
    }
    if (object.min_price_change_ppm !== undefined && object.min_price_change_ppm !== null) {
      message.minPriceChangePpm = object.min_price_change_ppm;
    }
    return message;
  },
  toAmino(message: MarketBaseEventV1): MarketBaseEventV1Amino {
    const obj: any = {};
    obj.pair = message.pair === "" ? undefined : message.pair;
    obj.min_price_change_ppm = message.minPriceChangePpm === 0 ? undefined : message.minPriceChangePpm;
    return obj;
  },
  fromAminoMsg(object: MarketBaseEventV1AminoMsg): MarketBaseEventV1 {
    return MarketBaseEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketBaseEventV1ProtoMsg): MarketBaseEventV1 {
    return MarketBaseEventV1.decode(message.value);
  },
  toProto(message: MarketBaseEventV1): Uint8Array {
    return MarketBaseEventV1.encode(message).finish();
  },
  toProtoMsg(message: MarketBaseEventV1): MarketBaseEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.MarketBaseEventV1",
      value: MarketBaseEventV1.encode(message).finish()
    };
  }
};
function createBaseMarketCreateEventV1(): MarketCreateEventV1 {
  return {
    base: undefined,
    exponent: 0
  };
}
export const MarketCreateEventV1 = {
  typeUrl: "/h2x.indexer.events.MarketCreateEventV1",
  encode(message: MarketCreateEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== undefined) {
      MarketBaseEventV1.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.exponent !== 0) {
      writer.uint32(16).sint32(message.exponent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketCreateEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketCreateEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = MarketBaseEventV1.decode(reader, reader.uint32());
          break;
        case 2:
          message.exponent = reader.sint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MarketCreateEventV1>): MarketCreateEventV1 {
    const message = createBaseMarketCreateEventV1();
    message.base = object.base !== undefined && object.base !== null ? MarketBaseEventV1.fromPartial(object.base) : undefined;
    message.exponent = object.exponent ?? 0;
    return message;
  },
  fromAmino(object: MarketCreateEventV1Amino): MarketCreateEventV1 {
    const message = createBaseMarketCreateEventV1();
    if (object.base !== undefined && object.base !== null) {
      message.base = MarketBaseEventV1.fromAmino(object.base);
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    return message;
  },
  toAmino(message: MarketCreateEventV1): MarketCreateEventV1Amino {
    const obj: any = {};
    obj.base = message.base ? MarketBaseEventV1.toAmino(message.base) : undefined;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    return obj;
  },
  fromAminoMsg(object: MarketCreateEventV1AminoMsg): MarketCreateEventV1 {
    return MarketCreateEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketCreateEventV1ProtoMsg): MarketCreateEventV1 {
    return MarketCreateEventV1.decode(message.value);
  },
  toProto(message: MarketCreateEventV1): Uint8Array {
    return MarketCreateEventV1.encode(message).finish();
  },
  toProtoMsg(message: MarketCreateEventV1): MarketCreateEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.MarketCreateEventV1",
      value: MarketCreateEventV1.encode(message).finish()
    };
  }
};
function createBaseMarketModifyEventV1(): MarketModifyEventV1 {
  return {
    base: undefined
  };
}
export const MarketModifyEventV1 = {
  typeUrl: "/h2x.indexer.events.MarketModifyEventV1",
  encode(message: MarketModifyEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== undefined) {
      MarketBaseEventV1.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketModifyEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketModifyEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = MarketBaseEventV1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MarketModifyEventV1>): MarketModifyEventV1 {
    const message = createBaseMarketModifyEventV1();
    message.base = object.base !== undefined && object.base !== null ? MarketBaseEventV1.fromPartial(object.base) : undefined;
    return message;
  },
  fromAmino(object: MarketModifyEventV1Amino): MarketModifyEventV1 {
    const message = createBaseMarketModifyEventV1();
    if (object.base !== undefined && object.base !== null) {
      message.base = MarketBaseEventV1.fromAmino(object.base);
    }
    return message;
  },
  toAmino(message: MarketModifyEventV1): MarketModifyEventV1Amino {
    const obj: any = {};
    obj.base = message.base ? MarketBaseEventV1.toAmino(message.base) : undefined;
    return obj;
  },
  fromAminoMsg(object: MarketModifyEventV1AminoMsg): MarketModifyEventV1 {
    return MarketModifyEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketModifyEventV1ProtoMsg): MarketModifyEventV1 {
    return MarketModifyEventV1.decode(message.value);
  },
  toProto(message: MarketModifyEventV1): Uint8Array {
    return MarketModifyEventV1.encode(message).finish();
  },
  toProtoMsg(message: MarketModifyEventV1): MarketModifyEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.MarketModifyEventV1",
      value: MarketModifyEventV1.encode(message).finish()
    };
  }
};
function createBaseSourceOfFunds(): SourceOfFunds {
  return {
    subaccountId: undefined,
    address: undefined
  };
}
export const SourceOfFunds = {
  typeUrl: "/h2x.indexer.events.SourceOfFunds",
  encode(message: SourceOfFunds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== undefined) {
      IndexerSubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== undefined) {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceOfFunds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceOfFunds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = IndexerSubaccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SourceOfFunds>): SourceOfFunds {
    const message = createBaseSourceOfFunds();
    message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? IndexerSubaccountId.fromPartial(object.subaccountId) : undefined;
    message.address = object.address ?? undefined;
    return message;
  },
  fromAmino(object: SourceOfFundsAmino): SourceOfFunds {
    const message = createBaseSourceOfFunds();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = IndexerSubaccountId.fromAmino(object.subaccount_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: SourceOfFunds): SourceOfFundsAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId ? IndexerSubaccountId.toAmino(message.subaccountId) : undefined;
    obj.address = message.address === null ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: SourceOfFundsAminoMsg): SourceOfFunds {
    return SourceOfFunds.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceOfFundsProtoMsg): SourceOfFunds {
    return SourceOfFunds.decode(message.value);
  },
  toProto(message: SourceOfFunds): Uint8Array {
    return SourceOfFunds.encode(message).finish();
  },
  toProtoMsg(message: SourceOfFunds): SourceOfFundsProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.SourceOfFunds",
      value: SourceOfFunds.encode(message).finish()
    };
  }
};
function createBaseTransferEventV1(): TransferEventV1 {
  return {
    senderSubaccountId: undefined,
    recipientSubaccountId: undefined,
    assetId: 0,
    amount: new Uint8Array(),
    sender: undefined,
    recipient: undefined
  };
}
export const TransferEventV1 = {
  typeUrl: "/h2x.indexer.events.TransferEventV1",
  encode(message: TransferEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderSubaccountId !== undefined) {
      IndexerSubaccountId.encode(message.senderSubaccountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.recipientSubaccountId !== undefined) {
      IndexerSubaccountId.encode(message.recipientSubaccountId, writer.uint32(18).fork()).ldelim();
    }
    if (message.assetId !== 0) {
      writer.uint32(24).uint32(message.assetId);
    }
    if (message.amount.length !== 0) {
      writer.uint32(34).bytes(message.amount);
    }
    if (message.sender !== undefined) {
      SourceOfFunds.encode(message.sender, writer.uint32(42).fork()).ldelim();
    }
    if (message.recipient !== undefined) {
      SourceOfFunds.encode(message.recipient, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderSubaccountId = IndexerSubaccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.recipientSubaccountId = IndexerSubaccountId.decode(reader, reader.uint32());
          break;
        case 3:
          message.assetId = reader.uint32();
          break;
        case 4:
          message.amount = reader.bytes();
          break;
        case 5:
          message.sender = SourceOfFunds.decode(reader, reader.uint32());
          break;
        case 6:
          message.recipient = SourceOfFunds.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TransferEventV1>): TransferEventV1 {
    const message = createBaseTransferEventV1();
    message.senderSubaccountId = object.senderSubaccountId !== undefined && object.senderSubaccountId !== null ? IndexerSubaccountId.fromPartial(object.senderSubaccountId) : undefined;
    message.recipientSubaccountId = object.recipientSubaccountId !== undefined && object.recipientSubaccountId !== null ? IndexerSubaccountId.fromPartial(object.recipientSubaccountId) : undefined;
    message.assetId = object.assetId ?? 0;
    message.amount = object.amount ?? new Uint8Array();
    message.sender = object.sender !== undefined && object.sender !== null ? SourceOfFunds.fromPartial(object.sender) : undefined;
    message.recipient = object.recipient !== undefined && object.recipient !== null ? SourceOfFunds.fromPartial(object.recipient) : undefined;
    return message;
  },
  fromAmino(object: TransferEventV1Amino): TransferEventV1 {
    const message = createBaseTransferEventV1();
    if (object.sender_subaccount_id !== undefined && object.sender_subaccount_id !== null) {
      message.senderSubaccountId = IndexerSubaccountId.fromAmino(object.sender_subaccount_id);
    }
    if (object.recipient_subaccount_id !== undefined && object.recipient_subaccount_id !== null) {
      message.recipientSubaccountId = IndexerSubaccountId.fromAmino(object.recipient_subaccount_id);
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = bytesFromBase64(object.amount);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = SourceOfFunds.fromAmino(object.sender);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = SourceOfFunds.fromAmino(object.recipient);
    }
    return message;
  },
  toAmino(message: TransferEventV1): TransferEventV1Amino {
    const obj: any = {};
    obj.sender_subaccount_id = message.senderSubaccountId ? IndexerSubaccountId.toAmino(message.senderSubaccountId) : undefined;
    obj.recipient_subaccount_id = message.recipientSubaccountId ? IndexerSubaccountId.toAmino(message.recipientSubaccountId) : undefined;
    obj.asset_id = message.assetId === 0 ? undefined : message.assetId;
    obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
    obj.sender = message.sender ? SourceOfFunds.toAmino(message.sender) : undefined;
    obj.recipient = message.recipient ? SourceOfFunds.toAmino(message.recipient) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferEventV1AminoMsg): TransferEventV1 {
    return TransferEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferEventV1ProtoMsg): TransferEventV1 {
    return TransferEventV1.decode(message.value);
  },
  toProto(message: TransferEventV1): Uint8Array {
    return TransferEventV1.encode(message).finish();
  },
  toProtoMsg(message: TransferEventV1): TransferEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.TransferEventV1",
      value: TransferEventV1.encode(message).finish()
    };
  }
};
function createBaseOrderFillEventV1(): OrderFillEventV1 {
  return {
    makerOrder: IndexerOrder.fromPartial({}),
    order: undefined,
    liquidationOrder: undefined,
    fillAmount: new Uint8Array(),
    makerFee: new Uint8Array(),
    takerFee: new Uint8Array(),
    totalFilledMaker: new Uint8Array(),
    totalFilledTaker: new Uint8Array(),
    affiliateRevShare: new Uint8Array(),
    makerBuilderFee: new Uint8Array(),
    takerBuilderFee: new Uint8Array(),
    makerBuilderAddress: "",
    takerBuilderAddress: "",
    makerOrderRouterFee: new Uint8Array(),
    takerOrderRouterFee: new Uint8Array(),
    makerOrderRouterAddress: "",
    takerOrderRouterAddress: ""
  };
}
export const OrderFillEventV1 = {
  typeUrl: "/h2x.indexer.events.OrderFillEventV1",
  encode(message: OrderFillEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.makerOrder !== undefined) {
      IndexerOrder.encode(message.makerOrder, writer.uint32(10).fork()).ldelim();
    }
    if (message.order !== undefined) {
      IndexerOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    if (message.liquidationOrder !== undefined) {
      LiquidationOrderV1.encode(message.liquidationOrder, writer.uint32(34).fork()).ldelim();
    }
    if (message.fillAmount.length !== 0) {
      writer.uint32(26).bytes(message.fillAmount);
    }
    if (message.makerFee.length !== 0) {
      writer.uint32(42).bytes(message.makerFee);
    }
    if (message.takerFee.length !== 0) {
      writer.uint32(50).bytes(message.takerFee);
    }
    if (message.totalFilledMaker.length !== 0) {
      writer.uint32(58).bytes(message.totalFilledMaker);
    }
    if (message.totalFilledTaker.length !== 0) {
      writer.uint32(66).bytes(message.totalFilledTaker);
    }
    if (message.affiliateRevShare.length !== 0) {
      writer.uint32(74).bytes(message.affiliateRevShare);
    }
    if (message.makerBuilderFee.length !== 0) {
      writer.uint32(82).bytes(message.makerBuilderFee);
    }
    if (message.takerBuilderFee.length !== 0) {
      writer.uint32(90).bytes(message.takerBuilderFee);
    }
    if (message.makerBuilderAddress !== "") {
      writer.uint32(98).string(message.makerBuilderAddress);
    }
    if (message.takerBuilderAddress !== "") {
      writer.uint32(106).string(message.takerBuilderAddress);
    }
    if (message.makerOrderRouterFee.length !== 0) {
      writer.uint32(114).bytes(message.makerOrderRouterFee);
    }
    if (message.takerOrderRouterFee.length !== 0) {
      writer.uint32(122).bytes(message.takerOrderRouterFee);
    }
    if (message.makerOrderRouterAddress !== "") {
      writer.uint32(130).string(message.makerOrderRouterAddress);
    }
    if (message.takerOrderRouterAddress !== "") {
      writer.uint32(138).string(message.takerOrderRouterAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderFillEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderFillEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.makerOrder = IndexerOrder.decode(reader, reader.uint32());
          break;
        case 2:
          message.order = IndexerOrder.decode(reader, reader.uint32());
          break;
        case 4:
          message.liquidationOrder = LiquidationOrderV1.decode(reader, reader.uint32());
          break;
        case 3:
          message.fillAmount = reader.bytes();
          break;
        case 5:
          message.makerFee = reader.bytes();
          break;
        case 6:
          message.takerFee = reader.bytes();
          break;
        case 7:
          message.totalFilledMaker = reader.bytes();
          break;
        case 8:
          message.totalFilledTaker = reader.bytes();
          break;
        case 9:
          message.affiliateRevShare = reader.bytes();
          break;
        case 10:
          message.makerBuilderFee = reader.bytes();
          break;
        case 11:
          message.takerBuilderFee = reader.bytes();
          break;
        case 12:
          message.makerBuilderAddress = reader.string();
          break;
        case 13:
          message.takerBuilderAddress = reader.string();
          break;
        case 14:
          message.makerOrderRouterFee = reader.bytes();
          break;
        case 15:
          message.takerOrderRouterFee = reader.bytes();
          break;
        case 16:
          message.makerOrderRouterAddress = reader.string();
          break;
        case 17:
          message.takerOrderRouterAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OrderFillEventV1>): OrderFillEventV1 {
    const message = createBaseOrderFillEventV1();
    message.makerOrder = object.makerOrder !== undefined && object.makerOrder !== null ? IndexerOrder.fromPartial(object.makerOrder) : undefined;
    message.order = object.order !== undefined && object.order !== null ? IndexerOrder.fromPartial(object.order) : undefined;
    message.liquidationOrder = object.liquidationOrder !== undefined && object.liquidationOrder !== null ? LiquidationOrderV1.fromPartial(object.liquidationOrder) : undefined;
    message.fillAmount = object.fillAmount ?? new Uint8Array();
    message.makerFee = object.makerFee ?? new Uint8Array();
    message.takerFee = object.takerFee ?? new Uint8Array();
    message.totalFilledMaker = object.totalFilledMaker ?? new Uint8Array();
    message.totalFilledTaker = object.totalFilledTaker ?? new Uint8Array();
    message.affiliateRevShare = object.affiliateRevShare ?? new Uint8Array();
    message.makerBuilderFee = object.makerBuilderFee ?? new Uint8Array();
    message.takerBuilderFee = object.takerBuilderFee ?? new Uint8Array();
    message.makerBuilderAddress = object.makerBuilderAddress ?? "";
    message.takerBuilderAddress = object.takerBuilderAddress ?? "";
    message.makerOrderRouterFee = object.makerOrderRouterFee ?? new Uint8Array();
    message.takerOrderRouterFee = object.takerOrderRouterFee ?? new Uint8Array();
    message.makerOrderRouterAddress = object.makerOrderRouterAddress ?? "";
    message.takerOrderRouterAddress = object.takerOrderRouterAddress ?? "";
    return message;
  },
  fromAmino(object: OrderFillEventV1Amino): OrderFillEventV1 {
    const message = createBaseOrderFillEventV1();
    if (object.maker_order !== undefined && object.maker_order !== null) {
      message.makerOrder = IndexerOrder.fromAmino(object.maker_order);
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = IndexerOrder.fromAmino(object.order);
    }
    if (object.liquidation_order !== undefined && object.liquidation_order !== null) {
      message.liquidationOrder = LiquidationOrderV1.fromAmino(object.liquidation_order);
    }
    if (object.fill_amount !== undefined && object.fill_amount !== null) {
      message.fillAmount = bytesFromBase64(object.fill_amount);
    }
    if (object.maker_fee !== undefined && object.maker_fee !== null) {
      message.makerFee = bytesFromBase64(object.maker_fee);
    }
    if (object.taker_fee !== undefined && object.taker_fee !== null) {
      message.takerFee = bytesFromBase64(object.taker_fee);
    }
    if (object.total_filled_maker !== undefined && object.total_filled_maker !== null) {
      message.totalFilledMaker = bytesFromBase64(object.total_filled_maker);
    }
    if (object.total_filled_taker !== undefined && object.total_filled_taker !== null) {
      message.totalFilledTaker = bytesFromBase64(object.total_filled_taker);
    }
    if (object.affiliate_rev_share !== undefined && object.affiliate_rev_share !== null) {
      message.affiliateRevShare = bytesFromBase64(object.affiliate_rev_share);
    }
    if (object.maker_builder_fee !== undefined && object.maker_builder_fee !== null) {
      message.makerBuilderFee = bytesFromBase64(object.maker_builder_fee);
    }
    if (object.taker_builder_fee !== undefined && object.taker_builder_fee !== null) {
      message.takerBuilderFee = bytesFromBase64(object.taker_builder_fee);
    }
    if (object.maker_builder_address !== undefined && object.maker_builder_address !== null) {
      message.makerBuilderAddress = object.maker_builder_address;
    }
    if (object.taker_builder_address !== undefined && object.taker_builder_address !== null) {
      message.takerBuilderAddress = object.taker_builder_address;
    }
    if (object.maker_order_router_fee !== undefined && object.maker_order_router_fee !== null) {
      message.makerOrderRouterFee = bytesFromBase64(object.maker_order_router_fee);
    }
    if (object.taker_order_router_fee !== undefined && object.taker_order_router_fee !== null) {
      message.takerOrderRouterFee = bytesFromBase64(object.taker_order_router_fee);
    }
    if (object.maker_order_router_address !== undefined && object.maker_order_router_address !== null) {
      message.makerOrderRouterAddress = object.maker_order_router_address;
    }
    if (object.taker_order_router_address !== undefined && object.taker_order_router_address !== null) {
      message.takerOrderRouterAddress = object.taker_order_router_address;
    }
    return message;
  },
  toAmino(message: OrderFillEventV1): OrderFillEventV1Amino {
    const obj: any = {};
    obj.maker_order = message.makerOrder ? IndexerOrder.toAmino(message.makerOrder) : undefined;
    obj.order = message.order ? IndexerOrder.toAmino(message.order) : undefined;
    obj.liquidation_order = message.liquidationOrder ? LiquidationOrderV1.toAmino(message.liquidationOrder) : undefined;
    obj.fill_amount = message.fillAmount ? base64FromBytes(message.fillAmount) : undefined;
    obj.maker_fee = message.makerFee ? base64FromBytes(message.makerFee) : undefined;
    obj.taker_fee = message.takerFee ? base64FromBytes(message.takerFee) : undefined;
    obj.total_filled_maker = message.totalFilledMaker ? base64FromBytes(message.totalFilledMaker) : undefined;
    obj.total_filled_taker = message.totalFilledTaker ? base64FromBytes(message.totalFilledTaker) : undefined;
    obj.affiliate_rev_share = message.affiliateRevShare ? base64FromBytes(message.affiliateRevShare) : undefined;
    obj.maker_builder_fee = message.makerBuilderFee ? base64FromBytes(message.makerBuilderFee) : undefined;
    obj.taker_builder_fee = message.takerBuilderFee ? base64FromBytes(message.takerBuilderFee) : undefined;
    obj.maker_builder_address = message.makerBuilderAddress === "" ? undefined : message.makerBuilderAddress;
    obj.taker_builder_address = message.takerBuilderAddress === "" ? undefined : message.takerBuilderAddress;
    obj.maker_order_router_fee = message.makerOrderRouterFee ? base64FromBytes(message.makerOrderRouterFee) : undefined;
    obj.taker_order_router_fee = message.takerOrderRouterFee ? base64FromBytes(message.takerOrderRouterFee) : undefined;
    obj.maker_order_router_address = message.makerOrderRouterAddress === "" ? undefined : message.makerOrderRouterAddress;
    obj.taker_order_router_address = message.takerOrderRouterAddress === "" ? undefined : message.takerOrderRouterAddress;
    return obj;
  },
  fromAminoMsg(object: OrderFillEventV1AminoMsg): OrderFillEventV1 {
    return OrderFillEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderFillEventV1ProtoMsg): OrderFillEventV1 {
    return OrderFillEventV1.decode(message.value);
  },
  toProto(message: OrderFillEventV1): Uint8Array {
    return OrderFillEventV1.encode(message).finish();
  },
  toProtoMsg(message: OrderFillEventV1): OrderFillEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.OrderFillEventV1",
      value: OrderFillEventV1.encode(message).finish()
    };
  }
};
function createBaseDeleveragingEventV1(): DeleveragingEventV1 {
  return {
    liquidated: IndexerSubaccountId.fromPartial({}),
    offsetting: IndexerSubaccountId.fromPartial({}),
    perpetualId: 0,
    fillAmount: new Uint8Array(),
    totalQuoteQuantums: new Uint8Array(),
    isBuy: false,
    isFinalSettlement: false
  };
}
export const DeleveragingEventV1 = {
  typeUrl: "/h2x.indexer.events.DeleveragingEventV1",
  encode(message: DeleveragingEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidated !== undefined) {
      IndexerSubaccountId.encode(message.liquidated, writer.uint32(10).fork()).ldelim();
    }
    if (message.offsetting !== undefined) {
      IndexerSubaccountId.encode(message.offsetting, writer.uint32(18).fork()).ldelim();
    }
    if (message.perpetualId !== 0) {
      writer.uint32(24).uint32(message.perpetualId);
    }
    if (message.fillAmount.length !== 0) {
      writer.uint32(34).bytes(message.fillAmount);
    }
    if (message.totalQuoteQuantums.length !== 0) {
      writer.uint32(42).bytes(message.totalQuoteQuantums);
    }
    if (message.isBuy === true) {
      writer.uint32(48).bool(message.isBuy);
    }
    if (message.isFinalSettlement === true) {
      writer.uint32(56).bool(message.isFinalSettlement);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleveragingEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleveragingEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidated = IndexerSubaccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.offsetting = IndexerSubaccountId.decode(reader, reader.uint32());
          break;
        case 3:
          message.perpetualId = reader.uint32();
          break;
        case 4:
          message.fillAmount = reader.bytes();
          break;
        case 5:
          message.totalQuoteQuantums = reader.bytes();
          break;
        case 6:
          message.isBuy = reader.bool();
          break;
        case 7:
          message.isFinalSettlement = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DeleveragingEventV1>): DeleveragingEventV1 {
    const message = createBaseDeleveragingEventV1();
    message.liquidated = object.liquidated !== undefined && object.liquidated !== null ? IndexerSubaccountId.fromPartial(object.liquidated) : undefined;
    message.offsetting = object.offsetting !== undefined && object.offsetting !== null ? IndexerSubaccountId.fromPartial(object.offsetting) : undefined;
    message.perpetualId = object.perpetualId ?? 0;
    message.fillAmount = object.fillAmount ?? new Uint8Array();
    message.totalQuoteQuantums = object.totalQuoteQuantums ?? new Uint8Array();
    message.isBuy = object.isBuy ?? false;
    message.isFinalSettlement = object.isFinalSettlement ?? false;
    return message;
  },
  fromAmino(object: DeleveragingEventV1Amino): DeleveragingEventV1 {
    const message = createBaseDeleveragingEventV1();
    if (object.liquidated !== undefined && object.liquidated !== null) {
      message.liquidated = IndexerSubaccountId.fromAmino(object.liquidated);
    }
    if (object.offsetting !== undefined && object.offsetting !== null) {
      message.offsetting = IndexerSubaccountId.fromAmino(object.offsetting);
    }
    if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
      message.perpetualId = object.perpetual_id;
    }
    if (object.fill_amount !== undefined && object.fill_amount !== null) {
      message.fillAmount = bytesFromBase64(object.fill_amount);
    }
    if (object.total_quote_quantums !== undefined && object.total_quote_quantums !== null) {
      message.totalQuoteQuantums = bytesFromBase64(object.total_quote_quantums);
    }
    if (object.is_buy !== undefined && object.is_buy !== null) {
      message.isBuy = object.is_buy;
    }
    if (object.is_final_settlement !== undefined && object.is_final_settlement !== null) {
      message.isFinalSettlement = object.is_final_settlement;
    }
    return message;
  },
  toAmino(message: DeleveragingEventV1): DeleveragingEventV1Amino {
    const obj: any = {};
    obj.liquidated = message.liquidated ? IndexerSubaccountId.toAmino(message.liquidated) : undefined;
    obj.offsetting = message.offsetting ? IndexerSubaccountId.toAmino(message.offsetting) : undefined;
    obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
    obj.fill_amount = message.fillAmount ? base64FromBytes(message.fillAmount) : undefined;
    obj.total_quote_quantums = message.totalQuoteQuantums ? base64FromBytes(message.totalQuoteQuantums) : undefined;
    obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
    obj.is_final_settlement = message.isFinalSettlement === false ? undefined : message.isFinalSettlement;
    return obj;
  },
  fromAminoMsg(object: DeleveragingEventV1AminoMsg): DeleveragingEventV1 {
    return DeleveragingEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleveragingEventV1ProtoMsg): DeleveragingEventV1 {
    return DeleveragingEventV1.decode(message.value);
  },
  toProto(message: DeleveragingEventV1): Uint8Array {
    return DeleveragingEventV1.encode(message).finish();
  },
  toProtoMsg(message: DeleveragingEventV1): DeleveragingEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.DeleveragingEventV1",
      value: DeleveragingEventV1.encode(message).finish()
    };
  }
};
function createBaseLiquidationOrderV1(): LiquidationOrderV1 {
  return {
    liquidated: IndexerSubaccountId.fromPartial({}),
    clobPairId: 0,
    perpetualId: 0,
    totalSize: new Uint8Array(),
    isBuy: false,
    subticks: new Uint8Array()
  };
}
export const LiquidationOrderV1 = {
  typeUrl: "/h2x.indexer.events.LiquidationOrderV1",
  encode(message: LiquidationOrderV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidated !== undefined) {
      IndexerSubaccountId.encode(message.liquidated, writer.uint32(10).fork()).ldelim();
    }
    if (message.clobPairId !== 0) {
      writer.uint32(16).uint32(message.clobPairId);
    }
    if (message.perpetualId !== 0) {
      writer.uint32(24).uint32(message.perpetualId);
    }
    if (message.totalSize.length !== 0) {
      writer.uint32(34).bytes(message.totalSize);
    }
    if (message.isBuy === true) {
      writer.uint32(40).bool(message.isBuy);
    }
    if (message.subticks.length !== 0) {
      writer.uint32(50).bytes(message.subticks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidationOrderV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidationOrderV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidated = IndexerSubaccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.clobPairId = reader.uint32();
          break;
        case 3:
          message.perpetualId = reader.uint32();
          break;
        case 4:
          message.totalSize = reader.bytes();
          break;
        case 5:
          message.isBuy = reader.bool();
          break;
        case 6:
          message.subticks = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LiquidationOrderV1>): LiquidationOrderV1 {
    const message = createBaseLiquidationOrderV1();
    message.liquidated = object.liquidated !== undefined && object.liquidated !== null ? IndexerSubaccountId.fromPartial(object.liquidated) : undefined;
    message.clobPairId = object.clobPairId ?? 0;
    message.perpetualId = object.perpetualId ?? 0;
    message.totalSize = object.totalSize ?? new Uint8Array();
    message.isBuy = object.isBuy ?? false;
    message.subticks = object.subticks ?? new Uint8Array();
    return message;
  },
  fromAmino(object: LiquidationOrderV1Amino): LiquidationOrderV1 {
    const message = createBaseLiquidationOrderV1();
    if (object.liquidated !== undefined && object.liquidated !== null) {
      message.liquidated = IndexerSubaccountId.fromAmino(object.liquidated);
    }
    if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
      message.clobPairId = object.clob_pair_id;
    }
    if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
      message.perpetualId = object.perpetual_id;
    }
    if (object.total_size !== undefined && object.total_size !== null) {
      message.totalSize = bytesFromBase64(object.total_size);
    }
    if (object.is_buy !== undefined && object.is_buy !== null) {
      message.isBuy = object.is_buy;
    }
    if (object.subticks !== undefined && object.subticks !== null) {
      message.subticks = bytesFromBase64(object.subticks);
    }
    return message;
  },
  toAmino(message: LiquidationOrderV1): LiquidationOrderV1Amino {
    const obj: any = {};
    obj.liquidated = message.liquidated ? IndexerSubaccountId.toAmino(message.liquidated) : undefined;
    obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
    obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
    obj.total_size = message.totalSize ? base64FromBytes(message.totalSize) : undefined;
    obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
    obj.subticks = message.subticks ? base64FromBytes(message.subticks) : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidationOrderV1AminoMsg): LiquidationOrderV1 {
    return LiquidationOrderV1.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidationOrderV1ProtoMsg): LiquidationOrderV1 {
    return LiquidationOrderV1.decode(message.value);
  },
  toProto(message: LiquidationOrderV1): Uint8Array {
    return LiquidationOrderV1.encode(message).finish();
  },
  toProtoMsg(message: LiquidationOrderV1): LiquidationOrderV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.LiquidationOrderV1",
      value: LiquidationOrderV1.encode(message).finish()
    };
  }
};
function createBaseSubaccountUpdateEventV1(): SubaccountUpdateEventV1 {
  return {
    subaccountId: undefined,
    updatedPerpetualPositions: [],
    updatedAssetPositions: []
  };
}
export const SubaccountUpdateEventV1 = {
  typeUrl: "/h2x.indexer.events.SubaccountUpdateEventV1",
  encode(message: SubaccountUpdateEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== undefined) {
      IndexerSubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.updatedPerpetualPositions) {
      IndexerPerpetualPosition.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.updatedAssetPositions) {
      IndexerAssetPosition.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountUpdateEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountUpdateEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = IndexerSubaccountId.decode(reader, reader.uint32());
          break;
        case 3:
          message.updatedPerpetualPositions.push(IndexerPerpetualPosition.decode(reader, reader.uint32()));
          break;
        case 4:
          message.updatedAssetPositions.push(IndexerAssetPosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SubaccountUpdateEventV1>): SubaccountUpdateEventV1 {
    const message = createBaseSubaccountUpdateEventV1();
    message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? IndexerSubaccountId.fromPartial(object.subaccountId) : undefined;
    message.updatedPerpetualPositions = object.updatedPerpetualPositions?.map(e => IndexerPerpetualPosition.fromPartial(e)) || [];
    message.updatedAssetPositions = object.updatedAssetPositions?.map(e => IndexerAssetPosition.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SubaccountUpdateEventV1Amino): SubaccountUpdateEventV1 {
    const message = createBaseSubaccountUpdateEventV1();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = IndexerSubaccountId.fromAmino(object.subaccount_id);
    }
    message.updatedPerpetualPositions = object.updated_perpetual_positions?.map(e => IndexerPerpetualPosition.fromAmino(e)) || [];
    message.updatedAssetPositions = object.updated_asset_positions?.map(e => IndexerAssetPosition.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SubaccountUpdateEventV1): SubaccountUpdateEventV1Amino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId ? IndexerSubaccountId.toAmino(message.subaccountId) : undefined;
    if (message.updatedPerpetualPositions) {
      obj.updated_perpetual_positions = message.updatedPerpetualPositions.map(e => e ? IndexerPerpetualPosition.toAmino(e) : undefined);
    } else {
      obj.updated_perpetual_positions = message.updatedPerpetualPositions;
    }
    if (message.updatedAssetPositions) {
      obj.updated_asset_positions = message.updatedAssetPositions.map(e => e ? IndexerAssetPosition.toAmino(e) : undefined);
    } else {
      obj.updated_asset_positions = message.updatedAssetPositions;
    }
    return obj;
  },
  fromAminoMsg(object: SubaccountUpdateEventV1AminoMsg): SubaccountUpdateEventV1 {
    return SubaccountUpdateEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountUpdateEventV1ProtoMsg): SubaccountUpdateEventV1 {
    return SubaccountUpdateEventV1.decode(message.value);
  },
  toProto(message: SubaccountUpdateEventV1): Uint8Array {
    return SubaccountUpdateEventV1.encode(message).finish();
  },
  toProtoMsg(message: SubaccountUpdateEventV1): SubaccountUpdateEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.SubaccountUpdateEventV1",
      value: SubaccountUpdateEventV1.encode(message).finish()
    };
  }
};
function createBaseStatefulOrderEventV1(): StatefulOrderEventV1 {
  return {
    orderPlace: undefined,
    orderRemoval: undefined,
    conditionalOrderPlacement: undefined,
    conditionalOrderTriggered: undefined,
    longTermOrderPlacement: undefined,
    orderReplacement: undefined,
    twapOrderPlacement: undefined
  };
}
export const StatefulOrderEventV1 = {
  typeUrl: "/h2x.indexer.events.StatefulOrderEventV1",
  encode(message: StatefulOrderEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderPlace !== undefined) {
      StatefulOrderEventV1_StatefulOrderPlacementV1.encode(message.orderPlace, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderRemoval !== undefined) {
      StatefulOrderEventV1_StatefulOrderRemovalV1.encode(message.orderRemoval, writer.uint32(34).fork()).ldelim();
    }
    if (message.conditionalOrderPlacement !== undefined) {
      StatefulOrderEventV1_ConditionalOrderPlacementV1.encode(message.conditionalOrderPlacement, writer.uint32(42).fork()).ldelim();
    }
    if (message.conditionalOrderTriggered !== undefined) {
      StatefulOrderEventV1_ConditionalOrderTriggeredV1.encode(message.conditionalOrderTriggered, writer.uint32(50).fork()).ldelim();
    }
    if (message.longTermOrderPlacement !== undefined) {
      StatefulOrderEventV1_LongTermOrderPlacementV1.encode(message.longTermOrderPlacement, writer.uint32(58).fork()).ldelim();
    }
    if (message.orderReplacement !== undefined) {
      StatefulOrderEventV1_LongTermOrderReplacementV1.encode(message.orderReplacement, writer.uint32(66).fork()).ldelim();
    }
    if (message.twapOrderPlacement !== undefined) {
      StatefulOrderEventV1_TwapOrderPlacementV1.encode(message.twapOrderPlacement, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatefulOrderEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatefulOrderEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderPlace = StatefulOrderEventV1_StatefulOrderPlacementV1.decode(reader, reader.uint32());
          break;
        case 4:
          message.orderRemoval = StatefulOrderEventV1_StatefulOrderRemovalV1.decode(reader, reader.uint32());
          break;
        case 5:
          message.conditionalOrderPlacement = StatefulOrderEventV1_ConditionalOrderPlacementV1.decode(reader, reader.uint32());
          break;
        case 6:
          message.conditionalOrderTriggered = StatefulOrderEventV1_ConditionalOrderTriggeredV1.decode(reader, reader.uint32());
          break;
        case 7:
          message.longTermOrderPlacement = StatefulOrderEventV1_LongTermOrderPlacementV1.decode(reader, reader.uint32());
          break;
        case 8:
          message.orderReplacement = StatefulOrderEventV1_LongTermOrderReplacementV1.decode(reader, reader.uint32());
          break;
        case 9:
          message.twapOrderPlacement = StatefulOrderEventV1_TwapOrderPlacementV1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatefulOrderEventV1>): StatefulOrderEventV1 {
    const message = createBaseStatefulOrderEventV1();
    message.orderPlace = object.orderPlace !== undefined && object.orderPlace !== null ? StatefulOrderEventV1_StatefulOrderPlacementV1.fromPartial(object.orderPlace) : undefined;
    message.orderRemoval = object.orderRemoval !== undefined && object.orderRemoval !== null ? StatefulOrderEventV1_StatefulOrderRemovalV1.fromPartial(object.orderRemoval) : undefined;
    message.conditionalOrderPlacement = object.conditionalOrderPlacement !== undefined && object.conditionalOrderPlacement !== null ? StatefulOrderEventV1_ConditionalOrderPlacementV1.fromPartial(object.conditionalOrderPlacement) : undefined;
    message.conditionalOrderTriggered = object.conditionalOrderTriggered !== undefined && object.conditionalOrderTriggered !== null ? StatefulOrderEventV1_ConditionalOrderTriggeredV1.fromPartial(object.conditionalOrderTriggered) : undefined;
    message.longTermOrderPlacement = object.longTermOrderPlacement !== undefined && object.longTermOrderPlacement !== null ? StatefulOrderEventV1_LongTermOrderPlacementV1.fromPartial(object.longTermOrderPlacement) : undefined;
    message.orderReplacement = object.orderReplacement !== undefined && object.orderReplacement !== null ? StatefulOrderEventV1_LongTermOrderReplacementV1.fromPartial(object.orderReplacement) : undefined;
    message.twapOrderPlacement = object.twapOrderPlacement !== undefined && object.twapOrderPlacement !== null ? StatefulOrderEventV1_TwapOrderPlacementV1.fromPartial(object.twapOrderPlacement) : undefined;
    return message;
  },
  fromAmino(object: StatefulOrderEventV1Amino): StatefulOrderEventV1 {
    const message = createBaseStatefulOrderEventV1();
    if (object.order_place !== undefined && object.order_place !== null) {
      message.orderPlace = StatefulOrderEventV1_StatefulOrderPlacementV1.fromAmino(object.order_place);
    }
    if (object.order_removal !== undefined && object.order_removal !== null) {
      message.orderRemoval = StatefulOrderEventV1_StatefulOrderRemovalV1.fromAmino(object.order_removal);
    }
    if (object.conditional_order_placement !== undefined && object.conditional_order_placement !== null) {
      message.conditionalOrderPlacement = StatefulOrderEventV1_ConditionalOrderPlacementV1.fromAmino(object.conditional_order_placement);
    }
    if (object.conditional_order_triggered !== undefined && object.conditional_order_triggered !== null) {
      message.conditionalOrderTriggered = StatefulOrderEventV1_ConditionalOrderTriggeredV1.fromAmino(object.conditional_order_triggered);
    }
    if (object.long_term_order_placement !== undefined && object.long_term_order_placement !== null) {
      message.longTermOrderPlacement = StatefulOrderEventV1_LongTermOrderPlacementV1.fromAmino(object.long_term_order_placement);
    }
    if (object.order_replacement !== undefined && object.order_replacement !== null) {
      message.orderReplacement = StatefulOrderEventV1_LongTermOrderReplacementV1.fromAmino(object.order_replacement);
    }
    if (object.twap_order_placement !== undefined && object.twap_order_placement !== null) {
      message.twapOrderPlacement = StatefulOrderEventV1_TwapOrderPlacementV1.fromAmino(object.twap_order_placement);
    }
    return message;
  },
  toAmino(message: StatefulOrderEventV1): StatefulOrderEventV1Amino {
    const obj: any = {};
    obj.order_place = message.orderPlace ? StatefulOrderEventV1_StatefulOrderPlacementV1.toAmino(message.orderPlace) : undefined;
    obj.order_removal = message.orderRemoval ? StatefulOrderEventV1_StatefulOrderRemovalV1.toAmino(message.orderRemoval) : undefined;
    obj.conditional_order_placement = message.conditionalOrderPlacement ? StatefulOrderEventV1_ConditionalOrderPlacementV1.toAmino(message.conditionalOrderPlacement) : undefined;
    obj.conditional_order_triggered = message.conditionalOrderTriggered ? StatefulOrderEventV1_ConditionalOrderTriggeredV1.toAmino(message.conditionalOrderTriggered) : undefined;
    obj.long_term_order_placement = message.longTermOrderPlacement ? StatefulOrderEventV1_LongTermOrderPlacementV1.toAmino(message.longTermOrderPlacement) : undefined;
    obj.order_replacement = message.orderReplacement ? StatefulOrderEventV1_LongTermOrderReplacementV1.toAmino(message.orderReplacement) : undefined;
    obj.twap_order_placement = message.twapOrderPlacement ? StatefulOrderEventV1_TwapOrderPlacementV1.toAmino(message.twapOrderPlacement) : undefined;
    return obj;
  },
  fromAminoMsg(object: StatefulOrderEventV1AminoMsg): StatefulOrderEventV1 {
    return StatefulOrderEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: StatefulOrderEventV1ProtoMsg): StatefulOrderEventV1 {
    return StatefulOrderEventV1.decode(message.value);
  },
  toProto(message: StatefulOrderEventV1): Uint8Array {
    return StatefulOrderEventV1.encode(message).finish();
  },
  toProtoMsg(message: StatefulOrderEventV1): StatefulOrderEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.StatefulOrderEventV1",
      value: StatefulOrderEventV1.encode(message).finish()
    };
  }
};
function createBaseStatefulOrderEventV1_StatefulOrderPlacementV1(): StatefulOrderEventV1_StatefulOrderPlacementV1 {
  return {
    order: undefined
  };
}
export const StatefulOrderEventV1_StatefulOrderPlacementV1 = {
  typeUrl: "/h2x.indexer.events.StatefulOrderPlacementV1",
  encode(message: StatefulOrderEventV1_StatefulOrderPlacementV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatefulOrderEventV1_StatefulOrderPlacementV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatefulOrderEventV1_StatefulOrderPlacementV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = IndexerOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatefulOrderEventV1_StatefulOrderPlacementV1>): StatefulOrderEventV1_StatefulOrderPlacementV1 {
    const message = createBaseStatefulOrderEventV1_StatefulOrderPlacementV1();
    message.order = object.order !== undefined && object.order !== null ? IndexerOrder.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: StatefulOrderEventV1_StatefulOrderPlacementV1Amino): StatefulOrderEventV1_StatefulOrderPlacementV1 {
    const message = createBaseStatefulOrderEventV1_StatefulOrderPlacementV1();
    if (object.order !== undefined && object.order !== null) {
      message.order = IndexerOrder.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: StatefulOrderEventV1_StatefulOrderPlacementV1): StatefulOrderEventV1_StatefulOrderPlacementV1Amino {
    const obj: any = {};
    obj.order = message.order ? IndexerOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: StatefulOrderEventV1_StatefulOrderPlacementV1AminoMsg): StatefulOrderEventV1_StatefulOrderPlacementV1 {
    return StatefulOrderEventV1_StatefulOrderPlacementV1.fromAmino(object.value);
  },
  fromProtoMsg(message: StatefulOrderEventV1_StatefulOrderPlacementV1ProtoMsg): StatefulOrderEventV1_StatefulOrderPlacementV1 {
    return StatefulOrderEventV1_StatefulOrderPlacementV1.decode(message.value);
  },
  toProto(message: StatefulOrderEventV1_StatefulOrderPlacementV1): Uint8Array {
    return StatefulOrderEventV1_StatefulOrderPlacementV1.encode(message).finish();
  },
  toProtoMsg(message: StatefulOrderEventV1_StatefulOrderPlacementV1): StatefulOrderEventV1_StatefulOrderPlacementV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.StatefulOrderPlacementV1",
      value: StatefulOrderEventV1_StatefulOrderPlacementV1.encode(message).finish()
    };
  }
};
function createBaseStatefulOrderEventV1_StatefulOrderRemovalV1(): StatefulOrderEventV1_StatefulOrderRemovalV1 {
  return {
    removedOrderId: undefined,
    reason: 0
  };
}
export const StatefulOrderEventV1_StatefulOrderRemovalV1 = {
  typeUrl: "/h2x.indexer.events.StatefulOrderRemovalV1",
  encode(message: StatefulOrderEventV1_StatefulOrderRemovalV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.removedOrderId !== undefined) {
      IndexerOrderId.encode(message.removedOrderId, writer.uint32(10).fork()).ldelim();
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatefulOrderEventV1_StatefulOrderRemovalV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatefulOrderEventV1_StatefulOrderRemovalV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.removedOrderId = IndexerOrderId.decode(reader, reader.uint32());
          break;
        case 2:
          message.reason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatefulOrderEventV1_StatefulOrderRemovalV1>): StatefulOrderEventV1_StatefulOrderRemovalV1 {
    const message = createBaseStatefulOrderEventV1_StatefulOrderRemovalV1();
    message.removedOrderId = object.removedOrderId !== undefined && object.removedOrderId !== null ? IndexerOrderId.fromPartial(object.removedOrderId) : undefined;
    message.reason = object.reason ?? 0;
    return message;
  },
  fromAmino(object: StatefulOrderEventV1_StatefulOrderRemovalV1Amino): StatefulOrderEventV1_StatefulOrderRemovalV1 {
    const message = createBaseStatefulOrderEventV1_StatefulOrderRemovalV1();
    if (object.removed_order_id !== undefined && object.removed_order_id !== null) {
      message.removedOrderId = IndexerOrderId.fromAmino(object.removed_order_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: StatefulOrderEventV1_StatefulOrderRemovalV1): StatefulOrderEventV1_StatefulOrderRemovalV1Amino {
    const obj: any = {};
    obj.removed_order_id = message.removedOrderId ? IndexerOrderId.toAmino(message.removedOrderId) : undefined;
    obj.reason = message.reason === 0 ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: StatefulOrderEventV1_StatefulOrderRemovalV1AminoMsg): StatefulOrderEventV1_StatefulOrderRemovalV1 {
    return StatefulOrderEventV1_StatefulOrderRemovalV1.fromAmino(object.value);
  },
  fromProtoMsg(message: StatefulOrderEventV1_StatefulOrderRemovalV1ProtoMsg): StatefulOrderEventV1_StatefulOrderRemovalV1 {
    return StatefulOrderEventV1_StatefulOrderRemovalV1.decode(message.value);
  },
  toProto(message: StatefulOrderEventV1_StatefulOrderRemovalV1): Uint8Array {
    return StatefulOrderEventV1_StatefulOrderRemovalV1.encode(message).finish();
  },
  toProtoMsg(message: StatefulOrderEventV1_StatefulOrderRemovalV1): StatefulOrderEventV1_StatefulOrderRemovalV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.StatefulOrderRemovalV1",
      value: StatefulOrderEventV1_StatefulOrderRemovalV1.encode(message).finish()
    };
  }
};
function createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1(): StatefulOrderEventV1_ConditionalOrderPlacementV1 {
  return {
    order: undefined
  };
}
export const StatefulOrderEventV1_ConditionalOrderPlacementV1 = {
  typeUrl: "/h2x.indexer.events.ConditionalOrderPlacementV1",
  encode(message: StatefulOrderEventV1_ConditionalOrderPlacementV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatefulOrderEventV1_ConditionalOrderPlacementV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = IndexerOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatefulOrderEventV1_ConditionalOrderPlacementV1>): StatefulOrderEventV1_ConditionalOrderPlacementV1 {
    const message = createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1();
    message.order = object.order !== undefined && object.order !== null ? IndexerOrder.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: StatefulOrderEventV1_ConditionalOrderPlacementV1Amino): StatefulOrderEventV1_ConditionalOrderPlacementV1 {
    const message = createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1();
    if (object.order !== undefined && object.order !== null) {
      message.order = IndexerOrder.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: StatefulOrderEventV1_ConditionalOrderPlacementV1): StatefulOrderEventV1_ConditionalOrderPlacementV1Amino {
    const obj: any = {};
    obj.order = message.order ? IndexerOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: StatefulOrderEventV1_ConditionalOrderPlacementV1AminoMsg): StatefulOrderEventV1_ConditionalOrderPlacementV1 {
    return StatefulOrderEventV1_ConditionalOrderPlacementV1.fromAmino(object.value);
  },
  fromProtoMsg(message: StatefulOrderEventV1_ConditionalOrderPlacementV1ProtoMsg): StatefulOrderEventV1_ConditionalOrderPlacementV1 {
    return StatefulOrderEventV1_ConditionalOrderPlacementV1.decode(message.value);
  },
  toProto(message: StatefulOrderEventV1_ConditionalOrderPlacementV1): Uint8Array {
    return StatefulOrderEventV1_ConditionalOrderPlacementV1.encode(message).finish();
  },
  toProtoMsg(message: StatefulOrderEventV1_ConditionalOrderPlacementV1): StatefulOrderEventV1_ConditionalOrderPlacementV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.ConditionalOrderPlacementV1",
      value: StatefulOrderEventV1_ConditionalOrderPlacementV1.encode(message).finish()
    };
  }
};
function createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1(): StatefulOrderEventV1_ConditionalOrderTriggeredV1 {
  return {
    triggeredOrderId: undefined
  };
}
export const StatefulOrderEventV1_ConditionalOrderTriggeredV1 = {
  typeUrl: "/h2x.indexer.events.ConditionalOrderTriggeredV1",
  encode(message: StatefulOrderEventV1_ConditionalOrderTriggeredV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.triggeredOrderId !== undefined) {
      IndexerOrderId.encode(message.triggeredOrderId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatefulOrderEventV1_ConditionalOrderTriggeredV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggeredOrderId = IndexerOrderId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatefulOrderEventV1_ConditionalOrderTriggeredV1>): StatefulOrderEventV1_ConditionalOrderTriggeredV1 {
    const message = createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1();
    message.triggeredOrderId = object.triggeredOrderId !== undefined && object.triggeredOrderId !== null ? IndexerOrderId.fromPartial(object.triggeredOrderId) : undefined;
    return message;
  },
  fromAmino(object: StatefulOrderEventV1_ConditionalOrderTriggeredV1Amino): StatefulOrderEventV1_ConditionalOrderTriggeredV1 {
    const message = createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1();
    if (object.triggered_order_id !== undefined && object.triggered_order_id !== null) {
      message.triggeredOrderId = IndexerOrderId.fromAmino(object.triggered_order_id);
    }
    return message;
  },
  toAmino(message: StatefulOrderEventV1_ConditionalOrderTriggeredV1): StatefulOrderEventV1_ConditionalOrderTriggeredV1Amino {
    const obj: any = {};
    obj.triggered_order_id = message.triggeredOrderId ? IndexerOrderId.toAmino(message.triggeredOrderId) : undefined;
    return obj;
  },
  fromAminoMsg(object: StatefulOrderEventV1_ConditionalOrderTriggeredV1AminoMsg): StatefulOrderEventV1_ConditionalOrderTriggeredV1 {
    return StatefulOrderEventV1_ConditionalOrderTriggeredV1.fromAmino(object.value);
  },
  fromProtoMsg(message: StatefulOrderEventV1_ConditionalOrderTriggeredV1ProtoMsg): StatefulOrderEventV1_ConditionalOrderTriggeredV1 {
    return StatefulOrderEventV1_ConditionalOrderTriggeredV1.decode(message.value);
  },
  toProto(message: StatefulOrderEventV1_ConditionalOrderTriggeredV1): Uint8Array {
    return StatefulOrderEventV1_ConditionalOrderTriggeredV1.encode(message).finish();
  },
  toProtoMsg(message: StatefulOrderEventV1_ConditionalOrderTriggeredV1): StatefulOrderEventV1_ConditionalOrderTriggeredV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.ConditionalOrderTriggeredV1",
      value: StatefulOrderEventV1_ConditionalOrderTriggeredV1.encode(message).finish()
    };
  }
};
function createBaseStatefulOrderEventV1_LongTermOrderPlacementV1(): StatefulOrderEventV1_LongTermOrderPlacementV1 {
  return {
    order: undefined
  };
}
export const StatefulOrderEventV1_LongTermOrderPlacementV1 = {
  typeUrl: "/h2x.indexer.events.LongTermOrderPlacementV1",
  encode(message: StatefulOrderEventV1_LongTermOrderPlacementV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatefulOrderEventV1_LongTermOrderPlacementV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatefulOrderEventV1_LongTermOrderPlacementV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = IndexerOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatefulOrderEventV1_LongTermOrderPlacementV1>): StatefulOrderEventV1_LongTermOrderPlacementV1 {
    const message = createBaseStatefulOrderEventV1_LongTermOrderPlacementV1();
    message.order = object.order !== undefined && object.order !== null ? IndexerOrder.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: StatefulOrderEventV1_LongTermOrderPlacementV1Amino): StatefulOrderEventV1_LongTermOrderPlacementV1 {
    const message = createBaseStatefulOrderEventV1_LongTermOrderPlacementV1();
    if (object.order !== undefined && object.order !== null) {
      message.order = IndexerOrder.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: StatefulOrderEventV1_LongTermOrderPlacementV1): StatefulOrderEventV1_LongTermOrderPlacementV1Amino {
    const obj: any = {};
    obj.order = message.order ? IndexerOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: StatefulOrderEventV1_LongTermOrderPlacementV1AminoMsg): StatefulOrderEventV1_LongTermOrderPlacementV1 {
    return StatefulOrderEventV1_LongTermOrderPlacementV1.fromAmino(object.value);
  },
  fromProtoMsg(message: StatefulOrderEventV1_LongTermOrderPlacementV1ProtoMsg): StatefulOrderEventV1_LongTermOrderPlacementV1 {
    return StatefulOrderEventV1_LongTermOrderPlacementV1.decode(message.value);
  },
  toProto(message: StatefulOrderEventV1_LongTermOrderPlacementV1): Uint8Array {
    return StatefulOrderEventV1_LongTermOrderPlacementV1.encode(message).finish();
  },
  toProtoMsg(message: StatefulOrderEventV1_LongTermOrderPlacementV1): StatefulOrderEventV1_LongTermOrderPlacementV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.LongTermOrderPlacementV1",
      value: StatefulOrderEventV1_LongTermOrderPlacementV1.encode(message).finish()
    };
  }
};
function createBaseStatefulOrderEventV1_LongTermOrderReplacementV1(): StatefulOrderEventV1_LongTermOrderReplacementV1 {
  return {
    oldOrderId: undefined,
    order: undefined
  };
}
export const StatefulOrderEventV1_LongTermOrderReplacementV1 = {
  typeUrl: "/h2x.indexer.events.LongTermOrderReplacementV1",
  encode(message: StatefulOrderEventV1_LongTermOrderReplacementV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oldOrderId !== undefined) {
      IndexerOrderId.encode(message.oldOrderId, writer.uint32(10).fork()).ldelim();
    }
    if (message.order !== undefined) {
      IndexerOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatefulOrderEventV1_LongTermOrderReplacementV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatefulOrderEventV1_LongTermOrderReplacementV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oldOrderId = IndexerOrderId.decode(reader, reader.uint32());
          break;
        case 2:
          message.order = IndexerOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatefulOrderEventV1_LongTermOrderReplacementV1>): StatefulOrderEventV1_LongTermOrderReplacementV1 {
    const message = createBaseStatefulOrderEventV1_LongTermOrderReplacementV1();
    message.oldOrderId = object.oldOrderId !== undefined && object.oldOrderId !== null ? IndexerOrderId.fromPartial(object.oldOrderId) : undefined;
    message.order = object.order !== undefined && object.order !== null ? IndexerOrder.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: StatefulOrderEventV1_LongTermOrderReplacementV1Amino): StatefulOrderEventV1_LongTermOrderReplacementV1 {
    const message = createBaseStatefulOrderEventV1_LongTermOrderReplacementV1();
    if (object.old_order_id !== undefined && object.old_order_id !== null) {
      message.oldOrderId = IndexerOrderId.fromAmino(object.old_order_id);
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = IndexerOrder.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: StatefulOrderEventV1_LongTermOrderReplacementV1): StatefulOrderEventV1_LongTermOrderReplacementV1Amino {
    const obj: any = {};
    obj.old_order_id = message.oldOrderId ? IndexerOrderId.toAmino(message.oldOrderId) : undefined;
    obj.order = message.order ? IndexerOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: StatefulOrderEventV1_LongTermOrderReplacementV1AminoMsg): StatefulOrderEventV1_LongTermOrderReplacementV1 {
    return StatefulOrderEventV1_LongTermOrderReplacementV1.fromAmino(object.value);
  },
  fromProtoMsg(message: StatefulOrderEventV1_LongTermOrderReplacementV1ProtoMsg): StatefulOrderEventV1_LongTermOrderReplacementV1 {
    return StatefulOrderEventV1_LongTermOrderReplacementV1.decode(message.value);
  },
  toProto(message: StatefulOrderEventV1_LongTermOrderReplacementV1): Uint8Array {
    return StatefulOrderEventV1_LongTermOrderReplacementV1.encode(message).finish();
  },
  toProtoMsg(message: StatefulOrderEventV1_LongTermOrderReplacementV1): StatefulOrderEventV1_LongTermOrderReplacementV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.LongTermOrderReplacementV1",
      value: StatefulOrderEventV1_LongTermOrderReplacementV1.encode(message).finish()
    };
  }
};
function createBaseStatefulOrderEventV1_TwapOrderPlacementV1(): StatefulOrderEventV1_TwapOrderPlacementV1 {
  return {
    order: undefined
  };
}
export const StatefulOrderEventV1_TwapOrderPlacementV1 = {
  typeUrl: "/h2x.indexer.events.TwapOrderPlacementV1",
  encode(message: StatefulOrderEventV1_TwapOrderPlacementV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatefulOrderEventV1_TwapOrderPlacementV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatefulOrderEventV1_TwapOrderPlacementV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = IndexerOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatefulOrderEventV1_TwapOrderPlacementV1>): StatefulOrderEventV1_TwapOrderPlacementV1 {
    const message = createBaseStatefulOrderEventV1_TwapOrderPlacementV1();
    message.order = object.order !== undefined && object.order !== null ? IndexerOrder.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: StatefulOrderEventV1_TwapOrderPlacementV1Amino): StatefulOrderEventV1_TwapOrderPlacementV1 {
    const message = createBaseStatefulOrderEventV1_TwapOrderPlacementV1();
    if (object.order !== undefined && object.order !== null) {
      message.order = IndexerOrder.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: StatefulOrderEventV1_TwapOrderPlacementV1): StatefulOrderEventV1_TwapOrderPlacementV1Amino {
    const obj: any = {};
    obj.order = message.order ? IndexerOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: StatefulOrderEventV1_TwapOrderPlacementV1AminoMsg): StatefulOrderEventV1_TwapOrderPlacementV1 {
    return StatefulOrderEventV1_TwapOrderPlacementV1.fromAmino(object.value);
  },
  fromProtoMsg(message: StatefulOrderEventV1_TwapOrderPlacementV1ProtoMsg): StatefulOrderEventV1_TwapOrderPlacementV1 {
    return StatefulOrderEventV1_TwapOrderPlacementV1.decode(message.value);
  },
  toProto(message: StatefulOrderEventV1_TwapOrderPlacementV1): Uint8Array {
    return StatefulOrderEventV1_TwapOrderPlacementV1.encode(message).finish();
  },
  toProtoMsg(message: StatefulOrderEventV1_TwapOrderPlacementV1): StatefulOrderEventV1_TwapOrderPlacementV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.TwapOrderPlacementV1",
      value: StatefulOrderEventV1_TwapOrderPlacementV1.encode(message).finish()
    };
  }
};
function createBaseAssetCreateEventV1(): AssetCreateEventV1 {
  return {
    id: 0,
    symbol: "",
    hasMarket: false,
    marketId: 0,
    atomicResolution: 0,
    denom: "",
    denomExponent: 0,
    assetType: 0
  };
}
export const AssetCreateEventV1 = {
  typeUrl: "/h2x.indexer.events.AssetCreateEventV1",
  encode(message: AssetCreateEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.hasMarket === true) {
      writer.uint32(24).bool(message.hasMarket);
    }
    if (message.marketId !== 0) {
      writer.uint32(32).uint32(message.marketId);
    }
    if (message.atomicResolution !== 0) {
      writer.uint32(40).sint32(message.atomicResolution);
    }
    if (message.denom !== "") {
      writer.uint32(50).string(message.denom);
    }
    if (message.denomExponent !== 0) {
      writer.uint32(56).sint32(message.denomExponent);
    }
    if (message.assetType !== 0) {
      writer.uint32(64).uint32(message.assetType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetCreateEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetCreateEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.hasMarket = reader.bool();
          break;
        case 4:
          message.marketId = reader.uint32();
          break;
        case 5:
          message.atomicResolution = reader.sint32();
          break;
        case 6:
          message.denom = reader.string();
          break;
        case 7:
          message.denomExponent = reader.sint32();
          break;
        case 8:
          message.assetType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AssetCreateEventV1>): AssetCreateEventV1 {
    const message = createBaseAssetCreateEventV1();
    message.id = object.id ?? 0;
    message.symbol = object.symbol ?? "";
    message.hasMarket = object.hasMarket ?? false;
    message.marketId = object.marketId ?? 0;
    message.atomicResolution = object.atomicResolution ?? 0;
    message.denom = object.denom ?? "";
    message.denomExponent = object.denomExponent ?? 0;
    message.assetType = object.assetType ?? 0;
    return message;
  },
  fromAmino(object: AssetCreateEventV1Amino): AssetCreateEventV1 {
    const message = createBaseAssetCreateEventV1();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.has_market !== undefined && object.has_market !== null) {
      message.hasMarket = object.has_market;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
      message.atomicResolution = object.atomic_resolution;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.denom_exponent !== undefined && object.denom_exponent !== null) {
      message.denomExponent = object.denom_exponent;
    }
    if (object.asset_type !== undefined && object.asset_type !== null) {
      message.assetType = object.asset_type;
    }
    return message;
  },
  toAmino(message: AssetCreateEventV1): AssetCreateEventV1Amino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.has_market = message.hasMarket === false ? undefined : message.hasMarket;
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.denom_exponent = message.denomExponent === 0 ? undefined : message.denomExponent;
    obj.asset_type = message.assetType === 0 ? undefined : message.assetType;
    return obj;
  },
  fromAminoMsg(object: AssetCreateEventV1AminoMsg): AssetCreateEventV1 {
    return AssetCreateEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetCreateEventV1ProtoMsg): AssetCreateEventV1 {
    return AssetCreateEventV1.decode(message.value);
  },
  toProto(message: AssetCreateEventV1): Uint8Array {
    return AssetCreateEventV1.encode(message).finish();
  },
  toProtoMsg(message: AssetCreateEventV1): AssetCreateEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.AssetCreateEventV1",
      value: AssetCreateEventV1.encode(message).finish()
    };
  }
};
function createBaseSpotMarketCreateEventV1(): SpotMarketCreateEventV1 {
  return {
    id: 0,
    clobPairId: 0,
    spotClobMetadata: undefined,
    status: 0,
    quantumConversionExponent: 0,
    atomicResolution: 0,
    subticksPerTick: 0,
    stepBaseQuantums: new Uint8Array()
  };
}
export const SpotMarketCreateEventV1 = {
  typeUrl: "/h2x.indexer.events.SpotMarketCreateEventV1",
  encode(message: SpotMarketCreateEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.clobPairId !== 0) {
      writer.uint32(16).uint32(message.clobPairId);
    }
    if (message.spotClobMetadata !== undefined) {
      SpotMarketCreateEventV1_SpotClobMetadata.encode(message.spotClobMetadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.quantumConversionExponent !== 0) {
      writer.uint32(40).sint32(message.quantumConversionExponent);
    }
    if (message.atomicResolution !== 0) {
      writer.uint32(48).sint32(message.atomicResolution);
    }
    if (message.subticksPerTick !== 0) {
      writer.uint32(56).uint32(message.subticksPerTick);
    }
    if (message.stepBaseQuantums.length !== 0) {
      writer.uint32(66).bytes(message.stepBaseQuantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotMarketCreateEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotMarketCreateEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.clobPairId = reader.uint32();
          break;
        case 3:
          message.spotClobMetadata = SpotMarketCreateEventV1_SpotClobMetadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.quantumConversionExponent = reader.sint32();
          break;
        case 6:
          message.atomicResolution = reader.sint32();
          break;
        case 7:
          message.subticksPerTick = reader.uint32();
          break;
        case 8:
          message.stepBaseQuantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SpotMarketCreateEventV1>): SpotMarketCreateEventV1 {
    const message = createBaseSpotMarketCreateEventV1();
    message.id = object.id ?? 0;
    message.clobPairId = object.clobPairId ?? 0;
    message.spotClobMetadata = object.spotClobMetadata !== undefined && object.spotClobMetadata !== null ? SpotMarketCreateEventV1_SpotClobMetadata.fromPartial(object.spotClobMetadata) : undefined;
    message.status = object.status ?? 0;
    message.quantumConversionExponent = object.quantumConversionExponent ?? 0;
    message.atomicResolution = object.atomicResolution ?? 0;
    message.subticksPerTick = object.subticksPerTick ?? 0;
    message.stepBaseQuantums = object.stepBaseQuantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SpotMarketCreateEventV1Amino): SpotMarketCreateEventV1 {
    const message = createBaseSpotMarketCreateEventV1();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
      message.clobPairId = object.clob_pair_id;
    }
    if (object.spot_clob_metadata !== undefined && object.spot_clob_metadata !== null) {
      message.spotClobMetadata = SpotMarketCreateEventV1_SpotClobMetadata.fromAmino(object.spot_clob_metadata);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.quantum_conversion_exponent !== undefined && object.quantum_conversion_exponent !== null) {
      message.quantumConversionExponent = object.quantum_conversion_exponent;
    }
    if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
      message.atomicResolution = object.atomic_resolution;
    }
    if (object.subticks_per_tick !== undefined && object.subticks_per_tick !== null) {
      message.subticksPerTick = object.subticks_per_tick;
    }
    if (object.step_base_quantums !== undefined && object.step_base_quantums !== null) {
      message.stepBaseQuantums = bytesFromBase64(object.step_base_quantums);
    }
    return message;
  },
  toAmino(message: SpotMarketCreateEventV1): SpotMarketCreateEventV1Amino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
    obj.spot_clob_metadata = message.spotClobMetadata ? SpotMarketCreateEventV1_SpotClobMetadata.toAmino(message.spotClobMetadata) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.quantum_conversion_exponent = message.quantumConversionExponent === 0 ? undefined : message.quantumConversionExponent;
    obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
    obj.subticks_per_tick = message.subticksPerTick === 0 ? undefined : message.subticksPerTick;
    obj.step_base_quantums = message.stepBaseQuantums ? base64FromBytes(message.stepBaseQuantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: SpotMarketCreateEventV1AminoMsg): SpotMarketCreateEventV1 {
    return SpotMarketCreateEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotMarketCreateEventV1ProtoMsg): SpotMarketCreateEventV1 {
    return SpotMarketCreateEventV1.decode(message.value);
  },
  toProto(message: SpotMarketCreateEventV1): Uint8Array {
    return SpotMarketCreateEventV1.encode(message).finish();
  },
  toProtoMsg(message: SpotMarketCreateEventV1): SpotMarketCreateEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.SpotMarketCreateEventV1",
      value: SpotMarketCreateEventV1.encode(message).finish()
    };
  }
};
function createBaseSpotMarketCreateEventV1_SpotClobMetadata(): SpotMarketCreateEventV1_SpotClobMetadata {
  return {
    baseAssetId: 0,
    quoteAssetId: 0
  };
}
export const SpotMarketCreateEventV1_SpotClobMetadata = {
  typeUrl: "/h2x.indexer.events.SpotClobMetadata",
  encode(message: SpotMarketCreateEventV1_SpotClobMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAssetId !== 0) {
      writer.uint32(8).uint32(message.baseAssetId);
    }
    if (message.quoteAssetId !== 0) {
      writer.uint32(16).uint32(message.quoteAssetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotMarketCreateEventV1_SpotClobMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotMarketCreateEventV1_SpotClobMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAssetId = reader.uint32();
          break;
        case 2:
          message.quoteAssetId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SpotMarketCreateEventV1_SpotClobMetadata>): SpotMarketCreateEventV1_SpotClobMetadata {
    const message = createBaseSpotMarketCreateEventV1_SpotClobMetadata();
    message.baseAssetId = object.baseAssetId ?? 0;
    message.quoteAssetId = object.quoteAssetId ?? 0;
    return message;
  },
  fromAmino(object: SpotMarketCreateEventV1_SpotClobMetadataAmino): SpotMarketCreateEventV1_SpotClobMetadata {
    const message = createBaseSpotMarketCreateEventV1_SpotClobMetadata();
    if (object.base_asset_id !== undefined && object.base_asset_id !== null) {
      message.baseAssetId = object.base_asset_id;
    }
    if (object.quote_asset_id !== undefined && object.quote_asset_id !== null) {
      message.quoteAssetId = object.quote_asset_id;
    }
    return message;
  },
  toAmino(message: SpotMarketCreateEventV1_SpotClobMetadata): SpotMarketCreateEventV1_SpotClobMetadataAmino {
    const obj: any = {};
    obj.base_asset_id = message.baseAssetId === 0 ? undefined : message.baseAssetId;
    obj.quote_asset_id = message.quoteAssetId === 0 ? undefined : message.quoteAssetId;
    return obj;
  },
  fromAminoMsg(object: SpotMarketCreateEventV1_SpotClobMetadataAminoMsg): SpotMarketCreateEventV1_SpotClobMetadata {
    return SpotMarketCreateEventV1_SpotClobMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotMarketCreateEventV1_SpotClobMetadataProtoMsg): SpotMarketCreateEventV1_SpotClobMetadata {
    return SpotMarketCreateEventV1_SpotClobMetadata.decode(message.value);
  },
  toProto(message: SpotMarketCreateEventV1_SpotClobMetadata): Uint8Array {
    return SpotMarketCreateEventV1_SpotClobMetadata.encode(message).finish();
  },
  toProtoMsg(message: SpotMarketCreateEventV1_SpotClobMetadata): SpotMarketCreateEventV1_SpotClobMetadataProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.SpotClobMetadata",
      value: SpotMarketCreateEventV1_SpotClobMetadata.encode(message).finish()
    };
  }
};
function createBasePerpetualMarketCreateEventV1(): PerpetualMarketCreateEventV1 {
  return {
    id: 0,
    clobPairId: 0,
    ticker: "",
    marketId: 0,
    status: 0,
    quantumConversionExponent: 0,
    atomicResolution: 0,
    subticksPerTick: 0,
    stepBaseQuantums: new Uint8Array(),
    liquidityTier: 0
  };
}
export const PerpetualMarketCreateEventV1 = {
  typeUrl: "/h2x.indexer.events.PerpetualMarketCreateEventV1",
  encode(message: PerpetualMarketCreateEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.clobPairId !== 0) {
      writer.uint32(16).uint32(message.clobPairId);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.marketId !== 0) {
      writer.uint32(32).uint32(message.marketId);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.quantumConversionExponent !== 0) {
      writer.uint32(48).sint32(message.quantumConversionExponent);
    }
    if (message.atomicResolution !== 0) {
      writer.uint32(56).sint32(message.atomicResolution);
    }
    if (message.subticksPerTick !== 0) {
      writer.uint32(64).uint32(message.subticksPerTick);
    }
    if (message.stepBaseQuantums.length !== 0) {
      writer.uint32(74).bytes(message.stepBaseQuantums);
    }
    if (message.liquidityTier !== 0) {
      writer.uint32(80).uint32(message.liquidityTier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketCreateEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketCreateEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.clobPairId = reader.uint32();
          break;
        case 3:
          message.ticker = reader.string();
          break;
        case 4:
          message.marketId = reader.uint32();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.quantumConversionExponent = reader.sint32();
          break;
        case 7:
          message.atomicResolution = reader.sint32();
          break;
        case 8:
          message.subticksPerTick = reader.uint32();
          break;
        case 9:
          message.stepBaseQuantums = reader.bytes();
          break;
        case 10:
          message.liquidityTier = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PerpetualMarketCreateEventV1>): PerpetualMarketCreateEventV1 {
    const message = createBasePerpetualMarketCreateEventV1();
    message.id = object.id ?? 0;
    message.clobPairId = object.clobPairId ?? 0;
    message.ticker = object.ticker ?? "";
    message.marketId = object.marketId ?? 0;
    message.status = object.status ?? 0;
    message.quantumConversionExponent = object.quantumConversionExponent ?? 0;
    message.atomicResolution = object.atomicResolution ?? 0;
    message.subticksPerTick = object.subticksPerTick ?? 0;
    message.stepBaseQuantums = object.stepBaseQuantums ?? new Uint8Array();
    message.liquidityTier = object.liquidityTier ?? 0;
    return message;
  },
  fromAmino(object: PerpetualMarketCreateEventV1Amino): PerpetualMarketCreateEventV1 {
    const message = createBasePerpetualMarketCreateEventV1();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
      message.clobPairId = object.clob_pair_id;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.quantum_conversion_exponent !== undefined && object.quantum_conversion_exponent !== null) {
      message.quantumConversionExponent = object.quantum_conversion_exponent;
    }
    if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
      message.atomicResolution = object.atomic_resolution;
    }
    if (object.subticks_per_tick !== undefined && object.subticks_per_tick !== null) {
      message.subticksPerTick = object.subticks_per_tick;
    }
    if (object.step_base_quantums !== undefined && object.step_base_quantums !== null) {
      message.stepBaseQuantums = bytesFromBase64(object.step_base_quantums);
    }
    if (object.liquidity_tier !== undefined && object.liquidity_tier !== null) {
      message.liquidityTier = object.liquidity_tier;
    }
    return message;
  },
  toAmino(message: PerpetualMarketCreateEventV1): PerpetualMarketCreateEventV1Amino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.quantum_conversion_exponent = message.quantumConversionExponent === 0 ? undefined : message.quantumConversionExponent;
    obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
    obj.subticks_per_tick = message.subticksPerTick === 0 ? undefined : message.subticksPerTick;
    obj.step_base_quantums = message.stepBaseQuantums ? base64FromBytes(message.stepBaseQuantums) : undefined;
    obj.liquidity_tier = message.liquidityTier === 0 ? undefined : message.liquidityTier;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketCreateEventV1AminoMsg): PerpetualMarketCreateEventV1 {
    return PerpetualMarketCreateEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketCreateEventV1ProtoMsg): PerpetualMarketCreateEventV1 {
    return PerpetualMarketCreateEventV1.decode(message.value);
  },
  toProto(message: PerpetualMarketCreateEventV1): Uint8Array {
    return PerpetualMarketCreateEventV1.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketCreateEventV1): PerpetualMarketCreateEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.PerpetualMarketCreateEventV1",
      value: PerpetualMarketCreateEventV1.encode(message).finish()
    };
  }
};
function createBasePerpetualMarketCreateEventV2(): PerpetualMarketCreateEventV2 {
  return {
    id: 0,
    clobPairId: 0,
    ticker: "",
    marketId: 0,
    status: 0,
    quantumConversionExponent: 0,
    atomicResolution: 0,
    subticksPerTick: 0,
    stepBaseQuantums: new Uint8Array(),
    liquidityTier: 0,
    marketType: 0
  };
}
export const PerpetualMarketCreateEventV2 = {
  typeUrl: "/h2x.indexer.events.PerpetualMarketCreateEventV2",
  encode(message: PerpetualMarketCreateEventV2, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.clobPairId !== 0) {
      writer.uint32(16).uint32(message.clobPairId);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.marketId !== 0) {
      writer.uint32(32).uint32(message.marketId);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.quantumConversionExponent !== 0) {
      writer.uint32(48).sint32(message.quantumConversionExponent);
    }
    if (message.atomicResolution !== 0) {
      writer.uint32(56).sint32(message.atomicResolution);
    }
    if (message.subticksPerTick !== 0) {
      writer.uint32(64).uint32(message.subticksPerTick);
    }
    if (message.stepBaseQuantums.length !== 0) {
      writer.uint32(74).bytes(message.stepBaseQuantums);
    }
    if (message.liquidityTier !== 0) {
      writer.uint32(80).uint32(message.liquidityTier);
    }
    if (message.marketType !== 0) {
      writer.uint32(88).int32(message.marketType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketCreateEventV2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketCreateEventV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.clobPairId = reader.uint32();
          break;
        case 3:
          message.ticker = reader.string();
          break;
        case 4:
          message.marketId = reader.uint32();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.quantumConversionExponent = reader.sint32();
          break;
        case 7:
          message.atomicResolution = reader.sint32();
          break;
        case 8:
          message.subticksPerTick = reader.uint32();
          break;
        case 9:
          message.stepBaseQuantums = reader.bytes();
          break;
        case 10:
          message.liquidityTier = reader.uint32();
          break;
        case 11:
          message.marketType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PerpetualMarketCreateEventV2>): PerpetualMarketCreateEventV2 {
    const message = createBasePerpetualMarketCreateEventV2();
    message.id = object.id ?? 0;
    message.clobPairId = object.clobPairId ?? 0;
    message.ticker = object.ticker ?? "";
    message.marketId = object.marketId ?? 0;
    message.status = object.status ?? 0;
    message.quantumConversionExponent = object.quantumConversionExponent ?? 0;
    message.atomicResolution = object.atomicResolution ?? 0;
    message.subticksPerTick = object.subticksPerTick ?? 0;
    message.stepBaseQuantums = object.stepBaseQuantums ?? new Uint8Array();
    message.liquidityTier = object.liquidityTier ?? 0;
    message.marketType = object.marketType ?? 0;
    return message;
  },
  fromAmino(object: PerpetualMarketCreateEventV2Amino): PerpetualMarketCreateEventV2 {
    const message = createBasePerpetualMarketCreateEventV2();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
      message.clobPairId = object.clob_pair_id;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.quantum_conversion_exponent !== undefined && object.quantum_conversion_exponent !== null) {
      message.quantumConversionExponent = object.quantum_conversion_exponent;
    }
    if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
      message.atomicResolution = object.atomic_resolution;
    }
    if (object.subticks_per_tick !== undefined && object.subticks_per_tick !== null) {
      message.subticksPerTick = object.subticks_per_tick;
    }
    if (object.step_base_quantums !== undefined && object.step_base_quantums !== null) {
      message.stepBaseQuantums = bytesFromBase64(object.step_base_quantums);
    }
    if (object.liquidity_tier !== undefined && object.liquidity_tier !== null) {
      message.liquidityTier = object.liquidity_tier;
    }
    if (object.market_type !== undefined && object.market_type !== null) {
      message.marketType = object.market_type;
    }
    return message;
  },
  toAmino(message: PerpetualMarketCreateEventV2): PerpetualMarketCreateEventV2Amino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.quantum_conversion_exponent = message.quantumConversionExponent === 0 ? undefined : message.quantumConversionExponent;
    obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
    obj.subticks_per_tick = message.subticksPerTick === 0 ? undefined : message.subticksPerTick;
    obj.step_base_quantums = message.stepBaseQuantums ? base64FromBytes(message.stepBaseQuantums) : undefined;
    obj.liquidity_tier = message.liquidityTier === 0 ? undefined : message.liquidityTier;
    obj.market_type = message.marketType === 0 ? undefined : message.marketType;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketCreateEventV2AminoMsg): PerpetualMarketCreateEventV2 {
    return PerpetualMarketCreateEventV2.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketCreateEventV2ProtoMsg): PerpetualMarketCreateEventV2 {
    return PerpetualMarketCreateEventV2.decode(message.value);
  },
  toProto(message: PerpetualMarketCreateEventV2): Uint8Array {
    return PerpetualMarketCreateEventV2.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketCreateEventV2): PerpetualMarketCreateEventV2ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.PerpetualMarketCreateEventV2",
      value: PerpetualMarketCreateEventV2.encode(message).finish()
    };
  }
};
function createBasePerpetualMarketCreateEventV3(): PerpetualMarketCreateEventV3 {
  return {
    id: 0,
    clobPairId: 0,
    ticker: "",
    marketId: 0,
    status: 0,
    quantumConversionExponent: 0,
    atomicResolution: 0,
    subticksPerTick: 0,
    stepBaseQuantums: new Uint8Array(),
    liquidityTier: 0,
    marketType: 0,
    defaultFunding8hrPpm: 0
  };
}
export const PerpetualMarketCreateEventV3 = {
  typeUrl: "/h2x.indexer.events.PerpetualMarketCreateEventV3",
  encode(message: PerpetualMarketCreateEventV3, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.clobPairId !== 0) {
      writer.uint32(16).uint32(message.clobPairId);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.marketId !== 0) {
      writer.uint32(32).uint32(message.marketId);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.quantumConversionExponent !== 0) {
      writer.uint32(48).sint32(message.quantumConversionExponent);
    }
    if (message.atomicResolution !== 0) {
      writer.uint32(56).sint32(message.atomicResolution);
    }
    if (message.subticksPerTick !== 0) {
      writer.uint32(64).uint32(message.subticksPerTick);
    }
    if (message.stepBaseQuantums.length !== 0) {
      writer.uint32(74).bytes(message.stepBaseQuantums);
    }
    if (message.liquidityTier !== 0) {
      writer.uint32(80).uint32(message.liquidityTier);
    }
    if (message.marketType !== 0) {
      writer.uint32(88).int32(message.marketType);
    }
    if (message.defaultFunding8hrPpm !== 0) {
      writer.uint32(96).int32(message.defaultFunding8hrPpm);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketCreateEventV3 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketCreateEventV3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.clobPairId = reader.uint32();
          break;
        case 3:
          message.ticker = reader.string();
          break;
        case 4:
          message.marketId = reader.uint32();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.quantumConversionExponent = reader.sint32();
          break;
        case 7:
          message.atomicResolution = reader.sint32();
          break;
        case 8:
          message.subticksPerTick = reader.uint32();
          break;
        case 9:
          message.stepBaseQuantums = reader.bytes();
          break;
        case 10:
          message.liquidityTier = reader.uint32();
          break;
        case 11:
          message.marketType = reader.int32() as any;
          break;
        case 12:
          message.defaultFunding8hrPpm = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PerpetualMarketCreateEventV3>): PerpetualMarketCreateEventV3 {
    const message = createBasePerpetualMarketCreateEventV3();
    message.id = object.id ?? 0;
    message.clobPairId = object.clobPairId ?? 0;
    message.ticker = object.ticker ?? "";
    message.marketId = object.marketId ?? 0;
    message.status = object.status ?? 0;
    message.quantumConversionExponent = object.quantumConversionExponent ?? 0;
    message.atomicResolution = object.atomicResolution ?? 0;
    message.subticksPerTick = object.subticksPerTick ?? 0;
    message.stepBaseQuantums = object.stepBaseQuantums ?? new Uint8Array();
    message.liquidityTier = object.liquidityTier ?? 0;
    message.marketType = object.marketType ?? 0;
    message.defaultFunding8hrPpm = object.defaultFunding8hrPpm ?? 0;
    return message;
  },
  fromAmino(object: PerpetualMarketCreateEventV3Amino): PerpetualMarketCreateEventV3 {
    const message = createBasePerpetualMarketCreateEventV3();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
      message.clobPairId = object.clob_pair_id;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.quantum_conversion_exponent !== undefined && object.quantum_conversion_exponent !== null) {
      message.quantumConversionExponent = object.quantum_conversion_exponent;
    }
    if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
      message.atomicResolution = object.atomic_resolution;
    }
    if (object.subticks_per_tick !== undefined && object.subticks_per_tick !== null) {
      message.subticksPerTick = object.subticks_per_tick;
    }
    if (object.step_base_quantums !== undefined && object.step_base_quantums !== null) {
      message.stepBaseQuantums = bytesFromBase64(object.step_base_quantums);
    }
    if (object.liquidity_tier !== undefined && object.liquidity_tier !== null) {
      message.liquidityTier = object.liquidity_tier;
    }
    if (object.market_type !== undefined && object.market_type !== null) {
      message.marketType = object.market_type;
    }
    if (object.default_funding8hr_ppm !== undefined && object.default_funding8hr_ppm !== null) {
      message.defaultFunding8hrPpm = object.default_funding8hr_ppm;
    }
    return message;
  },
  toAmino(message: PerpetualMarketCreateEventV3): PerpetualMarketCreateEventV3Amino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.quantum_conversion_exponent = message.quantumConversionExponent === 0 ? undefined : message.quantumConversionExponent;
    obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
    obj.subticks_per_tick = message.subticksPerTick === 0 ? undefined : message.subticksPerTick;
    obj.step_base_quantums = message.stepBaseQuantums ? base64FromBytes(message.stepBaseQuantums) : undefined;
    obj.liquidity_tier = message.liquidityTier === 0 ? undefined : message.liquidityTier;
    obj.market_type = message.marketType === 0 ? undefined : message.marketType;
    obj.default_funding8hr_ppm = message.defaultFunding8hrPpm === 0 ? undefined : message.defaultFunding8hrPpm;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketCreateEventV3AminoMsg): PerpetualMarketCreateEventV3 {
    return PerpetualMarketCreateEventV3.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketCreateEventV3ProtoMsg): PerpetualMarketCreateEventV3 {
    return PerpetualMarketCreateEventV3.decode(message.value);
  },
  toProto(message: PerpetualMarketCreateEventV3): Uint8Array {
    return PerpetualMarketCreateEventV3.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketCreateEventV3): PerpetualMarketCreateEventV3ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.PerpetualMarketCreateEventV3",
      value: PerpetualMarketCreateEventV3.encode(message).finish()
    };
  }
};
function createBaseLiquidityTierUpsertEventV1(): LiquidityTierUpsertEventV1 {
  return {
    id: 0,
    name: "",
    initialMarginPpm: 0,
    maintenanceFractionPpm: 0,
    basePositionNotional: BigInt(0)
  };
}
export const LiquidityTierUpsertEventV1 = {
  typeUrl: "/h2x.indexer.events.LiquidityTierUpsertEventV1",
  encode(message: LiquidityTierUpsertEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.initialMarginPpm !== 0) {
      writer.uint32(24).uint32(message.initialMarginPpm);
    }
    if (message.maintenanceFractionPpm !== 0) {
      writer.uint32(32).uint32(message.maintenanceFractionPpm);
    }
    if (message.basePositionNotional !== BigInt(0)) {
      writer.uint32(40).uint64(message.basePositionNotional);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityTierUpsertEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityTierUpsertEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.initialMarginPpm = reader.uint32();
          break;
        case 4:
          message.maintenanceFractionPpm = reader.uint32();
          break;
        case 5:
          message.basePositionNotional = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LiquidityTierUpsertEventV1>): LiquidityTierUpsertEventV1 {
    const message = createBaseLiquidityTierUpsertEventV1();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.initialMarginPpm = object.initialMarginPpm ?? 0;
    message.maintenanceFractionPpm = object.maintenanceFractionPpm ?? 0;
    message.basePositionNotional = object.basePositionNotional !== undefined && object.basePositionNotional !== null ? BigInt(object.basePositionNotional.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LiquidityTierUpsertEventV1Amino): LiquidityTierUpsertEventV1 {
    const message = createBaseLiquidityTierUpsertEventV1();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.initial_margin_ppm !== undefined && object.initial_margin_ppm !== null) {
      message.initialMarginPpm = object.initial_margin_ppm;
    }
    if (object.maintenance_fraction_ppm !== undefined && object.maintenance_fraction_ppm !== null) {
      message.maintenanceFractionPpm = object.maintenance_fraction_ppm;
    }
    if (object.base_position_notional !== undefined && object.base_position_notional !== null) {
      message.basePositionNotional = BigInt(object.base_position_notional);
    }
    return message;
  },
  toAmino(message: LiquidityTierUpsertEventV1): LiquidityTierUpsertEventV1Amino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.initial_margin_ppm = message.initialMarginPpm === 0 ? undefined : message.initialMarginPpm;
    obj.maintenance_fraction_ppm = message.maintenanceFractionPpm === 0 ? undefined : message.maintenanceFractionPpm;
    obj.base_position_notional = message.basePositionNotional !== BigInt(0) ? message.basePositionNotional?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityTierUpsertEventV1AminoMsg): LiquidityTierUpsertEventV1 {
    return LiquidityTierUpsertEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityTierUpsertEventV1ProtoMsg): LiquidityTierUpsertEventV1 {
    return LiquidityTierUpsertEventV1.decode(message.value);
  },
  toProto(message: LiquidityTierUpsertEventV1): Uint8Array {
    return LiquidityTierUpsertEventV1.encode(message).finish();
  },
  toProtoMsg(message: LiquidityTierUpsertEventV1): LiquidityTierUpsertEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.LiquidityTierUpsertEventV1",
      value: LiquidityTierUpsertEventV1.encode(message).finish()
    };
  }
};
function createBaseUpdateClobPairEventV1(): UpdateClobPairEventV1 {
  return {
    clobPairId: 0,
    status: 0,
    quantumConversionExponent: 0,
    subticksPerTick: 0,
    stepBaseQuantums: new Uint8Array()
  };
}
export const UpdateClobPairEventV1 = {
  typeUrl: "/h2x.indexer.events.UpdateClobPairEventV1",
  encode(message: UpdateClobPairEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clobPairId !== 0) {
      writer.uint32(8).uint32(message.clobPairId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.quantumConversionExponent !== 0) {
      writer.uint32(24).sint32(message.quantumConversionExponent);
    }
    if (message.subticksPerTick !== 0) {
      writer.uint32(32).uint32(message.subticksPerTick);
    }
    if (message.stepBaseQuantums.length !== 0) {
      writer.uint32(42).bytes(message.stepBaseQuantums);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateClobPairEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClobPairEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clobPairId = reader.uint32();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.quantumConversionExponent = reader.sint32();
          break;
        case 4:
          message.subticksPerTick = reader.uint32();
          break;
        case 5:
          message.stepBaseQuantums = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdateClobPairEventV1>): UpdateClobPairEventV1 {
    const message = createBaseUpdateClobPairEventV1();
    message.clobPairId = object.clobPairId ?? 0;
    message.status = object.status ?? 0;
    message.quantumConversionExponent = object.quantumConversionExponent ?? 0;
    message.subticksPerTick = object.subticksPerTick ?? 0;
    message.stepBaseQuantums = object.stepBaseQuantums ?? new Uint8Array();
    return message;
  },
  fromAmino(object: UpdateClobPairEventV1Amino): UpdateClobPairEventV1 {
    const message = createBaseUpdateClobPairEventV1();
    if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
      message.clobPairId = object.clob_pair_id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.quantum_conversion_exponent !== undefined && object.quantum_conversion_exponent !== null) {
      message.quantumConversionExponent = object.quantum_conversion_exponent;
    }
    if (object.subticks_per_tick !== undefined && object.subticks_per_tick !== null) {
      message.subticksPerTick = object.subticks_per_tick;
    }
    if (object.step_base_quantums !== undefined && object.step_base_quantums !== null) {
      message.stepBaseQuantums = bytesFromBase64(object.step_base_quantums);
    }
    return message;
  },
  toAmino(message: UpdateClobPairEventV1): UpdateClobPairEventV1Amino {
    const obj: any = {};
    obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.quantum_conversion_exponent = message.quantumConversionExponent === 0 ? undefined : message.quantumConversionExponent;
    obj.subticks_per_tick = message.subticksPerTick === 0 ? undefined : message.subticksPerTick;
    obj.step_base_quantums = message.stepBaseQuantums ? base64FromBytes(message.stepBaseQuantums) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateClobPairEventV1AminoMsg): UpdateClobPairEventV1 {
    return UpdateClobPairEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateClobPairEventV1ProtoMsg): UpdateClobPairEventV1 {
    return UpdateClobPairEventV1.decode(message.value);
  },
  toProto(message: UpdateClobPairEventV1): Uint8Array {
    return UpdateClobPairEventV1.encode(message).finish();
  },
  toProtoMsg(message: UpdateClobPairEventV1): UpdateClobPairEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.UpdateClobPairEventV1",
      value: UpdateClobPairEventV1.encode(message).finish()
    };
  }
};
function createBaseUpdatePerpetualEventV1(): UpdatePerpetualEventV1 {
  return {
    id: 0,
    ticker: "",
    marketId: 0,
    atomicResolution: 0,
    liquidityTier: 0
  };
}
export const UpdatePerpetualEventV1 = {
  typeUrl: "/h2x.indexer.events.UpdatePerpetualEventV1",
  encode(message: UpdatePerpetualEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.marketId !== 0) {
      writer.uint32(24).uint32(message.marketId);
    }
    if (message.atomicResolution !== 0) {
      writer.uint32(32).sint32(message.atomicResolution);
    }
    if (message.liquidityTier !== 0) {
      writer.uint32(40).uint32(message.liquidityTier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdatePerpetualEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePerpetualEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.marketId = reader.uint32();
          break;
        case 4:
          message.atomicResolution = reader.sint32();
          break;
        case 5:
          message.liquidityTier = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdatePerpetualEventV1>): UpdatePerpetualEventV1 {
    const message = createBaseUpdatePerpetualEventV1();
    message.id = object.id ?? 0;
    message.ticker = object.ticker ?? "";
    message.marketId = object.marketId ?? 0;
    message.atomicResolution = object.atomicResolution ?? 0;
    message.liquidityTier = object.liquidityTier ?? 0;
    return message;
  },
  fromAmino(object: UpdatePerpetualEventV1Amino): UpdatePerpetualEventV1 {
    const message = createBaseUpdatePerpetualEventV1();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
      message.atomicResolution = object.atomic_resolution;
    }
    if (object.liquidity_tier !== undefined && object.liquidity_tier !== null) {
      message.liquidityTier = object.liquidity_tier;
    }
    return message;
  },
  toAmino(message: UpdatePerpetualEventV1): UpdatePerpetualEventV1Amino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
    obj.liquidity_tier = message.liquidityTier === 0 ? undefined : message.liquidityTier;
    return obj;
  },
  fromAminoMsg(object: UpdatePerpetualEventV1AminoMsg): UpdatePerpetualEventV1 {
    return UpdatePerpetualEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdatePerpetualEventV1ProtoMsg): UpdatePerpetualEventV1 {
    return UpdatePerpetualEventV1.decode(message.value);
  },
  toProto(message: UpdatePerpetualEventV1): Uint8Array {
    return UpdatePerpetualEventV1.encode(message).finish();
  },
  toProtoMsg(message: UpdatePerpetualEventV1): UpdatePerpetualEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.UpdatePerpetualEventV1",
      value: UpdatePerpetualEventV1.encode(message).finish()
    };
  }
};
function createBaseUpdatePerpetualEventV2(): UpdatePerpetualEventV2 {
  return {
    id: 0,
    ticker: "",
    marketId: 0,
    atomicResolution: 0,
    liquidityTier: 0,
    marketType: 0
  };
}
export const UpdatePerpetualEventV2 = {
  typeUrl: "/h2x.indexer.events.UpdatePerpetualEventV2",
  encode(message: UpdatePerpetualEventV2, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.marketId !== 0) {
      writer.uint32(24).uint32(message.marketId);
    }
    if (message.atomicResolution !== 0) {
      writer.uint32(32).sint32(message.atomicResolution);
    }
    if (message.liquidityTier !== 0) {
      writer.uint32(40).uint32(message.liquidityTier);
    }
    if (message.marketType !== 0) {
      writer.uint32(48).int32(message.marketType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdatePerpetualEventV2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePerpetualEventV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.marketId = reader.uint32();
          break;
        case 4:
          message.atomicResolution = reader.sint32();
          break;
        case 5:
          message.liquidityTier = reader.uint32();
          break;
        case 6:
          message.marketType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdatePerpetualEventV2>): UpdatePerpetualEventV2 {
    const message = createBaseUpdatePerpetualEventV2();
    message.id = object.id ?? 0;
    message.ticker = object.ticker ?? "";
    message.marketId = object.marketId ?? 0;
    message.atomicResolution = object.atomicResolution ?? 0;
    message.liquidityTier = object.liquidityTier ?? 0;
    message.marketType = object.marketType ?? 0;
    return message;
  },
  fromAmino(object: UpdatePerpetualEventV2Amino): UpdatePerpetualEventV2 {
    const message = createBaseUpdatePerpetualEventV2();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
      message.atomicResolution = object.atomic_resolution;
    }
    if (object.liquidity_tier !== undefined && object.liquidity_tier !== null) {
      message.liquidityTier = object.liquidity_tier;
    }
    if (object.market_type !== undefined && object.market_type !== null) {
      message.marketType = object.market_type;
    }
    return message;
  },
  toAmino(message: UpdatePerpetualEventV2): UpdatePerpetualEventV2Amino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
    obj.liquidity_tier = message.liquidityTier === 0 ? undefined : message.liquidityTier;
    obj.market_type = message.marketType === 0 ? undefined : message.marketType;
    return obj;
  },
  fromAminoMsg(object: UpdatePerpetualEventV2AminoMsg): UpdatePerpetualEventV2 {
    return UpdatePerpetualEventV2.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdatePerpetualEventV2ProtoMsg): UpdatePerpetualEventV2 {
    return UpdatePerpetualEventV2.decode(message.value);
  },
  toProto(message: UpdatePerpetualEventV2): Uint8Array {
    return UpdatePerpetualEventV2.encode(message).finish();
  },
  toProtoMsg(message: UpdatePerpetualEventV2): UpdatePerpetualEventV2ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.UpdatePerpetualEventV2",
      value: UpdatePerpetualEventV2.encode(message).finish()
    };
  }
};
function createBaseUpdatePerpetualEventV3(): UpdatePerpetualEventV3 {
  return {
    id: 0,
    ticker: "",
    marketId: 0,
    atomicResolution: 0,
    liquidityTier: 0,
    marketType: 0,
    defaultFunding8hrPpm: 0
  };
}
export const UpdatePerpetualEventV3 = {
  typeUrl: "/h2x.indexer.events.UpdatePerpetualEventV3",
  encode(message: UpdatePerpetualEventV3, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.marketId !== 0) {
      writer.uint32(24).uint32(message.marketId);
    }
    if (message.atomicResolution !== 0) {
      writer.uint32(32).sint32(message.atomicResolution);
    }
    if (message.liquidityTier !== 0) {
      writer.uint32(40).uint32(message.liquidityTier);
    }
    if (message.marketType !== 0) {
      writer.uint32(48).int32(message.marketType);
    }
    if (message.defaultFunding8hrPpm !== 0) {
      writer.uint32(56).int32(message.defaultFunding8hrPpm);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdatePerpetualEventV3 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePerpetualEventV3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.marketId = reader.uint32();
          break;
        case 4:
          message.atomicResolution = reader.sint32();
          break;
        case 5:
          message.liquidityTier = reader.uint32();
          break;
        case 6:
          message.marketType = reader.int32() as any;
          break;
        case 7:
          message.defaultFunding8hrPpm = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdatePerpetualEventV3>): UpdatePerpetualEventV3 {
    const message = createBaseUpdatePerpetualEventV3();
    message.id = object.id ?? 0;
    message.ticker = object.ticker ?? "";
    message.marketId = object.marketId ?? 0;
    message.atomicResolution = object.atomicResolution ?? 0;
    message.liquidityTier = object.liquidityTier ?? 0;
    message.marketType = object.marketType ?? 0;
    message.defaultFunding8hrPpm = object.defaultFunding8hrPpm ?? 0;
    return message;
  },
  fromAmino(object: UpdatePerpetualEventV3Amino): UpdatePerpetualEventV3 {
    const message = createBaseUpdatePerpetualEventV3();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.atomic_resolution !== undefined && object.atomic_resolution !== null) {
      message.atomicResolution = object.atomic_resolution;
    }
    if (object.liquidity_tier !== undefined && object.liquidity_tier !== null) {
      message.liquidityTier = object.liquidity_tier;
    }
    if (object.market_type !== undefined && object.market_type !== null) {
      message.marketType = object.market_type;
    }
    if (object.default_funding8hr_ppm !== undefined && object.default_funding8hr_ppm !== null) {
      message.defaultFunding8hrPpm = object.default_funding8hr_ppm;
    }
    return message;
  },
  toAmino(message: UpdatePerpetualEventV3): UpdatePerpetualEventV3Amino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.market_id = message.marketId === 0 ? undefined : message.marketId;
    obj.atomic_resolution = message.atomicResolution === 0 ? undefined : message.atomicResolution;
    obj.liquidity_tier = message.liquidityTier === 0 ? undefined : message.liquidityTier;
    obj.market_type = message.marketType === 0 ? undefined : message.marketType;
    obj.default_funding8hr_ppm = message.defaultFunding8hrPpm === 0 ? undefined : message.defaultFunding8hrPpm;
    return obj;
  },
  fromAminoMsg(object: UpdatePerpetualEventV3AminoMsg): UpdatePerpetualEventV3 {
    return UpdatePerpetualEventV3.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdatePerpetualEventV3ProtoMsg): UpdatePerpetualEventV3 {
    return UpdatePerpetualEventV3.decode(message.value);
  },
  toProto(message: UpdatePerpetualEventV3): Uint8Array {
    return UpdatePerpetualEventV3.encode(message).finish();
  },
  toProtoMsg(message: UpdatePerpetualEventV3): UpdatePerpetualEventV3ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.UpdatePerpetualEventV3",
      value: UpdatePerpetualEventV3.encode(message).finish()
    };
  }
};
function createBaseTradingRewardsEventV1(): TradingRewardsEventV1 {
  return {
    tradingRewards: []
  };
}
export const TradingRewardsEventV1 = {
  typeUrl: "/h2x.indexer.events.TradingRewardsEventV1",
  encode(message: TradingRewardsEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tradingRewards) {
      AddressTradingReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardsEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardsEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradingRewards.push(AddressTradingReward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardsEventV1>): TradingRewardsEventV1 {
    const message = createBaseTradingRewardsEventV1();
    message.tradingRewards = object.tradingRewards?.map(e => AddressTradingReward.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardsEventV1Amino): TradingRewardsEventV1 {
    const message = createBaseTradingRewardsEventV1();
    message.tradingRewards = object.trading_rewards?.map(e => AddressTradingReward.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TradingRewardsEventV1): TradingRewardsEventV1Amino {
    const obj: any = {};
    if (message.tradingRewards) {
      obj.trading_rewards = message.tradingRewards.map(e => e ? AddressTradingReward.toAmino(e) : undefined);
    } else {
      obj.trading_rewards = message.tradingRewards;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardsEventV1AminoMsg): TradingRewardsEventV1 {
    return TradingRewardsEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardsEventV1ProtoMsg): TradingRewardsEventV1 {
    return TradingRewardsEventV1.decode(message.value);
  },
  toProto(message: TradingRewardsEventV1): Uint8Array {
    return TradingRewardsEventV1.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardsEventV1): TradingRewardsEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.TradingRewardsEventV1",
      value: TradingRewardsEventV1.encode(message).finish()
    };
  }
};
function createBaseAddressTradingReward(): AddressTradingReward {
  return {
    owner: "",
    denomAmount: new Uint8Array()
  };
}
export const AddressTradingReward = {
  typeUrl: "/h2x.indexer.events.AddressTradingReward",
  encode(message: AddressTradingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denomAmount.length !== 0) {
      writer.uint32(18).bytes(message.denomAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressTradingReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressTradingReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denomAmount = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddressTradingReward>): AddressTradingReward {
    const message = createBaseAddressTradingReward();
    message.owner = object.owner ?? "";
    message.denomAmount = object.denomAmount ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AddressTradingRewardAmino): AddressTradingReward {
    const message = createBaseAddressTradingReward();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.denom_amount !== undefined && object.denom_amount !== null) {
      message.denomAmount = bytesFromBase64(object.denom_amount);
    }
    return message;
  },
  toAmino(message: AddressTradingReward): AddressTradingRewardAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.denom_amount = message.denomAmount ? base64FromBytes(message.denomAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: AddressTradingRewardAminoMsg): AddressTradingReward {
    return AddressTradingReward.fromAmino(object.value);
  },
  fromProtoMsg(message: AddressTradingRewardProtoMsg): AddressTradingReward {
    return AddressTradingReward.decode(message.value);
  },
  toProto(message: AddressTradingReward): Uint8Array {
    return AddressTradingReward.encode(message).finish();
  },
  toProtoMsg(message: AddressTradingReward): AddressTradingRewardProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.AddressTradingReward",
      value: AddressTradingReward.encode(message).finish()
    };
  }
};
function createBaseOpenInterestUpdateEventV1(): OpenInterestUpdateEventV1 {
  return {
    openInterestUpdates: []
  };
}
export const OpenInterestUpdateEventV1 = {
  typeUrl: "/h2x.indexer.events.OpenInterestUpdateEventV1",
  encode(message: OpenInterestUpdateEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.openInterestUpdates) {
      OpenInterestUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OpenInterestUpdateEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenInterestUpdateEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openInterestUpdates.push(OpenInterestUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OpenInterestUpdateEventV1>): OpenInterestUpdateEventV1 {
    const message = createBaseOpenInterestUpdateEventV1();
    message.openInterestUpdates = object.openInterestUpdates?.map(e => OpenInterestUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OpenInterestUpdateEventV1Amino): OpenInterestUpdateEventV1 {
    const message = createBaseOpenInterestUpdateEventV1();
    message.openInterestUpdates = object.open_interest_updates?.map(e => OpenInterestUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OpenInterestUpdateEventV1): OpenInterestUpdateEventV1Amino {
    const obj: any = {};
    if (message.openInterestUpdates) {
      obj.open_interest_updates = message.openInterestUpdates.map(e => e ? OpenInterestUpdate.toAmino(e) : undefined);
    } else {
      obj.open_interest_updates = message.openInterestUpdates;
    }
    return obj;
  },
  fromAminoMsg(object: OpenInterestUpdateEventV1AminoMsg): OpenInterestUpdateEventV1 {
    return OpenInterestUpdateEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: OpenInterestUpdateEventV1ProtoMsg): OpenInterestUpdateEventV1 {
    return OpenInterestUpdateEventV1.decode(message.value);
  },
  toProto(message: OpenInterestUpdateEventV1): Uint8Array {
    return OpenInterestUpdateEventV1.encode(message).finish();
  },
  toProtoMsg(message: OpenInterestUpdateEventV1): OpenInterestUpdateEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.OpenInterestUpdateEventV1",
      value: OpenInterestUpdateEventV1.encode(message).finish()
    };
  }
};
function createBaseOpenInterestUpdate(): OpenInterestUpdate {
  return {
    perpetualId: 0,
    openInterest: new Uint8Array()
  };
}
export const OpenInterestUpdate = {
  typeUrl: "/h2x.indexer.events.OpenInterestUpdate",
  encode(message: OpenInterestUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.perpetualId !== 0) {
      writer.uint32(8).uint32(message.perpetualId);
    }
    if (message.openInterest.length !== 0) {
      writer.uint32(18).bytes(message.openInterest);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OpenInterestUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenInterestUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualId = reader.uint32();
          break;
        case 2:
          message.openInterest = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OpenInterestUpdate>): OpenInterestUpdate {
    const message = createBaseOpenInterestUpdate();
    message.perpetualId = object.perpetualId ?? 0;
    message.openInterest = object.openInterest ?? new Uint8Array();
    return message;
  },
  fromAmino(object: OpenInterestUpdateAmino): OpenInterestUpdate {
    const message = createBaseOpenInterestUpdate();
    if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
      message.perpetualId = object.perpetual_id;
    }
    if (object.open_interest !== undefined && object.open_interest !== null) {
      message.openInterest = bytesFromBase64(object.open_interest);
    }
    return message;
  },
  toAmino(message: OpenInterestUpdate): OpenInterestUpdateAmino {
    const obj: any = {};
    obj.perpetual_id = message.perpetualId === 0 ? undefined : message.perpetualId;
    obj.open_interest = message.openInterest ? base64FromBytes(message.openInterest) : undefined;
    return obj;
  },
  fromAminoMsg(object: OpenInterestUpdateAminoMsg): OpenInterestUpdate {
    return OpenInterestUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: OpenInterestUpdateProtoMsg): OpenInterestUpdate {
    return OpenInterestUpdate.decode(message.value);
  },
  toProto(message: OpenInterestUpdate): Uint8Array {
    return OpenInterestUpdate.encode(message).finish();
  },
  toProtoMsg(message: OpenInterestUpdate): OpenInterestUpdateProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.OpenInterestUpdate",
      value: OpenInterestUpdate.encode(message).finish()
    };
  }
};
function createBaseLiquidityTierUpsertEventV2(): LiquidityTierUpsertEventV2 {
  return {
    id: 0,
    name: "",
    initialMarginPpm: 0,
    maintenanceFractionPpm: 0,
    basePositionNotional: BigInt(0),
    openInterestLowerCap: BigInt(0),
    openInterestUpperCap: BigInt(0)
  };
}
export const LiquidityTierUpsertEventV2 = {
  typeUrl: "/h2x.indexer.events.LiquidityTierUpsertEventV2",
  encode(message: LiquidityTierUpsertEventV2, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.initialMarginPpm !== 0) {
      writer.uint32(24).uint32(message.initialMarginPpm);
    }
    if (message.maintenanceFractionPpm !== 0) {
      writer.uint32(32).uint32(message.maintenanceFractionPpm);
    }
    if (message.basePositionNotional !== BigInt(0)) {
      writer.uint32(40).uint64(message.basePositionNotional);
    }
    if (message.openInterestLowerCap !== BigInt(0)) {
      writer.uint32(48).uint64(message.openInterestLowerCap);
    }
    if (message.openInterestUpperCap !== BigInt(0)) {
      writer.uint32(56).uint64(message.openInterestUpperCap);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityTierUpsertEventV2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityTierUpsertEventV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.initialMarginPpm = reader.uint32();
          break;
        case 4:
          message.maintenanceFractionPpm = reader.uint32();
          break;
        case 5:
          message.basePositionNotional = reader.uint64();
          break;
        case 6:
          message.openInterestLowerCap = reader.uint64();
          break;
        case 7:
          message.openInterestUpperCap = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LiquidityTierUpsertEventV2>): LiquidityTierUpsertEventV2 {
    const message = createBaseLiquidityTierUpsertEventV2();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.initialMarginPpm = object.initialMarginPpm ?? 0;
    message.maintenanceFractionPpm = object.maintenanceFractionPpm ?? 0;
    message.basePositionNotional = object.basePositionNotional !== undefined && object.basePositionNotional !== null ? BigInt(object.basePositionNotional.toString()) : BigInt(0);
    message.openInterestLowerCap = object.openInterestLowerCap !== undefined && object.openInterestLowerCap !== null ? BigInt(object.openInterestLowerCap.toString()) : BigInt(0);
    message.openInterestUpperCap = object.openInterestUpperCap !== undefined && object.openInterestUpperCap !== null ? BigInt(object.openInterestUpperCap.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LiquidityTierUpsertEventV2Amino): LiquidityTierUpsertEventV2 {
    const message = createBaseLiquidityTierUpsertEventV2();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.initial_margin_ppm !== undefined && object.initial_margin_ppm !== null) {
      message.initialMarginPpm = object.initial_margin_ppm;
    }
    if (object.maintenance_fraction_ppm !== undefined && object.maintenance_fraction_ppm !== null) {
      message.maintenanceFractionPpm = object.maintenance_fraction_ppm;
    }
    if (object.base_position_notional !== undefined && object.base_position_notional !== null) {
      message.basePositionNotional = BigInt(object.base_position_notional);
    }
    if (object.open_interest_lower_cap !== undefined && object.open_interest_lower_cap !== null) {
      message.openInterestLowerCap = BigInt(object.open_interest_lower_cap);
    }
    if (object.open_interest_upper_cap !== undefined && object.open_interest_upper_cap !== null) {
      message.openInterestUpperCap = BigInt(object.open_interest_upper_cap);
    }
    return message;
  },
  toAmino(message: LiquidityTierUpsertEventV2): LiquidityTierUpsertEventV2Amino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.initial_margin_ppm = message.initialMarginPpm === 0 ? undefined : message.initialMarginPpm;
    obj.maintenance_fraction_ppm = message.maintenanceFractionPpm === 0 ? undefined : message.maintenanceFractionPpm;
    obj.base_position_notional = message.basePositionNotional !== BigInt(0) ? message.basePositionNotional?.toString() : undefined;
    obj.open_interest_lower_cap = message.openInterestLowerCap !== BigInt(0) ? message.openInterestLowerCap?.toString() : undefined;
    obj.open_interest_upper_cap = message.openInterestUpperCap !== BigInt(0) ? message.openInterestUpperCap?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityTierUpsertEventV2AminoMsg): LiquidityTierUpsertEventV2 {
    return LiquidityTierUpsertEventV2.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityTierUpsertEventV2ProtoMsg): LiquidityTierUpsertEventV2 {
    return LiquidityTierUpsertEventV2.decode(message.value);
  },
  toProto(message: LiquidityTierUpsertEventV2): Uint8Array {
    return LiquidityTierUpsertEventV2.encode(message).finish();
  },
  toProtoMsg(message: LiquidityTierUpsertEventV2): LiquidityTierUpsertEventV2ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.LiquidityTierUpsertEventV2",
      value: LiquidityTierUpsertEventV2.encode(message).finish()
    };
  }
};
function createBaseRegisterAffiliateEventV1(): RegisterAffiliateEventV1 {
  return {
    referee: "",
    affiliate: ""
  };
}
export const RegisterAffiliateEventV1 = {
  typeUrl: "/h2x.indexer.events.RegisterAffiliateEventV1",
  encode(message: RegisterAffiliateEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.referee !== "") {
      writer.uint32(10).string(message.referee);
    }
    if (message.affiliate !== "") {
      writer.uint32(18).string(message.affiliate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisterAffiliateEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterAffiliateEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referee = reader.string();
          break;
        case 2:
          message.affiliate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RegisterAffiliateEventV1>): RegisterAffiliateEventV1 {
    const message = createBaseRegisterAffiliateEventV1();
    message.referee = object.referee ?? "";
    message.affiliate = object.affiliate ?? "";
    return message;
  },
  fromAmino(object: RegisterAffiliateEventV1Amino): RegisterAffiliateEventV1 {
    const message = createBaseRegisterAffiliateEventV1();
    if (object.referee !== undefined && object.referee !== null) {
      message.referee = object.referee;
    }
    if (object.affiliate !== undefined && object.affiliate !== null) {
      message.affiliate = object.affiliate;
    }
    return message;
  },
  toAmino(message: RegisterAffiliateEventV1): RegisterAffiliateEventV1Amino {
    const obj: any = {};
    obj.referee = message.referee === "" ? undefined : message.referee;
    obj.affiliate = message.affiliate === "" ? undefined : message.affiliate;
    return obj;
  },
  fromAminoMsg(object: RegisterAffiliateEventV1AminoMsg): RegisterAffiliateEventV1 {
    return RegisterAffiliateEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterAffiliateEventV1ProtoMsg): RegisterAffiliateEventV1 {
    return RegisterAffiliateEventV1.decode(message.value);
  },
  toProto(message: RegisterAffiliateEventV1): Uint8Array {
    return RegisterAffiliateEventV1.encode(message).finish();
  },
  toProtoMsg(message: RegisterAffiliateEventV1): RegisterAffiliateEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.RegisterAffiliateEventV1",
      value: RegisterAffiliateEventV1.encode(message).finish()
    };
  }
};
function createBaseUpsertVaultEventV1(): UpsertVaultEventV1 {
  return {
    address: "",
    clobPairId: 0,
    status: 0
  };
}
export const UpsertVaultEventV1 = {
  typeUrl: "/h2x.indexer.events.UpsertVaultEventV1",
  encode(message: UpsertVaultEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.clobPairId !== 0) {
      writer.uint32(16).uint32(message.clobPairId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpsertVaultEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertVaultEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.clobPairId = reader.uint32();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpsertVaultEventV1>): UpsertVaultEventV1 {
    const message = createBaseUpsertVaultEventV1();
    message.address = object.address ?? "";
    message.clobPairId = object.clobPairId ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: UpsertVaultEventV1Amino): UpsertVaultEventV1 {
    const message = createBaseUpsertVaultEventV1();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
      message.clobPairId = object.clob_pair_id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: UpsertVaultEventV1): UpsertVaultEventV1Amino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.clob_pair_id = message.clobPairId === 0 ? undefined : message.clobPairId;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: UpsertVaultEventV1AminoMsg): UpsertVaultEventV1 {
    return UpsertVaultEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: UpsertVaultEventV1ProtoMsg): UpsertVaultEventV1 {
    return UpsertVaultEventV1.decode(message.value);
  },
  toProto(message: UpsertVaultEventV1): Uint8Array {
    return UpsertVaultEventV1.encode(message).finish();
  },
  toProtoMsg(message: UpsertVaultEventV1): UpsertVaultEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.UpsertVaultEventV1",
      value: UpsertVaultEventV1.encode(message).finish()
    };
  }
};
function createBaseOperatorAddedEventV1(): OperatorAddedEventV1 {
  return {
    operatorAddress: "",
    addedBy: "",
    permissions: []
  };
}
export const OperatorAddedEventV1 = {
  typeUrl: "/h2x.indexer.events.OperatorAddedEventV1",
  encode(message: OperatorAddedEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.addedBy !== "") {
      writer.uint32(18).string(message.addedBy);
    }
    writer.uint32(26).fork();
    for (const v of message.permissions) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorAddedEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorAddedEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.addedBy = reader.string();
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
  fromPartial(object: Partial<OperatorAddedEventV1>): OperatorAddedEventV1 {
    const message = createBaseOperatorAddedEventV1();
    message.operatorAddress = object.operatorAddress ?? "";
    message.addedBy = object.addedBy ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OperatorAddedEventV1Amino): OperatorAddedEventV1 {
    const message = createBaseOperatorAddedEventV1();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.added_by !== undefined && object.added_by !== null) {
      message.addedBy = object.added_by;
    }
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  toAmino(message: OperatorAddedEventV1): OperatorAddedEventV1Amino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.added_by = message.addedBy === "" ? undefined : message.addedBy;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = message.permissions;
    }
    return obj;
  },
  fromAminoMsg(object: OperatorAddedEventV1AminoMsg): OperatorAddedEventV1 {
    return OperatorAddedEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorAddedEventV1ProtoMsg): OperatorAddedEventV1 {
    return OperatorAddedEventV1.decode(message.value);
  },
  toProto(message: OperatorAddedEventV1): Uint8Array {
    return OperatorAddedEventV1.encode(message).finish();
  },
  toProtoMsg(message: OperatorAddedEventV1): OperatorAddedEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.OperatorAddedEventV1",
      value: OperatorAddedEventV1.encode(message).finish()
    };
  }
};
function createBaseOperatorRemovedEventV1(): OperatorRemovedEventV1 {
  return {
    operatorAddress: "",
    removedBy: ""
  };
}
export const OperatorRemovedEventV1 = {
  typeUrl: "/h2x.indexer.events.OperatorRemovedEventV1",
  encode(message: OperatorRemovedEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.removedBy !== "") {
      writer.uint32(18).string(message.removedBy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorRemovedEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorRemovedEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.removedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OperatorRemovedEventV1>): OperatorRemovedEventV1 {
    const message = createBaseOperatorRemovedEventV1();
    message.operatorAddress = object.operatorAddress ?? "";
    message.removedBy = object.removedBy ?? "";
    return message;
  },
  fromAmino(object: OperatorRemovedEventV1Amino): OperatorRemovedEventV1 {
    const message = createBaseOperatorRemovedEventV1();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.removed_by !== undefined && object.removed_by !== null) {
      message.removedBy = object.removed_by;
    }
    return message;
  },
  toAmino(message: OperatorRemovedEventV1): OperatorRemovedEventV1Amino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.removed_by = message.removedBy === "" ? undefined : message.removedBy;
    return obj;
  },
  fromAminoMsg(object: OperatorRemovedEventV1AminoMsg): OperatorRemovedEventV1 {
    return OperatorRemovedEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorRemovedEventV1ProtoMsg): OperatorRemovedEventV1 {
    return OperatorRemovedEventV1.decode(message.value);
  },
  toProto(message: OperatorRemovedEventV1): Uint8Array {
    return OperatorRemovedEventV1.encode(message).finish();
  },
  toProtoMsg(message: OperatorRemovedEventV1): OperatorRemovedEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.OperatorRemovedEventV1",
      value: OperatorRemovedEventV1.encode(message).finish()
    };
  }
};
function createBaseOperatorPermissionsUpdatedEventV1(): OperatorPermissionsUpdatedEventV1 {
  return {
    operatorAddress: "",
    updatedBy: "",
    oldPermissions: [],
    newPermissions: []
  };
}
export const OperatorPermissionsUpdatedEventV1 = {
  typeUrl: "/h2x.indexer.events.OperatorPermissionsUpdatedEventV1",
  encode(message: OperatorPermissionsUpdatedEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.updatedBy !== "") {
      writer.uint32(18).string(message.updatedBy);
    }
    writer.uint32(26).fork();
    for (const v of message.oldPermissions) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.newPermissions) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorPermissionsUpdatedEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorPermissionsUpdatedEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.updatedBy = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.oldPermissions.push(reader.uint32());
            }
          } else {
            message.oldPermissions.push(reader.uint32());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.newPermissions.push(reader.uint32());
            }
          } else {
            message.newPermissions.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OperatorPermissionsUpdatedEventV1>): OperatorPermissionsUpdatedEventV1 {
    const message = createBaseOperatorPermissionsUpdatedEventV1();
    message.operatorAddress = object.operatorAddress ?? "";
    message.updatedBy = object.updatedBy ?? "";
    message.oldPermissions = object.oldPermissions?.map(e => e) || [];
    message.newPermissions = object.newPermissions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OperatorPermissionsUpdatedEventV1Amino): OperatorPermissionsUpdatedEventV1 {
    const message = createBaseOperatorPermissionsUpdatedEventV1();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.updated_by !== undefined && object.updated_by !== null) {
      message.updatedBy = object.updated_by;
    }
    message.oldPermissions = object.old_permissions?.map(e => e) || [];
    message.newPermissions = object.new_permissions?.map(e => e) || [];
    return message;
  },
  toAmino(message: OperatorPermissionsUpdatedEventV1): OperatorPermissionsUpdatedEventV1Amino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.updated_by = message.updatedBy === "" ? undefined : message.updatedBy;
    if (message.oldPermissions) {
      obj.old_permissions = message.oldPermissions.map(e => e);
    } else {
      obj.old_permissions = message.oldPermissions;
    }
    if (message.newPermissions) {
      obj.new_permissions = message.newPermissions.map(e => e);
    } else {
      obj.new_permissions = message.newPermissions;
    }
    return obj;
  },
  fromAminoMsg(object: OperatorPermissionsUpdatedEventV1AminoMsg): OperatorPermissionsUpdatedEventV1 {
    return OperatorPermissionsUpdatedEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorPermissionsUpdatedEventV1ProtoMsg): OperatorPermissionsUpdatedEventV1 {
    return OperatorPermissionsUpdatedEventV1.decode(message.value);
  },
  toProto(message: OperatorPermissionsUpdatedEventV1): Uint8Array {
    return OperatorPermissionsUpdatedEventV1.encode(message).finish();
  },
  toProtoMsg(message: OperatorPermissionsUpdatedEventV1): OperatorPermissionsUpdatedEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.OperatorPermissionsUpdatedEventV1",
      value: OperatorPermissionsUpdatedEventV1.encode(message).finish()
    };
  }
};
function createBaseOperatorActionEventV1(): OperatorActionEventV1 {
  return {
    actionType: 0,
    triggeredBy: "",
    resourceId: 0
  };
}
export const OperatorActionEventV1 = {
  typeUrl: "/h2x.indexer.events.OperatorActionEventV1",
  encode(message: OperatorActionEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionType !== 0) {
      writer.uint32(8).int32(message.actionType);
    }
    if (message.triggeredBy !== "") {
      writer.uint32(18).string(message.triggeredBy);
    }
    if (message.resourceId !== 0) {
      writer.uint32(24).uint32(message.resourceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorActionEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorActionEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionType = reader.int32() as any;
          break;
        case 2:
          message.triggeredBy = reader.string();
          break;
        case 3:
          message.resourceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OperatorActionEventV1>): OperatorActionEventV1 {
    const message = createBaseOperatorActionEventV1();
    message.actionType = object.actionType ?? 0;
    message.triggeredBy = object.triggeredBy ?? "";
    message.resourceId = object.resourceId ?? 0;
    return message;
  },
  fromAmino(object: OperatorActionEventV1Amino): OperatorActionEventV1 {
    const message = createBaseOperatorActionEventV1();
    if (object.action_type !== undefined && object.action_type !== null) {
      message.actionType = object.action_type;
    }
    if (object.triggered_by !== undefined && object.triggered_by !== null) {
      message.triggeredBy = object.triggered_by;
    }
    if (object.resource_id !== undefined && object.resource_id !== null) {
      message.resourceId = object.resource_id;
    }
    return message;
  },
  toAmino(message: OperatorActionEventV1): OperatorActionEventV1Amino {
    const obj: any = {};
    obj.action_type = message.actionType === 0 ? undefined : message.actionType;
    obj.triggered_by = message.triggeredBy === "" ? undefined : message.triggeredBy;
    obj.resource_id = message.resourceId === 0 ? undefined : message.resourceId;
    return obj;
  },
  fromAminoMsg(object: OperatorActionEventV1AminoMsg): OperatorActionEventV1 {
    return OperatorActionEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorActionEventV1ProtoMsg): OperatorActionEventV1 {
    return OperatorActionEventV1.decode(message.value);
  },
  toProto(message: OperatorActionEventV1): Uint8Array {
    return OperatorActionEventV1.encode(message).finish();
  },
  toProtoMsg(message: OperatorActionEventV1): OperatorActionEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.OperatorActionEventV1",
      value: OperatorActionEventV1.encode(message).finish()
    };
  }
};
function createBaseAgentRegisteredEventV1(): AgentRegisteredEventV1 {
  return {
    masterAddress: "",
    agentAddress: "",
    name: "",
    expiryTimestamp: BigInt(0)
  };
}
export const AgentRegisteredEventV1 = {
  typeUrl: "/h2x.indexer.events.AgentRegisteredEventV1",
  encode(message: AgentRegisteredEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.masterAddress !== "") {
      writer.uint32(10).string(message.masterAddress);
    }
    if (message.agentAddress !== "") {
      writer.uint32(18).string(message.agentAddress);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.expiryTimestamp !== BigInt(0)) {
      writer.uint32(32).uint64(message.expiryTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AgentRegisteredEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgentRegisteredEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterAddress = reader.string();
          break;
        case 2:
          message.agentAddress = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.expiryTimestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AgentRegisteredEventV1>): AgentRegisteredEventV1 {
    const message = createBaseAgentRegisteredEventV1();
    message.masterAddress = object.masterAddress ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.name = object.name ?? "";
    message.expiryTimestamp = object.expiryTimestamp !== undefined && object.expiryTimestamp !== null ? BigInt(object.expiryTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AgentRegisteredEventV1Amino): AgentRegisteredEventV1 {
    const message = createBaseAgentRegisteredEventV1();
    if (object.master_address !== undefined && object.master_address !== null) {
      message.masterAddress = object.master_address;
    }
    if (object.agent_address !== undefined && object.agent_address !== null) {
      message.agentAddress = object.agent_address;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.expiry_timestamp !== undefined && object.expiry_timestamp !== null) {
      message.expiryTimestamp = BigInt(object.expiry_timestamp);
    }
    return message;
  },
  toAmino(message: AgentRegisteredEventV1): AgentRegisteredEventV1Amino {
    const obj: any = {};
    obj.master_address = message.masterAddress === "" ? undefined : message.masterAddress;
    obj.agent_address = message.agentAddress === "" ? undefined : message.agentAddress;
    obj.name = message.name === "" ? undefined : message.name;
    obj.expiry_timestamp = message.expiryTimestamp !== BigInt(0) ? message.expiryTimestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AgentRegisteredEventV1AminoMsg): AgentRegisteredEventV1 {
    return AgentRegisteredEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: AgentRegisteredEventV1ProtoMsg): AgentRegisteredEventV1 {
    return AgentRegisteredEventV1.decode(message.value);
  },
  toProto(message: AgentRegisteredEventV1): Uint8Array {
    return AgentRegisteredEventV1.encode(message).finish();
  },
  toProtoMsg(message: AgentRegisteredEventV1): AgentRegisteredEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.AgentRegisteredEventV1",
      value: AgentRegisteredEventV1.encode(message).finish()
    };
  }
};
function createBaseAgentRemovedEventV1(): AgentRemovedEventV1 {
  return {
    masterAddress: "",
    agentAddress: "",
    removalType: 0
  };
}
export const AgentRemovedEventV1 = {
  typeUrl: "/h2x.indexer.events.AgentRemovedEventV1",
  encode(message: AgentRemovedEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.masterAddress !== "") {
      writer.uint32(10).string(message.masterAddress);
    }
    if (message.agentAddress !== "") {
      writer.uint32(18).string(message.agentAddress);
    }
    if (message.removalType !== 0) {
      writer.uint32(24).int32(message.removalType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AgentRemovedEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgentRemovedEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterAddress = reader.string();
          break;
        case 2:
          message.agentAddress = reader.string();
          break;
        case 3:
          message.removalType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AgentRemovedEventV1>): AgentRemovedEventV1 {
    const message = createBaseAgentRemovedEventV1();
    message.masterAddress = object.masterAddress ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.removalType = object.removalType ?? 0;
    return message;
  },
  fromAmino(object: AgentRemovedEventV1Amino): AgentRemovedEventV1 {
    const message = createBaseAgentRemovedEventV1();
    if (object.master_address !== undefined && object.master_address !== null) {
      message.masterAddress = object.master_address;
    }
    if (object.agent_address !== undefined && object.agent_address !== null) {
      message.agentAddress = object.agent_address;
    }
    if (object.removal_type !== undefined && object.removal_type !== null) {
      message.removalType = object.removal_type;
    }
    return message;
  },
  toAmino(message: AgentRemovedEventV1): AgentRemovedEventV1Amino {
    const obj: any = {};
    obj.master_address = message.masterAddress === "" ? undefined : message.masterAddress;
    obj.agent_address = message.agentAddress === "" ? undefined : message.agentAddress;
    obj.removal_type = message.removalType === 0 ? undefined : message.removalType;
    return obj;
  },
  fromAminoMsg(object: AgentRemovedEventV1AminoMsg): AgentRemovedEventV1 {
    return AgentRemovedEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: AgentRemovedEventV1ProtoMsg): AgentRemovedEventV1 {
    return AgentRemovedEventV1.decode(message.value);
  },
  toProto(message: AgentRemovedEventV1): Uint8Array {
    return AgentRemovedEventV1.encode(message).finish();
  },
  toProtoMsg(message: AgentRemovedEventV1): AgentRemovedEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.AgentRemovedEventV1",
      value: AgentRemovedEventV1.encode(message).finish()
    };
  }
};
function createBaseBlacklistEventV1(): BlacklistEventV1 {
  return {
    address: "",
    reason: "",
    blockedAt: 0,
    isBlocked: false
  };
}
export const BlacklistEventV1 = {
  typeUrl: "/h2x.indexer.events.BlacklistEventV1",
  encode(message: BlacklistEventV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.blockedAt !== 0) {
      writer.uint32(24).uint32(message.blockedAt);
    }
    if (message.isBlocked === true) {
      writer.uint32(32).bool(message.isBlocked);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlacklistEventV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlacklistEventV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.blockedAt = reader.uint32();
          break;
        case 4:
          message.isBlocked = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlacklistEventV1>): BlacklistEventV1 {
    const message = createBaseBlacklistEventV1();
    message.address = object.address ?? "";
    message.reason = object.reason ?? "";
    message.blockedAt = object.blockedAt ?? 0;
    message.isBlocked = object.isBlocked ?? false;
    return message;
  },
  fromAmino(object: BlacklistEventV1Amino): BlacklistEventV1 {
    const message = createBaseBlacklistEventV1();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.blocked_at !== undefined && object.blocked_at !== null) {
      message.blockedAt = object.blocked_at;
    }
    if (object.is_blocked !== undefined && object.is_blocked !== null) {
      message.isBlocked = object.is_blocked;
    }
    return message;
  },
  toAmino(message: BlacklistEventV1): BlacklistEventV1Amino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.blocked_at = message.blockedAt === 0 ? undefined : message.blockedAt;
    obj.is_blocked = message.isBlocked === false ? undefined : message.isBlocked;
    return obj;
  },
  fromAminoMsg(object: BlacklistEventV1AminoMsg): BlacklistEventV1 {
    return BlacklistEventV1.fromAmino(object.value);
  },
  fromProtoMsg(message: BlacklistEventV1ProtoMsg): BlacklistEventV1 {
    return BlacklistEventV1.decode(message.value);
  },
  toProto(message: BlacklistEventV1): Uint8Array {
    return BlacklistEventV1.encode(message).finish();
  },
  toProtoMsg(message: BlacklistEventV1): BlacklistEventV1ProtoMsg {
    return {
      typeUrl: "/h2x.indexer.events.BlacklistEventV1",
      value: BlacklistEventV1.encode(message).finish()
    };
  }
};