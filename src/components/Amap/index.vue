<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import carIcon from '@/assets/logo.png';

export default {
  name: 'Amap',
  data() {
    return {
      map: null,
      localPosition: null,
    };
  },
  mounted() {
    this.initAMap();
  },
  methods: {
    initAMap() {
      AMapLoader.load({
        key: '80f9f688ce293588f41cb949a09c3b9f', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Geolocation'], //插件列表
      })
        .then((AMap) => {
          this.map = new AMap.Map('container', {
            zoom: 12,
          });
          // 创建 AMap.Icon 实例：
          let icon = new AMap.Icon({
            size: new AMap.Size(200, 200), // 图标尺寸
            image: carIcon, // Icon的图像
            // imageOffset: new AMap.Pixel(0, -60), // 图像相对展示区域的偏移量，适于雪碧图等
            imageSize: new AMap.Size(30, 30), // 根据所设置的大小拉伸或压缩图片
          });
          let marker = new AMap.Marker({
            position: new AMap.LngLat(119.267073, 26.071018), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            // title: '北京',
            icon: icon, // 添加 Icon 图标 URL
          });
          
          this.map.add(marker);
          let geolocation = new AMap.Geolocation({
            showMarker: true,
            enableHighAccuracy: true,
            zoomToAccuracy: true,
          });
          let _this = this;
          geolocation.getCurrentPosition(function(status, result) {
            if (status == 'complete') {
              _this.onComplete(result);
            } else {
              _this.onError(result);
            }
          });
          this.map.addControl(geolocation);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    onComplete(data) {
      console.log('onComplete -> data', data);
      this.localPosition = {
        lat: data['position']['lat'],
        lng: data['position']['lng'],
      };
      // data是具体的定位信息
    },
    onError(data) {
      console.log('onError -> data', data);
      // 定位出错
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#container {
  width: 100vw;
  height: calc(100vh - 178px);
}
</style>
