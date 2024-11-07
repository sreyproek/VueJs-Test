<template>
  <div id="app" data-v-app>
    <div class="v-toolbar-content">
    <h1>Home Page</h1>
    <p>Welcome to the homepage!</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
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
