
      /**
      * 列出所有标签
      * 
      **/
      
    import request from './js/ajax'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18391 {}
    export class IResid18391 {
  data: {
    tag_list: {
      id: number;
      tag_name: string;
    }[];
  };
  code: number;
}
    
      export default (data?): Serve<
        IReqid18391,
        IResid18391['data']
      > => request({
        method: 'GET',
        url: '/ec/m/operation/mission/tag/list',
        data: {params: data}
      })
      