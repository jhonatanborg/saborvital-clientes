<template>
  <v-img :src="banner" class="px-8  white--text ">
    <v-row dense justify="center" align="center" class="px-6 fill-height">
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
            <v-btn color="white darken-4" outlined depressed
              >Ver mais promoções</v-btn
            >
          </div>
        </div>
      </v-col>
      <v-col cols="8" class="">
        <v-row dense align="center" justify="center"
          ><v-col v-for="n in 4" cols="12" sm="3" :key="n">
            <v-card @click="dialog = true" link flat class="pa-5">
              <v-row align="center" no-gutters justify="center" class="">
                <v-col cols="12" sm="12"
                  ><div class="display-2">
                    <v-img
                      aspect-ratio="1.1"
                      src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    ></v-img>
                  </div>
                  <div class="py-4 title-product">
                    <span>Batata baroa refogada vegana</span>
                  </div>
                  <div class="price-product">
                    <span>
                      <b>R$ 15,00</b>
                    </span>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col></v-row
        >
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      banner: "https://i.imgur.com/9wkdGzO.png",
    };
  },
};
</script>

<style>
.title-category {
  font-size: 22px;
  font-weight: bold;
}
</style>
