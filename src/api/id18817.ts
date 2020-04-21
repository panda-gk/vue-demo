
      /**
      * 监听主播关闭直播事件
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18817 {
  live_id: number;
}
    export class IResid18817 {
  data?: {};
  code?: number;
  msg?: string;
}
    
      export default (data?): Serve<
        IReqid18817,
        IResid18817['data']
      > => request({
        method: 'POST',
        url: '/ec/c/operation/popularize/listener/close',
        data: data
      })
      