<template>
  <div class="outer-container">
    <HomeHeader></HomeHeader>
    <div>
      <div class="background"></div>
      <div class="content">
        <div class="container-fluid" style="padding: 2%">
          <div class="topic">Why use All In One Mart</div>
          <div class="row" style="margin-top: 2%">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card-small"></div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card-small"></div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card-small"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import HomeFooter from "../components/HomeFooter.vue";
export default {
  components: {
    HomeHeader,
    HomeFooter,
  },
};
</script>

<style scoped>
.background {
  background-image: url("../assets/images/home-background.jpg");
  height: 50vh;
}
.outer-container {
  background-color: white;
}

.topic {
  width: 100%;
  text-align: center;
}

.content {
  background-color: white;
  padding: 0 0 2% 0;
  display: flex;
  margin: auto;
  margin-top: -50px;
  margin-bottom: 50px;
  width: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.container-fluid {
  padding-top: 5%;
}

.card-small {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 400px;
  width: 80%;
  display: flex;
  margin: auto;
  margin-bottom: 12.5%;
}

.card-large {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 400px;
  display: flex;
  margin: auto;
}

@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
</style>