<template>
  <v-app id="app" data-v=app>
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
#app {
    max-width: auto;
    margin: 30px auto;
    font-weight: normal;
    color: white;
    border-radius: 20px;
    background-color:rgb(15, 70, 114);
}
</style>