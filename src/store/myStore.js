import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyStore = defineStore('mystore',()=>{
    const collapse = ref(false)

    const tableData = [
        {
          date: '2016-05-03',
          name: 'Tom1',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom2',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom3',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom4',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-03',
          name: 'Tom1',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom2',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom3',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom4',
          address: 'No. 189, Grove St, Los Angeles',
        },
    ]

    const userData = [
      {
        username:"张三",
        address:"北京",
        actor:"普通用户"
      },
      {
        username:"张三",
        address:"北京",
        actor:"普通用户"
      },
      {
        username:"张三",
        address:"北京",
        actor:"普通用户"
      }
    ]

    return{
        collapse,
        tableData,
        userData
    }
})