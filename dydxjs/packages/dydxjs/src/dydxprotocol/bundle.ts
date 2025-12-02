//@ts-nocheck
import * as _72 from "./accountplus/accountplus";
import * as _73 from "./accountplus/genesis";
import * as _74 from "./accountplus/models";
import * as _75 from "./accountplus/params";
import * as _76 from "./accountplus/query";
import * as _77 from "./accountplus/tx";
import * as _78 from "../dydxprotocol1/accountplus/accountplus";
import * as _79 from "../dydxprotocol1/accountplus/genesis";
import * as _80 from "./affiliates/affiliates";
import * as _81 from "./affiliates/genesis";
import * as _82 from "./affiliates/query";
import * as _83 from "./affiliates/tx";
import * as _84 from "../dydxprotocol1/affiliates/affiliates";
import * as _85 from "../dydxprotocol1/affiliates/genesis";
import * as _86 from "../dydxprotocol1/affiliates/query";
import * as _87 from "../dydxprotocol1/affiliates/tx";
import * as _88 from "./assets/asset";
import * as _89 from "./assets/genesis";
import * as _90 from "./assets/query";
import * as _91 from "./assets/tx";
import * as _92 from "../dydxprotocol1/assets/asset";
import * as _93 from "../dydxprotocol1/assets/genesis";
import * as _94 from "../dydxprotocol1/assets/query";
import * as _95 from "../dydxprotocol1/assets/tx";
import * as _96 from "./blocktime/blocktime";
import * as _97 from "./blocktime/genesis";
import * as _98 from "./blocktime/params";
import * as _99 from "./blocktime/query";
import * as _100 from "./blocktime/tx";
import * as _101 from "../dydxprotocol1/blocktime/blocktime";
import * as _102 from "../dydxprotocol1/blocktime/genesis";
import * as _103 from "../dydxprotocol1/blocktime/params";
import * as _104 from "../dydxprotocol1/blocktime/query";
import * as _105 from "../dydxprotocol1/blocktime/tx";
import * as _106 from "./bridge/bridge_event_info";
import * as _107 from "./bridge/bridge_event";
import * as _108 from "./bridge/genesis";
import * as _109 from "./bridge/params";
import * as _110 from "./bridge/query";
import * as _111 from "./bridge/tx";
import * as _112 from "../dydxprotocol1/bridge/bridge_event_info";
import * as _113 from "../dydxprotocol1/bridge/bridge_event";
import * as _114 from "../dydxprotocol1/bridge/genesis";
import * as _115 from "../dydxprotocol1/bridge/params";
import * as _116 from "../dydxprotocol1/bridge/query";
import * as _117 from "../dydxprotocol1/bridge/tx";
import * as _118 from "./clob/block_rate_limit_config";
import * as _119 from "./clob/clob_pair";
import * as _120 from "./clob/equity_tier_limit_config";
import * as _121 from "./clob/finalize_block";
import * as _122 from "./clob/genesis";
import * as _123 from "./clob/liquidations_config";
import * as _124 from "./clob/liquidations";
import * as _125 from "./clob/matches";
import * as _126 from "./clob/mev";
import * as _127 from "./clob/operation";
import * as _128 from "./clob/order_removals";
import * as _129 from "./clob/order";
import * as _130 from "./clob/process_proposer_matches_events";
import * as _131 from "./clob/query";
import * as _132 from "./clob/streaming";
import * as _133 from "./clob/tx";
import * as _134 from "../dydxprotocol1/clob/block_rate_limit_config";
import * as _135 from "../dydxprotocol1/clob/clob_pair";
import * as _136 from "../dydxprotocol1/clob/equity_tier_limit_config";
import * as _137 from "../dydxprotocol1/clob/genesis";
import * as _138 from "../dydxprotocol1/clob/liquidations_config";
import * as _139 from "../dydxprotocol1/clob/liquidations";
import * as _140 from "../dydxprotocol1/clob/matches";
import * as _141 from "../dydxprotocol1/clob/mev";
import * as _142 from "../dydxprotocol1/clob/operation";
import * as _143 from "../dydxprotocol1/clob/order_removals";
import * as _144 from "../dydxprotocol1/clob/order";
import * as _145 from "../dydxprotocol1/clob/process_proposer_matches_events";
import * as _146 from "../dydxprotocol1/clob/query";
import * as _147 from "../dydxprotocol1/clob/tx";
import * as _148 from "./daemons/bridge/bridge";
import * as _149 from "../dydxprotocol1/daemons/bridge/bridge";
import * as _150 from "./daemons/liquidation/liquidation";
import * as _151 from "../dydxprotocol1/daemons/liquidation/liquidation";
import * as _152 from "./daemons/pricefeed/price_feed";
import * as _153 from "../dydxprotocol1/daemons/pricefeed/price_feed";
import * as _154 from "./delaymsg/block_message_ids";
import * as _155 from "./delaymsg/delayed_message";
import * as _156 from "./delaymsg/genesis";
import * as _157 from "./delaymsg/query";
import * as _158 from "./delaymsg/tx";
import * as _159 from "../dydxprotocol1/delaymsg/block_message_ids";
import * as _160 from "../dydxprotocol1/delaymsg/delayed_message";
import * as _161 from "../dydxprotocol1/delaymsg/genesis";
import * as _162 from "../dydxprotocol1/delaymsg/query";
import * as _163 from "../dydxprotocol1/delaymsg/tx";
import * as _164 from "./epochs/epoch_info";
import * as _165 from "./epochs/genesis";
import * as _166 from "./epochs/query";
import * as _167 from "../dydxprotocol1/epochs/epoch_info";
import * as _168 from "../dydxprotocol1/epochs/genesis";
import * as _169 from "../dydxprotocol1/epochs/query";
import * as _170 from "./feetiers/genesis";
import * as _171 from "./feetiers/params";
import * as _172 from "./feetiers/query";
import * as _173 from "./feetiers/tx";
import * as _174 from "../dydxprotocol1/feetiers/genesis";
import * as _175 from "../dydxprotocol1/feetiers/params";
import * as _176 from "../dydxprotocol1/feetiers/query";
import * as _177 from "../dydxprotocol1/feetiers/tx";
import * as _178 from "./govplus/genesis";
import * as _179 from "./govplus/query";
import * as _180 from "./govplus/tx";
import * as _181 from "../dydxprotocol1/govplus/genesis";
import * as _182 from "../dydxprotocol1/govplus/query";
import * as _183 from "../dydxprotocol1/govplus/tx";
import * as _184 from "./indexer/events/events";
import * as _185 from "../dydxprotocol1/indexer/events/events";
import * as _186 from "./indexer/indexer_manager/event";
import * as _187 from "../dydxprotocol1/indexer/indexer_manager/event";
import * as _188 from "./indexer/off_chain_updates/off_chain_updates";
import * as _189 from "../dydxprotocol1/indexer/off_chain_updates/off_chain_updates";
import * as _190 from "./indexer/protocol/v1/clob";
import * as _191 from "./indexer/protocol/v1/perpetual";
import * as _192 from "./indexer/protocol/v1/subaccount";
import * as _193 from "./indexer/protocol/v1/vault";
import * as _194 from "../dydxprotocol1/indexer/protocol/v1/clob";
import * as _195 from "../dydxprotocol1/indexer/protocol/v1/perpetual";
import * as _196 from "../dydxprotocol1/indexer/protocol/v1/subaccount";
import * as _197 from "../dydxprotocol1/indexer/protocol/v1/vault";
import * as _198 from "./indexer/redis/redis_order";
import * as _199 from "../dydxprotocol1/indexer/redis/redis_order";
import * as _200 from "./indexer/shared/removal_reason";
import * as _201 from "../dydxprotocol1/indexer/shared/removal_reason";
import * as _202 from "./indexer/socks/messages";
import * as _203 from "../dydxprotocol1/indexer/socks/messages";
import * as _204 from "./listing/genesis";
import * as _205 from "./listing/params";
import * as _206 from "./listing/query";
import * as _207 from "./listing/tx";
import * as _208 from "../dydxprotocol1/listing/genesis";
import * as _209 from "../dydxprotocol1/listing/params";
import * as _210 from "../dydxprotocol1/listing/query";
import * as _211 from "../dydxprotocol1/listing/tx";
import * as _212 from "./perpetuals/genesis";
import * as _213 from "./perpetuals/params";
import * as _214 from "./perpetuals/perpetual";
import * as _215 from "./perpetuals/query";
import * as _216 from "./perpetuals/tx";
import * as _217 from "../dydxprotocol1/perpetuals/genesis";
import * as _218 from "../dydxprotocol1/perpetuals/params";
import * as _219 from "../dydxprotocol1/perpetuals/perpetual";
import * as _220 from "../dydxprotocol1/perpetuals/query";
import * as _221 from "../dydxprotocol1/perpetuals/tx";
import * as _222 from "./prices/genesis";
import * as _223 from "./prices/market_param";
import * as _224 from "./prices/market_price";
import * as _225 from "./prices/query";
import * as _226 from "./prices/streaming";
import * as _227 from "./prices/tx";
import * as _228 from "../dydxprotocol1/prices/genesis";
import * as _229 from "../dydxprotocol1/prices/market_param";
import * as _230 from "../dydxprotocol1/prices/market_price";
import * as _231 from "../dydxprotocol1/prices/query";
import * as _232 from "../dydxprotocol1/prices/tx";
import * as _233 from "./ratelimit/capacity";
import * as _234 from "./ratelimit/genesis";
import * as _235 from "./ratelimit/limit_params";
import * as _236 from "./ratelimit/pending_send_packet";
import * as _237 from "./ratelimit/query";
import * as _238 from "./ratelimit/tx";
import * as _239 from "../dydxprotocol1/ratelimit/capacity";
import * as _240 from "../dydxprotocol1/ratelimit/genesis";
import * as _241 from "../dydxprotocol1/ratelimit/limit_params";
import * as _242 from "../dydxprotocol1/ratelimit/pending_send_packet";
import * as _243 from "../dydxprotocol1/ratelimit/query";
import * as _244 from "../dydxprotocol1/ratelimit/tx";
import * as _245 from "./revshare/genesis";
import * as _246 from "./revshare/params";
import * as _247 from "./revshare/query";
import * as _248 from "./revshare/revshare";
import * as _249 from "./revshare/tx";
import * as _250 from "../dydxprotocol1/revshare/genesis";
import * as _251 from "../dydxprotocol1/revshare/params";
import * as _252 from "../dydxprotocol1/revshare/query";
import * as _253 from "../dydxprotocol1/revshare/revshare";
import * as _254 from "../dydxprotocol1/revshare/tx";
import * as _255 from "./rewards/genesis";
import * as _256 from "./rewards/params";
import * as _257 from "./rewards/query";
import * as _258 from "./rewards/reward_share";
import * as _259 from "./rewards/tx";
import * as _260 from "../dydxprotocol1/rewards/genesis";
import * as _261 from "../dydxprotocol1/rewards/params";
import * as _262 from "../dydxprotocol1/rewards/query";
import * as _263 from "../dydxprotocol1/rewards/reward_share";
import * as _264 from "../dydxprotocol1/rewards/tx";
import * as _265 from "./sending/genesis";
import * as _266 from "./sending/query";
import * as _267 from "./sending/transfer";
import * as _268 from "./sending/tx";
import * as _269 from "../dydxprotocol1/sending/genesis";
import * as _270 from "../dydxprotocol1/sending/query";
import * as _271 from "../dydxprotocol1/sending/transfer";
import * as _272 from "../dydxprotocol1/sending/tx";
import * as _273 from "./stats/genesis";
import * as _274 from "./stats/params";
import * as _275 from "./stats/query";
import * as _276 from "./stats/stats";
import * as _277 from "./stats/tx";
import * as _278 from "../dydxprotocol1/stats/genesis";
import * as _279 from "../dydxprotocol1/stats/params";
import * as _280 from "../dydxprotocol1/stats/query";
import * as _281 from "../dydxprotocol1/stats/stats";
import * as _282 from "../dydxprotocol1/stats/tx";
import * as _283 from "./subaccounts/asset_position";
import * as _284 from "./subaccounts/genesis";
import * as _285 from "./subaccounts/perpetual_position";
import * as _286 from "./subaccounts/query";
import * as _287 from "./subaccounts/streaming";
import * as _288 from "./subaccounts/subaccount";
import * as _289 from "../dydxprotocol1/subaccounts/asset_position";
import * as _290 from "../dydxprotocol1/subaccounts/genesis";
import * as _291 from "../dydxprotocol1/subaccounts/perpetual_position";
import * as _292 from "../dydxprotocol1/subaccounts/query";
import * as _293 from "../dydxprotocol1/subaccounts/streaming";
import * as _294 from "../dydxprotocol1/subaccounts/subaccount";
import * as _295 from "./vault/genesis";
import * as _296 from "./vault/params";
import * as _297 from "./vault/query";
import * as _298 from "./vault/share";
import * as _299 from "./vault/tx";
import * as _300 from "./vault/vault";
import * as _301 from "../dydxprotocol1/vault/genesis";
import * as _302 from "../dydxprotocol1/vault/params";
import * as _303 from "../dydxprotocol1/vault/query";
import * as _304 from "../dydxprotocol1/vault/share";
import * as _305 from "../dydxprotocol1/vault/tx";
import * as _306 from "../dydxprotocol1/vault/vault";
import * as _307 from "./vest/genesis";
import * as _308 from "./vest/query";
import * as _309 from "./vest/tx";
import * as _310 from "./vest/vest_entry";
import * as _311 from "../dydxprotocol1/vest/genesis";
import * as _312 from "../dydxprotocol1/vest/query";
import * as _313 from "../dydxprotocol1/vest/tx";
import * as _314 from "../dydxprotocol1/vest/vest_entry";
import * as _424 from "./accountplus/tx.amino";
import * as _425 from "./affiliates/tx.amino";
import * as _426 from "./assets/tx.amino";
import * as _427 from "./blocktime/tx.amino";
import * as _428 from "./bridge/tx.amino";
import * as _429 from "./clob/tx.amino";
import * as _430 from "./delaymsg/tx.amino";
import * as _431 from "./feetiers/tx.amino";
import * as _432 from "./govplus/tx.amino";
import * as _433 from "./listing/tx.amino";
import * as _434 from "./perpetuals/tx.amino";
import * as _435 from "./prices/tx.amino";
import * as _436 from "./ratelimit/tx.amino";
import * as _437 from "./revshare/tx.amino";
import * as _438 from "./rewards/tx.amino";
import * as _439 from "./sending/tx.amino";
import * as _440 from "./stats/tx.amino";
import * as _441 from "./vault/tx.amino";
import * as _442 from "./vest/tx.amino";
import * as _443 from "../dydxprotocol1/affiliates/tx.amino";
import * as _444 from "../dydxprotocol1/blocktime/tx.amino";
import * as _445 from "../dydxprotocol1/bridge/tx.amino";
import * as _446 from "../dydxprotocol1/clob/tx.amino";
import * as _447 from "../dydxprotocol1/delaymsg/tx.amino";
import * as _448 from "../dydxprotocol1/feetiers/tx.amino";
import * as _449 from "../dydxprotocol1/govplus/tx.amino";
import * as _450 from "../dydxprotocol1/listing/tx.amino";
import * as _451 from "../dydxprotocol1/perpetuals/tx.amino";
import * as _452 from "../dydxprotocol1/prices/tx.amino";
import * as _453 from "../dydxprotocol1/ratelimit/tx.amino";
import * as _454 from "../dydxprotocol1/revshare/tx.amino";
import * as _455 from "../dydxprotocol1/rewards/tx.amino";
import * as _456 from "../dydxprotocol1/sending/tx.amino";
import * as _457 from "../dydxprotocol1/stats/tx.amino";
import * as _458 from "../dydxprotocol1/vault/tx.amino";
import * as _459 from "../dydxprotocol1/vest/tx.amino";
import * as _460 from "./accountplus/tx.registry";
import * as _461 from "./affiliates/tx.registry";
import * as _462 from "./assets/tx.registry";
import * as _463 from "./blocktime/tx.registry";
import * as _464 from "./bridge/tx.registry";
import * as _465 from "./clob/tx.registry";
import * as _466 from "./delaymsg/tx.registry";
import * as _467 from "./feetiers/tx.registry";
import * as _468 from "./govplus/tx.registry";
import * as _469 from "./listing/tx.registry";
import * as _470 from "./perpetuals/tx.registry";
import * as _471 from "./prices/tx.registry";
import * as _472 from "./ratelimit/tx.registry";
import * as _473 from "./revshare/tx.registry";
import * as _474 from "./rewards/tx.registry";
import * as _475 from "./sending/tx.registry";
import * as _476 from "./stats/tx.registry";
import * as _477 from "./vault/tx.registry";
import * as _478 from "./vest/tx.registry";
import * as _479 from "../dydxprotocol1/affiliates/tx.registry";
import * as _480 from "../dydxprotocol1/blocktime/tx.registry";
import * as _481 from "../dydxprotocol1/bridge/tx.registry";
import * as _482 from "../dydxprotocol1/clob/tx.registry";
import * as _483 from "../dydxprotocol1/delaymsg/tx.registry";
import * as _484 from "../dydxprotocol1/feetiers/tx.registry";
import * as _485 from "../dydxprotocol1/govplus/tx.registry";
import * as _486 from "../dydxprotocol1/listing/tx.registry";
import * as _487 from "../dydxprotocol1/perpetuals/tx.registry";
import * as _488 from "../dydxprotocol1/prices/tx.registry";
import * as _489 from "../dydxprotocol1/ratelimit/tx.registry";
import * as _490 from "../dydxprotocol1/revshare/tx.registry";
import * as _491 from "../dydxprotocol1/rewards/tx.registry";
import * as _492 from "../dydxprotocol1/sending/tx.registry";
import * as _493 from "../dydxprotocol1/stats/tx.registry";
import * as _494 from "../dydxprotocol1/vault/tx.registry";
import * as _495 from "../dydxprotocol1/vest/tx.registry";
import * as _496 from "./accountplus/query.rpc.Query";
import * as _497 from "./affiliates/query.rpc.Query";
import * as _498 from "./assets/query.rpc.Query";
import * as _499 from "./blocktime/query.rpc.Query";
import * as _500 from "./bridge/query.rpc.Query";
import * as _501 from "./clob/query.rpc.Query";
import * as _502 from "./delaymsg/query.rpc.Query";
import * as _503 from "./epochs/query.rpc.Query";
import * as _504 from "./feetiers/query.rpc.Query";
import * as _505 from "./govplus/query.rpc.Query";
import * as _506 from "./listing/query.rpc.Query";
import * as _507 from "./perpetuals/query.rpc.Query";
import * as _508 from "./prices/query.rpc.Query";
import * as _509 from "./ratelimit/query.rpc.Query";
import * as _510 from "./revshare/query.rpc.Query";
import * as _511 from "./rewards/query.rpc.Query";
import * as _512 from "./sending/query.rpc.Query";
import * as _513 from "./stats/query.rpc.Query";
import * as _514 from "./subaccounts/query.rpc.Query";
import * as _515 from "./vault/query.rpc.Query";
import * as _516 from "./vest/query.rpc.Query";
import * as _517 from "../dydxprotocol1/affiliates/query.rpc.Query";
import * as _518 from "../dydxprotocol1/assets/query.rpc.Query";
import * as _519 from "../dydxprotocol1/blocktime/query.rpc.Query";
import * as _520 from "../dydxprotocol1/bridge/query.rpc.Query";
import * as _521 from "../dydxprotocol1/clob/query.rpc.Query";
import * as _522 from "../dydxprotocol1/delaymsg/query.rpc.Query";
import * as _523 from "../dydxprotocol1/epochs/query.rpc.Query";
import * as _524 from "../dydxprotocol1/feetiers/query.rpc.Query";
import * as _525 from "../dydxprotocol1/govplus/query.rpc.Query";
import * as _526 from "../dydxprotocol1/listing/query.rpc.Query";
import * as _527 from "../dydxprotocol1/perpetuals/query.rpc.Query";
import * as _528 from "../dydxprotocol1/prices/query.rpc.Query";
import * as _529 from "../dydxprotocol1/ratelimit/query.rpc.Query";
import * as _530 from "../dydxprotocol1/revshare/query.rpc.Query";
import * as _531 from "../dydxprotocol1/rewards/query.rpc.Query";
import * as _532 from "../dydxprotocol1/sending/query.rpc.Query";
import * as _533 from "../dydxprotocol1/stats/query.rpc.Query";
import * as _534 from "../dydxprotocol1/subaccounts/query.rpc.Query";
import * as _535 from "../dydxprotocol1/vault/query.rpc.Query";
import * as _536 from "../dydxprotocol1/vest/query.rpc.Query";
import * as _537 from "./accountplus/tx.rpc.msg";
import * as _538 from "./affiliates/tx.rpc.msg";
import * as _539 from "./assets/tx.rpc.msg";
import * as _540 from "./blocktime/tx.rpc.msg";
import * as _541 from "./bridge/tx.rpc.msg";
import * as _542 from "./clob/tx.rpc.msg";
import * as _543 from "./delaymsg/tx.rpc.msg";
import * as _544 from "./feetiers/tx.rpc.msg";
import * as _545 from "./govplus/tx.rpc.msg";
import * as _546 from "./listing/tx.rpc.msg";
import * as _547 from "./perpetuals/tx.rpc.msg";
import * as _548 from "./prices/tx.rpc.msg";
import * as _549 from "./ratelimit/tx.rpc.msg";
import * as _550 from "./revshare/tx.rpc.msg";
import * as _551 from "./rewards/tx.rpc.msg";
import * as _552 from "./sending/tx.rpc.msg";
import * as _553 from "./stats/tx.rpc.msg";
import * as _554 from "./vault/tx.rpc.msg";
import * as _555 from "./vest/tx.rpc.msg";
import * as _556 from "../dydxprotocol1/affiliates/tx.rpc.msg";
import * as _557 from "../dydxprotocol1/blocktime/tx.rpc.msg";
import * as _558 from "../dydxprotocol1/bridge/tx.rpc.msg";
import * as _559 from "../dydxprotocol1/clob/tx.rpc.msg";
import * as _560 from "../dydxprotocol1/delaymsg/tx.rpc.msg";
import * as _561 from "../dydxprotocol1/feetiers/tx.rpc.msg";
import * as _562 from "../dydxprotocol1/govplus/tx.rpc.msg";
import * as _563 from "../dydxprotocol1/listing/tx.rpc.msg";
import * as _564 from "../dydxprotocol1/perpetuals/tx.rpc.msg";
import * as _565 from "../dydxprotocol1/prices/tx.rpc.msg";
import * as _566 from "../dydxprotocol1/ratelimit/tx.rpc.msg";
import * as _567 from "../dydxprotocol1/revshare/tx.rpc.msg";
import * as _568 from "../dydxprotocol1/rewards/tx.rpc.msg";
import * as _569 from "../dydxprotocol1/sending/tx.rpc.msg";
import * as _570 from "../dydxprotocol1/stats/tx.rpc.msg";
import * as _571 from "../dydxprotocol1/vault/tx.rpc.msg";
import * as _572 from "../dydxprotocol1/vest/tx.rpc.msg";
import * as _610 from "./rpc.query";
import * as _611 from "./rpc.tx";
export namespace dydxprotocol {
  export const accountplus = {
    ..._72,
    ..._73,
    ..._74,
    ..._75,
    ..._76,
    ..._77,
    ..._78,
    ..._79,
    ..._424,
    ..._460,
    ..._496,
    ..._537
  };
  export const affiliates = {
    ..._80,
    ..._81,
    ..._82,
    ..._83,
    ..._84,
    ..._85,
    ..._86,
    ..._87,
    ..._425,
    ..._443,
    ..._461,
    ..._479,
    ..._497,
    ..._517,
    ..._538,
    ..._556
  };
  export const assets = {
    ..._88,
    ..._89,
    ..._90,
    ..._91,
    ..._92,
    ..._93,
    ..._94,
    ..._95,
    ..._426,
    ..._462,
    ..._498,
    ..._518,
    ..._539
  };
  export const blocktime = {
    ..._96,
    ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._427,
    ..._444,
    ..._463,
    ..._480,
    ..._499,
    ..._519,
    ..._540,
    ..._557
  };
  export const bridge = {
    ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._428,
    ..._445,
    ..._464,
    ..._481,
    ..._500,
    ..._520,
    ..._541,
    ..._558
  };
  export const clob = {
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._429,
    ..._446,
    ..._465,
    ..._482,
    ..._501,
    ..._521,
    ..._542,
    ..._559
  };
  export namespace daemons {
    export const bridge = {
      ..._148,
      ..._149
    };
    export const liquidation = {
      ..._150,
      ..._151
    };
    export const pricefeed = {
      ..._152,
      ..._153
    };
  }
  export const delaymsg = {
    ..._154,
    ..._155,
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._430,
    ..._447,
    ..._466,
    ..._483,
    ..._502,
    ..._522,
    ..._543,
    ..._560
  };
  export const epochs = {
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._503,
    ..._523
  };
  export const feetiers = {
    ..._170,
    ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._431,
    ..._448,
    ..._467,
    ..._484,
    ..._504,
    ..._524,
    ..._544,
    ..._561
  };
  export const govplus = {
    ..._178,
    ..._179,
    ..._180,
    ..._181,
    ..._182,
    ..._183,
    ..._432,
    ..._449,
    ..._468,
    ..._485,
    ..._505,
    ..._525,
    ..._545,
    ..._562
  };
  export namespace indexer {
    export const events = {
      ..._184,
      ..._185
    };
    export const indexer_manager = {
      ..._186,
      ..._187
    };
    export const off_chain_updates = {
      ..._188,
      ..._189
    };
    export namespace protocol {
      export const v1 = {
        ..._190,
        ..._191,
        ..._192,
        ..._193,
        ..._194,
        ..._195,
        ..._196,
        ..._197
      };
    }
    export const redis = {
      ..._198,
      ..._199
    };
    export const shared = {
      ..._200,
      ..._201
    };
    export const socks = {
      ..._202,
      ..._203
    };
  }
  export const listing = {
    ..._204,
    ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._433,
    ..._450,
    ..._469,
    ..._486,
    ..._506,
    ..._526,
    ..._546,
    ..._563
  };
  export const perpetuals = {
    ..._212,
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._217,
    ..._218,
    ..._219,
    ..._220,
    ..._221,
    ..._434,
    ..._451,
    ..._470,
    ..._487,
    ..._507,
    ..._527,
    ..._547,
    ..._564
  };
  export const prices = {
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._232,
    ..._435,
    ..._452,
    ..._471,
    ..._488,
    ..._508,
    ..._528,
    ..._548,
    ..._565
  };
  export const ratelimit = {
    ..._233,
    ..._234,
    ..._235,
    ..._236,
    ..._237,
    ..._238,
    ..._239,
    ..._240,
    ..._241,
    ..._242,
    ..._243,
    ..._244,
    ..._436,
    ..._453,
    ..._472,
    ..._489,
    ..._509,
    ..._529,
    ..._549,
    ..._566
  };
  export const revshare = {
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._249,
    ..._250,
    ..._251,
    ..._252,
    ..._253,
    ..._254,
    ..._437,
    ..._454,
    ..._473,
    ..._490,
    ..._510,
    ..._530,
    ..._550,
    ..._567
  };
  export const rewards = {
    ..._255,
    ..._256,
    ..._257,
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._263,
    ..._264,
    ..._438,
    ..._455,
    ..._474,
    ..._491,
    ..._511,
    ..._531,
    ..._551,
    ..._568
  };
  export const sending = {
    ..._265,
    ..._266,
    ..._267,
    ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._439,
    ..._456,
    ..._475,
    ..._492,
    ..._512,
    ..._532,
    ..._552,
    ..._569
  };
  export const stats = {
    ..._273,
    ..._274,
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._280,
    ..._281,
    ..._282,
    ..._440,
    ..._457,
    ..._476,
    ..._493,
    ..._513,
    ..._533,
    ..._553,
    ..._570
  };
  export const subaccounts = {
    ..._283,
    ..._284,
    ..._285,
    ..._286,
    ..._287,
    ..._288,
    ..._289,
    ..._290,
    ..._291,
    ..._292,
    ..._293,
    ..._294,
    ..._514,
    ..._534
  };
  export const vault = {
    ..._295,
    ..._296,
    ..._297,
    ..._298,
    ..._299,
    ..._300,
    ..._301,
    ..._302,
    ..._303,
    ..._304,
    ..._305,
    ..._306,
    ..._441,
    ..._458,
    ..._477,
    ..._494,
    ..._515,
    ..._535,
    ..._554,
    ..._571
  };
  export const vest = {
    ..._307,
    ..._308,
    ..._309,
    ..._310,
    ..._311,
    ..._312,
    ..._313,
    ..._314,
    ..._442,
    ..._459,
    ..._478,
    ..._495,
    ..._516,
    ..._536,
    ..._555,
    ..._572
  };
  export const ClientFactory = {
    ..._610,
    ..._611
  };
}