//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgRegisterAffiliate, MsgRegisterAffiliateResponse, MsgUpdateAffiliateTiers, MsgUpdateAffiliateTiersResponse, MsgUpdateAffiliateWhitelist, MsgUpdateAffiliateWhitelistResponse, MsgUpdateAffiliateParameters, MsgUpdateAffiliateParametersResponse, MsgUpdateAffiliateOverrides, MsgUpdateAffiliateOverridesResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** RegisterAffiliate registers a referee-affiliate relationship */
  registerAffiliate(request: MsgRegisterAffiliate): Promise<MsgRegisterAffiliateResponse>;
  /** UpdateAffiliateTiers updates affiliate tiers */
  updateAffiliateTiers(request: MsgUpdateAffiliateTiers): Promise<MsgUpdateAffiliateTiersResponse>;
  /** UpdateAffiliateWhitelist updates affiliate whitelist */
  updateAffiliateWhitelist(request: MsgUpdateAffiliateWhitelist): Promise<MsgUpdateAffiliateWhitelistResponse>;
  /** UpdateAffiliateParameters updates affiliate program parameters */
  updateAffiliateParameters(request: MsgUpdateAffiliateParameters): Promise<MsgUpdateAffiliateParametersResponse>;
  /** UpdateAffiliateOverrides updates affiliate overrides */
  updateAffiliateOverrides(request: MsgUpdateAffiliateOverrides): Promise<MsgUpdateAffiliateOverridesResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerAffiliate = this.registerAffiliate.bind(this);
    this.updateAffiliateTiers = this.updateAffiliateTiers.bind(this);
    this.updateAffiliateWhitelist = this.updateAffiliateWhitelist.bind(this);
    this.updateAffiliateParameters = this.updateAffiliateParameters.bind(this);
    this.updateAffiliateOverrides = this.updateAffiliateOverrides.bind(this);
  }
  registerAffiliate(request: MsgRegisterAffiliate): Promise<MsgRegisterAffiliateResponse> {
    const data = MsgRegisterAffiliate.encode(request).finish();
    const promise = this.rpc.request("dydxprotocol.affiliates.Msg", "RegisterAffiliate", data);
    return promise.then(data => MsgRegisterAffiliateResponse.decode(new BinaryReader(data)));
  }
  updateAffiliateTiers(request: MsgUpdateAffiliateTiers): Promise<MsgUpdateAffiliateTiersResponse> {
    const data = MsgUpdateAffiliateTiers.encode(request).finish();
    const promise = this.rpc.request("dydxprotocol.affiliates.Msg", "UpdateAffiliateTiers", data);
    return promise.then(data => MsgUpdateAffiliateTiersResponse.decode(new BinaryReader(data)));
  }
  updateAffiliateWhitelist(request: MsgUpdateAffiliateWhitelist): Promise<MsgUpdateAffiliateWhitelistResponse> {
    const data = MsgUpdateAffiliateWhitelist.encode(request).finish();
    const promise = this.rpc.request("dydxprotocol.affiliates.Msg", "UpdateAffiliateWhitelist", data);
    return promise.then(data => MsgUpdateAffiliateWhitelistResponse.decode(new BinaryReader(data)));
  }
  updateAffiliateParameters(request: MsgUpdateAffiliateParameters): Promise<MsgUpdateAffiliateParametersResponse> {
    const data = MsgUpdateAffiliateParameters.encode(request).finish();
    const promise = this.rpc.request("dydxprotocol.affiliates.Msg", "UpdateAffiliateParameters", data);
    return promise.then(data => MsgUpdateAffiliateParametersResponse.decode(new BinaryReader(data)));
  }
  updateAffiliateOverrides(request: MsgUpdateAffiliateOverrides): Promise<MsgUpdateAffiliateOverridesResponse> {
    const data = MsgUpdateAffiliateOverrides.encode(request).finish();
    const promise = this.rpc.request("dydxprotocol.affiliates.Msg", "UpdateAffiliateOverrides", data);
    return promise.then(data => MsgUpdateAffiliateOverridesResponse.decode(new BinaryReader(data)));
  }
}