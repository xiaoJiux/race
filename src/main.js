import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.less';

//导入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
//配置$axios
import axios from 'axios'
// axios.defaults.baseURL = "http://localhost:3000"
//允许携带cookie
// axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.config.productionTip = false


//全局混入
Vue.mixin({
  data(){
    return {
      urlBase: process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""
    }
  },
  filters: {
    fmtTime(value) {
      let date = new Date(value),
        YY = date.getFullYear(),
        MM = date.getMonth() + 1,
        DD = date.getDate(),
        hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds();

      MM < 10 && (MM = "0" + MM)
      DD < 10 && (DD = "0" + DD)
      hh < 10 && (hh = "0" + hh)
      mm < 10 && (mm = "0" + mm)
      ss < 10 && (ss = "0" + ss)

      return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
