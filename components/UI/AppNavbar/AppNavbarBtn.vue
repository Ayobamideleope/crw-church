<template>
  <nuxt-link v-bind="{ ...attr }" class="app-navbar-btn">
    <div class="app-navbar-btn-content"><slot></slot></div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppNavbarBtn'
}
</script>

<style scoped lang="stylus">

.app-navbar-btn {
  position: relative;
  padding: 4px 8px;
  text-transform: uppercase;
  /* letter-spacing: 1.02px; */

  &::before {
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--secondary-base);
  }

  &-content {
    position: relative;
  }
}
</style>
