<template>
  <v-container>
    <SectionTitle title="Popular" link="popular" />
    <SectionMovies v-if="movies.length" :movies="movies" />
    <SectionTitle title="Upcoming" link="upcoming" />
    <SectionMovies v-if="upcoming.length" :movies="upcoming" />
    <SectionTitle title="Now Playing" link="now_playing" />
    <SectionMovies v-if="nowPlaying.length" :movies="nowPlaying" />
    <SectionTitle title="Top Rated" link="top_rated" />
    <SectionMovies v-if="topRated.length" :movies="topRated" />
  </v-container>
</template>
<script>
export default {
  layout: 'homepage',
  async asyncData({ $axios }) {
    try {
      const res = await $axios.$get('/movie/popular')
      const res2 = await $axios.$get('/movie/upcoming')
      const res3 = await $axios.$get('/movie/now_playing')
      const res4 = await $axios.$get('/movie/top_rated')
      return {
        movies: res.results.slice(0, 8),
        upcoming: res2.results.slice(0, 8),
        nowPlaying: res3.results.slice(0, 8),
        topRated: res4.results.slice(0, 8),
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}
</script>
