<template>
  <div class="activity">
    <div class="signIn" @click="$router.push({
        path:'/signIn'
    })">
      <img alt="" class="signIn" src="../../../public/other_icon/signIn.png">
      <p>签到</p>
    </div>
    <Header :title="$route.meta.title"></Header>
    <van-tabs v-model="active" animated background="rgba(224,237,250)"
              color="#ffffff" line-height="1px" line-width="50px" offset-top="1.6rem + 18px" shrink="true"
              sticky swipeable>
      <van-tab v-for="(item,index) in list" :key="index" :title="item.state">
        <div class="card_list"
             style="display: flex;justify-content:space-around;flex-wrap: wrap;box-sizing: border-box;padding: 25px 0">
          <div v-for="(item,idx) in item.activityList" :key="idx" class="item_card"
               style="border-radius: 0 0 10px 10px;overflow: hidden;box-shadow: 2px 2px 2px gainsboro;margin-bottom: 35px"
               @click="passData(item)">
            <van-image
              :src="item.img"
              fit="cover"
              height="40vw"
              width="45vw"
            />
            <div style="padding-left: 5vw">
              <p style="margin: 1vh 0">{{ item.name }}</p>
              <p style="margin: 0;font-size: 12px">人数：&nbsp;{{ item.regNum }}/{{ item.number }}</p>
              <p style="margin: 0;font-size: 12px">时间：&nbsp;{{ item.end }}</p>
            </div>
            <div style="width: 33.3%;border: 2px solid rgb(110,228,213);margin: 1rem auto;border-radius: 20px"></div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-popup v-model="show" style="border-radius: 25px" @click="show = false">
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
          activityList: [
            // {
            //   id: 1,
            //   name: '活动标题',
            //   start: '1997.7.1',
            //   end: '2222.2.2',
            //   college: '嘻嘻哈哈大学',
            //   initiator: '张三',
            //   regNum: 5,
            //   number: 10,
            //   location: '富阳区商业城(公交站)',
            //   poster: 'http://rekph2v9n.hn-bkt.clouddn.com/4.jpg',
            //   content: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴'
            // }, {
            //   id: 1,
            //   name: '活动标题',
            //   start: '1997.7.1',
            //   end: '2222.2.2',
            //   college: '嘻嘻哈哈大学',
            //   initiator: '张三',
            //   regNum: 5,
            //   number: 10,
            //   location: '富阳区商业城(公交站)',
            //   poster: 'http://rekph2v9n.hn-bkt.clouddn.com/4.jpg',
            //   content: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴'
            // }
          ]
        },
        {
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
    },
    // 查询已报名人数
    async selectNum(item){
      let {data} = await this.$axios({
        url:'/join/findActivityCOUNT',
        method: 'POST',
        params: {
          activityId:item.id
        }
      })
      return  item.regNum = data

    },
    // 根据时间分类
    async selectActivity(data){
      const now = new Date().getTime()
      await data.forEach( (item) => {
        const startTime = new Date(item.start)
        this.selectNum(item)
        if (startTime < now) {
          this.list[0].activityList.push(item)
        } else if (item.end < now) {
          this.list[2].activityList.push(item)
        } else {
          this.list[1].activityList.push(item)
        }
      })
    }
  },
  //请求活动数据
  async mounted() {
    let {data} = await this.$axios({
      methods: 'get',
      url: '/activity/getAllUser'
    })
    // console.log(data);

    await this.selectActivity(data)
  }
}
</script>

<style lang="less" scoped>
.activity {
  .signIn {
    position: fixed;
    //right: 4vw;
    right: 0;
    top: 48vh;
    width: 45px;
    box-sizing: border-box;
    z-index: 102;

    img {
      width: 45px;
      height: 45px;
      display: block;
    }

    p {
      text-align: center;
      color: rgb(248, 27, 111);
      margin-top: 45px;
      font-weight: 600;
      font-size: 12px;
    }
  }

}
</style>