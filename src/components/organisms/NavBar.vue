<template>
    <v-app-bar app>
      <v-toolbar-title>My Vue Project</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  