import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/pages/Home/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/",
    redirect: {
      path: "/home",
      name: "home",
      component: Home
    }
  },
  {
    path: "/classify",
    name: "classify",
    component: () => import("../components/pages/Classify/Classify.vue")
  },
  {
    path: "/information",
    name: "information",
    component: () => import("../components/pages/Information/Information.vue")
  },
  {
    path: "/shopping",
    name: "shopping",
    component: () => import("../components/pages/Shopping/Shopping.vue")
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../components/pages/Mine/Mine.vue")
<<<<<<< HEAD
  },
  {
    path: "/datapage",
    name: "datapage",
    component: () => import("../components/pages/Datapage/Datapage.vue")
=======
  }, {
    path: "/login",
    name: "login",
    component: () => import("../components/conmont/login.vue")
  },{
    path: "/register",
    name: "register",
    component: () => import("../components/conmont/register.vue")
>>>>>>> adee2006f338e9185cc78ab039aada36dcbd0319
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
