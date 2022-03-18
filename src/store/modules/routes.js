import router from '@/router';
import asyncRouter from '@/router/asyncRouter';
function generateRoute(routeInfo) {
  routeInfo.forEach((item) => {
    if (item.children && item.children.length) {
      generateRoute(item.children);
    } else {
      router.addRoute('Layout', {
        path: item.path.slice(1),
        component: asyncRouter[item.name],
      });
      console.log(item.path.slice(1));
    }
  });
}
export default {
  namespaced: true,
  state: {
    routes: [],
  },
  mutations: {
    setRoutes(state, payload) {
      state.routes = payload;
      //这里注册路由。首先把路由注册到layout下面，中间用到递归,首先把路由全都注册到layout下面
      console.log(payload, 'payload');
      generateRoute(payload);
      console.log(router.getRoutes(), 'rieiieieiei');
    },
  },
};
