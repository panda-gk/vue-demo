
      /**
      * b端获取任务详情
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/b/operation/mission/detail/get',
        data: {params: data}
      })
      