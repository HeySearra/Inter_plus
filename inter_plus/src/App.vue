<template>
  <div id="app">
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <router-view/>
      <el-footer>
        Footer
      </el-footer>
  </div>
</template>

<script>
import NavBar from './components/header.vue';
import cib from './components/course_intro_block.vue';
export default {
  name: 'app',
  components: {
    NavBar, cib
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  body, .el-header, .el-footer{
    margin:0;
    padding:0, 0;
    min-width:1000px;
  }

  body{
    background-color: #f6f6f6;
    width:100vw !important;
    overflow-x: hidden;
   }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
