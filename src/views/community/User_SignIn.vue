<template>
  <div id="signIn">
    <header>
      <van-icon @click.stop="$router.back()" name="arrow-left"
                size="18" color="#fff" style="float: left;margin-top: 4px" class="icon"/>

      {{$route.meta.title}}
    </header>
    <div class="actv_Info">
      <ul>
        <li>
          <span>活动名称：</span>
          <input type="text" >
        </li>
        <li>
          <span>活动名称：</span>
          <input type="text" >
        </li>
        <li>
          <span>活动名称：</span>
          <input type="text" >
        </li>
      </ul>
    </div>
    <p >当前位置</p>
    <div class="Geolocation" >
      <Geolocation @giveAddress="address"></Geolocation>
    </div>
    <div class="useSign">
      <p class="signInTime">签到时间:9:00---10:00</p>
      <p class="signInSite">签到地点:{{useLct}}</p>
      <van-button @click="signIn" round style="padding:10px 50px"   color="linear-gradient(to right, rgb(106,218,206), rgb(53,145,246))">
        签到
      </van-button>
    </div>



  </div>
</template>

<script>
import Header from "@/components/Header";
import Geolocation from "@/components/Geolocation";

export default {
  name: "User_SignIn",
  components:{Header,Geolocation},
  data(){
    return {
      useLct:''//用户当前位置
    }
  },
  methods:{
    address(data){
      this.useLct = data
    },
    signIn(){

    }
  },
  created() {
  }
}
</script>

<style scoped lang="less">
#signIn{
  position: relative;
  text-align: center;
  padding-bottom: 20px;
  header{
    height: 22vh;
    background: linear-gradient(to bottom right,rgb(114,235,214),rgb(103,215,212));
    box-shadow: 0 2px 6px rgb(103,215,212);
    text-align: center;
    color: #ffffff;
    font-size: 18px;
    padding: 0.8rem;
    box-sizing: border-box;
  }

  p{
    margin-top: 10vh + 5px;
    text-align: center;
    font-size: 18px;
  }
  .Geolocation{
    width: 80vw;
    height: 80vw;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    background-color: yellowgreen;
  }
  .actv_Info{
    position: absolute;
    top: 10vh;
    left: 5vw;
    margin: 0 auto;
    background-color: white;
    box-shadow: 2px 2px 8px #a8a4a4;
    border-radius: 15px;
    width: 90vw;
    padding-left: 25px;
    box-sizing: border-box;
    ul{
      li{
        margin:20px 0;
        display: flex;
        align-items: center;

        span{
          font-size: 13px;
          min-width: 25%;
          margin: 0;
        }
        input{
          border: none;
          padding-left: 10px;
          font-size: 16px;
          max-width: 60%;
        }
      }
    }
  }
  .useSign{
    p{
      margin:20px 0;
      font-size: 14px;
    }
  }
}
</style>