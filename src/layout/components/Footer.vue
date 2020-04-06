<template>
  <div id="footer">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item
        :icon="item.icon"
        :name="index"
        v-for="(item, index) in routerItem"
        :key="index"
      >
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { Tabbar, TabbarItem } from "vant";

export default {
  name: "Footer",
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem
  },
  data() {
    return {
      active: "home",
      routerItem: {
        home: {
          name: "首页",
          icon: "wap-home-o"
        },
        about: {
          name: "活动",
          icon: "gem-o"
        },
        user: {
          name: "我的",
          icon: "user-o"
        }
      }
    };
  },
  methods: {
    onChange: function(e) {
      this.$router.replace({ path: e });
    }
  }
};
</script>

<style lang="scss">
#footer {
  margin-top: 45px;
}
</style>
