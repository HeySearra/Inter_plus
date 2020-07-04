<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/allClass">课程</el-menu-item>
      <el-menu-item index="/uploadVideo">课程视频管理</el-menu-item>
    </el-menu>
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>