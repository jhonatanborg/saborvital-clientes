<template>
  <div class="footer ">
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
            <a
              target="”_blank”"
              href="https://www.instagram.com/saborvital_restaurante"
            >
              <v-img src="@/assets/social/instagram.svg" contain></v-img>
            </a>
          </v-col>
          <v-col cols="3" sm="2" md="2" lg="2">
            <a
              href="https://api.whatsapp.com/send?phone=5561999232171"
              target="_blank"
              rel="WhatsApp Sabor vital"
            >
              <v-img src="@/assets/social/whatsapp.svg" contain></v-img>
            </a>
          </v-col>
          <v-col cols="3" sm="2" md="2" lg="2">
            <a
              href="https://www.facebook.com/SaborVitalRestauranteNatural/"
              target="_blank"
              rel="Facebook Sabor vital"
            >
              <v-img src="@/assets/social/facebook.svg" contain></v-img>
            </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row justify="center" align="center" justify-sm="center">
          <v-col cols="12" sm="3" lg="3">
            <div>
              <router-link class="white--text" to="/"
                ><span>
                  HOME
                </span></router-link
              >
            </div>
          </v-col>
          <v-col cols="12" sm="3" lg="3">
            <div>
              <router-link class="white--text" to="/lista-de-produtos">
                <span>
                  CARDAPIO
                </span></router-link
              >
            </div>
          </v-col>
          <v-col cols="12" sm="3" lg="3">
            <div>
              <router-link class="white--text" to="/sobre-a-empresa"
                ><span>
                  SOBRE NÓS
                </span></router-link
              >
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <div class="white--text d-flex justify-center py-5">
      Powered by
      <a style="text-decoration:none;color: #ffffff !important;"
        >&copy;2020 — <strong>RC2</strong></a
      >
    </div>
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
  background-color: #1e1e1e;
}
</style>
