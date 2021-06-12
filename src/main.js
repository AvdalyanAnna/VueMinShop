import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
import store from './store/index';
// import Router from './router/index.js'

//Plugins
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
import './assets/scss/main.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


