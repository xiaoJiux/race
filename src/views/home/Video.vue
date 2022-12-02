<template>
  <div class="video" style="height: 100%">
    <header style="width: 100vw;box-sizing: border-box;position: fixed;top: 0;z-index: 100">
      <div class="left-text">
        <router-link to="/study">主题</router-link>
        <router-link to="#">视频</router-link>
        <router-link to="/view">视觉探索</router-link>
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
      <van-swipe-item style="position:relative;" v-for="(item, index) in swiperList" :key="index">
        <div class="right_menus">
          <div class="menuClick">
            <van-image
              fit="cover"
              height="48px"
              round
              :src="item.userImg"
              width="48px"
            />
            <div class="follow"></div>
          </div>
          <div class="click-info">
            <svg @click="likeIT(item.id)" :class="'like'+item.id" class="icon" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"
                    fill-rule="evenodd"></path>
            </svg>
            <div class="text">{{ item.likeCOUNT }}</div>
          </div>
          <div class="click-info">
            <svg @click="saveIT(item.id)" :class="'save'+item.id" class="icon" height="36" viewBox="0 0 28 28" width="36" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"
                    fill-rule="evenodd"></path>
            </svg>
            <div class="text">{{ item.saveCOUNT }}</div>
          </div>
          <div class="click-info" @click="getChart(item.id)">
            <img @click="getChart(item.id)" src="../../assets/msg.png" alt="">
          </div>
        </div>
        <div class="text-container">
          <div class="nickname">@{{ item.userName }}· <span>{{ item.date }}</span></div>
          <div class="msg">{{ item.name }}</div>
        </div>
        <video
          :id="`player${index}`"
          :src="viedoList[index]"
          class="video-content"
          preload="none"
          muted
        ></video>
      </van-swipe-item>
    </van-swipe>
    <van-popup v-model="show" position="bottom" :style="{ height: '45%' }">
      <div id="Commentarea">
        <p class="van-hairline--bottom title">热门评论</p>
        <ul class="forum" ref="forum">
          <li v-for="(item,index) in chart" :key="index" class="van-hairline--bottom father-item">
            <div class="box-header">
              <div class="left">
                <van-image
                  fit="cover"
                  height="45px"
                  round
                  :src="item.userImg"
                  width="45px"
                />
                <div class="nameTime">
                  <p style="font-size: 16px">{{ item.userName }}</p>
                </div>
              </div>
            </div>
            <div class="box-content">
              <p class="content" style="font-size: 12px">{{item.say}}</p>
              <div class="child-header">
                <p class="time" style="font-size:10px;color: #cccccc">{{item.date?item.date.split(" ")[0]:''}}<span
                  style="margin-left: 15px;font-size: 10px;background-color:#eeeeee;padding: 2px 8px;color: #918f8f;border-radius: 15px;">回复</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div class="van-hairline--top input">
          <input v-model="say" class="" placeholder="电信诈骗手法高，提高警惕莫入套" type="text">
          <span :style="isNone?'color:rgba(64, 195, 239,.6)':'color:rgba(64, 195, 239)'" @click="sendMsg">发送</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>

import { mapState } from "vuex";
import { Toast } from "vant";
import { fmtTime } from "@/utils/getTime";

export default {
  name: "Video",
  data() {
    return {
      playing: false,
      data:null,
      swiperList: null,
      show:false,
      say: '',
      isNone: true,
      chart:null,
      index:0,
      viedoList:[require('../../assets/video/v01_ (3).mp4'),require('../../assets/video/v01_ (2) (1).mp4'),require('../../assets/video/v01_ (1).mp4')]
    };
  },
  computed:{...mapState(['userData'])},
  methods: {
    onChange(index) {
      this.index = index
      this.getChart(this.swiperList[index].id)
      let player = document.getElementById(`player${index}`);
      if (player.paused) {
        this.swiperList.forEach((item, s_index) => {
          if (s_index === index) {
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
      this.show = false
    },
    async likeIT(id){
      let {data} = await this.$axios({
        url:'/studyLike/save',
        method:'post',
        data:{
          "user" : this.userData.id,
          "study" : id,
          "likeType" : 1
        }
      })
      if(data.code === 0){
        Toast.success('点赞成功!')
        let elm = document.getElementsByClassName(`like${id}`)[0]
        elm.setAttribute('style', "fill:rgb(8, 198, 201)")
        await this.getVideo()
      }
    },
    async saveIT(id){
      let {data} = await this.$axios({
        url:'/studyLike/save',
        method:'post',
        data:{
          user : this.userData.id,
          study : id,
          likeType : 2
        }
      })
      if(data.code === 0){
        let elm = document.getElementsByClassName(`save${id}`)[0]
        elm.setAttribute('style', "fill:rgb(8, 198, 201)")
        Toast.success('收藏成功!')
        await this.getVideo()
      }
    },
    async getVideo(){
      let {data} = await this.$axios({
        url:'/tiktok/getAllUser',
        method:"get"
      })
     this.swiperList = data.data
    },
    async getChart(id){
      this.show = true

      let {data} = await this.$axios({
        url:'/tiktok/findByVisionSayVisionId',
        method:'post',
        params:{
          tiktokId:id
        }
      })
      this.chart = data.data
      if(data){
        this.$nextTick(() =>{
          let clientHeight = this.$refs.forum.clientHeight
          let scrollHeight = this.$refs.forum.scrollHeight
          this.$refs.forum.scrollTop = scrollHeight - clientHeight
        })
      }
    },
    async sendMsg(){
      let {data} = await this.$axios({
        url:'/studySay/save',
        method:'post',
        data:{
          say:this.say,
          date:fmtTime(),
          user:this.userData.id,
          study:this.swiperList[this.index].id
        }
      })
      if(data.code === 0)
      this.say = ''
      Toast.success('评论成功')
      await this.getChart(this.swiperList[this.index].id)
    },

  },
  async mounted(){
    await this.getVideo()
    setTimeout(() => {
      document.getElementById(`player0`).play();
    }, 1000);
  },
  watch: {
    say(value) {
      if (value !== '') {
        this.isNone = false
      }
    }
  }

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
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
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
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;

    }

    .right_menus {
      position: absolute;
      z-index: 100;
      box-sizing: border-box;
      bottom: 25vh;
      right: 8px;

      .menuClick {

        .userImg {
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
      bottom: 35px;
      box-sizing: border-box;
      padding-right: 60px;
      z-index: 100;

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
#Commentarea {
  padding: 10px 0;

  .title {
    margin: 10px 20px;
    padding-left: 15px;
    border-left: 4px solid rgb(0, 207, 197);
    color: rgb(95, 211, 188);
    font-weight: 600;
  }

  .forum {
    padding: 20px 0;
    margin: 0 20px;

    .father-item {
      margin: 0;
      padding: 0 0 20px;

      .box-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          display: flex;
          justify-content: space-between;


          .nameTime {
            margin-left: 15px;

            p {
              margin: 4px 0;
            }
          }
        }

      }

      .box-content {
        position: relative;
        top: -10px;

        .content {
          line-height: 18px;
        }

        .child-header {
          padding-left: 65px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0;

          .right-hot {
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
              font-size: 10px;
              padding: 0 6px;
            }
          }

          .time {
            font-size: 10px;
            margin: 0;
          }
        }

        .content {
          margin: 0;
          padding-left: 65px;
          font-size: 14px;
        }
      }

      .child-forum {
        margin-left: 65px;
        background-color: #eeeeee;
        border-radius: 8px;
        font-size: 12px;
        padding: 5px;
        li {
          line-height: 18px;

          .name {
            color: rgb(64, 195, 239);
          }
        }
      }
    }
  }

  .input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px 12px 10px;
    position: fixed;
    bottom: 0;
    width: 100vw;
    box-sizing: border-box;
    background-color: white;

    input {
      border: none;
      flex-grow: 1;
      font-size: 14px;
    }

    span {
      padding-left: 50px;
      font-size: 12px;
    }
  }

}
:deep(.van-popup){
  border-radius: 12px 12px 0 0;
}

</style>

