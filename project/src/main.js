import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import {Input,Empty,Button} from 'element-ui'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('el-input',Input)
Vue.component('el-empty',Empty)
Vue.component('el-button',Button)

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
//跳转时总是在页面顶端
router.afterEach(() => {
  window.scrollTo(0,0);
});