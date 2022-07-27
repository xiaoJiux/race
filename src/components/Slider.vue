<template>
  <div class="slider"   @mouseleave="setAutoPlay" @mouseover="stopAutoPlay">
    <div class="slider-list">
      <div v-for="(item, index) of list" :key="index" :class="['slider-item', setItemClass(index)]">
        <img :src="item">
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import swipe1 from '../assets/tesImg/i.jpg'
import swipe2 from '../assets/tesImg/o.jpg'
import swipe3 from '../assets/tesImg/w.jpg'

export default {
  name:'Slider',
  data() {
    return {
      list: [swipe1, swipe2, swipe3],
      timer: null,
      currentIndex: 0,
    };
  },
  computed: {
    listLength() {
      return this.list.length - 1;
    },
  },
  methods: {
    // 判断当前图片的状态，再动态的分别添加样式
    setItemClass(i) {
      const prev = this.currentIndex === 0 ? this.listLength : this.currentIndex - 1;
      const next = this.currentIndex === this.listLength ? 0 : this.currentIndex + 1;
      switch (i) {
        case this.currentIndex:
          return 'active';
        case prev:
          return 'prev';
        case next:
          return 'next';
        default:
          return '';
      }
    },
    prev() {
      this.currentIndex === 0 ? (this.currentIndex = this.listLength) : this.currentIndex--;
    },
    next() {
      this.currentIndex === this.listLength ? (this.currentIndex = 0) : this.currentIndex++;
    },
    // 定时器，自动轮播
    setAutoPlay() {
      this.timer = setInterval(() => {
        this.next();
      }, 5000)
    },
    /**
     * @desc 鼠标移入，停止自动轮播
     */
    stopAutoPlay() {
      clearInterval(this.timer);
    },
  },
  mounted() {
    this.setAutoPlay()
  }
};
</script>

<style lang="less" scoped>

.slider{
  width: 100vw;
  height: 45vw;
  user-select: none;
  margin: 0 auto;
  padding-bottom: 3rem;
}
.slider-list{
  position: relative;
  margin-top: 20px;
  height: 100%;
  transform-style: preserve-3d;
}
.slider-item{
  position: absolute;
  margin: 0 50%;
  width: 80vw;
  height: 100%;
  transform: translate3d(-50%, 0, -300px) scale(.8);
  transition: all .6s ease-in-out;
  border-radius: 8px;
  overflow: hidden;
}
.slider-item img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-item.prev{
  margin: 0;
  transform: translate3d(0, 0, -200px) scale(.8);
  transform-origin: left;
}
.slider-item.next{
  margin: 0 100%;
  transform: translate3d(-100%, 0, -100px) scale(.8);
  transform-origin: right;
}
.slider-item.active{
  transform: translate3d(-50%, 0, 0) scale(1);
}
.slider-item::after{
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: .7;
  transition: all .6s;
}
.slider-item.active::after{
  opacity: 0;
}

.dots span{
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 10px 5px;
  cursor: pointer;
}
</style>
