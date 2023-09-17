<script setup>
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
const handleSizeChange=()=>{

}
const handleCurrentChange=()=>{

}
</script>

<template>
    <el-card>
        <div class="nav">
            <el-button type="primary">+新增</el-button>
            <el-button type="primary">导出</el-button>
            <el-input></el-input>
        </div>
        <el-table :data="tableData" style="width: 100%"
        border stripe>
            <el-table-column type="index" label="序号" />
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="address" label="Address" />
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="address" label="Address" />
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="address" label="Address" />
            <el-table-column  label="操作" >
                <template #default>
                    <el-button type="primary">删除</el-button>
                    <el-button type="primary">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    </el-card>
</template>

<style lang="scss" scoped>
.el-table{
    margin: 20px 0px;
}
</style>