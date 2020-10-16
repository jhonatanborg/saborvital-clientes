import actionsGlobal from "../actions";
import mutationsGlobal from "../mutations";

const product = {
  namespaced: true,
  state: () => ({
    DialogProduct: false,
  }),

  getters: {},
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal },
};

export default product;
