<template>
  <div>
    home
  </div>
</template>

<script>
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
  methods: {
    
  },
  computed: {
    
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>
