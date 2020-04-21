
      /**
      * 新增任务标签
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18349 {
  /**
   * tag
   */
  tag_name: string;
}
    export class IResid18349 {
  code: number;
  data: {
    id: string;
    tag_name: string;
  };
}
    
      export default (data?): Serve<
        IReqid18349,
        IResid18349['data']
      > => request({
        method: 'POST',
        url: '/ec/m/operation/mission/tag/add',
        data: data
      })
      