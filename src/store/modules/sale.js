import actionsGlobal from "../actions";
import mutationsGlobal from "../mutations";

const sale = {
  namespaced: true,
  state: {
    cart: {
      open: false,
      step: 1,
    },
    sale: null,
  },
  mutations: { ...mutationsGlobal },

  getters: {},
  actions: { ...actionsGlobal },
};

export default sale;
