<template>
  <v-app class="App">
    <MenuBar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MenuBar from "@/components/shared/MenuBar.vue";

export default {
  name: "App",

  components: {
    MenuBar,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.App {
  font-family: "Montserrat", sans-serif;
}
</style>
