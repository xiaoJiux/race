<template>
  <div id="home">
    <header>
      <div class="top">
        <p style="margin: 0;">Logo</p>
        <div class="right">
          <van-icon name="search"/>
          <van-icon dot name="envelop-o"/>
        </div>
      </div>
      <div class="h-body">
        <div class="left">
          <p class="zc-title">入反诈专场</p>
          <p class="zc-learn">学反诈知识
            <span class="zc-coll">合集</span>
          </p>
          <p class="zc-aim">明理</p>
        </div>
        <div class="right" style="transform: rotate(15deg);padding-right: 15px">
          <img src="../../public/home/R-C.jpg" style="width: 28vw;border-radius: 15px;opacity: .7;">
        </div>
      </div>
      <div class="search_header">
        <van-icon name="search" size="22"/>
        <input placeholder="Search" style="background-color: transparent;border: none" type="text"/>
        <van-icon name="scan" size="22"/>
      </div>
    </header>
    <div class="body">
      <!--      四小块-->
      <div class="btn-list">
        <div class="btn-item" @click="$router.push({
        path: '/QR-code'
        })">
          <img src="../../public/home/qrcode.png">
          <p>反骗码</p>
        </div>
        <div class="btn-item" @click="$router.push({path:'/bookshelf'})">
          <img src="../../public/home/qrcode.png">
          <p>电子书</p>
        </div>
        <div class="btn-item" @click="$router.push({path:'/bookshelf'})">
          <img src="../../public/home/qrcode.png">
          <p>VR参观</p>
        </div>
        <div class="btn-item">
          <img src="../../public/home/qrcode.png">
          <p>反骗码</p>
        </div>
      </div>
    </div>
    <div class="live-team">
      <div class="live-team-title">
        <span class="title">视频学习</span>
        <span class="more">查看更多</span>
      </div>
      <div class="item">
        <div class="item-box">
          <div class="child-item">
            <div>
              <img alt="" src="../../public/home/R-C.jpg">

            </div>
            <p class="video-title">反诈视频</p>
            <p class="author">张三</p>
          </div>
          <div class="child-item">
            <div>
              <img alt="" src="../../public/home/R-C.jpg">
            </div>
            <p class="video-title">反诈视频</p>
            <p class="author">张三</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import PopUp from "@/components/Pop-up";

export default {
  name: "Home",
  components: {PopUp},
  data(){
    return {
    }
  },
  created(){
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
#home {
  position: relative;
  height: 100vh;

  header {
    //height: 35vh;
    //background-color: rgb(164, 232, 230);
    background-image: linear-gradient(rgb(123, 229, 225), rgb(164, 232, 230));
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom 0;
    border-bottom-left-radius: 60px;
    padding-bottom: 20px;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 26px;
      padding: 10px 15px;
      color: white;
      font-weight: 600;

      .van-icon {
        padding-left: 15px;
      }
    }

    .h-body {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;

      p {
        margin: 5px 0;
        //color: black;
        letter-spacing: 0.2rem;
        font-size: 1.5rem;
        background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-background-size: 200% 100%;
        -webkit-animation: maskedAnimation 4s infinite linear;

      }

      @keyframes maskedAnimation {
        0% {
          background-position: 0 0;
        }

        100% {
          background-position: -100% 0;
        }
      }

      .zc-title {
        font-size: 14px;
      }

      .zc-learn {
        font-size: 28px;
        font-weight: 600;
        padding: 10px 0;

        .zc-coll {
          display: block;
        }
      }

      .zc-aim {
        font-size: 14px;
      }
    }

    &::after {
      background-color: #efefef;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }

    .search_header {
      background-color: white;
      margin: 20px;
      padding: 10px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      max-width: 100vw;
      border-radius: 12px;

      input {
        padding-left: 10px;
        max-width: 60vw;
        //flex-grow: 1;
      }
    }
  }

  .body {
    position: relative;
    border-top-right-radius: 60px;
    background-color: #efefef;

    &::after {
      //background-color: rgb(119,224,220);
      background-image: linear-gradient(rgb(164, 232, 230), rgb(179, 236, 234));
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }

    .btn-list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px 15px;

      .btn-item {
        width: 22%;
        margin: 0 6px;
        text-align: center;
        background-color: white;
        padding: 10px 8px;
        box-sizing: border-box;
        border-radius: 15px;

        p {
          margin: 0;
          font-size: 12px;
        }

        img {
          width: 12vw;
        }
      }
    }
  }

  .live-team {
    padding: 5px 20px;


    .live-team-title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 18px;
        font-weight: 600;
      }

      .more {
        font-size: 12px;
        color: #646464;
      }
    }
    .item{
      max-width: 100vw;

      overflow-x: scroll;
      overflow-y: hidden;
      &::-webkit-scrollbar{
        display: none;
      }
      .item-box {
        margin: 15px 0;
        display: flex;
        width: 200vw;

        .child-item{
          margin-right: 15px;
          img{
            width: 30vw;
            border-radius: 18px;
          }
          p{
            margin: 5px 0;
            padding-left: 5px;
            font-size: 12px;
          }
        }
      }
    }

  }
}
</style>
