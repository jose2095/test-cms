<template>

  <b-card>
    <b-row class="b-row-top">
      <b-col class="text-left">
        <b-icon class="rounded-circle bg-secondary p-2 h1" icon="pencil-fill" variant="white"></b-icon>
      </b-col>
      <b-col class="text-right">
        <b-icon class="rounded-circle bg-danger p-2 h1" icon="trash" variant="white"></b-icon>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="ml-10 mr-10 mt-1 mb-1">
        <b-img fluid center v-bind:src="img" alt="Center image"></b-img>
      </b-col>
    </b-row>

    <b-card-text class="font-weight-bold text-center mt-3"> {{name}} </b-card-text>
    <b-card-text class="text-center"> {{coins}} coins </b-card-text>
  </b-card>
</template>

<script>

export default {
  props: ['img','name','coins'],
  data: () => ({})
}
</script>

<style>
.b-row-top{
  margin-top: -20px;
}
</style>
