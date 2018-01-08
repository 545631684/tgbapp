import Vue from 'vue'
import Vuex from 'vuex'
import localstorage from 'vue-localstorage'

Vue.use(Vuex)
Vue.use(localstorage)

export default new Vuex.Store({
  state: { // 设置变量  语法：this.$store.state
    username: '',
    uid: ''
  },
  getters: { // 计算数学函数
  },
  mutations: { // 修改函数，必须同步执行，不支持调用外部函数
    setUsername (state, username, uid) { // 赋值
      state.username = username
      state.uid = uid
    },
    Cancellation (state, username) { // 注销
      state.username = username
      state.uid = username
      localStorage.clear()
    }
  },
  actions: { // 可以执行异步修改函数
    setLocalStorage (state) {
      if (state.state.username.length !== 0) {
        window.localStorage.setItem('state', state.state.username)
        window.localStorage.setItem('uid', state.state.uid)
        // window.localStorage.setItem('state', JSON.stringify(state.state.username))
        // console.log(localStorage.state)
      }
    },
    getLocalStorage (state) {
      state.state.username = localStorage.state
      state.state.uid = localStorage.uid
    }
  },
  modules: { // 模块化调用vuwx状态对象
  }
})