<template>

  <div class="page-box">
    <header class="header">
      <van-icon color="" name="arrow-left" size="25" @click="$router.back()"/>
      <span>答题测试</span>
      <span></span>
    </header>
    <div class="c-1">
      <div>
        <span class="TiMuBiaoti1">单选题</span>
        <span class="TiMuBiaoti2">{{ a }}/10</span>
      </div>
      <div class="c-1-2">
        <span><img alt="" class="cimg" src="../../public/other_icon/time.png"></span>
        <span>倒计时</span>
        <van-count-down :time="time" class="a" @finish="finish()"/>
      </div>
    </div>
    <div style="margin: 15px 15px;">
      {{ neiron }}
    </div>

    <van-radio-group v-model="radio">
      <div class="Xuanxiang2" v-on:click="xuanxian1()">
        <van-radio icon-size="24px" name="1">正确</van-radio>
      </div>
      <div class="Xuanxiang2" v-on:click="xuanxian2()">
        <van-radio icon-size="24px" name="2">错误</van-radio>
      </div>
    </van-radio-group>
    <div :class="{'colordisplay':display}" class='Answer-Button' @click="toLoading()" v-on:click="text()">
      <span>下一题</span>
    </div>
    <!-- <p v-on:click="text()" class='mycolor' :class="{'colordisplay':display}"><span>1.1我的对象更改&&绑定test</span></p> -->

  </div>


</template>

<script>

import {Toast} from "vant";

export default {
  data() {
    return {
      display: false,
      neiron: '李爷爷去ATM机取钱，发现钱取不出，这时取款机上显示出一些程序，让按照程序取钱，李爷爷想了一会，就照办了。',
      a: 1,
      answer: 2,
      radio: '0',
      time: 10 * 1000,
      sum: 0,
    };
  },
  computed: {},
  methods: {
    text: function () {
      this.display = false;
      if (this.a == 1) {
        if (this.radio == this.answer) {
          this.sum++
        }
        this.neiron = '凡是接到自称公检法人员要求转账汇款的，都是诈骗。'
        this.answer = 1
      } else if (this.a == 2) {
        if (this.radio == this.answer) {
          this.sum++
        }
        this.neiron = '小王接到电话称其有一张法院传票,后电话又转接到一位警官处，对方称要通过电话做笔录。小陈立即挂断电话，因为警方不可能通过电话来调查案件。'
        this.answer = 1
      } else if (this.a == 3) {
        if (this.radio == this.answer) {
          this.sum++
        }
        this.neiron = '短信:***台招咨理财。日利息超过四大银行5倍，随存随取,方便可靠,网址********”。该短信是真的。'
        this.answer = 2
      } else if (this.a == 4) {
        if (this.radio == this.answer) {
          this.sum++
        }
        this.neiron = '凡是自称公安人员要求通过电话、QQ、微信做笔录的，都是诈骗。'
        this.answer = 1
      } else if (this.a == 5) {
        if (this.radio == this.answer) {
          this.sum++
        }
        this.neiron = '公安局五不一打指的是:①不点:不明短信链接不要点;②不怕:冒充公检法诈骗;③不信:转账指令不轻信;④不贪:积分兑换现金不要贪;⑤不转帐:不核实清楚,千万别转账;⑥一打:发现被骗立即拨打110报警。'
        this.answer = 1
      } else if (this.a == 6) {
        if (this.radio == this.answer) {
          this.sum++
        }
        this.neiron = '陈某收到短信:“贷款平台，60万元以下贷款，即刻到账,年利息低至万分之一,联系人:余***，电话:130******”。陈某缺钱,立刻拨打电话贷款。'
        this.answer = 2
      } else if (this.a == 7) {
        if (this.radio == this.answer) {
          this.sum++
        }
        this.neiron = '凡是要求通话内容绝对保密，或出示“通缉令”、“资金清查”、“安全账户”、“警官证”等，都是真的。'
        this.answer = 2
      } else if (this.a == 8) {
        if (this.radio == this.answer) {
          this.sum++
        }
        this.neiron = '银行卡背后的三位数的验证码以及密码不能向他人透露'
        this.answer = 1
      } else if (this.a == 9) {
        if (this.radio == this.answer) {
          this.sum++
        }
        this.neiron = '客服一般不会主动要求退款，不轻信与你联系的“客服”。'
        this.answer = 1
      }
      if (this.a == 10) {
        if (this.radio == this.answer) {
          this.sum++
        }
        alert("答题结束")
        alert("一共答对" + this.sum + "题")
      } else {
        this.a = this.a + 1;
        this.radio = '0';
      }

    },

    toLoading() {
      this.$toast.loading({
        mask: true,
        message: '加载中...',
      });
    },

    xuanxian1: function () {
      this.radio = "1";
      this.display = true
    },
    xuanxian2: function () {
      this.radio = "2";
      this.display = true
    },
    finish() {
      Toast('倒计时结束');
    },
  }
};
</script>

<style>
.page-box {
  background-color: #eff6fe;
  height: 100vh;

}

.a {
  color: #3994ef;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 45px 0 20px;
  color: #000;
  font-size: 20px;
  background-color: #fff;
  height: 5%;
}

.TiMuBiaoti1 {
  background-color: #ffa454;
  color: #fff;
  padding: 2px 5px
}

.TiMuBiaoti2 {
  background-color: #ffffff;
  color: #000;
  padding: 2px 5px
}

.cimg {
  width: 0.8rem;
  height: 0.8rem;
}

.c-1-2 {
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50px 0px 0px 50px;
  padding-left: 10px;
  color: #3994ef;
}

.c-1 {
  display: flex;
  margin: 15px 15px;
  justify-content: space-between;
}

.Answer-Button {
  width: 80%;
  background-color: #3994ef;
  color: #fff;
  text-align: center;
  padding: 10px 1px;
  margin: 15px 15px;
  border-radius: 5px;
  position: fixed;
  bottom: 0;
  left: 8%;
  display: none
}

.colordisplay {
  width: 80%;
  background-color: #3994ef;
  color: #fff;
  text-align: center;
  padding: 10px 1px;
  margin: 15px 15px;
  border-radius: 5px;
  position: fixed;
  bottom: 0;
  left: 8%;
  display: block
}

.Xuanxiang1 {
  display: flex;
  background-color: #fff;
  padding: 10px 1px;
  border-radius: 10px;
  margin: 15px 15px;
  border: 2px solid #3994ef
}

.Xuanxiang2 {
  display: flex;
  background-color: #fff;
  padding: 10px 1px;
  border-radius: 10px;
  margin: 15px 15px;

}

</style>
