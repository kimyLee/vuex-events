import Vue from 'vue'
import Router from 'vue-router'
import pageOne from '@/views/pageOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageOne',
      component: pageOne
    }
  ]
})
