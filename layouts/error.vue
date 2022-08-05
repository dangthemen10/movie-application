<template>
  <v-app dark>
    <div class="NotFound">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card
              v-if="error.statusCode === 404"
              height="400"
              color="transparent"
              flat
            >
              <div class="display-3 mt-5">{{ pageNotFound }}</div>
              <div class="grey--text lighten-5">
                The page you are trying to get to never existed in this reality,
                or has migrated to a parallel universe.
              </div>
              <div class="paragraph-text mt-2">
                <br />
                <br />Try going back to home page and repeating your action. Or,
                contact helpdesk for support.
              </div>
              <NuxtLink to="/"> Home page </NuxtLink>
            </v-card>
            <v-card v-else height="400" color="transparent" flat>
              <div class="display-3 mt-5">{{ pageNotFound }}</div>
              <div class="grey--text lighten-5">
                The page you are trying to get to never existed in this reality,
                or has migrated to a parallel universe.
              </div>
              <div class="paragraph-text mt-2">
                <br />
                <br />Try going back to home page and repeating your action. Or,
                contact helpdesk for support.
              </div>
              <NuxtLink to="/"> Home page </NuxtLink>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.paragraph-text {
  font-size: 18px;
}
</style>
