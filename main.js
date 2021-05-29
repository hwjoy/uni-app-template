import Vue from 'vue'
import App from './App'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

const app = new Vue({
  ...App
})
app.$mount()
