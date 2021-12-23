<template>
  <div>
    <div class="flux-container">
      <Header></Header>
      <div class="row" style="margin: 0; padding: 2% 5% 2% 5%">
        <div class="col-lg-5 coverBackground" style="margin: 0; padding: 0">
          <div class="backgroundFilter">
            <img src="../assets/logo.png" alt="" />
            <h1>Register Now</h1>
            <h6>Buy what you need, Sell what you desire.</h6>
          </div>
        </div>
        <div
          class="col-sm"
          style="padding: 4%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3)"
        >
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
              <div class="button btn btn-success" v-on:click="register">
                Register
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/HomeHeader.vue";
export default {
  data: function() {
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
      role: "",
    };
  },
  methods: {
    register: function() {
      alert("registration successfull!");
    },
  },
  computed: {},
  components: {
    Header,
  },
};
</script>

<style scoped>
@import url("../assets/css/signUp.css");
</style>
