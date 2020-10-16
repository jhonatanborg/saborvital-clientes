<template>
  <div>
    <v-toolbar class="ma-0" flat color="white">
      <v-toolbar-title class="ma-0">
        Perfil
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-row class="d-flex justify-space-between">
      <v-col cols="12" sm="12">
        <v-list three-line>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>Nome</v-list-item-subtitle>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>E-mail</v-list-item-subtitle>
              <v-list-item-title>{{ user.email }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: "Jhonatan Borges",
      email: "jhonatanborgesdj@gmail.com",
    },
  }),
  computed: {},
  methods: {
    formatBirthday(date) {
      if (date) {
        return date
          .substr(0, 10)
          .split("-")
          .reverse()
          .join("/");
      }
    },
  },
};
</script>

<style>
.subtitle-large {
  font-size: 16px;
}
.price {
  font-size: 16px;
}
.description-product {
  font-size: 14px;
}
.edit-title {
  font-size: 14px;
}
</style>
