
      /**
      * 查看红包是否被抢完
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/c/operation/mission/redenvelope/cangrab',
        data: {params: data}
      })
      