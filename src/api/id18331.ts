
      /**
      * 删除任务
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18331 {
  id: string;
}
    export class IResid18331 {
  code: number;
  msg: string;
}
    
      export default (data?): Serve<
        IReqid18331,
        IResid18331['data']
      > => request({
        method: 'POST',
        url: '/ec/m/operation/mission/delete',
        data: data
      })
      