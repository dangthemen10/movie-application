<template>
  <v-overlay opacity="0.95" :value="loading">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="green accent-3"
      >{{ value }}</v-progress-circular
    >
  </v-overlay>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      value: 0,
    }
  },
  mounted() {
    setInterval(() => {
      if (this.value === 100) {
        this.loading = false
        return (this.value = 0)
      } else if (this.value < 50) {
        this.value += 25
      } else {
        this.value += 10
      }
    }, 400)
  },
}
</script>

<style></style>
