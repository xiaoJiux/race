<template>
  <div id="user">
    <div class="user-nh">
      <div class="user-msg">
        <p class="name">老叶</p>
        <p class="joinTime">加入XXX的第123天</p>
      </div>
      <div class="tx">
        <van-image
          fit="cover"
          height="75px"
          round
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          width="75px"
        />
      </div>
    </div>
    <div class="info-block">
<!--      学习次数-->
      <div class="learn-num">
        <p>学习总数</p>
        <p><span>21</span>次</p>
        <p>日积月累,能辨虚实</p>
      </div>
<!--      积分-->
      <div class="integral">
        <p>学习积分</p>
        <p><span>1234</span></p>
        <p>积分可进行兑换</p>
      </div>
    </div>
    <div class="list">
      <div class="item van-hairline--bottom" @click="show = true">
        <div class="left">
          <img src="../../public/other_icon/user/link.png" >
          <span>学院绑定</span>
        </div>
        <div class="right">
          <span style="font-size: 12px;color: #cccccc">未绑定</span>
          <van-icon color="#cccccc" name="arrow" size="24" />
        </div>
      </div>
      <div class="item van-hairline--bottom">
        <div class="left">
          <img src="../../public/other_icon/user/msg.png" >
          <span>信息中心</span>
        </div>
        <div class="right">
          <van-icon color="#cccccc" name="arrow" size="24" />
        </div>
      </div>
      <div class="item van-hairline--bottom">
        <div class="left">
          <img src="../../public/other_icon/user/fate.png" >
          <span>账户安全</span>
        </div>
        <div class="right">
          <van-icon color="#cccccc" name="arrow" size="24" />
        </div>
      </div>
      <div class="item van-hairline--bottom">
        <div class="left">
          <img src="../../public/other_icon/user/help.png" >
          <span>帮助中心</span>
        </div>
        <div class="right">
          <van-icon color="#cccccc" name="arrow" size="24" />
        </div>
      </div>
      <div class="item van-hairline--bottom">
        <div class="left">
          <img src="../../public/other_icon/user/set.png" >
          <span>设置</span>
        </div>
        <div class="right">
          <van-icon color="#cccccc" name="arrow" size="24" />
        </div>
      </div>
      <div class="item van-hairline--bottom" @click="loginOut">
        <div class="left">
          <img src="../../public/other_icon/user/loginout.png" >
          <span>退出登录</span>
        </div>
        <div class="right">

        </div>
      </div>
    </div>
    <footer >

    </footer>
    <van-popup v-model="show" position="bottom" round>
      <van-cascader
        v-model="cascaderValue"
        :options="options"
        :title="title"
        @change="onChange"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
  </div>
</template>

<script>
import {clear} from "@/utils/localStorage";
import {Toast} from "vant";

export default {
  name: "User",
  data(){
    return{
      show:false,
      fieldValue: '',
      cascaderValue: '',
      title:'请选择年级',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '2019',
          value: '111',
          children: [{ text: '工商学院',value: '21'},{ text: '医学院',value: '22'},{ text: '商学院',value: '23'},],
        },
        {
          text: '2020',
          value: '122',
          children: [{ text: '工商学院',value: '21'},{ text: '医学院',value: '22'},{ text: '商学院',value: '23'}],
        },
        {
          text: '2021',
          value: '312',
          children: [{ text: '工商学院',value: '21'},{ text: '医学院',value: '22'},{ text: '商学院',value: '23'}],
        }
      ],
    }
  },
  methods: {
    loginOut(){
      clear()
      const toast = Toast.loading({
        duration: 0,
        forbidClick:true,
        message: '成功退出!'
      })
      let second = 2;
      const timer = setInterval(() => {
        second--;
        if (second===0) {
          clearInterval(timer);
          // 手动清除 Toast
          Toast.clear();
          this.$router.replace({
            path:'/login'
          })
        }
      }, 1000);
    },
    //提交学院绑定
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
    //改变触发
    onChange(value){
      if(value.tabIndex == 0){
        this.title = "请选择学院"
      }else{
        this.title = "请选择年级"

      }
    }
  }
}
</script>

<style lang="less" scoped>
#user {
  //background-image: linear-gradient(to bottom, rgb(96, 217, 212), rgb(226, 245, 244));
  //background-size: 100% 25vh;
  //background-image: url("../../public/other_icon/user/bc.png");
  //background-size: 95vw;
  //background-repeat: no-repeat;
  //background-position: 50% 100%;
  padding: 15px 15px 40vh;
  margin-bottom: 35px;
  position: relative;
  &::after{
    background-image: url("../../public/other_icon/user/bc.png");
    background-size: 95vw;
    background-repeat: no-repeat;
    background-position: center bottom 0;
    content: "";
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

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
  .info-block{
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    .learn-num{
      background-color: #eaf6f6;
      background-image: url("../../public/other_icon/user/jifen.png") ;
      background-size: 45%;
      background-repeat: no-repeat;
      background-position: 110% 120%;
      p:nth-child(3){
        color: #3aebf1;
      }
    }
    .integral{
      background-color: rgb(237, 240, 255);
      background-image: url("../../public/other_icon/user/shan.png") ;
      background-size: 45%;
      background-repeat: no-repeat;
      background-position: 110% 110%;

      p:nth-child(3){
        color: rgb(173, 180, 248);
      }
    }
    div{
      width: 40vw;
      box-sizing: border-box;
      padding: 10px;
      border-radius: 15px;
      p{
        margin: 5px 0;
      }
      p:nth-child(3){
        font-size: 12px;
      }
      p:nth-child(2){
        font-size: 12px;
        span{
          font-size: 18px;
          font-weight: 600;
        }
      }
      p:nth-child(1){
        font-size: 16px;
      }
    }
  }
  .list{
    margin-top: 20px;
    .item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      .left,.right{
        display: flex;
        align-items: center;
        font-size: 20px;
        img{
          width: 1.5rem;
          margin-right: 10px;
        }
      }
    }
  }
  //footer{
  //  width: 100%;
  //  height: 38vh;
  //  background-image: url("../../public/other_icon/user/bc.png");
  //  background-size: cover;
  //  margin-bottom: 12vh;
  //}



}

</style>
