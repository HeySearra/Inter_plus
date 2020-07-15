<template>
  <div class="classCardSp"  >
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <el-container>
        <el-image :src="classCard.classIcon" :fit="'scale-down'" style="width: 250px; padding: 2px;"></el-image>
          <el-container direction="vertical">
            <div style="padding: 5px 5px 0px 5px; text-align: left; line-height: 25px;">
              <el-container direction="vertical">
                <div><el-button type="text" @click="toVideo" style="font-size: larger">
                  {{classCard.className}}</el-button>
                </div>
                <div><el-button type="text" style="font-size: 15px; color: grey" @click="toTeacher">
                  {{classCard.teacherName}}</el-button>
                </div>
                <div class="Intro">
                  <el-button type="text" @click="toVideo">{{classCard.classIntro}}</el-button>
                </div>
              </el-container>
            </div>
            <div style="padding: 0px 5px 5px 5px; line-height: 25px; position: relative; text-align: left">
                <span style=" left: 5px;">{{classCard.stuNum}}人参加</span>
                <span style="position: absolute; right: 15px;">{{classCard.classDate}}</span>
            </div>
          </el-container>
      </el-container>
    </el-card>
  </div>
</template>

<script>
  /* eslint-disable */
  //如何一行在左右两边显示???????????????????????????????????????????????
  export default {
    name: "classCardSp",
    props:
    {
      classCard: {
        default:{
          classDate: '2019-07-03',
          className:'NULL',
          teacherName:'李廷',
          classIcon: 'http://img0.imgtn.bdimg.com/it/u=3318420653,2672036615&fm=26&gp=0.jpg',
          classIntro:'名师开设语文课！',
          stuNum: 20,
          classId:'1'
        }
      }
    },
    data() {
      return {
      };
    },
    methods:{
      toVideo(){
        this.$router.push({name: 'course_info', params:{classId: this.classCard.classId}})
      },
      toTeacher(){
        this.$router.push({name: 'User'})
      }
    },
  }
</script>

<style scoped>
  div.Intro{
    width: 100%;
    height: 85px;
  }

  .el-button{
    color: black;
    padding: 0px;
  }
</style>