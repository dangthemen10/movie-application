<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-overlay absolute opacity="0.95" :value="loading">
        <v-progress-circular
          :rotate="360"
          :size="100"
          :width="15"
          :value="value"
          color="green accent-3"
          >{{ value }}</v-progress-circular
        >
      </v-overlay>
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
      loading: true,
      value: 0,
    }
  },
  watch: {
    $route(to, from) {
      this.overlay = false
    },
  },
  mounted() {
    setInterval(() => {
      if (this.value === 100) {
        this.loading = false
        return (this.value = 0)
      } else if (this.value < 50) {
        this.value += 25
      } else {
        this.value += 10
      }
    }, 400)
  },
  created() {
    this.$nuxt.$on('openOverlay', ($event) => (this.overlay = $event))
  },
}
</script>
