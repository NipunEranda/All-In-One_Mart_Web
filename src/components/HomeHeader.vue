<template>
  <div>
    <div class="filter">
      <nav class="navbar navbar-expand-lg navbar-light bg-color">
        <a class="navbar-brand" href="" v-on:click="goToHome"
          ><img
            src="../assets/logo.png"
            width="40px"
            height="40px"
            alt=""
            style="margin-right: 10px;top:0;margin-top:-5px"
          /><span style="font-size: 25px">AIO Mart</span></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href=""
                v-on:click="goToHome"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href=""
                v-on:click="goToAbout"
                >About Us</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href=""
                v-on:click="goToContact"
                >Contact Us</a
              >
            </li>
          </ul>
          <ul class="navbar-nav d-flex">
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href=""
                v-on:click="goToSignUp"
                >Sign Up</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href=""
                v-on:click="goToSignIn"
                >Sign In</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.bg-color {
  background-color: white;
  color: white;
}
.title-content {
  color: white;
}
.title-content .title {
  text-align: center;
}
.navbar-light .navbar-nav .nav-link {
  color: black;
}
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
</style>