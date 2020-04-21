
      /**
      * 直播推广记录
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/c/operation/popularize/log/list',
        data: {params: data}
      })
      