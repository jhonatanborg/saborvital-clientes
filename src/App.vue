<template>
  <v-app class="App">
    <MenuBar />
    <Sale />
    <Login />
    <MessageOrError />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MenuBar from "@/components/shared/MenuBar.vue";
import Sale from "@/components/sale/Sale";
import Login from "@/components/user/session/Session";
import MessageOrError from "@/components/shared/MessageOrError";

export default {
  name: "App",
  mounted() {
    this.getSaleIdb();
  },
  components: {
    MenuBar,
    Sale,
    Login,
    MessageOrError,
  },

  data: () => ({
    //
  }),
  methods: {
    getSaleIdb() {
      this.$store.dispatch("sale/idb", {
        state: "sale",
        method: "getAll",
        idb: {
          table: "sale",
        },
      });
    },
  },
};
</script>
<style>
.App {
  font-family: "Montserrat", sans-serif;
}
</style>
