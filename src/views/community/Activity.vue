<template>
  <div class="activity">

    <Header :title="$route.meta.title"></Header>
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item v-model="value" :options="option" @change="sortSelect"/>
      <van-dropdown-item ref="item" title="活动区域">
        <van-cell center title="校内">
          <template #right-icon>
            <van-switch v-model="switch1" active-color="#5690ff" size="24"/>
          </template>
        </van-cell>
        <van-cell center title="校外">
          <template #right-icon>
            <van-switch v-model="switch2" active-color="#5690ff" size="24"/>
          </template>
        </van-cell>
        <div style="padding: 5px 16px;">
          <van-button block round type="info" @click="onConfirm">
            确认
          </van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="content-list">
      <div v-for="(item,index) in list" :key="index" class="van-hairline--bottom item" @click="$router.push({
      name:'ActivityDetails',
      params: {
        id:item.id,
        item
      }
      })">
        <van-image
          :src="item.img"
          fit="cover"
          height="25vh"
          width="88vw"
        />
        <p class="title" style="border-left: 6px solid rgb(3,204,198);padding-left: 3px">{{ item.name }}</p>
        <p style="font-size: 10px;color: #cccccc">
          <span style="margin-right: 12vw;padding-left: 9px">地区 ：{{ item.location.split('区')[0] + '区' }}</span>
          <span>人数 ：{{ item.nowNum }}/{{ item.needNum }}人</span>
        </p>
      </div>
    </div>
    <!--    <van-popup v-model="show" style="border-radius: 25px" @click="show = false">-->
    <!--      <div class="wrapper">-->
    <!--        <Activity_card :data="passCdata"/>-->
    <!--      </div>-->
    <!--    </van-popup>-->
  </div>
</template>

<script>
import Header from "@/components/Header";
import {Toast} from "vant";

export default {
  name: "Activity",
  components: {Header},
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      active: 0,
      passCdata: {},//传递到卡片的数据
      option: [
        {text: '报名中', value: 0},
        {text: '未开始', value: 1},
        {text: '已结束', value: 2},
      ],
      list: [
        //   {
        //   list:[{//参加活动的的用户
        //     id:1,
        //     img:'',//头像
        //     name:'',
        //   }],//参加活动的人
        //   id:1,//活动id
        //   nowNum:5,//已经参加人数
        //   needNum:10,//最大人数
        //   name:'个人成长图书会',//活动名称
        //   img:'https://img01.yzcdn.cn/vant/cat.jpeg',//现场图片
        //   phone:'18858444327',//主办人手机号
        //   time:'2020.08.16 ',//报名开始时间
        //   overTime:'2020.08.17',//报名结束时间
        //   userName:'张三',
        //   unit:"服务小分队",//举办单位
        //   //活动详情
        //   content: "通过 round 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。",
        //   start:'2022-09-01 13:30:00',//活动开始时间
        //   end:'2022-09-01 16:30:00',//活动结束时间
        //   location:'宁波市镇海区庄市街道街道核酸采样综合服务点',//地址
        //   claim:'当天下午提前半小时到达',//志愿者要求
        // }
      ]
    }
  },
  methods: {
    sortSelect(value) {
      console.log(value);
    },
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
  //请求活动数据
  async mounted() {
    let {data} = await this.$axios({
      methods: 'GET',
      url: '/activity/getAllUser'
    })
    console.log(data);
    if (data.code === 20000) {
      this.list = data.data
    } else {
      Toast.fail('对不起,系统出错了!!!')
    }
  }
}

</script>

<style lang="less" scoped>
.activity {
  :deep(.van-dropdown-menu__title::after) {
    border-color: transparent transparent rgb(1, 202, 205) rgb(1, 202, 205);
  }

  :deep(.van-image) {
    border-radius: 15px;
    overflow: hidden;
  }

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

  .content-list {
    padding: 25px 6vw;

    .item {
      margin: 0 auto;
      padding-bottom: 15px;

      .title {
        font-size: 14px;
      }
    }
  }
}
</style>
