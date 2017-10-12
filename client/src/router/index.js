import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index
    },
    {
      path: '/profile',
      name: 'Hello',
      component: Profile
    }
  ]
})
