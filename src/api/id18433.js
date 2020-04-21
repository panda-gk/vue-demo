
      /**
      * 查询订单是否成功的接口
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/b/operation/query/ordersuccess',
        data: {params: data}
      })
      