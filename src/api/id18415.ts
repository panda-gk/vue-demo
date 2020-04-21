
      /**
      * 创建助力红包发起支付
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18415 {
  /**
   * 直播相关固定为  live
   */
  scene_type: string;
  /**
   * 直播相关的给 live_id
   */
  scene_id: string;
  /**
   * 金额 以分为单位
   */
  amount: string;
  head_url: string;
  nickname: string;
  /**
   * 2是助力红包,3是推广红包
   */
  red_envelope_type: string;
}
    export class IResid18415 {
  data?: {
    order_no?: string;
    red_envelope_id?: number;
    /**
     * 红包类型
     */
    red_envelope_type: string;
    start_time?: string;
    countdown?: number;
    amount?: number;
    pay_type?: number;
    unified_order_url?: {
      pre_pay_id?: string;
      redirect_url?: string;
      app_pay_request?: {
        package?: string;
        appid?: string;
        sign?: string;
        prepayid?: string;
        partnerid?: string;
        noncestr?: string;
        timestamp?: string;
      };
    };
  };
  code?: number;
  msg?: string;
}
    
      export default (data?): Serve<
        IReqid18415,
        IResid18415['data']
      > => request({
        method: 'POST',
        url: '/ec/b/operation/mission/helpredenvelope/create',
        data: data
      })
      