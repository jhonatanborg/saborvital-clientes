<template>
  <div class="teal accent-4 fill-height">
    <div class="d-flex flex-colunm justify-center align-center pa-5">
      <v-card
        :loading="$store.state.loading"
        flat
        outlined
        class="col-sm-12 col-md-6 col-lg-6"
      >
        <div class="pa-5"><router-view /></div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
