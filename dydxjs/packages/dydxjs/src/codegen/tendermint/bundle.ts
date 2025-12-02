//@ts-nocheck
import * as _248 from "./abci/types";
import * as _249 from "./crypto/keys";
import * as _250 from "./crypto/proof";
import * as _251 from "./libs/bits/types";
import * as _252 from "./p2p/types";
import * as _253 from "./types/block";
import * as _254 from "./types/evidence";
import * as _255 from "./types/params";
import * as _256 from "./types/types";
import * as _257 from "./types/validator";
import * as _258 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._248
  };
  export const crypto = {
    ..._249,
    ..._250
  };
  export namespace libs {
    export const bits = {
      ..._251
    };
  }
  export const p2p = {
    ..._252
  };
  export const types = {
    ..._253,
    ..._254,
    ..._255,
    ..._256,
    ..._257
  };
  export const version = {
    ..._258
  };
}