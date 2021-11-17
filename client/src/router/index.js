import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
