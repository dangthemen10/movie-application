<template>
  <div>
    <v-overlay opacity="0.95" :value="loading">
      <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="value"
        color="green accent-3"
        >{{ value }}</v-progress-circular
      >
    </v-overlay>
    <v-row justify="center">
      <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="4">
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      loading: true,
      value: 0,
    }
  },
  mounted() {
    setInterval(() => {
      if (this.value === 100) {
        this.loading = false
        return (this.value = 0)
      }
      this.value += 10
    }, 200)
  },
}
</script>

<style></style>
