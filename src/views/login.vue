<template>
  <div class="login">
    <h2><figure></figure></h2>
    <el-card class="loginForm" shadow="hover">
      <el-form :model="form" :rules="rules" ref="form" label-width="0">
        <el-form-item prop="account">
          <el-input
            prefix-icon="el-icon-message"
            autofocus="true"
            v-model="form.account"
            placeholder="请输入邮箱"
            @keyup.enter.native="$refs.pas.focus()"
            maxLength="50"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            show-password
            ref="pas"
            @keyup.enter.native="submit('form')"
            maxLength="20"
            prefix-icon="el-icon-edit"
          >
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 0">
          <el-button type="primary" @click="submit('form')">登录</el-button>
          <el-button plain @click="resetForm">重置</el-button><br />
          <el-link @click="to_register" class="to_register"
            >没有账号？立即注册</el-link
          >
        </el-form-item>
      </el-form></el-card
    >
  </div>
</template>
<script>
/* eslint-disable no-irregular-whitespace */
export default {
  name: "login",
  data() {
    return {
      form: {
        account: "",
        password: ""
      },
      rules: {
        account: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入形如xx@xx.xx格式的邮箱",
            trigger: ["blur", "change"]
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.$message({
            message: "验证成功，正在登录",
            type: "success"
          });
          this.$asiox({
            url: "http://127.0.0.1:8000/user/login",
            method: "POST",
            params: {
              email: this.form.account,
              password: this.form.password
            }
          }).then(res => {
            if (res.status === 0) {
              this.$message({
                message: "登录成功",
                type: "success"
              });
              this.$router.push({ name: "index" });
            } else {
              this.$message({
                message: "邮箱或密码错误",
                type: "error"
              });
              this.resetForm();
            }
          });
        } else {
          this.$message({
            message: "验证失败，请重新填写",
            type: "error"
          });
        }
      });
    },
    to_register() {
      this.$router.push({ name: "register" });
    },
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
<style scoped>
div.login {
  text-align: center;
}
.loginForm {
  margin: 0 auto;
  width: 500px;
  border-radius: 20px;
  border: #c0c8be solid 1px;
}
.to_register {
  margin: 0 auto;
  line-height: 20px;
  font-size: medium;
}
h2 {
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
}

h2 > figure {
  background-image: url("https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg");
  height: 200px;
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  /*transition: 0.1s linear opacity,  0.3s ease background-size;*/
}

h2 > figure:hover {
  background-size: 100%;
}
</style>
