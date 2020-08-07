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
                <el-radio label="1" value="1"><span>男</span></el-radio>
                <el-radio label="2" value="2"><span>女</span></el-radio>
                <el-radio label="0" value="0"><span>未知</span></el-radio>
              </el-radio-group>
            </el-form-item>
                   <el-form-item label="生日" prop="date">
      <el-date-picker  type="date" placeholder="选择日期"   value-format="yyyy-MM-dd"  v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
  </el-form-item>
            <el-form-item label="学校" prop="school">
              <el-input v-model="ruleForm.school"></el-input>
            </el-form-item>
            <el-form-item label="专业" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择您的专业">
                <el-option label="信息" value="信息"></el-option>
                <el-option label="生物" value="生物"></el-option>
              </el-select>
            </el-form-item>
              <el-form-item label="年级" required>
    <el-col :span="11">
      <el-form-item >
               <el-select v-model="ruleForm.grade_select" placeholder="请选择您的年级段" @change="select">
                <el-option label="小学" value="小学" ></el-option>
                <el-option label="初中" value="初中"></el-option>
                <el-option label="高中" value="高中"></el-option>
              </el-select>
        </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="grade">
            <el-select v-model="ruleForm.grade" placeholder="请选择您的年级" > 
            <el-option :label="item.value" :value="item.value" v-for="(item,ind) in grade" :key="ind">{{item.name}}</el-option>
          </el-select>
      </el-form-item>
    </el-col>
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
      upload_url: 'upload/pic',
      grade:[{name:"一年级",value:1},{name:"二年级",value:2},{name:"三年级",value:3},{name:"四年级",value:4},{name:"五年级",value:5},{name:"六年级",value:6},],
      ruleForm: {
        upload_name: '',//图片或视频名称
        ad_url: '',//上传后的图片或视频URL
         jpg: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}] , 
        name: "",
        region: "",
        sex: "1",   
        school: "",
        grade: "", 
        date:"",
        grade_select:""
      },
      rules: {
        name: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
          { min: 0, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
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
      url:"user/user_info",
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
            that.ruleForm.sex=res.data.sex.toString()
            that.ruleForm.school=res.data.school 
            that.ruleForm.date=res.data.birthday
            }
            })
            },
  methods: {
     select(grade){ 
      if(grade=="小学")
      this.grade=[{name:"一年级",value:1},{name:"二年级",value:2},{name:"三年级",value:3},{name:"四年级",value:4},{name:"五年级",value:5},{name:"六年级",value:6},]
      else if(grade=="初中")
      this.grade=[{name:"初一",value:7},{name:"初二",value:8},{name:"初三",value:9},]
      else if(grade=="高中")
      this.grade=[{name:"高一",value:10},{name:"高二",value:11},{name:"高三",value:12},]
    }
    ,  
    handleExceed: function () {
        this.$alert('请先删除选择的图片或视频，再上传', '提示', {
            type: 'warning'
        });
    },
    submitForm(formName) {  
      this.$refs[formName].validate(valid => {         
        if (valid) {
          var that=this
          this.$axios({
            url:'user/user_info',
            method:'POST',
             data: {
               img:that.ruleForm.jpg.url+that.ruleForm.jpg.name,
               name:that.ruleForm.name, 
               sex:parseInt(that.ruleForm.sex),
               school:that.ruleForm.school,
               major:that.ruleForm.region,
               grade:that.ruleForm.grade,
               birthday:that.ruleForm.date
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
