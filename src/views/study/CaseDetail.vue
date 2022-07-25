<template>
<div id="casedetail">
  <van-sticky>
    <div id="header">
      <van-icon @click.stop="$router.back()" name="arrow-left"  style="float: left;margin-top: 4px" class="icon"/>
<!--      <span>{{$route.params.caseType}}手法解析</span>-->
      <span style="font-size: 20px">N<span style="color: rgb(56,198,210)">otes</span></span>
    </div>
  </van-sticky>
  <div class="body" style="background-image: linear-gradient(rgb(56,198,210),rgb(179,81,194))">
    <p class="scarm-type">{{scarm.typeCase}}</p>
    <div class="technique-show">
      <img @click="copyContent" src="../../../public/other_icon/study/copy.png" style="width: 28px;position: relative;top: 8px" alt="">{{scarm.modus}}
    </div>
    <h3 style="margin-left: 30px;color: white">手法揭秘</h3>
    <div class="inventory">
      <div class="inventory-item" v-for="(item,index) in scarm.method" :key="index">
        <div class="top-icon">
          <div class="lt-icon" :style="{backgroundColor: `rgb(237,${112+index*30},27)`}">
            盘点{{index + 1 }}
          </div>
          <div class="rt-title">
            {{item.title}}
          </div>
        </div>
        <article>
          {{item.details}}
        </article>
      </div>
    </div>
  </div>

  <div class="more-case" >
    <h4 style="margin-left: 15px;">更多防骗案例</h4>
    <div class="and-more">
      <div class="item" v-for="(item,index) in moreCase" :key="index">
        <div class="content">
          <article>
            {{item.content}}
          </article>
          <van-image
            width="35%"
            fit="contain"
            :src="item.imgUrl"
          />
        </div>
        <span>{{ item.scan }}浏览量</span>
      </div>

    </div>
  </div>


</div>
</template>

<script>
export default {
  name: "CaseDetail",
  data(){
    return {
      scarm: {
          typeCase:'交易诈骗',
          modus:'在购物过程中以"无法发货,包裹扣押"等理由诱导受害者入局实施诈骗',//诈骗的方式,首发
          method:[//手法
            {
              id:1,
              title:'先付款后发货',//类标题
              details:"在交易中骗子以“预付货款”、“定金锁货\"等为由进行诈骗。"//介绍
            },
            {
              id:2,
              title:'虚假退货',//类标题
              details:"冒充网店客服谎称订单失败要给买家退款，引诱买家提供个人信息或扫描二维码。"//介绍
            }
          ]
        },
      moreCase:[{
        id:1,
        scan:'1000',//浏览量
        content:'网贷诈骗是一种新型诈骗方法,主要通过欺骗的手段，让被骗者进行网贷,从而骗取钱财。该诈骗的\n',//内容
        imgUrl:'https://img01.yzcdn.cn/vant/cat.jpeg'
      },{
        id:2,
        scan:'1000',//浏览量
        content:'网贷诈骗是一种新型诈骗方法,主要通过欺骗的手段，让被骗者进行网贷,从而骗取钱财。该诈骗的\n',//内容
        imgUrl:'https://img01.yzcdn.cn/vant/cat.jpeg'
      }]
    }
  },
  methods:{
    //复制内容
    copyContent(){

    }
  },
  mounted() {
    console.log(this.$route.params);
  }
}
</script>

<style scoped lang="less">
#header {
  text-align: center;
  font-size: 16px;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
}
#casedetail{
  background-color: rgba(243, 243, 243, 0.99);
  min-height: 100vh;
  .body{
    padding: 10px;
    .scarm-type{
      color: white;
      font-size: 1.17rem;
      margin: 10px 30px;
      font-weight: 600;
    }
    .technique-show{
      line-height: 28px;
      letter-spacing: 3px;
      font-size: 14px;
      background-color: rgb(239,239,239);
      padding: 10px;
      margin: 10px 15px;
    }
    .inventory{
      margin: 5px 15px;
      font-size: 12px;
      .inventory-item{
        margin: 10px 0;
        background-color: rgb(239,239,239);
        padding: 10px;
        .top-icon{
          display: flex;
          justify-content: space-between;
          position: relative;
          padding-top: 25px;
          .rt-title{
            position: absolute;
            right: -10px;
            top: -10px;font-size: 14px;
            padding: 3px 5px 3px 48px;
            color: #e01287;
            font-weight: 600;
            border-bottom-left-radius: 100%;
            background-color: #f5e748;

          }
          .lt-icon{
            position: absolute;
            left: -10px;
            top: -10px;
            color: white;
            padding: 4px 6px;
          }
        }
      }
    }
  }
  .more-case{
    .and-more{
      padding: 15px;
      .item{
        margin-bottom: 15px;
        span{
          font-size: 12px;
          color: #cccccc;

        }
        .content{
          display: flex;
          justify-content: space-between;

          article{
            max-width: 55%;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}
</style>