<template>
  <div class="amap">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap
        class="amap-box"
        :vid="'amap-vue'"
        :zoom="zoom"
        :center="center"
      >
        <el-amap-marker
          v-for="(marker, index) in markers"
          :position="marker.position"
          :key="index"
        ></el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Amap',
  data() {
    return {
      msg: 'vue-amap向你问好！',
      zoom: 10,
      center: [121.5273285, 31.21515044],
      markers: [
        {
          position: [121.5273285, 31.21515044],
          events: {
            click: () => {
              alert('click marker');
            },
            dragend: (e) => {
              //console.log('---event---: dragend');
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            },
          },
          visible: true,
          draggable: false,
          template: '<span>1</span>',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.amap-wrapper {
  width: 100%;
  height: calc(100vh - 96px - 46px - 37.44px);
}
a {
  color: #42b983;
}
</style>
