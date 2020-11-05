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
      <slide>
        <v-row no-gutters justify="center" align="center">
          <v-col cols="auto" sm="2" lg="2">
            <div class="fill-height">
              <v-img
                max-width="150px"
                src="https://i.imgur.com/N2nocQo.png"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
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
      <slide class=" py-5">
        <v-row no-gutters justify="center" align="center">
          <v-col cols="auto" sm="2" lg="2">
            <div class="fill-height">
              <v-img
                max-width="150px"
                src="https://i.imgur.com/N2nocQo.png"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
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

    <v-row no-gutters class="fill-height theme-vital " align="center">
      <v-col cols="12" sm="6" class="#156f72">
        <v-row justify="center" no-gutters align="center" class="my-12 ">
          <v-col cols="12" sm="12">
            <div class="text-center mt-5 title-kumbucha">
              <span>{{ centerBanner.title }}</span>
            </div>
            <div class="text-center white--text pa-5 ">
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </span>
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
      <video muted autoplay :src="video" width="100%"></video>
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
      about: [
        {
          icon: "https://i.imgur.com/C8jFt8Y.png",
          title: "Organic Products",
          details:
            "We offer the season’s best mix of 100% certified-organic produce and hand-crafted farm products",
        },
        {
          icon: "https://i.imgur.com/CDBDjfO.png",
          title: "RFS Machines",
          details:
            "Tractors, combines, forage harvesters, balers, mower conditioners, sprayers, trailers,… All is for hired",
        },
        {
          icon: "https://i.imgur.com/WTHfGaR.png",
          title: "Food Strategy",
          details:
            "Create a broader network of organizations & businesses contributing to our food system",
        },
        {
          icon: "https://i.imgur.com/o9jIwhd.png",
          title: "Water Management",
          details:
            "Minimize water costs and efficiently distribute water, help farmers see improvements in yields",
        },
      ],
    };
  },
};
</script>

<style>
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
