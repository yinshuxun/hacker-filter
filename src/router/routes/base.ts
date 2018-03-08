export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('views/home/index.vue')
  },
  {
    path: '/spec01',
    name: 'Spec01',
    component: () => import('views/spec01/index.vue')
  }, {
    path: '/spec02',
    name: 'Spec02',
    component: () => import('views/spec02/index.vue')
  },
  {
    path: '/spec03',
    name: 'Spec03',
    component: () => import('views/spec03/index.vue')
  }]
