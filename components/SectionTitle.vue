<template>
  <v-toolbar outlined short flat class="my-4" dark>
    <v-toolbar-title class="white--text">
      {{ title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text color="pink" :to="`movies/${link}`">
      See more
      <v-icon right>mdi-chevron-double-right</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
