//@ts-nocheck
import * as _250 from "./abci/types";
import * as _251 from "./crypto/keys";
import * as _252 from "./crypto/proof";
import * as _253 from "./libs/bits/types";
import * as _254 from "./p2p/types";
import * as _255 from "./types/block";
import * as _256 from "./types/evidence";
import * as _257 from "./types/params";
import * as _258 from "./types/types";
import * as _259 from "./types/validator";
import * as _260 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._250
  };
  export const crypto = {
    ..._251,
    ..._252
  };
  export namespace libs {
    export const bits = {
      ..._253
    };
  }
  export const p2p = {
    ..._254
  };
  export const types = {
    ..._255,
    ..._256,
    ..._257,
    ..._258,
    ..._259
  };
  export const version = {
    ..._260
  };
}