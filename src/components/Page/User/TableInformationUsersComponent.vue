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
        "reward_king_id" : "tune_moonactive_coinmaster_and_level3",
        "name" : "Wilson",
        "app_version" : "1.15.36",
        "life_time_pts": "1,000",
        "email" : "dev@tagwizz.com.mx",
        "device_id" : "9b4871e285dbe872",
        "adid" : "0E0AFF89E32AAEE866E22FCB0568877B",
        "start_date" : "12/25/2020",
        "status" : "Inactive",
        "app_rating" : "1.5"
      }],
      fields : [
        {
          key: "reward_king_id",
          label: "Reward King ID",
          sortable: true
        },
        {
          key: "name",
          label: "Name",
          sortable: true
        },
        {
          key: "app_version",
          label: "App Version",
          sortable: true
        },
        {
          key: "life_time_pts",
          label: "Life Time Pts",
          sortable: true
        },
        {
          key: "email",
          label: "Email",
          sortable: true
        },
        {
          key: "device_id",
          label: "Device ID",
          sortable: true
        },
        {
          key: "adid",
          label: "ADID",
          sortable: true
        },
        {
          key: "start_date",
          label: "Start Date",
          sortable: true
        },
        {
          key: "status",
          label: "Status",
          sortable: true
        },
        {
          key: "app_rating",
          label: "App Rating",
          sortable: true
        }

        ]

    }
  }
}
</script>
