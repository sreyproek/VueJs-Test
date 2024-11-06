<template>
  <v-app-bar color="var(--color-background)">
    <div
      class="v-toolbar__content d-flex justify-space-between "
      style="height: auto"
    >
      <section class="d-flex align-center">
        <v-col cols="auto">
          <v-btn icon="mdi-dialpad" to="/"></v-btn>
        </v-col>
        <v-img :width="150" :aspect-ratio="1" cover :src="wingLogo"></v-img>
        <h2 class="h2">|</h2>
        <div class="h1-text-caption">
          <svg-icon type="mdi" :path="path"></svg-icon>

          <h1 class="text-caption">Leave</h1>
        </div>
        <v-btn icon="mdi-chevron-left"></v-btn>
        <v-btn class="text-caption" to="/request" text>Request Change</v-btn>
        <v-btn class="text-caption" to="/roster" text>Roster</v-btn>
        <v-btn class="text-caption" to="/leave" text>Leave Plan</v-btn>
        <v-btn class="text-caption" to="/configuration" text
          >Configuration</v-btn
        >
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
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiExitRun } from '@mdi/js'

export default {
  name: 'NavBar',
  name: 'my-cool-component',
  components: {
    SvgIcon,
  },
  data() {
    return {
      wingLogo,
      path: mdiExitRun,
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
.v-badge {
  margin-top: 7px;
}
.v-avatar {
  margin: 0 10px;
}
.h1-text-caption {
  color: rgb(77, 182, 16);
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
}
.h2{
  color: rgb(92, 86, 86);

}
</style>
