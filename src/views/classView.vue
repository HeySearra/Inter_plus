<template>
  <div class="classView">
    <el-container direction="horizontal">
      <el-container direction="vertical">
        <el-main>
          <el-container direction="vertical">
            <div style="position: relative">
              <div style="position: absolute; left: 10px; font-size: larger">{{classInfo.className}}</div>
              <div style="position: absolute; right: 10px;">
                选择章节:
                <el-select v-model="chap" filterable @change="getChap">
                  <el-option
                    v-for="(item) in classInfo.chapters"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                习题：<!--易中难字体问题-->
                <el-link @click="toExe('1',classInfo.classId)">易</el-link>
                <el-link @click="toExe('2',classInfo.classId)">中</el-link>
                <el-link @click="toExe('3',classInfo.classId)">难</el-link>
              </div>
            </div><br><!--字被视频盖住了-->
            <div>
              <video-player  class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
              ></video-player>
            </div>
          </el-container>
        </el-main>
        <el-main style="text-align: left; padding: 10px; line-height: 25px;">
          <div style="font-size: x-large">{{classInfo.className}}课程概要：</div><br>
          <div>{{classInfo.classIntro}}</div>
        </el-main>
      </el-container>
      <div class="easide">
        <el-aside style="min-width:530px; height: 700px; padding: 0;">
          <div>
          {{classInfo.className}}课笔记本
          <mavon-editor
              style="height: 650px;"
              @save="saveDoc"
              @change="updateDoc"
              ref="editor"
              v-model="classInfo.doc">
           </mavon-editor>
          </div>
        </el-aside>
      </div>
    </el-container>
    <el-container>
      <el-main>
      相关课程</el-main>
<!--感觉把一页占满了，所以没写相关课程。如果要加上就在这里加，展示课程的封面。-->
    </el-container>
  </div>
</template>

<script>
   /* eslint-disable */
  export default {
    name: "classView",
    data(){
      return{
        classInfo:{
          classIcon:'http://img0.imgtn.bdimg.com/it/u=3318420653,2672036615&fm=26&gp=0.jpg',
          className:'语文',
          chapters:[
            {
              value:'1.1', label:'1.1'
            },
            {
              value:'1.2', label:'1.2'
            },
            {
              value:'2.1', label:'2.1'
            },
          ],
          doc:"",//相关课程放在那里??????????????????????????????????
          classIntro:'这是一门需要脑子的课。每星期五晚20：00更新。更多消息请关注老师微信123###',
          classId:'1'
        },
        chap:'1.1',
        playerOptions : {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4',//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: "http://vjs.zencdn.net/v/oceans.mp4" //url地址
          }],
          //poster: this.classInfo.className, 你的封面地址
          // width: document.documentElement.clientWidth, //播放器宽度
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }
        },
      }
    },
    methods:{
      updateDoc(markdown, html) {
          // 此时会自动将 markdown 和 html 传递到这个方法中
          // console.log("markdown内容: " + markdown);
          // console.log("html内容:" + html);
      },
      saveDoc(markdown, html) {
          // 此时会自动将 markdown 和 html 传递到这个方法中
          // console.log("markdown内容:" + markdown);
          // console.log("html内容:" + html);
      },
      getChap(val){
        console.log(val)
      },
      toExe(level, classId){
        this.$router.push({name:'exercise', params:{classId:classId, level:level}})
      }
    },
  }
</script>

<style scoped>
  div.easide {
    background-color: white;
    color: #333333;
    border: 0px solid #c0c8be;
    text-align: center;
    line-height: 50px;
    margin-right: 40px;
    margin-top: 20px;
    min-width: 530px;
  }

  .el-main {
    background-color: whitesmoke;
    color: #333;
    border: 0px solid #c0c8be;
    text-align: center;
    line-height: 50px;
    margin-left: 40px;
    margin-top: 20px;
    margin-right: 20px;
    max-height: 600px;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .el-input__inner{
    height: 25px;
  }

  .el-link{
    padding: 0px 5px 0px 0px;
  }
</style>
<!--<style>-->
<!--  .el-scrollbar {-->
<!--        height: 100%;-->
<!--  }-->
<!--  .el-scrollbar__wrap {-->
<!--      overflow: scroll;-->
<!--      width: 110%;-->
<!--      height: 120%;-->
<!--  }-->
<!--</style>-->
