<template>
  <div>
    <Header></Header>
    <div>Home</div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  data: function () {
    return {
      counter: 0,
      startIndex: 1,
      endIndex: 9,
      jobs: [],
      items: [],
      searchTerm: "",
      rowCount: 0,
      timeout: null,
      debouncedInput: "",
    };
  },
  methods: {},
  computed: {},
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>
