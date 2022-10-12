<template>
  <div id="user">
    <div class="user-nh">
      <div class="user-msg">
        <p class="name">{{userData.name}}</p>
        <p class="joinTime">欢迎加入24小时反诈中心</p>
      </div>
      <div class="tx">
        <van-image
          fit="cover"
          height="75px"
          round
          :src="userData.img"
          width="75px"
        />
      </div>
    </div>
    <div class="info-block">
      <!--      学习次数-->
      <div class="learn-num">
        <p>学习天数</p>
        <p><span>{{pointD?pointD.clockDay:0}}</span>天</p>
        <p style="font-size: 14px">签到</p>
      </div>
      <!--      积分-->
      <div class="integral" @click="$router.push({
      path:'/point'
      })">
        <p>学习积分</p>
        <p><span>{{pointD?pointD.sumNumber:0}}</span></p>
        <p>积分可进行兑换</p>
      </div>
    </div>
    <div class="data"
         style="margin: 10px;background-color: rgb(228,250,248);display: flex;justify-content: space-between;align-items: center">
      <div id="myEcharts" ref="Echarts" style="width: 45vw;height: 35vw;"></div>
      <div class="show-data" style="max-width: 45vw;padding: 15px 2px;">
        <ul style="display: flex;flex-wrap: wrap;justify-content: space-between;font-size: 10px">
          <li style="padding:10px 8px;font-size: 14px;color: rgb(140,140,140)">签到：<span>{{ pointD?pointD.type1:0 }}</span></li>
          <li style="padding:10px 8px;font-size: 14px;color: rgb(140,140,140)">评论：<span>{{ pointD?pointD.type2:0 }}</span></li>
          <li style="padding:10px 8px;font-size: 14px;color: rgb(140,140,140)">心得：<span>{{ pointD?pointD.type3:0 }}</span></li>
          <li style="padding:10px 8px;font-size: 14px;color: rgb(140,140,140)">活动：<span>{{ pointD?pointD.type:0 }}</span></li>
          <li style="padding:10px 8px;font-size: 14px;color: rgb(140,140,140)">收藏：<span>{{ pointD?pointD.type6:0 }}</span></li>
        </ul>
      </div>
    </div>
    <div class="module-list" style="background-color: rgb(229,249,250)">
      <div class="item" @click="$router.push({
      path: '/enterActivity'
      })">
        <img alt="" src="../assets/user/1.png">
        <p>我的活动</p>
      </div>
      <div class="item" @click="$router.push({
      path: '/myDiscuss'
      })">
        <img alt="" src="../assets/user/2.png">
        <p>我的评论</p>
      </div>
      <div class="item"  @click="$router.push({
      path: '/myCollect'
      })">
        <img alt="" src="../assets/user/3.png">
        <p>我的收藏</p>
      </div>
      <div class="item" @click="$router.push({
      path:'/MyExperience'
      })">
        <img alt="" src="../assets/user/4.png">
        <p>我的心得</p>
      </div>
      <div class="item" @click="$router.push({
      path:'/issuanceActivity'
      })">
        <img alt="" src="../assets/user/5.png">
        <p>发布活动</p>
      </div>
      <div class="item" @click="$router.push({
      path:'/audit'
      })">
        <img alt="" src="../assets/user/6.png">
        <p>活动审核</p>
      </div>
      <div class="item" @click="$router.push({
      path:'/exchange'
      })">
        <img alt="" src="../assets/user/7.png">
        <p>积分兑换</p>
      </div>
    </div>
    <div class="list">
      <div class="item van-hairline--bottom">
        <div class="left">
          <img src="../../public/other_icon/user/msg.png">
          <span>信息中心</span>
        </div>
        <div class="right">
          <van-icon color="#cccccc" name="arrow" size="24"/>
        </div>
      </div>
      <div class="item van-hairline--bottom">
        <div class="left">
          <img src="../../public/other_icon/user/fate.png">
          <span>账户管理</span>
        </div>
        <div class="right">
          <van-icon color="#cccccc" name="arrow" size="24"/>
        </div>
      </div>
      <div class="item van-hairline--bottom">
        <div class="left">
          <img src="../../public/other_icon/user/help.png">
          <span>帮助中心</span>
        </div>
        <div class="right">
          <van-icon color="#cccccc" name="arrow" size="24"/>
        </div>
      </div>
      <div class="item van-hairline--bottom">
        <div class="left">
          <img src="../../public/other_icon/user/set.png">
          <span>设置</span>
        </div>
        <div class="right">
          <van-icon color="#cccccc" name="arrow" size="24"/>
        </div>
      </div>
      <div class="item van-hairline--bottom" @click="loginOut">
        <div class="left">
          <img src="../../public/other_icon/user/loginout.png">
          <span>退出登录</span>
        </div>
        <div class="right">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {clear} from "@/utils/localStorage";
import {Toast} from "vant";
import {mapState} from "vuex";
import {myChart} from "@/utils/echarts";

export default {
  name: "User",
  data() {
    return {
      pointD:null
    }
  },
  computed: { ...mapState(["userData"]) },
  methods: {
    //退出
    loginOut() {
      clear()
      const toast = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '成功退出!'
      })
      let second = 2;
      const timer = setInterval(() => {
        second--;
        if (second === 0) {
          clearInterval(timer);
          // 手动清除 Toast
          Toast.clear();
          this.$router.replace({
            path: '/login'
          })
        }
      }, 1000);
    },
    //查询每一块积分
    async getPoint(){
      let {data} = await this.$axios({
        url:'/points/findById',
        method:'post',
        params:{
          userId:this.userData.id
        }
      })
      this.pointD = data.data[0]
    }
  },
  async mounted() {
    console.log (this.userData)
    await this.getPoint()
    myChart(document.getElementById("myEcharts"),[this.pointD.type1,this.pointD.type3,this.pointD.type6,this.pointD.type2,this.pointD.type1,])
  }
}
</script>

<style lang="less" scoped>
#user {
  background-color: rgba(247, 248, 250);
  padding: 15px 15px 10vh;

  .user-nh {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5vh 25px;

    .user-msg {
      .name {
        font-size: 30px;
        margin: 15px 0;
        font-weight: 600;
      }

      .joinTime {
        font-size: 12px;
        color: #cccccc;
      }
    }
  }

  .info-block {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;

    .learn-num {
      background-color: #eaf6f6;
      background-image: url("../../public/other_icon/user/jifen.png");
      background-size: 45%;
      background-repeat: no-repeat;
      background-position: 110% 120%;

      p:nth-child(3) {
        color: #3aebf1;
      }
    }

    .integral {
      background-color: rgb(237, 240, 255);
      background-image: url("../../public/other_icon/user/shan.png");
      background-size: 45%;
      background-repeat: no-repeat;
      background-position: 110% 110%;

      p:nth-child(3) {
        color: rgb(173, 180, 248);
      }
    }

    div {
      width: 40vw;
      box-sizing: border-box;
      padding: 10px;
      border-radius: 15px;

      p {
        margin: 5px 0;
      }

      p:nth-child(3) {
        font-size: 12px;
      }

      p:nth-child(2) {
        font-size: 12px;

        span {
          font-size: 18px;
          font-weight: 600;
        }
      }

      p:nth-child(1) {
        font-size: 16px;
      }
    }
  }

  .list {
    margin-top: 20px;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 10px;

      .left, .right {
        display: flex;
        align-items: center;
        font-size: 20px;

        img {
          width: 1.5rem;
          margin-right: 10px;
        }
      }
    }
  }

  .module-list {
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 20px 3.5vw;
    padding: 20px 10px;
    border-radius: 15px;

    .item {
      width: 25%;

      img {
        width: 10vw;
        height: 10vw;
      }

      p {
        font-size: 12px;
        margin: 10px 0;
      }
    }
  }

}

</style>
