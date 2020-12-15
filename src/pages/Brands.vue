<template>
  <div class="content">
    <div class="container-fluid">
   <fab v-b-modal.modal-1>
      </fab>
      <modal :data="data" v-model='size'></modal>
      <b-row>
        <b-nav tabs>
          <b-nav-item> All</b-nav-item>
          <b-nav-item v-for="(channel, index) in channels" :key="index">{{ channel.name }}</b-nav-item>
        </b-nav>
      </b-row>
      <b-row class="mt-5">
        <b-col md="3" sm="6" v-for="(brand, index) in brands" :key="index">
          <card-brands :img="brand.imageUrl" :name="brand.title" :description="brand.description"></card-brands>
        </b-col>
      </b-row>
    </div>
    <CreateCampaing></CreateCampaing>
  </div>


</template>

<script>
import Fab from "@/components/Page/Campaign/CreateCampaignComponent";
import CardBrands from "@/components/Page/Brands/SquareBrandsComponent"
import Modal from "@/components/Page/Brands/ModalBrandComponet"
import api from "@/api";

export default {

  components: {
    CardBrands,
    Fab,
    Modal
  },
  comments: {
    CardBrands,
    Fab,
    Modal
  },
  created() {
    this.getBrands();
    this.getChannels();
  },
  data() {
    return {
        data:{
              id:'modal-1',
            }
            ,
            size:'lg',
      channels: [],
      brands: []
    }
  },
  methods: {
    async getBrands() {
      await api.getBrands().then((response) => {
        this.brands = response.data.data;
      })
    },
    async getChannels() {
      await api.getChannels().then((response) => {
        this.channels = response.data.data;
      })
    }
  }
}
</script>
