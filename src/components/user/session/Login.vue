<template>
  <div>
    <v-row dense class="pa-5">
      <v-col cols="12">
        <v-text-field
          color="teal accent-4"
          outlined
          label="Login"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          hide-details=""
          label="Senha"
          append-icon="mdi-eye"
          outlined
          color="teal accent-4"
        ></v-text-field>
        <div class="my-3">
          <span class="font-weight-bold grey--text ">Esqueci minha senha?</span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-btn block x-large color="teal accent-4" dark>LOGIN</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
