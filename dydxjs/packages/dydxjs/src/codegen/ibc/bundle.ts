//@ts-nocheck
import * as _216 from "./applications/transfer/v1/genesis";
import * as _217 from "./applications/transfer/v1/query";
import * as _218 from "./applications/transfer/v1/transfer";
import * as _219 from "./applications/transfer/v1/tx";
import * as _220 from "./applications/transfer/v2/packet";
import * as _221 from "./core/channel/v1/channel";
import * as _222 from "./core/channel/v1/genesis";
import * as _223 from "./core/channel/v1/query";
import * as _224 from "./core/channel/v1/tx";
import * as _225 from "./core/client/v1/client";
import * as _226 from "./core/client/v1/genesis";
import * as _227 from "./core/client/v1/query";
import * as _228 from "./core/client/v1/tx";
import * as _229 from "./core/commitment/v1/commitment";
import * as _230 from "./core/connection/v1/connection";
import * as _231 from "./core/connection/v1/genesis";
import * as _232 from "./core/connection/v1/query";
import * as _233 from "./core/connection/v1/tx";
import * as _234 from "./lightclients/localhost/v1/localhost";
import * as _235 from "./lightclients/solomachine/v1/solomachine";
import * as _236 from "./lightclients/solomachine/v2/solomachine";
import * as _237 from "./lightclients/tendermint/v1/tendermint";
import * as _412 from "./applications/transfer/v1/tx.amino";
import * as _413 from "./core/channel/v1/tx.amino";
import * as _414 from "./core/client/v1/tx.amino";
import * as _415 from "./core/connection/v1/tx.amino";
import * as _416 from "./applications/transfer/v1/tx.registry";
import * as _417 from "./core/channel/v1/tx.registry";
import * as _418 from "./core/client/v1/tx.registry";
import * as _419 from "./core/connection/v1/tx.registry";
import * as _420 from "./applications/transfer/v1/query.rpc.Query";
import * as _421 from "./core/channel/v1/query.rpc.Query";
import * as _422 from "./core/client/v1/query.rpc.Query";
import * as _423 from "./core/connection/v1/query.rpc.Query";
import * as _424 from "./applications/transfer/v1/tx.rpc.msg";
import * as _425 from "./core/channel/v1/tx.rpc.msg";
import * as _426 from "./core/client/v1/tx.rpc.msg";
import * as _427 from "./core/connection/v1/tx.rpc.msg";
import * as _451 from "./rpc.query";
import * as _452 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._216,
        ..._217,
        ..._218,
        ..._219,
        ..._412,
        ..._416,
        ..._420,
        ..._424
      };
      export const v2 = {
        ..._220
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._221,
        ..._222,
        ..._223,
        ..._224,
        ..._413,
        ..._417,
        ..._421,
        ..._425
      };
    }
    export namespace client {
      export const v1 = {
        ..._225,
        ..._226,
        ..._227,
        ..._228,
        ..._414,
        ..._418,
        ..._422,
        ..._426
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._229
      };
    }
    export namespace connection {
      export const v1 = {
        ..._230,
        ..._231,
        ..._232,
        ..._233,
        ..._415,
        ..._419,
        ..._423,
        ..._427
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._234
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._235
      };
      export const v2 = {
        ..._236
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._237
      };
    }
  }
  export const ClientFactory = {
    ..._451,
    ..._452
  };
}