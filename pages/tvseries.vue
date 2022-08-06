<template>
  <v-container fluid>
    <v-row>
      <v-col sm="3" cols="3"
        ><v-toolbar short flat class="my-4">
          <v-toolbar-title class="black--text"> Seach </v-toolbar-title>
        </v-toolbar>
        <SearchTVShow />
      </v-col>
      <v-col sm="9" cols="9">
        <SectionTV
          v-if="tvShows.length"
          :tv-shows="tvShows"
          title="Popular TV Shows"
        />
        <!--Add here the vuetify directive -->
        <v-card v-intersect="loadMoreMovies" :loading="loadMore">
          <template slot="progress">
            <v-progress-linear
              indeterminate
              color="cyan"
            ></v-progress-linear> </template
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SectionTV from '../components/SectionTV.vue'
import SearchTVShow from '../components/SearchTVShow.vue'
export default {
  components: { SectionTV, SearchTVShow },
  data() {
    return {
      tvShows: [],
      page: 1,
      loadMore: false,
      totalResults: 1,
      totalPages: 1,
    }
  },
  async fetch() {
    await this.$axios.$get(this.url).then((response) => {
      this.tvShows = response.results
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
              response.data.results.forEach((item) => this.tvShows.push(item))
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
