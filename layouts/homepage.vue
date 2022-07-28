<template>
  <v-app>
    <NavBar />
    <Slider class="hidden-sm-and-down mt-16" />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
    <v-overlay :value="overlay" dark opacity="0.95">
      <Search />
      <v-btn v-if="overlay" @click="overlay = false">Close</v-btn>
    </v-overlay>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
    }
  },
  watch: {
    $route(to, from) {
      this.overlay = false
    },
  },
  created() {
    this.$nuxt.$on('openOverlay', ($event) => (this.overlay = $event))
  },
}
</script>
