<template>
  <div class="row">
    <div class="col-xl-3 col-md-6">
      <card class="mini-card">
        <div class="mini-card-body">
          <p class="title"> Total Downloads</p>
          <p class="subtitle"> 100,600 </p>
        </div>
      </card>
    </div>
    <div class="col-xl-3 col-md-6">
      <card class="mini-card">
        <div class="mini-card-body">
          <p class="title"> New Users </p>
          <p class="subtitle"> 8,000 </p>
        </div>
      </card>
    </div>
    <div class="col-xl-3 col-md-6">
      <card class="mini-card">
        <div class="mini-card-body">
          <p class="title"> Revenue Today </p>
          <p class="subtitle"> $4,567.23 </p>
        </div>
      </card>
    </div>
    <div class="col-xl-3 col-md-6">
      <card class="mini-card">
        <div class="mini-card-body">
          <p class="title"> Monthly Revenue Goal </p>
          <p class="subtitle"> $120,000.00 </p>
        </div>
      </card>
    </div>

  </div>
</template>

<script>

import Card from 'src/components/Cards/Card'

export default {
  components: {
    Card
  },
  data: () => ({})
}
</script>

