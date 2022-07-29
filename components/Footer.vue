<template>
  <v-footer dark padless>
    <v-card flat tile class="flex grey darken-4 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          dark
          icon
          :href="item.link"
          target="_blank"
          class="mx-4 mt-4 white--text"
        >
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text">
        © 2022 - {{ new Date().getFullYear() }} Copyright:
        <a
          class="white--text text-lg text-decoration-none"
          href="https://github.com/dangthemen10"
          >Phan Hải Đăng</a
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: 'mdi-youtube', link: 'https://youtube.com' },
        { icon: 'mdi-github', link: 'https:/github.com/dangthemen10' },
        {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/h%E1%BA%A3i-%C4%91%C4%83ng-809018234/',
        },
        { icon: 'mdi-instagram', link: 'https://www.instagram.com/dangtypn/' },
        { icon: 'mdi-gmail', link: 'phanhaidangkgumt@gmail.com' },
        { icon: 'mdi-facebook', link: 'https://www.facebook.com/phdang97/' },
      ],
      links: ['Home', 'About Us', 'Services', 'Contact Us'],
    }
  },
}
</script>

<style></style>
