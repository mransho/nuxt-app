<template>
  <div class="glogs">
    <v-card
      class="d-flex justify-center flex-column ma-auto my-5"
      style="max-width: 400px"
      v-if="data"
    >
      <img :src="data.thumbnail" alt="" height="200" class="ma-auto" />
      <v-card-title>{{ data.title }}</v-card-title>
      <v-card-text>{{ data.description }}</v-card-text>
    </v-card>
  </div>
</template>

<script setup>
const { data, error } = useFetch(
  `https://dummyjson.com/products/${useRoute().params.id}`
);

console.log(data.value);
if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product Not Found!xxxxxx",
    fatal: true,
  });
}
</script>
