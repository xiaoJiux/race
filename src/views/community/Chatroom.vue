<template>
  <div id="chatroom">
    <van-sticky>
      <div id="header">
        <van-icon @click.stop="$router.back()" name="arrow-left"
                  size="26" color="#fff" style="float: left;margin-top: 4px" class="icon"/>
        警民互动
        <van-icon name="manager" size="30" color="#fff" style="float: right;margin-top: 2px;"/>
      </div>
    </van-sticky>
    <div class="interface">
      <div class="chat">
        <ul class="list">
          <li class="item other_person">
            <van-image
              width="50px"
              height="50px"
              fit="cover"
              round
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="content">
              喝水,吃饭会被诈骗吗
            </div>
          </li>
          <li class="item user">
            <van-image
              width="50px"
              height="50px"
              fit="cover"
              round
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="content">
              喝水,吃饭会被诈骗吗
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="sendMsg">
      <label for="sendFile" class="upload-button"><van-icon size="35" color="rgb(107,224,214)" name="add-o" /></label>
      <input type="file" id="sendFile" style="display:none;">
        <input class="chat-content" type="text">
      <button class="send-btn" @click="sendMsg">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chatroom",
  data(){
    return {
      chatList:[{
        useTx:'',//用户头像
        content:'',//聊天内容
        time:'',//时间
        useName:'',//用户名
      }]
    }
  },
  methods: {
    //发送信息
    sendMsg(){

    }
  }
}
</script>

<style scoped lang="less">
#header {
  text-align: center;
  color: #fff;
  font-size: 1.4rem;
  padding: 0.8rem;
  background: linear-gradient(to bottom right, rgba(113, 235, 214), rgb(103, 217, 214));
}

#chatroom {
  .interface {
    padding: 30px 20px;

    .chat {
      .list {
        .item {
          margin-bottom: 20px;
          display: flex;

          .content {
            margin-left: 15px;
            border: 1px solid #e0dfdf;
            padding: 6px 15px;
            border-radius: 5px;
            font-size: 18px;
            max-width: 100vw - 28px;
            box-sizing: border-box;
            margin-top: 15px;
          }
        }

        .user {
          flex-direction: row-reverse;

          .content {
            margin-right: 15px;
            margin-left: 0;
            background-color: rgba(108, 226, 214, .5);
            border: none;
          }
        }
      }
    }
  }

  .sendMsg {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    position: fixed;
    align-items: center;
    bottom: 15px;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    .send-btn{
      background-color: rgba(119,224,220);
      border: none;
      border-radius: 25px;
      color: white;
      display: inline-block;
      padding: 5px 10px;
      min-width: 65px;
      box-sizing: border-box;
    }
    .chat-content{
      flex-grow: 1;
      box-sizing: border-box;
      box-shadow: 0 0 4px #a8a4a4;
      margin: 0 12px;
      border-radius: 35px;
      border: none;
      height: 35px;
      padding-left: 15px;
      width: 60vw;
    }

  }

}
</style>