import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage";
import CMS from "../views/CMS.vue";
import CMSProduction from "../views/CMSProduction.vue";
import CMSProperty from "../views/CMSProperty.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token")) {
        next();
      } else {
        next("/home");
      }
    },
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token")) {
        next();
      } else {
        next("/home");
      }
    },
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/cms",
    name: "CMS",
    component: CMS,
    // beforeEnter: (to, from, next) => {
    //   if (localStorage.getItem("access_token")) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // },
    children: [
      {
        path: "property",
        name: "CMSProperty",
        component: CMSProperty,
      },
      {
        path: "production",
        name: "CMSProduction",
        component: CMSProduction,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
