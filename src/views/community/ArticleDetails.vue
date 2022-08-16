<template>
  <div id="article">
    <header>
      <p>心得体会</p>
      <div class="select">
        <img src="../../../public/other_icon/back-icon.png" @click="$router.back()">
        <div class="select-item">详情</div>
      </div>
    </header>
    <div class="list">
      <div class="van-hairline--bottom art-item">
        <div class="box-header">
          <div class="left">
            <van-image
              fit="cover"
              height="45px"
              round
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
              width="45px"
            />
            <div class="nameTime">
              <p style="font-size: 16px">aaa</p>
              <p class="time" style="font-size:12px;color: #cccccc">09 / 17</p>
            </div>
          </div>
        </div>
        <div class="body">
          <van-image
            fit="cover"
            height="150px"
            radius="10"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            width="100%"
          />
          <p class="content" style="font-size: 14px">
            这是文章简略内容这是文章简略内容这是文章简略内容这是文章简略内容这是文章简略内容这是文章简略内容这是文章简略内容</p>

          <ul>
            <li>
              <img src="../../../public/navbar/ly.png" style="padding-right: 5px;width: 20px;
              height: 20px;">
              <span>123</span>
            </li>
            <li @click="clickGood()">
              <van-icon color="rgba(176,176,176)" name="good-job" size="18"/>
              <span>123</span>
            </li>

          </ul>
        </div>
      </div>

    </div>
    <Commentarea></Commentarea>

  </div>
</template>

<script>

import Commentarea from "@/components/CommentArea";

export default {
  name: "Articles",
  components: {Commentarea},
  data() {
    return {
      artList: []
    }
  },
  mounted() {
    // this.getArticle()
  },
  methods: {
    async getArticle() {
      let {data} = await this.$axios({
        method: "GET",
        url: '/posting/getAllUser'
      })
      console.log(data)
      this.artList = data
    }
  }
}
</script>

<style lang="less" scoped>
#article {
  position: relative;

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

      .select-item {
        color: rgb(96, 217, 212);
        border-bottom: 2px solid rgb(96, 217, 212);
        font-weight: 600;

      }
    }
  }

  .art-item {
    background-color: white;
    padding: 20px 20px 10px;
    margin-bottom: 15px;

    .box-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;


      .left {
        display: flex;
        justify-content: space-between;
        align-items: center;


        .nameTime {
          margin-left: 15px;


          p {
            margin: 4px 0;


          }
        }
      }

    }

    .body {
      .content {
        margin: 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        letter-spacing: 1.5px;
      }
    }

    ul {
      display: flex;
      //justify-content: space-between;
      align-items: center;
      padding: 10px 20px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:nth-child(1) {
          margin-right: 30px;
        }

        .content {
          // 两行显示，超出隐藏
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: (2);

        }

        span {
          padding-left: 5px;
        }
      }
    }


  }

}
</style>
