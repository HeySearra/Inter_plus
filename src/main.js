import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Element from "element-ui";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import VueVideoPlayer from "vue-video-player";
import axios from "axios";
import qs from 'qs';

import NavBar from "./components/header.vue";
import cib from "./components/course_intro_block.vue";
import classCarousel from "./components/classCarousel";
import classCardSp from "./components/classCardSp";
import manage from "./components/manage.vue";
import lb from "./components/list_block";
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL='http://127.0.0.1:8000'
axios.defaults.headers={'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
Vue.prototype.qs = qs;

Vue.use(Element);
Vue.prototype.$axios = axios;

Vue.component("NavBar", NavBar);
Vue.component("cib", cib);
Vue.component("classCardSp", classCardSp);
Vue.component("classCarousel", classCarousel);
Vue.component("manage", manage);
Vue.component("lb", lb);

Vue.config.productionTip = false;

Vue.use(mavonEditor);
require("vue-video-player/node_modules/video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(VueVideoPlayer);

new Vue({
  router,
  render: h => h(App),
  component: {
    NavBar,
    cib,
    classCardSp,
    classCarousel,
    manage,
    lb
  }
}).$mount("#app");
