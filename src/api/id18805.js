
      /**
      * 查询当前推广红包状态
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/c/operation/popularize/get/status',
        data: {params: data}
      })
      