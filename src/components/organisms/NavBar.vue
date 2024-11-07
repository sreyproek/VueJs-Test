<template>
  <v-app-bar color="var(--color-background)">
    <div
      class="v-toolbar__content d-flex justify-space-between"
      style="height: auto"
    >
      <section class="d-flex align-center">
        <v-btn icon class="icon1">
          <v-icon>mdi-dialpad</v-icon>
        </v-btn>
        
        <v-btn to="/" variant="plain" class="logo-btn mx-1">
          <v-img :src="wingLogo" height="35" width="260" cover></v-img>
        </v-btn>

        <h2 class="divider">|</h2>

        <div class="title-section d-flex align-center ml-3">
          <svg-icon class="icon mr-2" type="mdi" :path="path"></svg-icon>
          <h1 class="text-caption">Leave</h1>
        </div>

        <v-btn icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-btn class="text-caption nav-btn" to="/request" text
          >Request Change</v-btn
        >
        <v-btn class="text-caption nav-btn" to="/roster" text>Roster</v-btn>
        <v-btn class="text-caption nav-btn" to="/leave" text>Leave Plan</v-btn>
        <v-btn class="text-caption nav-btn" to="/configuration" text
          >Configuration</v-btn
        >
        <v-btn icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </section>

      <section class="d-flex align-center">
        <v-btn icon>
          <v-badge color="error" content="2" overlap>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>

        <v-avatar size="36px" color="teal" class="ml-3">
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
  color: rgb(250, 241, 241);
  background-color: var(--main);
  padding: 0 20px;
}

.divider {
  font-size:smaller;
  color: rgb(92, 86, 86);
}

.title-section {
  color:var(--highlight-color);
  font-weight: bold;
}

.icon {
  color:var(--highlight-color);
}
.v-badge {
  margin-top: 2px;
}

.v-avatar {
  margin: 10px;
}
.icon1 {
  margin: 0 15px;
}

.mx-1 {
  height: 40px;
  width: 150px;
}

.nav-btn {
  font-size: 14px;
  font-weight: bold;
  margin: 0 3px;
}
</style>
