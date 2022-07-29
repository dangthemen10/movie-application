<template>
  <v-container>
    <div class="text-center my-4">
      <v-btn
        value="popular"
        class="mr-2"
        retain-focus-on-click
        outlined
        rounded
        color="info"
        @click="handleGetBy('popular')"
        >Popular</v-btn
      >
      <v-btn
        value="upcoming"
        class="mr-2"
        retain-focus-on-click
        rounded
        outlined
        color="info"
        @click="handleGetBy('upcoming')"
        >Upcoming</v-btn
      >
      <v-btn
        value="top_rated"
        class="mr-2"
        retain-focus-on-click
        rounded
        color="info"
        outlined
        @click="handleGetBy('top_rated')"
        >Top Rated</v-btn
      >
    </div>
    <v-row v-if="$fetchState.pending">
      <v-col v-for="s in 20" :key="s" cols="12" sm="3">
        <v-skeleton-loader type="image, list-item-two-line"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else-if="$fetchState.error">
      <h2 class="error">An error occurred!</h2>
    </v-row>
    <SectionMovies v-else :movies="movies" />
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination
            v-model="currentPage"
            :total-visible="10"
            :length="totalPages"
            @input="handlePageChange"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const res = await $axios.$get(`/movie/popular?page=1`)

      return {
        movies: res,
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  data() {
    return {
      movies: [],
      getBy: 'popular',
      totalResults: 1,
      totalPages: 1,
      currentPage:
        parseInt(this.$route.query.page) > 1
          ? parseInt(this.$route.query.page)
          : 1,
    }
  },
  async fetch() {
    await this.$axios
      .$get(`/movie/${this.getBy}?page=${this.currentPage}`)
      .then((response) => {
        this.movies = response.results
        this.totalPages = response.total_pages
        this.totalResults = response.total_results
        this.$router.push({ query: { page: this.currentPage } })
      })
  },
  methods: {
    handlePageChange(value) {
      this.currentPage = value
      this.$fetch()
    },
    handleGetBy(value) {
      this.getBy = value
      this.$fetch()
    },
  },
}
</script>

<style></style>
