<template>
  <div>
    <div class="flux-container">
      <div class="row" style="margin: 0; padding: 0">
        <div class="col-lg-5 coverBackground" style="margin: 0; padding: 0">
          <div class="backgroundFilter">
            <img src="../assets/logo.png" alt="" />
            <h1>Register Now</h1>
            <h6>Buy what you need, Sell what you desire.</h6>
          </div>
        </div>
        <div class="col-sm" style="margin: 50px 0 50px 0">
          <div class="row reg-container">
            <div class="col-lg-6">
              <div class="formContent">
                <label for="firstName" class="inputlabel">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                />
                <label for="lastName" class="inputlabel">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                />
                <label for="dob" class="inputlabel">Date of Birth</label>
                <input
                  id="dob"
                  type="text"
                  class="form-control"
                  placeholder="Your date of birth"
                />
                <label for="phoneNo" class="inputlabel">Mobile</label>
                <input
                  id="phoneNo"
                  type="text"
                  class="form-control"
                  placeholder="Your Mobile Number"
                />
                <label for="gender" class="inputlabel">Gender</label>
                <input
                  id="gender"
                  type="text"
                  class="form-control"
                  placeholder="Your gender"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="formContent">
                <label for="address" class="inputlabel">Address</label>
                <input
                  id="address"
                  type="text"
                  class="form-control"
                  placeholder="Your Address"
                />
                <label for="email" class="inputlabel">Email</label>
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  placeholder="Your Email"
                />
                <label for="password" class="inputlabel">Password</label>
                <input
                  id="password"
                  type="text"
                  class="form-control"
                  placeholder="Your Password"
                />
                <label for="confirmPassword" class="inputlabel"
                  >Confirm Password</label
                >
                <input
                  id="confirmPassword"
                  type="text"
                  class="form-control"
                  placeholder="Confirm the password"
                />
                <label for="lastName" class="inputlabel">User Role</label>
                <div class="form-check form-check-inline radioButtonContainer">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="role"
                    id="customer"
                    value="customer"
                    checked
                  />
                  <label class="form-check-label" for="customer"
                    >Customer</label
                  >
                </div>
                <div class="form-check form-check-inline radioButtonContainer">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="role"
                    id="seller"
                    value="seller"
                  />
                  <label class="form-check-label" for="seller">Seller</label>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="padding: 0; margin: 0; margin-top: 25px">
            <div>
              <div class="button btn btn-success" v-on:click="register">Register</div>
              <div class="button btn btn-danger" v-on:click="goToHome">Cancel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      firstName: "",
      lastName: "",
      dob: "",
      phoneNo: "",
      gender: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: ""
    };
  },
  methods: {
    register: function(){
      alert("registration successfull!");
    },
  },
  computed: {},
};
</script>

<style scoped>
.coverBackground {
  background-image: url("../assets/images/home-background.jpg");
  height: 100vh;
}
.backgroundFilter {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100%;
  color: white;
}

.backgroundFilter img {
  margin-left: 37.5%;
  margin-top: 40%;
}

.backgroundFilter h1,
h6 {
    font-size: 3rem;
  text-align: center;
}

.backgroundFilter h1 {
  top: 50%;
  left: 12.5%;
}
.backgroundFilter h6 {
    font-size: 1rem;
  top: 57%;
  left: 11%;
}
.reg-container {
  padding: 0;
  margin: 0;
}

.formContent {
  padding: 0 10% 0 10%;
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

.radioButtonContainer {
  margin-top: 20px;
  font-size: 16px;
  font-family: "Poppins";
}

.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-left: 6.5%;
  font-size: 16px;
  width: 40%;
}
</style>