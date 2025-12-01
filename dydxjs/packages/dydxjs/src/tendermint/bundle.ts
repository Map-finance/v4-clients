//@ts-nocheck
import * as _241 from "./abci/types";
import * as _242 from "./crypto/keys";
import * as _243 from "./crypto/proof";
import * as _244 from "./libs/bits/types";
import * as _245 from "./p2p/types";
import * as _246 from "./types/block";
import * as _247 from "./types/evidence";
import * as _248 from "./types/params";
import * as _249 from "./types/types";
import * as _250 from "./types/validator";
import * as _251 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._241
  };
  export const crypto = {
    ..._242,
    ..._243
  };
  export namespace libs {
    export const bits = {
      ..._244
    };
  }
  export const p2p = {
    ..._245
  };
  export const types = {
    ..._246,
    ..._247,
    ..._248,
    ..._249,
    ..._250
  };
  export const version = {
    ..._251
  };
}