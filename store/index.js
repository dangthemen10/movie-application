export const state = () => ({
  genres: [],
  now_playing: [],
})

export const mutations = {
  SET_GENRES(state, genres) {
    state.genres = genres
  },
  SET_NOWPLAYING(state, data) {
    state.now_playing = data
  },
}

export const actions = {
  async loadGenres({ state, commit }) {
    try {
      const data = await this.$axios.$get('/genre/movie/list')
      if (data) {
        commit('SET_GENRES', data.genres)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  async loadNowPlaying({ state, commit }) {
    try {
      let isHaveData = true
      let nextPages = 1
      let result = []
      const LIMIT_ITEMS = 100
      while (isHaveData) {
        const response = await this.$axios.$get(
          `/movie/now_playing?page=${nextPages}`
        )
        if (response && response.results) {
          const totalResults = response.results || []
          result = totalResults.filter((element) => element.vote_count > 1000)
        }
        if (response.total_pages <= nextPages || result.length <= LIMIT_ITEMS) {
          isHaveData = false
        }
        nextPages++
      }

      const nowPlaying = []
      while (nowPlaying.length < 5) {
        const getValueRandom = Math.floor(Math.random() * result.length)
        nowPlaying.push(result[getValueRandom])
        result.pop(result[getValueRandom])
      }
      commit('SET_NOWPLAYING', nowPlaying)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
