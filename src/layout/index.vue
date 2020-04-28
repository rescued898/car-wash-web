<template>
  <div id="layout">
    <!-- <Navbar /> -->
    <AppMain />
    <Tabbar />
  </div>
</template>

<script>

import { AppMain, Tabbar } from './components'

export default {
  name: "Layout",
  data() {
    return {
      
    };
  },
  components: {
    // Navbar,
    Tabbar,
    AppMain
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#layout {
  background-color: #f7f7f7;
  height: 100vh;
  overflow: hidden;
}
</style>
