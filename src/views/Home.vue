<template>
  <div class="home grey lighten-5">
    <carousel
      class="carousel py-5"
      :autoplay="true"
      :perPageCustom="[
        [360, 1],
        [768, 1],
        [1024, 1],
      ]"
    >
      <slide class="my-5" v-for="(item, index) in carouselPages" :key="index">
        <v-row no-gutters justify="center" align="center">
          <v-col cols="auto" sm="2" lg="3" md="2" xl="2">
            <div class="fill-height">
              <v-img
                max-width="350px"
                :src="
                  item.image
                    ? $store.state.server + item.image
                    : 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder-300x300.png'
                "
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="6" lg="4" xl="4">
            <div class="pa-5 text-center">
              <div class="title-kumbucha text-center">
                <span v-text="item.title"></span>
              </div>
              <div class="text-center mb-5 white--text">
                <span v-text="item.description"
                  >1 unidade de Bebida Fermentada gaseificada que Auxilia no
                  fortalecimento do sistema Imunológico (360ml)
                </span>
              </div>
            </div>
          </v-col>
        </v-row>
      </slide>
    </carousel>
    <div class="mx-auto col-xl-8">
      <ChefList />
    </div>
    <div class="my-5 mx-auto col-xl-8">
      <v-row justify="center" align="center">
        <v-img
          src="@/assets/logo-banner.png"
          max-height="300"
          max-width="300"
          contain
        ></v-img>
        <v-col cols="10">
          <v-row justify="center">
            <v-col
              cols="12"
              sm="3"
              v-for="(item, n) in itemsTop"
              :key="n"
              class="my-3"
            >
              <v-card flat color="transparent" class="text-center">
                <v-avatar tile color="transparent" size="100">
                  <v-img
                    contain
                    aspect-ratio="1.7"
                    :src="
                      item.image
                        ? $store.state.server + item.image
                        : 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder-300x300.png'
                    "
                    class="white--text align-end"
                  >
                  </v-img>
                </v-avatar>

                <div class="px-5 title-item ">
                  <span v-text="item.title"></span>
                </div>
                <div class="line my-3">
                  <v-divider></v-divider>
                </div>
                <div>
                  <span class="details-item" v-text="item.description"> </span>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <!-- <v-divider></v-divider> -->
          <div class="text-center details-banner">
            <!-- <span
              >O Sabor Vital se dedica a servir uma comida natural, fresca e
              saudável, rica em nutrientes. O cardápio é preparado com amor,
              simplicidade e um coração alegre.
            </span> -->
          </div>
        </v-col>
      </v-row>
    </div>
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
            <div class="px-5 title-bootom-banner white-text text-center">
              <span v-text="bannerBottom.title"></span>
            </div>
            <div class="line my-3">
              <v-divider></v-divider>
            </div>
            <div class="details-promo text-center white--text">
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
    <Footer />
  </div>
</template>

<script>
import ChefList from "@/components/product/ChefList.vue";
import Footer from "@/components/shared/Footer.vue";
export default {
  components: {
    ChefList,
    Footer,
  },
  name: "Home",
  data() {
    return {
      bannerInfo:
        "https://images.pexels.com/photos/15964/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      banner: "https://i.imgur.com/9wkdGzO.png",
      main: "https://i.imgur.com/FhzGn2D.png",
      quantity: 1,
      itemQuantity: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      comment: null,
    };
  },
  computed: {
    sale() {
      return this.$store.state.sale.sale || [];
    },
    itemsTop() {
      let result = [];
      if (this.$store.state.banner.banners) {
        result = this.$store.state.banner.banners.filter((banner) => {
          return banner.type == "Home";
        });
      }
      return result || [];
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
    carouselPages() {
      let result = [];
      if (this.$store.state.banner.banners) {
        result = this.$store.state.banner.banners.filter((banner) => {
          if (banner.type === "Carousel" && banner.title !== null) {
            return banner.type == "Carousel";
          }
        });
      }
      return result || [];
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
.details-item {
  font-size: medium;
  color: #696969;
}
.title-category {
  font-size: large;
  font-weight: bold;
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 40px !important;
  color: teal;
}
.subtitle-category {
  font-size: small;
}
.title-product {
  font-size: 16px;
  color: #488e4b;
}
.title-item {
  font-weight: 900;
  margin-top: 15px;
  color: #333;
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
.title-banner {
  font-family: "Sansita Swashed", cursive;
  font-size: 40px;
}
.title-kumbucha {
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 40px;
  color: white;
}
.text-btn {
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 22px !important;
}
.line {
  width: 70px;
  text-align: center;
  margin: 0 auto;
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
