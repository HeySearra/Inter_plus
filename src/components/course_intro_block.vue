<template>
<!--    <div>-->
<!--        <div><router-link tag="a" :to="{path:'/create/setting/myinfo'}">编辑</router-link></div>-->
<!--        <h3>个人信息</h3>-->
<!--        <el-divider></el-divider>-->
<!--        <div style="margin-top:30px">没有可以展示的信息</div>-->
<!--        <ul>-->
<!--            <li>aa</li>-->
<!--            <li>aa</li>-->
<!--        </ul>-->
<!--        -->
<!--        <div style="clear:both;float:none"></div>-->
<!--    </div>-->
    <div class="cib">
        <el-card shadow="never" style="text-align: center; line-height: 50px;">
            <div><el-image :src="classCard.classIcon" :fit="'scale-down'" style="width: 250px; padding: 2px;"></el-image></div>
            <div>{{classCard.className}}</div>
            <div><el-button plain style="padding: 5px;">加入课程</el-button></div>
            <div>授课教师：{{classCard.teacherName}}</div>
            <div>课程介绍：{{classCard.classIntro}}</div>
            <div>参加人数：{{classCard.stuNum}}</div>
            <div>创建时间：{{classCard.classDate}}</div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'cib',
    props: {
        classCard: {
            default: {
                classId: 1,
                className: '语文',
                classIcon: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                teacherName: '李廷',
                classDate: '2019-07-03',
                classIntro: '名师开设语文课！',
                stuNum: 20,
            }
        }
    },
    data () {
    },
    methods:{
        init(){

        },
    }
}
</script>

<style scoped>
.el-divider{
    margin:0;
}
</style>

