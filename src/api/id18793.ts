
      /**
      * 生成推广链接事件监听
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18793 {
  live_id: string | number;
  /**
   * 红包id
   */
  red_envelope_id: string | number;
}
    export class IResid18793 {
  data: {};
  code: number;
  msg: string;
}
    
      export default (data?): Serve<
        IReqid18793,
        IResid18793['data']
      > => request({
        method: 'GET',
        url: '/ec/c/operation/popularize/listener/url',
        data: {params: data}
      })
      