import Vue from "vue";
import Vuex from "vuex";
import { userService } from '../services/userManagement.service';

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
      userService.userLogin(payload.email, payload.password);
    },
  },
  actions: {
    userLogin: ({ commit }, payload) => {
      commit("userLogin", payload);
    },
  },
});
