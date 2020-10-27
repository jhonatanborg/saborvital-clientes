<template>
  <v-navigation-drawer
    :value="$store.state.user.menuMobile"
    temporary
    app
    @input="hide"
  >
    <v-list>
      <div v-if="verifySession">
        <v-list-item :to="{ name: 'account' }" link>
          <v-list-item-content>
            <v-list-item-title>Minha conta</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ name: 'purchases' }" link>
          <v-list-item-content>
            <v-list-item-title>Meus pedidos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-list-item v-else @click="loginModal()" link>
        <v-list-item-content>
          <v-list-item-title>Iniciar sessão</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="openSale()" link>
        <v-list-item-content>
          <v-list-item-title>Sacola</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{ name: 'list-products' }" link>
        <v-list-item-content>
          <v-list-item-title>Cardápio</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
    hide(event) {
      if (!event) {
        this.$store.commit("user/request", ["menuMobile", false]);
      }
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

<style></style>
