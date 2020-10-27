<template>
  <div>
    <v-card class="overflow-y-auto barscroll " style="height: 65vh;" flat>
      <div class="py-3 grey lighten-4">
        <span class="mx-3">Produtos</span>
      </div>
      <v-list-item v-for="(item, i) in sale" :key="i" dense link class="my-0">
        <v-list-item-content>
          <v-list-item-title>
            <b> {{ item.product_qtd }} X</b>
            {{ item.product_name }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <div class="price-item">
            <small>
              <b v-text="convertMoney(item.total)"></b>
            </small>
          </div>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon color="error" @click="deleteItemSale(item.id)">
            <v-icon>mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-card>

    <v-list-item class=" grey lighten-4">
      <span class="pay-subtitle">Subtotal</span>
      <v-spacer></v-spacer>
      <div
        class="font-weight-bold black--text"
        v-text="convertMoney(subTotal)"
      ></div>
    </v-list-item>
    <div class="col-sm-12">
      <v-btn color="teal accent-4" x-large @click="nextSale()" block dark
        >Confirmar</v-btn
      >
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
    nextSale() {
      if (localStorage.getItem("token")) {
        this.$emit("next");
      } else {
        this.$store.commit("user/request", ["login", { open: true, step: 1 }]);
      }
    },
    deleteItemSale(item) {
      const payload = {
        table: "saledb",
        data: item,
        method: "delete",
      };
      this.$store.dispatch("sale/idb", payload);
      this.$store
        .dispatch("sale/idb", {
          state: "sale",
          method: "getAll",
          table: "saledb",
        })
        .then((resp) => {
          if (resp.length === 0) {
            this.$store.commit("sale/request", [
              "cart",
              { open: true, step: 4 },
            ]);
          }
        });
    },
  },
};
</script>

<style></style>
