import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false

Vue.use(Element);
Vue.use(vueSwiper);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
