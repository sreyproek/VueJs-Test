<template>
  <v-app-bar app>
    <div class="v-toolbar__content" style="height: 50px;">
      <v-col cols="auto">
        <v-btn icon="mdi-dialpad" to="/"></v-btn>
      </v-col>
      <v-img :width="100" aspect-ratio="16/9" cover :src="wingLogo"></v-img>
      <v-btn icon="mdi-chevron-left"></v-btn>
      <v-btn to="/request" text>Request Change</v-btn>
      <v-btn to="/roster" text>Roster</v-btn>
      <v-btn to="/leave" text>Leave Plan</v-btn>
      <v-btn to="/configuration" text>Configuration</v-btn>
      <v-btn icon="mdi-chevron-right"></v-btn>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-badge content="3" overlap color="red">
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>

      <v-avatar color="teal">
        <span class="white--text headline">P</span>
      </v-avatar>
    </div>
  </v-app-bar>
</template>

<script>
import wingLogo from '@/components/organisms/@assets/wing-logo.png'

export default {
  name: 'NavBar',
  data() {
    return {
      wingLogo,
    }
  },
}
</script>

<style scoped>
.v-toolbar__content{
  height: 30px;
  color: rgb(250, 241, 241);
  gap: 1px;
  background-color: rgb(15, 70, 114);
}
.v-toolbar__content.hover{
  color: rgb(56, 48, 48);
}
</style>
