<template>
  <div class="Manage">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <el-menu-item-group>
        <template slot="title"><span style="margin-right: 15px; font-size: larger">教师</span></template>
        <el-menu-item index="/uploadPrepare">
          <span slot="title">提交备课申请</span>
        </el-menu-item>
        <el-menu-item index="/uploadVideo">
          <span slot="title">上传课程视频</span>
        </el-menu-item>
        <el-menu-item index="/uploadExe">
          <span slot="title">上传作业习题</span>
        </el-menu-item>
        <el-menu-item index="/manageVideo">
          <span slot="title">管理我的视频</span>
        </el-menu-item>
        <el-menu-item index="/manageExe">
          <span slot="title">管理我的习题</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title"><span style="margin-right: 15px; font-size: larger">管理员</span></template>
        <el-menu-item index="/adminPrepare">
          <span slot="title">审核备课文件</span>
        </el-menu-item>
        <el-menu-item index="/adminVideo">
          <span slot="title">审核课程视频</span>
        </el-menu-item>
        <el-menu-item index="/adminExe">
          <span slot="title">审核作业习题</span>
        </el-menu-item>
        <el-menu-item index="/adminManageVideo">
          <span slot="title">管理全部视频</span>
        </el-menu-item>
        <el-menu-item index="/adminManageExe">
          <span slot="title">管理全部习题</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: "Manage",
    data(){
      return{
        activeIndex: this.$route.path,
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(this.$route.path)
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-menu{
    width: 150px;
  }
</style>