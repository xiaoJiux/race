<template>
  <div id="exchange">
    <Header :title="$route.meta.title"></Header>
    <van-image
      :src="img"
    />
    <div class="point-box">
      <p class="title">我的积分</p>
      <p class="point" v-if="pointD">{{pointD.sumNumber}}</p>
      <p class="suc">天天领好礼 好礼享不停</p>
    </div>
    <div class="exchange-box">
      <p style="font-weight: 600;">积分兑换专区</p>
      <div class="content">
        <div class="item">
          <div class="pl-lbx">
            <img src="../../assets/user/liping.png" alt="">
            <p class="last">剩余12499件</p>
            <p class="hot">热门商品</p>
          </div>
          <p class="lp-name">第二课堂学分</p>
          <p class="exchange-bl">200积分-<span class="sdt-point">1学分</span></p>
          <p class="btn" @click="showPopup">兑换</p>
        </div>
        <div class="item">
          <div class="pl-lbx">
            <img src="../../assets/user/liping.png" alt="">
            <p class="last">剩余12499件</p>
            <p class="hot">热门商品</p>
          </div>
          <p class="lp-name">第二课堂学分</p>
          <p class="exchange-bl">200积分-<span class="sdt-point">1学分</span></p>
          <p class="btn" @click="showPopup">兑换</p>
        </div>
        <div class="item">
          <div class="pl-lbx" style="background-image: linear-gradient(rgba(254,205,112),rgba(250,169,72))">
            <img src="../../assets/user/liping.png" alt="">
            <p class="last">剩余12499件</p>
            <p class="hot">热门商品</p>
          </div>
          <p class="lp-name">餐厅优惠券</p>
          <p class="exchange-bl">200积分-<span class="sdt-point">1学分</span></p>
          <p class="btn" @click="showPopup">兑换</p>
        </div>
        <div class="item">
          <div class="pl-lbx" style="background-image: linear-gradient(rgba(254,205,112),rgba(250,169,72))">
            <img src="../../assets/user/liping.png" alt="">
            <p class="last">剩余12499件</p>
            <p class="hot">热门商品</p>
          </div>
          <p class="lp-name">餐厅优惠券</p>
          <p class="exchange-bl">200积分-<span class="sdt-point">1学分</span></p>
          <p class="btn" @click="showPopup">兑换</p>
        </div>
        <div class="item">
          <div class="pl-lbx" style="background-image: linear-gradient(rgba(111,172,255),rgba(76,143,255))">
            <img src="../../assets/user/liping.png" alt="">
            <p class="last">剩余12499件</p>
            <p class="hot">热门商品</p>
          </div>
          <p class="lp-name">超市优惠券</p>
          <p class="exchange-bl">200积分-<span class="sdt-point">1学分</span></p>
          <p class="btn" @click="showPopup">兑换</p>
        </div>
        <div class="item">
          <div class="pl-lbx" style="background-image: linear-gradient(rgba(111,172,255),rgba(76,143,255))">
            <img src="../../assets/user/liping.png" alt="">
            <p class="last">剩余12499件</p>
            <p class="hot">热门商品</p>
          </div>
          <p class="lp-name">超市优惠券</p>
          <p class="exchange-bl">200积分-<span class="sdt-point">1学分</span></p>
          <p class="btn" @click="showPopup">兑换</p>
        </div>

      </div>
    </div>
    <van-popup v-model="show">
      <img @click="exChange" src="../../assets/user/alert.png" style="width: 80vw;" alt="">
    </van-popup>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapState } from "vuex";
import { Toast } from "vant";

export default {
  name: "ExChange",
  components:{Header},
  data () {
    return {
      img:require('../../assets/user/point.png'),
      show:false,
      pointD:null
    }
  },
  computed: { ...mapState(["userData"]) },
  methods: {
    showPopup() {
      this.show = true;
    },
    async exChange(){
      let {data} = await this.$axios({
        url:'/points/reducePoints',
        method:'post',
        params:{
          userId:this.userData.id,
          points:15,
          info:'兑换礼品'
        }
      })
      if(data.code === 0){
        await this.getPoint()
        Toast.success('兑换成功!')
      }
      this.show = false
    },
    //获取用户总积分
    async getPoint(){
      let {data} = await this.$axios({
        url:'/points/findById',
        method:'post',
        params:{
          userId:this.userData.id
        }
      })
      this.pointD = data.data[0]
    },
  },
  async mounted(){
    await this.getPoint()
  }

}
</script>

<style scoped lang="less">
.point-box{
  margin: 40px;
  padding: 20px;
  background-image: url("../../assets/user/center.png") ;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  p{
    margin:5px 0 ;
    color: white;
  }
  .title{
    font-size: 14px;
  }
  .point{
    font-weight: 600;
    font-size: 32px;
  }
}
.exchange-box{
  padding:0 10px;
  .content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item{
      position: relative;
      border: 1px solid #cccccc;
      max-width: 48%;
      margin-bottom: 10px;
      .pl-lbx{
        position: relative;
        background-image: linear-gradient(rgba(254,167,124),rgba(241,41,58));
        text-align: center;
        padding: 25px 0;
        img{
          width: 80%;
        }
        p{
          margin: 0;
        }
        .hot{
          background-color: white;
          position: absolute;
          display: inline-block;
          left: 0;
          top: 0;
          background-image: linear-gradient(rgba(251,103,57),rgba(244,67,85));
          border-bottom-right-radius: 20px;
          font-size: 10px;
          padding:4px 10px 4px 5px;
          color: white;
        }
        .last{
          color: white;
          position: absolute;
          font-size: 10px;
          bottom: 0;
          right: 0;
        }
      }
      p{
        margin:8px;
      }
      .lp-name{
        font-weight: 600;
      }
      .exchange-bl{
        color: rgba(250,125,103);
        font-size: 14px;
        margin-bottom: 0;
        span{
          font-size: 12px;
        }
      }
      .btn{
        background-image: linear-gradient(rgba(2,175,247),rgba(0,130,254));
        display: inline-block;
        color: white;
        border-radius: 18px;
        padding: 4px 10px;
        margin: 0 10px 10px 0;
        float: right;
        right: 10px;
      }
    }
  }
}
:deep(.van-popup){
  background: none;
}
</style>
