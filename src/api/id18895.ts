
      /**
      * 删除标签
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18895 {
  /**
   * jsonarray string
   */
  ids: string;
}
    export class IResid18895 {
  code: number;
  msg: string;
}
    
      export default (data?): Serve<
        IReqid18895,
        IResid18895['data']
      > => request({
        method: 'POST',
        url: '/ec/m/operation/mission/tag/delete',
        data: data
      })
      