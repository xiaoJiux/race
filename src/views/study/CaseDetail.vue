<template>
<div id="casedetail">
  <van-sticky>
    <div id="header">
      <van-icon @click.stop="$router.back()" name="arrow-left"  style="float: left;margin-top: 4px" class="icon"/>
<!--      <span>{{$route.params.caseType}}手法解析</span>-->
      <span>N<span style="color: rgb(56,198,210)">otes</span></span>
    </div>
  </van-sticky>
  <div class="body">
    <p class="scarm-type">{{scarm.typeCase}}</p>
    <div class="technique-show">
      <img src="../../../public/other_icon/study/copy.png" style="width: 28px" alt="">
      <span>{{scarm.modus}}</span>
    </div>
    <div class="inventory">

    </div>
  </div>



</div>
</template>

<script>
export default {
  name: "CaseDetail",
  data(){
    return {
      scarm:
        {
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
        }
    }
  },
  methods:{},
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
}
</style>