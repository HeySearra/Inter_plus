<template>
  <div class="uploadPrepare">
    <el-row>
      <el-col :span="4"><manage></manage></el-col>
      <el-col :span="20">
        <el-main style="margin-top: 60px; margin-left:60px; margin-right: 160px;">
          <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="课程名称：" prop="className">
              <el-input v-model="form.className"></el-input>
            </el-form-item>
            <el-form-item label="课程简介：" prop="classIntro">
              <el-input type="textarea" v-model="form.classIntro"></el-input>
            </el-form-item>
            <el-form-item label="备课文件：" prop="files">
              <el-upload
                class="upload-demo"
                drag
                ref="upload"
                :http-request="uploadFiles"
                :on-change="changeFiles"
                action="https://jsonplaceholder.typicode.com/posts/">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">上传备课文件，审核成功后才可上传课程视频</div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button @click="resetForm">取消</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "uploadPrepare",
    data(){
      return{
        form:{
          className:'',
          classIntro:'',
          files:[],

        },
        rules:{
          className:[
            {required: true, message: '请输入课程名称', trigger: 'blur'},
            {min: 10, max: 40, message: '在5-20个字之间', trigger: 'blur'}
          ],
          classIntro:[
            {required: true, message: '请输入课程简介', trigger: 'blur'},
            {min: 20, message: '最少10个字', trigger: 'blur'}
          ],
          files:[
              {required: true, message: '请上传备课文件', trigger: 'blur'}
          ],
        }
      }
    },
    methods:{
      onSubmit(){
        this.$refs.form.validate(valid =>{
          if(valid){
            this.$refs.upload.submit();//???????????????????
            this.$message({
                message:'提交成功',
                type: 'success'
            })
          }
          else{
            this.$message({
                message: '提交失败',
                type: 'error'
            })
          }
        })
      },
      uploadFiles(){
        let formData = new FormData()
        for(let i in this.form.files){
            formData.append(i.filename, i.raw)//?????????????????????????
        }

      },
      changeFiles(file, fileList){
        console.log(file)
        this.form.files = fileList
      },
      resetForm(){
        this.$refs.form.resetFields();
      }
    },
  }
</script>

<style scoped>

</style>