<template>
  <div>
    <span class="title-list"> Meus pedidos</span>
    <v-card
      v-for="(item, key) in purchases"
      :key="key"
      :to="{ name: 'purchase-details', params: { id: item.id } }"
      link
      class="pa-5 my-5 card-purchase"
      flat
    >
      <v-row justify="space-between" align="start">
        <v-col cols="auto"
          ><h4 class="number-purchase">Pedido {{ item.id }}</h4>
          <span class="title-company">Açai no quintal</span>
          <h4 class="value-purchase" v-text="convertMoney(item.total)"></h4>
        </v-col>
        <v-col cols="auto">
          <h4 class="data-purchase" v-text="convertDate(item.date)"></h4>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-chip
            class="font-weight-bold"
            :color="statuspurchase(item.status) + ' lighten-5'"
            :text-color="statuspurchase(item.status)"
            >{{ item.status }}</v-chip
          >
        </v-col>
        <v-col cols="auto"> </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Mixins from "@/mixins/mixins.js";

export default {
  mixins: [Mixins],

  data() {
    return {
      purchases: [
        {
          id: 5474,
          total: 50.0,
          date: "15/10/2020 13:48",
          status: "Pendente",
        },
        {
          id: 54154,
          total: 50.0,
          date: "15/10/2020 13:48",
          status: "Confirmado",
        },
        {
          id: 12331,
          total: 50.0,
          date: "15/10/2020 13:48",
          status: "Pendente",
        },
        {
          id: 3121,
          total: 50.0,
          date: "15/10/2020 13:48",
          status: "Entregue",
        },
        {
          id: 5343,
          total: 50.0,
          date: "15/10/2020 13:48",
          status: "Cancelado",
        },
        {
          id: 9889,
          total: 50.0,
          date: "15/10/2020 13:48",
          status: "Finalizado",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
