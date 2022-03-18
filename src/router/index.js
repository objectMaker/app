import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/Layout',
  },
  {
    path: '/Layout',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Layout/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
import axios from 'axios';
import store from '@/store';
//在beforeEach注册路由
router.beforeEach(async (to, from, next) => {
  if (store.state.routes.routes && store.state.routes.routes.length) {
    console.log('已经注册过了');
    next();
  } else {
    const res = await axios.post('/api/user', {
      data: {
        id: 2, //id为2是管理员
      },
    });
    console.log(res, 'res');
    store.commit('routes/setRoutes', res.data);
    next({ ...to, replace: true });
  }
});

export default router;
