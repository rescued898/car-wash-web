<template>
  <div id="footer">
    <Tabbar v-model="active" @change="onChange">
      <TabbarItem
        :icon="item.icon"
        :name="index"
        v-for="(item, index) in routerItem"
        :key="index"
      >
        {{ item.name }}
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { Tabbar, TabbarItem } from "vant";

export default {
  name: "Footer",
  components: {
    Tabbar,
    TabbarItem
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
      console.log("e", e);
      this.$router.replace({ path: e });
    }
  }
};
</script>

<style lang="scss">
#footer {
  margin-top: 50px;
}
</style>
