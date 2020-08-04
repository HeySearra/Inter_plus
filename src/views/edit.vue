<template>
  <el-row>
    <el-col :span="5"><div class="grid-content"></div></el-col>
    <el-col :span="14" style="background:white">
      <el-container>
        <div>
          <el-menu
            default-active="/user/edit"
            class="el-menu-demo"
            mode="horizontal"
            router
          >
            <el-menu-item index="/user/edit">资料设置</el-menu-item>
            <el-menu-item index="/user/editAccount">账号设置</el-menu-item>
            <el-menu-item index="/user/editTeacher">申请成为老师</el-menu-item>
          </el-menu>
        </div>
        <el-main>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="头像" prop="jpg">
               <el-upload
  class="upload-demo"
   :action="upload_url"
  :on-preview="handlePreview"
  :on-remove="handleRemove" 
  :http-request="uploadSectionFile"
  :file-list="ruleForm.jpg"
    :on-exceed="handleExceed"
  limit="3"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
              <el-button type="primary" @click="submitForm('ruleForm')"
                >保存个人信息</el-button
              >
              <el-button @click="resetForm('ruleForm')">恢复个人信息</el-button>
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
      upload_url: 'http://127.0.0.1:8000/upload/pic',
      ruleForm: {
        upload_name: '',//图片或视频名称
        ad_url: '',//上传后的图片或视频URL
         jpg: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}] , 
        name: "",
        region: "",
        sex: "男",
        school: "",
        grade: ""
      },
      rules: {
        name: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
          { min: 0, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        school: [
          { required: true, message: "学校不能为空", trigger: "blur" },
          { min: 0, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择您的专业", trigger: "change" }
        ],
        grade: [
          { required: true, message: "请选择您的年级", trigger: "change" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        jpg: [{ required: true, message: "请上传头像", trigger: "change" }]
      }
    };
  },
  
  mounted(){
    var that=this
    this.$axios({
      url:"http://127.0.0.1:8000/user/user_info",
      method:"get",
      params:{
        id:'123'
        }
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            that.ruleForm.jpg=res.data.img;
            that.ruleForm.name=res.data.name
            that.ruleForm.region=res.data.major
            that.ruleForm.sex=res.data.sex
            that.ruleForm.school=res.data.school
            that.ruleForm.grade=res.data.grade
            }
            })
            },
  methods: {
    handleExceed: function () {
        this.$alert('请先删除选择的图片或视频，再上传', '提示', {
            type: 'warning'
        });
    },
    submitForm(formName) {  
      this.$refs[formName].validate(valid => { 
            alert(this.ruleForm.jpg[0].name)   
            alert(this.ruleForm.jpg[1].name)
            alert(this.ruleForm.jpg[2])       
        if (valid) {
          var that=this
          this.$axios({
            url:'http://127.0.0.1:8000/user/user_info',
            method:'POST',
             data: {
               img:that.ruleForm.jpg.url+that.ruleForm.jpg.name,
               id:"123",
               name:that.ruleForm.name,
               sex:that.ruleForm.sex,
               school:that.ruleForm.school,
               major:that.ruleForm.region,
               grade:that.ruleForm.grade
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
          console.log("error submit!!");
          return false;
        }
      });
    },
       resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    // 上传成功回调
  //  handleAvatarSuccess(res, file) {
  //    alert(this.ruleForm.jpg.length) 
   //   this.ruleForm.jpg=file
    //  this.ruleForm.jpg.push( res.data.url) 
//    },
    // 上传前格式和图片大小限制
 
   }}
  
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
  border-color: #409eff;
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
