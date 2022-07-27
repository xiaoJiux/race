<template>
  <div id="card">
    <div class="content" @click.stop>
      <p class="title">{{ data.name }}</p>
      <div class="time">
        <p><span>活动内容：</span>{{data.content}}</p>
        <p><span>报名时间：</span>{{ data.start }}</p>
        <p><span>截止时间：</span>{{ data.end }}</p>
      </div>
      <div class="information">
        <p><span>组织学院：</span>&nbsp;&nbsp;{{ data.location }}</p>
        <p><span>发起者：</span>&nbsp;&nbsp;{{ data.userName }}</p>
        <p><span>报名人数：</span>&nbsp;&nbsp;{{ data.regNum }}/{{ data.number }}</p>
      </div>
      <div class="address">
        <p><span>活动地址：</span></p>
        <p class="address_xx" @click="handlClick">
          <van-icon name="location"/>
          {{ data.location }}
        </p>
        <Activity_map :EndXY="this.EndXY" style="height:60vw;"></Activity_map>
      </div>
    </div>
    <div class="singUp" style="text-align: center;">
      <button
        style="background-color:rgb(46,215,210);border: none;margin: 0 auto;padding:0 4rem;color: #fff;border-radius: 25px;font-size: 1.5rem"
        @click.stop="signUp" >报名</button>
    </div>
  </div>
</template>

<script>
import Activity_map from "@/components/activity/Activity_map";

export default {
  name: "Activity_card",
  components: {Activity_map},
  props: ["data"],
  data() {
    return {
      //定义起点位置
      StartXY: {},
      //定义终点位置

      EndXY: {}
    }
  },
  methods: {
    handlClick() {
      /* Start  判断手机是IOS还是安卓 */

      let queryStr = `?sourceApplication=msite&lat=${this.EndXY.lat}&lon=${this.EndXY.lng}&dev=1&style=2`
      window.location.href = `androidamap://navi${queryStr}`;

    },
    //报名
    async signUp(){
      console.log('报名');
    }

  },
  async mounted() {
    let {data} = await this.$axios({
      url: 'https://restapi.amap.com/v3/geocode/geo?',
      method: 'get',
      params: {
        key: '3be482fd84dc0164db65f22d10155854',
        address: this.data.address,
      }
    })

    let {geocodes} = data//结构出详细信息
    const arrXY = geocodes[0].location.split(",")//切割字符串,为数组

    this.EndXY.lng = arrXY[0]
    this.EndXY.lat = arrXY[1]

  }

}
</script>

<style lang="less" scoped>
#card {
  //background-image: linear-gradient(to right, rgb(140, 175, 208) 0%, rgb(172, 183, 235) 50%, rgb(177, 173, 235) 100%);
  width: 85vw;
  height: 70vh;
  border-radius: 26px;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0 1.5rem 1.5rem;

  &::-webkit-scrollbar {
    width: 0 !important
  }

  .content {
    .title {
      text-align: center;
      font-size: 2rem;
      padding: 1.8rem 0;
      margin: 0;

    }

    .time, .information, .address {
      //font-size: 1.5rem;
      margin-bottom: 1.5rem;
      p {
        text-align: center;
        margin: 1rem 0;
        font-size: .9rem;
        span{
          font-size: 1.1rem;
        }
      }
    }

    .address {
      .address_xx {
        font-size: 1.1rem;
      }
    }

  }
}
</style>