<template>
  <div class="home grey lighten-5">
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
              >Regulariza o organismo, revitaliza a alma e tranquiliza a mente!
              Rica em probióticos Fortalece o sistema imunológico Auxilia o
              sistema digestivo Promove a saúde das articulações</span
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
      <v-col cols="6">
        <v-layout column align-center> </v-layout>
      </v-col>
    </v-img>
    <v-container class="my-5 ">
      <div class="subtitle-category">
        <span>OS MELHORES PARA VOCÊ</span>
      </div>
      <div class="title-category">
        <span>Sugestões do chefe</span>
      </div>
      <v-row>
        <v-col v-for="n in 4" cols="3" :key="n">
          <v-card @click="dialog = true" link flat class="pa-5">
            <v-row
              align="center"
              no-gutters
              justify="center"
              class="fill-height"
            >
              <v-col cols="12"
                ><div class="display-2">
                  <v-img
                    aspect-ratio="1.1"
                    src="https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
        </v-col>
      </v-row>
    </v-container>
    <v-img :src="banner" class="px-8  white--text ">
      <v-row dense justify="center" align="center" class="px-6 fill-height">
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
            ><v-col v-for="n in 4" cols="3" :key="n">
              <v-card @click="dialog = true" link flat class="pa-5">
                <v-row align="center" no-gutters justify="center" class="">
                  <v-col cols="12"
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
              <span
                >Fique em casa: antes de abrir o app de delivery de comida,
                escolha uma entre 30 sugestões de prato</span
              >
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

    <v-dialog
      transition="dialog-transition"
      max-width="500px"
      persistent
      scrollable
      v-model="dialog"
      width="500"
      :fullscreen="$vuetify.breakpoint.xsOnly"
    >
      <v-card>
        <v-img
          width="100%"
          height="25%"
          aspect-ratio="1.1"
          src="https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        >
          <v-row justify="end">
            <v-col cols="auto">
              <v-btn
                class="mr-3"
                x-small
                color="white"
                fab
                @click="dialog = false"
              >
                <v-icon size="20">mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-img>
        <div>
          <div class="title-product pa-5">
            <span>Batata baroa refogada vegana</span>
          </div>
          <div class="grey pa-5 lighten-3 title-item-category">
            <span> Adicione complementos </span>
          </div>
        </div>
        <div class="overflow-x-hidden">
          <v-list>
            <v-list-item-group v-model="model" multiple>
              <template v-for="(item, i) in items">
                <v-list-item
                  :key="i"
                  :value="item"
                  active-class="green--text text--accent-4"
                >
                  <template v-slot:default="{ active }">
                    <v-list-item-content>
                      <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-checkbox
                        :input-value="active"
                        color="#488e4b"
                      ></v-checkbox>
                    </v-list-item-action>
                  </template>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
          <div class="my-3 px-5">
            <v-textarea
              outlined
              dense
              rows="2"
              v-model="comment"
              placeholder="Ex. sem pimenta, sem molho verde"
              label="Personalize seu pedido"
              id="id"
            ></v-textarea>
          </div>
        </div>

        <v-toolbar height="80px" bottom>
          <v-row align="center">
            <v-col cols="4" sm="4">
              <v-select
                :items="itemQuantity"
                v-model="quantity"
                hide-details
                solo
                :menu-props="{ top: true, offsetY: true }"
              ></v-select
            ></v-col>
            <v-col cols="8" sm="8">
              <v-btn dark type="submit" block x-large depressed color="#488e4b">
                <div>
                  Confirmar
                  <span>
                    R$ 15,00
                  </span>
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
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
    };
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
