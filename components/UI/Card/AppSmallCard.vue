<template>
  <v-layout
    align-center
    class="py-3 px-3 mr-3 mb-3 elevation-10"
    :style="{
      borderRadius: '8px',
      maxWidth: '200px'
    }"
  >
    <img
      v-if="imageSrc"
      :src="imageSrc"
      class="mt-2 mr-1"
      style="height: 48px; width: 48px;"
    />

    <h4 class="title text-truncate" v-text="title">Counselling</h4>
  </v-layout>
</template>

<script>
export default {
  name: 'AppSmallCard',

  props: {
    title: {
      type: String,
      required: true
    },

    imageSrc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
