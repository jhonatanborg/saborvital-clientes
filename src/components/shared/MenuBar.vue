<template>
  <div>
    <v-app-bar app height="80" flat color="white">
      <v-img
        @click="goHome"
        class="mx-2 click-logo"
        src="@/assets/logo-banner.png"
        max-height="150"
        max-width="150"
        contain
      ></v-img>

      <v-spacer></v-spacer>

      <v-btn
        rounded
        text
        class="mr-2 text-capitalize hidden-sm-and-down "
        :to="{ name: 'home' }"
        >Home</v-btn
      >
      <v-btn
        rounded
        :to="{ name: 'list-products' }"
        text
        class="mr-2 text-capitalize hidden-sm-and-down"
        >Cardápio</v-btn
      >
      <v-btn
        rounded
        :to="{ name: 'about' }"
        text
        class="mr-2 text-capitalize hidden-sm-and-down"
        >Sobre nós</v-btn
      >
      <v-btn
        rounded
        color="#156f72"
        dark
        @click="openSale()"
        class="text-capitalize hidden-sm-and-down"
        ><b>Carrinho</b>
        <v-chip
          class="ml-3 text-capitalize"
          color="white"
          text-color="teal"
          small
        >
          {{ sale.length }}
        </v-chip>
      </v-btn>
      <div v-if="verifySession">
        <v-btn
          :to="{ name: 'account' }"
          text
          class="text-capitalize hidden-sm-and-down"
          rounded
          >Minha conta</v-btn
        >
        <v-btn
          :to="{ name: 'purchases' }"
          text
          class="text-capitalize hidden-sm-and-down"
          rounded
          >Meus pedidos</v-btn
        >
      </div>
      <div v-if="!verifySession">
        <v-btn text class="text-capitalize" rounded @click="loginModal()"
          >Iniciar sessão</v-btn
        >
      </div>

      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon
          @click="$store.commit('user/request', ['menuMobile', true])"
        ></v-app-bar-nav-icon>
      </span>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
  computed: {
    verifySession() {
      if (localStorage.getItem("token")) {
        return true;
      }
      return false;
    },
    sale() {
      return this.$store.state.sale.sale || [];
    },
  },
  methods: {
    goHome() {
      this.$router.push("/").catch(() => {});
    },
    loginModal() {
      this.$store.commit("user/request", ["login", { open: true, step: 1 }]);
    },
    openSale() {
      if (this.$store.state.sale.sale.length > 0) {
        this.$store.commit("sale/request", ["cart", { open: true, step: 1 }]);
      } else {
        this.$store.commit("sale/request", ["cart", { open: true, step: 4 }]);
      }
    },
  },
};
</script>

<style>
.click-logo:hover {
  cursor: pointer !important;
}
</style>
