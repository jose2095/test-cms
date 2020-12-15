
<template>
  <div class="content">
    <div class="container-fluid">
      <b-row>
        <b-col md="12">
          <table-failed-login></table-failed-login>
        </b-col>
      </b-row>
    </div>
  </div>

</template>
<script>

import SearchUsers from "@/components/Page/User/SearchUsersComponent"
import TableFailedLogin from "@/components/Page/User/TableInformationFailedLoginComponent"

export default {
  components: {
    TableFailedLogin
  },
  comments:{
    TableFailedLogin
  },

  data() {
    return {

   }
  }
}
</script>
