<template>
  <v-container>
    <SectionTitle title="Popular" link="/movies" />
    <SectionMovies v-if="movies.length" :movies="movies" />
    <SectionTitle title="Upcoming" link="/movies" />
    <SectionMovies v-if="upcoming.length" :movies="upcoming" />
  </v-container>
</template>
<script>
export default {
  layout: 'homepage',
  async asyncData({ $axios }) {
    try {
      const res = await $axios.$get('/movie/popular')
      const res2 = await $axios.$get('/movie/upcoming')
      return {
        movies: res.results.slice(0, 6),
        upcoming: res2.results.slice(0, 6),
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}
</script>
