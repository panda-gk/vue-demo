
      /**
      * b端查询任务列表
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/b/operation/mission/list',
        data: {params: data}
      })
      