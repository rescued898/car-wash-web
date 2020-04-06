<template>
  <div id="header">
    <van-navbar class="navbar"
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
    </van-navbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { NavBar, Toast, Icon } from 'vant';

export default {
  name: 'Header',
  components: {
    'van-navbar': NavBar,
    //Toast,
    'van-icon': Icon
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
    margin-bottom: 35px;
    color: white;
}


</style>
