<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="tvshows"
      :to="`/movies/detail/${movie.id}`"
      :elevation="hover ? 24 : 0"
      nuxt
    >
      <v-img
        aspect-ratio="0.7"
        height="180"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      />
      <v-card-title class="subtitle-2 pt-1">
        {{ movie.name }}
        <span v-for="county in movie.origin_country" :key="county" class="pl-1">
          <CountryFlag
            :country="covertCountryToLowerCase(county)"
            size="small"
          />
        </span>
      </v-card-title>
      <v-card-text>
        <v-row class="mx-0" no-gutters>
          <v-col cols="12" class="d-flex" md="8">
            <v-rating
              :value="movie.vote_average / 2"
              half-increments
              length="5"
              dense
              readonly
              color="yellow accent-4"
              size="16"
            ></v-rating>
            <span
              class="black--text text--lighten-1 text-caption mr-2 mt-1 pl-2"
            >
              {{ movie.vote_average }}
            </span>
          </v-col>
          <v-col v-if="genres_tv" cols="12">
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
import CountryFlag from 'vue-country-flag'
export default {
  components: {
    CountryFlag,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      genres_tv: [],
      country: [],
    }
  },
  mounted() {
    this.genres_tv = this.$store.state.genres_tv
  },
  methods: {
    genreTypeName(genId) {
      for (const item of this.genres_tv) {
        if (item.id === genId) {
          return item.name
        }
      }
    },
    covertCountryToLowerCase(country) {
      return country.toLowerCase()
    },
  },
}
</script>

<style>
.tvshows.v-card:hover {
  box-shadow: 0px 0px 150px #000000;
  z-index: 2;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1.5);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1.5);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1.5);
  transition: all 200ms ease-in;
  transform: scale(1.5s);
}
</style>
