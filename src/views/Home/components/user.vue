<script setup>
import {Delete,Edit} from "@element-plus/icons-vue"
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const handleSelectionChange =()=>{
  
}
</script>

<template>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card>
              <el-row :gutter="40">
                <el-col :span="1">
                <el-button  type="primary" size="small">全选</el-button>
              </el-col>
              <el-col :span="1">
                <el-button  type="info" size="small">取消</el-button>
              </el-col>
              <el-col :span="1">
                <el-button  type="success" size="small">添加</el-button>
              </el-col>
              <el-col :span="1">
                <el-button  type="danger" size="small">删除</el-button>
              </el-col>
          </el-row>
          
          <el-table
            ref="multipleTableRef"
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column label="Date" width="120">
              <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column property="name" label="Name" width="120" />
            <el-table-column property="address" label="Address" show-overflow-tooltip />
            <el-table-column fixed="right" label="Operations" >
              <template #default>
                <el-button :icon="Delete"  type="danger" size="small"></el-button>
                <el-button :icon="Edit"  type="warning" size="small"></el-button>
              </template>
            </el-table-column>
        </el-table>
        </el-card>
          
</template>

<style lang="scss" scoped>
.el-breadcrumb{
    margin-bottom: 20px;
}
.el-table{
  margin-top: 20px;
}
</style>