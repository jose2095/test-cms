<template>
  <div class="card shadow-sm" style=" border:none">
    <div class="card-body">
      <div class="acciones">
        <b-col class="text-left">
          <b-icon class="rounded-circle bg-secondary p-2 h1" icon="pencil-fill" variant="white"></b-icon>
        </b-col>
        <b-col class="text-right">
          <b-icon class="rounded-circle bg-danger p-2 h1" icon="trash" variant="white"></b-icon>
        </b-col>
      </div>

      <div class="image-container">
        <img class="logo-img"
             v-bind:src="img||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Q1kEkEAIcDzccAIOP0b0pQRr3GcYWwQt7w&usqp=CAU'"
             @error="img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Q1kEkEAIcDzccAIOP0b0pQRr3GcYWwQt7w&usqp=CAU'"
             alt="logo app" width="100" height="100">
      </div>
      <p class="card-title"><b>{{ name }}</b></p>
      <p class="card-text"> {{ description }}.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'name', 'description'],
  data: () => ({})
}
</script>

<style>

.text-left {
  padding: 0;
  margin-top: -35px;
}

.text-right {
  padding: 0;
  margin-top: -35px
}

.acciones {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.card {
  margin: 15px;
}

.card-body {
  padding-top: 10px;
  padding-left: 3px;
  padding-right: 3px;
}

.is-round {
  border-radius: 50%;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-img {
  width: 40% !important;
  height: 40% !important;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.card-title {
  font-size: 14px;
  text-align: center;
  margin-top: 25px !important;
  text-transform: uppercase;
}

.card-text {
  font-size: 12px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
