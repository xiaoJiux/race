<template>
  <div id="Qrcode">
    <header>
      <van-icon color="white" name="arrow-left" size="25" @click="$router.back()" />
      <span>反骗码</span>
      <span></span>
    </header>
    <p class="hint">您的反骗意识较好!</p>
    <p class="last">绿码剩余天数 <span>{{ 123 }}</span> 天</p>
    <div class="qrcode" style="text-align: center">
      <p class="title">校园反骗码</p>
      <p class="update-time">{{'2022-12-11 19:18:00'}} 更新</p>
      <svg style="width: 60vw;height: 60vw;"></svg>
      <van-button block type="info" @click="testAnswer">开始测试</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Qrcode",
  data(){
    return {

    }
  },
  methods:{
    //开始测试
    testAnswer(){

    },

  }
}
</script>

<style lang="less" scoped>
#Qrcode {
  box-sizing: border-box;
  padding: 20px 0;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, rgb(67, 234, 228), #ebebeb, rgb(255, 255, 255));
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding:0 45px 0 20px;
    span{
      font-size: 20px;
    }
  }
  .hint {
    margin: 0;
    color: white;
    font-weight: 600;
    font-size: 18px;
    padding: 15px 20px;
  }

  .last {
    margin: 0;
    padding-left: 20px;
    font-size: 12px;
    color: rgba(255, 255, 255, .7);

    span {
      font-size: 14px;
      color: rgba(255, 255, 255, 1);
    }

  }
  .qrcode{
    background-color: white;
    border-radius: 10px;
    margin: 25px;
    padding: 15px;
    p{
      text-align: center;
      margin: 0;
    }
    .title{
      font-size: 14px;
      color: #01ab01;
      font-weight: 600;
    }
    .update-time{
      padding: 6px;
      font-size: 12px;
    }
  }
}
</style>