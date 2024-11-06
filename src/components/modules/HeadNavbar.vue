<template>
  <v-app-bar color="var(--color-background)">
    <div
      class="v-toolbar__content d-flex justify-space-between"
      style="height: 45px; margin-bottom: 20px"
    >
      <section>
        <v-btn><svg-icon type="mdi" :path="pathNext"></svg-icon></v-btn>
        <v-btn>10<svg-icon type="mdi" :path="pathDown"></svg-icon></v-btn>
        <v-btn>Create</v-btn>
      </section>
    </div>
  </v-app-bar>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMenuDown } from '@mdi/js'
import { mdiSkipNext } from '@mdi/js';

export default {
  name: 'my-component',
  components: {
    SvgIcon,
  },
  data() {
    return {
      pathDown: mdiMenuDown,
      pathNext: mdiSkipNext,
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
</style>
