<template>
  <div class="header">
    <el-menu
      :default-active="active_index"
      mode="horizontal"
      router
      @select="handleSelect"
      background-color="#c0c8be"
      text-color="#494747"
      active-text-color="#917148"
    >
      <el-menu-item style="width: auto;">
        <el-button
          type="text"
          @click="toMainPage"
          style="font-size: xx-large; color:#494747;"
          >皓磊教育</el-button
        ></el-menu-item
      >
      <el-menu-item index="/index" style="font-size: large;">主页</el-menu-item>
      <el-menu-item index="allClass" style="font-size: large;"
        >课程</el-menu-item
      >
      <el-menu-item index="/allExercise" style="font-size: large;"
        >作业</el-menu-item
      >
      <el-menu-item index="/manage/uploadVideo" style="font-size: large;"
        >视频管理</el-menu-item
      >
      <div class="user">
        <el-dropdown
          @click.native="dialogVisible = true"
          @command="handleCommand"
        >
          <span class="el-dropdown-link">
            <el-avatar src="user_img"></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="User">个人主页</el-dropdown-item>
            <!--                  <el-dropdown-item>管理</el-dropdown-item>-->
            <el-dropdown-item command="WrongExercise">错题集</el-dropdown-item>
            <el-dropdown-item command="Edit">设置</el-dropdown-item>
            <el-dropdown-item command="LogOut" v-if="isLog">登出</el-dropdown-item>
            <el-dropdown-item command="login" v-else>登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="write"></div>
      <div class="search">
        <div>
          <el-input v-model="search" placeholder="请输入搜索内容" clearable @keyup.enter.native="toAllClass"></el-input>
        </div>
        <el-button type="primary" @click="toAllClass">搜索</el-button>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      search: "",//最后写
      active_index: this.$route.path,
      user_img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      isLog: false
    };
  },
  mounted(){
    this.init()
  },
  methods: {
    toAllClass(){
      if(this.search !== '')
        this.$router.push({name: 'allClass', query: {keywords: this.search}})
      else
        this.$router.push({name: 'allClass'})
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      //this.$message('click on item ' + command)
      if(command === 'LogOut'){
        this.$axios({url :'http://127.0.0.1:8000/user/login', method: 'GET'}).then(res => {
          if(res.status === 0){
            this.isLog = false
          } else{
            this.$message({message: '登出失败，稍后再试', type:'error'})
          }
        })
      }else{
        console.log(command)
      this.$router.push({ name: command });
      }
    },
    toMainPage() {
      this.$router.push({ name: "index" });
    },
    init(){
      this.getUserInfo()
    },
    getUserInfo(){
      this.$axios({
        url: "http://127.0.0.1:8000/user/user_info",
        method: "GET",
        params: {
          id: 0
        }
      }).then(res => {
        if(res.status === 200){
          this.user_img = res.data.img
          this.isLog = true
        }
        else{
          this.$message({
            message: '获取个人头像失败',
            type: 'error'
          })
        }
      }).catch(e =>{
        this.$message({
          message: e,
          type: 'error'
        })
      })
    }
  }
};
</script>

<style scoped>
.hearer {
  z-index: 1000;
}

.el-menu-item {
  width: 100px;
}

h1 {
  float: left;
  height: 61px;
  margin: 0;
  width: 150px;
  cursor: pointer;
}

.search {
  width: 350px;
  float: right;
}

.search > div {
  width: calc(80% - 40px);
  float: left;
}

.write {
  float: right;
}

.user {
  float: right;
  margin: 10px 35px 10px 20px;
  height: 40px;
  overflow: hidden;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  display: inline-block;
  width: 50px;
}

.el-dropdown-menu {
  text-align: center;
  width: 100px;
}

.header >>> .el-dialog {
  max-width: 600px;
  min-width: 450px;
  z-index: 9999;
}
</style>
