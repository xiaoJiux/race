<template>
  <div class="activity">
    <div class="signIn" @click="$router.push({
        path:'/signIn'
    })">
      <img class="signIn" src="../../../public/other_icon/signIn.png" alt="">
      <p>签到</p>
    </div>
    <Header :title="$route.meta.title"></Header>
    <van-tabs background="rgba(224,237,250)" color="#ffffff" v-model="active"
              animated swipeable offset-top="1.6rem + 18px" sticky shrink="true"
              line-height="1px" line-width="50px">
      <van-tab v-for="(item,index) in list" :title="item.state" :key="index">
        <div class="card_list"
             style="display: flex;justify-content:space-around;flex-wrap: wrap;box-sizing: border-box;padding: 25px 0">
          <div @click="passData(item)" v-for="(item,idx) in item.activityList" class="item_card" :key="idx"
               style="border-radius: 0 0 10px 10px;overflow: hidden;box-shadow: 2px 2px 2px gainsboro;margin-bottom: 35px">
            <van-image
              width="45vw"
              height="40vw"
              fit="cover"
              :src="item.poster"
            />
            <div style="padding-left: 5vw">
              <p style="margin: 1vh 0">{{ item.college }}</p>
              <p style="margin: 0;">人数：&nbsp;{{ item.regNum }}/{{ item.headcount }}</p>
              <p style="margin: 0;">时间：&nbsp;{{ item.overTime }}</p>
            </div>
            <div style="width: 33.3%;border: 2px solid rgb(110,228,213);margin: 1rem auto;border-radius: 20px"></div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-popup v-model="show" @click="show = false" style="border-radius: 25px">
      <div class="wrapper">
        <Activity_card :data="passCdata"/>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Activity_card from "@/components/activity/Activity_card";

export default {
  name: "Activity",
  components: {Header, Activity_card},
  data() {
    return {
      show: false,
      active: 0,
      passCdata: {},//传递到卡片的数据
      list: [
        {
          state: '报名中',
          activityList: [{
            id: 0,
            title: '活动标题',
            startTime: '1997.7.1',
            overTime: '2222.2.2',
            college: '嘻嘻哈哈大学',
            initiator: '张三',
            regNum: 5,
            headcount: 10,
            address: '浙江省富阳区大润发',
            poster: 'http://rekph2v9n.hn-bkt.clouddn.com/4.jpg',
            introduce: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴'
          }, {
            id: 1,
            title: '活动标题',
            startTime: '1997.7.1',
            overTime: '2222.2.2',
            college: '嘻嘻哈哈大学',
            initiator: '张三',
            regNum: 5,
            headcount: 10,
            address: '富阳区商业城(公交站)',
            poster: 'http://rekph2v9n.hn-bkt.clouddn.com/4.jpg',
            introduce: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴'
          }]
        }, {
          state: '进行中',
          activityList: []
        }, {
          state: '已结束',
          activityList: []
        }
      ]
    }
  },
  methods: {
    //传数据到Activity_card中
    passData(data) {
      this.show = true
      this.passCdata = data
    }
  },
  //请求活动数据
  async mounted() {

  }
}
</script>

<style scoped lang="less">
.activity {
  .signIn{
    position: fixed;
    //right: 4vw;
    right: 0;
    top: 48vh;
    width: 45px;
    box-sizing: border-box;
    z-index: 102;
    img{
      width: 45px;
      height: 45px;
      display: block;
    }
    p{
      text-align: center;
      color: rgb(248,27,111);
      margin-top: 45px;
      font-weight: 600;
      font-size: 12px;
    }
  }

}
</style>