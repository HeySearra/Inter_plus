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
       list:[{name:"sd",id:"123",exercises:[{id:"12",name:"123"}]},{name:"sd",id:"123",exercises:[{id:"1212",name:"123"}]}],
    };
  },
  mounted(){
    var that=this
     ////复制 获取exerciselist
    ///获取课程id
    this.$axios({
      url:"http://127.0.0.1:8000/course/user_list",
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
    ///根据课程id获取套卷信息  list
    for(var i=0;i<this.courses.length;i++){
        this.$axios({
      url:"http://127.0.0.1:8000/exercise/course_list",
      method:"post",
      data:{
        course_id:that.courses.id
        }
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            var li={name:that.courses[i].name,id:that.courses[i].id,exercises:res.data.exercises}
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
