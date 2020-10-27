<template>
  <div>
    <v-card flat>
      <div class="py-3 ">
        <span class="mx-3">Endereço de entrega</span>
      </div>
      <v-divider></v-divider>
      <v-form ref="sale">
        <v-row dense justify="center" class="my-5">
          <v-col cols="11">
            <v-text-field
              :rules="[(v, i) => !!v || 'obrigatório']"
              outlined
              dense
              label="Logradouro"
              v-model="address.street"
            ></v-text-field>
          </v-col>
          <v-col cols="11">
            <v-text-field
              :rules="[(v, i) => !!v || 'obrigatório']"
              v-model="address.number"
              dense
              outlined
              label="Número"
            ></v-text-field>
          </v-col>
          <v-col cols="11">
            <v-select
              :rules="[(v, i) => !!v || 'obrigatório']"
              dense
              v-model="address.district_id"
              outlined
              :items="districts"
              label="Seleciona o bairro"
              item-text="name"
              return-object
            ></v-select>
          </v-col>
          <v-col cols="11">
            <v-text-field
              v-model="address.complement"
              dense
              outlined
              label="Complemento"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <div class="col-sm-12">
        <v-btn color="teal accent-4" x-large @click="setAddress" block dark
          >Confirmar</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
import Mixins from "@/mixins/mixins.js";

export default {
  mixins: [Mixins],
  mounted() {
    this.getDistricts();
  },
  data() {
    return {
      address: {
        street: null,
        district_id: null,
        city: "Brasilia",
        complement: null,
        number: null,
      },
    };
  },
  computed: {
    districts() {
      return this.$store.state.sale.districts || [];
    },
  },
  methods: {
    getDistricts() {
      this.$store.dispatch("sale/request", {
        state: "districts",
        method: "GET",
        url: "/district",
        noMsg: true,
      });
    },

    setAddress() {
      if (this.$refs.sale.validate()) {
        this.$store.commit("sale/request", ["addressDelivery", this.address]);
        this.$emit("next");
      }
    },
  },
};
</script>

<style></style>
