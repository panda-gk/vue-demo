
      /**
      * 观众通过推广链接进入事件监听
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'POST',
        url: '/ec/c/operation/popularize/listener/into',
        data: data
      })
      