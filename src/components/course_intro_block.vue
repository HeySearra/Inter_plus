<template>
    <div>
        <div><router-link tag="a" :to="{path:'/create/setting/myinfo'}">编辑</router-link></div>
        <h3>个人信息</h3>
        <el-divider></el-divider>
        <div style="margin-top:30px">没有可以展示的信息</div>
        <ul>
            <li>aa</li>
            <li>aa</li>
        </ul>
        
        <div style="clear:both;float:none"></div>
    </div>
</template>

<script>
export default {
    name: 'cib',
    props: {
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

