import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/errors/NotFoundPage.vue'

// Admin pages
import Avatars from "@/pages/Avatars";
import Brands from "@/pages/Brands";
import Campaign from "@/pages/Campaign";
import Channels from "@/pages/Channels";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/auth/Login"
import Polls from "@/pages/Polls";
import Rows from "@/pages/Rows";
import Settings from "@/pages/Settings";
import Surveys from "@/pages/Surveys";
import Users from "@/pages/Users";
import FailedLogin from "@/pages/FailedLogin";
import DeactivatedUsers from "@/pages/DeactivatedUsers";


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'campaign',
        name: 'Campaign',
        component: Campaign
      },
      {
        path: 'channels',
        name: 'Channels',
        component: Channels
      },
      {
        path: 'brands',
        name: 'Brands',
        component: Brands
      },
      {
        path: 'rows',
        name: 'Rows',
        component: Rows
      },
      {
        path: 'polls',
        name: 'Polls',
        component: Polls
      },
      {
        path: 'surveys',
        name: 'Surveys',
        component: Surveys
      },
      {
        path: 'avatars',
        name: 'Avatars',
        component: Avatars
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings
      },
      {
        path: 'users',
        name: 'Users',
        component: Users
      },
      {
        path: 'deactivated-user',
        name: 'Deactivated-User',
        component: DeactivatedUsers
      },
      {
        path: 'failed-login',
        name: 'Failed-login',
        component: FailedLogin
      },

    ]
  },

  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
