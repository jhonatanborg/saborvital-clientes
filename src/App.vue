<template>
  <v-app class="App">
    <MenuBar />
    <MenuMobile />
    <Sale />
    <Login />
    <MessageOrError />
    <v-main class="col-xl-8">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MenuBar from "@/components/shared/MenuBar.vue";
import MenuMobile from "@/components/shared/MenuMobile.vue";
import Sale from "@/components/sale/Sale";
import Login from "@/components/user/session/Session";
import MessageOrError from "@/components/shared/MessageOrError";

export default {
  name: "App",
  mounted() {
    this.getSaleIdb();
    this.getProducts();
    this.getBanners();
  },
  components: {
    MenuBar,
    Sale,
    Login,
    MessageOrError,
    MenuMobile,
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
          table: "saledb",
        },
      });
    },
    getProducts() {
      this.$store.dispatch("product/request", {
        state: "products",
        method: "GET",
        url: "/product/",
        noMsg: true,
      });
    },
    getBanners() {
      this.$store.dispatch("banner/request", {
        state: "banners",
        method: "GET",
        url: "/banner",
        noMsg: true,
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
