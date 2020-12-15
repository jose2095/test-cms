<template>
  <div class="content">
    <div class="container-fluid">
      <tabla></tabla>
      <modal :data="data" v-model='size'></modal>
      <fab v-b-modal.modal-1></fab>
    </div>
  </div>

</template>

<script>

import Fab from "@/components/Page/Campaign/CreateCampaignComponent";
import Tabla from "@/components/Page/Campaign/TableCampaignComponent";
import Modal from "@/components/Page/Campaign/ModalComponent"
export default {
  components:{Fab,Tabla,Modal},
  comments:{Fab,Tabla,Modal},
 data() {
        return {
            data:{
              id:'modal-1',
            }
            ,
            size:'lg'
        }
    },
  methods:{

  }
}
</script>
