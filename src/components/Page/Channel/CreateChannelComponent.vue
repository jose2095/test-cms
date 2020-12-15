<template>
  <div class="card shadow-sm" style="width: 13rem; border:none">
    <div class="card-body">
      <div class="acciones">
        <b-col class="text-left">
          <b-icon
            class="rounded-circle bg-secondary p-2 h1"
            icon="pencil-fill"
            variant="white"
          ></b-icon>
        </b-col>
        <b-col class="text-right">
          <b-icon
            class="rounded-circle bg-danger p-2 h1"
            icon="trash"
            variant="white"
          ></b-icon>
        </b-col>
      </div>

      <div class="image-container">
        <img
          class="logo-img"
          v-bind:src="img"
          alt="logo app"

        />
      </div>
      <h5 class="card-title">{{ name }} +</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img','name'],
  data: () => ({})
}
</script>

<style>
.b-row-top{
  margin-top: -20px;
}


.acciones{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card{
    margin: 10px;
}

.card-body{
    padding-top: 10px;
    padding-left: 3px;
    padding-right: 3px;
}

.is-round{
    border-radius: 50% ;
}

.image-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-img{
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.card-title{
    font-size: 14px;
    text-align: center;
    margin-top: 5px;
    text-transform: uppercase;
}

.card-text{
    font-size: 12px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
}


</style>
