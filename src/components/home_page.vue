<template>
  <div id='building'>
    <div class="u-statement" @click.stop>

      <div >
        <!--          <van-icon name="chat-o" size="20" />-->
        <img src="../../public/navbar/ly.png" style="width: 20px;height:20px;padding-right: 2px">
        <span>留言</span>
      </div>

      <div >
        <van-icon :color="color?'rgb(8,198,201)':''" @click="like" name="good-job-o" size="20"/>

        <span :style="color?'color:rgb(8,198,201)':''">{{ chatData.likeCOUNT }}</span>
      </div>

      <div >
        <van-icon name="share-o" size="20" />
        <span>{{chatData.saveCOUNT}}</span>
      </div>

    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "home-page",
  data() {
    return {
      color:false
    }
  },
  computed:{...mapState(["userData"])},
  props: ['chatData', 'chatId'],
  methods: {
    like(){
      console.log (1)
      this.$emit("onLike", { id:this.chatData.id })
      this.color = true
    }
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
