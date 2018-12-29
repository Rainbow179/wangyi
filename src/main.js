//js的接口文件

//引入各种库

import Vue from 'vue'


//引入各种主文件夹
import App from './App.vue'
import router from './router'
import store from './store'

//引入各种要定义全局的组件





new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
