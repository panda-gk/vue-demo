const routes = [
  {
    path: '/index',
    name: 'index',
    meta: {
      requireAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  },
  {
    path: '/',
    name: 'index',
    meta: {
      component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
    }
  },
  {
    path: '*',
    redirect: '/index'
  }
]

export default routes
