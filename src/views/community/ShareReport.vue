<template>
  <div id="shareReport">
    <Header :title="$route.meta.title"></header>
    <article>
      <div class="title">
        <div class="userInfo">
          <div class="user" style="display: flex;align-items: center">
            <van-image
              :src="reportInfo.img"
              fit="cover"
              height="75px"
              round
              width="75px"
            />
            <span>zhang</span>
          </div>
          <span></span>
        </div>
        <div class="type">虚拟网络平台诈骗</div>
      </div>
      <div class="content">{{ reportInfo.content }}</div>
      <!--    阅读数目,时间-->
      <div class="read_time">
        <span>阅读{{ reportInfo.readNum }}</span>
        <span class="time">{{ reportInfo.time }}</span>
      </div>
    </article>
    <div class="van-hairline--top" style="text-align: center;padding-top: 15px;">
      {{ comment }}条评论
    </div>

    <div class="reply">
      <ul>
        <li v-for="(item,index) in dsicuss" :key="index">
          <div class="userHeader">
            <van-image
              :src="item.img"
              fit="cover"
              height="55px"
              round
              width="55px"
            />
            <span>{{ item.name }}</span>
          </div>
          <p>{{ item.content }}</p>
          <div class="b_info" style="display: flex;align-items: center">
            <img v-if="Good===false" alt="" src="../../../public/other_icon/Good.png" @click="likeFn">
            <img v-else alt="" src="../../../public/other_icon/yGood.png" style="width: 24px;height: 24px;" @click="likeFn">
            <div style="padding: 0 8px;font-size: 12px;">{{ item.likedNum }}</div>
<!--            <img v-if="notGood===false" alt="" src="../../../public/other_icon/Cai.png" @click="unlikeFn">-->
<!--            <img v-else alt="" src="../../../public/other_icon/yCai.png" @click="unlikeFn">-->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import {Toast} from "vant";

export default {
  name: "ShareReport",
  components: {Header},
  data() {
    return {
      comment: 12,//评论数目
      Good:false,//点赞
      notGood:false,//踩
      reportInfo: {
        id: Number,//文章id
        img: '',//头像
        authorName: 'z张三',//作者昵称
        content: '',//内容
        readNum: Number,//阅读数
        time: '',//发送时间
        type: ''//诈骗类型
      },
      dsicuss:[
        {//评论区数据
          username:'张三',//用户名
          img:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',//用户头像
          content:'内容',
          likedNum:1,//获赞数目
        }
      ]
    }
  },
  methods:{
    likeFn(){
      if(this.notGood === true && this.Good === false){
       return  Toast.fail('您已经踩了,不可以点赞哦');
      }
      this.Good = !this.Good
    },

  },
  mounted(){
    this.reportInfo = this.$route.params.item
    console.log(this.reportInfo)
  }
}
</script>

<style lang="less" scoped>
#shareReport {
  article {
    padding: 20px 20px 0;
    background: url("../../../public/other_icon/postman.png") no-repeat right -95px top 50%, linear-gradient(to bottom, rgb(166, 236, 232), rgb(225, 241, 240), rgb(255, 255, 255));
    background-size: 75%;

    .content {
      padding: 15px;
      font-size: 1.1rem;
      line-height: 32px;
      letter-spacing: 2px;
      margin-bottom: 30px;
    }

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .type {
        font-size: 1.2rem;
        background-color: rgb(255, 181, 105);
        border-radius: 12px;
        padding: 5px 12px;
      }

      .userInfo {
        display: flex;
        align-items: center;

        span {
          padding-left: 20px;
          font-size: 1.1rem;
        }
      }
    }

    .read_time {
      padding: 15px 15px 30px;

      .time {
        float: right;
      }
    }
  }

  .reply {
    padding-left: 30px;
    padding-right: 10px;
    margin-bottom: 15px;
    .userHeader{
      display: flex;
      align-items: center;
      span{
        padding-left: 15px;
      }
    }
    p{
      margin: 0;
      padding-left: 65px;
    }
    .b_info{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
