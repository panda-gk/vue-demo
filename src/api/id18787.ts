
      /**
      * 发布推广
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18787 {
  /**
   * 单份奖励值/元
   */
  award_value: number;
  /**
   * 总奖励份数
   */
  award_count: number;
  live_id: number;
  /**
   * 直播标题
   */
  live_title: string;
}
    export class IResid18787 {
  data?: {
    order_no: string;
    red_envelope_id: number;
    /**
     * 红包类型
     */
    red_envelope_type: string;
    start_time: string;
    countdown?: number;
    amount?: number;
    pay_type: number;
    unified_order_url: {
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
        IReqid18787,
        IResid18787['data']
      > => request({
        method: 'POST',
        url: '/ec/c/operation/popularize/publish',
        data: data
      })
      