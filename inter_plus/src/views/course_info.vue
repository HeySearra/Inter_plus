<template>
<div>
  <el-container>
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-container class="mid">
      <el-container>
        <el-main>
          <cib></cib>
          <cib></cib>
          <cib></cib>
          <cib></cib>
          <cib></cib>
        </el-main>
      </el-container>
      <el-aside width="300px">
        <cib></cib>
        <cib></cib>
        <cib></cib>
      </el-aside>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</div>
</template>

<script>
import NavBar from '../components/header';
import cib from '../components/course_intro_block';
export default {
  name: 'course_info',
  components: {
    NavBar, cib
  },
  data () {
    return {
    }
  }
}
</script>


<style>
@import url("//unpkg.com/element-ui@2.13.1/lib/theme-chalk/index.css");
  
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