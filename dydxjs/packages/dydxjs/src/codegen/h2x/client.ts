//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as h2xAccountplusTxRegistry from "./accountplus/tx.registry";
import * as h2xAffiliatesTxRegistry from "./affiliates/tx.registry";
import * as h2xAssetsTxRegistry from "./assets/tx.registry";
import * as h2xBlocktimeTxRegistry from "./blocktime/tx.registry";
import * as h2xBridgeTxRegistry from "./bridge/tx.registry";
import * as h2xClobTxRegistry from "./clob/tx.registry";
import * as h2xDelaymsgTxRegistry from "./delaymsg/tx.registry";
import * as h2xFeetiersTxRegistry from "./feetiers/tx.registry";
import * as h2xGovplusTxRegistry from "./govplus/tx.registry";
import * as h2xListingTxRegistry from "./listing/tx.registry";
import * as h2xPerpetualsTxRegistry from "./perpetuals/tx.registry";
import * as h2xPricesTxRegistry from "./prices/tx.registry";
import * as h2xRatelimitTxRegistry from "./ratelimit/tx.registry";
import * as h2xRevshareTxRegistry from "./revshare/tx.registry";
import * as h2xRewardsTxRegistry from "./rewards/tx.registry";
import * as h2xSendingTxRegistry from "./sending/tx.registry";
import * as h2xStatsTxRegistry from "./stats/tx.registry";
import * as h2xSubaccountsTxRegistry from "./subaccounts/tx.registry";
import * as h2xVaultTxRegistry from "./vault/tx.registry";
import * as h2xVestTxRegistry from "./vest/tx.registry";
import * as h2xAccountplusTxAmino from "./accountplus/tx.amino";
import * as h2xAffiliatesTxAmino from "./affiliates/tx.amino";
import * as h2xAssetsTxAmino from "./assets/tx.amino";
import * as h2xBlocktimeTxAmino from "./blocktime/tx.amino";
import * as h2xBridgeTxAmino from "./bridge/tx.amino";
import * as h2xClobTxAmino from "./clob/tx.amino";
import * as h2xDelaymsgTxAmino from "./delaymsg/tx.amino";
import * as h2xFeetiersTxAmino from "./feetiers/tx.amino";
import * as h2xGovplusTxAmino from "./govplus/tx.amino";
import * as h2xListingTxAmino from "./listing/tx.amino";
import * as h2xPerpetualsTxAmino from "./perpetuals/tx.amino";
import * as h2xPricesTxAmino from "./prices/tx.amino";
import * as h2xRatelimitTxAmino from "./ratelimit/tx.amino";
import * as h2xRevshareTxAmino from "./revshare/tx.amino";
import * as h2xRewardsTxAmino from "./rewards/tx.amino";
import * as h2xSendingTxAmino from "./sending/tx.amino";
import * as h2xStatsTxAmino from "./stats/tx.amino";
import * as h2xSubaccountsTxAmino from "./subaccounts/tx.amino";
import * as h2xVaultTxAmino from "./vault/tx.amino";
import * as h2xVestTxAmino from "./vest/tx.amino";
export const h2xAminoConverters = {
  ...h2xAccountplusTxAmino.AminoConverter,
  ...h2xAffiliatesTxAmino.AminoConverter,
  ...h2xAssetsTxAmino.AminoConverter,
  ...h2xBlocktimeTxAmino.AminoConverter,
  ...h2xBridgeTxAmino.AminoConverter,
  ...h2xClobTxAmino.AminoConverter,
  ...h2xDelaymsgTxAmino.AminoConverter,
  ...h2xFeetiersTxAmino.AminoConverter,
  ...h2xGovplusTxAmino.AminoConverter,
  ...h2xListingTxAmino.AminoConverter,
  ...h2xPerpetualsTxAmino.AminoConverter,
  ...h2xPricesTxAmino.AminoConverter,
  ...h2xRatelimitTxAmino.AminoConverter,
  ...h2xRevshareTxAmino.AminoConverter,
  ...h2xRewardsTxAmino.AminoConverter,
  ...h2xSendingTxAmino.AminoConverter,
  ...h2xStatsTxAmino.AminoConverter,
  ...h2xSubaccountsTxAmino.AminoConverter,
  ...h2xVaultTxAmino.AminoConverter,
  ...h2xVestTxAmino.AminoConverter
};
export const h2xProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...h2xAccountplusTxRegistry.registry, ...h2xAffiliatesTxRegistry.registry, ...h2xAssetsTxRegistry.registry, ...h2xBlocktimeTxRegistry.registry, ...h2xBridgeTxRegistry.registry, ...h2xClobTxRegistry.registry, ...h2xDelaymsgTxRegistry.registry, ...h2xFeetiersTxRegistry.registry, ...h2xGovplusTxRegistry.registry, ...h2xListingTxRegistry.registry, ...h2xPerpetualsTxRegistry.registry, ...h2xPricesTxRegistry.registry, ...h2xRatelimitTxRegistry.registry, ...h2xRevshareTxRegistry.registry, ...h2xRewardsTxRegistry.registry, ...h2xSendingTxRegistry.registry, ...h2xStatsTxRegistry.registry, ...h2xSubaccountsTxRegistry.registry, ...h2xVaultTxRegistry.registry, ...h2xVestTxRegistry.registry];
export const getSigningH2xClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...h2xProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...h2xAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningH2xClient = async ({
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
  } = getSigningH2xClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};