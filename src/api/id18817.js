
      /**
      * 监听主播关闭直播事件
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'POST',
        url: '/ec/c/operation/popularize/listener/close',
        data: data
      })
      