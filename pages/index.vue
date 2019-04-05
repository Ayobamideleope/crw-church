<template>
  <div>
    <welcome-screen />
    <our-programs />
  </div>
</template>

<script>
import WelcomeScreen from '@/components/HomePage/WelcomeScreen'
import OurPrograms from '@/components/HomePage/OurPrograms'

export default {
  components: {
    WelcomeScreen,
    OurPrograms
  }
}
</script>
