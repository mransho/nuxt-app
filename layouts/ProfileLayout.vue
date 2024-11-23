<template>
  <div class="Profile_layout">
    <v-layout>
      <v-main>
        <slot />
      </v-main>
      <!-- <v-footer :app="true">
        <ul class="d-flex bg-slate-500" style="gap: 20px">
          <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
          <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
          <nuxt-link :to="{ name: 'products' }">products</nuxt-link>
          <nuxt-link :to="{ name: 'profile' }">Profile</nuxt-link>
        </ul>
      </v-footer> -->
    </v-layout>
  </div>
</template>

