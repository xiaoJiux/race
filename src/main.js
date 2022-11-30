import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.less';

//导入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
//配置$axios
import axios from 'axios'

Vue.use(Vant);
axios.defaults.baseURL = "http://www.wuhuazai.com"
// axios.defaults.baseURL = "http://172.20.10.7:8080/"
// axios.defaults.headers.common['Content-Type'] = 'application/json'
if (localStorage.getItem('token') !== null) {
  console.log('token is setting');
  axios.defaults.headers.common['X-token'] = localStorage.getItem("token");
}
// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 2xx 范围内的状态码都会触发该函数。
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   // 超出 2xx 范围的状态码都会触发该函数。
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });
// 允许携带cookie
// axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.config.productionTip = false


//全局混入
Vue.mixin({
  data() {
    return {
      urlBase: process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""
    }
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
