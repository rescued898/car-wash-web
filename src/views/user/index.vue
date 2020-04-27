<template>
  <div class="user">
    <div>
      <van-cell-group title="个人中心">
        <van-cell title="手机号" is-link :value="mobile" />
        <van-cell title="车辆管理" is-link />
        <van-cell title="收货地址" is-link />
        <van-cell title="账户余额" is-link :value="`${amount}元`" />
        <van-cell title="自助洗车券" is-link :value="`${coupon}张`" />
      </van-cell-group>
      <van-cell-group title="记录">
        <van-cell title="充值记录" value="内容" is-link />
        <van-cell title="消费记录" value="内容" is-link />
      </van-cell-group>
      <van-cell-group title="其他">
        <van-cell title="扫描二维码" is-link />
        <van-cell title="电子兑换码" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { CellGroup, Cell } from 'vant';

export default {
  name: 'User',
  components: {
    'van-cell-group': CellGroup,
    'van-cell': Cell,
  },
  data() {
    return {
      date: '',
      show: false,
      mobile: 15659565565,
      coupon: 12,
      amount: 200,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>

<style lang="scss">
footer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.button {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
