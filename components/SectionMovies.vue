<template>
  <v-row>
    <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="4">
      <MovieCard :movie="movie" />
    </v-col>
  </v-row>
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
}
</script>

<style></style>
