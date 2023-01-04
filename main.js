import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif