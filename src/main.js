import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./router/routes";
import store from "./store/store";

Vue.use(VueRouter);
// Vue.use(store);

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
