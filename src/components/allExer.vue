<template>
  <div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="算法" name="1">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu>
            <template slot="title">
              <span>第一章</span>
            </template>
            <el-menu-item @click="toChap(1, 1.1)">第一节</el-menu-item>
            <el-menu-item @click="toChap(1, 1.2)">第二节</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-collapse-item>
      <el-collapse-item title="数据库" name="2">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu>
            <template slot="title">
              <span>第一章</span>
            </template>
            <el-menu-item @click="toChap(2, 1.1)">第一节</el-menu-item>
            <el-menu-item @click="toChap(2, 1.2)">第二节</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
let text = "初始化赋值123";
export default {
  data() {
    return {
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
    toChap(course, chap) {
      this.$router.push({
        name: "exercise",
        params: { courseId: course, classId: chap, level: 1 }
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
</style>
