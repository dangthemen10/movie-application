<template>
  <div>
    <v-toolbar short flat class="my-4">
      <v-toolbar-title class="black--text">
        {{ title }}
      </v-toolbar-title>
    </v-toolbar>
    <LoadingBar />
    <v-row>
      <v-col v-for="movie in tvShows" :key="movie.id" cols="4" sm="2">
        <TVCard :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TVCard from './TVCard.vue'
import LoadingBar from './LoadingBar.vue'
export default {
  components: { TVCard, LoadingBar },
  props: {
    tvShows: {
      type: Array,
      default() {
        return []
      },
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
