
      /**
      * 助力红包发放记录
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid19417 {}
    export class IResid19417 {}
    
      export default (data?): Serve<
        IReqid19417,
        IResid19417['data']
      > => request({
        method: 'GET',
        url: '/ec/b/operation/mission/helpredenvelope/list',
        data: {params: data}
      })
      