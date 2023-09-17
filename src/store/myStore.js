import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyStore = defineStore('mystore',()=>{
    const collapse = ref(false)

    return{
        collapse
    }
})