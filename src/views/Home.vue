<template>
  <div class="home grey lighten-5">
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img :src="main" class="px-8">
          <v-row
            align="center"
            no-gutters
            justify="center"
            class="white--text fill-height"
          >
            <v-col cols="5"
              ><div class="display-2">
                <span>
                  <b> Kumbucha </b>
                </span>
              </div>
              <div class="py-4 details-banner">
                <span
                  >Regulariza o organismo, revitaliza a alma e tranquiliza a
                  mente! Rica em probióticos Fortalece o sistema imunológico
                  Auxilia o sistema digestivo Promove a saúde das
                  articulações</span
                >
              </div>
              <v-row>
                <v-col cols="5">
                  <v-btn block color="white" depressed>Fazer pedido</v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <div>
      <ChefList />
    </div>
    <div></div>

    <v-img :src="bannerInfo" max-height="300px" class="px-8">
      <v-row dense justify="start" align="center" class="px-6 fill-height">
        <v-col cols="4">
          <div class="regular">
            <div>
              <div class="subtitle-category">
                <span>#PROMOCAOSABORVITAL</span>
              </div>
              <div class="title-category">
                <span>Promoções</span>
              </div>
            </div>
            <div class="details-promo text-left py-4">
              <span>
                <b>
                  Fique em casa: antes de abrir o app de delivery de comida,
                  escolha uma entre 30 sugestões de prato</b
                >
              </span>
            </div>
            <div>
              <v-btn dark color="green darken-4" depressed
                >Ver mais promoções</v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
import ChefList from "@/components/product/ChefList.vue";
export default {
  components: {
    ChefList,
  },
  name: "Home",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      bannerInfo:
        "https://images.pexels.com/photos/4033328/pexels-photo-4033328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      banner: "https://i.imgur.com/9wkdGzO.png",
      main: "https://i.imgur.com/FhzGn2D.png",
      dialog: false,
      items: [
        "Batatinha",
        "Farofa",
        "Gengibre assado",
        "Salada de beringela",
        "Arroz tropero",
        "Banana frita",
        "Camarão empanado",
        "Tempura de Frango",
      ],
      model: ["Carrots"],
      quantity: 1,
      itemQuantity: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      comment: null,
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>
<style>
.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
.details-banner {
  font-size: large;
}
.title-category {
  font-size: large;
  font-weight: bold;
}
.subtitle-category {
  font-size: small;
}
.title-product {
  font-size: 16px;
  color: #488e4b;
}
.price-product {
  font-size: 16px;
  font-weight: bold;
}
.title-item-category {
  font-size: 15px;
}
.details-promo {
  font-size: 15px;
}
</style>
