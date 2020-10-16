import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import product from "./modules/product";
import sale from "./modules/sale";
// import createPersistedState from "vuex-persistedstate";

import actionsGlobal from "./actions";
import mutationsGlobal from "./mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user, product, sale },

  // plugins: [createPersistedState()],
  state: {
    exitModal: false,
    loading: false,
  },
  mutations: {
    ...mutationsGlobal,
  },
  actions: {
    ...actionsGlobal,
  },
});
