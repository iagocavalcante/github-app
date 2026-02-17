const routes = [
  {
    path: '/',
    component: () => import('components/Hello.vue')
  },
  {
    path: '/repos',
    component: () => import('components/Repos.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('components/Error404.vue')
  }
]

export default routes
