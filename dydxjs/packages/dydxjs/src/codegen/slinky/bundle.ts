//@ts-nocheck
import * as _227 from "./abci/v1/vote_extensions";
import * as _228 from "./alerts/v1/alerts";
import * as _229 from "./alerts/v1/genesis";
import * as _230 from "./alerts/v1/query";
import * as _231 from "./alerts/v1/strategies";
import * as _232 from "./alerts/v1/tx";
import * as _233 from "./incentives/v1/examples/badprice";
import * as _234 from "./incentives/v1/examples/goodprice";
import * as _235 from "./incentives/v1/genesis";
import * as _236 from "./incentives/v1/query";
import * as _237 from "./marketmap/v1/genesis";
import * as _238 from "./marketmap/v1/market";
import * as _239 from "./marketmap/v1/params";
import * as _240 from "./marketmap/v1/query";
import * as _241 from "./marketmap/v1/tx";
import * as _242 from "./oracle/v1/genesis";
import * as _243 from "./oracle/v1/query";
import * as _244 from "./oracle/v1/tx";
import * as _245 from "./service/v1/oracle";
import * as _246 from "./sla/v1/genesis";
import * as _247 from "./sla/v1/query";
import * as _248 from "./sla/v1/tx";
import * as _249 from "./types/v1/currency_pair";
import * as _405 from "./alerts/v1/tx.amino";
import * as _406 from "./marketmap/v1/tx.amino";
import * as _407 from "./oracle/v1/tx.amino";
import * as _408 from "./sla/v1/tx.amino";
import * as _409 from "./alerts/v1/tx.registry";
import * as _410 from "./marketmap/v1/tx.registry";
import * as _411 from "./oracle/v1/tx.registry";
import * as _412 from "./sla/v1/tx.registry";
import * as _413 from "./alerts/v1/query.rpc.Query";
import * as _414 from "./incentives/v1/query.rpc.Query";
import * as _415 from "./marketmap/v1/query.rpc.Query";
import * as _416 from "./oracle/v1/query.rpc.Query";
import * as _417 from "./sla/v1/query.rpc.Query";
import * as _418 from "./alerts/v1/tx.rpc.msg";
import * as _419 from "./marketmap/v1/tx.rpc.msg";
import * as _420 from "./oracle/v1/tx.rpc.msg";
import * as _421 from "./sla/v1/tx.rpc.msg";
import * as _430 from "./rpc.query";
import * as _431 from "./rpc.tx";
export namespace slinky {
  export namespace abci {
    export const v1 = {
      ..._227
    };
  }
  export namespace alerts {
    export const v1 = {
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._405,
      ..._409,
      ..._413,
      ..._418
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._414
    };
  }
  export namespace marketmap {
    export const v1 = {
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._406,
      ..._410,
      ..._415,
      ..._419
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._242,
      ..._243,
      ..._244,
      ..._407,
      ..._411,
      ..._416,
      ..._420
    };
  }
  export namespace service {
    export const v1 = {
      ..._245
    };
  }
  export namespace sla {
    export const v1 = {
      ..._246,
      ..._247,
      ..._248,
      ..._408,
      ..._412,
      ..._417,
      ..._421
    };
  }
  export namespace types {
    export const v1 = {
      ..._249
    };
  }
  export const ClientFactory = {
    ..._430,
    ..._431
  };
}