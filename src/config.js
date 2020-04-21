/**
 * 项目环境接口配置
 * @api: 数据接口
 * @static: 静态资源
 */
// let root = process.env.NODE_ENV == "development" ? "https://dev.api.hzskss.com/" : 'https://api.hzskss.com/';
const config = {
  development: {
    api: '//yapi.mockuai.com/mock/1434/',
    static: '/'
  },
  test: {
    api: '//172.16.5.213:8078', // 后台测试环境
    static: './'
  },
  production: {
    api: '//116.62.12.153:8087', // 11楼 打包11楼的
    // api: '//47.99.121.117:8087', // 5楼
    static: './'
  }
}
const mock = {
  url: 'http://rap.ywwl.com:8080/mockjsdata/72'
}
console.log(process)
const env = process.env.NODE_ENV === 'development' ? 'development' : process.env.VUE_APP_API === 'test' ? 'test' : 'production'
/* eslint-disable-next-line */
// module.exports = {
//   BASE_URL: config[env].api,
//   CONFIG: config,
//   MOCK: mock,
//   isMock: true
// }
export default {
  BASE_URL: config[env].api,
  CONFIG: config,
  MOCK: mock,
  isMock: false
}
