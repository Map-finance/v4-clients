//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as dydxprotocolAccountplusTxRegistry from "./accountplus/tx.registry";
import * as dydxprotocolAffiliatesTxRegistry from "./affiliates/tx.registry";
import * as dydxprotocolAssetsTxRegistry from "./assets/tx.registry";
import * as dydxprotocolBlocktimeTxRegistry from "./blocktime/tx.registry";
import * as dydxprotocolBridgeTxRegistry from "./bridge/tx.registry";
import * as dydxprotocolClobTxRegistry from "./clob/tx.registry";
import * as dydxprotocolDelaymsgTxRegistry from "./delaymsg/tx.registry";
import * as dydxprotocolFeetiersTxRegistry from "./feetiers/tx.registry";
import * as dydxprotocolGovplusTxRegistry from "./govplus/tx.registry";
import * as dydxprotocolListingTxRegistry from "./listing/tx.registry";
import * as dydxprotocolPerpetualsTxRegistry from "./perpetuals/tx.registry";
import * as dydxprotocolPricesTxRegistry from "./prices/tx.registry";
import * as dydxprotocolRatelimitTxRegistry from "./ratelimit/tx.registry";
import * as dydxprotocolRevshareTxRegistry from "./revshare/tx.registry";
import * as dydxprotocolRewardsTxRegistry from "./rewards/tx.registry";
import * as dydxprotocolSendingTxRegistry from "./sending/tx.registry";
import * as dydxprotocolStatsTxRegistry from "./stats/tx.registry";
import * as dydxprotocolVaultTxRegistry from "./vault/tx.registry";
import * as dydxprotocolVestTxRegistry from "./vest/tx.registry";
import * as dydxprotocol1AffiliatesTxRegistry from "../dydxprotocol1/affiliates/tx.registry";
import * as dydxprotocol1BlocktimeTxRegistry from "../dydxprotocol1/blocktime/tx.registry";
import * as dydxprotocol1BridgeTxRegistry from "../dydxprotocol1/bridge/tx.registry";
import * as dydxprotocol1ClobTxRegistry from "../dydxprotocol1/clob/tx.registry";
import * as dydxprotocol1DelaymsgTxRegistry from "../dydxprotocol1/delaymsg/tx.registry";
import * as dydxprotocol1FeetiersTxRegistry from "../dydxprotocol1/feetiers/tx.registry";
import * as dydxprotocol1GovplusTxRegistry from "../dydxprotocol1/govplus/tx.registry";
import * as dydxprotocol1ListingTxRegistry from "../dydxprotocol1/listing/tx.registry";
import * as dydxprotocol1PerpetualsTxRegistry from "../dydxprotocol1/perpetuals/tx.registry";
import * as dydxprotocol1PricesTxRegistry from "../dydxprotocol1/prices/tx.registry";
import * as dydxprotocol1RatelimitTxRegistry from "../dydxprotocol1/ratelimit/tx.registry";
import * as dydxprotocol1RevshareTxRegistry from "../dydxprotocol1/revshare/tx.registry";
import * as dydxprotocol1RewardsTxRegistry from "../dydxprotocol1/rewards/tx.registry";
import * as dydxprotocol1SendingTxRegistry from "../dydxprotocol1/sending/tx.registry";
import * as dydxprotocol1StatsTxRegistry from "../dydxprotocol1/stats/tx.registry";
import * as dydxprotocol1VaultTxRegistry from "../dydxprotocol1/vault/tx.registry";
import * as dydxprotocol1VestTxRegistry from "../dydxprotocol1/vest/tx.registry";
import * as dydxprotocolAccountplusTxAmino from "./accountplus/tx.amino";
import * as dydxprotocolAffiliatesTxAmino from "./affiliates/tx.amino";
import * as dydxprotocolAssetsTxAmino from "./assets/tx.amino";
import * as dydxprotocolBlocktimeTxAmino from "./blocktime/tx.amino";
import * as dydxprotocolBridgeTxAmino from "./bridge/tx.amino";
import * as dydxprotocolClobTxAmino from "./clob/tx.amino";
import * as dydxprotocolDelaymsgTxAmino from "./delaymsg/tx.amino";
import * as dydxprotocolFeetiersTxAmino from "./feetiers/tx.amino";
import * as dydxprotocolGovplusTxAmino from "./govplus/tx.amino";
import * as dydxprotocolListingTxAmino from "./listing/tx.amino";
import * as dydxprotocolPerpetualsTxAmino from "./perpetuals/tx.amino";
import * as dydxprotocolPricesTxAmino from "./prices/tx.amino";
import * as dydxprotocolRatelimitTxAmino from "./ratelimit/tx.amino";
import * as dydxprotocolRevshareTxAmino from "./revshare/tx.amino";
import * as dydxprotocolRewardsTxAmino from "./rewards/tx.amino";
import * as dydxprotocolSendingTxAmino from "./sending/tx.amino";
import * as dydxprotocolStatsTxAmino from "./stats/tx.amino";
import * as dydxprotocolVaultTxAmino from "./vault/tx.amino";
import * as dydxprotocolVestTxAmino from "./vest/tx.amino";
import * as dydxprotocol1AffiliatesTxAmino from "../dydxprotocol1/affiliates/tx.amino";
import * as dydxprotocol1BlocktimeTxAmino from "../dydxprotocol1/blocktime/tx.amino";
import * as dydxprotocol1BridgeTxAmino from "../dydxprotocol1/bridge/tx.amino";
import * as dydxprotocol1ClobTxAmino from "../dydxprotocol1/clob/tx.amino";
import * as dydxprotocol1DelaymsgTxAmino from "../dydxprotocol1/delaymsg/tx.amino";
import * as dydxprotocol1FeetiersTxAmino from "../dydxprotocol1/feetiers/tx.amino";
import * as dydxprotocol1GovplusTxAmino from "../dydxprotocol1/govplus/tx.amino";
import * as dydxprotocol1ListingTxAmino from "../dydxprotocol1/listing/tx.amino";
import * as dydxprotocol1PerpetualsTxAmino from "../dydxprotocol1/perpetuals/tx.amino";
import * as dydxprotocol1PricesTxAmino from "../dydxprotocol1/prices/tx.amino";
import * as dydxprotocol1RatelimitTxAmino from "../dydxprotocol1/ratelimit/tx.amino";
import * as dydxprotocol1RevshareTxAmino from "../dydxprotocol1/revshare/tx.amino";
import * as dydxprotocol1RewardsTxAmino from "../dydxprotocol1/rewards/tx.amino";
import * as dydxprotocol1SendingTxAmino from "../dydxprotocol1/sending/tx.amino";
import * as dydxprotocol1StatsTxAmino from "../dydxprotocol1/stats/tx.amino";
import * as dydxprotocol1VaultTxAmino from "../dydxprotocol1/vault/tx.amino";
import * as dydxprotocol1VestTxAmino from "../dydxprotocol1/vest/tx.amino";
export const dydxprotocolAminoConverters = {
  ...dydxprotocolAccountplusTxAmino.AminoConverter,
  ...dydxprotocolAffiliatesTxAmino.AminoConverter,
  ...dydxprotocolAssetsTxAmino.AminoConverter,
  ...dydxprotocolBlocktimeTxAmino.AminoConverter,
  ...dydxprotocolBridgeTxAmino.AminoConverter,
  ...dydxprotocolClobTxAmino.AminoConverter,
  ...dydxprotocolDelaymsgTxAmino.AminoConverter,
  ...dydxprotocolFeetiersTxAmino.AminoConverter,
  ...dydxprotocolGovplusTxAmino.AminoConverter,
  ...dydxprotocolListingTxAmino.AminoConverter,
  ...dydxprotocolPerpetualsTxAmino.AminoConverter,
  ...dydxprotocolPricesTxAmino.AminoConverter,
  ...dydxprotocolRatelimitTxAmino.AminoConverter,
  ...dydxprotocolRevshareTxAmino.AminoConverter,
  ...dydxprotocolRewardsTxAmino.AminoConverter,
  ...dydxprotocolSendingTxAmino.AminoConverter,
  ...dydxprotocolStatsTxAmino.AminoConverter,
  ...dydxprotocolVaultTxAmino.AminoConverter,
  ...dydxprotocolVestTxAmino.AminoConverter,
  ...dydxprotocol1AffiliatesTxAmino.AminoConverter,
  ...dydxprotocol1BlocktimeTxAmino.AminoConverter,
  ...dydxprotocol1BridgeTxAmino.AminoConverter,
  ...dydxprotocol1ClobTxAmino.AminoConverter,
  ...dydxprotocol1DelaymsgTxAmino.AminoConverter,
  ...dydxprotocol1FeetiersTxAmino.AminoConverter,
  ...dydxprotocol1GovplusTxAmino.AminoConverter,
  ...dydxprotocol1ListingTxAmino.AminoConverter,
  ...dydxprotocol1PerpetualsTxAmino.AminoConverter,
  ...dydxprotocol1PricesTxAmino.AminoConverter,
  ...dydxprotocol1RatelimitTxAmino.AminoConverter,
  ...dydxprotocol1RevshareTxAmino.AminoConverter,
  ...dydxprotocol1RewardsTxAmino.AminoConverter,
  ...dydxprotocol1SendingTxAmino.AminoConverter,
  ...dydxprotocol1StatsTxAmino.AminoConverter,
  ...dydxprotocol1VaultTxAmino.AminoConverter,
  ...dydxprotocol1VestTxAmino.AminoConverter
};
export const dydxprotocolProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...dydxprotocolAccountplusTxRegistry.registry, ...dydxprotocolAffiliatesTxRegistry.registry, ...dydxprotocolAssetsTxRegistry.registry, ...dydxprotocolBlocktimeTxRegistry.registry, ...dydxprotocolBridgeTxRegistry.registry, ...dydxprotocolClobTxRegistry.registry, ...dydxprotocolDelaymsgTxRegistry.registry, ...dydxprotocolFeetiersTxRegistry.registry, ...dydxprotocolGovplusTxRegistry.registry, ...dydxprotocolListingTxRegistry.registry, ...dydxprotocolPerpetualsTxRegistry.registry, ...dydxprotocolPricesTxRegistry.registry, ...dydxprotocolRatelimitTxRegistry.registry, ...dydxprotocolRevshareTxRegistry.registry, ...dydxprotocolRewardsTxRegistry.registry, ...dydxprotocolSendingTxRegistry.registry, ...dydxprotocolStatsTxRegistry.registry, ...dydxprotocolVaultTxRegistry.registry, ...dydxprotocolVestTxRegistry.registry, ...dydxprotocol1AffiliatesTxRegistry.registry, ...dydxprotocol1BlocktimeTxRegistry.registry, ...dydxprotocol1BridgeTxRegistry.registry, ...dydxprotocol1ClobTxRegistry.registry, ...dydxprotocol1DelaymsgTxRegistry.registry, ...dydxprotocol1FeetiersTxRegistry.registry, ...dydxprotocol1GovplusTxRegistry.registry, ...dydxprotocol1ListingTxRegistry.registry, ...dydxprotocol1PerpetualsTxRegistry.registry, ...dydxprotocol1PricesTxRegistry.registry, ...dydxprotocol1RatelimitTxRegistry.registry, ...dydxprotocol1RevshareTxRegistry.registry, ...dydxprotocol1RewardsTxRegistry.registry, ...dydxprotocol1SendingTxRegistry.registry, ...dydxprotocol1StatsTxRegistry.registry, ...dydxprotocol1VaultTxRegistry.registry, ...dydxprotocol1VestTxRegistry.registry];
export const getSigningDydxprotocolClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...dydxprotocolProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...dydxprotocolAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningDydxprotocolClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningDydxprotocolClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};