<template>
  <div id="header">
    <van-navbar
      class="navbar"
      fixed
      border
      :title="title"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
    >
    </van-navbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { NavBar } from 'vant';

export default {
  name: 'NavBar',
  components: {
    'van-navbar': NavBar,
  },
  props: {},
  data() {
    return {
      //leftArrow: true,
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
    leftArrow() {
      if (
        this.$route.meta.isTop != undefined &&
        this.$route.meta.isTop == true
      ) {
        return false;
      }
      return true;
    },
  },
  methods: {
    onClickLeft() {
      history.back(-1);
    },
  },
};
</script>

<style lang="scss">
#header {
  margin-bottom: 46px;
  color: white;
}
</style>
