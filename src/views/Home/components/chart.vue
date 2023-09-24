<script setup>
import basicLine from '@/components/chart/basicLine.vue';
import basicBar from '@/components/chart/basicBar.vue';
import basicCake from "@/components/chart/basicCake.vue";
import basicCandle from "@/components/chart/basicCandle.vue"
</script>
<template>
     <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>图表管理</el-breadcrumb-item>
        </el-breadcrumb>
    <el-row :gutter="60">
        <el-col :span="12">
            <el-card class="chart">
                <basicLine title="折线图" height="360px"/>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card class="chart">
                <basicBar title="柱状图" height="360px"/>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="60">
        <el-col :span="12">
            <el-card class="chart">
                <basicCake title="饼图" height="360px"/>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card class="chart">
                <basicCandle title="k线图" height="360px"/>
            </el-card>
        </el-col>
    </el-row>
</template>

<style>
.el-row{
    margin: 20px 0px;
}
.chart{
    height: 380px;
    width: 100%;
}
</style>