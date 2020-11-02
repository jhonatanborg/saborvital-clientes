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
    <carousel
      class="carousel py-5"
      :autoplay="true"
      :perPageCustom="[
        [360, 1],
        [768, 1],
        [1024, 1],
      ]"
    >
      <slide class="my-5">
        <v-row no-gutters justify="center" align="center">
          <v-col cols="auto" sm="2" lg="2" md="2" xl="2">
            <div class="fill-height">
              <v-img
                max-width="150px"
                src="https://i.imgur.com/N2nocQo.png"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="6" lg="4" xl="4">
            <div class="pa-5 text-center">
              <div class="title-kumbucha text-center">
                <span>Kombucha Natural </span>
              </div>
              <div class="text-center mb-5 white--text">
                <span
                  >1 unidade de Bebida Fermentada gaseificada que Auxilia no
                  fortalecimento do sistema Imunológico (360ml)
                </span>
              </div>
              <div>
                <v-btn block x-large depressed class="text-btn" color="white"
                  >COMPRE AGORA</v-btn
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </slide>
      <slide class="my-5">
        <v-row no-gutters justify="center" align="center">
          <v-col cols="auto" sm="2" lg="2" md="2" xl="2">
            <div class="fill-height">
              <v-img
                max-width="150px"
                src="https://gtslivingfoods.com/wp-content/uploads/2016/12/trilogy@2x-7.png"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="6" lg="4" xl="4">
            <div class="pa-5 text-center">
              <div class="title-kumbucha text-center">
                <span>Kombucha Natural </span>
              </div>
              <div class="text-center mb-5 white--text">
                <span
                  >1 unidade de Bebida Fermentada gaseificada que Auxilia no
                  fortalecimento do sistema Imunológico (360ml)
                </span>
              </div>
              <div>
                <v-btn block x-large depressed class="text-btn" color="white"
                  >COMPRE AGORA</v-btn
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </slide>
    </carousel>
    <div>
      <v-img
        src="@/assets/footer-image.png"
        height="300px"
        :aspect-ratio="16 / 9"
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
            <div class="details-promo text-center white--text">
              <span>
                <b>
                  Tractors, combines, forage harvesters, balers, mower
                  conditioners, sprayers, trailers,… All is for hired</b
                >
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
</style>
