<template>
  <div class="teal accent-4 fill-height">
    <div
      class="fill-height d-flex flex-colunm justify-center align-center pa-5"
    >
      <v-card
        :loading="$store.state.loading"
        flat
        outlined
        max-width="400px"
        min-width="600px"
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
