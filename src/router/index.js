import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import SymptomsShow from "../views/SymptomsShow.vue";
import StrainsIndex from "../views/StrainsIndex.vue";
import StrainsShow from "../views/StrainsShow.vue";
import UsersIndex from "../views/UsersIndex.vue";
import UsersShow from "../views/UsersShow.vue";
import SymptomsIndex from "../views/SymptomsIndex.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter)

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/symptoms/:id", name: "symptoms-show", component: SymptomsShow },
    { path: "/strains", name: "strains-index", component: StrainsIndex },
    { path: "/strains/:id", name: "strains-show", component: StrainsShow },
    { path: "/users", name: "users-index", component: UsersIndex },
    { path: "/users/:id", name: "users-show", component: UsersShow },
    { path: "/symptoms", name: "symptoms-index", component: SymptomsIndex },
    { path: "/contact", name: "contact", component: Contact }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

export default router
