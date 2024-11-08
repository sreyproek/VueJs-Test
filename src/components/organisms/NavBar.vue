<template>
  <v-app-bar color="var(--color-background)">
    <div class="v-toolbar__content d-flex justify-space-between" style="height: auto">
      <section class="d-flex align-center">
        <v-btn icon class="icon1">
          <v-icon>mdi-dialpad</v-icon>
        </v-btn>

        <v-btn to="/" variant="plain" class="logo-btn mx-1">
          <v-img :src="wingLogo" height="35" width="260" cover></v-img>
        </v-btn>

        <v-divider vertical></v-divider>

        <div class="title-section d-flex align-center ml-3">
          <svg-icon class="icon mr-2" type="mdi" :path="path"></svg-icon>
          <h1 class="text-caption">Leave</h1>
        </div>

        <v-sheet class="mx-auto" max-width="450">
          <v-slide-group show-arrows>
            <v-slide-group-item 
              v-for="(item, index) in items"
              :key="index"
              v-slot="{ isSelected, toggle }"
            >
              <v-btn
                :color="isSelected ? 'grey-darken-3' : undefined"
                class="ma-2 text-white text-caption custom-btn"
                rounded
                @click="toggle"
                :to="item.route"
                text
              >
                {{ item.label }}
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
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
  components: {
    SvgIcon,
  },
  data() {
    return {
      wingLogo,
      path: mdiExitRun,
      items: [
        { label: 'Request Change', route: '/request' },
        { label: 'Roster', route: '/roster' },
        { label: 'Leave Plan', route: '/leave' },
        { label: 'Configuration', route: '/configuration' },
      ],
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
  font-size: smaller;
  color: rgb(92, 86, 86);
}

.title-section {
  color: var(--highlight-color);
  font-weight: bold;
}

.icon {
  color: var(--highlight-color);
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
.v-sheet{
  margin: 0 10px;
  background-color:  var(--main);
}
.mx-auto{
  padding:  10px;
  color: white;
}
.custom-btn {
  font-size: 14px; 
  padding: 0 20px; 
  box-shadow:  var(--highlight-color);  
  transition: background-color 0.3s ease;  
}

.custom-btn:hover {
  background-color:  var(--highlight-color); 
}

</style>
