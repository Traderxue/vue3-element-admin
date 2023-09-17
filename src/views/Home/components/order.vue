<script setup>
import { Search,Plus,Printer,FolderAdd,Edit,Delete } from '@element-plus/icons-vue'
import {onMounted, reactive, ref} from "vue"
import {useMyStore} from "@/store/myStore.js"

const page = reactive({
          // 总数据
          tableData:[],
           // 默认显示第几页
           currentPage:1,
           // 总条数，根据接口获取数据长度(注意：这里不能为空)
           totalCount:1,
           // 个数选择器（可修改）
           pageSizes:[1,2,3,4],
           // 默认每页显示的条数（可修改）
           PageSize:1,
})

const myStore = useMyStore()
const input = ref('')

const getTableData = () => {
  const startIndex = (page.currentPage - 1) * page.PageSize;
  const endIndex = startIndex + page.PageSize;
  page.tableData = myStore.tableData.slice(startIndex, endIndex);
};

onMounted(()=>{
  page.totalCount = myStore.tableData.length
  getTableData()
})

const handleSizeChange = (val) => {
  page.PageSize = val;
  page.currentPage = 1; // Reset current page to 1 when changing page size
  getTableData();
};

const handleCurrentChange = (val) => {
  page.currentPage = val;
  getTableData()
};


</script>

<template>
    <el-card>
      <el-row  :gutter="10">
      <el-col :span="5">
            <el-button type="primary" :icon="Plus">新增</el-button>
            <el-button type="primary" :icon="Printer">导出</el-button>
            <el-button type="primary" :icon="FolderAdd">导入</el-button>
      </el-col>
      <el-col :span="6">
          <el-input
        v-model="input"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
      </el-col>
    </el-row>
        <el-table :data="page.tableData"
        style="width: 100%"
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
                    <el-button type="warning" :icon="Edit" size="small"></el-button>
                    <el-button type="danger" :icon="Delete" size="small"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
      v-model:current-page="page.currentPage"
      v-model:page-size="page.PageSize"
      :page-sizes="page.pageSizes"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.totalCount"
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