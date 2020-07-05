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
        import('../views/manages/uploadVideo')
  },
  {
    path:'/uploadExe',
    name:'uploadExe',
    component: ()=>
        import('../views/manages/uploadExe')
  },
  {
    path:'/manageVideo',
    name:'manageVideo',
    component: ()=>
        import('../views/manages/manageVideo')
  },
  {
    path:'/manageExe',
    name:'manageExe',
    component: ()=>
        import('../views/manages/manageExe')
  },
  {
    path:'/uploadPrepare',
    name:'uploadPrepare',
    component: ()=>
        import('../views/manages/uploadPrepare')
  },
  {
    path:'/adminPrepare',
    name:'adminPrepare',
    component: ()=>
        import('../views/admin/adminPrepare')
  },
  {
    path:'/adminVideo',
    name:'adminVideo',
    component: ()=>
        import('../views/admin/adminVideo')
  },
  {
    path:'/adminExe',
    name:'adminExe',
    component: ()=>
        import('../views/admin/adminExe')
  },
  {
    path:'/adminManageVideo',
    name:'adminManageVideo',
    component: ()=>
        import('../views/admin/adminManageVideo')
  },
  {
    path:'/adminManageExe',
    name:'adminManageExe',
    component: ()=>
        import('../views/admin/adminManageExe')
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
