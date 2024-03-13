import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/stores/user.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/closed',
      name: 'closed',
      component: () => import('../views/ClosedView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/SoftwareDetail.vue')
    },
    {
      path: '/device_show',
      name: 'device_show', 
      component: () => import('../views/console/device/DeviceShow.vue')
    },
    {
      path: '/console',
      name: 'console',
      meta:{
        auth: true
      },
      component: () => import('../views/console/ConsoleView.vue'),
      children: [
        
        {
          path: '/console/devices',
          name: 'devices',
          meta:{
            auth: true
          },
          component: () => import('../views/console/device/DevicesView.vue')
        },
        {
          path: '/console/device_datas',
          name: 'device_data',
          meta:{
            auth: true
          },
          component: () => import('../views/console/device/DevicesDetail.vue')
        },
        {
          path: '/console/dashboard',
          name: 'dashboard',
          meta:{
            auth: true
          },
          component: () => import('../views/console/DashBoard.vue')
        },
        {
          path: '/console/software',
          name: 'software',
          meta:{
            auth: true
          },
          component: () => import('../views/console/software/SoftwareManage.vue'),
        },
        {
          path: '/console/software/upload',
          name: 'upload',
          meta:{
            auth: true
          },
          component: () => import('../views/console/software/SoftwareUpload.vue')
        },
        {
          path: '/console/software/change',
          name:'change',
          meta:{
            auth: true
          },
          component: () => import('../views/console/software/SoftwareChange.vue')
        },
        {
          path: '/console/setting',
          name: 'setting',
          meta:{
            auth: true
          },
          component: () => import('../views/console/setting/SystemView.vue')
        },
        {
          path: '/console/software/article',
          name: 'article',
          meta:{
            auth: true
          },
          component: () => import('../views/console/software/SoftwareArticle.vue')
        }
      ]  
    }

  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.auth) {
//     // 判断用户是否登录
//     const userStore = useUserStore();
//     if (userStore.token) {
//       next();
//     }else {
//       // 如果没登录，推到首页， 这里正常是推到登录页面，但是这是单用户后台，尽量隐藏后台登录页
//       router.replace("/")
//     }
//   // }
//   }else {
//     // 否则直接通行
//     next();
//   }
// })

export default router
