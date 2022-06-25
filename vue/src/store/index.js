import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      data: { name: "User" },
      token: "123",
    },
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {},
});

export default store;
