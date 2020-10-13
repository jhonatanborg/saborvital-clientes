<template>
  <div class="grey lighten-5">
    <ChefList />
    <v-toolbar app class="fixed-bar" flat color="black lighten-3" dark>
      <div class="mx-5">
        <v-btn small text v-for="n in 5" :key="n">
          <b>
            Sugestões do chefe
          </b>
        </v-btn>
      </div>
    </v-toolbar>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div>
            <div class="subtitle-category">
              <span>#PROMOCAOSABORVITAL</span>
            </div>
            <div class="title-category">
              <span>Promoções</span>
            </div>
          </div>
        </v-col>
        <v-col cols="4" v-for="n in 6" :key="n">
          <CardProduct
            :product="{
              product: {
                image:
                  'https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
            }"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div>
            <div class="subtitle-category">
              <span>#PROMOCAOSABORVITAL</span>
            </div>
            <div class="title-category">
              <span>Promoções</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="4" v-for="n in 5" :key="n">
          <CardProduct
            :product="{
              product: {
                image:
                  'https://images.pexels.com/photos/248509/pexels-photo-248509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
            }"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div>
            <div class="subtitle-category">
              <span>#PROMOCAOSABORVITAL</span>
            </div>
            <div class="title-category">
              <span>Promoções</span>
            </div>
          </div>
        </v-col>
        <v-col cols="4" v-for="n in 5" :key="n">
          <CardProduct
            :product="{
              product: {
                image:
                  'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
            }"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardProduct from "@/components/product/CardProduct.vue";
import ChefList from "@/components/product/ChefList.vue";
export default {
  components: {
    CardProduct,
    ChefList,
  },
};
</script>

<style>
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 5em;
  z-index: 2;
  background-color: khaki;
}
</style>
