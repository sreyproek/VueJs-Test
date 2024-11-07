
<template>
  <v-app-bar color="var(--color-background)">
    <div
      class="v-toolbar__content d-flex justify-space-between"
      style="height: 60px; margin-bottom: 20px"
    >
      <v-spacer></v-spacer>

      <v-divider vertical></v-divider>

      <v-pagination
        v-model="page"
        :length="totalPages"
        show-first-last-page
        class="pagination-all-controls"
      >
        <span class="page-number">{{ page }}</span>
      </v-pagination>

      <v-data-table
        :search="search"
        :items="items"
        :items-per-page="itemsPerPage"
        v-model:items-per-page="itemsPerPage"
        class="data-table"
      >

      </v-data-table>

      <v-divider vertical></v-divider>

      <v-btn class="btn-create">Create</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

export default {
  name: 'my-component',
  components: {
    SvgIcon,
  },
  data() {
    return {
      page: 1,
      search: '',
      items: [], 
      itemsPerPage: 5,
      pagination: {
        page: 1,
        itemsPerPage: 5,
      },
      totalPages: 10, 
    }
  },
}
</script>

<style scoped>
.v-toolbar__content {
  height: 60px;
  color: rgb(250, 241, 241);
  gap: 10px; 
  background-color: var(--main);
}

.v-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-number {
  font-size: 13px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
}

.btn-create {
  font-size: 13px;
  font-weight: bold;
  margin: 0 5px;
  color: black;
  background-color: var(--highlight-color);
}

.data-table {
  width: 100%;
  margin: 0;
  background-color: var(--main);
}

.v-divider {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
