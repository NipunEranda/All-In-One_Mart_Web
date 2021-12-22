<template>
  <div>
    <div class="flux-container">
      <div class="background">
        <div class="filter">
          <nav class="navbar navbar-expand-lg navbar-light bg-color">
            <a class="navbar-brand" href="#">AIO Mart</a>
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
                  <a class="nav-link active" aria-current="page" href="" v-on:click="goToHome"
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
                  <a class="nav-link" aria-current="page" href="" v-on:click="goToSignUp">Sign Up</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="" v-on:click="goToSignIn">Sign In</a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="title-content">
            <div class="title"><h1>All In One Mart</h1></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-color {
  background-color: white;
  color: white;
}
.background {
  background-image: url("../assets/images/home-background.jpg");
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
}
.background .filter {
  background-color: rgba(0, 0, 0, 0.5);
  height: 500px;
  overflow: auto;
}
.title-content {
  padding: 5% 10% 10% 10%;
  color: white;
}
.title-content .title {
  text-align: center;
}
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
</style>