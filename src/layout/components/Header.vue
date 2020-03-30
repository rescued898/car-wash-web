<template>
  <div id="header">
    <NavBar class="navbar"
      title="nihao"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed 
      border 
    >
    <template #right>
        <van-icon name="search"/> 
    </template>
    </NavBar>
  </div>
</template>

<script>
// @ is an alias to /src
import { NavBar, Toast } from "vant";

export default {
  name: "Header",
  components: {
    NavBar
  },
  data() {
    return {
     leftArrow: true
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
};
</script>

<style lang="scss">
#header {
    margin-bottom: 45.6px;
    color: white;
}



</style>
