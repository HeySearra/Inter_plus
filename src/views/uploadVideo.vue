<template>
  <div>
      <el-container>
          <Manage></Manage>
          <h3 style="margin-left: 300px;">This is upload video page.</h3>
      </el-container>
  </div>
</template>

<script>
  import Manage from '../components/Manage'
  export default{
    name: "uploadVideo",
    components:{
      Manage
    }
  }
</script>

<style scoped>

</style>