<template>
  <div class="video">
    <header style="width: 100vw;box-sizing: border-box;position: fixed;top: 0;z-index: 100">
      <div class="left-text">
        <router-link to="/study">主题</router-link>
        <router-link to="#">视频</router-link>
        <router-link to="#">心理测试</router-link>
      </div>
      <div class="right-input">
        <input type="text">
        <van-icon color="#cccccc" name="search" size="18" style="padding-right: 5px"/>
      </div>
    </header>
    <van-swipe
      :loop="false"
      :show-indicators="false"
      class="my-swipe"
      indicator-color="white"
      style="height: 100vh"
      vertical
      @change="onChange"
    >
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <div class="right_menus">
          <div class="menuClick">
            <van-image
              fit="cover"
              height="48px"
              round
              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
              width="48px"
            />
            <div class="follow"></div>
          </div>
          <div class="click-info">
            <svg class="icon" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"
                    fill-rule="evenodd"></path>
            </svg>
            <div class="text">{{ item.fabulousNum }}</div>
          </div>
          <div class="click-info">
            <svg class="icon" height="36" viewBox="0 0 28 28" width="36" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"
                    fill-rule="evenodd"></path>
            </svg>
            <div class="text">{{ item.commentNum }}</div>
          </div>
          <div class="click-info">
            <svg class="icon" height="36" viewBox="0 0 28 28" width="36" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z"></path>
            </svg>
            <div class="text">{{ item.shareNum }}</div>
          </div>
        </div>
        <div class="text-container">
          <div class="nickname">@{{ item.nickname }}· <span>{{ '2022年8月26日' }}</span></div>
          <div class="msg">{{ item.msgInfo }}</div>
        </div>
        <video
          :id="`player${index}`"
          :src="item.url"
          class="video-content"
          muted
        ></video>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>

export default {
  name: "Video",
  data() {
    return {
      playing: false,
      swiperList: [
        {
          avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',//作者头像
          fabulousNum: "1234W",//点赞数
          commentNum: "3.2W",//收藏
          shareNum: "1.2W",//分享数目
          nickname: "我是大憨批",//作者名字
          play: true,//播放(默认false)
          url: "https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4",//视频地址
          msgInfo:
            "这是留言这是留言这是留言这是留言这是留言这是留言这是留言这是留言",//关于视频介绍
        },
        {
          avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
          fabulousNum: "558W",
          commentNum: "16.2W",
          shareNum: "12.2W",
          nickname: "liqin是个Der",
          play: false,
          url: "https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4",
          msgInfo:
            "这是留言这是留言这是留言这是留言这是留言这是留言这是留言这是留言",
        },
        {
          avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
          fabulousNum: "3345W",
          commentNum: "122W",
          shareNum: "62W",
          nickname: "Hello Nick",
          play: false,
          url: "https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4",
          msgInfo:
            "这是留言这是留言这是留言这是留言这是留言这是留言这是留言这是留言",
        },
        {
          avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
          fabulousNum: "6889W",
          commentNum: "163W",
          shareNum: "107W",
          nickname: "憨憨来啦",
          play: false,
          url: "https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4",
          msgInfo:
            "这是留言这是留言这是留言这是留言这是留言这是留言这是留言这是留言",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      document.getElementById(`player0`).play();
    }, 1000);

  },
  methods: {
    onChange(index) {
      console.log(index);
      var player = document.getElementById(`player${index}`);
      if (player.paused) {
        this.swiperList.forEach((item, s_index) => {
          if (s_index == index) {
            document.getElementById(`player${s_index}`).play();
            item.play = true;
          } else {
            document.getElementById(`player${s_index}`).pause();
            item.play = false;
          }
        });
      } else {
        this.swiperList.forEach((item, s_index) => {
          document.getElementById(`player${s_index}`).pause();
          item.play = false;
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>

header {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  .right-input {
    max-width: 30vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 4px;
    border-radius: 8px;

    input {
      max-width: 80%;
      height: 14px;
      background-color: transparent;
      border: none;
    }
  }

  .left-text {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: white;
      font-size: 14px;
      padding: 8px 0 0;

      &:nth-child(2) {
        padding: 0;
        margin: 0 20px;
        font-size: 20px;
        font-weight: 600;
        border-bottom: 1px solid white;
      }
    }
  }

}

.video {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  //background-image: linear-gradient(to bottom, #000000, #000000);
  .my-swipe .van-swipe-item {
    color: #fff;
    text-align: center;
    position: relative;

    .video-content {
      width: 100vw;
      position: absolute;
      left: 0;
      top: 30%;
    }

    .right_menus {
      position: absolute;
      z-index: 100;
      box-sizing: border-box;
      bottom: 25vh;
      right: 8px;

      .menuClick {

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 100%;
          margin: 0 auto 15px;
          border: #fff 0.02rem solid;
        }
      }

      .click-info {
        margin: 18px 0;

        img {
          width: 36px;
          height: 36px;
        }

        .icon {
          fill: #fff;
        }

        .text {
          font-size: 8px;
        }
      }
    }

    .text-container {
      position: absolute;
      left: 20px;
      bottom: 20px;
      box-sizing: border-box;
      padding-right: 60px;

      .nickname {
        font-size: 16px;
        text-align: left;
        margin-bottom: 24px;

        span {
          font-size: 14px;
        }
      }

      .msg {
        font-size: 12px;
        position: relative;
        box-sizing: border-box;
        text-align: left;
      }
    }
  }
}
</style>

