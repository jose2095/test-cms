<template>
	<button class="shadow fab btn btn-default">
   <span id="plus">+</span>
  </button>
</template>

<script>


export default {
  name: 'Fab',
  data () {
    return {
      texto: 'Create'
    }
  }
}
</script>

<style scoped>
.fab{
  position: fixed !important;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  background-color: #7174E4;
  z-index: 100;
}

</style>
