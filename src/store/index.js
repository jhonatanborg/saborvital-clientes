import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import product from "./modules/product";
import sale from "./modules/sale";
import utils from "./modules/utils";
// import createPersistedState from "vuex-persistedstate";

import actionsGlobal from "./actions";
import mutationsGlobal from "./mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user, product, sale, utils },

  // plugins: [createPersistedState()],
  state: {
    exitModal: false,
    loading: false,
  },
  mutations: {
    loading(state, data) {
      state.loading = data;
    },
    ...mutationsGlobal,
  },
  actions: {
    ...actionsGlobal,
  },
});
