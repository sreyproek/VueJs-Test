
<template>
  <v-card class="search-card d-flex align-center pa-3">
    <v-text-field
      v-model="search"
      density="compact"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      hide-details
      class="search-field"
    ></v-text-field>

    <v-spacer></v-spacer>

    <div class="icon-group">
      <v-icon icon="mdi-video-input-component" class="icon"></v-icon>
      <v-icon icon="mdi-video-input-component" class="icon"></v-icon>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'SearchButton',
  data() {
    return {
      search: '',
      items: [],
    };
  },
};
</script>

<style scoped>
.search-card {
  background-color: var(--main);
  box-shadow: none;
  border-radius: 8px;
  max-width: auto;
}

.search-field {
  flex: 1;
  max-width: 350px;
  background-color: rgb(245, 223, 223);
  border-radius: 8px;
}

.icon-group {
  margin-right: 10px;
  display: flex;
  gap: 15px;
}

.icon {
  font-size: 24px;
  color: var(--highlight-color);
  cursor: pointer;
  transition: color 0.3s ease;
}

.icon:hover {
  color: var(--highlight-color);
}

.v-divider {
  height: 40px;
}
</style>
