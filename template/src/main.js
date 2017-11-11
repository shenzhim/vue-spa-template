// import "babel-polyfill";
import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './vue/App'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})