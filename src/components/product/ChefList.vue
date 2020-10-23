<template>
  <v-img :src="banner" class="px-0 px-md-8   white--text ">
    <v-row dense justify="center" align="center" class="px-md-6 fill-height">
      <v-col cols="12" sm="4">
        <div class="regular">
          <div>
            <div class="subtitle-category">
              <span>#pratosdodia</span>
            </div>
            <div class="title-category">
              <span>Sugestões do chefe</span>
            </div>
          </div>
          <div class="details-promo text-left py-4">
            <span
              >Fique em casa: antes de abrir o app de delivery de comida,
              escolha uma entre 30 sugestões de prato</span
            >
          </div>
          <div>
            <v-btn
              to="/lista-de-produtos"
              color="white darken-4"
              outlined
              depressed
              >Ver Cardápio</v-btn
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="8" class="pr-0">
        <v-sheet
          class="mx-auto"
          color="transparent"
          elevation="0"
          max-width="900"
        >
          <v-slide-group active-class="success" show-arrows>
            <v-slide-item
              v-for="(product, n) in suggesteds"
              cols="3"
              sm="3"
              :key="n"
              class="mx-2 my-5 my-md-0"
            >
              <v-card
                @click="openProduct(product)"
                link
                flat
                class="pa-5"
                height="230"
                width="165"
              >
                <v-row align="center" no-gutters justify="center" class="">
                  <v-col cols="12" sm="12"
                    ><div class="display-2">
                      <v-img
                        aspect-ratio="1.1"
                        :src="$store.state.server + product.image"
                      ></v-img>
                    </div>
                    <div class="py-4 title-product">
                      <span v-text="product.name"></span>
                    </div>
                    <div class="price-product">
                      <span>
                        <b v-text="convertMoney(product.value)"></b>
                      </span>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <DialogProduct />
  </v-img>
</template>

<script>
import Mixins from "@/mixins/mixins.js";
import DialogProduct from "@/components/product/DialogProduct.vue";

export default {
  mixins: [Mixins],
  components: {
    DialogProduct,
  },
  data() {
    return {
      banner: "https://i.imgur.com/9wkdGzO.png",
    };
  },
  computed: {
    products() {
      return this.$store.state.product.products;
    },
    suggesteds() {
      return this.$store.getters["product/getSuggesteds"];
    },
  },
  methods: {
    openProduct(product) {
      // this.$store.commit("product/request", ["productModal", null]);
      this.$store.commit("product/request", ["DialogProduct", true]);
      this.$store.dispatch("product/request", {
        state: "productModal",
        method: "GET",
        url: "/product/" + product.id,
        noMsg: true,
      });
    },
  },
};
</script>

<style>
.title-category {
  font-size: 22px;
  font-weight: bold;
}
.title-product {
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* line-height: 36px; */
  max-height: 62px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
