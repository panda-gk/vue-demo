
      /**
      * b端获取任务详情
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18355 {
  /**
   * 任务ID
   */
  mission_id: string | number;
}
    export class IResid18355 {
  data?: {
    mission_title?: string;
    mission_description?: string;
    mission_start_time?: string;
    mission_end_time?: string;
    mission_type?: number;
    mission_provider?: number;
    mission_detail?: string;
    channel?: number;
    execution_start_time_type?: number;
    execution_end_time_type?: number;
    mission_gameplay_template?: number;
    award_handout_time_type?: number;
    receive_rule?: number;
    award_handout_fixed_time?: string;
    state?: number;
    gmt_creater?: number;
    gmt_modifier?: number;
    /**
     * 是否报名
     */
    user_accept_mission_mark?: boolean;
    id?: number;
    biz_code?: string;
    delete_mark?: number;
    delete_timestamp?: number;
    gmt_created?: string;
    gmt_modified?: string;
  };
  code?: number;
  msg?: string;
}
    
      export default (data?): Serve<
        IReqid18355,
        IResid18355['data']
      > => request({
        method: 'GET',
        url: '/ec/b/operation/mission/detail/get',
        data: {params: data}
      })
      