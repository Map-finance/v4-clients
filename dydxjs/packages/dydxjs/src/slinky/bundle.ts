//@ts-nocheck
import * as _218 from "./abci/v1/vote_extensions";
import * as _219 from "./alerts/v1/alerts";
import * as _220 from "./alerts/v1/genesis";
import * as _221 from "./alerts/v1/query";
import * as _222 from "./alerts/v1/strategies";
import * as _223 from "./alerts/v1/tx";
import * as _224 from "./incentives/v1/examples/badprice";
import * as _225 from "./incentives/v1/examples/goodprice";
import * as _226 from "./incentives/v1/genesis";
import * as _227 from "./incentives/v1/query";
import * as _228 from "./marketmap/v1/genesis";
import * as _229 from "./marketmap/v1/market";
import * as _230 from "./marketmap/v1/params";
import * as _231 from "./marketmap/v1/query";
import * as _232 from "./marketmap/v1/tx";
import * as _233 from "./oracle/v1/genesis";
import * as _234 from "./oracle/v1/query";
import * as _235 from "./oracle/v1/tx";
import * as _236 from "./service/v1/oracle";
import * as _237 from "./sla/v1/genesis";
import * as _238 from "./sla/v1/query";
import * as _239 from "./sla/v1/tx";
import * as _240 from "./types/v1/currency_pair";
import * as _386 from "./alerts/v1/tx.amino";
import * as _387 from "./marketmap/v1/tx.amino";
import * as _388 from "./oracle/v1/tx.amino";
import * as _389 from "./sla/v1/tx.amino";
import * as _390 from "./alerts/v1/tx.registry";
import * as _391 from "./marketmap/v1/tx.registry";
import * as _392 from "./oracle/v1/tx.registry";
import * as _393 from "./sla/v1/tx.registry";
import * as _394 from "./alerts/v1/query.rpc.Query";
import * as _395 from "./incentives/v1/query.rpc.Query";
import * as _396 from "./marketmap/v1/query.rpc.Query";
import * as _397 from "./oracle/v1/query.rpc.Query";
import * as _398 from "./sla/v1/query.rpc.Query";
import * as _399 from "./alerts/v1/tx.rpc.msg";
import * as _400 from "./marketmap/v1/tx.rpc.msg";
import * as _401 from "./oracle/v1/tx.rpc.msg";
import * as _402 from "./sla/v1/tx.rpc.msg";
import * as _411 from "./rpc.query";
import * as _412 from "./rpc.tx";
export namespace slinky {
  export namespace abci {
    export const v1 = {
      ..._218
    };
  }
  export namespace alerts {
    export const v1 = {
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._386,
      ..._390,
      ..._394,
      ..._399
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._395
    };
  }
  export namespace marketmap {
    export const v1 = {
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._387,
      ..._391,
      ..._396,
      ..._400
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._233,
      ..._234,
      ..._235,
      ..._388,
      ..._392,
      ..._397,
      ..._401
    };
  }
  export namespace service {
    export const v1 = {
      ..._236
    };
  }
  export namespace sla {
    export const v1 = {
      ..._237,
      ..._238,
      ..._239,
      ..._389,
      ..._393,
      ..._398,
      ..._402
    };
  }
  export namespace types {
    export const v1 = {
      ..._240
    };
  }
  export const ClientFactory = {
    ..._411,
    ..._412
  };
}