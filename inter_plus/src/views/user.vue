<template>
  <div>
      <el-row style="margin-top: 70px;position:relative;height:200px;background:#409eff">
        	<el-col :span="17">    	
				<div id="info">
						<div style="width: 25% ;height:80%;">
							<div  style="position:absolute;left:10%;top:70px;width: 100px;height:100px;border-radius:100px;-webkit-border-radius:100px; -moz-border-radius:100px;overflow: hidden" >
							    <img src="C:\Users\鸡蛋酱\IdeaProjects\untitled\myweb\src\jpg\book2.jpg" alt="头像" style="width:100px;height: 100px; display: block; ; border-radius:100px;">
							</div>
						</div>
						<div style="position:absolute;left:40%;top:20px;">
							<h4 class="lead">{{ name }}</h4>
						</div>
				</div>
			</el-col>
		</el-row>
<el-row>
<el-row>
  <el-col :span="17">
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><a href="http://localhost:8080/user" target="_blank">我的课程</a></el-menu-item>
  <el-menu-item index="2"><a href="http://localhost:8080/user/WrongExercise" target="_blank">我的错题本</a></el-menu-item>
 </el-menu>
      <el-row :gutter="20" >
 <el-col :span="4" v-for="(o, index) in myclass" :key="o" :offset="index > 0 ? 0 : 0">
    <el-card :body-style="{ padding:'10px'}">
      <a :href="o.href"><img :src="o.jpg" class="image"></a>
      <div style="padding: 14px;">
        <a :href="o.href" style="color:black">{{o.name}}</a>
        <div class="bottom clearfix">
          <time class="time">于{{ o.date }} 加入学习</time>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </el-col>
  <el-col :span="6">
    <el-card class="box-card" shadow="hover"> 
  <div class="text item">
     <el-button type="primary" plain>修改个人信息</el-button>
     <p>观看了N个视频</p>
     <p>已经收集了N个错题</p>
  </div>
</el-card>

  </el-col>
</el-row>

  </div>
</template>
<script>
  export default {
     name: "User",

    data() {
      return {
          myclass:[
          {jpg:"",name:"课程名称",href:"",date:"2020/7/2"},
          {jpg:"",name:"课程名称",href:"",date:"2020/7/2"},
          {jpg:"",name:"课程名称",href:"",date:"2020/7/2"},{jpg:"",name:"课程名称",href:"",date:"2020/7/2"},
          {jpg:"",name:"课程名称",href:"",date:"2020/7/2"},
          {jpg:"",name:"课程名称",href:"",date:"2020/7/2"},
          {jpg:"",name:"课程名称",href:"",date:"2020/7/2"},
          {jpg:"",name:"课程名称",href:"",date:"2020/7/2"},
          {jpg:"",name:"课程名称",href:"",date:"2020/7/2"},
          ],
          jpg:"C:/Users/鸡蛋酱/IdeaProjects/untitled/myweb/src/jpg/book2.jpg",
          name:"Gua"
      }
    }
  };
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .el-col {
    border-radius: 4px;
  }
 
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>