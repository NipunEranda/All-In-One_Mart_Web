<template>
  <div class="containerCover">
    <div class="flux-container">
      <Header></Header>
      <div class="d-lg-none" style="height: 5vh"></div>
      <div class="loginCard">
        <div class="row">
          <div class="d-none d-lg-block col-lg-6 loginCover" style="padding: 0">
            <div class="backgroundFilter">
              <img src="../assets/logo.png" alt="" />
              <h1>AIO MART</h1>
              <h6>Buy what you need, Sell what you desire.</h6>
            </div>
          </div>
          <!-- Login Screen in mobile view -->
          <div class="col-lg-6 d-lg-none outerLoginContent">
            <div class="loginTitle">
              <h1 class="d-none d-lg-block">Sign In</h1>
            </div>
            <div>
              <label for="email" class="inputlabel">EMAIL</label>
              <input
                id="email"
                type="text"
                class="form-control"
                placeholder="your Email"
              />
              <label for="password" class="inputlabel">PASSWORD</label>
              <input
                id="password"
                type="text"
                class="form-control"
                placeholder="Your Password"
              />
              <div class="button btn btn-success" v-on:click="login">Login</div>
              <div class="row credentialsContent">
                <div class="col-6" id="rememberMe">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="1"
                      id="rememberMe"
                    />
                    <label class="form-check-label" for="rememberMe">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="col-6" id="forgotPassword">
                  <span v-on:click="forgotPassword">Forgot Password</span>
                </div>
              </div>
              <div class="row signUpLink">
                <label
                  >Not a member?
                  <span id="signUp" v-on:click="goToSignUp"
                    >Sign up.</span
                  ></label
                >
              </div>
            </div>
          </div>
          <!-- -->
          <!-- Login Screen in full view -->
          <div class="col-lg-6 d-none d-lg-block loginContent">
            <div class="loginTitle">
              <h1 class="d-none d-lg-block">Sign In</h1>
            </div>
            <div>
              <label for="email" class="inputlabel">EMAIL</label>
              <input
                id="email"
                type="text"
                class="form-control"
                placeholder="your Email"
              />
              <label for="password" class="inputlabel">PASSWORD</label>
              <input
                id="password"
                type="password"
                class="form-control"
                placeholder="Your Password"
              />
              <div class="button btn btn-success" v-on:click="login">Login</div>
              <div class="row credentialsContent">
                <div class="col-6" id="rememberMe">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="1"
                      id="rememberMe"
                    />
                    <label class="form-check-label" for="rememberMe">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="col-6" id="forgotPassword">
                  <span v-on:click="forgotPassword">Forgot Password</span>
                </div>
              </div>
              <div class="row signUpLink">
                <label
                  >Not a member?
                  <span id="signUp" v-on:click="goToSignUp"
                    >Sign up.</span
                  ></label
                >
              </div>
            </div>
          </div>
          <!-- -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/HomeHeader.vue";
import axios from "axios";
export default {
  data: function () {
    return {
      email: "namarasekara71@gmail.com",
      password: "4321",
      result: "",
    };
  },
  methods: {
    async login() {
      try {
        await axios
          .post("http://localhost:5000/user/login", {
            email: this.email,
            password: this.password,
          })
          .then((Response) => {
            if (Response.status === 200) {
              window.localStorage.setItem("token", Response.data.data.token);
              this.goToHomePage();
            } else {
              alert("login failed");
              this.goToSignIn();
            }
          })
          .catch((err) => {
            alert("login Failed");
          });
      } catch (error) {
        console.log(error);
      }
    },
    forgotPassword: function () {
      alert("Forgot password");
    },
  },
  computed: {},
  components: {
    Header,
  },
};
</script>

<style>
@import url("../assets/css/signIn.css");
</style>