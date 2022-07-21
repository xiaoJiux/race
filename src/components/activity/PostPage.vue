<template>
  <div id="postPage">
    <header>
      <van-icon @click.stop="$router.back()" name="arrow-left"
                size="26" color="#fff" style="float: left;margin-top: 4px" class="icon"/>
      贴子
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in images" :key="index">
          <img class="swiper-img" :src="item"/>
          <p class="title">远离诈骗</p>
          <article>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            远离诈骗!远离诈骗!远离诈骗!远离诈骗!远离诈骗!远离诈骗!远离诈骗!远离诈骗!远离诈骗!远离诈骗!远离诈骗!
          </article>
          <p class="drop">······</p>
          <div class="btm">
            <van-icon @click="isCollect" v-if="!collect"  name="star-o" size="24" color="rgb(119,224,220)" />
            <van-icon @click="isCollect" v-else  name="star" size="24" color="rgb(119,224,220)" />
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
      images: [
        require('../../assets/tesImg/q.jpeg'),
        require('../../assets/tesImg/i.jpg'),
        require('../../assets/tesImg/o.jpg'),
        require('../../assets/tesImg/z.png'),
      ],

    }
  },
  methods: {
    //收藏
    isCollect(){
      this.collect = !this.collect
    }
  },
  mounted() {
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
  },
}
</script>

<style scoped lang="less">
header {
  height: 22vh;
  background: linear-gradient(to bottom right, rgb(114, 235, 214), rgb(103, 215, 212));
  box-shadow: 0 2px 6px rgb(103, 215, 212);
  text-align: center;
  color: #ffffff;
  font-size: 1.4rem;
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
        left: 44%;
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