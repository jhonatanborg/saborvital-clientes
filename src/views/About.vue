<template>
  <div>
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
    <div class="my-5 mx-auto col-xl-8">
      <v-row justify="center" align="center">
        <v-img
          src="@/assets/logo-banner.png"
          max-height="300"
          max-width="300"
          contain
        ></v-img>
        <v-col cols="12">
          <v-row justify="center">
            <v-col
              cols="12"
              sm="3"
              v-for="(item, n) in topItems"
              :key="n"
              class="my-3"
            >
              <v-card flat color="transparent" class="text-center">
                <v-avatar tile color="transparent" size="130">
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
          <div class="text-center details-banner"></div>
        </v-col>
      </v-row>
    </div>

    <v-row no-gutters class="fill-height theme-vital " align="center">
      <v-col cols="12" sm="6" class="#156f72">
        <v-row justify="center" no-gutters align="center" class="my-12 ">
          <v-col cols="12" sm="12">
            <div class="text-center mt-5 title-kumbucha">
              <span>{{ centerBanner.title }}</span>
            </div>
            <div class="text-center white--text pa-5 ">
              <span v-text="centerBanner.description"> </span>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          class="fill-height"
          :src="
            centerBanner.image
              ? $store.state.server + centerBanner.image
              : 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder-300x300.png'
          "
        ></v-img>
      </v-col>
    </v-row>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="12">
          <div class="title-team text-center">
            <span v-text="team.title">Equipe Sabor Vital</span>
          </div>
          <div class="text-center pa-5 text-subtitle">
            <span v-text="team.description"> </span>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="3" v-for="(item, index) in chefe" :key="index">
          <v-card class="grey lighten-5" flat>
            <v-row justify="center">
              <v-avatar class="ma-5" tile size="250">
                <v-img
                  :src="
                    item.image
                      ? $store.state.server + item.image
                      : 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder-300x300.png'
                  "
                ></v-img>
              </v-avatar>

              <div class="my-5">
                <div class="text-center team-name">
                  <span v-text="item.title"></span>
                </div>
                <v-divider class="mx-12 my-3"></v-divider>
                <div class="text-center team-function ">
                  <span v-text="item.description"></span>
                </div>
              </div>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div>
      <iframe
        id="vid"
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/ft7WphkjYdM?autoplay=1"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <Footer />
  </div>
</template>

<script>
const video = require("@/assets/video/saborvital_video.mp4");
import Footer from "@/components/shared/Footer.vue";
export default {
  components: {
    Footer,
  },
  computed: {
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
    banners() {
      return this.$store.state.banner.banners || [];
    },
    topItems() {
      let result = this.banners.filter((banner) => {
        return banner.type == "Home";
      });
      return result || [];
    },
    centerBanner() {
      let result = this.banners.filter((banner) => {
        return banner.type == "Center";
      });

      return result[0] || [];
    },
    team() {
      let result = this.banners.filter((banner) => {
        return banner.type == "Team";
      });
      return result[0] || [];
    },
    chefe() {
      let result = this.banners.filter((banner) => {
        return banner.type == "Chefe";
      });
      return result || [];
    },
  },
  data() {
    return {
      video: video,
      icons: [
        ["fab fa-facebook", "https://www.facebook.com/"],
        ["fab fa-twitter", "https://twitter.com/"],
        ["fab fa-pinterest", "https://www.pinterest.com/"],
        ["fab fa-linkedin", "https://www.linkedin.com/"],
        ["fab fa-telegram", "https://telegram.me/"],
        ["fab fa-instagram", "https://instagram.com/"],
      ],
      banner: "https://i.ytimg.com/vi/YyUhslfLfZM/maxresdefault.jpg",
    };
  },
};
</script>

<style>
#vid {
  max-width: 100%;
}
.title-kumbucha {
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 40px;
  color: white;
}
.title-team {
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 40px;
  color: teal;
}

.text-btn {
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 22px !important;
}
.text-subtitle {
  color: #333;
}
.team-name {
  font-size: 18px;
  color: teal;
  font-weight: 900;
}
.team-function {
  color: #333;
  font-size: 13px;
  text-transform: uppercase;
}
.carousel,
.theme-vital {
  background-color: #156f72;
}
</style>
