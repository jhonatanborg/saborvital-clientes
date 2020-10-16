<template>
  <div id="purchase-details">
    <div class="d-flex justify-end">
      <v-btn color="error" :to="{ name: 'purchases' }" outlined>Voltar</v-btn>
    </div>
    <v-card flat class="my-5">
      <v-alert class="ma-0" type="success"
        ><span class="white--text font-weight-bold"
          >Entregue com sucesso</span
        ></v-alert
      >
      <div class="px-3">
        <v-row justify="space-between">
          <v-col cols="auto">Pedido {{ purchases.id }}</v-col>
          <v-col cols="auto">Hoje 11:45</v-col>
        </v-row>
      </div>
      <div class="px-3">
        <v-row justify="space-between">
          <v-col cols="auto">Itens</v-col>
        </v-row>
      </div>
      <v-list>
        <div>
          <v-list-item
            v-for="(item, key) in purchases.itens"
            :key="key"
            class="px-3"
          >
            <v-list-item-content>
              <v-list-item-title
                ><span v-text="item.product_qtd + 'X '"></span>
                <span v-text="item.product_name"></span>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action
              class="value-product"
              v-text="convertMoney(item.product_sale_value)"
            ></v-list-item-action>
          </v-list-item>
          <v-divider class="px-3"></v-divider>
        </div>
      </v-list>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Subtotal</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action
            v-text="convertMoney(purchases.subtotal)"
            class="value-product"
          ></v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Taxa de entrega</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action
            v-text="convertMoney(purchases.delivery_value)"
            class="value-product"
          ></v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Total</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action
            v-text="convertMoney(purchases.total)"
            class="value-product"
          ></v-list-item-action>
        </v-list-item>
        <div class="px-4 grey lighten-5">
          <v-row justify="space-between">
            <v-col cols="auto">Forma de pagamento</v-col>
            <v-col cols="auto">Cartão de crédito</v-col>
          </v-row>
        </div>
        <div v-if="purchases.deliveryAddress" class="px-4 purchase-address">
          <div>
            <span>Entregar em:</span>
          </div>
          <div>
            <span v-text="purchases.deliveryAddress.title">Casa</span>
          </div>
          <div>
            <span>
              {{ purchases.deliveryAddress.street }},
              {{ purchases.deliveryAddress.number }}
              <span
                v-if="purchases.deliveryAddress.complement"
                v-text="', ' + purchases.deliveryAddress.complement"
              ></span>
            </span>
          </div>
        </div>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import Mixins from "@/mixins/mixins.js";

export default {
  mixins: [Mixins],

  data() {
    return {
      purchases: {
        id: 120,
        delivery_value: 5.0,
        total: 150.0,
        deliveryAddress: {
          street: "Amendoeiras",
          number: 49,
          complement: "Ao lado do posto",
          district: "Cidade Alta",
        },
        itens: [
          {
            id: 51,
            product_qtd: 1,
            product_name: "Batata Recheado",
            product_sale_value: 30.5,
          },
          {
            id: 52,
            product_qtd: 2,
            product_name: "Coca - lata",
            product_sale_value: 20.5,
          },
        ],
      },
    };
  },
};
</script>

<style></style>
