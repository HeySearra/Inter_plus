<template>
  <div>
    <el-container>
      <el-aside width="250px" style="margin-left: 100px;">
        <lb :title="'学科分类'" type="subject"></lb>
      </el-aside>
      <el-main>
        <class-carousel></class-carousel>
      </el-main>
      <el-aside width="250px" style="margin-right: 100px;">
        <lb :title="'我的课程'" type="course"></lb>
      </el-aside>
    </el-container>
    <el-container type="flex" justify="space-around">
      <el-col :span="8"
        ><div style="width: 250px; margin: 0 auto;">
          <lb :title="'最新更新排行榜'" type="course"></lb></div
      ></el-col>
      <el-col :span="8"
        ><div style="width: 250px; margin: 0 auto;">
          <lb :title="'最多同学排行榜'" type="course"></lb></div
      ></el-col>
      <el-col :span="8"
        ><div style="width: 250px; margin: 0 auto;">
          <lb :title="'最多点赞排行榜'" type="course"></lb></div
      ></el-col>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: [
        {
          courseId: 1,
          class_img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          courseId: 2,
          class_img: ""
        },
        {
          courseId: 3,
          class_img: ""
        },
        {
          courseId: 4,
          class_img: ""
        }
      ]
    };
  },
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$axios({
        url: "",
        method: "POST",
        params: {}
      }).then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.1/lib/theme-chalk/index.css");
.el-aside {
  color: #333;
  padding-top: 40px;
  padding-bottom: 30px;
}

.el-main {
  color: #333;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

.mid {
  margin-bottom: 40px;
  width: 1100px;
  margin: 0 auto;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
