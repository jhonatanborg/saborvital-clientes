<template>
  <div class="">
    <carousel
      :autoplay="true"
      :perPageCustom="[
        [360, 1],
        [768, 1],
        [1024, 1],
      ]"
    >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: "https://i.ytimg.com/vi/YyUhslfLfZM/maxresdefault.jpg",
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
.text-btn {
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 22px !important;
}
</style>
