<template>
  <div id='building'>
    <div class="u-statement">

      <div :class="share===false?'':'change'" v-on:click="show = true">
        <!--          <van-icon name="chat-o" size="20" />-->
        <img src="../../public/navbar/ly.png" style="width: 20px;height:20px;padding-right: 2px">
        <span>留言</span>
      </div>

      <div :class="useful===false?'':'change'" @click="isUseful">
        <van-icon name="good-job-o" size="20"/>

        <span>{{ chatData }}</span>
      </div>

      <div :class="comfort===false?'':'change'">
        <van-icon name="share-o" size="20" @click="isComfort"/>
        <span></span>
      </div>
      <div> <!--				<van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />-->
        <!--				<van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">-->
        <!--					<van-cell-group>-->
        <!--						<input type="text" v-model="txt" placeholder="输入留言" @click="changeMsg()">-->
        <!--					-->
        <!--					<van-button style="color: #fff;" round type="info" @click="add()">发表</van-button>-->
        <!--						<br>-->
        <!--&lt;!&ndash; 						{{txt}} &ndash;&gt;-->
        <!--						<br>-->
        <!--						<div>-->
        <!--							<div v-for="item,index in list" >-->
        <!--								<div>-->
        <!--									<van-image-->
        <!--									  fit="cover"-->
        <!--									  height="3rem"-->
        <!--									  round-->
        <!--									  src="https://img01.yzcdn.cn/vant/cat.jpeg"-->
        <!--									  width="3rem"-->
        <!--									/>-->
        <!--									憨憨{{index+1}}:-->
        <!--									-->
        <!--									{{item}}-->
        <!--								</div>-->
        <!--							</div>-->
        <!--						</div>-->
        <!--						&lt;!&ndash; <span>{{txt}}</span> &ndash;&gt;-->
        <!--					</van-cell-group>-->
        <!--				</van-popup>--></div>

    </div>
  </div>
</template>

<script>
import {
  Toast
} from 'vant';

export default {
  name: "home-page",
  data() {
    return {
      count: null,
      txt: '', //分享留言内容
      msg: '',
      fx: 0,//留言人数
      list: [],
      index: 0,
      show: false,
      showShare: false,
      useful: false, //是否有用,默认否
      comfort: false, //是否收藏,默认否,
      share: false, //是否分享,默认否,
      value: '',
      storyList: [{
        author: { //发帖人信息
          id: 1,
          txUrl: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        },
        usefulNum: 65, //认为有用数目用户
        comfortNum: 35, //表示收藏数目用户

      }],
      options: [{
        name: '微信',
        icon: 'wechat'
      },
        {
          name: '微博',
          icon: 'weibo'
        },
        {
          name: '复制链接',
          icon: 'link'
        },
        {
          name: '分享海报',
          icon: 'poster'
        },
        {
          name: '二维码',
          icon: 'qrcode'
        },
      ],
    }
  },
  props: ['chatData', 'chatId'],
  methods: {
    isUseful() {
      this.useful = !this.useful;
      if (this.useful === true) {
        this.storyList[0].usefulNum++;
      } else {
        this.storyList[0].usefulNum--;
      }
    },
    isComfort() {
      this.comfort = !this.comfort;
      if (this.comfort === true) {
        this.storyList[0].comfortNum++;
      } else {
        this.storyList[0].comfortNum--;
      }
    },
    isshare() {
      this.share = !this.share;
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    changeMsg: function () {
      this.msg = this.txt
    }, add() {
      if (this.txt == '') {
        alert("说点啥呗");
      } else {
        this.list.push(this.txt);
        this.txt = ''
        this.fx++;
      }

    }
    // 接受组件一抛出来的数据，并且更新data中的数据


  },
  created() {

  }

}
</script>

<style lang="less" scoped>
.u-statement {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;

  div {
    padding-left: 15px;
    font-size: 10px;
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 5px;
  }

  .shu {
    padding: 0 6px;
    font-size: 16px;
    color: #868282;
  }


  .change {
    color: rgb(0, 218, 197);
  }
}

#building {

  width: 100%;
  height: 100%;
  //position: fixed;
  background-size: 100% 100%;
}

#container {
  width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style>
