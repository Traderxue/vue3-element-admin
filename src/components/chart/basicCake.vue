<script setup>
import * as echarts from 'echarts'
import {onMounted,ref} from 'vue'

const props  = defineProps(['title','height'])

const option = {
  title: {
    text: props.title,
    subtext: 'Form Data',
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
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
    <div ref="main" :style="{width:'100%',height:props.height}"></div>
</template>