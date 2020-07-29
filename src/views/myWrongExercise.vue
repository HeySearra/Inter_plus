<template>
  <div>
    <el-row
      style="position:relative;height:200px;background-color: rgba(192,200,190, 0.5)"
    >
      <el-col :span="17">
        <div id="info">
          <div style="width: 25% ;height:80%;">
            <div
              style="position:absolute;left:10%;top:70px;width: 100px;height:100px;border-radius:100px;-webkit-border-radius:100px; -moz-border-radius:100px;overflow: hidden"
            >
              <img
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                alt="头像"
                style="width:100px;height: 100px; display: block; ; border-radius:100px;"
              />
            </div>
          </div>
          <div style="position:absolute;left:40%;top:20px;">
            <h4 class="lead">{{ name }}</h4>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="background:white">
      <el-col :span="15">
        <el-row
          ><el-menu
            default-active="/user/wrongExercise"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router
          >
            <el-menu-item index="/user">我的课程</el-menu-item>
            <el-menu-item index="/user/wrongExercise">我的错题本</el-menu-item>
          </el-menu>
        </el-row>
        <el-row class="tac">
          <el-col :span="4">
            <h5>选择题型</h5>
            <el-menu
              :default-active="active"
              class="el-menu-vertical-demo"
              @select="handleSelect"
            >
              <el-menu-item index="1">
                <span slot="title">单选题</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">多选题</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">填空题</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">主观题</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="20">
            <div v-show="active == '1'">
              <h3>
                单选题
                <el-button type="primary" @click="showone = !showone"
                  >显示答案</el-button
                >
              </h3>
              <ul v-for="(item, index) in one" :key="index">
                <li style="position:relative">
                  <el-button
                    style="position:absolute;right:-50px"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                  ></el-button>
                  <p>第{{ index + 1 }}题: {{ item.title }}</p>

                  <el-radio-group
                    v-model="item.selected"
                    v-for="(select, ind) in item.selects"
                    :key="ind"
                  >
                    <el-radio :label="ind">{{ select }}</el-radio>
                  </el-radio-group>
                  <p
                    v-show="showone"
                    style="font-size:16px;border-radius: 2px;border:solid 1px"
                  >
                    正确答案:&nbsp;&nbsp;<span
                      style="font-size:20px;color:red"
                      >{{ item.right }}</span
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:12px"
                      >你错选为{{ item.wrong }}</span
                    >
                  </p>
                </li>
              </ul>
              >
            </div>
            <div v-show="active == '2'">
              <h3>
                多选题
                <el-button type="primary" @click="showmore = !showmore"
                  >显示答案</el-button
                >
              </h3>

              <ul v-for="(item, index) in more" :key="index">
                <li style="position:relative">
                  <el-button
                    style="position:absolute;right:-50px"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                  ></el-button>
                  <p>第{{ index + 1 }}题: {{ item.title }}</p>

                  <el-checkbox-group
                    v-model="item.selected"
                    v-for="(select, ind) in item.selects"
                    :key="ind"
                  >
                    <el-checkbox :label="select"></el-checkbox>
                  </el-checkbox-group>
                  <p
                    v-show="showmore"
                    style="font-size:16px;border-radius: 2px;border:solid 1px"
                  >
                    正确答案:&nbsp;&nbsp;<span
                      style="font-size:20px;color:red"
                      >{{ item.right }}</span
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:12px"
                      >你错选为{{ item.wrong }}</span
                    >
                  </p>
                </li>
              </ul>
            </div>
            <div v-show="active == '3'">
              <h3>
                填空题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button
                  type="primary"
                  @click="showinput = !showinput"
                  >显示答案</el-button
                >
              </h3>
              <ul v-for="(item, index) in input" :key="index">
                <li style="position:relative">
                  <el-button
                    style="position:absolute;right:-50px"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                  ></el-button>
                  <span>第{{ index + 1 }}题: {{ item.title }}</span>
                  <el-input
                    placeholder="请输入内容"
                    v-model="item.input"
                    clearable
                  ></el-input>
                  <p
                    v-show="showinput"
                    style="font-size:16px;border-radius: 2px;border:solid 1px"
                  >
                    正确答案:&nbsp;&nbsp;<span
                      style="font-size:20px;color:red"
                      >{{ item.right }}</span
                    >
                  </p>
                  <p
                    v-show="showinput"
                    style="font-size:16px;border-radius: 2px;border:solid 1px"
                  >
                    <span style="font-size:12px"
                      >你错写为:{{ item.wrong }}</span
                    >
                  </p>
                </li>
              </ul>
            </div>
            <div v-show="active == '4'">
              <h3>
                主观题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button
                  type="primary"
                  @click="showinput = !showinput"
                  >显示答案</el-button
                >
              </h3>
              <ul v-for="(item, index) in input" :key="index">
                <li style="position:relative">
                  <el-button
                    style="position:absolute;right:-50px"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                  ></el-button>
                  <span>第{{ index + 1 }}题: {{ item.title }}</span>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="item.textarea"
                    clearable
                  ></el-input>
                  <p
                    v-show="showinput"
                    style="font-size:16px;border-radius: 2px;border:solid 1px"
                  >
                    正确答案:&nbsp;&nbsp;<span
                      style="font-size:20px;color:red"
                      >{{ item.right }}</span
                    >
                  </p>
                  <p
                    v-show="showinput"
                    style="font-size:16px;border-radius: 2px;border:solid 1px"
                  >
                    <span style="font-size:12px"
                      >你错写为:{{ item.wrong }}</span
                    >
                  </p>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2">
        <el-dropdown @command="handleCommand" style="margin-top:30px">
          <span class="el-dropdown-link">
            {{ click }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in items" :key="item" :command="item">
              {{ item }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <el-row :gutter="20"> </el-row>
      </el-col>
      <el-col :span="6">
        <user-info></user-info>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import userInfo from "../components/userInfo.vue";
export default {
  name: "WrongExercise",
  components: {
    userInfo
  },
  data() {
    return {
      items: ["全部课程", "英语", "数学", "语文"],
      click: "全部课程",
      active: "1",
      one: [
        {
          title: "你最喜欢",
          selects: ["红色", "蓝色", "黄色"],
          selected: "",
          right: "D",
          wrong: "C"
        },
        {
          title: "你最喜欢",
          selects: ["红色", "蓝色", "黄色"],
          selected: "",
          right: "D",
          wrong: "A"
        }
      ],
      more: [
        {
          title: "你喜欢",
          selected: [],
          selects: ["红色", "蓝色", "黄色"],
          right: ["A", "B"],
          wrong: ["C"]
        },
        {
          title: "你喜欢",
          selected: [],
          selects: ["红色", "蓝色", "黄色"],
          right: ["A", "B"],
          wrong: ["C"]
        }
      ],
      input: [
        { title: "你喜欢", input: "", right: "sda", wrong: "sad" },
        { title: "你喜欢", input: "" }
      ],
      textarea: [
        { title: "你喜欢", textarea: "hgjh", right: "sda", wrong: "sad" },
        { title: "你喜欢", textarea: "", right: "sda", wrong: "sad" }
      ],
      showone: false,
      showmore: false,
      showinput: false,
      jpg: "C:/Users/鸡蛋酱/IdeaProjects/untitled/myweb/src/jpg/book2.jpg",
      name: "Gua"
    };
  },
  methods: {
    handleCommand(command) {
      this.click = command;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.active = key;
    },
    toEdit() {
      this.$router.push({ name: "Edit" });
    }
  }
};
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.el-col {
  border-radius: 4px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
li {
  list-style: none;
}
</style>
