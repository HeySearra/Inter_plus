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
              action="#"
              list-type="picture-card"
              :limit="1"
              :file-list="ruleForm.fileList1"
              :on-preview="handlePictureCardPreview1"
              :on-remove="handleRemove1"
              :before-upload="beforeImageUpload"
              :http-request="uploadImage1"
                :on-exceed="handleExceed"
              :auto-upload="true"
            >
              <i class="el-icon-plus"></i>
           </el-upload>
                <el-dialog :visible.sync="dialogVisible1">
             <img width="100%" :src="dialogImageUrl1" alt />
           </el-dialog>
  </el-form-item>
  <el-form-item label="学信网照片" prop="fileList2">
    <el-upload
              action="#"
              list-type="picture-card"
              :limit="1"
              :file-list="ruleForm.fileList2"
              :on-preview="handlePictureCardPreview2"
              :on-remove="handleRemove2"
              :before-upload="beforeImageUpload"
              :http-request="uploadImage2"
                :on-exceed="handleExceed"
              :auto-upload="true"
            >
              <i class="el-icon-plus"></i>
           </el-upload>
                <el-dialog :visible.sync="dialogVisible2">
             <img width="100%" :src="dialogImageUrl2" alt />
           </el-dialog>
  </el-form-item>
  <el-form-item label="教师资格证照片" prop="fileList3">
    <el-upload
              action="#"
              list-type="picture-card"
              :limit="1"
              :file-list="ruleForm.fileList3"
              :on-preview="handlePictureCardPreview3"
              :on-remove="handleRemove3"
              :before-upload="beforeImageUpload"
              :http-request="uploadImage3"
                :on-exceed="handleExceed"
              :auto-upload="true"
            >
              <i class="el-icon-plus"></i>
           </el-upload>
                <el-dialog :visible.sync="dialogVisible3">
             <img width="100%" :src="dialogImageUrl3" alt />
           </el-dialog>
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
      dialogImageUrl1: "",
      dialogVisible1: false,
      dialogImageUrl2: "",
      dialogVisible2: false,
      dialogImageUrl3: "",
      dialogVisible3: false,
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
          //图片上传之前检验
    beforeImageUpload(file) {
      console.log(file)
      var testmsg=file.name.substring(file.name.lastIndexOf('.')+1) 
      const isJpg = testmsg === 'jpg' || testmsg === 'png'
      if (!isJpg) {
        this.$message.error('上传图片只能是 jpg 或 png 格式!')
        return false
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
        return false
      }
      // return false // (返回false不会自动上传)
    },
handlePictureCardPreview1(file) {
    this.dialogImageUrl1 = file.url
     this.dialogVisible1 = true
  },
  handlePictureCardPreview2(file) {
    this.dialogImageUrl2 = file.url
     this.dialogVisible2 = true
  },
  handlePictureCardPreview3(file) {
    this.dialogImageUrl3 = file.url
     this.dialogVisible3 = true
  },
handleRemove1(file, fileList) {
     this.aa=fileList
      for(var i = 0; i < this.ruleForm.fileList1.length; i++){
        if(this.ruleForm.fileList1[i].url === file.url){
    //      deleteImageReport(this.fileList[i].id).then(res =>{
     //       this.$message.success('删除图片成功')
    //      })
          this.ruleForm.fileList1.splice(i, 1)
        }
      }
    },
    handleRemove2(file, fileList) {
     this.aa=fileList
      for(var i = 0; i < this.ruleForm.fileList2.length; i++){
        if(this.ruleForm.fileList2[i].url === file.url){
    //      deleteImageReport(this.fileList[i].id).then(res =>{
     //       this.$message.success('删除图片成功')
    //      })
          this.ruleForm.fileList2.splice(i, 1)
        }
      }
    },
    handleRemove3(file, fileList) {
     this.aa=fileList
      for(var i = 0; i < this.ruleForm.fileList3.length; i++){
        if(this.ruleForm.fileList3[i].url === file.url){
    //      deleteImageReport(this.fileList[i].id).then(res =>{
     //       this.$message.success('删除图片成功')
    //      })
          this.ruleForm.fileList3.splice(i, 1)
        }
      }
    },
//上传图片
    uploadImage1(image){
      var that=this
      this.$axios({
      url:"/upload/pic",
      method:"get",
      params:{
        img:image.file
        }
        }).then(res=>{
          if(res.status==200){
            if(res.data.status==0)
             that.ruleForm.fileList1.push({name:"头像",url:res.data.url})
            }
            else
            that.$message("上传失败")
            })
    },
    //上传图片
    uploadImage2(image){
      var that=this
      this.$axios({
      url:"/upload/pic",
      method:"get",
      params:{
        img:image.file
        }
        }).then(res=>{
          if(res.status==200){
            if(res.data.status==0)
             that.ruleForm.fileList2.push({name:"头像",url:res.data.url})
            }
            else
            that.$message("上传失败")
            })
    },
    //上传图片
    uploadImage3(image){
      var that=this
      this.$axios({
      url:"/upload/pic",
      method:"get",
      params:{
        img:image.file
        }
        }).then(res=>{
          if(res.status==200){
            if(res.data.status==0)
             that.ruleForm.fileList3.push({name:"头像",url:res.data.url})
            }
            else
            that.$message("上传失败")
            })
    },
    handleExceed: function () {
        this.$alert('请先删除选择的图片或视频，再上传  。最多上传一张', '提示', {
            type: 'warning'
        });
    },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             var that=this
              this.$axios.post('/user/post_teacher',
     this.qs.stringify({
        id:0,
        degree:parseInt(that.ruleForm.degree),
               graduate_school:that.ruleForm.graduate_school,
               teach_grade:parseInt(that.ruleForm.teach_grade),
               reason:that.ruleForm.reason,
               img_per:that.ruleForm.fileList1[0].url,
               img_xue:that.ruleForm.fileList2[1].url,
               img_tea:that.ruleForm.fileList3[2].url,
      }),
      {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      .then(res=>{
            if(res.status==200){
              if(res.data.status==0)
                alert('提交成功')
              else
                alert('提交错误')
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