<template>
  <div class="home">
    <div>
      <van-cell-group title="基础用法">
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
      <van-cell-group title="单元格大小">
        <van-cell title="单元格" value="内容" size="large" />
        <van-cell title="单元格" value="内容" size="large" label="描述信息" />
      </van-cell-group>
      <van-cell-group title="单元格大小">
        <van-cell title="单元格" value="内容" size="large" />
        <van-cell title="单元格" value="内容" size="large" label="描述信息" />
      </van-cell-group>
      <van-cell-group title="展示图标">
        <van-cell title="单元格" icon="location-o" value="内容"/>
      </van-cell-group>
      <van-cell-group title="日期">
        <van-cell title="选择单个日期" :value="date" @click="show = true" is-link />
      </van-cell-group>
    </div>
    <footer>
      <div class="button">
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
      </div>
    </footer>
    <van-calendar v-model="show" @confirm="onConfirm" />
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, CellGroup, Cell, Calendar } from 'vant';

export default {
  name: 'Home',
  components: {
    "van-button": Button,
    "van-cell-group": CellGroup,
    "van-cell": Cell,
    "van-calendar": Calendar
  },
  data() {
    return {
      date: "",
      show: false
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    }
  }
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
