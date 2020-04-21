
      /**
      * 查看红包的助力数
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/c/operation/mission/helpredenvelope/helpcount',
        data: {params: data}
      })
      