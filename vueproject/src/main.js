import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from "element-ui";
import axios from "axios";
Vue.prototype.$axios = axios;

//解决跨域
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import qs from 'qs';
Vue.prototype.$qs = qs;

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
