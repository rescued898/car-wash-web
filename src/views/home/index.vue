<template>
  <div class="home">
    <div>
      <van-row type="flex" justify="center" align="center">
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>
    </div>
    <Amap />
  </div>
</template>

<script>
// @ is an alias to /src
import { Row, Col } from 'vant';
import Amap from '@/components/Amap';

export default {
  name: 'Home',
  components: {
    // "van-button": Button,
    // "van-cell-group": CellGroup,
    // "van-cell": Cell,
    // "van-calendar": Calendar,
    'van-row': Row,
    'van-col': Col,
    Amap,
  },
  data() {
    return {
      date: '',
      show: false,
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

<style lang="scss">
// footer {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// .button {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
