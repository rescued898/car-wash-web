import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import Vant from 'vant';
//import 'vant/lib/index.css';
//Vue.use(Vant);

import {
  Button,
  Cell,
  CellGroup,
  Icon,
  Image,
  Col,
  Row,
  Popup,

  Calendar,
  Checkbox,
  CheckboxGroup,
  DatetimePicker,
  Field,
  Form,
  NumberKeyboard,
  PasswordInput,
  Picker,
  RadioGroup,
  Radio,
  Rate,
  Search,
  Slider,
  Stepper,
  Switch,
  Uploader,

  ActionSheet,
  Dialog,
  DropdownMenu,
  DropdownItem,
  Loading,
  Notify,
  Overlay,
  PullRefresh,
  SwipeCell,
  Toast,

  Tabbar,
  TabbarItem
} from 'vant'

[
  Button, Cell, CellGroup, Icon, Image, Col, Row, Popup,

  Calendar, Checkbox, CheckboxGroup, DatetimePicker, Field, Form, NumberKeyboard, PasswordInput, Picker, RadioGroup, Radio, Rate, Search, Slider, Stepper, Switch, Uploader,

  ActionSheet, Dialog, DropdownMenu, DropdownItem, Loading, Notify, Overlay, PullRefresh, SwipeCell, Toast,

  Tabbar, TabbarItem
].forEach(e => {
  Vue.use(e)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')