<template>
  <div class="header">
      <el-menu
      :default-active="active_index"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <h1><a>家教</a></h1>
      <el-menu-item index="1" @click="$router.push({path:'/index'});renew_active()">主页</el-menu-item>
      <el-menu-item index="2" @click="$router.push({path:'/allClass'});renew_active()">课程</el-menu-item>
      <el-menu-item index="3" @click="$router.push({path:'/exercise'});renew_active()">作业</el-menu-item>
      <el-menu-item index="4">视频管理</el-menu-item>
      <div class="user">
          <el-dropdown @click.native="dialogVisible = true">
              <span class="el-dropdown-link">
                  <el-avatar icon="el-icon-user-solid"></el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人主页</el-dropdown-item>
                  <el-dropdown-item>管理</el-dropdown-item>
                  <el-dropdown-item>错题集</el-dropdown-item>
                  <el-dropdown-item>设置</el-dropdown-item>
                  <el-dropdown-item>登出</el-dropdown-item>
              </el-dropdown-menu>
              </el-dropdown>
      </div>
      <div class="write">
      </div>
      <div class="search">
          <div>
              <el-input v-model="search" placeholder="请输入搜索内容"></el-input>
          </div>
          <el-button type="primary">搜索</el-button>
      </div>
      </el-menu>
  </div>
</template>

<script>
  export default {
    name:'NavBar',
    data() {
      return {
        search: '',
        active_index: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.hearer{
  z-index: 1000;
}

.el-menu-item{
    width:100px;
}

h1{
    float:left;
    height:61px;
    margin:0;
    width:150px;
    cursor: pointer;
}

.search{
    width:350px;
    float: right;
}

.search>div{
    width:calc(80% - 40px);
    float: left;
}

.write{
  float: right;
}

.user{
    float:right;
    margin: 10px 35px 10px 20px;
    height:40px;
    overflow: hidden;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    display: inline-block;
    width:50px;
  }

.el-dropdown-menu{
    text-align: center;
    width:100px;
}

.header>>>.el-dialog{
    max-width:600px;
    min-width:450px;
    z-index: 9999;
}
</style>