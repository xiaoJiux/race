<template>
  <div id="Commentarea">
    <p class="van-hairline--bottom title">热门评论</p>
    <ul class="forum">
      <li v-for="(item,index) in chart" :key="index" class="van-hairline--bottom father-item">
        <div class="box-header">
          <div class="left">
            <van-image
              fit="cover"
              height="45px"
              round
              :src="item.userImg"
              width="45px"
            />
            <div class="nameTime">
              <p style="font-size: 16px">{{ item.userName }}</p>
            </div>
          </div>
        </div>
        <div class="box-content">
          <p class="content" style="font-size: 12px">{{item.say}}</p>
          <div class="child-header">
            <p class="time" style="font-size:10px;color: #cccccc">{{item.data?item.date.split(" ")[0]:''}}<span
              style="margin-left: 15px;font-size: 10px;background-color:#eeeeee;padding: 2px 8px;color: #918f8f;border-radius: 15px;">回复</span>
            </p>
            <div class="right-hot">
              <van-icon name="arrow-up"/>
              <span>{{ item.likeCOUNT }}</span>
              <van-icon name="arrow-down"/>
            </div>
          </div>
        </div>
<!--        <ul class="child-forum">-->
<!--          <li>-->
<!--            <span class="name">张无忌</span> ：哈哈哈-->
<!--          </li>-->
<!--          <li>-->
<!--            <span class="name">张无忌</span> ：哈哈哈-->
<!--          </li>-->
<!--        </ul>-->
      </li>
    </ul>
    <div class="van-hairline--top input">
      <input v-model="say" class="" placeholder="电信诈骗手法高，提高警惕莫入套" type="text">
      <span :style="isNone?'color:rgba(64, 195, 239,.6)':'color:rgba(64, 195, 239)'" @click="sendMsg">发送</span>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "Commentarea",
  data() {
    return {
      say: '',
      isNone: true,
    }
  },
  computed:{...mapState(["userData"])},
  props:["chart","nID"],
  methods: {
    async sendMsg() {
      this.$emit('send',{say:this.say})
      this.say = ''
    }
  },
  watch: {
    say(value) {
      if (value !== '') {
        this.isNone = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
#Commentarea {
  padding: 10px 0;

  .title {
    margin: 10px 20px;
    padding-left: 15px;
    border-left: 4px solid rgb(0, 207, 197);
    color: rgb(95, 211, 188);
    font-weight: 600;
  }

  .forum {
    padding: 20px 0;
    margin: 0 20px;

    .father-item {
      margin: 0;
      padding: 0 0 20px;

      .box-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          display: flex;
          justify-content: space-between;
          //align-items: center;


          .nameTime {
            margin-left: 15px;

            p {
              margin: 4px 0;
            }
          }
        }

      }

      .box-content {
        position: relative;
        top: -10px;

        .content {
          line-height: 18px;
        }

        .child-header {
          padding-left: 65px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0;

          .right-hot {
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
              font-size: 10px;
              padding: 0 6px;
            }
          }

          .time {
            font-size: 10px;
            margin: 0;
          }
        }

        .content {
          margin: 0;
          padding-left: 65px;
          font-size: 14px;
        }
      }

      .child-forum {
        margin-left: 65px;
        background-color: #eeeeee;
        border-radius: 8px;
        font-size: 12px;
        padding: 5px;

        li {
          line-height: 18px;

          .name {
            color: rgb(64, 195, 239);
          }
        }
      }
    }
  }

  .input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px 12px 10px;
    position: fixed;
    bottom: 0;
    width: 100vw;
    box-sizing: border-box;
    background-color: white;

    input {
      border: none;
      flex-grow: 1;
      font-size: 14px;
    }

    span {
      padding-left: 50px;
      font-size: 12px;
    }
  }

}
</style>
