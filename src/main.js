import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store/'

// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Avue
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';



Vue.use(ElementUI);
Vue.use(Avue);

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

