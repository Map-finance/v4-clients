//@ts-nocheck
import * as _205 from "./applications/transfer/v1/genesis";
import * as _206 from "./applications/transfer/v1/query";
import * as _207 from "./applications/transfer/v1/transfer";
import * as _208 from "./applications/transfer/v1/tx";
import * as _209 from "./applications/transfer/v2/packet";
import * as _210 from "./core/channel/v1/channel";
import * as _211 from "./core/channel/v1/genesis";
import * as _212 from "./core/channel/v1/query";
import * as _213 from "./core/channel/v1/tx";
import * as _214 from "./core/client/v1/client";
import * as _215 from "./core/client/v1/genesis";
import * as _216 from "./core/client/v1/query";
import * as _217 from "./core/client/v1/tx";
import * as _218 from "./core/commitment/v1/commitment";
import * as _219 from "./core/connection/v1/connection";
import * as _220 from "./core/connection/v1/genesis";
import * as _221 from "./core/connection/v1/query";
import * as _222 from "./core/connection/v1/tx";
import * as _223 from "./lightclients/localhost/v1/localhost";
import * as _224 from "./lightclients/solomachine/v1/solomachine";
import * as _225 from "./lightclients/solomachine/v2/solomachine";
import * as _226 from "./lightclients/tendermint/v1/tendermint";
import * as _389 from "./applications/transfer/v1/tx.amino";
import * as _390 from "./core/channel/v1/tx.amino";
import * as _391 from "./core/client/v1/tx.amino";
import * as _392 from "./core/connection/v1/tx.amino";
import * as _393 from "./applications/transfer/v1/tx.registry";
import * as _394 from "./core/channel/v1/tx.registry";
import * as _395 from "./core/client/v1/tx.registry";
import * as _396 from "./core/connection/v1/tx.registry";
import * as _397 from "./applications/transfer/v1/query.rpc.Query";
import * as _398 from "./core/channel/v1/query.rpc.Query";
import * as _399 from "./core/client/v1/query.rpc.Query";
import * as _400 from "./core/connection/v1/query.rpc.Query";
import * as _401 from "./applications/transfer/v1/tx.rpc.msg";
import * as _402 from "./core/channel/v1/tx.rpc.msg";
import * as _403 from "./core/client/v1/tx.rpc.msg";
import * as _404 from "./core/connection/v1/tx.rpc.msg";
import * as _428 from "./rpc.query";
import * as _429 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._205,
        ..._206,
        ..._207,
        ..._208,
        ..._389,
        ..._393,
        ..._397,
        ..._401
      };
      export const v2 = {
        ..._209
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._210,
        ..._211,
        ..._212,
        ..._213,
        ..._390,
        ..._394,
        ..._398,
        ..._402
      };
    }
    export namespace client {
      export const v1 = {
        ..._214,
        ..._215,
        ..._216,
        ..._217,
        ..._391,
        ..._395,
        ..._399,
        ..._403
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._218
      };
    }
    export namespace connection {
      export const v1 = {
        ..._219,
        ..._220,
        ..._221,
        ..._222,
        ..._392,
        ..._396,
        ..._400,
        ..._404
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._223
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._224
      };
      export const v2 = {
        ..._225
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._226
      };
    }
  }
  export const ClientFactory = {
    ..._428,
    ..._429
  };
}