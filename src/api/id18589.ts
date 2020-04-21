
      /**
      * 助力资格判断
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18589 {
  scene_type: string | number;
  scene_id: string | number;
  red_envelope_id: string | number;
}
    export class IResid18589 {
  code?: number;
  msg?: string;
  data?: {
    /**
     * 1 代表未助力 2 代表已助力
     */
    help_status?: number;
    /**
     * 1 代表已抢完,2代表未抢完
     */
    grab_status: string;
  };
}
    
      export default (data?): Serve<
        IReqid18589,
        IResid18589['data']
      > => request({
        method: 'GET',
        url: '/ec/c/operation/mission/help/judge',
        data: {params: data}
      })
      