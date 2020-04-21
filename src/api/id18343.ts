
      /**
      * 复制任务
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18343 {
  id: string;
}
    export class IResid18343 {
  code: number;
  msg: string;
  field_4: string;
}
    
      export default (data?): Serve<
        IReqid18343,
        IResid18343['data']
      > => request({
        method: 'POST',
        url: '/ec/m/operation/mission/copy',
        data: data
      })
      