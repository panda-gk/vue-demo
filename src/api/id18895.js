
      /**
      * 删除标签
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'POST',
        url: '/ec/m/operation/mission/tag/delete',
        data: data
      })
      