<template>
  <div >
    <div v-for="(item,index) in list" :key="index">
        <el-collapse v-model="activeName" accordion>
      <el-collapse-item :title="item.name" :name="item.name">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        > 
        <div v-for="(it,ind) in item.exercises" :key="ind">
            <el-menu-item @click="toChap(item.id, it.id,it.level)">{{it.name}}</el-menu-item>
        </div>
        </el-menu>
      </el-collapse-item>
    </el-collapse>
    </div>
  </div>
</template>
<script>
let text = "初始化赋值123";
export default {
  props: {
    list: {
      default: [
          {name:"sd",id:"123",exercises:[{id:"12",name:"123"}]}
        ,
      ]
    }
  },
  data() {
    return {
      user_id:"",
      txt_name: "",
      activeName: ""
    };
  },
  created: function() {
    this.txt_name = text;
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    toChap(course, chap,level) {
      this.$router.push({
        path:"/allExercise/"+course+"/"+chap+"/"+level
    //    name: "allExercise",
     //   params: { courseId: course, classId: chap,level:1 }
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
li {
  list-style: none;
}
</style>
