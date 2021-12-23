import Vue from "vue";
import Router from "vue-router";
import { routes } from "../routes";
import store from "../store/store";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/", "/signIn", "/signUp", "/about", "contact"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.authorization;

  if (authRequired && !loggedIn) {
    return next("/signIn");
  }

  next();
});