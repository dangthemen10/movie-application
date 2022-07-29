<template>
  <div id="slide-header">
    <v-container>
      <v-row align="center">
        <v-carousel
          v-model="window"
          dark
          progress
          progress-color="warning"
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
          delimiter-icon="mdi-minus"
        >
          <v-carousel-item
            v-for="(item, index) in playingItems"
            :key="`item${index}-${item.id}`"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <div>
              <v-row align="center" no-gutters>
                <v-col cols="12" sm="7" offset-sm="1">
                  <strong
                    class="white--text display-2 text-center font-weight-bold"
                  >
                    {{ item.title }}
                  </strong>
                  <Rating :data="item" />
                  <v-btn
                    color="pink"
                    class="white--text"
                    rounded
                    :to="`/movies/detail/${item.id}`"
                    >More detail</v-btn
                  >
                </v-col>
                <v-col cols="12" sm="3" offset-sm="1">
                  <v-img
                    :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
                  />
                </v-col>
              </v-row>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      window: 0,
    }
  },
  computed: {
    playingItems() {
      return this.$store.state.now_playing
    },
  },
}
</script>

<style>
#slide-header {
  background: rgb(72, 72, 72);
  background: linear-gradient(
    106deg,
    rgba(72, 72, 72, 1) 10%,
    rgba(91, 85, 85, 1) 60%
  );
}
</style>
