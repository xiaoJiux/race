<template>
<div id="study">
  <header>
    <div class="t_header">
      <p>Logo</p>
      <span>安全学堂</span>
      <img src="../../public/other_icon/search.png" alt="">
    </div>
  </header>
  <div>
    <van-image
      fit="cover"
      src="http://rekph2v9n.hn-bkt.clouddn.com/study_show.png"
    />
  </div>
<!--  推荐-->
  <div class="recommend">
    <div class="title">
      <img src="../../public/other_icon/study/commd.png" style="width: 22px;" alt="">
      为您推荐
    </div>
    <div class="list-icon">
      <div @click="$router.push({
      path:'/case'
      })">
        <img src="../../public/other_icon/study/anli-5.png" style="width: 50px;" alt="">
        <p>诈骗案例</p>
      </div>
      <div @click="$router.push({
      path:'/story'
      })">
        <img src="../../public/other_icon/study/dingwei.png" style="width: 50px;" alt="">
        <p>身边故事</p>
      </div>
      <div @click="$router.push({
      path:'/news'
      })">
        <img src="../../public/other_icon/study/zixun.png" style="width: 50px;" alt="">
        <p>资讯</p>
      </div>

    </div>
  </div>
<!--  身边故事-->
  <div class="story">
    <div class="top-title">
      <span>身边故事</span>
      <span class="s-more">查看更多&nbsp;<van-icon name="arrow" size="" /></span>
    </div>
    <div class="story-body">
      <div class="user">
        <van-image
          width="55px"
          height="55px"
          fit="cover"
          round
          :src="storyList[0].author.txUrl"
        />
        <div class="u-t-n">
          <p class="name">{{storyList[0].author.name}}</p>
          <span class="o-time">{{storyList[0].author.sendTime}}</span>
        </div>
      </div>
      <div class="u-report">
        <img src="../../public/other_icon/study/miaozhun.png" alt="">
        <span>举报对象:&nbsp;&nbsp;{{storyList[0].report}}</span>
      </div>
      <div class="s-content">
        <article>
          <router-link to>#资金欺诈行为#</router-link>
          &nbsp;&nbsp;&nbsp;&nbsp;{{storyList[0].author.content}}
        </article>
      </div>
      <div class="u-statement">
        <div :class="useful===false?'':'change'" @click="isUseful">
          <van-icon size="14" name="good-job-o" />
          <span>1234有用</span>
        </div>
        <span class="shu">|</span>
        <div :class="comfort===false?'':'change'">
          <van-icon size="14" name="like-o" @click="isComfort"  />
          <span>1234安慰</span>
        </div>
      </div>
      <div class="s-num">
        <img src="../../public/other_icon/study/xiaoxi.png" alt="">
        <span class="p-num">已有{{storyNum}}人分享了自己的故事</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
<!--最下部分,热榜,资讯-->
  <div class="s-bottom">
<!--    诈骗热榜-->
    <div class="scarm-list">
      <div class="scarm-list-header">
        <span class="hot-font">诈骗热榜</span>
        <span class="scarm-more">查看更多&nbsp;<van-icon name="arrow" /></span>
      </div>
      <div class="scarm-list-body">
        <div class="scarm-item" v-for="item in hotList" :key="item.id">
          <div class="first" :class="'top'+item.id">{{item.id}}</div>
          <div class="main-content">
            <p class="scarm-title">{{item.title}}</p>
            <p>
              <!--            来源-->
              <span class="scarm-where">{{item.platform}}</span>
              <!--            时间-->
              <span class="scarm-time">{{item.sendTime}}</span>
            </p>
          </div>
          <van-image
            width="116px"
            height="78px"
            fit="cover"
            :src="item.imgUrl"
            style="margin-right: 10px;border-radius: 15px;overflow: hidden"
          />
        </div>
      </div>
    </div>
<!--    安全资讯-->
    <div class="scarm-list">
      <div class="scarm-list-header">
        <span class="hot-font">安全资讯</span>
      </div>
      <div class="safe-list-body">
        <div class="safe-item" v-for="item in safeList">
          <div class="word-container">
<!--            标题-->
            <p class="safe-title">{{item.title}}</p>
<!--            机构-->
            <p class="platform">{{item.platform}}</p>
          </div>
          <van-image
            width="128px"
            height="85px"
            fit="cover"
            :src="item.imgUrl"
            style="margin-right: 10px;border-radius: 15px;overflow: hidden"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Study",
  data(){
    return {
      useful:false,//是否有用,默认否
      comfort:false,//是否安慰,默认否,
      storyList: [{
        author:{
          id:1,
          name:'张三',
          sendTime:'2022-02-02',
          txUrl:'https://img01.yzcdn.cn/vant/cat.jpeg',
          content: '承诺收益、引诱开户入金。最典型的就是资金盘，一些不法人士会通过宣传自己的本事,编造一些历史高收益业绩来忽悠投资者投资,对外宣称保证盈利，100%盈利等口号，当他们聚拢足够多的资金时，就会携款私逃。',//举报内容
          sort:'资金欺诈行为',//分类
        },//发帖人信息
        report:'1101*****12',//举报对象
        usefulNum:3454,//认为有用数目用户
        comfortNum:34413,//表示安慰数目用户
      }],//身边故事
      storyNum:1000,//故事数目,
      hotList:[
        {
        id:1,
        title:'以“非真实交易”界定网络交易型诈骗',//标题
        platform:"腾讯管家",//平台
        sendTime:'2020-01-01',//发送时间
        imgUrl:'https://img01.yzcdn.cn/vant/cat.jpeg'//图片
      },{
        id:2,
        title:'以“非真实交易”界定网络交易型诈骗',//标题
        platform:"腾讯管家",//平台
        sendTime:'2020-01-01',//发送时间
        imgUrl:'https://img01.yzcdn.cn/vant/cat.jpeg'//图片
      },{
        id:3,
        title:'以“非真实交易”界定网络交易型诈骗',//标题
        platform:"腾讯管家",//平台
        sendTime:'2020-01-01',//发送时间
        imgUrl:'https://img01.yzcdn.cn/vant/cat.jpeg'//图片
      }],//诈骗热榜
      safeList:[
        {
          id:'',//id
          platform:'宁波举报中心',//发帖机构,
          title:'注意!这些消息千万别告诉别人!',//内容
          imgUrl:'https://img01.yzcdn.cn/vant/cat.jpeg',//图片路径
          content:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',//内容
        },{
          id:'',//id
          platform:'宁波举报中心',//发帖机构,
          title:'注意!这些消息千万别告诉别人!',//内容
          imgUrl:'https://img01.yzcdn.cn/vant/cat.jpeg',//图片路径
          content:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',//内容
        },{
          id:'',//id
          platform:'宁波举报中心',//发帖机构,
          title:'注意!这些消息千万别告诉别人!',//内容
          imgUrl:'https://img01.yzcdn.cn/vant/cat.jpeg',//图片路径
          content:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',//内容
        }
      ]
    }
  },
  methods: {
    isUseful(){
      this.useful=!this.useful;
    },
    isComfort(){
      this.comfort=!this.comfort;
    }
  }
}
</script>

<style scoped lang="less">
#study{
  padding-bottom: 10vh;
  header {
    background-color: rgb(96, 217, 212);
    padding: 10px 0;
    .t_header {
      box-sizing: border-box;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      font-size: 18px;
      color: rgb(238, 251, 250);
      max-height: 6vh;

      span {
        padding-right: 20px;
        font-weight: 600;
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  .recommend{
    padding: 15px;
    .title{
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: bolder;
      margin-bottom: 20px;
      img{
        margin-right: 10px;
      }
    }
    .list-icon{
      display: flex;
      justify-content: space-around;
      text-align: center;
      p{
        text-align: center;
        margin: 0;
      }
    }
  }
  .story{
    margin: 15px;
    .top-title{
      border-left: 4px solid rgb(0,117,106);
      box-sizing: border-box;
      padding-left: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      .s-more{
        font-size: 14px;
      }
    }
    .story-body{
      padding: 15px 5px;
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
  .s-bottom{
    background-color: rgb(246,246,246);
    padding: 15px;
  }
  .scarm-list{
    background-color: #ffffff;
    border-radius: 15px;
    .scarm-list-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 10px;
      .hot-font{
        font-size: 18px;
        border-left: 4px solid rgb(0,218,197);
        padding-left: 5px;
      }
      .scarm-more{
        font-size: 12px;
        color: #cccccc;
      }

    }
    .scarm-list-body{
      margin-top: 20px;
      margin-left: 5px;
      .scarm-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        .first{
          width: 36px;
          height: 36px;
          border-radius: 100%;
          text-align: center;
          //line-height: 38px;
          font-size: 26px;
          color: white;
          margin-right: 5px;
          &.top1{
            background-color: rgb(255,92,92);
          }
          &.top2{
            background-color: rgb(255,139,105);
          }
          &.top3{
            background-color: rgb(255,170,105);
          }
        }
        .main-content{
          max-width: 45%;
          .scarm-title{
            font-size: 13px;
          }
          .scarm-where,.scarm-time{
            font-size: 12px;
            color: #7c7979;
          }
          .scarm-time{
            float: right;
            margin-right: 5px;
          }

        }
      }

    }
    .safe-list-body{
      padding: 0 10px;

      .safe-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: .5px solid silver;
        padding-bottom: 10px;
        padding-top: 10px;
        box-sizing: border-box;
        .word-container{
          max-width: 60vw;
          display: flex;
          flex-direction: column;
          span{
            margin: 0;
          }
          .safe-title{
            font-size: 14px;
          }
          .platform{
            font-size: 12px;
          }
        }
      }
    }
  }

}
</style>