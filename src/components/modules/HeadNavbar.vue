<template>
  <v-app-bar color="var(--color-background)">
    <div
      class="v-toolbar__content d-flex justify-space-between"
      style="height: 45px; margin-bottom: 20px"
    >
      <v-spacer></v-spacer>

      <h2 class="divider">|</h2>
      <v-pagination v-model="page" :length="5" class="my-4"></v-pagination>
      <v-btn class="btn-create">create</v-btn>
      <h2 class="divider">|</h2>
      <v-btn class="text-caption"
        >10 <svg-icon type="mdi" :path="path"></svg-icon
      ></v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMenuDown } from '@mdi/js'

export default {
  name: 'my-component',
  components: {
    SvgIcon,
  },
  data() {
    return {
      page: 1,
      path: mdiMenuDown,
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
.btn-create {
  font-size: 13px;
  font-weight: bold;
  margin: 0 5px;
  background-color: var(--highlight-color);
}
.text-caption {
  font-size: 13px;
  font-weight: bold;
  margin: 0 5px;
  background-color: var(--highlight-color);
}
.divider {
  font-size: smaller;
  color: rgb(92, 86, 86);
}
</style>
