<template>
  <div class="grey lighten-5">
    <ChefList />
    <v-app-bar class="fixed-bar" flat color="teal accent-4" dark>
      <div class="mx-5">
        <v-btn small text v-for="(item, i) in categories" :key="i">
          <b v-text="item.name"> </b>
        </v-btn>
      </div>
    </v-app-bar>
    <v-container fluid>
      <v-row class="px-8" v-for="(item, i) in products" :key="i">
        <v-col cols="12">
          <div>
            <div class="title-category">
              <span v-text="item.name">Promoções</span>
            </div>
          </div>
        </v-col>
        <v-col cols="4" v-for="(product, i) in item.products" :key="i">
          <CardProduct :product="product" />
        </v-col>
      </v-row>
    </v-container>
    <DialogProduct />
  </div>
</template>

<script>
import CardProduct from "@/components/product/CardProduct.vue";
import ChefList from "@/components/product/ChefList.vue";
import DialogProduct from "@/components/product/DialogProduct.vue";
export default {
  components: {
    CardProduct,
    ChefList,
    DialogProduct,
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    products() {
      return this.$store.state.product.products;
    },
    categories() {
      return this.$store.getters["product/getCategories"];
    },
  },
  methods: {
    getProducts() {
      this.$store.dispatch("product/request", {
        state: "products",
        method: "GET",
        url: "/product/",
        noMsg: true,
      });
    },
  },
};
</script>

<style>
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 5em;
  z-index: 2;
  background-color: khaki;
}
</style>
