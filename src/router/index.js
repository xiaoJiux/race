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
      title:'首页',
      showTabBar: true//在路由meta对象设置一个布尔值showTabBar
    }
  },
  {
    path:'/community',
    name:'community',
    component:() =>import('@/views/Community'),
    meta: {
      showTabBar: true
    }
  },
  {
    path:'/study',
    name:'study',
    component:() =>import('@/views/Study'),
    meta: {
      showTabBar: true
    }
  },
  {
    path:'/user',
    name:'user',
    component:() =>import('@/views/User'),
    meta: {
      showTabBar: true
    }
  },
  {
    path:'/shareTips',
    name:'shareTips',
    component:() =>import('@/views/ShareTips')
  },
  {
    path:'/article',
    name:'article',
    component:() =>import('@/views/community/Article'),
    meta: {
      title: '贴子'
    }

  },
  //贴子详情
  {
    path:'/article/:id',
    name:'postPage',
    component:() =>import('@/components/activity/PostPage')
  },
  {
    path:'/activity',
    name:'activity',
    component:() =>import('@/views/community/Activity'),
    meta: {
      title: '反诈行动'
    }
  },
  {
    path:'/signIn',
    name:'User_SignIn',
    component:() =>import('@/views/community/User_SignIn'),
    meta: {
      title:'活动签到'
    }
  },
  {
    path: '/interactive',
    name:'interactive',
    component: () => import('@/views/community/Interactive')
  },
  {
    // 聊天页面
    path:'/Chatroom',
    name:'chatroom',
    component:() =>  import('@/views/community/Chatroom')
  },
  //举报分享
  {
    path:'/shareReport',
    name:'shareReport',
    component: () => import('@/views/community/ShareReport'),
    meta: {
      title: '举报分享'
    }
  },
  // 反诈案例
  {
    path:'/case',
    name:'case',
    component:() => import('@/views/study/Anti-fraud-case')
  },
  {
    path:'/case/:id',
    name:'caseDetail',
    component:() => import('@/views/study/CaseDetail')
  },
  //身边故事
  {
    path: '/story',
    name:'story',
    component:() => import('@/views/study/Story'),
    meta: {
      title: '身边故事'
    }
  },
  //资讯
  {
    path:'/news',
    name:'news',
    component: () => import('@/views/study/News'),
    meta: {
      title: '资讯'
    }
  }

]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});


export default router
