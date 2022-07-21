<template>
<div id="article">
  <header>
    <van-icon @click.stop="$router.back()" name="arrow-left"
              size="18" color="#fff" style="float: left;margin-top: 4px" class="icon"/>
    {{$route.meta.title}}
  </header>
  <div class="a_container">
    <div class="article_card" @click="$router.push({
    // path:'/article/123'
    path:`/article/${123}`
    })">
      <van-image
        width="38vw"
        height="32vw"
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="word_content">
        <p>玛卡巴卡玛卡巴卡玛卡巴卡玛卡巴卡玛卡巴卡玛卡巴卡</p>
        <div class="xx_content">
          <span class="out_name">xxx</span>
          <span class="time">2022-07-08 17:51</span>
        </div>
      </div>
    </div>
    <div class="article_card">
      <van-image
        width="38vw"
        height="32vw"
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="word_content">
        <p>玛卡巴卡玛卡巴卡玛卡巴卡玛卡巴卡玛卡巴卡玛卡巴卡</p>
        <div class="xx_content">
          <span class="out_name">xxx</span>
          <span class="time">2022-07-08 17:51</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from "@/components/Header";
import WaterFall from "@/components/WaterFall";//下拉刷新

export default {
  name: "Articles",
  components:{Header,WaterFall},
  data(){
    return {

    }
  },
  mounted() {

  },
  methods:{

  }
}
</script>

<style scoped lang="less">
#article{
  position: relative;
  header{
    height: 22vh;
    background: linear-gradient(to bottom right,rgb(114,235,214),rgb(103,215,212));
    box-shadow: 0 2px 6px rgb(103,215,212);
    text-align: center;
    color: #ffffff;
    font-size: 18px;
    padding: 0.8rem;
    box-sizing: border-box;
  }
  .a_container{
    position: absolute;
    top: 12vh;
    margin:0 15px;
    box-sizing: border-box;
    .article_card{
      box-shadow: 1px 1px 4px rgb(183, 192, 191);
      border-radius: 15px;
      background-color: white;
      padding: 10px;
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 20px;

      .van-image{
        border-radius: 12px;
        overflow: hidden;
      }
      .word_content{
        max-width: 46vw;
        margin-left: 15px;
        position: relative;
        p{
          margin: 3px 0 0;
          font-size: 14px;
          color: #656161;
          overflow: hidden;
          text-overflow:ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .xx_content{
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          width: 46vw;
          span{
            color: rgb(113,233,214);
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>