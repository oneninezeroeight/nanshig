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
  },
  {
    path: "/datapage",
    name: "datapage",
    component: () => import("../components/pages/Datapage/Datapage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
