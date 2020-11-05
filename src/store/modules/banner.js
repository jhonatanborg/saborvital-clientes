import actionsGlobal from "../actions";
import mutationsGlobal from "../mutations";

const product = {
  namespaced: true,
  state: () => ({
    banners: null,
  }),

  getters: {},
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal },
};

export default product;
