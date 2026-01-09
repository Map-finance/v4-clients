//@ts-nocheck
import * as _238 from "./abci/v1/vote_extensions";
import * as _239 from "./alerts/v1/alerts";
import * as _240 from "./alerts/v1/genesis";
import * as _241 from "./alerts/v1/query";
import * as _242 from "./alerts/v1/strategies";
import * as _243 from "./alerts/v1/tx";
import * as _244 from "./incentives/v1/examples/badprice";
import * as _245 from "./incentives/v1/examples/goodprice";
import * as _246 from "./incentives/v1/genesis";
import * as _247 from "./incentives/v1/query";
import * as _248 from "./marketmap/v1/genesis";
import * as _249 from "./marketmap/v1/market";
import * as _250 from "./marketmap/v1/params";
import * as _251 from "./marketmap/v1/query";
import * as _252 from "./marketmap/v1/tx";
import * as _253 from "./oracle/v1/genesis";
import * as _254 from "./oracle/v1/query";
import * as _255 from "./oracle/v1/tx";
import * as _256 from "./service/v1/oracle";
import * as _257 from "./sla/v1/genesis";
import * as _258 from "./sla/v1/query";
import * as _259 from "./sla/v1/tx";
import * as _260 from "./types/v1/currency_pair";
import * as _428 from "./alerts/v1/tx.amino";
import * as _429 from "./marketmap/v1/tx.amino";
import * as _430 from "./oracle/v1/tx.amino";
import * as _431 from "./sla/v1/tx.amino";
import * as _432 from "./alerts/v1/tx.registry";
import * as _433 from "./marketmap/v1/tx.registry";
import * as _434 from "./oracle/v1/tx.registry";
import * as _435 from "./sla/v1/tx.registry";
import * as _436 from "./alerts/v1/query.rpc.Query";
import * as _437 from "./incentives/v1/query.rpc.Query";
import * as _438 from "./marketmap/v1/query.rpc.Query";
import * as _439 from "./oracle/v1/query.rpc.Query";
import * as _440 from "./sla/v1/query.rpc.Query";
import * as _441 from "./alerts/v1/tx.rpc.msg";
import * as _442 from "./marketmap/v1/tx.rpc.msg";
import * as _443 from "./oracle/v1/tx.rpc.msg";
import * as _444 from "./sla/v1/tx.rpc.msg";
import * as _453 from "./rpc.query";
import * as _454 from "./rpc.tx";
export namespace slinky {
  export namespace abci {
    export const v1 = {
      ..._238
    };
  }
  export namespace alerts {
    export const v1 = {
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._428,
      ..._432,
      ..._436,
      ..._441
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._437
    };
  }
  export namespace marketmap {
    export const v1 = {
      ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._429,
      ..._433,
      ..._438,
      ..._442
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._253,
      ..._254,
      ..._255,
      ..._430,
      ..._434,
      ..._439,
      ..._443
    };
  }
  export namespace service {
    export const v1 = {
      ..._256
    };
  }
  export namespace sla {
    export const v1 = {
      ..._257,
      ..._258,
      ..._259,
      ..._431,
      ..._435,
      ..._440,
      ..._444
    };
  }
  export namespace types {
    export const v1 = {
      ..._260
    };
  }
  export const ClientFactory = {
    ..._453,
    ..._454
  };
}