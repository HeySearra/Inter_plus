<template>
  <div class="manage">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <el-menu-item-group>
        <el-menu-item index="/edit_user_info">
          <span slot="title">修改个人信息</span>
        </el-menu-item>
        <el-menu-item index="/edit_user_info">
          <span slot="title">修改帐号密码</span>
        </el-menu-item>
        <el-menu-item index="/edit_user_info">
          <span slot="title">已购买的课程</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group v-if="identity=='teacher'">
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
          <span slot="title">已上传的视频</span>
        </el-menu-item>
        <el-menu-item index="/manageExe">
          <span slot="title">已上传的习题</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group v-if="identity=='manager'">
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
    name: "manage",
    data(){
      return{
        activeIndex: this.$route.path,
        identity: 'teacher',
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
    padding: 0 !important;
  }
  .el-menu{
    width: 150px;
  }
</style>