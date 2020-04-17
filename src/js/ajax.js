import axios from 'axios'
import qs from 'qs'
// import Vue from 'vue'
// import config from '../config'
import config from '../config'

console.log(config, 111111111111)
// let root = process.env.NODE_ENV == "development" ? "https://dev.api.hzskss.com/" : 'https://api.hzskss.com/';
// let root = config.BASE_URL
let baseURL = config.isMock ? config.MOCK.url : config.BASE_URL // 请求接口地址
axios.defaults.baseURL = baseURL
// 获取签名
export const Axios = axios.create({
  timeout: 10000,
  responseType: 'json'
  // withCredentials: true, // 是否允许带cookie这些
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  // }
})
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // post请求
  if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  // if (!response.data || response.data==undefined){
  //     return response
  //   }

  // if (response.data && response.data.code&&response.data.code != '000' && response.data.code != '500' ) {
  //   Message.error(response.data.msg)
  //   setTimeout(() => {
  //     window.location.href = root+'/login'
  //   }, 1000);

  // }
  // if (response.data.code == 10004) {
  //   refresh_token()
  // }
  // if (response.data.code == 10007) {
  //   localStorage.removeItem('access_token')
  //   localStorage.removeItem('refresh_token')
  //   // window.location.href = root + '/#/login'
  //   window.location.href = location.origin + '/#/login'

  // }
  // refresh_token

  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 导出的时候 需要设置flag=true
const post = function (url, data) {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'post',
      url: url,
      // headers: {
      //   'Content-Type': type ||'application/x-www-form-urlencoded;charset=utf-8',
      // },
      data: data,
      withCredentials: false
    })
      .then(function (res) {
        resolve(res.data)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
const get = function (url, params) {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'get',
      url: url,
      params: params
    })
      .then(function (res) {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export default {
  get,
  post
}
