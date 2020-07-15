<template>
  <div>
      <el-container>
  <el-aside width="200px">
       <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose">
      <el-submenu index="1">
          <template slot="title">
          <span>算法</span>
        </template>
        <el-menu-item index="1-4-1">第一章</el-menu-item>
        <el-menu-item index="1-4-1">第二章</el-menu-item>
      </el-submenu>
       <el-submenu index="2">
          <template slot="title">
          <span>数据库</span>
        </template>
        <el-menu-item index="1-4-1">第一章</el-menu-item>
        <el-menu-item index="1-4-1">第二章</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-main>
 <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="a">黄金糕</el-dropdown-item>
    <el-dropdown-item command="b">狮子头</el-dropdown-item>
    <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
    <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      <all-exercise></all-exercise>
  </el-main>
</el-container>
  </div>
</template>
<script>
import allExercise from '../components/exercise.vue'
export default {
   components: {
      allExercise
  },
   methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
};
</script>
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>