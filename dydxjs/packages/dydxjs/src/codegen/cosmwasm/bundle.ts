//@ts-nocheck
import * as _65 from "./wasm/v1/authz";
import * as _66 from "./wasm/v1/genesis";
import * as _67 from "./wasm/v1/ibc";
import * as _68 from "./wasm/v1/proposal";
import * as _69 from "./wasm/v1/query";
import * as _70 from "./wasm/v1/tx";
import * as _71 from "./wasm/v1/types";
import * as _315 from "./wasm/v1/tx.amino";
import * as _316 from "./wasm/v1/tx.registry";
import * as _317 from "./wasm/v1/query.rpc.Query";
import * as _318 from "./wasm/v1/tx.rpc.msg";
import * as _447 from "./rpc.query";
import * as _448 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._315,
      ..._316,
      ..._317,
      ..._318
    };
  }
  export const ClientFactory = {
    ..._447,
    ..._448
  };
}