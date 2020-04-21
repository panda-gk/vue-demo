
      /**
      * 新建任务
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18307 {
  mission_title: string;
  mission_description?: string;
  mission_start_time: string;
  mission_end_time: string;
  /**
   * 100:战队任务 200日常营销任务 300 红包任务
   */
  mission_type: string;
  /**
   * 任务提供者 100平台任务 200供应商任务 300店主任务
   */
  mission_provider: string;
  mission_detail: string;
  mission_remark?: string;
  mission_picture?: string;
  channel?: string;
  /**
   * CELEBRITY_AND_STAR_USER(1, "店主兼达人"),
   * STAR_USER(2, "仅达人"),
   * SUPPLIER(3, "供应商"),
   * TEAM_LEADER(8,"战队队长")
   */
  identity_value?: string;
  /**
   * 开始执行时间类型 1 任务生效时间 2任务领取时间
   */
  execution_start_time_type: string;
  /**
   * 开始执行时间类型 1 任务失效时间 2领取后天数
   */
  execution_end_time_type: string;
  /**
   * 领取后多少天
   */
  execution_end_time_days?: string;
  /**
   * 任务玩法模板 1GMV
   */
  mission_gameplay_template: string;
  /**
   * 奖励发放时间类型：1任务完成后天数 2 固定日期
   */
  award_handout_time_type: string;
  /**
   * 奖励发放时间(固定时间)
   */
  award_handout_fixed_time?: string;
  /**
   * 奖励发放时间(多少天数之后)
   */
  award_handout_after_days?: string;
  /**
   * 身份类型 1所有人 2角色 3自定义
   */
  receive_rule: string;
  /**
   * 自定义接受用户
   */
  file?: FileData;
  /**
   * 业务类型
   */
  business: string;
  /**
   * jsonarray string
   */
  reward_rule_id: string;
  /**
   * jsonarray string
   */
  tag_id?: string;
}
    export class IResid18307 {
  code: number;
}
    
      export default (data?): Serve<
        IReqid18307,
        IResid18307['data']
      > => request({
        method: 'POST',
        url: '/ec/m/operation/mission/add',
        data: data
      })
      