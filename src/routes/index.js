export default [
  {
    path: '/',
    name: 'BeerList',
    component: () => import('@/views/List')
  },
  {
    path: '/cart',
    name: 'BeerCart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Cart')
  }
]
