import Vue from 'vue'
import App from './App.vue'
//引入elment-ui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入mock数据
import "./mock/mockServe.js";
//引入全局组件
import all from './components/all';
Vue.component(all.name, all);

Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
