<template>
  <v-container>
    <SectionMovies v-if="movies.length" :movies="movies" />
    <!--Add here the vuetify directive -->
    <v-card v-intersect="loadMoreMovies" :loading="loadMore">
      <template slot="progress">
        <v-progress-linear
          indeterminate
          color="cyan"
        ></v-progress-linear> </template
    ></v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      movies: [],
      page: 1,
      loadMore: false,
      totalResults: 1,
      totalPages: 1,
    }
  },
  async fetch() {
    await this.$axios.$get(this.url).then((response) => {
      this.movies = response.results
      this.totalPages = response.total_pages
      this.totalResults = response.total_results
    })
  },

  computed: {
    url() {
      return `/tv/popular?page=${this.page}`
    },
  },
  methods: {
    loadMoreMovies() {
      this.loadMore = true
      setTimeout(() => {
        this.page++
        if (this.page > this.totalPages) {
          this.loadMore = false
        }
        this.$axios
          .get(this.url)
          .then((response) => {
            if (response.data.results.length) {
              response.data.results.forEach((item) => this.movies.push(item))
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err)
          })

        this.loadMore = false
      }, 3000)
    },
  },
}
</script>
