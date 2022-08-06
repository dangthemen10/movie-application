<template>
  <div>
    <LoadingBar />
    <v-row justify="center">
      <v-col v-for="movie in movies" :key="movie.id" cols="6" sm="3">
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LoadingBar from './LoadingBar.vue'
export default {
  components: { LoadingBar },
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
}
</script>

<style></style>
