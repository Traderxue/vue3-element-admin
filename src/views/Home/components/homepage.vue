<script setup>
import { ref } from "vue"
import basicLine from "@/components/chart/basicLine.vue";
import basicBar from "@/components/chart/basicBar.vue";

const cardData = ref([
    {
        className:"color1",
        name:"group",
        title:"今日注册人数",
        count:3
    },
    {
        className:"color2",
        name:"currency_yen",
        title:"用户余额",
        count:356452
    },
    {
        className:"color3",
        name:"forward_to_inbox",
        title:"未读消息",
        count:15
    },
    {
        className:"color4",
        name:"currency_bitcoin",
        title:"交易种类",
        count:36
    },
])
</script>
<template>
    <el-row :gutter="60">
        <el-col :span="6" v-for="(item,index) in cardData" :key="index">
            <el-card>
                <div class="box">
                    <div class="left">
                        <span :class="item.className" class="material-symbols-outlined">
                        {{item.name}}
                        </span>
                    </div>
                    <div class="right">
                        <p>{{item.title}}</p>
                        <span>{{item.count}}</span>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="60">
        <el-col :span="12">
            <el-card class="chart">
                <basicLine title="用户余额统计" height="600px"/>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card class="chart">
                <basicBar title="用户注册统计" height="600px"/>
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped lang="scss">
.el-card{
    margin-top: 20px;
}
.box{
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    .left{
        span{
            font-size: 64px;
        }
    }
    .right{
        text-align: center;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        font-weight: 600;
        font-size: 18px;
        p{
            color: #999;
        }
        span{
            color: #555;
        }
    }
    .color1{
        color:aquamarine;
    }
    .color2{
        color: #F4516C;
    }
    .color3{
        color:#36A3F7;
    }
    .color4{
        color:#2EC7C9;
    }
    
}
.chart{
        display: block;
        height: 600px;
        width: 100%;
    }
</style>