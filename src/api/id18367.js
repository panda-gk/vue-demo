
      /**
      * b端任务报名
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'POST',
        url: '/ec/b/operation/mission/apply',
        data: data
      })
      