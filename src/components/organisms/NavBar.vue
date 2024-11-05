<template>
  <v-app-bar app>
    <v-toolbar-title>My Vue Project</v-toolbar-title>
    <v-img
      :width="100"
      aspect-ratio="16/9"
      cover
      :src="wingLogo"
    ></v-img>

    <v-spacer></v-spacer>
    <v-btn to="/" text>Home</v-btn>
    <v-btn to="/request" text>Request Change</v-btn>
    <v-btn to="/roster" text>Roster</v-btn>
    <v-btn to="/leave" text>Leave Plan</v-btn>
    <v-btn to="/configuration" text>Configuration</v-btn>
  </v-app-bar>
</template>

<script>
import wingLogo from "@/components/organisms/NavBar.vue";

export default {
  name: 'NavBar',
  data() {
    return {
      wingLogo, 
    };
  },
}
</script>
