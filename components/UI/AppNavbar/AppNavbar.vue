<template>
  <v-container fluid class="app-navbar-container">
    <v-layout justify-space-between>
      <v-flex class="hidden-lg-and-up">
        <v-slide-x-reverse-transition mode="out-in">
          <v-btn
            v-if="!shouldShowNavDrawer"
            key="open"
            style="padding: 0; margin-left: -8px;"
            flat
            icon
            @click="$emit('update:should-show-nav-drawer', true)"
          >
            <v-icon>menu</v-icon>
          </v-btn>

          <v-btn
            v-else
            key="close"
            style="padding: 0; margin-left: -8px;"
            color="secondary"
            flat
            icon
            @click="$emit('update:should-show-nav-drawer', false)"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-slide-x-reverse-transition>
      </v-flex>

      <v-flex class="hidden-md-and-down">
        <v-btn
          v-for="route in routes"
          :key="route.link"
          exact
          exact-active-class="white--text"
          nuxt
          flat
          primary
          :to="route.link"
          class="mx-0 app-navbar-btn"
          v-text="route.title"
        ></v-btn>
      </v-flex>

      <v-flex shrink
        ><img src="~static/icon.png" style="height: 50px; width: 50px;"
      /></v-flex>
    </v-layout>
  </v-container>
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

<style lang="stylus" scoped>
@require '~assets/style/variables.styl'

.app-navbar-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 30;

  @media $display-breakpoints.sm-and-up {
    padding-left: 26px;
  }
  @media $display-breakpoints.lg-and-up {
    margin-left: -16px;
  }
}

.app-navbar-btn {
  padding: 0 10px;
  font-weight: bold;
  transition: all 0.6s;
}

.app-navbar-btn::before {
  display: none;
}

.app-navbar-btn:hover,
.app-navbar-btn:focus {
  color: #ff6d00;

  @media $display-breakpoints.sm-and-up {
    color: #fafafa;
  }
}
</style>
