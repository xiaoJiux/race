<template>
<div id="nav">

  <van-tabbar route v-model="active" active-color="#77e0dc" inactive-color="#bdd1d4" >
    <van-tabbar-item replace  to="/" >
      <span>{{ tabbar[0].title }}</span>
      <template #icon="props">
        <img :src="props.active ? tabbar[0].active : tabbar[0].normal" alt="">
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace  to="/community">
      <span>{{ tabbar[1].title }}</span>
      <template #icon="props">
        <img  :src="props.active ? tabbar[1].active : tabbar[1].normal" alt="">
      </template>
    </van-tabbar-item>
    <van-tabbar-item
      class="showOut" push to="/shareTips">
      <div class="circle">
        <img src="../../public/navbar/+.png" alt="">
      </div>
    </van-tabbar-item>
    <van-tabbar-item replace  to="/study">
      <span>{{ tabbar[2].title }}</span>
      <template #icon="props">
        <img :src="props.active ? tabbar[2].active : tabbar[2].normal" alt="">
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace  to="/user">
      <span>{{ tabbar[3].title }}</span>
      <template #icon="props">
        <img :src="props.active ? tabbar[3].active : tabbar[3].normal" alt="">
      </template>
    </van-tabbar-item>

  </van-tabbar>
</div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      active: 0,
      tabbar:[
        {
        title: "首页",
        to:{
          name:'Home'
        },
        normal:require('../../public/navbar/home.png'),
        active:require('../../public/navbar/native_home.png'),
      },{
        title: "社区",
        to:{
          name:'community'
        },
        normal:require('../../public/navbar/community.png'),
        active:require('../../public/navbar/native_community.png'),
      },{
        title: "安全学堂",
        to:{
          name:'study'
        },
        normal:require('../../public/navbar/study.png'),
        active:require('../../public/navbar/native_study.png'),
      },{
        title: "我的",
        to:{
          name:'user'
        },
        normal:require('../../public/navbar/user.png'),
        active:require('../../public/navbar/native_user.png'),
      },]
    };
  },
}
</script>

<style scoped lang="less">
#nav{
  .van-tabbar{
    height: 65px;
    img{
      width:2.1rem;
      height:2.1rem;
    }

    .showOut{
      position: relative;
      min-height: 18vw;
      width:18vw;
      top: -40%;
      border-radius: 100%;
      z-index: 100;

      .circle{
        background: url("../../public/navbar/blue_circle.png") no-repeat center center;
        background-size: 23vw 23vw;
        padding: 13px;
        img {
          display:block;
          margin: 0 auto;
          width: 100%;
          height: 100%;
        }
      }
    }

  }

}
</style>