<template>
  <div class="Manage">
    <el-col :span="4">
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
          <el-menu-item index="/manage/uploadPrepare">
            <span slot="title">提交备课申请</span>
          </el-menu-item>
          <el-menu-item index="/manage/uploadVideo">
            <span slot="title">上传课程视频</span>
          </el-menu-item>
          <el-menu-item index="/manage/uploadExe">
            <span slot="title">上传作业习题</span>
          </el-menu-item>
          <el-menu-item index="/manage/manageVideo">
            <span slot="title">管理我的视频</span>
          </el-menu-item>
          <el-menu-item index="/manage/manageExe">
            <span slot="title">管理我的习题</span>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title"><span style="margin-right: 15px; font-size: larger">管理员</span></template>
          <el-menu-item index="/manage/adminPrepare">
            <span slot="title">审核备课文件</span>
          </el-menu-item>
          <el-menu-item index="/manage/adminVideo">
            <span slot="title">审核课程视频</span>
          </el-menu-item>
          <el-menu-item index="/manage/adminExe">
            <span slot="title">审核作业习题</span>
          </el-menu-item>
          <el-menu-item index="/manage/adminManageVideo">
            <span slot="title">管理全部视频</span>
          </el-menu-item>
          <el-menu-item index="/manage/adminManageExe">
            <span slot="title">管理全部习题</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: "manage",
    data(){
      return{
        activeIndex: this.$route.path,
        identity: 'manager',
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
  .el-menu-item-group>>>.el-menu-item-group__title{
    padding: 5px 45px !important;
  }
  .el-menu{
    width: 150px;
  }
  .el-menu-item, .el-submenu__title {
    text-align: center;
  }
</style>