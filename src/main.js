import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.mixin({
  methods: {
    goToHome: function() {
      this.$router.push({ name: "index" });
    },
    goToAbout: function(){
      this.$router.push("/about");
    },
    goToContact: function(){
      this.$router.push("/contact");
    },
    goToSignUp: function(){
      this.$router.push({ name: "signUp" });
    },
    goToSignIn: function(){
      this.$router.push({ name: "signIn" });
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
