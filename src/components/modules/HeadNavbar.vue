
<template>
  <div>
    <v-app-bar color="var(--color-background)" v-if="!showLeaveRequest">
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
        ></v-pagination>

        <v-data-table class="data-table"></v-data-table>

        <v-divider vertical></v-divider>

        <v-btn @click="showLeaveRequest = true" class="btn-create"
          >Create</v-btn
        >
      </div>
    </v-app-bar>

    <v-app-bar height="50" color="var(--main)" v-if="showLeaveRequest">
      <div
        class="v-toolbar__content d-flex justify-space-between "
        style="height: 60px; margin-bottom: 10px"
      >
        <span class="text-h6">Leave Request</span>

        <v-spacer></v-spacer>
        
          <v-btn class="btn-submit">Submit</v-btn>
          <v-btn class="btn-save">Save</v-btn>
          <v-btn class="btn-back" @click="showLeaveRequest = false">Discard</v-btn
          >
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'my-component',
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
      totalPages: 5,
      showLeaveRequest: false,
    }
  },
}
</script>

<style scoped>
.v-toolbar__content {
  height: 50px;
  color: rgb(250, 241, 241);
  gap: 5px;
  background-color: var(--main);
}

.v-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination-all-controls {
  color: white;
  margin-top: 15px;
}
.page-number {
  font-size: 13px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
}

.btn-create {
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  padding: 5px 10px;
  color: black;
  background-color: var(--highlight-color);
}
.data-table {
  width: 200px;
  height: 50px;
  background-color: var(--main);
}

.v-divider {
  margin-left: 10px;
  margin-right: 10px;
}

.text-h6 {
  margin: 30px 20px;
}
.btn-back {
  color: red;
  background-color: rgb(246, 194, 194);
  font-size: 12px;
  margin-top: 10px;
}
.btn-save {
  color: var(--highlight-color);
  background-color: var(--main);
  font-size: 12px;
  margin-top: 10px;
}
.btn-submit {
  color: black;
  background-color: var(--highlight-color);
  font-size: 12px;
  margin-top: 10px;
}
</style>
