import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/vue/Home'
import ErrorComp from '@/vue/Error'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorComp
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '@/vue/About').catch(errorHandeler)
    },
  ]
})

const errorHandeler = function() {
  router.push('/error');
}

export default router;