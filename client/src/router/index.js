import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage";
import CMS from "../views/CMS.vue";
import CMSProduction from "../views/CMSProduction.vue";
import CMSProperty from "../views/CMSProperty.vue";
import PropertyPage from "../views/PropertyPage.vue";
import DetailPropertyPage from "../views/DetailPropertyPage.vue";
import BookMarkPage from "../views/BookMarkPage.vue";
import TransactionPage from "../views/TransactionPage.vue";
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
    path: "/checkout",
    name: "BookMarkPage",
    component: BookMarkPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/property",
    name: "PropertyPage",
    component: PropertyPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/property/:id",
    name: "DetailPropertyPage",
    component: DetailPropertyPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/product/:id/transaction",
    name: "TransactionPage",
    component: TransactionPage,
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

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("access_token")) {
    next("/home");
  } else {
    next("/login");
  }
});
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
