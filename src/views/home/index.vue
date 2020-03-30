<template>
  <div class="home">
    <div>
      <CellGroup title="基础用法">
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" label="描述信息" />
      </CellGroup>
      <CellGroup title="单元格大小">
        <van-cell title="单元格" value="内容" size="large" />
        <van-cell title="单元格" value="内容" size="large" label="描述信息" />
      </CellGroup>
      <CellGroup title="单元格大小">
        <van-cell title="单元格" value="内容" size="large" />
        <van-cell title="单元格" value="内容" size="large" label="描述信息" />
      </CellGroup>
      <CellGroup title="展示图标">
        <van-cell title="单元格" icon="location-o" value="内容"/>
      </CellGroup>
      <CellGroup title="日期">
        <Cell title="选择单个日期" :value="date" @click="show = true" is-link />
      </CellGroup>
    </div>
    <footer>
      <div class="button">
        <Button type="default">默认按钮</Button>
        <Button type="primary">主要按钮</Button>
      </div>
    </footer>
    <Calendar v-model="show" @confirm="onConfirm" />
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, CellGroup, Cell, Calendar } from "vant";

export default {
  name: "Home",
  components: {
    Button,
    CellGroup,
    Cell,
    Calendar
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
