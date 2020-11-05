<template>
  <div class="grey lighten-5 ">
    <ChefList class="col-xl-6 mx-auto" />
    <div v-if="!$vuetify.breakpoint.xsOnly">
      <v-app-bar class="fixed-bar" flat color="#156f72" dark>
        <div class="mx-5 col-xl-6 mx-auto">
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

    <v-container fluid class="col-xl-6">
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

    <div>
      <v-img
        :src="
          bannerBottom.image
            ? $store.state.server + bannerBottom.image
            : 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder-300x300.png'
        "
        height="400px"
        :aspect-ratio="16 / 9"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      >
        <v-row no-gutters dense justify="center" align="center">
          <v-col cols="auto" sm="12">
            <v-img
              src="@/assets/logo-branca.png"
              max-height="150"
              contain
            ></v-img>
          </v-col>
          <v-col cols="auto" sm="4">
            <div class="px-5 title-bootom-banner text-center">
              <span v-text="bannerBottom.title"></span>
            </div>
            <div class="line my-3">
              <v-divider></v-divider>
            </div>
            <div class="details-promo  text-center white--text">
              <span>
                <b v-text="bannerBottom.description"> </b>
              </span>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <v-bottom-navigation
      background-color="transparent"
      app
      v-if="sale && sale.length > 0 && $vuetify.breakpoint.xsOnly"
    >
      <v-btn color="#156f72 " block @click="openSale()" rounded>
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

    <Footer />
  </div>
</template>

<script>
import CardProduct from "@/components/product/CardProduct.vue";
import ChefList from "@/components/product/ChefList.vue";
import DialogProduct from "@/components/product/DialogProduct.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  components: {
    CardProduct,
    ChefList,
    DialogProduct,
    Footer,
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
    bannerBottom() {
      let result = [];
      if (this.$store.state.banner.banners) {
        result = this.$store.state.banner.banners.filter((banner) => {
          return banner.type == "Bottom";
        });
      }
      return result[0] || [];
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
.carousel {
  background-color: #156f72;
}
.title-bootom-banner {
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 40px !important;
  color: white;
}
</style>
