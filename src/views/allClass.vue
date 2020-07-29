<template>
  <div class="allClass">
    <div style="padding-right: 200px; padding-left: 200px; padding-top: 40px;">
      <class-carousel :list="list"></class-carousel>
    </div>
    <el-container direction="horizontal">
      <el-main>
        <h3>{{ subject }}课程</h3>
        <div v-for="item in 7" :key="item" style="margin-bottom: 10px;">
          <class-card-sp :class-card="classCard"></class-card-sp>
        </div>
      </el-main>
      <el-aside>
        <h3>所有学科</h3>
        <div
          v-for="(item, index) in classCategory"
          :key="index"
          @click="click_item(item)"
          style="line-height: 30px;"
        >
          <el-button type="text" style="font-size: large; color: black;">{{
            item.name
          }}</el-button>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "allClass",
  data() {
    return {
      classCard: {
        classDate: "2019-07-03",
        className: "语文",
        teacherName: "李廷",
        class_img:
          "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        classIntro: "名师开设语文课！",
        stuNum: 20,
        courseId: "1",
        like_num: 60
      },
      classCategory: [
        {
          name: "语文",
          id: 1
        },
        { name: "数学", id: 2 },
        {
          name: "英语",
          id: 3
        },
        {
          name: "美术",
          id: 4
        }
      ],
      subject: "所有",
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
  methods: {
    click_item(item) {
      this.subject = item.name;
      this.$axios({
        url: "",
        methods: "POST",
        params: { subject_id: item.id }
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
.el-aside {
  background-color: white;
  color: #333333;
  border: 1px solid #c0c8be;
  border-radius: 14px;
  text-align: center;
  line-height: 50px;
  margin-right: 100px;
  margin-left: 40px;
  margin-top: 40px;
  padding: 0;
}

.el-main {
  background-color: white;
  color: #333;
  border: 1px solid #c0c8be;
  border-radius: 14px;
  text-align: center;
  line-height: 50px;
  margin-left: 100px;
  margin-top: 40px;
  padding: 0;
}
</style>
