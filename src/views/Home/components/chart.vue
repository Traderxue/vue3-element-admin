<script setup>
import {onMounted, ref} from 'vue'
import option from '@/utils/option.js'
import * as echarts from 'echarts';


const main = ref(null)      //获取dom元素

onMounted(()=>{
    
    const myChart = echarts.init(main.value);
   

    window.addEventListener('resize', function () {     //是图表自适应大小
      myChart.resize();
    })

    option && myChart.setOption(option);
})

</script>

<template>
    <div class="main" ref="main">

    </div>
</template>

<style scoped lang="scss">
    .main{
        width: 100%;
        height: 100%;
    }
</style>