<template>
  <div id="layout">
    <Header />
    <AppMain />
    <Footer />
  </div>
</template>

<script>

import { AppMain, Header, Footer } from './components'

export default {
  name: "Layout",
  data() {
    return {
      result: {}
    };
  },
  components: {
    Header,
    Footer,
    AppMain
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#app-main {
  background-color: #f7f7f7;
  height: 100vh;
  overflow: auto;
}
</style>
