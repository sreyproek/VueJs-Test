<template>
  <v-app id="app" data-v=app>
    <Navbar />
    <head-navbar/>
    <router-view />
  </v-app>
</template>

<script>
import HeadNavbar from './components/modules/HeadNavbar.vue';
import Navbar from './components/organisms/NavBar.vue';

export default {
  components: {
    Navbar,
    HeadNavbar,
  },
};
</script>

<style scoped>
#app {
    max-width: auto;
    margin: 100px auto;
    font-weight: normal;
    color: white;
    border-radius: 20px;
    background-color: var(--main);
}
</style>