<script setup>
import * as echarts from 'echarts' 
import {onMounted,ref } from 'vue';

const props  = defineProps(['title','height'])

const option = {
  title:{
      text:props.title
  },
  xAxis: {
    data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27','2017-10-28', '2017-10-29', '2017-10-30', '2017-10-31']
  },
  yAxis: {},
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
        show: false,
      },
      restore: {},
    },
  },
  tooltip: {
    trigger: 'axis', // 触发方式：鼠标悬停时显示
    formatter: function(params) {
      // 自定义鼠标提示内容
      const data = params[0].data;
      return `开盘: ${data[1]}<br />收盘: ${data[2]}<br />最低: ${data[3]}<br />最高: ${data[4]}`;
    },
  },
  dataZoom: [
    {
      type: 'inside',
      xAxisIndex: [0],
      start: 0,
      end: 100,
    },
    {
      type: 'slider',
      show:false,
      xAxisIndex: [0],
      start: 0,
      end: 100,
    },
  ],
  series: [
    {
      type: 'candlestick',
      data: [
        [20, 34, 15, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 30, 25, 42],
        [38, 34, 32, 20],
        [40, 45, 48, 38],
        [45, 55, 43, 55],
        [56, 69, 55, 56]
      ],

    }
  ]
};

const main = ref(null)

onMounted(()=>{
    const myChart = echarts.init(main.value)
    
    option && myChart.setOption(option)

    window.addEventListener('resize',()=>{
        myChart.resize()
    })
})

</script>

<template>
    <div ref="main" :style="{ width: '100%', height: props.height}"></div>
</template>