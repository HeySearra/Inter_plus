(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-068b7f45"],{"029e":function(e,t,s){"use strict";var i=s("a576"),n=s.n(i);n.a},"1dde":function(e,t,s){var i=s("d039"),n=s("b622"),l=s("2d00"),o=n("species");e.exports=function(e){return l>=51||!i((function(){var t=[],s=t.constructor={};return s[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,s){"use strict";var i=s("c04e"),n=s("9bf2"),l=s("5c6c");e.exports=function(e,t,s){var o=i(t);o in e?n.f(e,o,l(0,s)):e[o]=s}},a434:function(e,t,s){"use strict";var i=s("23e7"),n=s("23cb"),l=s("a691"),o=s("50c4"),a=s("7b0b"),r=s("65f0"),c=s("8418"),u=s("1dde"),d=s("ae40"),m=u("splice"),_=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,h=Math.min,p=9007199254740991,w="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!m||!_},{splice:function(e,t){var s,i,u,d,m,_,f=a(this),x=o(f.length),g=n(e,x),y=arguments.length;if(0===y?s=i=0:1===y?(s=0,i=x-g):(s=y-2,i=h(v(l(t),0),x-g)),x+s-i>p)throw TypeError(w);for(u=r(f,i),d=0;d<i;d++)m=g+d,m in f&&c(u,d,f[m]);if(u.length=i,s<i){for(d=g;d<x-i;d++)m=d+i,_=d+s,m in f?f[_]=f[m]:delete f[_];for(d=x;d>x-i+s;d--)delete f[d-1]}else if(s>i)for(d=x-i;d>g;d--)m=d+i-1,_=d+s-1,m in f?f[_]=f[m]:delete f[_];for(d=0;d<s;d++)f[d+g]=arguments[d+2];return f.length=x-i+s,u}})},a576:function(e,t,s){},a8d8:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-row",{staticStyle:{"margin-top":"30px"}},[s("el-col",{staticStyle:{background:"white"},attrs:{span:20}},[s("el-container",[s("el-main",[s("h1",{staticStyle:{"text-align":"left"}},[e._v("查看课程课时的习题 选择课程："),s("span",[s("el-dropdown",{staticStyle:{"margin-top":"30px"},on:{command:e.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.click)),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.items,(function(t){return s("el-dropdown-item",{key:t,attrs:{command:t}},[e._v(" "+e._s(t.name))])})),1)],1)],1),e.show_class?s("span",[e._v(" 选择课时： "),s("el-dropdown",{staticStyle:{"margin-top":"30px"},on:{command:e.handleCommand_class}},[s("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.click_class)),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.items_class,(function(t){return s("el-dropdown-item",{key:t,attrs:{command:t}},[e._v(" "+e._s(t.className))])})),1)],1)],1):e._e(),e.show_exercise?s("span",[e._v(" 选择套卷： "),s("el-dropdown",{staticStyle:{"margin-top":"30px"},on:{command:e.handleCommand_exercise}},[s("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.click_exercise)),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:0}},[e._v("课前习题")]),s("el-dropdown-item",{attrs:{command:1}},[e._v("课后习题")])],1)],1)],1):e._e(),e.show_question?s("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){return e.del_exercise()}}},[e._v("删除本套卷子")]):e._e()],1),s("el-divider"),s("div",{directives:[{name:"show",rawName:"v-show",value:e.show_question,expression:"show_question"}]},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.one.length>0,expression:"one.length > 0"}]},[s("h3",[e._v("单选题")]),e._l(e.one,(function(t,i){return s("ul",{key:i},[s("li",[s("p",[e._v("第"+e._s(i+1)+"题: "+e._s(t.title)+" "),s("el-button",{attrs:{type:"danger",plain:""},on:{click:function(e){t.show_solutions=!t.show_solutions}}},[e._v("查看题目提示")])],1),e._l(t.stems,(function(t,i){return s("ul",{key:i},[s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.text,expression:"it.text!=null"}]},[e._v(e._s(t.text))])])])})),e._l(t.stems,(function(e,t){return s("ul",{key:t},[s("li",[s("img",{directives:[{name:"show",rawName:"v-show",value:null!=e.img,expression:"it.img!=null"}],attrs:{src:e.img}})])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_solutions,expression:"item.show_solutions"}]},[s("el-divider",{attrs:{"content-position":"left"}},[e._v("鸭你来看提示啦")]),e._l(t.solutions,(function(t,i){return s("ul",{key:i},[s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.text,expression:"it.text!=null"}]},[e._v(e._s(t.text))]),s("img",{directives:[{name:"show",rawName:"v-show",value:null!=t.img,expression:"it.img!=null"}],attrs:{src:t.img}})])])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("好啦好啦快去写题 下次要自己做呦")])],2),e._l(t.selects,(function(i,n){return s("el-radio-group",{key:n,model:{value:t.selected,callback:function(s){e.$set(t,"selected",s)},expression:"item.selected"}},[s("el-radio",{attrs:{label:i.name}},[e._v(e._s(i.name))])],1)})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("本题知识点")]),e._l(t.tags,(function(t,i){return s("ul",{key:i},[s("li",[s("p",[e._v(e._s(t))])])])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("是不是感觉更巩固了呢？")])],2)])}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:e.more.length>0,expression:"more.length > 0"}]},[s("h3",[e._v("多选题")]),e._l(e.more,(function(t,i){return s("ul",{key:i},[s("li",[s("p",[e._v("第"+e._s(i+1)+"题: "+e._s(t.title)+" "),s("el-button",{attrs:{type:"danger",plain:""},on:{click:function(e){t.show_solutions=!t.show_solutions}}},[e._v("查看题目提示")])],1),e._l(t.stems,(function(t,i){return s("ul",{key:i},[s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.text,expression:"it.text!=null"}]},[e._v(e._s(t.text))])])])})),e._l(t.stems,(function(e,t){return s("ul",{key:t},[s("li",[s("img",{directives:[{name:"show",rawName:"v-show",value:null!=e.img,expression:"it.img!=null"}],attrs:{src:e.img}})])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_solutions,expression:"item.show_solutions"}]},[s("el-divider",{attrs:{"content-position":"left"}},[e._v("鸭你来看提示啦")]),e._l(t.solutions,(function(t,i){return s("ul",{key:i},[s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.text,expression:"it.text!=null"}]},[e._v(e._s(t.text))]),s("img",{directives:[{name:"show",rawName:"v-show",value:null!=t.img,expression:"it.img!=null"}],attrs:{src:t.img}})])])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("好啦好啦快去写题 下次要自己做呦")])],2),e._l(t.selects,(function(i,n){return s("el-checkbox-group",{key:n,model:{value:t.selected,callback:function(s){e.$set(t,"selected",s)},expression:"item.selected"}},[s("el-checkbox",{attrs:{label:i.name}},[e._v(e._s(i.name))])],1)})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("本题知识点")]),e._l(t.tags,(function(t,i){return s("ul",{key:i},[s("li",[s("p",[e._v(e._s(t))])])])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("是不是感觉更巩固了呢？")])],2)])}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:e.maybe.length>0,expression:"maybe.length > 0"}]},[s("h3",[e._v("不定项选择题")]),e._l(e.maybe,(function(t,i){return s("ul",{key:i},[s("li",[s("p",[e._v("第"+e._s(i+1)+"题: "+e._s(t.title)+" "),s("el-button",{attrs:{type:"danger",plain:""},on:{click:function(e){t.show_solutions=!t.show_solutions}}},[e._v("查看题目提示")])],1),e._l(t.stems,(function(t,i){return s("ul",{key:i},[s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.text,expression:"it.text!=null"}]},[e._v(e._s(t.text))])])])})),e._l(t.stems,(function(e,t){return s("ul",{key:t},[s("li",[s("img",{directives:[{name:"show",rawName:"v-show",value:null!=e.img,expression:"it.img!=null"}],attrs:{src:e.img}})])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_solutions,expression:"item.show_solutions"}]},[s("el-divider",{attrs:{"content-position":"left"}},[e._v("鸭你来看提示啦")]),e._l(t.solutions,(function(t,i){return s("ul",{key:i},[s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.text,expression:"it.text!=null"}]},[e._v(e._s(t.text))]),s("img",{directives:[{name:"show",rawName:"v-show",value:null!=t.img,expression:"it.img!=null"}],attrs:{src:t.img}})])])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("好啦好啦快去写题 下次要自己做呦")])],2),e._l(t.selects,(function(i,n){return s("el-checkbox-group",{key:n,model:{value:t.selected,callback:function(s){e.$set(t,"selected",s)},expression:"item.selected"}},[s("el-checkbox",{attrs:{label:i.name}},[e._v(e._s(i.name))])],1)})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("本题知识点")]),e._l(t.tags,(function(t,i){return s("ul",{key:i},[s("li",[s("p",[e._v(e._s(t))])])])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("是不是感觉更巩固了呢？")])],2)])}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:e.input.length>0,expression:"input.length > 0"}]},[s("h3",[e._v("填空题")]),e._l(e.input,(function(t,i){return s("ul",{key:i},[s("li",[s("p",[e._v("第"+e._s(i+1)+"题: "+e._s(t.title)+" "),s("el-button",{attrs:{type:"danger",plain:""},on:{click:function(e){t.show_solutions=!t.show_solutions}}},[e._v("查看题目提示")])],1),e._l(t.stems,(function(t,i){return s("ul",{key:i},[s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.text,expression:"it.text!=null"}]},[e._v(e._s(t.text))])])])})),e._l(t.stems,(function(e,t){return s("ul",{key:t},[s("li",[s("img",{directives:[{name:"show",rawName:"v-show",value:null!=e.img,expression:"it.img!=null"}],attrs:{src:e.img}})])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_solutions,expression:"item.show_solutions"}]},[s("el-divider",{attrs:{"content-position":"left"}},[e._v("鸭你来看提示啦")]),e._l(t.solutions,(function(t,i){return s("ul",{key:i},[s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.text,expression:"it.text!=null"}]},[e._v(e._s(t.text))]),s("img",{directives:[{name:"show",rawName:"v-show",value:null!=t.img,expression:"it.img!=null"}],attrs:{src:t.img}})])])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("好啦好啦快去写题 下次要自己做呦")])],2),e._l(t.answers,(function(t,i){return s("ul",{key:i},[s("li",[s("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.input,callback:function(s){e.$set(t,"input",s)},expression:"it.input"}})],1)])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("本题知识点")]),e._l(t.tags,(function(t,i){return s("ul",{key:i},[s("li",[s("p",[e._v(e._s(t))])])])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("是不是感觉更巩固了呢？")])],2)])})),s("h3",[e._v("主观题")]),e._l(e.textarea,(function(t,i){return s("ul",{key:i},[s("li",[s("p",[e._v("第"+e._s(i+1)+"题: "+e._s(t.title)+" "),s("el-button",{attrs:{type:"danger",plain:""},on:{click:function(e){t.show_solutions=!t.show_solutions}}},[e._v("查看题目提示")])],1),e._l(t.stems,(function(t,i){return s("ul",{key:i},[s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.text,expression:"it.text!=null"}]},[e._v(e._s(t.text))])])])})),e._l(t.stems,(function(e,t){return s("ul",{key:t},[s("li",[s("img",{directives:[{name:"show",rawName:"v-show",value:null!=e.img,expression:"it.img!=null"}],attrs:{src:e.img}})])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_solutions,expression:"item.show_solutions"}]},[s("el-divider",{attrs:{"content-position":"left"}},[e._v("鸭你来看提示啦")]),e._l(t.solutions,(function(t,i){return s("ul",{key:i},[s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.text,expression:"it.text!=null"}]},[e._v(e._s(t.text))]),s("img",{directives:[{name:"show",rawName:"v-show",value:null!=t.img,expression:"it.img!=null"}],attrs:{src:t.img}})])])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("好啦好啦快去写题 下次要自己做呦")])],2),s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容",clearable:""},model:{value:t.answers[0].textarea,callback:function(s){e.$set(t.answers[0],"textarea",s)},expression:"item.answers[0].textarea"}}),s("el-divider",{attrs:{"content-position":"left"}},[e._v("本题知识点")]),e._l(t.tags,(function(t,i){return s("ul",{key:i},[s("li",[s("p",[e._v(e._s(t))])])])})),s("el-divider",{attrs:{"content-position":"left"}},[e._v("是不是感觉更巩固了呢？")])],2)])}))],2)])],1)],1)],1),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content "})])],1)],1)},n=[],l=(s("a434"),s("b0c0"),{data:function(){return{fileList:[],show_class:!1,items:[{name:"sad",id:"123",classes:[{className:"sad",classId:"123"}]},{name:"sad",id:"123",classes:[{className:"sazzzzzzd",classId:"123"}]}],click:"请选择课程",course_id:"",class_id:"",exercise_id:0,show_exercise:!1,show_question:!1,items_class:[{className:"sad",classId:"123"},{className:"saddd",classId:"123"}],click_class:"请选择课程",click_exercise:"请选择习题",name:"sda",one:[{id:"",title:"题目描述",selects:[{name:"红色"}],selected:"",difficulty:0,stems:[{img:null,text:"题干描述",type:0}],show_solutions:!1,solutions:[{img:"ss",text:"dasd",type:1,if_last:1}],tags:["asdas","dasda"]}],more:[{id:"",title:"你喜欢",selects:[{name:"红色"}],selected:["红色"],difficulty:0}],maybe:[{id:"",title:"你喜欢",selects:[{name:"红色"}],selected:["红色"],difficulty:0}],input:[{id:"",title:"你喜欢",answers:[{answer:"",input:["fsdf"]},{answer:"",input:["fsdf"]}],difficulty:0}],textarea:[{id:"",title:"你喜欢",answers:[{answer:"",textareas:""}],difficulty:0}]}},mounted:function(){var e=this;this.$axios({url:"http://127.0.0.1:8000/user/courses_list_as_teacher",method:"post",data:{id:0}}).then((function(t){200==t.status&&(console.log(t),e.items=t.data.courses)}))},methods:{addQuestion:function(e){1==e?this.one.push({input:"",question_type:1,id:"",title:"",selects:[],selected:"",difficulty:0,stems:[],tags:[],tag:""}):2==e?this.input.push({input:"",question_type:2,id:"",title:"",answers:[],difficulty:0,stems:[],tags:[],tag:""}):3==e?this.more.push({input:"",question_type:3,id:"",title:"",selects:[],selected:[],difficulty:0,stems:[],tags:[],tag:""}):4==e?this.maybe.push({input:"",question_type:4,id:"",title:"",selects:[],selected:[],difficulty:0,stems:[],tags:[],tag:""}):5==e&&this.textarea.push({input:"",question_type:5,id:"",title:"",answers:[{answer:""}],difficulty:0,stems:[],tags:[],tag:""})},submit:function(){},dele:function(e,t){1==e?this.one.splice(t,1):2==e?this.input.splice(t,1):3==e?this.more.splice(t,1):4==e?this.maybe.splice(t,1):5==e&&this.textarea.splice(t,1)},handleCommand:function(e){1==this.show_class?(this.show_question=!1,this.show_exercise=!1,this.click_class="请选择课时",this.click_exercise="请选择习题"):this.show_class=!0,this.click=e.name,this.course_id=e.id,this.items_class=e.classes},handleCommand_class:function(e){1==this.show_exercise?(this.show_question=!1,this.click_exercise="请选择习题"):this.show_exercise=!0,this.click_class=e.className,this.class_id=e.classId},handleCommand_exercise:function(e){0==e&&(this.click_exercise="课前习题"),this.click_exercise="课后习题",this.show_question=!0,this.exercise_id=e.alert(this.exercise_id)},easy:function(){},middle:function(){},hard:function(){},del_exercise:function(){}}}),o=l,a=(s("029e"),s("2877")),r=Object(a["a"])(o,i,n,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-068b7f45.cabecdca.js.map