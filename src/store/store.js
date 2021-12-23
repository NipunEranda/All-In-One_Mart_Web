import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { router } from '../helper/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authorization: "",
  },
  getters: {
    getAuthKey: (state) => {
      return this.authorization;
    },
  },
  mutations: {
    userLogin: (state, payload) => {
      axios
        .post("http://localhost:5000/user/login", {
          email: payload.email,
          password: payload.password,
        })
        .then((Response) => {
          if (Response.status === 200) {
            state.authorization = Response.data.data.token;
            router.push({ name: "home" });
          }else{
            router.push({ name: "index" });
          }
        })
        .catch((err) => {
          alert("login Failed");
          router.push({ name: "index" });
        });
    },
  },
  actions: {
    userLogin: ({ commit }, payload) => {
      commit("userLogin", payload);
    },
  },
});
