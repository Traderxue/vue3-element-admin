import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/index.vue"
import Login from "@/views/Login/index.vue"

import HomePage from "@/views/Home/components/homepage.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'',
        component:Login
      },
      {
        path:'/login',
        component:Login
      },
      {
        path:"/home",
        component:Home,
        children:[
          {
            path:'',
            component:HomePage
          },
          {
            path:'/homepage',
            component:HomePage
          },
          {
            path:"/user",
            component:()=>import("@/views/Home/components/user.vue")
          },
          {
            path:"/chart",
            component:()=>import("@/views/Home/components/chart.vue")
          },
          {
            path:"/menu",
            component:()=>import("@/views/Home/components/menu.vue")
          },
          {
            path:"/zixun",
            component:()=>import("@/views/Home/components/zixun.vue")
          },
          {
            path:"/author",
            component:()=>import("@/views/Home/components/author.vue")
          }
        ]
      }
    
  ]
})

export default router
