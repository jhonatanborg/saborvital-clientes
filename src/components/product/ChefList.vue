<template>
  <v-img :src="banner" class="px-0 py-5 px-md-8    white--text">
    <v-row
      dense
      justify="center"
      align="center"
      class="px-md-6 fill-height my-5"
    >
      <v-col cols="12" sm="12">
        <div class="regular text-center">
          <div>
            <div class="subtitle-category">
              <span>#pratosdodia</span>
            </div>
            <div class="title-category">
              <span>Sugestões do chefe</span>
            </div>
          </div>
          <div class="details-promo text-center pa-4">
            <span
              >Fique em casa: antes de abrir o app de delivery de comida,
              escolha uma entre 30 sugestões de prato</span
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" align-self="center">
        <carousel
          :perPageCustom="[
            [480, 1],
            [360, 1],
            [768, 4],
          ]"
        >
          <slide class="px-2" v-for="(product, n) in suggesteds" :key="n">
            <v-card
              @click="openProduct(product)"
              link
              flat
              class="pa-5 fill-height"
              width="100%"
            >
              <div>
                <v-img
                  aspect-ratio="1.1"
                  width="100%"
                  height="25%"
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
            </v-card>
          </slide>
        </carousel>
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
