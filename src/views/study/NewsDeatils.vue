<template>
  <div id="news">
    <header>
      <p>安全学堂</p>
      <div class="select">
        <img src="../../../public/other_icon/back-icon.png" @click="$router.back()">
        <div :class="active===1?'active-item':''" class="select-item" @click="active=1"><i/><i/>校园<i/><i/></div>
        <div :class="active===2?'active-item':''" class="select-item" @click="active=2"><i/><i/>警讯<i/><i/></div>
      </div>
    </header>
    <div class="body">
      <!--      //富文本-->
      <div v-html=""></div>

      <div class="collect-like">
        <div class="item">
          <div class="left">
            收藏 <span>123</span>
          </div>
          <van-icon name="like-o" size="18"/>
        </div>
        <div class="item">
          <div class="left">
            收藏 <span>{{ item.count }}</span>
          </div>
          <van-icon name="good-job-o" size="18"/>
        </div>
      </div>
    </div>
    <CommentArea></CommentArea>
  </div>
</template>

<script>
import CommentArea from "@/components/CommentArea";

export default {
  name: "NewsDeatils",
  components: {CommentArea},

  data() {
    return {
      active: 2,
      native: 1,
      check: [{
        name: "用户",
        value: 1
      }, {
        name: "官方",
        value: 2
      }],
      item: null
    }
  },
  methods: {},
  created() {
    this.item = this.$route.query.item
    
  }

}
</script>

<style lang="less" scoped>
#news {
  header {
    padding: 10px 20px;

    p {
      text-align: center;
      font-size: 18px;
      color: rgb(96, 217, 212);
      line-height: 32px;
      font-weight: 600;
      margin: 0 0 15px;
    }

    .select {
      display: inline-flex;
      justify-content: start;
      align-items: center;

      img {
        width: 9px;
        height: 15px;
        margin-right: 10px;
      }

      .active-item {
        background: linear-gradient(rgb(0, 219, 183), rgba(10, 193, 211));
      }

      .select-item {
        //background: linear-gradient(rgb(0, 219, 183), rgba(10, 193, 211));
        background-color: rgba(196, 196, 196);
        line-height: 24px;
        font-size: 12px;
        border-radius: 8px;
        color: #fff;
        margin: 0 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2px;

        i {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: white;
          margin: 0 2px;
        }
      }
    }
  }

  .body {
    padding: 10px 20px;

    .collect-like {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 15px;
        background-color: rgb(242, 242, 242);
        flex-grow: 1;

        &:nth-child(1) {
          margin-right: 20px;
        }

        .left {
          font-size: 12px;
          color: #818181;
        }
      }
    }
  }
}
</style>
