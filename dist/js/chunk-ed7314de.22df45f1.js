(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed7314de"],{5710:function(t,e,s){"use strict";var a=s("82ca"),o=s.n(a);o.a},"5bdf":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classView"},[s("el-container",{attrs:{direction:"horizontal"}},[s("el-container",{attrs:{direction:"vertical"}},[s("el-main",[s("el-container",{attrs:{direction:"vertical"}},[s("div",{staticStyle:{position:"relative"}},[s("div",{staticStyle:{position:"absolute",left:"10px","font-size":"larger"}},[t._v(" "+t._s(t.courseInfo.className)+" ")]),s("div",{staticStyle:{position:"absolute",right:"10px"}},[t._v(" 选择章节: "),s("el-select",{attrs:{filterable:""},on:{change:t.getChap},model:{value:t.chapName,callback:function(e){t.chapName=e},expression:"chapName"}},t._l(t.chapters,(function(t){return s("el-option",{key:t.classId,attrs:{label:t.name,value:t.classId}})})),1),t._v(" 习题："),s("el-link",{on:{click:function(e){return t.toExe("1",t.courseInfo.courseId,t.chap)}}},[t._v("易")]),s("el-link",{on:{click:function(e){return t.toExe("2",t.courseInfo.courseId,t.chap)}}},[t._v("中")]),s("el-link",{on:{click:function(e){return t.toExe("3",t.courseInfo.courseId,t.chap)}}},[t._v("难")])],1)]),s("br"),s("div",[s("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:t.playerOptions}})],1)])],1),s("el-main",{staticStyle:{"text-align":"left",padding:"10px","line-height":"25px"}},[s("div",{staticStyle:{"font-size":"x-large"}},[t._v("本小节概要： ")]),s("br"),s("div",[t._v(t._s(t.classIntro))])])],1),s("div",{staticClass:"easide"},[s("el-aside",{staticStyle:{"min-width":"530px",height:"700px",padding:"0","overflow-y":"hidden"}},[s("div",[s("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"点击保存(Ctrl+S)即是提交笔记标题和内容哦~",placement:"left-start"}},[s("el-input",{attrs:{placeholder:"笔记标题"},model:{value:t.note.title,callback:function(e){t.$set(t.note,"title",e)},expression:"note.title"}})],1),s("mavon-editor",{ref:"editor",staticStyle:{height:"650px"},on:{save:t.saveDoc,change:t.updateDoc},model:{value:t.note.text,callback:function(e){t.$set(t.note,"text",e)},expression:"note.text"}})],1)])],1)],1),s("el-container",[s("el-main",[t._v(" 相关课程")])],1)],1)},o=[],i=(s("4160"),s("b0c0"),s("159b"),{name:"classView",data:function(){return{userId:1,courseInfo:{class_img:"http://img0.imgtn.bdimg.com/it/u=3318420653,2672036615&fm=26&gp=0.jpg",className:"语文",courseId:"1"},classIntro:"这是一门需要脑子的课。每星期五晚20：00更新。更多消息请关注老师微信123###",note:{id:1,title:"语文课笔记",text:"<h2>这是笔记内容！</h2>"},chap:"1.1",chapters:[{date:"2016-05-02",classId:"1.1",note_address:"上海市普陀区金沙江路 1518 弄",name:"1.1算法",v_address:"1"},{date:"2016-05-04",classId:"1.2",note_address:"上海市普陀区金沙江路 1517 弄",name:"1.2哈希树",v_address:"1"},{date:"2016-05-01",classId:"1.3",note_address:"上海市普陀区金沙江路 1519 弄",name:"1.3二叉树",v_address:"1"},{date:"2016-05-03",classId:"2.1",note_address:"上海市普陀区金沙江路 1516 弄",name:"2.1搜索树",v_address:"1"}],playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}],notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}},note_id:0,video_id:0,chapName:""}},mounted:function(){console.log(this.$route.params),this.userId=this.$route.params.userId,this.courseInfo=this.$route.params.courseInfo,this.chapters=this.$route.params.allClass,this.chap=this.$route.params.classId,this.init(this.chap)},methods:{init:function(t){var e=this;console.log(this.chapters),this.chapters.forEach((function(s){s.classId==t&&(e.note_id=s.note_address,e.video_id=s.v_address,e.chapName=s.name)})),this.$axios.get("/video/info",{params:{video_id:this.video_id}}).then((function(t){200==t.status&&(e.classIntro=t.data.intro,e.playerOptions.sources[0].src=t.data.src)})).catch((function(t){e.$message({message:t,type:"error"})})),this.$axios.get("/note/info",{params:{note_id:this.note_id}}).then((function(t){200==t.status&&(console.log(t),e.note.id=t.note.id,e.note.title=t.note.title,e.note.text=t.note.text)})).catch((function(t){e.$message({message:t,type:"error"})}))},updateDoc:function(t,e){console.log("markdown内容: "+t),console.log("html内容:"+e)},saveDoc:function(t,e){console.log("markdown内容:"+t),console.log("html内容:"+e),this.note.text=t,this.onSubmit()},getChap:function(t){console.log(t),this.chap=t,this.init(this.chap)},toExe:function(t,e,s){this.$router.push({name:"exercise",params:{courseId:e,classId:s,level:t}})},onSubmit:function(){var t=this;this.$axios.post("/note/info",{id:this.note.id,title:this.note.title,text:this.note.text,class_id:this.chap,course_id:this.courseInfo.courseId,author_id:this.userId}).then((function(e){1==e.status?(t.note.id=e.data.note.id,t.note.title=e.data.note.title,t.note.text=e.data.note.text):t.$message({message:e.data.note,type:"error"})})).catch((function(e){t.$message({message:e,type:"error"})}))}}}),n=i,c=(s("5710"),s("2877")),l=Object(c["a"])(n,a,o,!1,null,"0185aaaa",null);e["default"]=l.exports},"82ca":function(t,e,s){}}]);
//# sourceMappingURL=chunk-ed7314de.22df45f1.js.map