
      /**
      * 复制任务
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'POST',
        url: '/ec/m/operation/mission/copy',
        data: data
      })
      