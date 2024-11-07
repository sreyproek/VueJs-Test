<template>
  <v-card>
    <v-card-text>
      <v-text-field
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search"
        hide-details
        single-line
        @click:append-inner="onClick"
      ></v-text-field>
      <v-spacer></v-spacer>
       <v-spacer></v-spacer>
      <v-icon icon="mdi-calendar" />
      <v-icon icon="mdi-menu" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SearchButton',
}
</script>

<style scoped>
.v-icon {
  margin: 0 10px;
  font-size: 15px;
}
.v-card-text {
  background-color: var(--main);
}

</style>
