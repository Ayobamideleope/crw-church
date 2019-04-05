<template>
  <v-layout
    justify-center
    align-items-center
    column
    class="app-nav-drawer white py-3 px-2"
    :style="{
      minHeight: '100vh',
      position: 'absolute',
      left: 0,
      top: 0,
      transform: shouldShowNavDrawer ? '' : 'scale(0.94)',
      width: '100%',
      transition: 'all 0.6s'
    }"
  >
    <template v-for="route in routes">
      <v-btn
        :key="route.link"
        exact
        exact-active-class="secondary--text"
        nuxt
        flat
        primary
        :to="route.link"
        style="font-weight:bold;"
        class="app-nav-drawer-btn"
        v-text="route.title"
      ></v-btn>
    </template>
  </v-layout>
</template>

<script>
import routes from '@/utils/routes.js'

export default {
  props: {
    shouldShowNavDrawer: Boolean
  },

  data: function() {
    return {
      routes
    }
  }
}
</script>

<style scoped>
.app-nav-drawer-btn::before {
  display: none;
}
</style>
