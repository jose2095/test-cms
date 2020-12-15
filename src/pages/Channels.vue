<template>
  <div class="content">
    <div class="container-fluid">
      <b-row>
        <strong>Active Channels</strong>
      </b-row>
      <p>Sort the Channels to your liking</p>
      <b-row class="mt-5">
        <b-col md="3" sm="6" v-for="(channel, index) in channels" :key="index">
          <card-brands :img="channel.image" :name="channel.name" :description="channel.description"></card-brands>
        </b-col>
      </b-row>
      <div class="container mt-5">
        <div class="div-card px-3 pt-1 pb-2 rounded">
          <div class="container rounded bg-light pt-2 pb-2">
            <div class="row px-2 pt-2 pb-1" v-for="(date, index) in dates" :key="index">
              <div class="col-2 py-1 border-one celda">
                Games
                {{ date.type }}
              </div>
              <div class="col-4 py-1 border-two celda text-center">
                Amount of Offers in Channel: <b> {{ date.amount }}</b>

              </div>
              <div class="col-3 py-1 border-two celda text-center">
                Position: <b> {{ date.pos }}</b>

              </div>
              <div class="col-2 py-1 border-two celda text-center">
                {{ date.show }}
              </div>
              <div class="col-1 py-1 border-two celda text-center">
                Options
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateCampaing></CreateCampaing>
  </div>

</template>
<script>
import CardBrands from "@/components/Page/Brands/SquareBrandsComponent"
import CreateCampaing from "@/components/Page/Campaign/CreateCampaignComponent"
import api from "@/api";

export default {
  components: {
    CardBrands,
    CreateCampaing
  },
  comments: {
    CardBrands,
  },
  mounted() {
    this.getChannels();
  },
  data() {
    return {
      dates: [
        {type: 40, amount: 14, pos: 1, show: false},
        {type: 40, amount: 7, pos: 2, show: false},
        {type: 40, amount: 20, pos: 3, show: false},
        {type: 40, amount: 31, pos: 4, show: false},
      ],
      channels: []
    }
  },
  methods: {
    async getChannels() {
      await api.getChannels().then((response) => {
        console.log(response.data.data)
        this.channels = response.data.data;
      })
    }
  }
}
</script>

<style>
.b-card {
  width: 1200px;
  height: auto;
  margin-top: 10px;
  margin-left: 20px;
  padding: 10px;

}

.hidden_header {
  display: none;
}

.div-card {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
}

.celda {
  background-color: white;
}

.border-one {
  border: 1px solid lightgray;
}

.border-two {
  border: 1px solid lightgray;
  border-style: solid solid solid none;
}

.title > b {
  font-size: x-large;
}
</style>
