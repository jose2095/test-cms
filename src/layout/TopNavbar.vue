<template>
  <nav class="navbar navbar-expand-lg py-0 ">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav ">
          <i class="nc-icon nc-zoom-split"></i>
          <li class="nav-item ml-2">
            <b-form-input
              class="large"
              id="input-1"
              v-model="form.search"
              type="text"
              placeholder="Search for a campaing or brand"
            ></b-form-input>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto py-0">
          <li class="nav-item ">
            <base-dropdown tag="li">
              <template slot="title">
                <img src="img/icon-cms/Bell.png" class="img-bell" />
                <span class="notification">5</span>
              </template>

              <a class="dropdown-item" href="#">
                <img
                  class="redondly"
                  src="img/icon-cms/coin.jpg"
                  width="22px"
                />
                <label class="title">Install_cookie_and_lvl30</label>
                <label class="description">campaing created</label>
                <label class="time">30 mins ago</label>
              </a>
              <a class="dropdown-item" href="#">
                <img
                  class="redondly"
                  src="img/icon-cms/coin.jpg"
                  width="22px"
                />
                <label class="title">Install_cookie_and_lvl30</label>
                <label class="description">campaing created</label>
                <label class="time">30 mins ago</label>
              </a>
              <a class="dropdown-item" href="#">
                <img
                  class="redondly"
                  src="img/icon-cms/coin.jpg"
                  width="22px"
                />
                <label class="title">Install_cookie_and_lvl30</label>
                <label class="description">campaing created</label>
                <label class="time">30 mins ago</label>
              </a>
            </base-dropdown>
          </li>

          <base-dropdown>
            <template slot="title">
              <img
                src="img/icon-cms/profile.png"
                class="img-profile align-self-center "
              />
              <p>Vesey Studios</p>
            </template>
          </base-dropdown>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false,
      form: {
        search: ""
      }
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    }
  }
};
</script>
<style>
.title {
  font-weight: bold;
  margin: 2px;
}
.description {
  font-weight: 50;
  font-size: small;
  margin: 2px;
}
.time {
  font-weight: 50;
  font-size: 10px;
  margin: 2px;
  color: #7174e4;
}

.redondly {
  border-radius: 50%;
  margin-right: 5px;
}
.large {
  width: 650px;
  border-style: none;
}
.img-bell {
  vertical-align: middle;
  width: 25px;
  height: 30px;
}
.img-profile {
  width: 34px;
  height: 34px;
}
.line {
  border: 0.1px solid #999fae;
  border-style: none solid;
}
</style>
