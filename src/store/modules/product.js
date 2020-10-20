import actionsGlobal from "../actions";
import mutationsGlobal from "../mutations";

const product = {
  namespaced: true,
  state: () => ({
    DialogProduct: false,
    products: [],
    productModal: null,
  }),

  getters: {
    getCategories(state) {
      let categories = [];
      Object.values(state.products).forEach((value) => {
        categories.push({
          id: value.id,
          name: value.name,
        });
      });
      console.log(categories);
      return categories;
    },
  },
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal },
};

export default product;
