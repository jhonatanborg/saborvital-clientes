<template>
  <v-row dense>
    <v-row dense class="pa-5">
      <v-col cols="12">
        <v-text-field
          color="teal accent-4"
          outlined
          dense
          label="Nome completo"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          color="teal accent-4"
          outlined
          dense
          label="E-mail"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          dense
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
        <v-btn block x-large color="teal accent-4" dark>Cadastrar</v-btn>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
