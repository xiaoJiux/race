<template>
  <div id="nav">

    <van-tabbar v-model="active" active-color="#77e0dc" inactive-color="rgb(171,171,171)" route>
      <van-tabbar-item replace to="/">
        <span>{{ tabbar[0].title }}</span>
        <template #icon="props">
          <img :src="props.active ? tabbar[0].active : tabbar[0].normal" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/community">
        <span>{{ tabbar[1].title }}</span>
        <template #icon="props">
          <img :src="props.active ? tabbar[1].active : tabbar[1].normal" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item
        class="showOut" @click="show = true">
        <div class="circle">
          <img alt="" src="../../public/navbar/add.png" style="">
        </div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/study">
        <span>{{ tabbar[2].title }}</span>
        <template #icon="props">
          <img :src="props.active ? tabbar[2].active : tabbar[2].normal" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/user">
        <span>{{ tabbar[3].title }}</span>
        <template #icon="props">
          <img :src="props.active ? tabbar[3].active : tabbar[3].normal" alt="">
        </template>
      </van-tabbar-item>

    </van-tabbar>
    <van-overlay :show="show">
      <div class="wrapper">
        <div class="block" @click.stop>
          <div class="time">
            <p class="time">{{ month }}-{{ day }} <span>{{ week }}</span></p>
            <p class="hint">记录下生活点滴</p>
          </div>
          <ul class="item">
            <li>
              <div class="icon" @click="$router.push({
              path:'/writeArticle'
              })">
                <van-icon name="edit" size="28"/>
              </div>
              <p>贴子</p>
            </li>
            <li>
              <div class="icon">
                <van-icon name="edit" size="28"/>
              </div>
              <p>笔记</p>
            </li>
            <li>
              <div class="icon">
                <van-icon name="edit" size="28"/>
              </div>
              <p>文章</p>
            </li>
            <li>
              <div class="icon">
                <van-icon name="edit" size="28"/>
              </div>
              <p>文章</p>
            </li>
            <li>
              <div class="icon">
                <van-icon name="edit" size="28"/>
              </div>
              <p>文章</p>
            </li>

          </ul>
          <div class="close" @click="show = false">
            <div>
              <van-icon color="#ffffff" name="cross" size="24"/>
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import {getTime} from "@/utils/getTime";

export default {
  name: "Navbar",
  data() {
    return {
      show: false,
      active: 0,
      month: '',//月
      day: '',//日
      week: '',//周
      tabbar: [
        {
          title: "首页",
          to: {
            name: 'Home'
          },
          normal: require('../../public/navbar/home.png'),
          active: require('../../public/navbar/native_home.png'),
        }, {
          title: "社区",
          to: {
            name: 'community'
          },
          normal: require('../../public/navbar/community.png'),
          active: require('../../public/navbar/native_community.png'),
        }, {
          title: "安全学堂",
          to: {
            name: 'study'
          },
          normal: require('../../public/navbar/study.png'),
          active: require('../../public/navbar/native_study.png'),
        }, {
          title: "我的",
          to: {
            name: 'user'
          },
          normal: require('../../public/navbar/user.png'),
          active: require('../../public/navbar/native_user.png'),
        },]
    };
  },
  methods: {},
  mounted() {
    let date = getTime()
    console.log (date)
    // date.day < 10 ? this.day = "0" + date.day : this.day = date.day
    // date.month < 10 ? this.month = "0" + date.month : this.day = date.month
    this.week = date.Week
    this.month = date.month
    this.day = date.day
  },
  created() {

  }
}
</script>

<style lang="less" scoped>
:deep(.van-overlay){
  z-index: 1000;
}
#nav {
  :deep(.van-hairline--top-bottom){
    z-index: 200;
  }
  .van-tabbar {
    height: 65px;
    background-size: 105vw 185px;
    background: url("../../public/navbar/bottom-img.png") no-repeat center;

    .circle {
      border-radius: 100%;

      img {
        width: 16vw;
        height: 16vw;
        position: relative;
        top: -20px;
        padding: 5px;
        border-radius: 50% !important;
        overflow: hidden;
        display: block;
        background-color: white;
        z-index: 100;
        border-top: 2px solid #eeeeee;
      }
    }

  }

  &:deep(.van-overlay) {
    background-color: rgba(150,150,150,.55);
    backdrop-filter: blur(5px);
  }

  .wrapper {
    height: 100vh;
    padding: 10vh 12vw;
  }

  .block {

    .time {
      .time {
        font-size: 42px;
        font-weight: 600;
        margin-bottom: 0;

        span {
          font-size: 18px;
        }
      }

      .hint {
        margin-top: 5px;
      }
    }

    .item {
      margin-top: 20vh;
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      li {
        width: 33%;
        text-align: center;

        .icon {
          background-color: white;
          border-radius: 50%;
          width: 15vw;
          height: 15vw;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        p {
          margin: 5px 0;
        }
      }
    }

    .close {
      margin-top: 16vh;
      text-align: center;

      div {
        background-color: rgba(74, 74, 74);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 15vw;
        height: 15vw;
        border-radius: 50%;
      }
    }
  }
}
</style>
