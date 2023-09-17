<script setup>
import Header from '@/components/Header.vue';
import Asider from '@/components/Asider.vue';
import { useMyStore } from "@/store/myStore";
const myStore = useMyStore()
</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-container>
          <el-aside :width="!myStore.collapse?'200px':'60px'">
            <Asider />
          </el-aside>
          <el-main>
              <RouterView :key="$route.fullPath"/>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>


<style scoped>
  .common-layout{
    height: 100%;
  }
  .el-container{
    height: 100%;
  }
  .el-header{
    width: 100%;
    background: #242F42;
  }
  .el-aside{
    background: #324157;
  }
</style>