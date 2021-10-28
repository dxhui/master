import Vue from 'vue'
import App from './App.vue'
//按需引入
import {Button} from 'element-ui';
Vue.config.productionTip = false
Vue.component('el-button',Button);
new Vue({
  el:'#app',
  render: h => h(App),
})