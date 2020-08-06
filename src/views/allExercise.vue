<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <all-exer></all-exer>
      </el-aside>
      <el-main>
        <all-exercise></all-exercise>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import allExercise from "../components/exercise.vue";
import allExer from "../components/allExer.vue";
let text = "初始化赋值123";
export default {
  components: {
    allExer,
    allExercise
  },
  data() {
    return {
      txt_name: ""
    };
  },
  created: function() {
    this.txt_name = text;
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
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
</style>
