<template>
    <div style="margin:30px">
    <el-card class="box-card" shadow="hover" > 
        <div class="text item">
     <el-button type="primary" plain @click="toEdit">修改个人信息</el-button>
     <p>观看了N个视频</p>
     <p>已经收集了N个错题</p>
  </div>
    </el-card>
    </div>
</template>

<script>
  export default {
    name: "NavBar",
    data(){
      return{
        activeIndex: this.$route.path
      }
    },
    methods: {
           toEdit(){
          this.$router.push({path:"/user/edit"});
      }
    }
  }
</script>

<style scoped>

</style>