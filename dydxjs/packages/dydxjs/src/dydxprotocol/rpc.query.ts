//@ts-nocheck
import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    dydxprotocol: {
      accountplus: (await import("./accountplus/query.rpc.Query")).createRpcQueryExtension(client),
      affiliates: (await import("../dydxprotocol1/affiliates/query.rpc.Query")).createRpcQueryExtension(client),
      assets: (await import("../dydxprotocol1/assets/query.rpc.Query")).createRpcQueryExtension(client),
      blocktime: (await import("../dydxprotocol1/blocktime/query.rpc.Query")).createRpcQueryExtension(client),
      bridge: (await import("../dydxprotocol1/bridge/query.rpc.Query")).createRpcQueryExtension(client),
      clob: (await import("../dydxprotocol1/clob/query.rpc.Query")).createRpcQueryExtension(client),
      delaymsg: (await import("../dydxprotocol1/delaymsg/query.rpc.Query")).createRpcQueryExtension(client),
      epochs: (await import("../dydxprotocol1/epochs/query.rpc.Query")).createRpcQueryExtension(client),
      feetiers: (await import("../dydxprotocol1/feetiers/query.rpc.Query")).createRpcQueryExtension(client),
      govplus: (await import("../dydxprotocol1/govplus/query.rpc.Query")).createRpcQueryExtension(client),
      listing: (await import("../dydxprotocol1/listing/query.rpc.Query")).createRpcQueryExtension(client),
      perpetuals: (await import("../dydxprotocol1/perpetuals/query.rpc.Query")).createRpcQueryExtension(client),
      prices: (await import("../dydxprotocol1/prices/query.rpc.Query")).createRpcQueryExtension(client),
      ratelimit: (await import("../dydxprotocol1/ratelimit/query.rpc.Query")).createRpcQueryExtension(client),
      revshare: (await import("../dydxprotocol1/revshare/query.rpc.Query")).createRpcQueryExtension(client),
      rewards: (await import("../dydxprotocol1/rewards/query.rpc.Query")).createRpcQueryExtension(client),
      sending: (await import("../dydxprotocol1/sending/query.rpc.Query")).createRpcQueryExtension(client),
      stats: (await import("../dydxprotocol1/stats/query.rpc.Query")).createRpcQueryExtension(client),
      subaccounts: (await import("../dydxprotocol1/subaccounts/query.rpc.Query")).createRpcQueryExtension(client),
      vault: (await import("../dydxprotocol1/vault/query.rpc.Query")).createRpcQueryExtension(client),
      vest: (await import("../dydxprotocol1/vest/query.rpc.Query")).createRpcQueryExtension(client)
    }
  };
};