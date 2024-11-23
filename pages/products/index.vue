<template>
  <div style="background-color: green">
    <h1>products</h1>
    <v-btn>sss</v-btn>
    <c-container v-if="data">
      <v-row>
        <v-col cols="4" v-for="item in data.products" :key="item.id">
          <v-card
            :to="{ name: 'products-id', params: { id: item.id } }"
            class="d-flex justify-center flex-column"
          >
            <img :src="item.thumbnail" alt="" height="200" class="ma-auto" />
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </c-container>
  </div>
</template>
<script setup>
// const result = await fetch("https://dummyjson.com/products").then((res) =>
//   res.json()
// );
const { data, error } = await useFetch("https://dummyjson.com/products");
// console.log(data.value);
// console.log(error.value);
</script>
