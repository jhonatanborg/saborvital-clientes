<template>
  <v-card link flat raised @click="openProduct()">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title> Batata baroa refogada vegana</v-list-item-title>
        <v-list-item-subtitle>
          Escondinho de abóbora com shitake, acompanhado de tomate recheado com
          ricota e bolinho de arroz integral com manjericão*
        </v-list-item-subtitle>
        <span> R$ 514.00</span>
      </v-list-item-content>
      <v-list-item-avatar tile size="130" left>
        <v-img :src="product.product.image"> </v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    openProduct() {
      this.$store.commit("product/request", ["DialogProduct", true]);
    },
  },
};
</script>

<style></style>
