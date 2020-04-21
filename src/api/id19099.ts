
      /**
      * 查看直播间红包任务列表
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid19099 {
  /**
   * 场景类型，默认live
   */
  scene_type: string | number;
  /**
   * as live_id
   */
  scene_id: string | number;
}
    export class IResid19099 {
  code?: number;
  msg?: string;
  data?: {
    id: number;
    countdown: number;
    amount: number;
    /**
     * 2 助力红包 3推广红包
     */
    red_type: number;
    /**
     * 0 没抢完  1已抢完
     */
    all_grabbed: number;
    /**
     * 距离抢完时间的时间间隔 单位是秒，可能为负数。未被抢完时不返回
     */
    all_grabbed_time_countdown: number;
  }[];
}
    
      export default (data?): Serve<
        IReqid19099,
        IResid19099['data']
      > => request({
        method: 'GET',
        url: '/ec/b/operation/misson/redenvelope/list',
        data: {params: data}
      })
      