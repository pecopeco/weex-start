import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
