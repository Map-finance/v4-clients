//@ts-nocheck
import * as _321 from "./applications/transfer/v1/genesis";
import * as _322 from "./applications/transfer/v1/query";
import * as _323 from "./applications/transfer/v1/transfer";
import * as _324 from "./applications/transfer/v1/tx";
import * as _325 from "./applications/transfer/v2/packet";
import * as _326 from "./core/channel/v1/channel";
import * as _327 from "./core/channel/v1/genesis";
import * as _328 from "./core/channel/v1/query";
import * as _329 from "./core/channel/v1/tx";
import * as _330 from "./core/client/v1/client";
import * as _331 from "./core/client/v1/genesis";
import * as _332 from "./core/client/v1/query";
import * as _333 from "./core/client/v1/tx";
import * as _334 from "./core/commitment/v1/commitment";
import * as _335 from "./core/connection/v1/connection";
import * as _336 from "./core/connection/v1/genesis";
import * as _337 from "./core/connection/v1/query";
import * as _338 from "./core/connection/v1/tx";
import * as _339 from "./lightclients/localhost/v1/localhost";
import * as _340 from "./lightclients/solomachine/v1/solomachine";
import * as _341 from "./lightclients/solomachine/v2/solomachine";
import * as _342 from "./lightclients/tendermint/v1/tendermint";
import * as _573 from "./applications/transfer/v1/tx.amino";
import * as _574 from "./core/channel/v1/tx.amino";
import * as _575 from "./core/client/v1/tx.amino";
import * as _576 from "./core/connection/v1/tx.amino";
import * as _577 from "./applications/transfer/v1/tx.registry";
import * as _578 from "./core/channel/v1/tx.registry";
import * as _579 from "./core/client/v1/tx.registry";
import * as _580 from "./core/connection/v1/tx.registry";
import * as _581 from "./applications/transfer/v1/query.rpc.Query";
import * as _582 from "./core/channel/v1/query.rpc.Query";
import * as _583 from "./core/client/v1/query.rpc.Query";
import * as _584 from "./core/connection/v1/query.rpc.Query";
import * as _585 from "./applications/transfer/v1/tx.rpc.msg";
import * as _586 from "./core/channel/v1/tx.rpc.msg";
import * as _587 from "./core/client/v1/tx.rpc.msg";
import * as _588 from "./core/connection/v1/tx.rpc.msg";
import * as _612 from "./rpc.query";
import * as _613 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._321,
        ..._322,
        ..._323,
        ..._324,
        ..._573,
        ..._577,
        ..._581,
        ..._585
      };
      export const v2 = {
        ..._325
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._326,
        ..._327,
        ..._328,
        ..._329,
        ..._574,
        ..._578,
        ..._582,
        ..._586
      };
    }
    export namespace client {
      export const v1 = {
        ..._330,
        ..._331,
        ..._332,
        ..._333,
        ..._575,
        ..._579,
        ..._583,
        ..._587
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._334
      };
    }
    export namespace connection {
      export const v1 = {
        ..._335,
        ..._336,
        ..._337,
        ..._338,
        ..._576,
        ..._580,
        ..._584,
        ..._588
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._339
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._340
      };
      export const v2 = {
        ..._341
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._342
      };
    }
  }
  export const ClientFactory = {
    ..._612,
    ..._613
  };
}