<template>
  <v-row dense justify="center" align="center" class="py-5 fill-height">
    <v-col cols="10" sm="12">
      <div class="regular ">
        <div>
          <div class="title-promo text-center">
            <span>Sugestões do chefe</span>
          </div>
        </div>
        <div class="details-promo pa-4 text-center">
          <span
            >Fique em casa: antes de abrir o app de delivery de comida, escolha
            uma entre 30 sugestões de prato</span
          >
        </div>
      </div>
    </v-col>
    <v-col cols="10" align-self="center">
      <carousel
        :perPageCustom="[
          [480, 1],
          [360, 1],
          [768, 4],
        ]"
      >
        <slide class="px-2" v-for="(product, n) in suggesteds" :key="n">
          <v-card
            outlined
            @click="openProduct(product)"
            link
            flat
            color="white"
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
            <div class="py-4 title-product text-center">
              <span v-text="product.name"></span>
            </div>
            <div class="price-product text-center my-4">
              <span>
                <b v-text="convertMoney(product.value)"></b>
              </span>
            </div>
          </v-card>
        </slide>
      </carousel>
    </v-col>
    <DialogProduct />
  </v-row>
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
.title-promo {
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 40px !important;
  color: #156f72;
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
.details-promo {
  font-size: 18px !important;
}
</style>
