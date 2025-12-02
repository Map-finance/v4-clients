//@ts-nocheck
import * as _343 from "./abci/v1/vote_extensions";
import * as _344 from "./alerts/v1/alerts";
import * as _345 from "./alerts/v1/genesis";
import * as _346 from "./alerts/v1/query";
import * as _347 from "./alerts/v1/strategies";
import * as _348 from "./alerts/v1/tx";
import * as _349 from "./incentives/v1/examples/badprice";
import * as _350 from "./incentives/v1/examples/goodprice";
import * as _351 from "./incentives/v1/genesis";
import * as _352 from "./incentives/v1/query";
import * as _353 from "./marketmap/v1/genesis";
import * as _354 from "./marketmap/v1/market";
import * as _355 from "./marketmap/v1/params";
import * as _356 from "./marketmap/v1/query";
import * as _357 from "./marketmap/v1/tx";
import * as _358 from "./oracle/v1/genesis";
import * as _359 from "./oracle/v1/query";
import * as _360 from "./oracle/v1/tx";
import * as _361 from "./service/v1/oracle";
import * as _362 from "./sla/v1/genesis";
import * as _363 from "./sla/v1/query";
import * as _364 from "./sla/v1/tx";
import * as _365 from "./types/v1/currency_pair";
import * as _589 from "./alerts/v1/tx.amino";
import * as _590 from "./marketmap/v1/tx.amino";
import * as _591 from "./oracle/v1/tx.amino";
import * as _592 from "./sla/v1/tx.amino";
import * as _593 from "./alerts/v1/tx.registry";
import * as _594 from "./marketmap/v1/tx.registry";
import * as _595 from "./oracle/v1/tx.registry";
import * as _596 from "./sla/v1/tx.registry";
import * as _597 from "./alerts/v1/query.rpc.Query";
import * as _598 from "./incentives/v1/query.rpc.Query";
import * as _599 from "./marketmap/v1/query.rpc.Query";
import * as _600 from "./oracle/v1/query.rpc.Query";
import * as _601 from "./sla/v1/query.rpc.Query";
import * as _602 from "./alerts/v1/tx.rpc.msg";
import * as _603 from "./marketmap/v1/tx.rpc.msg";
import * as _604 from "./oracle/v1/tx.rpc.msg";
import * as _605 from "./sla/v1/tx.rpc.msg";
import * as _614 from "./rpc.query";
import * as _615 from "./rpc.tx";
export namespace slinky {
  export namespace abci {
    export const v1 = {
      ..._343
    };
  }
  export namespace alerts {
    export const v1 = {
      ..._344,
      ..._345,
      ..._346,
      ..._347,
      ..._348,
      ..._589,
      ..._593,
      ..._597,
      ..._602
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._349,
      ..._350,
      ..._351,
      ..._352,
      ..._598
    };
  }
  export namespace marketmap {
    export const v1 = {
      ..._353,
      ..._354,
      ..._355,
      ..._356,
      ..._357,
      ..._590,
      ..._594,
      ..._599,
      ..._603
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._358,
      ..._359,
      ..._360,
      ..._591,
      ..._595,
      ..._600,
      ..._604
    };
  }
  export namespace service {
    export const v1 = {
      ..._361
    };
  }
  export namespace sla {
    export const v1 = {
      ..._362,
      ..._363,
      ..._364,
      ..._592,
      ..._596,
      ..._601,
      ..._605
    };
  }
  export namespace types {
    export const v1 = {
      ..._365
    };
  }
  export const ClientFactory = {
    ..._614,
    ..._615
  };
}