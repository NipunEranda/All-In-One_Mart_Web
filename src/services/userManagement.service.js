import { authHeader, router } from "../helper";
import axios from "axios";
import store from "../store/store";

function userLogin(email, password) {
  axios
    .post("http://localhost:5000/user/login", {
      email: email,
      password: password,
    })
    .then((Response) => {
      if (Response.status === 200) {
        store.state.authorization = Response.data.data.token;
        router.push({ name: "home" });
      } else {
        router.push({ name: "index" });
      }
    })
    .catch((err) => {
      alert("login Failed");
      router.push({ name: "index" });
    });
}

export const userService = {
  userLogin,
};