export default {
  namespaced: true,
  state: {
    routes: [],
  },
  mutations: {
    setRoutes(state, payload) {
      state.routes = payload;
    },
  },
};
