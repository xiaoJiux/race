<template>
  <div id="postPage">
    <header>
      <van-icon class="icon" color="#fff"
                name="arrow-left" size="18" style="float: left;margin-top: 4px" @click.stop="$router.back()"/>
      贴子
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item,index) in artList" :key="index" class="swiper-slide">
          <img :src="item.img" class="swiper-img"/>
          <p class="title">{{item.name}}</p>
          <article>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{item.content}}
          </article>
          <p class="drop">······</p>
          <div class="btm">
            <van-icon v-if="!collect" color="rgb(119,224,220)"  name="star-o" size="24" @click="isCollect" />
            <van-icon v-else color="rgb(119,224,220)"  name="star" size="24" @click="isCollect" />
            <img src="../../../public/other_icon/share.png" />
          </div>
        </div>
      </div>
      <img class="next btn" src="../../assets/right.png">
      <img class="prev btn" src="../../assets/left.png">
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import 'swiper/css/swiper.css'

export default {
  name: "PostPage",
  data() {
    return {
      collect:false,//是否收藏
      artList: []

    }
  },
  methods: {
    //收藏
    isCollect(){
      this.collect = !this.collect
    },
    //请求数据
    async getArticle(){
      let {data} =await this.$axios({
        method: "GET",
        url:'/posting/getAllUser'
      })
      console.log(data)
      this.artList = data
      if(this.artList.length > 0){
        setTimeout(() => {
          let swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            coverflow: {
              rotate: 15,
              stretch: 0,
              depth: 40,
              modifier: 1,//间距
              slideShadows: false,
            },
            spaceBetween: 10,
            navigation: {
              nextEl: ".next",
              prevEl: ".prev",
            }
          })
        },200)


      }
    }
  },
  mounted() {

    this.getArticle()
    console.log(this.$route.params)
  },
}
</script>

<style lang="less" scoped>
header {
  height: 22vh;
  background: linear-gradient(to bottom right, rgb(114, 235, 214), rgb(103, 215, 212));
  box-shadow: 0 2px 6px rgb(103, 215, 212);
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  padding: 0.8rem;
  box-sizing: border-box;
}

#postPage {
  position: relative;

  .swiper-container {
    height: 70vh;
    position: absolute;
    top: 14vh;
    z-index: 0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 15px;

    .btn {
      position: absolute;
      top: 50%;
      z-index: 100;
      width: 45px;
      height: 45px;
    }

    .prev {
      left: 8px;
    }

    .next {
      right: 8px;
    }

    .swiper-slide {
      width: 74vw;
      height: 70vh;
      background-color: white;
      box-sizing: border-box;
      box-shadow: 1px 1px 2px #cccccc;
      border-radius: 15px;
      overflow: hidden;
      position: relative;

      .swiper-img {
        box-sizing: border-box;
        margin: 15px;
        border-radius: 10px;
        width: 74vw - 7.5px;
        height: 40vw;
      }
      p{
        text-align: center;
      }
      article{
        padding:0 15%;
        font-size: 12px;
        letter-spacing: 2px;
        line-height: 26px;
      }
      .drop{
        position: absolute;
        bottom: 7%;
        left: 40%;
        margin: 0;
      }
      .btm{
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: right;
        img{
          width: 28px;
          height: 28px;
          padding: 10px 20px;
        }
      }
    }
  }
}
</style>
