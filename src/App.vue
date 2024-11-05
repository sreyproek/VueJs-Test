<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from './components/organisms/NavBar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>

</style>