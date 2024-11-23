<template>
  <div class="layout">
    <AppNav />
    <slot> </slot>
    <!-- eslint-disable-next-line -->
    <AppFooter v-model:firstName.uppercase="firstName" v-model:LastName="LastName" />
    {{ firstName }}
    {{ LastName }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: null,
      LastName: null,
    };
  },
};
</script>
