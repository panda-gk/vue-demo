
      /**
      * 追加助力红包发起支付
      * 
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'POST',
        url: '/ec/b/operation/mission/helpredenvelope/create_1586845680647',
        data: data
      })
      