<template>
  <div id="footer">
    <van-tabbar v-model="active"  placeholder  @change="onChange">
      <van-tabbar-item
        v-for="(item, index) in routerItem"
        :key="index"
        :icon="item.icon"
        :name="index"
      >
        <span>{{ item.name }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { Tabbar, TabbarItem } from 'vant';

export default {
  name: 'Tabbar',
  components: {
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem,
  },
  data() {
    return {
      active: 'Home',
      routerItem: {
        Home: {
          name: '首页',
          icon: 'wap-home-o',
          activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
        },
        About: {
          name: '活动',
          icon: 'gem-o',
          activeIcon: 'wap',
        },
        User: {
          name: '我的',
          icon: 'user-o',
          activeIcon: 'user',
        },
      },
    };
  },
  methods: {
    onChange: function (e) {
      this.$router.replace({ name: e });
    },
  },
};
</script>

<style lang="scss">
// #footer {
//   margin-top: 45px;
// }
</style>
