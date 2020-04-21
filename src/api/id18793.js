
      /**
      * 生成推广链接事件监听
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/c/operation/popularize/listener/url',
        data: {params: data}
      })
      