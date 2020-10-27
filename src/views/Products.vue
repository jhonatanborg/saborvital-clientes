<template>
  <div class="grey lighten-5">
    <ChefList />
    <div v-if="!$vuetify.breakpoint.xsOnly">
      <v-app-bar class="fixed-bar" flat color="teal accent-4" dark>
        <div class="mx-5">
          <v-btn
            small
            text
            v-for="(item, i) in categories"
            :key="i"
            @click="filterScroll(item)"
          >
            <b v-text="item.name"> </b>
          </v-btn>
        </div>
      </v-app-bar>
    </div>
    <div v-else class="col-sm-10">
      <v-row justify-sm="center" dense>
        <v-col sm="auto">
          <v-overflow-btn
            dense
            hide-details
            class="my-0 py-0"
            color="#ffa602"
            @change="filterScrollM()"
            v-model="filterItem"
            :items="categories"
            item-text="name"
            item-value="id"
            label="Relevância"
            target="#dropdown-example"
          ></v-overflow-btn>
        </v-col>
      </v-row>
    </div>

    <v-container fluid>
      <div v-for="(item, i) in products" :key="i" cols="12">
        <div :id="'go' + item.id">
          <div class="title-category " v-if="item.products.length > 0">
            <span v-text="item.name"></span>
          </div>
        </div>
        <v-row>
          <v-col
            cols="12"
            sm="4"
            v-for="(product, i) in item.products"
            :key="i"
          >
            <CardProduct :product="product" />
          </v-col>
        </v-row>
      </div>
    </v-container>

    <v-bottom-navigation
      background-color="transparent"
      app
      v-if="sale && sale.length > 0 && $vuetify.breakpoint.xsOnly"
    >
      <v-btn color="teal accent-4 " block @click="openSale()" rounded>
        <v-row justify="center" align="center">
          <v-col>
            <v-icon color="white">mdi-cart</v-icon>
          </v-col>
          <v-col>
            <v-chip small>{{ sale.length }}</v-chip>
          </v-col>
        </v-row>
      </v-btn>
    </v-bottom-navigation>
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
  data() {
    return {
      filterItem: null,
    };
  },
  computed: {
    products() {
      return this.$store.state.product.products;
    },
    sale() {
      return this.$store.state.sale.sale || [];
    },
    categories() {
      return this.$store.getters["product/getCategories"];
    },
  },
  methods: {
    openSale() {
      if (this.$store.state.sale.sale.length > 0) {
        this.$store.commit("sale/request", ["cart", { open: true, step: 1 }]);
      } else {
        this.$store.commit("sale/request", ["cart", { open: true, step: 4 }]);
      }
    },
    filterScroll(item) {
      this.$vuetify.goTo((this.selector = "#go" + item.id), { offset: 80 });
    },
    filterScrollM() {
      if (this.filterItem) {
        this.$vuetify.goTo((this.selector = "#go" + this.filterItem));
      }
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
}
.fixed-sale {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 10em;
  z-index: 5;
}
.fixed-category {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 5em;
  z-index: 1;
  padding-top: 100px;
}
</style>
