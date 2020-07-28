<template>
  <el-row>
    <el-col :span="5"><div class="grid-content"></div></el-col>
    <el-col :span="14" style="background:white">
      <el-container>
        <div> 
        <el-menu default-active="/user/edit" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/user/edit">资料设置</el-menu-item>
          <el-menu-item index="/user/editAccount">账号设置</el-menu-item>
          <el-menu-item index="/user/editTeacher">申请成为老师</el-menu-item>
        </el-menu>
      </div>
      <el-main>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="头像" prop="jpg">
            <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="ruleForm.circleUrl" :src="ruleForm.circleUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
              <el-radio label="其他"></el-radio>
            </el-radio-group>
          </el-form-item>
           <el-form-item label="学校" prop="school">
            <el-input v-model="ruleForm.school"></el-input>
          </el-form-item>
            <el-form-item label="专业" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择您的专业">
                 <el-option label="信息" value="信息"></el-option>\
                 <el-option label="生物" value="生物"></el-option>
              </el-select>
          </el-form-item>
            <el-form-item label="年级" prop="grade">
              <el-select v-model="ruleForm.grade" placeholder="请选择您的年级">
                 <el-option label="小学" value="小学"></el-option>
                 <el-option label="初中" value="初中"></el-option>
                 <el-option label="高中" value="高中"></el-option>
                 <el-option label="大学" value="大学"></el-option>
              </el-select>
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
   <el-col :span="5"><div class="grid-content"></div></el-col>
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
          sex:"男",
          school:"",
          grade:""
        },
        rules: {
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          school: [
            { required: true, message: '学校不能为空', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
           region: [
            { required: true, message: '请选择您的专业', trigger: 'change' }
          ],
          grade: [
            { required: true, message: '请选择您的年级', trigger: 'change' }
          ],
          sex:[
            { required: true, message: '请选择性别', trigger: 'change' }
          ]
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
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>