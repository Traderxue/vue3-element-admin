<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from "vue";
const props = defineProps(['title','height'])

const option = {
    title: {
    text: props.title
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ],
  color:"#3ec1d3"
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