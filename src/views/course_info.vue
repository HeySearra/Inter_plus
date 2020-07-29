<template>
  <div>
    <el-container>
      <el-container class="mid">
        <el-aside width="300px" style="margin-left: 100px;">
          <cib :class-card="classCard"></cib>
        </el-aside>
        <el-container>
          <el-main style="margin-right: 100px;">
            <br />
            <el-table
              :data="
                tableData.filter(
                  data =>
                    !search ||
                    data.name.toLowerCase().includes(search.toLowerCase())
                )
              "
              style="width: 100%"
              :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
            >
              <el-table-column label="课时" prop="name">
                <template slot-scope="scope">
                  <i class="el-icon-reading"></i>
                  <el-button
                    style="margin-left: 10px; color: black;"
                    type="text"
                    @click="toClassView(scope.row.name)"
                  >
                    {{ scope.row.name }}</el-button
                  >
                </template>
              </el-table-column>
              <el-table-column label="更新日期" prop="date"> </el-table-column>
              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入章节搜索"
                  />
                </template>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >查看笔记本</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "course_info",
  data() {
    return {
      classCard: {
        courseId: 1,
        className: "语文",
        class_img:
          "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        teacherName: "李廷",
        classDate: "2019-07-03",
        classIntro: "名师开设语文课！",
        stuNum: 20,
        like_num: 30
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "1.1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "1.2",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "1.3",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "2.1",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        name: "note_edit",
        params: { courseId: this.classCard.courseId },
        query: { classId: row.name }
      });
    },
    toClassView(chapter) {
      console.log(chapter);
      this.$router.push({
        name: "classView",
        params: { courseId: this.classCard.courseId },
        query: { classId: chapter }
      });
    }
  }
};
</script>

<style scoped>
.el-aside {
  color: #333;
  padding-top: 50px;
  padding-bottom: 30px;
}

.el-main {
  color: #333;
  padding-top: 50px;
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
