//@ts-nocheck
import * as _72 from "./accountplus/accountplus";
import * as _73 from "./accountplus/genesis";
import * as _74 from "./accountplus/models";
import * as _75 from "./accountplus/params";
import * as _76 from "./accountplus/query";
import * as _77 from "./accountplus/tx";
import * as _78 from "./affiliates/affiliates";
import * as _79 from "./affiliates/genesis";
import * as _80 from "./affiliates/query";
import * as _81 from "./affiliates/tx";
import * as _82 from "./assets/asset";
import * as _83 from "./assets/genesis";
import * as _84 from "./assets/query";
import * as _85 from "./assets/tx";
import * as _86 from "./blocktime/blocktime";
import * as _87 from "./blocktime/genesis";
import * as _88 from "./blocktime/params";
import * as _89 from "./blocktime/query";
import * as _90 from "./blocktime/tx";
import * as _91 from "./bridge/bridge_event_info";
import * as _92 from "./bridge/bridge_event";
import * as _93 from "./bridge/genesis";
import * as _94 from "./bridge/params";
import * as _95 from "./bridge/query";
import * as _96 from "./bridge/tx";
import * as _97 from "./clob/block_rate_limit_config";
import * as _98 from "./clob/clob_pair";
import * as _99 from "./clob/equity_tier_limit_config";
import * as _100 from "./clob/finalize_block";
import * as _101 from "./clob/genesis";
import * as _102 from "./clob/liquidations_config";
import * as _103 from "./clob/liquidations";
import * as _104 from "./clob/matches";
import * as _105 from "./clob/mev";
import * as _106 from "./clob/operation";
import * as _107 from "./clob/order_removals";
import * as _108 from "./clob/order";
import * as _109 from "./clob/process_proposer_matches_events";
import * as _110 from "./clob/query";
import * as _111 from "./clob/streaming";
import * as _112 from "./clob/tx";
import * as _113 from "./daemons/bridge/bridge";
import * as _114 from "./daemons/liquidation/liquidation";
import * as _115 from "./daemons/pricefeed/price_feed";
import * as _116 from "./delaymsg/block_message_ids";
import * as _117 from "./delaymsg/delayed_message";
import * as _118 from "./delaymsg/genesis";
import * as _119 from "./delaymsg/query";
import * as _120 from "./delaymsg/tx";
import * as _121 from "./epochs/epoch_info";
import * as _122 from "./epochs/genesis";
import * as _123 from "./epochs/query";
import * as _124 from "./feetiers/genesis";
import * as _125 from "./feetiers/params";
import * as _126 from "./feetiers/query";
import * as _127 from "./feetiers/tx";
import * as _128 from "./govplus/genesis";
import * as _129 from "./govplus/query";
import * as _130 from "./govplus/tx";
import * as _131 from "./indexer/events/events";
import * as _132 from "./indexer/indexer_manager/event";
import * as _133 from "./indexer/off_chain_updates/off_chain_updates";
import * as _134 from "./indexer/protocol/v1/clob";
import * as _135 from "./indexer/protocol/v1/perpetual";
import * as _136 from "./indexer/protocol/v1/subaccount";
import * as _137 from "./indexer/protocol/v1/vault";
import * as _138 from "./indexer/redis/redis_order";
import * as _139 from "./indexer/shared/removal_reason";
import * as _140 from "./indexer/socks/messages";
import * as _141 from "./listing/genesis";
import * as _142 from "./listing/params";
import * as _143 from "./listing/query";
import * as _144 from "./listing/tx";
import * as _145 from "./perpetuals/genesis";
import * as _146 from "./perpetuals/params";
import * as _147 from "./perpetuals/perpetual";
import * as _148 from "./perpetuals/query";
import * as _149 from "./perpetuals/tx";
import * as _150 from "./prices/genesis";
import * as _151 from "./prices/market_param";
import * as _152 from "./prices/market_price";
import * as _153 from "./prices/query";
import * as _154 from "./prices/streaming";
import * as _155 from "./prices/tx";
import * as _156 from "./ratelimit/capacity";
import * as _157 from "./ratelimit/genesis";
import * as _158 from "./ratelimit/limit_params";
import * as _159 from "./ratelimit/pending_send_packet";
import * as _160 from "./ratelimit/query";
import * as _161 from "./ratelimit/tx";
import * as _162 from "./revshare/genesis";
import * as _163 from "./revshare/params";
import * as _164 from "./revshare/query";
import * as _165 from "./revshare/revshare";
import * as _166 from "./revshare/tx";
import * as _167 from "./rewards/genesis";
import * as _168 from "./rewards/params";
import * as _169 from "./rewards/query";
import * as _170 from "./rewards/reward_share";
import * as _171 from "./rewards/tx";
import * as _172 from "./sending/genesis";
import * as _173 from "./sending/query";
import * as _174 from "./sending/transfer";
import * as _175 from "./sending/tx";
import * as _176 from "./stats/genesis";
import * as _177 from "./stats/params";
import * as _178 from "./stats/query";
import * as _179 from "./stats/stats";
import * as _180 from "./stats/tx";
import * as _181 from "./subaccounts/asset_position";
import * as _182 from "./subaccounts/genesis";
import * as _183 from "./subaccounts/perpetual_position";
import * as _184 from "./subaccounts/query";
import * as _185 from "./subaccounts/streaming";
import * as _186 from "./subaccounts/subaccount";
import * as _187 from "./vault/genesis";
import * as _188 from "./vault/params";
import * as _189 from "./vault/query";
import * as _190 from "./vault/share";
import * as _191 from "./vault/tx";
import * as _192 from "./vault/vault";
import * as _193 from "./vest/genesis";
import * as _194 from "./vest/query";
import * as _195 from "./vest/tx";
import * as _196 from "./vest/vest_entry";
import * as _306 from "./accountplus/tx.amino";
import * as _307 from "./affiliates/tx.amino";
import * as _308 from "./assets/tx.amino";
import * as _309 from "./blocktime/tx.amino";
import * as _310 from "./bridge/tx.amino";
import * as _311 from "./clob/tx.amino";
import * as _312 from "./delaymsg/tx.amino";
import * as _313 from "./feetiers/tx.amino";
import * as _314 from "./govplus/tx.amino";
import * as _315 from "./listing/tx.amino";
import * as _316 from "./perpetuals/tx.amino";
import * as _317 from "./prices/tx.amino";
import * as _318 from "./ratelimit/tx.amino";
import * as _319 from "./revshare/tx.amino";
import * as _320 from "./rewards/tx.amino";
import * as _321 from "./sending/tx.amino";
import * as _322 from "./stats/tx.amino";
import * as _323 from "./vault/tx.amino";
import * as _324 from "./vest/tx.amino";
import * as _325 from "./accountplus/tx.registry";
import * as _326 from "./affiliates/tx.registry";
import * as _327 from "./assets/tx.registry";
import * as _328 from "./blocktime/tx.registry";
import * as _329 from "./bridge/tx.registry";
import * as _330 from "./clob/tx.registry";
import * as _331 from "./delaymsg/tx.registry";
import * as _332 from "./feetiers/tx.registry";
import * as _333 from "./govplus/tx.registry";
import * as _334 from "./listing/tx.registry";
import * as _335 from "./perpetuals/tx.registry";
import * as _336 from "./prices/tx.registry";
import * as _337 from "./ratelimit/tx.registry";
import * as _338 from "./revshare/tx.registry";
import * as _339 from "./rewards/tx.registry";
import * as _340 from "./sending/tx.registry";
import * as _341 from "./stats/tx.registry";
import * as _342 from "./vault/tx.registry";
import * as _343 from "./vest/tx.registry";
import * as _344 from "./accountplus/query.rpc.Query";
import * as _345 from "./affiliates/query.rpc.Query";
import * as _346 from "./assets/query.rpc.Query";
import * as _347 from "./blocktime/query.rpc.Query";
import * as _348 from "./bridge/query.rpc.Query";
import * as _349 from "./clob/query.rpc.Query";
import * as _350 from "./delaymsg/query.rpc.Query";
import * as _351 from "./epochs/query.rpc.Query";
import * as _352 from "./feetiers/query.rpc.Query";
import * as _353 from "./govplus/query.rpc.Query";
import * as _354 from "./listing/query.rpc.Query";
import * as _355 from "./perpetuals/query.rpc.Query";
import * as _356 from "./prices/query.rpc.Query";
import * as _357 from "./ratelimit/query.rpc.Query";
import * as _358 from "./revshare/query.rpc.Query";
import * as _359 from "./rewards/query.rpc.Query";
import * as _360 from "./sending/query.rpc.Query";
import * as _361 from "./stats/query.rpc.Query";
import * as _362 from "./subaccounts/query.rpc.Query";
import * as _363 from "./vault/query.rpc.Query";
import * as _364 from "./vest/query.rpc.Query";
import * as _365 from "./accountplus/tx.rpc.msg";
import * as _366 from "./affiliates/tx.rpc.msg";
import * as _367 from "./assets/tx.rpc.msg";
import * as _368 from "./blocktime/tx.rpc.msg";
import * as _369 from "./bridge/tx.rpc.msg";
import * as _370 from "./clob/tx.rpc.msg";
import * as _371 from "./delaymsg/tx.rpc.msg";
import * as _372 from "./feetiers/tx.rpc.msg";
import * as _373 from "./govplus/tx.rpc.msg";
import * as _374 from "./listing/tx.rpc.msg";
import * as _375 from "./perpetuals/tx.rpc.msg";
import * as _376 from "./prices/tx.rpc.msg";
import * as _377 from "./ratelimit/tx.rpc.msg";
import * as _378 from "./revshare/tx.rpc.msg";
import * as _379 from "./rewards/tx.rpc.msg";
import * as _380 from "./sending/tx.rpc.msg";
import * as _381 from "./stats/tx.rpc.msg";
import * as _382 from "./vault/tx.rpc.msg";
import * as _383 from "./vest/tx.rpc.msg";
import * as _421 from "./rpc.query";
import * as _422 from "./rpc.tx";
export namespace dydxprotocol {
  export const accountplus = {
    ..._72,
    ..._73,
    ..._74,
    ..._75,
    ..._76,
    ..._77,
    ..._306,
    ..._325,
    ..._344,
    ..._365
  };
  export const affiliates = {
    ..._78,
    ..._79,
    ..._80,
    ..._81,
    ..._307,
    ..._326,
    ..._345,
    ..._366
  };
  export const assets = {
    ..._82,
    ..._83,
    ..._84,
    ..._85,
    ..._308,
    ..._327,
    ..._346,
    ..._367
  };
  export const blocktime = {
    ..._86,
    ..._87,
    ..._88,
    ..._89,
    ..._90,
    ..._309,
    ..._328,
    ..._347,
    ..._368
  };
  export const bridge = {
    ..._91,
    ..._92,
    ..._93,
    ..._94,
    ..._95,
    ..._96,
    ..._310,
    ..._329,
    ..._348,
    ..._369
  };
  export const clob = {
    ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._112,
    ..._311,
    ..._330,
    ..._349,
    ..._370
  };
  export namespace daemons {
    export const bridge = {
      ..._113
    };
    export const liquidation = {
      ..._114
    };
    export const pricefeed = {
      ..._115
    };
  }
  export const delaymsg = {
    ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._312,
    ..._331,
    ..._350,
    ..._371
  };
  export const epochs = {
    ..._121,
    ..._122,
    ..._123,
    ..._351
  };
  export const feetiers = {
    ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._313,
    ..._332,
    ..._352,
    ..._372
  };
  export const govplus = {
    ..._128,
    ..._129,
    ..._130,
    ..._314,
    ..._333,
    ..._353,
    ..._373
  };
  export namespace indexer {
    export const events = {
      ..._131
    };
    export const indexer_manager = {
      ..._132
    };
    export const off_chain_updates = {
      ..._133
    };
    export namespace protocol {
      export const v1 = {
        ..._134,
        ..._135,
        ..._136,
        ..._137
      };
    }
    export const redis = {
      ..._138
    };
    export const shared = {
      ..._139
    };
    export const socks = {
      ..._140
    };
  }
  export const listing = {
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._315,
    ..._334,
    ..._354,
    ..._374
  };
  export const perpetuals = {
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._149,
    ..._316,
    ..._335,
    ..._355,
    ..._375
  };
  export const prices = {
    ..._150,
    ..._151,
    ..._152,
    ..._153,
    ..._154,
    ..._155,
    ..._317,
    ..._336,
    ..._356,
    ..._376
  };
  export const ratelimit = {
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._318,
    ..._337,
    ..._357,
    ..._377
  };
  export const revshare = {
    ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._319,
    ..._338,
    ..._358,
    ..._378
  };
  export const rewards = {
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._320,
    ..._339,
    ..._359,
    ..._379
  };
  export const sending = {
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._321,
    ..._340,
    ..._360,
    ..._380
  };
  export const stats = {
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._322,
    ..._341,
    ..._361,
    ..._381
  };
  export const subaccounts = {
    ..._181,
    ..._182,
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._362
  };
  export const vault = {
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._323,
    ..._342,
    ..._363,
    ..._382
  };
  export const vest = {
    ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._324,
    ..._343,
    ..._364,
    ..._383
  };
  export const ClientFactory = {
    ..._421,
    ..._422
  };
}