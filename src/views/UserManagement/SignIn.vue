<template>
  <div class="containerCover">
    <div class="flux-container">
      <Header></Header>
      <div class="d-lg-none" style="height: 5vh"></div>
      <div class="d-none d-lg-block" style="height: 7vh"></div>
      <div class="loginCard">
        <div class="row">
          <div
            class="d-none d-lg-block col-lg-6 loginCover"
            style="padding: 0;"
          >
            <div class="backgroundFilter">
              <img src="../../assets/logo.png" alt="" />
              <h1 style="font-size:50px">AIO MART</h1>
              <h6 style="font-size:15px">
                Buy what you need, Sell what you desire.
              </h6>
            </div>
          </div>
          <!-- Login Screen in mobile view -->
          <div class="col-lg-6 d-lg-none outerLoginContent">
            <div class="loginTitle">
              <h1 class="d-none d-lg-block">Sign In</h1>
              <div class="d-lg-none">
                <img src="../../assets/logo.png" width="100px" alt="" />
              </div>
            </div>
            <div>
              <label for="email" class="inputlabel">EMAIL</label>
              <input
                id="email"
                type="text"
                class="form-control"
                placeholder="your Email"
                v-model="user.email"
              />
              <label for="password" class="inputlabel">PASSWORD</label>
              <input
                id="password"
                type="text"
                class="form-control"
                placeholder="Your Password"
                v-model="user.password"
              />
              <div class="button btn btn-success" v-on:click="login">
                Login
              </div>
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
                  <span v-on:click="goToForgotPassword">Forgot Password</span>
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
                v-model="user.email"
              />
              <label for="password" class="inputlabel">PASSWORD</label>
              <input
                id="password"
                type="password"
                class="form-control"
                placeholder="Your Password"
                v-model="user.password"
              />
              <div class="button btn btn-success" v-on:click="login">
                Login
              </div>
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
                  <span v-on:click="goToForgotPassword">Forgot Password</span>
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
import Header from "../../components/Header.vue";
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      user: {
        email: "",
        password: "",
      },
      result: "",
    };
  },
  methods: {
    ...mapActions(["userLogin"]),
    login() {
      this.userLogin(this.user);
    },
  },
  computed: {},
  components: {
    Header,
  },
};
</script>

<style scoped>
@import url("../../assets/css/signIn.css");
</style>
