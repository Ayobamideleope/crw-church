<template>
  <v-app style="position: relative;">
    <app-navbar :should-show-nav-drawer.sync="shouldShowNavDrawer" />
    <app-nav-drawer :should-show-nav-drawer="shouldShowNavDrawer" />
    <v-content
      :style="{
        position: 'relative',
        backgroundColor: '#FAFAFA',
        transform: shouldShowNavDrawer ? 'translateX(100%)' : ''
      }"
    >
      <nuxt />
    </v-content>
    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import AppNavbar from '@/components/UI/AppNavbar/AppNavbar'
import AppNavDrawer from '@/components/UI/AppNavDrawer/AppNavDrawer'

export default {
  components: {
    AppNavbar,
    AppNavDrawer
  },
  data() {
    return {
      shouldShowNavDrawer: false
    }
  }
}
</script>
