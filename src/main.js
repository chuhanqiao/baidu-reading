// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import $ from 'jquery'
Vue.config.productionTip = false;
/* eslint-disable no-new */
var Event = new Vue();
new Vue({
  el: '#main',
  router,
  store,
  template: '<App/>',
  components: { App }
})

