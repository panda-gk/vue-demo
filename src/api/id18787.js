
      /**
      * 发布推广
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'POST',
        url: '/ec/c/operation/popularize/publish',
        data: data
      })
      