<template>
  <div id="community">
    <header>
      <div class="t_header">
        <p>Logo</p>
        <span>社区</span>
        <img src="../../public/other_icon/search.png" alt="">
      </div>
      <Slider/>
    </header>
    <div class="btn_list">
      <div class="item" @click="$router.push({
    path:'/activity'
    })"
      >
        <p>反诈行动</p>
        <img src="../../public/other_icon/action.png" alt="">
      </div>
      <div class="item" @click="$router.push({
    path: '/article'
    })">
        <p>贴子</p>
        <img src="../../public/other_icon/post.png" alt="">
      </div>
      <div class="item" @click="$router.push({
    path: '/interactive'
    })">
        <p>警民互动</p>
        <img src="../../public/other_icon/postman.png" alt="">
      </div>
    </div>
    <div class="container">
      <div class="navbar">
        <div>
          <div class="point"></div>
          <span>举报分享</span>
        </div>
        <span>查看更多<van-icon name="arrow" color="#010101"/></span>
      </div>
      <div class="list">

        <div class="card" @click="$router.push({name:'shareReport'})">
          <div class="card_header">
            <div class="left">
              <van-image
                round
                width="3rem"
                height="3rem"
                fit="cover"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
              <p>张三</p>
            </div>
            <div class="right">
              虚拟网路平台诈骗
            </div>
          </div>
          <article>
            如果你发现了诈骗账号、网站和APP,欢迎在以下网站进行积极举报,同时可以拨打110电话告知诈骗信息，帮助打击违反犯罪。
          </article>
          <div class="b_info">
            <span class="user_red">阅读&nbsp;1234</span>
            <span class="rout_date">2022.10.1</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";

export default {
  name: "Community",
  components: {Slider}
}
</script>

<style scoped lang="less">
#community {
  margin-bottom: 10vh;

  header {
    min-height: 25vh;
    background-image: linear-gradient(to bottom, rgb(96, 217, 212), rgb(226, 245, 244));

    .t_header {
      box-sizing: border-box;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      font-size: 1.3rem;
      color: rgb(238, 251, 250);

      span {
        padding-right: 20px;
        font-weight: 600;
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  .btn_list {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    .item {
      width: 32.5vw;
      background-color: rgb(146, 134, 247);
      border-radius: 18px;
      position: relative;
      padding-bottom: 8vw;

      p {
        margin-bottom: 0;
        margin-left: 15%;
        color: #ffffff;
      }

      img {
        width: 10vw;
        height: 10vw;
        position: absolute;
        right: 2vw;
        bottom: -1vw;
      }
    }
  }

  .container {
    padding: 2vw;
    position: relative;

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .point {
        margin-left: 5px;
        width: 0;
        height: 0;
        border-radius: 100%;
        border: 4px solid rgb(253, 95, 111);
        display: inline-block;
        margin-bottom: 2px;
        margin-right: 8px;
      }
    }

    .card {
      background-color: rgb(171, 233, 231);
      width: 100%;
      //height: 55vw;
      box-sizing: border-box;
      border-radius: 25px;
      margin: 15px 0;
      box-shadow: 2px 2px 4px rgb(187, 187, 187);
      padding: 5%;
      padding-bottom: 30px;
      position: relative;

      .card_header {

        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          align-items: center;

          p {
            margin-left: 15px;
            font-size: 1rem;
            font-weight: 600;
            color: rgb(102, 108, 108);
          }
        }

        .right {
          background-color: rgb(255, 181, 105);
          padding: 5px 15px;
          border-radius: 30px;
          font-size: 12px;
        }

      }

      article {
        font-size: 14px;
        color: rgb(101, 110, 110);
        margin-bottom: 10px;
        margin-top: 15px;
        overflow: hidden;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

      }

      .b_info {
        position: absolute;
        bottom: 10px;
        width: 100% - 15rem;

        .user_red {
          float: left;
        }

        .rout_date {
          float: right;
        }
      }

    }
  }
}
</style>
