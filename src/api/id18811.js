
      /**
      * 追加红包数量
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'POST',
        url: '/ec/c/operation/popularize/append/count',
        data: data
      })
      