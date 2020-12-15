<template>
  <body class="back">
  <div class="login">
    <form action="/" class="form" @submit.prevent="loginCMS()">
      <h1 class="title">Welcome to</h1>
      <h1 class="title color"> Flash Rewards CMS!</h1>
      <p class="subtitle">Let's create some awesome campaings!</p>
      <input class="form-input" type="email" id="email" v-model="email" required placeholder="Email">
      <input class="form-input" type="password" id="password" v-model="password" placeholder="Password">
      <div class="row">
        <div class="col-md-1 m-0 mt-1">
          <input class="form-input" type="checkbox" id="checkbox" v-model="checked">
        </div>
        <div class="cold-md-4  m-0 mt-1">
          <p>
            Remember me
          </p>
        </div>
      </div>
      <div>
        <b-alert v-model="error" variant="danger" dismissible>
          Incorrect credentials. Try again.
        </b-alert>
      </div>
      <input class="form-submit" type="submit" value="Login In">
    </form>
  </div>
  </body>
</template>

<script>
import api from '@/api'

export default {
  name: 'login-comp',
  data: () => ({
    email: "",
    password: "",
    error: false,
    checked: false,
  }),
  methods: {
    async loginCMS() {
      try {
        await api.login(this.email, this.password);
        await this.$router.push("/");
      } catch (error) {
        this.error = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.back {
  background-image: url('cms-login.png');
  background-size: cover;
  margin: 0px;
}

.login {
  margin: 0px;
  color: black;
  padding: 1rem;
}

.remember {
  font-size: 15px;
}


.color {
  color: #7174E4;
}

.title {
  font-weight: bold;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.subtitle {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 17px;
  text-align: center;
}

input {
  margin-bottom: 15px;
}

.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 32%;
  min-width: 350px;
  max-width: 100%;
  background: white;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;

  &:first-of-type {
    margin-top: 0rem;
  }
}

.form-input {
  margin-top: 8px;
  border-radius: 5px;
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: .05px solid rgb(179, 179, 179);
  //color: white;

  &:focus {
    outline: 0;
    border-color: #b8b9b9;
  }
}

.form-submit {
  background: #7174E4;
  border: none;
  color: rgb(255, 255, 255);
  margin-top: .5rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #9699ec;
  }
}
</style>
