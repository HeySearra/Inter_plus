import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import mavonEditor from 'mavon-editor'
import VueVideoPlayer from 'vue-video-player'

import NavBar from './components/header.vue'
import cib from './components/course_intro_block.vue'
import classCarousel from './components/classCarousel'
import classCardSp from './components/classCardSp'
import manage from "./components/manage.vue"
import lb from './components/list_block'

Vue.component('NavBar', NavBar)
Vue.component('cib', cib)
Vue.component('classCardSp', classCardSp)
Vue.component('classCarousel', classCarousel)
Vue.component('manage', manage)
Vue.component('lb', lb)

Vue.config.productionTip = false

Vue.use(Element);
Vue.use(vueSwiper);
Vue.use(mavonEditor);
Vue.use(VueVideoPlayer);

new Vue({
  router,
  render: h => h(App),
  component: {
    NavBar, cib, classCardSp, classCarousel, manage, lb
  }
}).$mount('#app')
