<template>
  <v-row dense>
    <v-row dense class="pa-5">
      <v-col cols="12">
        <v-text-field
          color="#156f72"
          outlined
          dense
          v-model="user.name"
          label="Nome completo"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          color="#156f72"
          outlined
          dense
          v-model="user.email"
          label="E-mail"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          dense
          hide-details=""
          label="Senha"
          outlined
          :type="show ? 'text' : 'password'"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show = !show"
          v-model="user.password"
          color="#156f72"
        ></v-text-field>
      </v-col>
      <v-alert type="error" dense :value="error"> {{ message }}</v-alert>
      <v-col cols="12">
        <v-btn
          @click="register()"
          :loading="$store.state.loading"
          block
          x-large
          color="#156f72"
          dark
          >Cadastrar</v-btn
        >
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
      },
      error: false,
      message: null,
      show: false,
    };
  },
  methods: {
    checkForm() {
      if (
        this.user.name === null ||
        this.user.email === null ||
        this.user.password == null
      ) {
        this.error = true;
        this.message = "Preencha todos os campos para criar o cadastro!";
        return false;
      } else {
        return true;
      }
    },
    register() {
      if (this.checkForm()) {
        this.$store
          .dispatch("user/request", {
            method: "POST",
            url: "/client",
            data: this.user,
            noMsg: true,
          })
          .then(() => {
            this.$emit("confirm");
            localStorage.setItem("userRegister", JSON.stringify(this.user));
          })
          .catch(() => {
            this.error = true;
            this.message =
              "Tivemos um erro ao cadastrar. Tente com um e-mail válido";
          });
      }
    },
  },
};
</script>

<style></style>
