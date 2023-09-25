<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const route = useRoute()

const isCollapse = ref(false)
const logout = ()=>{
  router.push("/login")
}
const changeCollapse = ()=>{
  isCollapse.value = !isCollapse.value
}
if(window.screen.width<980){
  isCollapse.value = true
}
window.onresize = ()=>{
  if(window.innerWidth<980){
    isCollapse.value = true
  }else{
    isCollapse.value = false
  }
}

</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="!isCollapse?'200px':'65px'">
            <el-menu
            active-text-color="#1890ff"
            background-color="#304156"
            class="el-menu-vertical-demo"
            :default-active="route.path"
            text-color="#fff"
            router
            :collapse=isCollapse
            :collapse-transition=false
          >
              <el-menu-item index="/home">
                <el-icon><HomeFilled /></el-icon>
                <template #title>
                  <span>首页</span>
                </template>
              </el-menu-item>
              <el-menu-item index="menu">
                <el-icon><Menu /></el-icon>
                <template #title>
                  <span>菜单管理</span>
                </template>
              </el-menu-item>
              <el-menu-item index="chart">
                <el-icon><Histogram /></el-icon>
                <template #title>
                  <span>图表管理</span>
                </template>
              </el-menu-item>
              <el-menu-item index="user">
                <el-icon><Avatar /></el-icon>
                <template #title>
                  <span>用户管理</span>
                </template>
              </el-menu-item>
              <el-menu-item index="author">
                <el-icon><Tools /></el-icon>
                <template #title>
                  <span>权限管理</span>
                </template>
              </el-menu-item>
              <el-menu-item index="zixun">
                <el-icon><Promotion /></el-icon>
                <template #title>
                  <span>倒计时</span>
                </template>
              </el-menu-item>
            </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="box">
            <div class="left">
              <div @click="changeCollapse">
              <el-icon v-if="isCollapse"><Expand /></el-icon>
              <el-icon v-else><Fold /></el-icon>
              </div>
              <div>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            </div>
            <div class="right">
              <div >
                <el-tooltip  effect="dark"
                  content="有两条未读消息"
                  placement="bottom">
                  <el-badge is-dot class="item">
                  <el-icon><ChatLineSquare /></el-icon>
                  </el-badge>
                </el-tooltip>
              </div>
              <div>
                <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              </div>
              <div>
                <el-dropdown>
                <span class="el-dropdown-link">
                   操作
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>项目地址</el-dropdown-item>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click="logout">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              </div>
            </div>
          </div>
        </el-header>
        <el-main>
          <RouterView :key="$route.fullPath"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-container{
    width: 100%;
    height: 100%;
}
.common-layout{
    height: 100%;
}
.el-aside{
    background: #304156;
}
.el-menu{
  border: 0;
}
.el-header{
  background: #F0F2F5;
}
.box{
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
      padding: 0px 3px;
      .el-icon{
        padding-top:3px;
        cursor: pointer;
      }
    }
  }
  .right{
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
      padding: 0px 5px;
      cursor: pointer;
    }
    .el-icon{
        padding-top:3px;
      }
    .el-dropdown-link{
      cursor: pointer;
      font-size: 14px;
    }
  }
  :focus {outline: 0;}
}
</style>