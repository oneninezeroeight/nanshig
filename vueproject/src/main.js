import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from "element-ui";
Vue.use(ElementUi);
import "element-ui/lib/theme-chalk/index.css";
import Rem from "./rem";
Rem();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");