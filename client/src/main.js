import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

import "@/assets/styles/index.scss";
import "@/assets/font/index.scss";

Vue.config.productionTip = false;

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
