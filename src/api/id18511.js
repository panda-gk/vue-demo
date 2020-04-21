
      /**
      * 查看手气
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/c/operation/mission/helpredenvelope/grab/tops',
        data: {params: data}
      })
      