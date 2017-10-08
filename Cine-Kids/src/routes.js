// Load Components
import Home from './components/Home.vue'
import Navigation from './components/Navigation.vue'

// User
import User from './components/User/User.vue'
import UserStart from './components/User/UserStart.vue'
import UserDetail from './components/User/UserDetail.vue'
import UserEdit from './components/User/UserEdit.vue'

// Sign In & Sign Up
import SignIn from './components/Signs/SignIn.vue'
// import SignUp from './components/Signs/SignUp.vue'

// Cinemas
import Cinemas from './components/Cinemas/Cinemas.vue'

// Route Setting
export const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      gnb: Navigation
    }
  },
  { path: '/user',
    components: {
      default: User,
      gnb: Navigation
    },
    children: [
    { path: '/', component: UserStart },
    { path: ':id', component: UserDetail, props: true },
    { path: ':id/edit', component: UserEdit, name: 'userEdit', props: true }
    ]
  },
  // Cinemas Navigation
  {
    path: '/cinemas',
    name: 'cinemas',
    components: {
      default: Cinemas,
      gnb: Navigation
    }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    components: {
      default: SignIn,
      gnb: Navigation
    }
  },
  {
    // * === Wild Card
    path: '*', redirect: '/'
  }
]
