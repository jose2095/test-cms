/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.0.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// Bootstrap 4
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// VSelect
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

//CKEditor
import CKEditor from  'ckeditor4-vue';

// router setup
import routes from './routes/routes';

import './registerServiceWorker'

// plugin setup
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(LightBootstrap)
Vue.use(require('vue-moment'));
Vue.use( CKEditor );

Vue.component('v-select', vSelect)


// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
