//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  dydxprotocol: {
    accountplus: new (await import("./accountplus/tx.rpc.msg")).MsgClientImpl(rpc),
    affiliates: new (await import("../dydxprotocol1/affiliates/tx.rpc.msg")).MsgClientImpl(rpc),
    assets: new (await import("./assets/tx.rpc.msg")).MsgClientImpl(rpc),
    blocktime: new (await import("../dydxprotocol1/blocktime/tx.rpc.msg")).MsgClientImpl(rpc),
    bridge: new (await import("../dydxprotocol1/bridge/tx.rpc.msg")).MsgClientImpl(rpc),
    clob: new (await import("../dydxprotocol1/clob/tx.rpc.msg")).MsgClientImpl(rpc),
    delaymsg: new (await import("../dydxprotocol1/delaymsg/tx.rpc.msg")).MsgClientImpl(rpc),
    feetiers: new (await import("../dydxprotocol1/feetiers/tx.rpc.msg")).MsgClientImpl(rpc),
    govplus: new (await import("../dydxprotocol1/govplus/tx.rpc.msg")).MsgClientImpl(rpc),
    listing: new (await import("../dydxprotocol1/listing/tx.rpc.msg")).MsgClientImpl(rpc),
    perpetuals: new (await import("../dydxprotocol1/perpetuals/tx.rpc.msg")).MsgClientImpl(rpc),
    prices: new (await import("../dydxprotocol1/prices/tx.rpc.msg")).MsgClientImpl(rpc),
    ratelimit: new (await import("../dydxprotocol1/ratelimit/tx.rpc.msg")).MsgClientImpl(rpc),
    revshare: new (await import("../dydxprotocol1/revshare/tx.rpc.msg")).MsgClientImpl(rpc),
    rewards: new (await import("../dydxprotocol1/rewards/tx.rpc.msg")).MsgClientImpl(rpc),
    sending: new (await import("../dydxprotocol1/sending/tx.rpc.msg")).MsgClientImpl(rpc),
    stats: new (await import("../dydxprotocol1/stats/tx.rpc.msg")).MsgClientImpl(rpc),
    vault: new (await import("../dydxprotocol1/vault/tx.rpc.msg")).MsgClientImpl(rpc),
    vest: new (await import("../dydxprotocol1/vest/tx.rpc.msg")).MsgClientImpl(rpc)
  }
});