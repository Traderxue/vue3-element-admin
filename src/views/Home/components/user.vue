<script setup>
import {Delete,Edit} from "@element-plus/icons-vue"
import { ref } from "vue"
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

const multipleTableRef = ref(null)
const multipleSelection = ref([])

const handleSelectionChange =(val)=>{
  multipleSelection.value= val
}

const toggleSelection = (rows) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value.clearSelection()
  }
}

const handleAddClick=()=>{

}

const handleDeleteClick= ()=>{
  console.log(multipleSelection.value)
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
                <el-button  type="primary" size="small" @click="toggleSelection(tableData)">全选</el-button>
              </el-col>
              <el-col :span="1">
                <el-button  type="info" size="small" @click="toggleSelection()">取消</el-button>
              </el-col>
              <el-col :span="1">
                <el-button  type="success" size="small" @click="handleAddClick">添加</el-button>
              </el-col>
              <el-col :span="1">
                <el-button  type="danger" size="small" @click="handleDeleteClick">删除</el-button>
              </el-col>
          </el-row>
          
          <el-table
            ref="multipleTableRef"
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column label="日期" width="120">
              <template #default="{row}">
                <span style="color: #11999e;">{{row.date}}</span>
              </template>
            </el-table-column>
            <el-table-column property="name" label="姓名" width="120" />
            <el-table-column label="地址">
              <template #default="{row}">
                <span style="color: #08d9d6;">{{row.address}}</span>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" >
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