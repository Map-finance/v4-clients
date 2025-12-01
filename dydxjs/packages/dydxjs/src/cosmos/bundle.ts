//@ts-nocheck
import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/v1beta1/coin";
import * as _20 from "./crypto/ed25519/keys";
import * as _21 from "./crypto/hd/v1/hd";
import * as _22 from "./crypto/keyring/v1/record";
import * as _23 from "./crypto/multisig/keys";
import * as _24 from "./crypto/secp256k1/keys";
import * as _25 from "./crypto/secp256r1/keys";
import * as _26 from "./distribution/v1beta1/distribution";
import * as _27 from "./distribution/v1beta1/genesis";
import * as _28 from "./distribution/v1beta1/query";
import * as _29 from "./distribution/v1beta1/tx";
import * as _30 from "./feegrant/v1beta1/feegrant";
import * as _31 from "./feegrant/v1beta1/genesis";
import * as _32 from "./feegrant/v1beta1/query";
import * as _33 from "./feegrant/v1beta1/tx";
import * as _34 from "./gov/v1/genesis";
import * as _35 from "./gov/v1/gov";
import * as _36 from "./gov/v1/query";
import * as _37 from "./gov/v1/tx";
import * as _38 from "./gov/v1beta1/genesis";
import * as _39 from "./gov/v1beta1/gov";
import * as _40 from "./gov/v1beta1/query";
import * as _41 from "./gov/v1beta1/tx";
import * as _42 from "./group/v1/events";
import * as _43 from "./group/v1/genesis";
import * as _44 from "./group/v1/query";
import * as _45 from "./group/v1/tx";
import * as _46 from "./group/v1/types";
import * as _47 from "./mint/v1beta1/genesis";
import * as _48 from "./mint/v1beta1/mint";
import * as _49 from "./mint/v1beta1/query";
import * as _50 from "./params/v1beta1/params";
import * as _51 from "./params/v1beta1/query";
import * as _52 from "./staking/v1beta1/authz";
import * as _53 from "./staking/v1beta1/genesis";
import * as _54 from "./staking/v1beta1/query";
import * as _55 from "./staking/v1beta1/staking";
import * as _56 from "./staking/v1beta1/tx";
import * as _57 from "./tx/signing/v1beta1/signing";
import * as _58 from "./tx/v1beta1/service";
import * as _59 from "./tx/v1beta1/tx";
import * as _60 from "./upgrade/v1beta1/query";
import * as _61 from "./upgrade/v1beta1/tx";
import * as _62 from "./upgrade/v1beta1/upgrade";
import * as _63 from "./vesting/v1beta1/tx";
import * as _64 from "./vesting/v1beta1/vesting";
import * as _252 from "./authz/v1beta1/tx.amino";
import * as _253 from "./bank/v1beta1/tx.amino";
import * as _254 from "./distribution/v1beta1/tx.amino";
import * as _255 from "./feegrant/v1beta1/tx.amino";
import * as _256 from "./gov/v1/tx.amino";
import * as _257 from "./gov/v1beta1/tx.amino";
import * as _258 from "./group/v1/tx.amino";
import * as _259 from "./staking/v1beta1/tx.amino";
import * as _260 from "./upgrade/v1beta1/tx.amino";
import * as _261 from "./vesting/v1beta1/tx.amino";
import * as _262 from "./authz/v1beta1/tx.registry";
import * as _263 from "./bank/v1beta1/tx.registry";
import * as _264 from "./distribution/v1beta1/tx.registry";
import * as _265 from "./feegrant/v1beta1/tx.registry";
import * as _266 from "./gov/v1/tx.registry";
import * as _267 from "./gov/v1beta1/tx.registry";
import * as _268 from "./group/v1/tx.registry";
import * as _269 from "./staking/v1beta1/tx.registry";
import * as _270 from "./upgrade/v1beta1/tx.registry";
import * as _271 from "./vesting/v1beta1/tx.registry";
import * as _272 from "./auth/v1beta1/query.rpc.Query";
import * as _273 from "./authz/v1beta1/query.rpc.Query";
import * as _274 from "./bank/v1beta1/query.rpc.Query";
import * as _275 from "./distribution/v1beta1/query.rpc.Query";
import * as _276 from "./feegrant/v1beta1/query.rpc.Query";
import * as _277 from "./gov/v1/query.rpc.Query";
import * as _278 from "./gov/v1beta1/query.rpc.Query";
import * as _279 from "./group/v1/query.rpc.Query";
import * as _280 from "./mint/v1beta1/query.rpc.Query";
import * as _281 from "./params/v1beta1/query.rpc.Query";
import * as _282 from "./staking/v1beta1/query.rpc.Query";
import * as _283 from "./tx/v1beta1/service.rpc.Service";
import * as _284 from "./upgrade/v1beta1/query.rpc.Query";
import * as _285 from "./authz/v1beta1/tx.rpc.msg";
import * as _286 from "./bank/v1beta1/tx.rpc.msg";
import * as _287 from "./distribution/v1beta1/tx.rpc.msg";
import * as _288 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _289 from "./gov/v1/tx.rpc.msg";
import * as _290 from "./gov/v1beta1/tx.rpc.msg";
import * as _291 from "./group/v1/tx.rpc.msg";
import * as _292 from "./staking/v1beta1/tx.rpc.msg";
import * as _293 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _294 from "./vesting/v1beta1/tx.rpc.msg";
import * as _403 from "./rpc.query";
import * as _404 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._272
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._252,
      ..._262,
      ..._273,
      ..._285
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._253,
      ..._263,
      ..._274,
      ..._286
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._18
      };
    }
    export const v1beta1 = {
      ..._19
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._20
    };
    export namespace hd {
      export const v1 = {
        ..._21
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._22
      };
    }
    export const multisig = {
      ..._23
    };
    export const secp256k1 = {
      ..._24
    };
    export const secp256r1 = {
      ..._25
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._254,
      ..._264,
      ..._275,
      ..._287
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._255,
      ..._265,
      ..._276,
      ..._288
    };
  }
  export namespace gov {
    export const v1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._256,
      ..._266,
      ..._277,
      ..._289
    };
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._257,
      ..._267,
      ..._278,
      ..._290
    };
  }
  export namespace group {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._258,
      ..._268,
      ..._279,
      ..._291
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._280
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._281
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._259,
      ..._269,
      ..._282,
      ..._292
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._283
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._260,
      ..._270,
      ..._284,
      ..._293
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._261,
      ..._271,
      ..._294
    };
  }
  export const ClientFactory = {
    ..._403,
    ..._404
  };
}