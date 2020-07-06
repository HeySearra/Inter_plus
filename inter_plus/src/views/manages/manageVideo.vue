<template>
  <div>
    <el-row>
      <el-col :span="4"><Manage></Manage></el-col>
      <el-col :span="20">
        <h3>This is manage video page.</h3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Manage from "../../components/Manage";
  export default {
    name: "manageVideo",
    components:{
      Manage
    }
  }
</script>

<style scoped>

</style>