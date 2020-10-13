<template>
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
</template>

<script>
export default {
  data() {
    return {
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
};
</script>

<style></style>
