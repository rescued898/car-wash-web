<template>
  <div id="app-main">
      <keep-alive>
        <router-view :key="key"></router-view>
      </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'AppMain',
  data() {
    return {
      result: {}
    };
  },
  components: {
    
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">

#app-main {
  background-color: #F7F7F7;
  height: calc(100vh - 50px);
  overflow: auto;
}

</style>
