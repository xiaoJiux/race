<template>
<div id="case">
  <van-sticky>
    <div id="header">
      <van-icon @click.stop="$router.back()" name="arrow-left" color="#fff" style="float: left;margin-top: 4px" class="icon"/>
      <span>诈骗案例</span>
      <i style="width: 18px;height: 18px;"></i>
    </div>
  </van-sticky>
<!-- 诈骗案例 -->
  <div class="top-pic" style="padding: 10px" >
    <van-image
      fit="contain"
      :src="imgU"
    />
  </div>
  <div class="" style="margin: 15px;background-color: white;padding: 15px 10px;border-radius: 15px">
    <h3>诈骗案例</h3>
    <van-row gutter="10" type="flex" justify="space-between" >
      <van-col @click="$router.push({
      path: `/case/${item.name}`,
      name:'caseDetail',
      params:{
        id:index,
        caseType:item.name
      }

      })" span="6" v-for="(item,index) in caseType" :key="index" style="text-align: center;padding-bottom: 15px">
        <img :src="item.imgUrl" style="width: 60px;height: 60px;" alt="">
        <p style="margin: 0;font-size: 12px" >{{item.name}}</p>
      </van-col>
    </van-row>
  </div>

<!--诈骗专题-->
  <h3 style="margin-left: 20px">诈骗专题</h3>
  <div class="case-topic" style="padding:0 20px;overflow-y: scroll;">
    <div class="topic-box">
      <div class="topic-block">
        <van-image
          fit="cover"
          width="65vw"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p>几年春节回家有多难?</p>
      </div>
      <div class="topic-block">
        <van-image
          fit="cover"
          width="65vw"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p>几年春节回家有多难?</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "case",
  data(){
    return {
      imgU:require("../../assets/bg.jpg"),
      active:0,
      caseType:[{
        name:'交易诈骗',//诈骗分类名字
        imgUrl:require('../../../public/other_icon/study/case/jiaoyi.png'),//图片
      },{
        name:'中奖诈骗',
        imgUrl:require('../../../public/other_icon/study/case/zhongjiang.png'),
      },{
        name:'裸聊诈骗',
        imgUrl:require('../../../public/other_icon/study/case/luoliu.png'),
      },{
        name:'防伪诈骗',
        imgUrl:require('../../../public/other_icon/study/case/fangmao.png'),
      },{
        name:'游戏诈骗',
        imgUrl:require('../../../public/other_icon/study/case/youxi.png'),
      },{
        name:'杀猪盘诈骗',
        imgUrl:require('../../../public/other_icon/study/case/shazp.png'),
      },{
        name:'金融诈骗',
        imgUrl:require('../../../public/other_icon/study/case/jinrong.png'),
      },{
        name:'赌博诈骗',
        imgUrl:require('../../../public/other_icon/study/case/dubo.png'),
      },{
        name:'兼职诈骗',
        imgUrl:require('../../../public/other_icon/study/case/jianzhi.png'),
      },]
    }
  },
  methods:{
    fn(){
      console.log(1);
    }
  }
}
</script>

<style scoped lang="less">
#header {
  text-align: center;
  color: #fff;
  font-size: 16px;
  padding: 0.8rem;
  background: linear-gradient(to bottom right, rgba(113, 235, 214), rgb(103, 217, 214));
  display: flex;
  justify-content: space-between;
}
#case{
  background-color: rgb(241, 240, 240);
  padding-bottom: 50px;
  .case-show{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .case-topic::-webkit-scrollbar{
    width: 0;
  }
  .topic-box{
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    width: 1000vw;


    .topic-block{
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      margin-right: 20px;
      p{
        margin: 0;
        padding-top: 5px;
        padding-left: 15px;
        height: 8vh;
        font-size: 16px;

      }
    }
  }
}
</style>