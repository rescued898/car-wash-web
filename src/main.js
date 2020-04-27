import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '80f9f688ce293588f41cb949a09c3b9f',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','Geocoder'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

//import '@/styles/index.scss'

//方式三. 导入所有组件
//import Vant from 'vant';
//import 'vant/lib/index.css';
//Vue.use(Vant);

//方式二. 手动按需引入组件
// import {
//   Button, Cell, CellGroup, Icon, Image, Col, Row, Popup,

//   Calendar, Checkbox, CheckboxGroup, DatetimePicker, Field, Form, NumberKeyboard, PasswordInput, Picker, RadioGroup, Radio, Rate, Search, Slider, Stepper, Switch, Uploader,
  
//   ActionSheet, Dialog, DropdownMenu, DropdownItem, Loading, Notify, Overlay, PullRefresh, SwipeCell, Toast,

//   Tabbar, TabbarItem
// } from 'vant'

// [
//   Button, Cell, CellGroup, Icon, Image, Col, Row, Popup,

//   Calendar, Checkbox, CheckboxGroup, DatetimePicker, Field, Form, NumberKeyboard, PasswordInput, Picker, RadioGroup, Radio, Rate, Search, Slider, Stepper, Switch, Uploader,

//   ActionSheet, Dialog, DropdownMenu, DropdownItem, Loading, Notify, Overlay, PullRefresh, SwipeCell, Toast,

//   Tabbar, TabbarItem
// ].forEach(e => {
//   Vue.use(e)
// })
//import 'vant/lib/button/style';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')