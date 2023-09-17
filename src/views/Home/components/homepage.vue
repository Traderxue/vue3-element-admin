<script setup>
import * as echarts from 'echarts';
import option from '@/utils/option.js'
import {onMounted, ref} from 'vue'

const main = ref(null)

onMounted(()=>{
    const myChart = echarts.init(main.value)
     window.addEventListener('resize', function () {     //是图表自适应大小
      myChart.resize();
    })
    option && myChart.setOption(option)
})

</script>

<template>
    <div class="top_card">
        <el-row :gutter="22">
        <el-col :span="6">
            <el-card>
                <div class="card_eve">
                    <el-icon><UserFilled /></el-icon>
                    <div class="in_card">
                        <p>新用户</p>
                        <p  class="num">2465</p>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card>
            <div class="card_eve">
                    <el-icon><Comment /></el-icon>
                    <div class="in_card">
                        <p>未读消息</p>
                        <p  class="num">25</p>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card>
            <div class="card_eve">
                <el-icon><Histogram /></el-icon>
                    <div class="in_card">
                        <p>员工数据</p>
                        <p  class="num">2465</p>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card>
            <div class="card_eve">
                <el-icon><Promotion /></el-icon>
                    <div class="in_card">
                        <p>商品数据</p>
                        <p class="num">2465</p>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
    </div>    
    <div class="chart">
        <el-card>
            <div id="main" ref="main">
                
            </div>
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
.top_card{
    margin-bottom:25px ;
}
.card_eve{
    display: flex;
    justify-content: space-around;
    .el-icon{
        font-size: 48px;
        color: #40C9C6;
    }
    .in_card{
        text-align: center;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        p{
            font-size: 18px;
            color: #999;
            font-weight: 600;
            padding: 5px 0px;
        }
        .num{
            font-size: 20px;
            color: #333;
        }
    }
}
#main{
    width: 100%;
    height: 600px;
}

</style>