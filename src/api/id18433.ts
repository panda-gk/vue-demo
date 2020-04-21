
      /**
      * 查询订单是否成功的接口
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18433 {
  order_no: string | number;
}
    export class IResid18433 {
  code?: number;
  msg?: string;
  data?: {
    /**
     * 订单状态 10 待支付，20 失败，30 支付完成
     */
    order_status?: string;
  };
}
    
      export default (data?): Serve<
        IReqid18433,
        IResid18433['data']
      > => request({
        method: 'GET',
        url: '/ec/b/operation/query/ordersuccess',
        data: {params: data}
      })
      