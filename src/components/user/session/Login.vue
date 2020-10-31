<template>
  <div>
    <v-row dense class="pa-5">
      <v-col cols="12">
        <v-text-field
          color="#156f72"
          outlined
          label="Login"
          v-model="user.email"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          hide-details=""
          label="Senha"
          append-icon="mdi-eye"
          outlined
          color="#156f72"
          v-model="user.password"
        ></v-text-field>
        <div class="my-3">
          <v-btn
            text
            class="font-weight-bold grey--text"
            @click="$emit('forgot-pass')"
            >Esqueci minha senha?</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12">
        <v-alert :type="type" :value="request" v-text="message"> </v-alert>
      </v-col>
      <v-col cols="12">
        <v-btn
          block
          :loading="loading"
          x-large
          color="#156f72"
          @click="Login"
          dark
          >LOGIN</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
      request: false,
      loading: false,
      type: null,
    };
  },
  methods: {
    checkForm() {
      if (this.user.email === null || this.user.password === null) {
        this.request = true;
        this.message = "Preencha todos os campos para criar o cadastro!";
        this.type = "error";
        this.loading = false;
        return false;
      } else {
        this.loading = true;
        return true;
      }
    },
    Login() {
      this.loading = true;

      if (this.checkForm()) {
        this.$store
          .dispatch("user/request", {
            state: "user",
            method: "POST",
            url: "/client-login",
            data: this.user,
            noMsg: true,
          })
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.id);
            this.request = true;
            this.type = "success";
            this.message = "Login efetuado com sucesso";
            this.loading = false;

            setTimeout(() => {
              this.$router.push({ name: "list-products" });
            }, 2000);
            location.reload();
          })
          .catch(() => {
            this.request = true;
            this.type = "error";
            this.message = "Erro ao fazer login, tente novamente";
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style></style>
