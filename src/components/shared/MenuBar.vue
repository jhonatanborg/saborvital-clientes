<template>
  <div>
    <v-app-bar app height="80" fixed flat color="white">
      <v-img
        class="mx-2"
        src="https://i.imgur.com/ShbPfQn.png"
        max-height="100"
        max-width="100"
        contain
      ></v-img>
      <v-spacer></v-spacer>

      <v-btn rounded text class="mr-2 text-capitalize" :to="{ name: 'home' }"
        >Home</v-btn
      >
      <v-btn
        rounded
        :to="{ name: 'list-products' }"
        text
        class="mr-2 text-capitalize"
        >Cardápio</v-btn
      >
      <v-btn
        rounded
        color="teal accent-4"
        dark
        @click="
          $store.commit('sale/request', ['cart', { open: true, step: 1 }])
        "
        class="text-capitalize"
        ><b>Sacola</b>
        <v-chip
          class="ml-3 text-capitalize"
          color="white"
          text-color="teal"
          small
          >0</v-chip
        >
      </v-btn>
      <div v-if="verifySession">
        <v-btn :to="{ name: 'account' }" text class="text-capitalize" rounded
          >Minha conta</v-btn
        >
        <v-btn :to="{ name: 'purchases' }" text class="text-capitalize" rounded
          >Meus pedidos</v-btn
        >
      </div>
      <div v-if="!verifySession">
        <v-btn text class="text-capitalize" rounded @click="loginModal()"
          >Login</v-btn
        >
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    verifySession() {
      if (localStorage.getItem("token")) {
        return true;
      }
      return false;
    },
  },
  methods: {
    loginModal() {
      this.$store.commit("user/request", ["login", { open: true, step: 1 }]);
    },
  },
};
</script>

<style></style>
