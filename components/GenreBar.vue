<template>
  <v-menu open-on-hover transition="scale-transition" offset-y>
    <template #activator="{ attrs, on }">
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-bind="attrs"
          v-model="isHover"
          color="white"
          text
          @mouseover="isHover = true"
          @mouseleave="isHover = false"
          v-on="on"
        >
          Genres
          <v-icon v-if="!isHover" right dark> mdi-menu-down </v-icon>
          <v-icon v-else right dark> mdi-menu-up </v-icon>
        </v-btn>
      </v-toolbar-items>
    </template>

    <v-card
      class="flex-grow-0"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
    >
      <v-list dense flat>
        <v-virtual-scroll
          id="scroll-bar"
          :items="genres"
          height="300"
          width="200"
          item-height="45"
        >
          <template #default="{ item }">
            <v-list-item :key="item.id" dense to="/" color="white">
              <v-list-item-content>
                <v-list-item-title
                  class="black--text"
                  v-text="item.name"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data: () => ({
    genres: {},
    isHover: false,
  }),
  mounted() {
    this.genres = this.$store.state.genres
  },
}
</script>
<style>
#scroll-bar::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

#scroll-bar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #fff;
  background-image: -webkit-gradient(
    linear,
    40% 0%,
    75% 84%,
    from(#4d9c41),
    to(#19911d),
    color-stop(0.6, #54de5d)
  );
}
</style>
