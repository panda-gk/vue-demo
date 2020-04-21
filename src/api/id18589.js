
      /**
      * 助力资格判断
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/c/operation/mission/help/judge',
        data: {params: data}
      })
      