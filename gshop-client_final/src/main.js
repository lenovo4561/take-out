/*
JS入口
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import store from './store'
import {Button} from 'mint-ui'

import './mock/mockServer' // 加载mockServer即可

// 注册全局组件
Vue.component(Button.name, Button)

Vue.prototype.$http = Axios
/* eslint-disable no-new */
new Vue({
  el: '#App',
  render: h => h(App),
  router,
  store
})
