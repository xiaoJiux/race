<template>
  <div id="ActivityDetails">
    <Header :title="$route.meta.title"></Header>
    <div class="top" style="background-color: white">
      <van-image
        :src="data.img"
        fit="cover"
        height="25vh"
        radius="15px"
        style="display: flex;margin: auto;"
        width="80vw"
      />
      <!--   标题-->
      <p class="title;" style="margin: 16px 10px;border-left: 5px solid rgb(33,183,189);padding-left: 5px">{{
          data.name
        }}</p>
      <p class="van-hairline--bottom"
         style="margin: 0;font-size: 10px;color: #cccccc;padding: 0 20px 20px;display: flex;justify-content:space-between">
        <!--      时间-->
        <span style="margin-right: 12vw;">{{ data.time.split(" ")[0] }} - {{ data.overTime.split(" ")[0] }}</span>
        <span>人数 ：<span :style="
  data.nowNum===0?'color:#cccccc;':data.nowNum===data.needNum?'color:red':'color:rgba(65,184,131)'
">{{ data.nowNum }}</span> / {{ 10 }}人</span>
      </p>
      <!--  组织  -->
      <div class="van-hairline--bottom unit tar-item">
        <div class="left">
          <img src="../../../public/other_icon/zz.png">
          <p>{{ data.unit }}</p>
        </div>
        <div class="right"></div>
      </div>
      <!--    联系人-->
      <div class="van-hairline--bottom unit tar-item">
        <div class="left">
          <img src="../../../public/other_icon/rw.png">
          <p>{{ data.userName }}</p>
        </div>
        <div class="right">
          <van-icon name="phone-o" size="20" @click="callPhone()"/>
        </div>
      </div>
      <!--    定位-->
      <div class="van-hairline--bottom unit tar-item">
        <div class="left">
          <img src="../../../public/other_icon/dd.png">
          <p class="location">{{ data.location }}</p>
        </div>
        <div class="right">
          <van-icon name="guide-o" size="20" @click="handlClick"/>
        </div>
      </div>
    </div>
    <div class="a-body">
      <h4 style="border-left: 5px solid rgb(33,183,189);padding-left: 5px">活动详情</h4>
      <div class="detail">
        <p class="title">{{ data.name }}</p>
        <p class="content">{{ data.content }}</p>
        <div class="intervalTime"></div>
        <p>时间 ：{{ data.start }} - {{ data.end }}</p>
        <p class="location">地址 ：{{ data.location }}</p>
        <div class="intervalTime"></div>
        <p class="">志愿者要求 ：</p>
        <p class="">{{ data.claim }}</p>
      </div>
    </div>
    <div class="showMan" style="padding: 10px;">
      <div class="header">
        <span style="font-size: 14px;border-left: 5px solid rgb(33,183,189);padding-left: 5px">报名人数 ({{
            data.nowNum
          }}) </span>
        <span style="font-size: 12px;">报名详情 <van-icon name="arrow" style="padding-left: 10px;"/></span>
      </div>
      <div class="list">
        <van-image
          v-for="(item,index) in data.list"
          :key="index"
          :src="item.img"
          fit="cover"
          height="40px"
          round
          width="40px"
        />
      </div>
    </div>
    <div class="bottom">
      <van-button v-if="" block type="primary" @click="join">我要报名</van-button>
      <van-button block type="primary" @click="singIn">签到</van-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import {mapState} from "vuex";
import {Toast} from "vant";
import {fmtTime} from "@/utils/getTime";

export default {
  name: "ActivityDetails",
  components: {Header},
  data() {
    return {
      timeS: null,//定时器
      //定义终点位置
      EndXY: {},
      data: {},
      btnState: 1, //1未开始,2报名中,3未开始,4已报名,5进行中,6签退
    }
  },
  computed: {
    ...mapState(['userData'])
  },
  methods: {
    //拨打电话
    callPhone() {
      window.location.href = 'tel://' + this.data.phone
    },
    handlClick() {
      /* Start  判断手机是IOS还是安卓 */

      let queryStr = `?sourceApplication=msite&lat=${this.EndXY.lat}&lon=${this.EndXY.lng}&dev=1&style=2`
      window.location.href = `androidamap://navi${queryStr}`;
    },
    //报名活动
    async join() {
      let {data} = await this.$axios({
        method: 'POST',
        url: '/join/save',
        data: {
          user: this.userData.id,
          activity: this.data.id
        },
      })
      if (data.code === 0) {
        Toast.success("报名成功")

      }
    },
    //签到
    singIn() {

    },
    //检测是否报名
    async isSignup() {
      let {data} = await this.$axios({
        url: '/join/findByUser',
        method: 'post',
        params: {
          userId: this.userData.id
        }
      })
      if (data.code === 0) {
        return 4
      } else {
        return 3
      }
    },
    // 设置按钮状态
    async setBtn() {
      let now = new Date()
      let nowTime = fmtTime(now)
      if (nowTime < this.data.time) {
        this.btnState = 1
      } else if (nowTime > this.data.time && nowTime < this.data.overTime) {
        this.btnState = 2
      } else if (nowTime > this.data.overTime && nowTime < this.data.start) {
        this.btnState = await this.isSignup()
      } else if (nowTime > this.data.start && nowTime < this.data.end) {
        this.btnState = 5
      } else {
        this.btnState = 0
        return true
      }
    }
  },
  async mounted() {
    await fetch(`https://restapi.amap.com/v3/geocode/geo?key=3be482fd84dc0164db65f22d10155854&address='${this.data.location}'`, {
      method: 'get',
    })
      .then(async res => {
        res = await res.json()
        let {geocodes} = res//结构出详细信息
        const arrXY = geocodes[0].location.split(",")//切割字符串,为数组

        this.EndXY.lng = arrXY[0]
        this.EndXY.lat = arrXY[1]
      })

  },
  async created() {
    this.data = this.$route.params.item
    console.log(this.$route.params.item)
    this.timeS = setInterval(() => {//进入页面开始每秒执行一次
      let bool = this.setBtn()
      bool === true ? clearInterval(this.timeS) : console.log('循环中', this.btnState)

    }, 5000)
  },
  destroyed() {
    console.log("我烂掉了")
    if (this.timeS) {
      clearInterval(this.timeS)
    }
  }
}
</script>

<style lang="less" scoped>
#ActivityDetails {
  #header {
    text-align: center;
    color: #fff;
    padding: 0.8rem;
    background: linear-gradient(to bottom right, rgba(113, 235, 214), rgb(103, 217, 214));
    font-size: 18px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  background-color: rgb(201, 245, 244);
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;

  .top {
    margin-bottom: 15px;

    .tar-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;

      .left {
        display: flex;
        align-items: center;

        img {
          width: 35px;
          height: 35px;
          object-fit: cover;
        }

        p {
          margin: 0 25px;
          font-size: 14px;
        }

        .location {
          overflow: hidden; //超出的文本隐藏
          text-overflow: ellipsis; //溢出用省略号显示
          white-space: nowrap; //溢出不换行
          max-width: 60vw;
        }
      }

      .right {
        i {
          padding-left: 22px;
          border-left: 1px solid #cccccc;
        }
      }

    }
  }

  .a-body {
    background-color: white;
    padding: 20px 10px;
    margin-bottom: 15px;

    .detail {
      border: 1px solid rgba(88, 158, 124);
      border-radius: 20px;
      margin: 30px 0;
      padding: 10px;

      .intervalTime {
        height: 40px;
      }

      p {
        margin: 10px 0;
        font-size: 14px;
      }
    }

    h4 {
      margin: 0;
    }
  }

  .showMan {
    background-color: white;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .list {
      //display: flex;
      padding: 8px 0;
      width: 100vw;
      overflow-x: scroll;
      overflow-y: hidden;

      &:deep(.van-image) {
        margin: 0 6px;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    background-color: white;

    :deep(.van-button) {
      background-image: linear-gradient(to right, rgb(10, 211, 179), rgb(0, 194, 214));
      border-radius: 8px;
      border: none;
      margin: 10px 6px;
    }
  }
}
</style>
