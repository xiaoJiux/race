import Vue from 'vue';
import {Toast} from 'vant';
import axios from "axios";

Vue.use(Toast);

//保存token
export function LocalStorage(token, userData) {
  if (localStorage.getItem('token') === null) {
    localStorage.setItem('token', token)
    localStorage.setItem('userData', JSON.stringify(userData))
    axios.defaults.headers.common = {
      'X-token': localStorage.getItem('token')
    }
  } else {
    Toast('请勿重复登录!');
  }

}

//激活账号
export function activation() {

}

//清除token
export function clear() {
  localStorage.clear()
}

