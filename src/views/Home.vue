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
      <div class="big-btn">
        <div class="item">
          <div class="">
            <p class="title">今日推荐</p>
            <p class="introduce">每天都有新资讯</p>
          </div>
          <van-image
            style="margin-right: 8px"
            width="25%"
            height="80%"
            fit="cover"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="item">
          <div class="">
            <p class="title">数据观天下</p>
            <p class="introduce">让诈骗更直观</p>
          </div>
          <van-image
            style="margin-right: 8px"
            width="25%"
            height="80%"
            fit="cover"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
      </div>
      <!--      四小块-->
      <div class="btn-list">
        <div class="btn-item">
          <img src="../../public/home/qrcode.png" @click="$router.push({
        path: '/activity'
        })">
          <p>反诈行动</p>
        </div>
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
        <div class="btn-item" @click="$router.push({path:'/'})">
          <img src="../../public/home/qrcode.png">
          <p>热门资讯</p>
        </div>
        <div class="btn-item">
          <img src="../../public/home/qrcode.png">
          <p>反骗码</p>
        </div>
      </div>
    </header>
    <div class="body">

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
  background-color: rgba(247,248,250);
  header {
    background-image: linear-gradient(20deg, white 35%,  rgba(199,210,249,.8) 72%, rgba(231,235,251));
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-bottom: 15px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 26px;
      padding: 10px 15px;
      color: black;
      font-weight: 600;

      .van-icon {
        padding-left: 15px;
      }
    }
    .big-btn{
      display: flex;
      justify-content: space-around;
      padding: 15px;
      .item{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: white;
        padding: 5px 0;
        border-radius: 18px;
        &:nth-child(1){
          margin-right: 10px;
        }
        p{
          margin: 10px;
        }
        .title {
          font-size: 16px;
          font-weight: 600;
        }
        .introduce{
          font-size: 10px;
        }
      }
    }
    .btn-list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 15px 20px;

      .btn-item {
        width: 20%;
        text-align: center;
        padding: 10px 8px;
        box-sizing: border-box;
        border-radius: 15px;

        p {
          margin: 0;
          font-size: 10px;
          text-align: center;
        }

        img {
          background-color: white;
          padding: 6px;
          width: 10vw;
          border-radius: 20px;
        }
      }
    }

  }

  .body {
    position: relative;

  }

  .live-team {
    padding: 5vh 20px;

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
