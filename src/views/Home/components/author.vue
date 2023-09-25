<script setup>
import { ref } from "vue"

const activeName = ref('first')

const handleClick = (tab, ) => {
  console.log(tab, event)
}
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(false)
const value5 = ref(false)
const value6 = ref(false)
</script>

<template>
         <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="管理员" name="first">
                    <el-row gutter="3">
                        <el-col :span="6"><el-switch v-model="value1"  inactive-text="添加用户"/></el-col>
                    </el-row>
                    <el-row gutter="3">
                        <el-col :span="6"><el-switch v-model="value2"  inactive-text="删除用户"/></el-col>
                    </el-row>
                    <el-row gutter="3">
                        <el-col :span="6"><el-switch v-model="value3"  inactive-text="编辑文章"/></el-col>
                    </el-row>
                   
                </el-tab-pane>
                <el-tab-pane label="普通用户" name="second">
                    <el-row gutter="3">
                        <el-col :span="6"><el-switch v-model="value4"  inactive-text="添加用户"/></el-col>
                    </el-row>
                    <el-row gutter="3">
                        <el-col :span="6"><el-switch v-model="value5"  inactive-text="删除用户"/></el-col>
                    </el-row>
                    <el-row gutter="3">
                        <el-col :span="6"><el-switch v-model="value6"  inactive-text="编辑文章"/></el-col>
                    </el-row>
                </el-tab-pane>
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
.el-col{
    display: flex;
    align-items: center;
}
</style>