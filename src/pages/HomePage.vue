<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the homepage!</p>
    <v-btn @click="showToast">Show Toast</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    showToast() {
      this.$toast('Hello from the Home page!');
    },
  },
};
</script>
