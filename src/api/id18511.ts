
      /**
      * 查看手气
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18511 {
  scene_type: string | number;
  scene_id: string | number;
  red_envelope_id: string | number;
}
    export class IResid18511 {
  code?: number;
  msg?: string;
  data?: {
    /**
     * 我的金额
     */
    my_amount?: number;
    red_envelope_list?: {
      /**
       * 头像
       */
      head_url: string;
      /**
       * 昵称
       */
      nickname: string;
      /**
       * 金额
       */
      amount: number;
    }[];
  };
}
    
      export default (data?): Serve<
        IReqid18511,
        IResid18511['data']
      > => request({
        method: 'GET',
        url: '/ec/c/operation/mission/helpredenvelope/grab/tops',
        data: {params: data}
      })
      