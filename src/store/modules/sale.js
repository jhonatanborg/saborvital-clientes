import actionsGlobal from "../actions";
import mutationsGlobal from "../mutations";

const sale = {
  namespaced: true,
  state: {
    cart: {
      open: false,
      step: null,
    },
    sale: null,
    sales: [],
    myPurchases: [],
    purchaseDetails: null,
    districts: null,
    addressDelivery: null,
  },
  mutations: { ...mutationsGlobal },

  getters: {
    getSale(state) {
      let products = [];
      if (state.sale) {
        state.sale.map((item) => {
          products.push(item.item);
        });
      }
      return products;
    },
    getStatusSale(state) {
      if (state.sale.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  actions: { ...actionsGlobal },
};

export default sale;
