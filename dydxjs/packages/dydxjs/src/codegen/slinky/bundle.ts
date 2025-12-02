//@ts-nocheck
import * as _225 from "./abci/v1/vote_extensions";
import * as _226 from "./alerts/v1/alerts";
import * as _227 from "./alerts/v1/genesis";
import * as _228 from "./alerts/v1/query";
import * as _229 from "./alerts/v1/strategies";
import * as _230 from "./alerts/v1/tx";
import * as _231 from "./incentives/v1/examples/badprice";
import * as _232 from "./incentives/v1/examples/goodprice";
import * as _233 from "./incentives/v1/genesis";
import * as _234 from "./incentives/v1/query";
import * as _235 from "./marketmap/v1/genesis";
import * as _236 from "./marketmap/v1/market";
import * as _237 from "./marketmap/v1/params";
import * as _238 from "./marketmap/v1/query";
import * as _239 from "./marketmap/v1/tx";
import * as _240 from "./oracle/v1/genesis";
import * as _241 from "./oracle/v1/query";
import * as _242 from "./oracle/v1/tx";
import * as _243 from "./service/v1/oracle";
import * as _244 from "./sla/v1/genesis";
import * as _245 from "./sla/v1/query";
import * as _246 from "./sla/v1/tx";
import * as _247 from "./types/v1/currency_pair";
import * as _400 from "./alerts/v1/tx.amino";
import * as _401 from "./marketmap/v1/tx.amino";
import * as _402 from "./oracle/v1/tx.amino";
import * as _403 from "./sla/v1/tx.amino";
import * as _404 from "./alerts/v1/tx.registry";
import * as _405 from "./marketmap/v1/tx.registry";
import * as _406 from "./oracle/v1/tx.registry";
import * as _407 from "./sla/v1/tx.registry";
import * as _408 from "./alerts/v1/query.rpc.Query";
import * as _409 from "./incentives/v1/query.rpc.Query";
import * as _410 from "./marketmap/v1/query.rpc.Query";
import * as _411 from "./oracle/v1/query.rpc.Query";
import * as _412 from "./sla/v1/query.rpc.Query";
import * as _413 from "./alerts/v1/tx.rpc.msg";
import * as _414 from "./marketmap/v1/tx.rpc.msg";
import * as _415 from "./oracle/v1/tx.rpc.msg";
import * as _416 from "./sla/v1/tx.rpc.msg";
import * as _425 from "./rpc.query";
import * as _426 from "./rpc.tx";
export namespace slinky {
  export namespace abci {
    export const v1 = {
      ..._225
    };
  }
  export namespace alerts {
    export const v1 = {
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._400,
      ..._404,
      ..._408,
      ..._413
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._409
    };
  }
  export namespace marketmap {
    export const v1 = {
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._401,
      ..._405,
      ..._410,
      ..._414
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._240,
      ..._241,
      ..._242,
      ..._402,
      ..._406,
      ..._411,
      ..._415
    };
  }
  export namespace service {
    export const v1 = {
      ..._243
    };
  }
  export namespace sla {
    export const v1 = {
      ..._244,
      ..._245,
      ..._246,
      ..._403,
      ..._407,
      ..._412,
      ..._416
    };
  }
  export namespace types {
    export const v1 = {
      ..._247
    };
  }
  export const ClientFactory = {
    ..._425,
    ..._426
  };
}