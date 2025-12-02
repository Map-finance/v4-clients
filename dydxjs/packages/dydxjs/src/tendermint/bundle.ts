//@ts-nocheck
import * as _366 from "./abci/types";
import * as _367 from "./crypto/keys";
import * as _368 from "./crypto/proof";
import * as _369 from "./libs/bits/types";
import * as _370 from "./p2p/types";
import * as _371 from "./types/block";
import * as _372 from "./types/evidence";
import * as _373 from "./types/params";
import * as _374 from "./types/types";
import * as _375 from "./types/validator";
import * as _376 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._366
  };
  export const crypto = {
    ..._367,
    ..._368
  };
  export namespace libs {
    export const bits = {
      ..._369
    };
  }
  export const p2p = {
    ..._370
  };
  export const types = {
    ..._371,
    ..._372,
    ..._373,
    ..._374,
    ..._375
  };
  export const version = {
    ..._376
  };
}