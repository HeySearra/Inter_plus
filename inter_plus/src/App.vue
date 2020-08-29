<template>
  <div id="app">
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <router-view />
    <el-footer>
      Footer
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style>
body,
.el-header,
.el-footer {
  margin: 0;
  padding: 0;
  min-width: 1000px;
}

.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0 !important;
  overflow: hidden;
  width: 100vw;
  z-index: 2000;
}

.el-footer {
  height: 50px;
  width: 100%;
  text-align: center;
}

body {
  background-color: #f6f6f6;
  width: 100vw !important;
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
