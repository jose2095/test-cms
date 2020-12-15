<template>
  <b-card>
      <b-card-body>
        <b-row>
          <b-table hover :items="items" :fields="fields"></b-table>
        </b-row>
      </b-card-body>
  </b-card>
</template>

<script>


export default {
  name: ' ',
  data () {
    return {
      items: [{
        "email" : "dev@tagwizz.com.mx",
        "device_uid" : "9b4871e285dbe872",
        "reason" : "Device is already linked with an account ",
        "source": "Gmail",
        "version_number" : "1.512",
        "start_date" : "12/25/2020",
        "time" : "2020-10-21 02:34:45",
      }],
      fields : [
        {
          key: "email",
          label: "Email",
          sortable: true
        },
        {
          key: "device_uid",
          label: "Device UID",
          sortable: true
        },
        {
          key: "reason",
          label: "Reason",
          sortable: true
        },
        {
          key: "source",
          label: "Source",
          sortable: true
        },
        {
          key: "version_number",
          label: "Version Number",
          sortable: true
        },
        {
          key: "start_date",
          label: "Start Date",
          sortable: true
        },
        {
          key: "time",
          label: "Time",
          sortable: true
        }]
    }
  }
}
</script>
