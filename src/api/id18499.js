
      /**
      * 抢红包
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/c/operation/mission/helpredenvelope/grab',
        data: {params: data}
      })
      