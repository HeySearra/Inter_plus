<template>
  <div class="notes">
    <el-form :model="form">
      <el-form-item style="margin-left: 180px; margin-top: 20px;">
        选择章节:
        <el-select v-model="chap" filterable @change="getChap">
          <el-option
            v-for="item in classInfo.chapters"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span style="margin-left: 650px;">
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button plain @click="resetForm">重置</el-button>
        </span>
      </el-form-item>
      <el-form-item style="width: 80%; margin: 0 auto;">
        <mavon-editor
          style="height: 650px;"
          @save="saveDoc"
          @change="updateDoc"
          ref="editor"
          v-model="form.doc"
        >
        </mavon-editor>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "note_edit",
  data() {
    return {
      form: {
        doc: "上一次笔记内容"
      },
      chap: "1.1",
      classInfo: {
        class_img:
          "http://img0.imgtn.bdimg.com/it/u=3318420653,2672036615&fm=26&gp=0.jpg",
        className: "语文",
        chapters: [
          {
            value: "1.1",
            label: "1.1"
          },
          {
            value: "1.2",
            label: "1.2"
          },
          {
            value: "2.1",
            label: "2.1"
          }
        ],
        doc: "", //相关课程放在那里??????????????????????????????????
        classIntro:
          "这是一门需要脑子的课。每星期五晚20：00更新。更多消息请关注老师微信123###",
        courseId: "1"
      }
    };
  },
  mounted() {
    this.chap = this.$route.params.classId;
  },
  methods: {
    onSubmit() {
      this.$message("已保存！");
    },
    updateDoc(markdown, html) {
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("markdown内容: " + markdown);
      console.log("html内容:" + html);
    },
    saveDoc(markdown, html) {
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("markdown内容:" + markdown);
      console.log("html内容:" + html);
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
    getChap(val) {
      console.log(val);
      this.chap = val;
    }
  }
};
</script>

<style scoped></style>
