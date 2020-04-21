
      /**
      * 发布任务
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18337 {
  id: string;
}
    export class IResid18337 {
  code: number;
  msg: string;
}
    
      export default (data?): Serve<
        IReqid18337,
        IResid18337['data']
      > => request({
        method: 'POST',
        url: '/ec/m/operation/mission/release',
        data: data
      })
      