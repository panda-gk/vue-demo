
      /**
      * 追加红包数量
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18811 {
  /**
   * 红包id
   */
  red_envelope_id?: number;
  /**
   * 追加数量
   */
  append_count?: number;
}
    export class IResid18811 {
  data?: {};
  code?: number;
  msg?: string;
}
    
      export default (data?): Serve<
        IReqid18811,
        IResid18811['data']
      > => request({
        method: 'POST',
        url: '/ec/c/operation/popularize/append/count',
        data: data
      })
      