<script setup>
import { ref } from "vue"

const activeName = ref('first')

const handleClick = (tab, ) => {
  console.log(tab, event)
}
</script>

<template>
         <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="管理员" name="first">管理员</el-tab-pane>
                <el-tab-pane label="普通用户" name="second">普通用户</el-tab-pane>
            </el-tabs>
        </el-card>
</template>

<style lang="scss" scoped>
.el-breadcrumb{
    margin-bottom: 20px;
}
.el-card{
    height: 800px;
}
</style>