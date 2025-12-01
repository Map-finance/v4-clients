//@ts-nocheck
import * as _196 from "./applications/transfer/v1/genesis";
import * as _197 from "./applications/transfer/v1/query";
import * as _198 from "./applications/transfer/v1/transfer";
import * as _199 from "./applications/transfer/v1/tx";
import * as _200 from "./applications/transfer/v2/packet";
import * as _201 from "./core/channel/v1/channel";
import * as _202 from "./core/channel/v1/genesis";
import * as _203 from "./core/channel/v1/query";
import * as _204 from "./core/channel/v1/tx";
import * as _205 from "./core/client/v1/client";
import * as _206 from "./core/client/v1/genesis";
import * as _207 from "./core/client/v1/query";
import * as _208 from "./core/client/v1/tx";
import * as _209 from "./core/commitment/v1/commitment";
import * as _210 from "./core/connection/v1/connection";
import * as _211 from "./core/connection/v1/genesis";
import * as _212 from "./core/connection/v1/query";
import * as _213 from "./core/connection/v1/tx";
import * as _214 from "./lightclients/localhost/v1/localhost";
import * as _215 from "./lightclients/solomachine/v1/solomachine";
import * as _216 from "./lightclients/solomachine/v2/solomachine";
import * as _217 from "./lightclients/tendermint/v1/tendermint";
import * as _370 from "./applications/transfer/v1/tx.amino";
import * as _371 from "./core/channel/v1/tx.amino";
import * as _372 from "./core/client/v1/tx.amino";
import * as _373 from "./core/connection/v1/tx.amino";
import * as _374 from "./applications/transfer/v1/tx.registry";
import * as _375 from "./core/channel/v1/tx.registry";
import * as _376 from "./core/client/v1/tx.registry";
import * as _377 from "./core/connection/v1/tx.registry";
import * as _378 from "./applications/transfer/v1/query.rpc.Query";
import * as _379 from "./core/channel/v1/query.rpc.Query";
import * as _380 from "./core/client/v1/query.rpc.Query";
import * as _381 from "./core/connection/v1/query.rpc.Query";
import * as _382 from "./applications/transfer/v1/tx.rpc.msg";
import * as _383 from "./core/channel/v1/tx.rpc.msg";
import * as _384 from "./core/client/v1/tx.rpc.msg";
import * as _385 from "./core/connection/v1/tx.rpc.msg";
import * as _409 from "./rpc.query";
import * as _410 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._196,
        ..._197,
        ..._198,
        ..._199,
        ..._370,
        ..._374,
        ..._378,
        ..._382
      };
      export const v2 = {
        ..._200
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._201,
        ..._202,
        ..._203,
        ..._204,
        ..._371,
        ..._375,
        ..._379,
        ..._383
      };
    }
    export namespace client {
      export const v1 = {
        ..._205,
        ..._206,
        ..._207,
        ..._208,
        ..._372,
        ..._376,
        ..._380,
        ..._384
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._209
      };
    }
    export namespace connection {
      export const v1 = {
        ..._210,
        ..._211,
        ..._212,
        ..._213,
        ..._373,
        ..._377,
        ..._381,
        ..._385
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._214
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._215
      };
      export const v2 = {
        ..._216
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._217
      };
    }
  }
  export const ClientFactory = {
    ..._409,
    ..._410
  };
}