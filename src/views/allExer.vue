<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <all-exer :list="list"></all-exer>
      </el-aside>
      <el-main> </el-main>
    </el-container>
  </div>
</template>
<script>
import allExer from "../components/allExer";
export default{
  components: {
    allExer
  },
  data() {
    return {
      courses:[],
     list:[{name:"sd",id:"123",test_id:"123",classes:[{class_name:"123sad",exercise_id:123,exercise_easy_id:123,exercise_middle_id:234,exercise_hard_id:234}]}]
    };
  },
  mounted(){
    var that=this
     ////复制 获取exerciselist
    ///获取课程id
    this.$axios({
      url:"/course/user_list",
      method:"post",
      data:{
        id:0
        }
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            for(var i=0;i<res.data.courses.length;i++){
              var course={name:res.data.courses[i].name,id:res.data.courses[i].id}
              that.courses.push(course)
            }
            }
            })
    ///根据课程id获取以课时为单位的套卷信息 id list
    for(var i=0;i<this.courses.length;i++){
        this.$axios({
      url:"/course/info",
      method:"get",
      params:{
        id:that.courses.id
        }
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            var li={name:that.courses[i].name,id:that.courses[i].id,classes:res.data.classes,test_id:res.data.test_id}
            that.list.push(li)
            }
            })
    }
    //////粘贴 获取exerciselist
            },
            }
;
</script>
<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
