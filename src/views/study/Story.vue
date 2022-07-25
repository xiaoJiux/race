<template>
<div id="story">
<Header :title="$route.meta.title"></Header>
<div class="swiper">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item,index) in swiper" :key="index">
      <van-image
        fit = "cover"
        width="100%"
        height="25vh"
        :src="item.imgUrl"
      />
    </van-swipe-item>
  </van-swipe>
</div>
  <div class="story">
    <div class="story-item" v-for="(item,index) in storyList" :key="index">
      <div class="user">
        <van-image
          width="55px"
          height="55px"
          fit="cover"
          round
          :src="item.author.txUrl"
        />
        <div class="u-t-n">
          <p class="name">{{item.author.name}}</p>
          <span class="o-time">{{item.author.sendTime}}</span>
        </div>
      </div>
      <div class="u-report">
        <img src="../../../public/other_icon/study/miaozhun.png" alt="">
        <span>举报对象:&nbsp;&nbsp;{{item.report}}</span>
      </div>
      <div class="s-content">
        <article>
          <router-link to>#资金欺诈行为#</router-link>
          &nbsp;&nbsp;&nbsp;&nbsp;{{item.author.content}}
        </article>
      </div>
      <div class="u-statement">
        <div :class="item.author.useful===false?'':'change'" @click="isUseful(index,item.author.useful)">
          <van-icon size="14" name="good-job-o" />
          <span>1234有用</span>
        </div>
        <span class="shu">|</span>
        <div :class="item.author.comfort===false?'':'change'" @click="isComfort(index,item.author.comfort)">
          <van-icon size="14" name="like-o"   />
          <span>1234安慰</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Story",
  components: {Header},
  data(){
    return {
      swiper:[
        {//轮播图片
        imgUrl:'http://rekph2v9n.hn-bkt.clouddn.com/%E6%9C%AA%E5%91%BD%E5%90%8D%E7%9A%84%E8%AE%BE%E8%AE%A1.png',
      },{
        imgUrl:'http://rekph2v9n.hn-bkt.clouddn.com/%E6%9C%AA%E5%91%BD%E5%90%8D%E7%9A%84%E8%AE%BE%E8%AE%A1%20(4).png',
      },{
        imgUrl:'http://rekph2v9n.hn-bkt.clouddn.com/%E6%9C%AA%E5%91%BD%E5%90%8D%E7%9A%84%E8%AE%BE%E8%AE%A1%20(3).png',
      },{
        imgUrl:'http://rekph2v9n.hn-bkt.clouddn.com/%E6%9C%AA%E5%91%BD%E5%90%8D%E7%9A%84%E8%AE%BE%E8%AE%A1%20(2).png',
      },],
      storyList: [{
        author:{
          id:1,
          name:'张三',
          sendTime:'2022-02-02',
          txUrl:'https://img01.yzcdn.cn/vant/cat.jpeg',
          content: '承诺收益、引诱开户入金。最典型的就是资金盘，一些不法人士会通过宣传自己的本事,编造一些历史高收益业绩来忽悠投资者投资,对外宣称保证盈利，100%盈利等口号，当他们聚拢足够多的资金时，就会携款私逃。',//举报内容
          sort:'资金欺诈行为',//分类
          useful:false,//用户是否认为有用,
          comfort:false,//用户是否表示安慰
        },//发帖人信息
        report:'1101*****12',//举报对象
        usefulNum:3454,//认为有用数目用户
        comfortNum:34413,//表示安慰数目用户
      },{
        author:{
          id:1,
          name:'张三',
          sendTime:'2022-02-02',
          txUrl:'https://img01.yzcdn.cn/vant/cat.jpeg',
          content: '承诺收益、引诱开户入金。最典型的就是资金盘，一些不法人士会通过宣传自己的本事,编造一些历史高收益业绩来忽悠投资者投资,对外宣称保证盈利，100%盈利等口号，当他们聚拢足够多的资金时，就会携款私逃。',//举报内容
          sort:'资金欺诈行为',//分类
          useful:false,//用户是否认为有用,
          comfort:false,//用户是否表示安慰
        },//发帖人信息
        report:'1101*****12',//举报对象
        usefulNum:3454,//认为有用数目用户
        comfortNum:34413,//表示安慰数目用户
      },{
        author:{
          id:1,
          name:'张三',
          sendTime:'2022-02-02',
          txUrl:'https://img01.yzcdn.cn/vant/cat.jpeg',
          content: '承诺收益、引诱开户入金。最典型的就是资金盘，一些不法人士会通过宣传自己的本事,编造一些历史高收益业绩来忽悠投资者投资,对外宣称保证盈利，100%盈利等口号，当他们聚拢足够多的资金时，就会携款私逃。',//举报内容
          sort:'资金欺诈行为',//分类
          useful:false,//用户是否认为有用,
          comfort:false,//用户是否表示安慰
        },//发帖人信息
        report:'1101*****12',//举报对象
        usefulNum:3454,//认为有用数目用户
        comfortNum:34413,//表示安慰数目用户
      },],//身边故事
    }
  },
  methods:{
    //有用
    isUseful(idx,isUseful){
      console.log(idx);
      this.storyList[idx].author.useful = !isUseful;
    },
    //安慰
    isComfort(idx,iscomfort){
      console.log(idx.iscomfort);
      this.storyList[idx].author.comfort = !iscomfort;
    }
  },
  created() {

  }
}
</script>

<style scoped lang="less">
#story{
  background-image: linear-gradient(to bottom, rgb(146, 238, 233),rgb(255,255,255));
  background-size: 100vw 120vh;
  background-repeat: no-repeat;
  .story-item{
    padding: 15px;
    .user{
      display: flex;
      align-items: center;
      .u-t-n{
        padding-left: 15px;
        p{
          margin: 0;
        }
        .name{
          font-size: 15px;
          margin-bottom: 8px;
        }
        .o-time{
          font-size: 12px;
          color: #8a8181;
        }
      }
    }
    .u-report{
      display: inline-flex;
      align-items: center;
      border: 1px solid #cccccc;
      margin-top: 10px;
      padding: 2px 10px 2px 5px;
      img{
        width: 20px;
        height: 20px;

      }
      span{
        font-size: 14px;
        color: #cccccc;
        padding-left: 10px;
      }
    }
    .s-content{
      margin: 15px 0;
      article{
        a{
          font-size: 18px;
          color: rgb(0,218,197);
        }
        font-size: 14px;
        color: #868282;
        letter-spacing: 2px;
        line-height: 24px;
      }
    }
    .u-statement{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .shu{
        padding: 0 6px;
        font-size: 16px;
        color: #868282;
      }
      div{
        font-size: 12px;
        color: #868282;
      }
      .change{
        color: rgb(0,218,197);
      }
    }
  }
  .s-num{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(231,249,248);
    padding: 10px 15px;
    margin-top: 10px;
    img{
      width: 50px;
      height: 50px;
    }
    span{
      font-size: 12px;
    }
  }

}

</style>