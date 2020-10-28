<template>
  <div class="footer teal accent-4">
    <v-row
      class="col-sm-10 mx-auto"
      justify-sm="center"
      justify="start"
      align="center"
    >
      <v-col cols="auto" sm="2">
        <div>
          <v-img
            src="@/assets/logo-branca.png"
            max-height="150"
            max-width="150"
            contain
          ></v-img>
        </div>
      </v-col>
      <v-col cols="auto" sm="4">
        <v-row>
          <v-col cols="3" sm="2" md="2" lg="2">
            <v-img src="@/assets/social/instagram.svg" contain></v-img>
          </v-col>
          <v-col cols="3" sm="2" md="2" lg="2">
            <v-img src="@/assets/social/whatsapp.svg" contain></v-img>
          </v-col>
          <v-col cols="3" sm="2" md="2" lg="2">
            <v-img src="@/assets/social/facebook.svg" contain></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row justify="center" align="center" justify-sm="center">
          <v-col cols="12" sm="3" lg="3">
            <div>
              <span>
                HOME
              </span>
            </div>
          </v-col>
          <v-col cols="12" sm="3" lg="3">
            <div>
              <span>
                CARDAPIO
              </span>
            </div>
          </v-col>
          <v-col cols="12" sm="3" lg="3">
            <div>
              <span>
                SOBRE NÓS
              </span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 15px;
  color: white;
  font-weight: 900;
}
</style>
