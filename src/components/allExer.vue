<template>
  <div>
<el-collapse v-model="activeName" accordion> 
  <el-collapse-item title="算法" name="1">
       <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose"  router>
      <el-submenu index="1">
          <template slot="title">
          <span>第一章</span>
        </template>
        <el-menu-item index="/allExercise/12/12/12/0">第一节</el-menu-item>
        <el-menu-item index="/allExercise/12/12/12/1">第二节</el-menu-item>
      </el-submenu>
       </el-menu>
      </el-collapse-item>
      <el-collapse-item title="数据库" name="2">
         <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose"  router>
        <el-submenu index="1">
          <template slot="title">
          <span>第一章</span>
        </template>
        <el-menu-item index="/allExercise/12/12/12/0">第一节</el-menu-item>
        <el-menu-item index="/allExercise/12/12/12/0">第二节</el-menu-item>
      </el-submenu>
      </el-menu>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
let text = "初始化赋值123"
export default {
  data(){
    return{
      txt_name:""
    }
  },
  created:function(){
    this.txt_name = text;
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