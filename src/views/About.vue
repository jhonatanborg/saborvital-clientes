<template>
  <div>
    <carousel
      class="teal accent-4 py-5"
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
      <slide class="teal accent-4 py-5">
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
    <v-row dense no-gutters>
      <v-col cols="12" sm="6">
        <v-img
          class="fill-height"
          src="https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" class="pa-5">
        <v-row justify="center">
          <v-col
            cols="12"
            sm="5"
            v-for="(item, n) in about"
            :key="n"
            class="my-3"
          >
            <v-card flat color="transparent" class="text-center">
              <v-avatar color="transparent" size="100">
                <v-img
                  contain
                  aspect-ratio="1.7"
                  :src="item.icon"
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
                <span class="details-item" v-text="item.details"> </span>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="fill-height teal accent-4 " align="center">
      <v-col cols="12" sm="6" class="teal accent-4">
        <v-row justify="center" no-gutters align="center" class="my-12 ">
          <v-col cols="6" sm="3">
            <v-img src="@/assets/beer-box.png"></v-img>
          </v-col>
          <v-col cols="12" sm="12">
            <div class="text-center mt-5 title-kumbucha">
              <span>Kumbucha</span>
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
          src="https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ></v-img>
      </v-col>
    </v-row>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="12">
          <div class="title-team text-center">
            <span>Equipe Sabor Vital</span>
          </div>
          <div class="text-center pa-5 text-subtitle">
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmotempor incididunt ut labore et dolore magna aliqua enim
              minim veniam
            </span>
          </div>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card flat>
            <v-img
              src="https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            ></v-img>
            <div class="my-5">
              <div class="text-center team-name">
                <span>Jeferson Santos</span>
              </div>
              <v-divider class="mx-12 my-3"></v-divider>
              <div class="text-center team-function ">
                <span>Chefe de cozinha</span>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card flat>
            <v-img
              src="https://images.pexels.com/photos/4457124/pexels-photo-4457124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></v-img>
            <div class="my-5">
              <div class="text-center team-name">
                <span>Jeferson Santos</span>
              </div>
              <v-divider class="mx-12 my-3"></v-divider>
              <div class="text-center team-function ">
                <span>Chefe de cozinha</span>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card flat>
            <v-img
              src="https://images.pexels.com/photos/4282725/pexels-photo-4282725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></v-img>
            <div class="my-5">
              <div class="text-center team-name">
                <span>Jeferson Santos</span>
              </div>
              <v-divider class="mx-12 my-3"></v-divider>
              <div class="text-center team-function ">
                <span>Chefe de cozinha</span>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card flat>
            <v-img
              src="https://images.pexels.com/photos/3338675/pexels-photo-3338675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></v-img>
            <div class="my-5">
              <div class="text-center team-name">
                <span>Jeferson Santos</span>
              </div>
              <v-divider class="mx-12 my-3"></v-divider>
              <div class="text-center team-function ">
                <span>Chefe de cozinha</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/shared/Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
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
</style>
