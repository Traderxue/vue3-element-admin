<script setup>
import { computed, onMounted, ref } from "vue";

const time = new Date();
const inputTime = ref('');
const content = ref('0天0小时0分钟0秒');

const targetTime = computed(() => {
  // 解析输入的时间并将其转换为毫秒
  return time.getTime() + (parseInt(inputTime.value) || 0) * 60 * 1000 + 5*1000;
});

const res = () => {
  const nowtime = new Date();
  const resTime = targetTime.value - nowtime.getTime();
  const seconds = Math.floor(resTime / 1000) % 60;
  const minutes = Math.floor(resTime / (1000 * 60)) % 60;
  const hours = Math.floor(resTime / (1000 * 60 * 60)) % 24;
  const days = Math.floor(resTime / (1000 * 60 * 60 * 24));

  if (resTime < 0) {
    content.value = "倒计时结束";
  } else {
    content.value = `${days}天${hours}小时${minutes}分钟${seconds}秒`;
  }
};

const start = () => {
  setInterval(() => {
    res();
  }, 1000);
};
const topTime = ref("")
onMounted(()=>{
    setInterval(() => {
        topTime.value = new Date()
  }, 1000);
})
</script>
<template>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>倒计时</el-breadcrumb-item>
    </el-breadcrumb>
  
    <el-card>
      <el-row :gutter="20">
        <el-col>{{ topTime }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="请输入一个数字，单位分钟"
            placement="top-start"
            :enterable="false"
          >
            <el-input type="text" placeholder="目标时间" v-model="inputTime" />
          </el-tooltip>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="color: skyblue; font-weight: 600; font-size: 18px;">
          {{ content }}
        </el-col>
      </el-row>
      <el-row>
        <el-button type="primary" @click="start">开始倒计时</el-button>
      </el-row>
    </el-card>
  </template>
  

  
  <style lang="css" scoped>
  .el-card {
    margin-top: 20px;
    height: 300px; /* 根据需要调整高度 */
  }
  .el-row {
    margin-top: 20px;
  }
  .el-card{
    height: 800px;
  }
  </style>
  