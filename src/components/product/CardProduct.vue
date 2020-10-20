<template>
  <v-card link flat raised @click="openProduct(product)">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title v-text="product.name"> </v-list-item-title>
        <v-list-item-subtitle v-text="product.description">
        </v-list-item-subtitle>
        <span v-text="convertMoney(product.value)"></span>
      </v-list-item-content>
      <v-list-item-avatar tile size="130" left>
        <v-img
          :src="
            product.image
              ? $store.state.server + product.image
              : 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder-300x300.png'
          "
        >
        </v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
import Mixins from "@/mixins/mixins.js";

export default {
  mixins: [Mixins],
  props: {
    product: Object,
  },
  methods: {
    openProduct(product) {
      this.$store.dispatch("product/request", {
        state: "productModal",
        method: "GET",
        url: "/product/" + product.id,
        noMsg: true,
      });
      this.$store.commit("product/request", ["DialogProduct", true]);
    },
  },
};
</script>

<style></style>
