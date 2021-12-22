<template>
  <div class="containerCover">
    <div class="flux-container">
      <Header></Header>
      <div class="d-lg-none" style="height: 5vh"></div>
      <div class="loginCard">
        <div class="row">
          <div class="d-none d-lg-block col-lg-6 loginCover">
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
              <div class="button btn btn-danger" v-on:click="goToHome">
                Back To Home
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
                type="text"
                class="form-control"
                placeholder="Your Password"
              />
              <div class="button btn btn-success" v-on:click="login">Login</div>
              <div class="button btn btn-danger" v-on:click="goToHome">
                Back To Home
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
export default {
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      alert("Login successfull!");
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

<style scoped>
.loginCard {
  margin: auto;
  margin-top: 50px;
  width: 70%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 25px;
}
.loginCover {
  background-image: url("../assets/images/home-background.jpg");
  background-size: cover;
  padding: 0;
  border-radius: 25px 0 0 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}
.outerLoginContent {
  background-color: white;
  padding: 5%;
  border-radius: 25px 25px 25px 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}

.loginContent {
  background-color: white;
  padding: 5%;
  border-radius: 0px 25px 25px 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}

.backgroundFilter {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  color: white;
  border-radius: 25px 0 0 25px;
  padding-top: 20%;
}
.backgroundFilter img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.loginTitle img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.backgroundFilter h1,
h6 {
  text-align: center;
}

.loginTitle {
  margin-bottom: 25px;
}

input[type="text"] {
  box-sizing: border-box;
  border: 1 px solid #ebebeb;
  padding: 14 px 20 px;
  border-radius: 5 px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5 px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  font-size: 14px;
  margin-bottom: 30px;
  height: 5vh;
}

.inputlabel,
input[type="text"] {
  font-weight: bold;
  margin-top: 10px;
  font-family: "Poppins";
  display: block;
  width: 100%;
}

input[type="text"],
select,
textarea {
  outline: none;
  appearance: unset !important;
  -moz-appearance: unset !important;
  -webkit-appearance: unset !important;
  -o-appearance: unset !important;
  -ms-appearance: unset !important;
}

input.error {
  border: 1px solid #c70000;
}
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
}

.credentialsContent {
  margin-top: 20px;
}

.credentialsContent #rememberMe {
  text-align: left;
}

.credentialsContent #forgotPassword {
  text-align: right;
}

.signUpLink {
  margin-top: 20px;
  text-align: center;
}

#forgotPassword:hover {
  cursor: pointer;
}

#signUp:hover {
  cursor: pointer;
}
</style>