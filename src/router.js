import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    }, {
      path: '/sobre-whatsapp-url',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
