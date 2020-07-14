<template>
  <div class="classCarousel">
    <el-carousel trigger="click">
      <el-carousel-item v-for="item in 4" :key="item">
        <el-button type="text" @click="toClass(item)"><h3 class="small">精品课展示，与主页的相同，或者可以去掉</h3></el-button>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

  export default {
    name: "classCarousel",
    methods:{
      toClass(){
        this.$router.push({name:'classView', params:{classId:1}})
      }
    }
  }
</script>

<style scoped>
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(n) {
    background-color: #c0c8be;
    height: 350px;
    text-align: center;
  }

  .el-carousel{
    margin-top: 30px;
    margin-left: 100px;
    margin-right: 100px;
    height: 350px;
    border-radius: 14px;
  }
</style>