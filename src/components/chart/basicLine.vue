<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from "vue";
const props = defineProps(['title',"height"])

const option = {
    title: {
    text: props.title
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

const main = ref(null)
onMounted(()=>{
const myChart = echarts.init(main.value)
option && myChart.setOption(option);

window.addEventListener('resize',()=>{
    myChart.resize()
})

})
</script>

<template>
   <div ref="main" :style="{ width: '100%', height: props.height}"></div>
</template>