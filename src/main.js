import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTelInput from 'vue-tel-input'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueTelInput)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
