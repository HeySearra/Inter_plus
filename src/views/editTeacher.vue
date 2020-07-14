<template>
  <el-row>
  <el-col :span="5"><div class="grid-content"></div></el-col>
  <el-col :span="14">
    <el-container>
  <el-header>
    <el-menu default-active="/user/editTeacher" class="el-menu-demo" mode="horizontal" router>
  <el-menu-item index="/user/edit">资料设置</el-menu-item>
   <el-menu-item index="/user/editAccount">账号设置</el-menu-item>
    <el-menu-item index="/user/editTeacher">申请成为老师</el-menu-item>
</el-menu>
  </el-header>
  <el-main>
      
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="个人学位" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择您的学位">
      <el-option label="本科" value="本科"></el-option>
      <el-option label="研究生" value="研究生"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="申请理由" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="身份证照片" prop="desc">
     <el-link type="primary">上传身份证照片</el-link>
  </el-form-item>
  <el-form-item label="学信网照片" prop="desc">
     <el-link type="primary">上传学信网照片</el-link>
  </el-form-item>
  <el-form-item label="教师资格证照片" prop="desc">
     <el-link type="primary">上传身教师资格证照片</el-link>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交申请</el-button>
  </el-form-item>
</el-form>
  </el-main>
</el-container>
    
  </el-col>
</el-row>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          region:"",
          desc: ''
        },
        rules: {
            region: [
            { required: true, message: '请选择您的学位', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写申请理由', trigger: 'blur' },
            { min: 20, max: 200, message: '长度在 20 到 200 个字符', trigger: 'blur' }
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
  export function checkPhoneNumber(rule, value, callback) {
  const reg = /^1[3|4|5|6|7|8|9]\d{9}$/;
  if (!value) {
    return callback(new Error('请填写手机号码！'))
  } else if (!reg.test(value)) {
    return callback(new Error('请填写正确的手机号码！'))
  }else{
    callback()
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