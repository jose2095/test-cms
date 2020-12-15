
<template>
  <div class="content">
    <div class="container-fluid">
      <b-row>
        <b-col md="12">
          <search-users></search-users>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col md="12">
          <table-users></table-users>
        </b-col>
      </b-row>
    </div>
  </div>

</template>
<script>

import SearchUsers from "@/components/Page/User/SearchUsersComponent"
import TableUsers from "@/components/Page/User/TableInformationUsersComponent"

export default {
  components: {
    SearchUsers,
    TableUsers
  },
  comments:{
    SearchUsers,
    TableUsers
  },

  data() {
    return {

   }
  }
}
</script>
