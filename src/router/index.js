/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/allClass",
    name: 'allClass',
    component: () =>
        import("../views/allClass.vue")
  },
  {
    path: "/video/:classId",//以课程的主键为参数。？
    name: 'classView',
    component: () =>
        import("../views/classView.vue")
  },
  {
    path:'/exercise/:classId/:level',
    name:'exercise',
    component: () =>
        import("../views/Exercise.vue")
  },
  {
    path:'/manage',
    name:'manage',
    component: () =>
        import('../components/Manage.vue')
  },
  {
    path:'/uploadVideo',
    name:'uploadVideo',
    component: ()=>
        import('../views/uploadVideo')
  },
  {
    path:'/uploadExe',
    name:'uploadExe',
    component: ()=>
        import('../views/uploadExe')
  },
  {
    path:'/manageVideo',
    name:'manageVideo',
    component: ()=>
        import('../views/manageVideo')
  },
  {
    path:'/manageExe',
    name:'manageExe',
    component: ()=>
        import('../views/manageExe')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
