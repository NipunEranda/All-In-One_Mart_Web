import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import Home from './views/Home.vue';
import Index from './views/Index.vue';
const NotFound = { template: '<p>Page not found</p>' }
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.component('home', Home);
Vue.component('index', Index);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.mixin({
  methods: {
    //Detect the job status and assign a color code.
    isFailed(job) {
      return job.jobStatus === "Completed"
        ? "blue"
        : job.jobStatus === "Cancelled"
          ? "black"
          : "red";
    },
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
