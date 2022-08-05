<template>
  <div id="app">
    <v-app-bar app color="grey darken-4">
      <v-toolbar-title
        style="cursor: pointer"
        class="ml-6"
        @click="$router.push('/')"
      >
        <v-icon color="white" size="50px">mdi-film</v-icon>
        <span style="font-family: fantasy; font-weight: bold; color: white"
          >PD.CGV</span
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon
          style="color: white"
          @click="drawer = true"
        ></v-app-bar-nav-icon>
      </span>
      <Genre />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          text
          link
          color="white"
          :to="item.link"
        >
          {{ item.title }}</v-btn
        >
      </v-toolbar-items>
      <v-btn icon color="white" @click="$nuxt.$emit('openOverlay', true)"
        ><v-icon>mdi-magnify</v-icon></v-btn
      >
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary left>
      <v-list-item style="background-color: black">
        <v-list-item-content>
          <v-list-item-title class="text-h6" style="color: white">
            MENU
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav shaped>
        <v-subheader light>Movie</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.link"
            color="white"
            link
          >
            <v-list-item-icon>
              <v-icon color="black" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-header>Genres</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card class="flex-grow-0">
                  <v-virtual-scroll
                    id="scroll-bar"
                    :items="genres"
                    height="300"
                    width="200"
                    item-height="45"
                  >
                    <template #default="{ item }">
                      <v-list-item :key="item.id" dense to="/">
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.name"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-virtual-scroll>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Genre from './Genre.vue'
export default {
  components: { Genre },
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Movies', link: '/movies', icon: 'mdi-movie' },
        { title: 'TV Series', link: '/tvseries', icon: 'mdi-television-box' },
        { title: 'Actors', link: '/actors', icon: 'mdi-star' },
      ],
      genres: [],
      panel: [0, 1],
    }
  },
  mounted() {
    this.genres = this.$store.state.genres
  },
}
</script>

<style></style>
