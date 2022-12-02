<template>
  <div id="home">
    <header>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in headerImg" :key="index">
          <van-image
            height="25vh"
            width="100vw"
            fit="cover"
            :src="item"
          />
        </van-swipe-item>
      </van-swipe>
      <img src="../assets/home/hotA.png" @click="$router.push({
      path:'/activity'
      })" alt="">
    </header>
    <div class="body" style="padding: 10px;margin-top: 50px;padding-bottom: 100px">
      <!--24小时反诈中心-->
      <div class="tf-hour">
        <p class="titleA">24小时安全中心</p>
        <ul class="content">
          <li @click="show1=true">
            <div class="icon" style="background-image: linear-gradient(to right,rgba(239,170,81),rgba(235,142,40))">
              <img src="../assets/home/phone.png" alt="">
            </div>
            <p>校园110热线</p>
          </li>
          <li>
            <div class="icon" style="background-image: linear-gradient(to right,rgba(87,178,229),rgba(78,155,203))">
              <img src="../assets/home/robot.png" alt="" @click="$router.push({
              path:'/reboot'
              })">
            </div>
            <p>安全小助手</p>
          </li>
          <li @click="show2=true">
            <div class="icon" style="background-image: linear-gradient(to right,rgba(120,95,148),rgba(103,75,149))">
              <img src="../assets/home/people.png" alt="">
            </div>
            <p>思政热线</p>
          </li>
        </ul>
        <p class="titleA">今日头条</p>
        <div class="other-box">
          <div v-for="(item,index) in hotList" v-if="hotList" class="kuan" :key="index">
            <div class="kuan-1">
              <div class="kuan-nei" @click="$router.push({
              path:'/NewDetails2',
              query:{
                id:item.id
              }
              })">
                <img alt="" :src="item.img">
                <div class="vv">{{ item.name }}<span>{{item.date? item.date.split (' ')[0]:'' }}</span></div>
                <!--              点赞分享-->
                <home-page @onLike="like" @click.stop :chatData="item"></home-page>
                <!--              点赞分享-->
              </div>
              <div style="padding-bottom: 20px; background-color: white">
                &nbsp
                <div>&nbsp</div>
                <div>&nbsp</div>
              </div>
            </div>
          </div>
          <span class="see-more" @click="$router.push({
          path:'/hot'
          })">查看更多</span>
        </div>
        <p class="titleA">热门活动</p>
        <div class="other-box" v-if="list">
          <div  v-for="(item,index) in list" :key="index" class="van-hairline--bottom item" @click="$router.push({
            name:'ActivityDetails',
            params: {
              id:item.id
            }
            })">
            <van-image
              :src="item.img"
              fit="cover"
              height="25vh"
              width="100%"
            />
            <p class="title" style="border-left: 6px solid rgb(3,204,198);padding-left: 3px">{{ item.name }}</p>
            <p style="font-size: 10px;color: #cccccc">
              <span style="margin-right: 12vw;padding-left: 9px">地区 ：{{ item.location.split('区')[0] + '区' }}</span>
              <span>人数 ：{{ item.nowNum }}/{{ item.needNum }}人</span>
            </p>
          </div>
          <span class="see-more" @click="$router.push({
          path:'/activity'
          })">查看更多</span>
        </div>
        <p class="titleA">反诈之星</p>
        <div class="other-box">
          <div class="bg-box">
            <div class="sm-box"></div>
            <ul class="content-box" v-if="topThree">
              <li  style="width: 28%;height: 60%;">
                <van-image
                  width="45px"
                  radius="50%"
                  :src="topThree[1].userImg"
                />
                <p class="name">{{topThree[1].userName}}</p>
                <p class="academy">{{topThree[1].userInstitute}}</p>
                <p class="point">{{topThree[1].sumNumber}}</p>
                <img class="jiang" src="../assets/home/third.png" alt="">
              </li>
              <li style="width: 35%;height: 18vh;">
                <van-image
                  width="60px"
                  radius="50%"
                  :src="topThree[0].userImg"
                />
                <div style="height: 10%;"></div>
                <p class="name">{{topThree[0].userName}}</p>
                <p class="academy">{{topThree[0].userInstitute}}</p>
                <p class="point">{{topThree[0].sumNumber}}</p>
                <img class="jiang" src="../assets/home/first.png" alt="">
              </li>
              <li style="width: 28%;height: 60%;">
                <van-image
                  width="45px"
                  radius="50%"
                  :src="topThree[2].userImg"
                />
                <p class="name">{{topThree[2].userName}}</p>
                <p class="academy">{{topThree[2].userInstitute}}</p>
                <p class="point">{{topThree[2].sumNumber}}</p>
                <img class="jiang" src="../assets/home/second.png" alt="">
              </li>

            </ul>
          </div>
        </div>
        <p class="titleA">二级学院活跃排行榜</p>
        <div class="other-box">
          <ul class="second-xy" v-if="topT">
            <li style="margin-top: 65px">
              <div class="img">
                <van-image
                  radius="50%"
                  :src="topT[1].instituteImg"
                  width="65px"
                />
              </div>
              <span style="background:rgba(236,236,236);">2</span>
              <p style="font-size: 10px;text-align: center;margin-top: 5px;">{{topT[1].userInstitute}}</p>
            </li>
            <li style="margin-top: 15px;">
              <div class="img" >
                <van-image
                  :src="topT[0].instituteImg"
                  width="65px"
                  radius="50%"
                />
                <img  src="../assets/home/hg.png" alt="">
              </div>
              <span style="background:rgba(254,253,4);">1</span>
              <p style="font-size: 10px;text-align: center;margin-top: 5px;">{{topT[0].userInstitute}}</p>

            </li>
            <li style="margin-top: 65px">
              <div class="img">
                <van-image
                  radius="50%"
                  :src="topT[1].instituteImg"
                  width="65px"
                />
              </div>
              <span style="background:rgba(192,150,109);">3</span>
              <p style="font-size: 10px;text-align: center;margin-top: 5px;">{{topT[2].userInstitute}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <van-popup v-model="show2" position="bottom">
      <div class="btn" @click="callPhone1">
        <van-icon color="rgb(147,147,147)" size="26" name="phone" />
        联系值班老师
      </div>
      <div class="btn" style="margin-bottom: 20px" @click="show1=false">
        取消
      </div>
    </van-popup>
    <van-popup v-model="show1" position="bottom">
      <div class="btn" @click="callPhone2">
        <van-icon color="rgb(147,147,147)" size="26" name="phone" />
        校园110热线
      </div>
      <div class="btn" style="margin-bottom: 20px" @click="show2=false">
        取消
      </div>
    </van-popup>
  </div>
</template>

<script>

import HomePage from "@/components/home_page";
import { mapState } from "vuex";
import { joinHotLike } from "@/utils/joinHotLike";
import { Toast } from "vant";

export default {
  name: "Home",
  components: { HomePage },
  computed:{...mapState(["userData"])},
  data(){
    return {
      headerImg:[require('../assets/home/1.png'),require('../assets/home/2.png'),require('../assets/home/3.png'),],
      hotList: null,
      list:null,
      topThree:null,//前三
      topT:null,//前三学院
      show1:false,
      show2:false
    }
  },
  methods:{
    async getRecommendList () {
      let { data } = await this.$axios ({
        method: "get",
        url: "/headlines/getAllUser"
      })
      this.hotList = []
      this.hotList.push(data.data[0])
    },
    async like(val){
      await joinHotLike(this.userData.id,val.id,1)
      await this.getRecommendList()
    },
    async getActivity(){
      let {data} = await this.$axios({
        methods: 'GET',
        url: '/activity/getAllUser'
      })
      if (data.code === 20000) {
        this.list = []
        this.list.push(data.data[0])
      } else {
        Toast.fail('对不起,系统出错了!!!')
      }
    },
    async getTopThree(){
      let {data} = await this.$axios({
        url:'/points/getAllSumPointsLimit3',
        method:'get'
      })
      this.topThree = data.data
    },
    async getT(){
      let {data} = await this.$axios({
        url:'/points/getAllSumPointsInsLimit3',
        method:'get'
      })
      this.topT = data.data
    },
    //拨打电话
    callPhone1() {
      window.location.href = 'tel://' + '12345678912'
    },
    callPhone2() {
      window.location.href = 'tel://' + '13185028196'
    },
  },
  async mounted() {
    await this.getRecommendList()
    await this.getActivity()
    await this.getTopThree()
    await this.getT()
  }
}
</script>

<style lang="less" scoped>
#home {
header{
  position: relative;
  img{
    position: absolute;
    width: 84vw;
    z-index: 100;
    bottom: -30px;
    display: inline-block;
    left: 8vw;
    border-radius: 12px;
  }
}
.tf-hour{
  .titleA{
    border-left: 4px solid rgba(1,199,202);
    padding-left: 5px;
    font-weight: 600;
    font-size: 20px;
    color: rgba(0,223,184);
    margin-bottom: 0;
  }
  .content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 15px;
    li{
      .icon{
        width: 60px;
        height: 60px;
        padding: 3px;
        border-radius: 25px;
        text-align: center;
        margin: 0 auto;
        img{
          margin-top: 10%;
          width: 80%;
          height: 80%;
        }
      }
      p{
        font-size: 14px;
        text-align: center;
      }
    }
  }
  .other-box{
    margin-top: 15px;
    .kuan {
      margin: 20px 15px 0px 15px;
      padding: 10px 10px 15px 40px;
      background-color: rgba(96, 217, 212, 0.3);
      //height: 200px;
      .kuan-1 {
        padding-top: 15px;
        background: linear-gradient(to left, #12bbd1, #00cfc2, #1ad5b7);
      }

      .kuan-nei {
        width: 105%;
        margin: 0px 0px -75px -27px;
        font-size: 14px;
        color: #a8a4a4;
        background-color: white;

        img {
          width: 100%;
          height: 80%;
        }

        .vv {
          padding: 8px 10px;
          align-items: center;
          display: flex;
          justify-content: space-between;
          background-color: white
        }
      }
    }
    .see-more{
      font-size: 10px;
      color: #989696;
      float: right;
      margin-right: 15px;
      margin-top: 3px;
    }
    .bg-box{
      height: 26vh;
      margin: 0 auto;
      width: 90vw;
      background-color: rgba(202,243,245);
      padding: 15px 30px 0 30px;
      position: relative;
      box-sizing: border-box;
      .sm-box{
        width: 100%;
        height: 100%;
        background-color: rgba(105,223,227);
      }
      .content-box{
        z-index: 100;
        position: absolute;
        width: 100%;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
          position: relative;
          background-color: white;
          border-radius: 8px;
          text-align: center;
          padding-top: 25px;
          p{
            margin: 0;
          }
          .name{
            font-size: 14px;
            font-weight: 600;
          }
          .academy{
            font-size: 10px;
            color: #cccccc;
          }
          .point{
            color: red;
            font-weight: 600;
          }
          .jiang{
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
          }
        }
      }
    }
    .second-xy{
      display: flex;
      justify-content: space-around;
      background-image: url("../assets/home/123.png");
      background-size: 100% 100%;
      height: 20vh;
      li{
        position: relative;
        background-color: transparent;
        width: 65px;
        height: 65px;
        min-width: 30%;
        text-align: center;
        .img{
          position: relative;
          img{
            position: absolute;
            top: -10px;
            left: 50% - 13px;
            width: 26px;
          }
        }
        span{
          border-radius: 50%;
          position: absolute;
          left: calc(50% - 11px);
          bottom: -7px;
          display: inline-block;
          width: 14px;
          height: 14px;
          line-height: 14px;
          text-align: center;
          padding: 6px;
        }
      }
    }
  }
}
:deep(.van-overlay){
  background-color: rgba(0,0,0,.2);
}
  :deep(.van-popup){
    background-color: transparent;
    .btn{
      background-color: white;
      margin: 4px 30px;
      padding: 10px 35px;
      font-size: 20px;
      color:rgba(7,225,186) ;
      font-weight: 600;
      text-align: center;
      border-radius: 14px;
    }
  }
}
</style>
