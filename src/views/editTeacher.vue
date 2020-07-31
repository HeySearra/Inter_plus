<template>
  <el-row>
    <el-col :span="5"><div class="grid-content"></div></el-col>
    <el-col :span="14" style="background:white">
      <el-container>
        <div> 
        <el-menu default-active="/user/editTeacher" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/user/edit">资料设置</el-menu-item>
          <el-menu-item index="/user/editAccount">账号设置</el-menu-item>
          <el-menu-item index="/user/editTeacher">申请成为老师</el-menu-item>
        </el-menu>
      </div>
      <el-main>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="个人学位" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择您的学位">
      <el-option label="小学" value="1"></el-option>
      <el-option label="初中" value="2"></el-option>
      <el-option label="高中" value="3"></el-option>
      <el-option label="本科" value="4"></el-option>
      <el-option label="硕士" value="5"></el-option>
      <el-option label="博士" value="6"></el-option>
      <el-option label="博士后" value="7"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="毕业院校" prop="graduate_school">
    <el-input type="text" v-model="ruleForm.graduate_school"></el-input>
  </el-form-item>
   <el-form-item label="任教年级" prop="teach_grade">
     <span><el-select v-model="ruleForm.select"  placeholder="请选择任教年级段">
      <el-option label="小学" value="1"></el-option>
      <el-option label="初中" value="2"></el-option>
      <el-option label="高中" value="3"></el-option>
    </el-select></span>
     <span><el-select id="sel" v-model="ruleForm.teach_grade" @click.native="selectgrade()" placeholder="请选择活动区域" >
      <div v-for="(item, index) in grade" :key="index">
      <el-option :label="item.label" :value="item.value"></el-option>
      </div>
    </el-select></span>
  </el-form-item>
  <el-form-item label="申请理由" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="身份证照片" prop="fileList1">
     <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  limit="1"
  :file-list="ruleForm.fileList1"
  list-type="picture"
  :on-change="handleChange">
  <el-button size="small" type="primary">点击上传身份证照片</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  </el-form-item>
  <el-form-item label="学信网照片" prop="fileList2">
     <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  limit="1"
  :file-list="ruleForm.fileList2"
  list-type="picture"
  :on-change="handleChange">
  <el-button size="small" type="primary">点击上传学信网照片</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  </el-form-item>
  <el-form-item label="教师资格证照片" prop="fileList3">
     <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  limit="1"
  :file-list="ruleForm.fileList3"
  list-type="picture"
  :on-change="handleChange">
  <el-button size="small" type="primary">点击上传教师资格证照片</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交申请</el-button>
  </el-form-item>
</el-form>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-col>
   <el-col :span="5"><div class="grid-content"></div></el-col>
</el-row>
</template>
<script>
  export default {
    data() {
      return {
        grade:"",
        ruleForm: {
          select:"",
          teach_grade:"",
          region:"",
          desc: '',
          graduate_school:"",
           fileList1: [],
            fileList2: [],
             fileList3: []

        },
        rules: {
            region: [
            { required: true, message: '请选择您的学位', trigger: 'change' }
          ],
          teach_grade: [
            { required: true, message: '请选择您的学位', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写申请理由', trigger: 'blur' },
            { min: 20, max: 200, message: '长度在 20 到 200 个字符', trigger: 'blur' }
          ],
          graduate_school: [
            { required: true, message: '请填写最高学历毕业院校', trigger: 'blur' },
            { min: 20, max: 200, message: '长度在 0 到 100 个字符', trigger: 'blur' }
          ],
           fileList1: [
            { required: true, message: '请上传身份证照片', trigger: 'change' }
          ],
           fileList2: [
            { required: true, message: '请上传学信网照片', trigger: 'change' }
          ],
           fileList3: [
            { required: true, message: '请上传教师资格证照片', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             var that=this
          this.$axios({
            url:'http://127.0.0.1:8000/user/user_account',
            method:'POST',
             data: {
               id:"123",
               degree:parseInt(that.ruleForm.degree),
               graduate_school:that.ruleForm.graduate_school,
               teach_grade:parseInt(that.ruleForm.teach_grade),
               reason:that.ruleForm.reason,
               img_per:that.ruleForm.fileList1.url+that.ruleForm.fileList1.name,
               img_xue:that.ruleForm.fileList2.url+that.ruleForm.fileList2.name,
               img_tea:that.ruleForm.fileList3.url+that.ruleForm.fileList3.name,
               }
          }).then(res=>{
            if(res.status==200){
              if(res.data.status==0)
                alert('修改成功')
              else
                alert('未知错误')
            }
          })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      selectgrade(){
        if(this.ruleForm.select=="")
          alert("请先选择任教年级段")
        else{
          if(this.ruleForm.select=="1")
          this.grade=[{label:"一年级",value:"1"},{label:"二年级",value:"2"},{label:"三年级",value:"3"},{label:"四年级",value:"4"},{label:"五年级",value:"5"},{label:"六年级",value:"6"}]
          else if(this.ruleForm.select=="2")
          this.grade=[{label:"初一",value:"7"},{label:"初二",value:"8"},{label:"初三",value:"9"}]
          else
          this.grade=[{label:"高一",value:"10"},{label:"高二",value:"11"},{label:"高三",value:"12"}]
        }
      }
    }}
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