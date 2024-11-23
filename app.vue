<template>
  <div>
    <nuxt-layout>
      <NuxtPage />
    </nuxt-layout>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRouter, useSeoMeta } from "#app";

const currentRoute = useRouter().currentRoute;

watch(currentRoute, (newRoute) => {
  useSeoMeta({
    title: newRoute.name,
    description: `This is the description for ${newRoute.name}`,
  });
});

useSeoMeta({
  title: currentRoute.value.name || "Default Title",
  description: `This is the description for ${
    currentRoute.value.name || "Default Title"
  }`,
});
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.page-enter-active,
.page-leave-active {
  transition: 0.2s all ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0,0);
}
</style>
