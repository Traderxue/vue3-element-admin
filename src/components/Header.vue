<script setup>
import { onMounted,ref } from "vue"
import {useRouter} from 'vue-router'
import { useMyStore } from "@/store/myStore";

const myStore = useMyStore()
const router = useRouter()
const username = ref('')
const getUsername=()=>{
    username.value = localStorage.getItem("username")
}
const logout = ()=>{
    router.push('/login')
    localStorage.removeItem("username")
}
const fold=()=>{
    myStore.collapse = !myStore.collapse
}
onMounted(()=>{
    getUsername()
})

</script>


<template>
    <div class="container">
        <div class="icon" @click="fold">
            <el-icon v-if="myStore.collapse"><Expand /></el-icon>
            <el-icon v-else><Fold /></el-icon>
        </div>
        <div class="title">后台管理系统</div>

        <div class="more">
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{username}}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>项目地址</el-dropdown-item>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

        <div class="avtor">
            <img src="https://avatars.githubusercontent.com/u/128983356?v=4" alt=""/>
        </div>
        <div class="notice">
            <el-tooltip
            class="box-item"
            effect="dark"
            content="2条消息未读"
            placement="bottom"
            >
            <el-icon><Bell /></el-icon>
            </el-tooltip>
            <span class="redPorint" v-if="true"></span>
        </div>
        
        
    </div>
</template>


<style lang="scss" scoped>
.container{
    min-width: 980px;
    height: 60px;
    font-size: 20px;
    color: #fff;
    .icon{
        display: flex;
        float: left;
        height: 60px;
        padding: 0px 15px;
        align-items: center;
    }
    .title{
        height: 60px;
        display: flex;
        float: left;
        align-items: center;
    }
    .avtor{
        height: 60px;
        width: 50px;
        display: flex;
        float: right;
        padding: 0px 10px;
        align-items: center;
        img{
            width: 45px;
            height: 45px;
            border-radius: 50%;
        }
    }
   
    .notice{
        display: flex;
        float: right;
        height: 60px;
        width: 30px;
        align-items: center;
        padding: 0px 10px;
        cursor: pointer;
        position: relative;
    }
    .more{
        display: flex;
        float: right;
        height: 60px;
        align-items: center;
        cursor: pointer;
    }
    .redPorint{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgb(244, 78, 78);
        position: absolute;
        right: 20px;
        top: 28%;
    }

}

</style>