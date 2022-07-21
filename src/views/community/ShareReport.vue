<template>
  <div id="shareReport">
    <Header :title="$route.meta.title"></header>
    <article>
      <div class="title">
        <div class="userInfo">
          <van-image
            round
            width="75px"
            height="75px"
            fit="cover"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <span>{{ reportInfo.author }}</span>
        </div>
        <div class="type">虚拟网络平台诈骗</div>
      </div>
      <div class="content">{{ reportInfo.content }}</div>
      <!--    阅读数目,时间-->
      <div class="read_time">
        <span>阅读{{ reportInfo.readNum }}</span>
        <span class="time">{{ reportInfo.issueDate }}</span>
      </div>
    </article>
    <div class="van-hairline--top" style="text-align: center;padding-top: 15px;">
      {{ comment }}条评论
    </div>

    <div class="reply">
      <ul>
        <li>
          <div class="userHeader">
            <van-image
              round
              width="55px"
              height="55px"
              fit="cover"
              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            />
            <span>张三</span>
          </div>
          <p>小心被骗啊啊啊!!!</p>
          <div class="b_info">
            <img @click="likeFn" v-if="Good===false" src="../../../public/other_icon/Good.png" alt="">
            <img @click="likeFn" v-else style="width: 24px;height: 24px;" src="../../../public/other_icon/yGood.png" alt="">
            <div style="width: 25px"></div>
            <img @click="unlikeFn" v-if="notGood===false" src="../../../public/other_icon/Cai.png" alt="">
            <img @click="unlikeFn" v-else src="../../../public/other_icon/yCai.png" alt="">
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
        author: '',//作者id
        tx: '',//头像
        authorName: 'z张三',//作者昵称
        content: '如果你发现了诈骗账号、网站和APP,欢迎在以下网站进行积极举报，同时可以拨打110电话告知诈骗信息,帮助打击违反犯罪。\n',//内容
        readNum: 1251,//阅读数
        issueDate: '2022.01.16',//发送时间

      }
    }
  },
  methods:{
    likeFn(){
      if(this.notGood === true && this.Good === false){
       return  Toast.fail('您已经踩了,不可以点赞哦');
      }
      this.Good = !this.Good
    },
    unlikeFn(){
      if(this.notGood === false && this.Good === true){
       return  Toast.fail('您已经点赞了,不可以点赞哦');
      }
      this.notGood = !this.notGood
    },
  }
}
</script>

<style scoped lang="less">
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