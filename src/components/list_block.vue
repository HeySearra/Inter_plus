<template>
    <div>
        <h3>{{title}}</h3>
        <el-divider></el-divider>
        <div>
            <ul v-if="type=='subject' || type=='course'">
                <li v-for="(item, index) in list" :key="index" @click="click_item(item)">
                    <span style="margin-left: 5px">{{ item.title?item.title:item.name }}</span>
                    <span v-if="type=='subject'||type=='collection'"> ({{item.count}})</span>
                </li>
            </ul>
            <ul v-if="type=='relative_article' || type=='relative_resource'">
                <li v-for="(item, index) in list" :key="index" @click="click_item(item)">
                    <span style="margin-left: 5px">{{ item.title?item.title:item.name }}</span>
                </li>
            </ul>
        </div>
        <div style="clear:both;float:none"></div>
        <vcd v-if="type=='collection'" ref="vcd" :title="'收藏夹：'+c_title"></vcd>
        <vsd v-if="type=='special'" ref="vsd" :title="'专栏：'+s_title"></vsd>
    </div>
</template>

<script>
export default {
    props: {
        title:{
            type:String,
            default:''
        },
        type:{
            type: String,
            default: 'list'
        },
        uid:{
            type:Number,
            default:0
        },
    },
    data () {
        return {
            s_title:'',
            c_title:'',
            list:[]
        }
    },
    methods: {
        click_item(item){
            if(this.type == 'subject'){

            }
            else if(this.type == 'course'){

            }
            else if(this.type == 'video'){

            }
        },


    }
}
</script>

<style scoped>
.list_block{
    
}

.list_block ul{
    padding:0 5px;
    margin: 5px 0 0;
    line-height:2em
}

.list_block li{
    list-style: none;
    text-align: left;
    font-size:15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    height:32px
}

.list_block li:hover{
    color:hsl(1, 69%, 69%);
}

.icon-eye-close{
    margin-left:.6em
}

.list_block>div{
    width:100%;
    text-align: center;
    float: left;
    cursor: pointer;
}

.list_block .data_num{
    font-size: 35px;
    font-weight: bold;
}

.el-divider{
    margin:3px 0 10px;
}

.iconfont{
    font-size: 110%;
}
</style>
