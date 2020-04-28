<template>
  <div class="home">
    <div>
      <van-grid :column-num="2" >
        <van-grid-item icon="scan" text="洗车" />
        <van-grid-item icon="gold-coin" text="充值" />
        <!-- <van-grid-item icon="scan" text="洗车" />
        <van-grid-item icon="gold-coin" text="充值" /> -->
      </van-grid>
    </div>
    <van-tabs v-model="active">
      <van-tab title="地图模式">
        <div class="amap">
          <Amap />
        </div>
      </van-tab>
      <van-tab title="列表模式">
        <div class="test">
          内容 2
        </div>
      </van-tab>
    </van-tabs>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import { Grid, GridItem } from 'vant';
import { Tab, Tabs } from 'vant';
// import { Col, Row } from 'vant';
import Amap from '@/components/Amap';

export default {
  name: 'Home',
  components: {
    'van-tab': Tab,
    'van-tabs': Tabs,
    'van-grid': Grid,
    'van-grid-item': GridItem,
    Amap,
  },
  data() {
    return {
      date: '',
      show: false,
      active: 0,
    };
  },
  methods: {
    // formatDate(date) {
    //   return `${date.getMonth() + 1}/${date.getDate()}`;
    // },
    // onConfirm(date) {
    //   this.show = false;
    //   this.date = this.formatDate(date);
    // },
    // goToPackage(){
    //   return this.$router.push({name: 'Package'})
    // }
  },
};
</script>

<style lang="scss" scoped>


</style>
