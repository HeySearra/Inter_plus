<template>
  <div>
    <h1>{{kecheng}}{{xiaojie}}习题 <el-row>
  <el-button round @click="easy"> 简单</el-button>
  <el-button type="success" round @click="middle">中等</el-button>
  <el-button type="danger" round @click="hard">困难</el-button>
</el-row></h1>  
    <div v-show="one.length>0">
    <h3>单选题</h3>
    <ul v-for="(item,index) in one" :key="index">
        <li> 
            <p>第{{ index+1 }}题: {{item.title}}</p>
            <el-radio-group v-model="item.selected" v-for="(select,ind) in item.selects" :key="ind">
                 <el-radio :label="ind">{{select}}</el-radio>
            </el-radio-group>
        </li>
    </ul>
    </div>
    <div v-show="more.length>0">
    <h3>多选题</h3>
    <ul v-for="(item,index) in more" :key="index">
        <li> 
            <p>第{{ index+1 }}题: {{item.title}}</p>
            <el-checkbox-group v-model="item.selected" v-for="(select,ind) in item.selects" :key="ind">
                 <el-checkbox :label="select"></el-checkbox>
            </el-checkbox-group>
        </li>
    </ul>
    </div>
    <div v-show="input.length>0">
    <h3>填空题</h3>
    <ul v-for="(item,index) in input" :key="index">
        <li> 
            <span>第{{ index+1 }}题: {{item.title}}</span>
            <el-input placeholder="请输入内容" v-model="item.input" clearable></el-input>
        </li>
    </ul>
    </div>
    
    <el-button type="primary" >提交</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        kecheng:"数据库",
        xiaojie:"1.1：算法",
        one:[
            {title:"你最喜欢",selects:["红色","蓝色","黄色"],selected:""},
            {title:"你最喜欢",selects:["红色","蓝色","黄色"],selected:""}
            ],
        more:[
            {title:"你喜欢",selected:[],selects:["红色","蓝色","黄色"]},
            {title:"你喜欢",selected:[],selects:["红色","蓝色","黄色"]}
            ],
        input:[
            {title:"你喜欢",input:""},
            {title:"你喜欢",input:""}
        ]
    };
  },
  methods: {
      easy() {
    },
    middle() {
    },
    hard() {
    },

  }
};
</script>