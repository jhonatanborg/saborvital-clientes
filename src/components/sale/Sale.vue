<template>
  <v-navigation-drawer
    right
    app
    @input="eventSale"
    temporary
    clipped
    height="100%"
    :width="$vuetify.breakpoint.xsOnly ? '100%' : '370px'"
    :value="$store.state.sale.cart.open"
  >
    <v-card flat class="mx-0 pa-0 my-0 ">
      <div class="align-center">
        <v-list-item class="mx-0">
          <v-list-item-content>
            <span class="title-cart">SUA SACOLA</span>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn outlined color="error">Fechar</v-btn>
          </v-list-item-action>
        </v-list-item>
      </div>
      <div>
        <div id="list-products">
          <v-window v-model="step">
            <v-window-item :value="1">
              <div class="py-2 grey lighten-4">
                <span class="mx-3">Entregar em:</span>
              </div>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    Rua amendoeiras, 1976 - Cidade Nova
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-btn small icon color="#765eda">
                  <v-icon size="20">mdi-pencil-outline</v-icon>
                </v-btn>
              </v-list-item>
              <v-card
                class="overflow-y-auto barscroll "
                style="max-height: 320px;"
                flat
              >
                <div class="py-3 grey lighten-4">
                  <span class="mx-3">Produtos</span>
                </div>
                <v-list-item dense link class="my-0">
                  <v-list-item-content>
                    <div class=""></div>
                    <v-list-item-title>
                      <b> 1x</b>
                      Batata Premium</v-list-item-title
                    >
                  </v-list-item-content>
                  <v-list-item-action>
                    <div class="price-item">
                      <small>
                        <b>R$ 30,00 </b>
                      </small>
                    </div>
                  </v-list-item-action>
                  <v-list-item-action>
                    <v-btn icon color="error">
                      <v-icon>mdi-close-circle-outline</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-card>

              <v-list-item class=" grey lighten-4">
                <span class="pay-subtitle">Subtotal</span>
                <v-spacer></v-spacer>
                <div class="font-weight-bold black--text">R$4,00</div>
              </v-list-item>
              <div class="col-sm-12">
                <v-btn color="teal accent-4" x-large @click="step++" block dark
                  >Confirmar</v-btn
                >
              </div>
            </v-window-item>
            <v-window-item :value="2">
              <v-card flat>
                <div class="py-2 grey lighten-4">
                  <span class="mx-3">Resumo</span>
                </div>
                <v-list-item dense>
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      Subtotal
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <div class="subtitle">R$ 40,00</div>
                </v-list-item>
                <v-list-item dense>
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      Taxa de entrega
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <div class="subtitle">R$30,00</div>
                </v-list-item>
                <v-list-item dense>
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      Total
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <div class="subtitle">R$60,00</div>
                </v-list-item>
                <div>
                  <div class="py-2 grey lighten-4">
                    <span class="mx-3">Tipo de pagamento</span>
                  </div>
                  <div>
                    <div class="mx-3 my-3">
                      <v-btn dense outlined color="teal accent-4" dark block>
                        Seleciona a forma de pagamento
                      </v-btn>
                    </div>

                    <div class="mx-3 ">
                      <v-btn
                        color="teal accent-4"
                        large
                        block
                        class="white--text"
                      >
                        Confirmar Pedido
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-window-item>
          </v-window>
        </div>
      </div>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
// import Mixins from "@/mixins/mixins.js";
import ClickOutside from "vue-click-outside";

export default {
  //   mixins: [Mixins],
  components: {},
  data: () => ({
    step: 1,
    dialogPay: false,
    purchase: [],
    cupomValidate: null,
    cupom: null,
    discount_value: 0,
    successCupom: null,
    loadingCupom: false,
  }),
  methods: {
    eventSale(event) {
      this.$store.commit("sale/request", ["cart", { open: event, step: 1 }]);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style>
a {
  text-decoration: none;
}

.barscroll::-webkit-scrollbar {
  width: 15px;
}

.barscroll::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.barscroll::-webkit-scrollbar-thumb {
  background: #ef354e;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.barscroll::-webkit-scrollbar-thumb:hover {
  background: black;
}
.pay-subtitle {
  color: #707070;
  font-weight: 400;
}
.title-cart {
  font-weight: 900;
  font-size: 18px;
  font-weight: 900;
}
</style>
