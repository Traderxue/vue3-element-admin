
<script setup>
import { useMyStore } from "@/store/myStore";
const myStore = useMyStore()
</script>

<template>
    <div class="container">
        <el-menu
        active-text-color="#20a0ff"
        background-color="#324157"
        class="el-menu-vertical-demo"
        default-active="homepage"
        text-color="#fff"
        :collapse="myStore.collapse"
        :collapse-transition="false"
        unique-opened
        router
      >
            <el-menu-item index="homepage">
                <el-icon><House /></el-icon>
                <template #title>系统首页</template>
            </el-menu-item>

            <el-menu-item index="order">
                <el-icon><Tickets /></el-icon>
            <template #title>订单列表</template>
            </el-menu-item>

            <el-menu-item index="goods">
                <el-icon><Goods /></el-icon>
            <template #title>商品管理</template>
            </el-menu-item>
            
            <el-menu-item index="chart">
                <el-icon><DataLine /></el-icon>
            <template #title>图表管理</template>
            </el-menu-item>

            <el-sub-menu index="user">
            <template #title>
                <el-icon><User /></el-icon>
                <span>用户管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="userlist">用户列表</el-menu-item>
                <el-menu-item index="actor">角色管理</el-menu-item>
            </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="setting">
            <template #title>
                <el-icon><Setting /></el-icon>
                <span>系统设置</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="settingenv">系统环境</el-menu-item>
                <el-menu-item index="settingset">系统配置</el-menu-item>
            </el-menu-item-group>
            </el-sub-menu>

        </el-menu>
    </div>
</template>

<style lang="scss" scoped>
.el-menu{
    border: 0;
}
</style>