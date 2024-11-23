<template>
  <div
    class="error d-flex align-center justify-center"
    style="min-height: 95vh"
  >
    <v-card class="mx-auto w-50 text-center bg-red">
      <v-card-title> Error {{ error.statusCode }} </v-card-title>
      <v-card-title> {{ error.statusMessage }} </v-card-title>
      <v-btn @click="clearErr"> Back Home </v-btn>
    </v-card>
  </div>
</template>

<script setup>
defineProps(["error"]);
const clearErr = () => {
  clearError({ redirect: "/" });
};
</script>
