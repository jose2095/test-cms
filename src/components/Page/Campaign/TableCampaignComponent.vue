<template>
  <div class="container-fluid">
    <b-table
      :items="offers"
      :fields="fields"
      :sort-by.sync="sortBy"
      responsive
      sort-icon-right
      striped
      head-variant="light"
    >
      <template #cell(status)="data">
        <h5>
          <b-badge :variant="data.value.color" v-html="data.value.status"></b-badge>
        </h5>
      </template>
      <template #cell(channel)="data">
        <h5>
          <b-badge v-for="channel in data.value" variant="dark" v-html="channel"></b-badge>
        </h5>
      </template>
      <template #cell(action)="data">
        <b-button-group>
          <b-button style="background-color: whitesmoke;color: black">
            <small>
              <b-icon icon="calendar3-fill"></b-icon>
            </small>
          </b-button>
          <b-button style="background-color: whitesmoke;color: black">
            <small>
              <b-icon icon="pen-fill"></b-icon>
            </small>
          </b-button>
          <b-button class="bg-danger">
            <small>
              <b-icon icon="trash"></b-icon>
            </small>
          </b-button>
        </b-button-group>
      </template>
    </b-table>
  </div>
</template>

<script>

import api from "@/api";
import moment from 'moment';

export default {
  created() {
    this.getOffers();
  },
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        {key: 'custom_name', name: 'Custom Name', sortable: true},
        {key: 'brand', name: 'Brand', sortable: true},
        {key: 'coins', name: 'Coins', class: 'text-center', sortable: true},
        {key: 'boosted', name: 'Boosted', class: 'text-center', sortable: true},
        {key: 'type', name: 'Type', class: 'text-center', sortable: true},
        {key: 'channel', name: 'Channel', class: 'text-center', sortable: true},
        {key: 'users_group', name: 'User Group', class: 'text-center', sortable: true},
        {key: 'start_date', name: 'Start Date', class: 'text-center', sortable: true},
        {key: 'status', name: 'Status', class: 'text-center', sortable: true},
        {key: 'publish', name: 'Publish', class: 'text-center', sortable: true},
        {key: 'action', name: 'Action', class: 'text-center', sortable: false},
      ],
      offers: []
    }
  },
  methods: {
    async getOffers() {
      await api.getOffers().then((response) => {
        let tmp = []
        response.data.data.offers.map(function (value, key) {
          let channelsArray = []
          value.channels.map(function (value, key) {
            channelsArray.push(value.name)
          })

          tmp.push({
            custom_name: value.translates[0].customName,
            brand: value.brand[0].description,
            coins: value.totalCoinsAmount,
            boosted: (value.boosted) ? 'Yes' : 'N/A',
            type: value.type,
            channel: channelsArray,
            users_group: '-',
            start_date: moment(value.startDate.date).format('MM/DD/YYYY'),
            status: (value.status) ? {color: 'success', status: value.status} : {color: 'danger', status: value.status},
            publish: (value.status) ? 'Yes' : 'No',
            action: null,
          })
        });
        this.offers = tmp;
      })
    },
  }
}
</script>
