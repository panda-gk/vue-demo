
      /**
      * 抢红包
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18499 {
  user_head_url: string | number;
  user_nickname: string | number;
  red_envelope_id: string | number;
}
    export class IResid18499 {
  code?: number;
  msg?: string;
  data?: {
    /**
     * 2 是抢成功 3 是没抢到
     */
    status?: string;
    /**
     * 抢到的金额。没抢到的不传,单位是分
     */
    amount: string;
  };
}
    
      export default (data?): Serve<
        IReqid18499,
        IResid18499['data']
      > => request({
        method: 'GET',
        url: '/ec/c/operation/mission/helpredenvelope/grab',
        data: {params: data}
      })
      