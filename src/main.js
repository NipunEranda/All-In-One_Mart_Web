import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import axios from "axios";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import { router } from './helper';

Vue.use(BootstrapVue);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.mixin({
  data: function() {
    return {};
  },
  methods: {
    goToHome: function() {
      router.push({ name: "index" });
    },
    goToHomePage: function() {
      router.push({ name: "home" });
    },
    goToAbout: function() {
      router.push("/about");
    },
    goToContact: function() {
      router.push("/contact");
    },
    goToSignUp: function() {
      router.push({ name: "signUp" });
    },
    goToSignIn: function() {
      router.push({ name: "signIn" });
    },
    goToForgotPassword: function() {
      router.push({ name: "forgotPassword" });
    },
  },
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
