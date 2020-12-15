<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>

      <div class="border"> Data & metrics</div>

      <sidebar-link to="/admin/dashboard">
        <i><img src="img/icon-cms/dashboard.png" alt=""></i>
        <p>Dashboard</p>
      </sidebar-link>

      <div class="border"> Campaign </div>
      <sidebar-link to="/admin/campaign">
        <i><img src="img/icon-cms/campaing.png" alt=""></i>
        <p>Create campaing</p>
      </sidebar-link>
      <!--
      <sidebar-link to="/admin/channels">
        <i><img src="img/icon-cms/channel.png" alt=""></i>
        <p>Channels</p>
      </sidebar-link>
      -->
      <sidebar-link to="/admin/brands">
        <i><img src="img/icon-cms/brands.png" alt=""></i>
        <p>Brands</p>
      </sidebar-link>
      <!--
      <sidebar-link to="/admin/rows">
        <i><img src="img/icon-cms/row.png" alt=""></i>
        <p>Rows</p>
      </sidebar-link>

      <div class="border"> Polls & Surveys</div>
      <sidebar-link to="/admin/polls">
        <i><img src="img/icon-cms/poll.png" alt=""></i>
        <p>Create a Poll</p>
      </sidebar-link>
      <sidebar-link to="/admin/surveys">
        <i><img src="img/icon-cms/survey.png" alt=""></i>
        <p>Create a Survey</p>
      </sidebar-link>

      <div class="border"> Avatar avatar</div>
      <sidebar-link to="/admin/avatars">
        <i><img src="img/icon-cms/avatar.png" alt=""></i>
        <p>Upload an Avatar</p>
      </sidebar-link>
      <div class="border"> Account Settings</div>
      <sidebar-link to="/admin/users">
        <i><img src="img/icon-cms/user.png" alt=""></i>
        <p>User </p>
      </sidebar-link>
      <sidebar-link to="/admin/settings">
        <i><img src="img/icon-cms/settings.png" alt=""></i>
        <p>Settings</p>
      </sidebar-link>
      <sidebar-link to="/admin/deactivated-user">
        <i><img src="img/icon-cms/descuser.png" alt=""></i>
        <p>Desactived User </p>
      </sidebar-link>
      <sidebar-link to="/admin/failed-login">
        <i><img src="img/icon-cms/failed.png" alt=""></i>
        <p>Failed Log in Logs</p>
      </sidebar-link>
      -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

.border {
  margin-top: 10px;
  margin-bottom: 10px;
  border-style: solid none !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  text-align: left;
  padding-left: 15px;
}

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}

</script>
