import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      showTabBar: true//在路由meta对象设置一个布尔值showTabBar
    }
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/views/Community'),
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/study',
    name: 'study',
    component: () => import('@/views/Study'),
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User'),
    meta: {
      showTabBar: true
    }
  },
  //贴子列表
  {
    path: '/ExperienceList',
    name: 'ExperienceList',
    component: () => import('@/views/community/Experience/ExperienceList'),
  },
  //贴子详情
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/community/ArticleDetails'),
    meta: {
      title: '贴子'
    }

  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('@/views/community/Activity'),
    meta: {
      title: '反诈行动'
    }
  },
  //活动详情
  {
    path: '/activity/:id',
    name: 'ActivityDetails',
    component: () => import('@/views/community/ActivityDetails'),
    meta: {
      title: '活动详情'
    }
  },
  //已报名活动页面路由
  {
    path: '/enterActivity',
    name: 'enterActivity',
    component: () => import('@/views/community/EnterActivity'),
    meta: {
      title: '我的活动'
    }
  },
  //已签到页面路由
  {
    path: '/signActivity',
    name: 'signActivity',
    component: () => import('@/views/community/SignActivity'),
    meta: {
      title: '已签到活动'
    }
  },
  //我的心得路由
  {
    path: '/MyExperience',
    name: 'MyExperience',
    component: () => import('@/views/user/experience/MyExperience')
  },
  {
    path: '/signIn',
    name: 'User_SignIn',
    component: () => import('@/views/community/User_SignIn'),
    meta: {
      title: '活动签到'
    }
  },
  {
    path: '/interactive',
    name: 'interactive',
    component: () => import('@/views/community/Interactive')
  },
  {
    // 聊天页面
    path: '/Chatroom',
    name: 'chatroom',
    component: () => import('@/views/community/Chatroom')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/activation',
    name: 'activation',
    component: () => import('@/views/Activation')
  },
  //二维码
  {
    path: '/QR-code',
    name: 'QR-code',
    component: () => import('@/views/home/Qrcode')
  },
  //电子书
  {
    path: '/bookshelf',
    name: 'bookshelf',
    component: () => import('@/views/home/Bookshelf')
  },
  //书本详情页
  {
    path: '/book',
    name: 'book',
    component: () => import('@/views/home/Book')
  },
  //短视频
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/home/Video')
  },
  //写贴子
  {
    path: '/writeArticle',
    name: 'WriteArticle',
    component: () => import('@/views/community/WriteArticle')
  },
  {
    path: '/issuanceActivity',
    name: 'IssuanceActivity',
    component: () => import('@/views/user/IssuanceActivity'),
    meta: {
      title: '发布活动'
    }
  },
  //活动审核
  {
    path: '/audit',
    name: 'Audit',
    component: () => import('@/views/community/Audit'),
    meta: {
      title: '活动审核'
    }
  },
  //活动审核详情页
  {
    path: '/audit/detail',
    name: 'AuditDetails',
    component: () => import('@/views/community/AuditDetails'),
    meta: {
      title: '审核'
    }
  },
  {
    path: '/stydtvideo',
    name: 'Stydtvideo',
    component: () => import('@/views/study/Stydtvideo'),
  },
  {
    path: '/newDetails',
    name: 'NewDetails',
    component: () => import('@/views/study/NewsDeatils'),
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});


export default router
