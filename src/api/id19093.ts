
      /**
      * 查看直播间红包任务列表
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid19093 {
  /**
   * 场景类型，默认live
   */
  scene_type: string | number;
  /**
   * as live_id
   */
  scene_id: string | number;
}
    export class IResid19093 {
  code?: number;
  msg?: string;
  data?: {
    id: number;
    countdown: number;
    grab_status: number;
    amount: number;
    /**
     * 2 助力红包 3推广红包
     */
    type: number;
  }[];
}
    
      export default (data?): Serve<
        IReqid19093,
        IResid19093['data']
      > => request({
        method: 'GET',
        url: '/ec/c/operation/misson/redenvelope/list',
        data: {params: data}
      })
      