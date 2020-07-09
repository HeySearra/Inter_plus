<template>
<div>
  <el-container>
    <el-aside width="300px">
      <lb :title="'学科分类'" type="subject"></lb>
    </el-aside>
    <el-main>
      <class-carousel></class-carousel>
    <!-- <swiper v-if="slide.length > 1" ref="mySwiper" :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
          我是第{{item}}个轮播图
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div @click="prev" class="swiper-button-prev" slot="button-prev"></div>
      <div @click="next" class="swiper-button-next" slot="button-next"></div>
    </swiper> -->
    </el-main>
    <el-aside width="300px">
      <lb :title="'我的课程'" type="course"></lb>
    </el-aside>
  </el-container>
    <el-container type="flex" justify="space-around">
      <el-col :span="6"><lb :title="'我的课程'" type="course"></lb></el-col>
      <el-col :span="6"><lb :title="'我的课程'" type="course"></lb></el-col>
      <el-col :span="6"><lb :title="'我的课程'" type="course"></lb></el-col>
    </el-container>
</div>
</template>

<script>
var vm = null;
export default {
  name: 'index',
  created () {
    vm = this
  },
data() {
    return {
      slide: [1, 2, 3, 4, 5],
      //设置属性
      swiperOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev',
        },
        //自动轮播
        autoplay: {
          delay: 2000,
        },
        //开启鼠标滚轮控制Swiper切换
        mousewheel: {
          invert: true,
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    //this.swiper.slideTo(0, 1000, false)
  },
  methods: {
    prev() {
      this.swiper.slidePrev();
    },
    next() {
      this.swiper.slideNext()
    }
  }
}
</script>


<style>
@import url("//unpkg.com/element-ui@2.13.1/lib/theme-chalk/index.css");
  .swiper-slide {
  width: 100%;
  height: 500px;
  line-height:500px;
  font-size: 50px;
  text-align: center;
  background-color: rosybrown;
}
  .el-aside {
    color: #333;
    padding-top:50px;
    padding-bottom:30px;
  }
  
  .el-main {
    color: #333;
    padding-top:50px;
  }
  
  .mid {
    margin-bottom: 40px;
    width:1100px;
    margin:0 auto;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>