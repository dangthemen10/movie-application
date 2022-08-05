<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="movies"
      :to="`/movies/detail/${movie.id}`"
      :elevation="hover ? 24 : 0"
      nuxt
    >
      <v-img
        aspect-ratio="0.8"
        height="220"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      />
      <v-card-title class="pt-1 pb-1"> {{ movie.title }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0" no-gutters>
          <v-col cols="12" class="d-flex mt-1 pb-1" md="8">
            <v-rating
              :value="movie.vote_average / 2"
              half-increments
              length="5"
              dense
              readonly
              color="yellow accent-4"
              size="16"
            ></v-rating>
            <span class="black--text text--lighten-1 text-caption mr-2 mt-1">
              {{ movie.vote_average }}
            </span>
          </v-col>
        </v-row>
        <v-row v-if="$store.state.genres">
          <v-col cols="12">
            <v-chip
              v-for="genre in movie.genre_ids"
              :key="genre"
              label
              x-small
              color="pink"
              class="white--text mr-1 mb-sm-2"
            >
              {{ genreTypeName(genre) }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    genreTypeName(genId) {
      for (const item of this.$store.state.genres) {
        if (item.id === genId) {
          return item.name
        }
      }
    },
  },
}
</script>

<style>
.movies.v-card:hover {
  box-shadow: 0px 0px 150px #000000;
  z-index: 2;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1.4);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1.4);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1.4);
  transition: all 200ms ease-in;
  transform: scale(1.4s);
}
</style>
