<template>
  <v-app-bar color="var(--color-background)">
    <div
      class="v-toolbar__content d-flex justify-space-between"
      style="height: auto"
    >
      <section class="d-flex align-center">
        <v-col cols="auto">
          <v-btn icon="mdi-dialpad" to="/"></v-btn>
        </v-col>
        <v-img :width="100" aspect-ratio="16/9" cover :src="wingLogo"></v-img>
        <v-btn icon="mdi-chevron-left"></v-btn>
        <v-btn class="text-caption" to="/request" text>Request Change</v-btn>
        <v-btn class="text-caption" to="/roster" text>Roster</v-btn>
        <v-btn class="text-caption" to="/leave" text>Leave Plan</v-btn>
        <v-btn class="text-caption" to="/configuration" text>Configuration</v-btn>
        <v-btn icon="mdi-chevron-right"></v-btn>
      </section>

      <section>
        <v-btn icon size="30px">
          <v-badge color="error" content="2" overlap>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>

        <v-avatar size="30px" color="teal">
          <span class="white--text headline">P</span>
        </v-avatar>
      </section>
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
.v-toolbar__content {
  height: 30px;
  color: rgb(250, 241, 241);
  gap: 1px;
  background-color: var(--main);
}
.v-toolbar__content.hover {
  color: rgb(56, 48, 48);
}
.v-badge {
  margin-top: 5px;
}
.v-avatar {
  margin: 0 10px;
}
</style>
