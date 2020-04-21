
      /**
      * 列出所有标签
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/m/operation/mission/tag/list',
        data: {params: data}
      })
      