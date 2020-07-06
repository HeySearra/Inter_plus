
<template>
  <div class="allClass">
    <class-carousel></class-carousel>
    <el-container direction="horizontal">
      <el-main>
        课程列表
        <div v-for="item in 7" :key="item" style="margin-bottom: 10px;">
          <class-card-sp :class-card="classCard"></class-card-sp>
        </div>
      </el-main>
      <el-aside>
        课程分类
        <div v-for="(item, index) in classCategory" :key="index">{{item}}</div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
  //课程日期和参加人数不见了，html调试element当中没有找到。
  import classCarousel from "../components/classCarousel";//首页的走马灯，可以删除，可以替换成大图片
  import classCardSp from "../components/classCardSp";
  export default {
    name: "allClass",
    data(){
      return {
        classCard:{
          classDate: '2019-07-03',
          className:'语文',
          teacherName:'李廷',
          classIcon: 'http://img0.imgtn.bdimg.com/it/u=3318420653,2672036615&fm=26&gp=0.jpg',
          classIntro:'名师开设语文课！',
          stuNum: 20,
          classId: '1'
        },
        classCategory:[
                '语文','数学','英语','美术','音乐'
        ]
      }
    },
    components:{
      classCarousel,
      classCardSp
    }
  }
</script>

<style scoped>
  .el-aside {
    background-color: whitesmoke;
    color: #333333;
    border: 1px solid #c0c8be;
    border-radius: 14px;
    text-align: center;
    line-height: 50px;
    margin-right: 100px;
    margin-left: 50px;
    margin-top: 60px;
  }

  .el-main {
    background-color: whitesmoke;
    color: #333;
    border: 1px solid #c0c8be;
    border-radius: 14px;
    text-align: center;
    line-height: 50px;
    margin-left: 100px;
    margin-top: 60px;
  }
</style>