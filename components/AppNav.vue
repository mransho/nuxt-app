<template>
  <div>
    <nav style="padding: 10px; background-color: red; display: flex; gap: 20px">
      <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
      <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
      <nuxt-link :to="{ name: 'products' }">products</nuxt-link>
      <nuxt-link :to="{ name: 'profile' }">Profile</nuxt-link>
    </nav>
  </div>
</template>
<script>
export default {
  // mounted() {
  //   console.log(this.$router.options.routes);
  // },
};
</script>
<style>
.router-link-active {
  color: wheat;
}
</style>
