import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () =>
      // import('@/views/layout'),
      import(/* webpackChunkName: "about" */ '@/views/Layout/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
