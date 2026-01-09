//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgAddOperators, MsgAddOperatorsResponse, MsgRemoveOperators, MsgRemoveOperatorsResponse, MsgUpdateOperatorPermissions, MsgUpdateOperatorPermissionsResponse } from "./tx";
/** Msg 定义运营账户模块的消息服务。
 所有消息都需要治理模块的授权才能执行。 */
export interface Msg {
  /**
   * AddOperators 添加一个或多个运营账户及其权限。
   * 只有治理模块可以调用此方法。
   */
  addOperators(request: MsgAddOperators): Promise<MsgAddOperatorsResponse>;
  /**
   * RemoveOperators 移除一个或多个运营账户。
   * 只有治理模块可以调用此方法。
   */
  removeOperators(request: MsgRemoveOperators): Promise<MsgRemoveOperatorsResponse>;
  /**
   * UpdateOperatorPermissions 更新已存在运营账户的权限。
   * 只有治理模块可以调用此方法。
   * 可以用于增加或减少运营账户的权限。
   */
  updateOperatorPermissions(request: MsgUpdateOperatorPermissions): Promise<MsgUpdateOperatorPermissionsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addOperators = this.addOperators.bind(this);
    this.removeOperators = this.removeOperators.bind(this);
    this.updateOperatorPermissions = this.updateOperatorPermissions.bind(this);
  }
  addOperators(request: MsgAddOperators): Promise<MsgAddOperatorsResponse> {
    const data = MsgAddOperators.encode(request).finish();
    const promise = this.rpc.request("h2x.operators.Msg", "AddOperators", data);
    return promise.then(data => MsgAddOperatorsResponse.decode(new BinaryReader(data)));
  }
  removeOperators(request: MsgRemoveOperators): Promise<MsgRemoveOperatorsResponse> {
    const data = MsgRemoveOperators.encode(request).finish();
    const promise = this.rpc.request("h2x.operators.Msg", "RemoveOperators", data);
    return promise.then(data => MsgRemoveOperatorsResponse.decode(new BinaryReader(data)));
  }
  updateOperatorPermissions(request: MsgUpdateOperatorPermissions): Promise<MsgUpdateOperatorPermissionsResponse> {
    const data = MsgUpdateOperatorPermissions.encode(request).finish();
    const promise = this.rpc.request("h2x.operators.Msg", "UpdateOperatorPermissions", data);
    return promise.then(data => MsgUpdateOperatorPermissionsResponse.decode(new BinaryReader(data)));
  }
}