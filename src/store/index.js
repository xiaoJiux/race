import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: JSON.parse(localStorage.getItem('userData')),
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
