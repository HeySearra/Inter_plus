<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <all-exer></all-exer>
      </el-aside>
      <el-main> </el-main>
    </el-container>
  </div>
</template>
<script>
import allExer from "../components/allExer.vue";
export default {
  components: {
    allExer
  },
  data() {
    return {};
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
