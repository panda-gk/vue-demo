
      /**
      * 查看直播间红包任务列表
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/b/operation/misson/redenvelope/list',
        data: {params: data}
      })
      