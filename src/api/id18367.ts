
      /**
      * b端任务报名
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18367 {
  /**
   * 任务ID
   */
  mission_id: string;
}
    export class IResid18367 {}
    
      export default (data?): Serve<
        IReqid18367,
        IResid18367['data']
      > => request({
        method: 'POST',
        url: '/ec/b/operation/mission/apply',
        data: data
      })
      