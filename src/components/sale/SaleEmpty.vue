<template>
  <div>
    <div class="d-flex justify-space-bettwen my-3 align-center">
      <v-list-item two-line>
        <v-list-item-content> </v-list-item-content>
      </v-list-item>
    </div>
    <div class="align-self-center mx-auto pa-5">
      <div class="text-center">
        <div></div>
        <v-row justify="center">
          <v-col cols="4">
            <v-img src="https://i.imgur.com/FIeYKm4.png"> </v-img>
          </v-col>
        </v-row>

        <div>
          <h3>A sua sacola está vazia</h3>
        </div>
        <div class="my-3">
          <h4 color="grey lighten-5">
            Não sabe o que comer? Dezenas de delicias esperam por você!
          </h4>
        </div>
        <v-btn large color="teal accent-4" @click="closeSale()" dark
          >Veja o cardápio</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from "@/mixins/mixins.js";

export default {
  mixins: [Mixins],
  computed: {
    sale() {
      return this.$store.state.sale.sale;
    },
    subTotal() {
      let sum;
      if (this.sale) {
        sum = this.sale.reduce((sum, item) => sum + item.total, 0);
      }
      return sum;
    },
  },
  methods: {
    deleteItemSale(item) {
      const payload = {
        table: "saledb",
        data: item,
        method: "delete",
      };
      this.$store.dispatch("sale/idb", payload);
      this.$store.dispatch("sale/idb", {
        state: "sale",
        method: "getAll",
        table: "saledb",
      });
    },
    closeSale() {
      this.$store.commit("sale/request", ["cart", { open: false, step: 1 }]);
      this.$router.push({ name: "list-products" }).catch(() => {});
    },
  },
};
</script>

<style></style>
