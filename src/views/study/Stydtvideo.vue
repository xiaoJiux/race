<template>
  <div style="width: 100%">
    <header>
      <div class="t_header">
        <span>安全学堂</span>
      </div>
    </header>
    <div class="din-d">
      <div class="din-zi">
		<span @click="$router.push({
        path: '/study'
        })">主题</span>
        <span style="color: #6ec9b9; border-bottom:3px solid #6ec9b9" @click="$router.push({
        path: '/stydtvideo'
        })">视频</span>
        <span @click="$router.push({
        path: '/video'
        })">心理测试</span>
      </div>
      <!--    搜索框on-->
      <div class="search_header">
        <input placeholder="" style="background-color: transparent;border: none;width: 100%; " type="text"/>
        <van-icon color="rgb(96, 217, 212)" name="search" size="22"/>
      </div>
      <!--   搜索框end-->
    </div>
    <div class="container">
      <div v-for="(item, index) in StudyvideoList" :key="index" class="" @click="$router.push({
        path: '/video'
        })">
        <div>
          <div class="item">
            <div class="item-img" style="overflow: hidden;"><img :src="item.videoimg" alt="" class="video-img"></div>
            <div class="video-jeishao">
              <span style="font-size: 15px;letter-spacing:1px">&nbsp;&nbsp;{{ item.videoname }}</span><br>
              <span style="font-size: 10px">&nbsp;&nbsp;&nbsp;{{ item.videoInfo }}</span>
            </div>
          </div>
        </div>
        <!--        {{item}}&#45;&#45;{{index}}&#45;&#45;{{key}}-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stydtvideo",
  data() {
    return {
      StudyvideoList: [
        {
          videoimg: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',//封面
          videoname: "这是视频标题",
          videoInfo: "这是介绍介绍介绍介绍"
        }, {
          videoimg: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
          videoname: "这是视频标题",
          videoInfo: "这是介绍介绍介绍介绍"
        }, {
          videoimg: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',//封面
          videoname: "这是视频标题",
          videoInfo: "这是介绍介绍介绍介绍"
        }, {
          videoimg: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',//封面
          videoname: "这是视频标题",
          videoInfo: "从前有座山山里有座庙庙里有"
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 92%;
  margin: 30px auto;
  column-count: 2;

}

.container .item {

  padding: 0px;
  margin: 10px 0px 0px 0px;
  height: 100%;
  overflow: auto;
  break-inside: avoid;
  position: relative;

}


.video-img {
  border-radius: 10px;
}

.video-jeishao {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #ebebeb;
  background: linear-gradient(to left, #12bbd1, #00cfc2, #1ad5b7);
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

.item-img {
  overflow: hidden;
  height: 60vw;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
}

.t_header {

  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  color: rgb(96, 217, 212);
  max-height: 6vh;
}

.t_header span {
  padding-right: 20px;
  font-weight: 600;
}

.t_header img {
  width: 1.5rem;
  height: 1.5rem;
}

header {
  background-color: #fff;
  padding: 10px 0;
}

.din-d {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.din-zi span {
  margin-right: 20px;
  font-weight: 600;
  font-size: 15px;
}

.search_header {
  width: 43vw;
  background-color: #eaeaea;
  margin: 0px;
  padding: 5px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 100vw;
  border-radius: 12px;

}

.search_header input {
  max-width: 60vw;
  /* flex-grow: 1; */
}
</style>
