import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/index.vue"
import Login from "@/views/Login/index.vue"

import HomePage from "@/views/Home/components/homepage.vue"
import Order from "@/views/Home/components/order.vue"
import Goods from "@/views/Home/components/goods.vue"
import Chart from "@/views/Home/components/chart.vue"
import Userlist from "@/views/Home/components/userlist.vue"
import Actor from "@/views/Home/components/actor.vue"
import Settingenv from "@/views/Home/components/settingenv.vue"
import Settingset from "@/views/Home/components/settingset.vue"

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
            path:"/order",
            component:Order
          },
          {
            path:"/goods",
            component:Goods
          },
          {
            path:"/chart",
            component:Chart
          },
          {
            path:"/userlist",
            component:Userlist
          },
          {
            path:'/actor',
            component:Actor
          },
          {
            path:'/settingenv',
            component:Settingenv
          },
          {
            path:'/settingset',
            component:Settingset
          }
        ]
      }
    
  ]
})

export default router
