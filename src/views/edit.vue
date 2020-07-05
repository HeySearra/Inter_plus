<template>
  <el-row>
  <el-col :span="5"><div class="grid-content"></div></el-col>
  <el-col :span="14">
    <el-container>
  <el-header>
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="1">资料设置</el-menu-item>
   <el-menu-item index="2">账号设置</el-menu-item>
    <el-menu-item index="3">申请成为老师</el-menu-item>
</el-menu>
  </el-header>
  <el-main>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="头像" prop="jpg">
    <el-avatar size="large" :src="ruleForm.circleUrl"></el-avatar>
  </el-form-item>
  <el-form-item label="昵称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="真实姓名" prop="trueName">
    <el-input v-model="ruleForm.trueName"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="sex">
    <el-radio-group v-model="ruleForm.sex">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
      <el-radio label="其他"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="生日">
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="身份类型" prop="title">
    <el-radio-group v-model="ruleForm.title">
      <el-radio label="学生"></el-radio>
      <el-radio label="在职"></el-radio>
      <el-radio label="其他"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="个人简介" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">保存个人信息</el-button>
    <el-button @click="resetForm('ruleForm')">恢复个人信息</el-button>
  </el-form-item>
</el-form>
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>
    
  </el-col>
</el-row>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
         circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: '',
          region: '',
          trueName:"dsa",
          sex:"男",
          date1: '',
          title:"学生",
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '昵称不能为空', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          title:[
            { required: true, message: '身份类型不能为空', trigger: 'blur' },
          ],
          sex:[
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>