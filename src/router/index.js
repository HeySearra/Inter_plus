import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/exercise",
    name: "Exercise",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/exercise.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user.vue")
  },
  {
    path: "/user/wrongExercise",
    name: "WrongExercise",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/myWrongExercise.vue")
  },
  {
    path: "/user/edit",
    name: "Edit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/edit.vue")
  },
  {
    path: "/user/dedit",
    name: "DirectorEdit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/directorEdit.vue")
  },
  {
    path: "/user/editZhangHao",
    name: "EditZhangHao",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/editZhanghao.vue")
  },
  {
    path: "/user/editTeacher",
    name: "EditTeacher",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/editTeacher.vue")
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
