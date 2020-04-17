import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/reset.css'
import './style/common.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

console.log(router)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
