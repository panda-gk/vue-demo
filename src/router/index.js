import Vue from 'vue'
import Router from 'vue-router'
import defaultRoute from './default'

Vue.use(Router)

let router = new Router({
  routes: [...defaultRoute]
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限 商户后台不需要
//     const access_token = localStorage.getItem('access_token')
//     if (access_token) { // 判断当前的token是否存在
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next();
//   }
// });
export default router
