<template>
  <div>
    <v-toolbar>
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">
        <v-icon color="pink" size="64px">mdi-video</v-icon>
        Movie Application
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          text
          link
          :to="item.link"
        >
          {{ item.title }}</v-btn
        >
      </v-toolbar-items>
      <v-btn icon @click="$nuxt.$emit('openOverlay', true)"
        ><v-icon>mdi-magnify</v-icon></v-btn
      >
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary left>
      <v-list dense nav>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title> {{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Movies', link: '/movies' },
        { title: 'TV Series', link: '/tvseries' },
        { title: 'Actors', link: '/actors' },
      ],
    }
  },
}
</script>

<style></style>
