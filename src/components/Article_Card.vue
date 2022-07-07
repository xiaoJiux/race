<template>
  <div id="card">
    <div class="content" @click.stop>
      <div class="img">
        <img :src="this.data.img" alt="">
      </div>
      <div>
        {{ this.data.title }}
      </div>
      <div class="likeShare ">
          <van-icon color="#77e0dc" name="star-o" size="34"/>
          <img src="../../public/other_icon/share.png" style="width:42px;height:42px;display:inline-block;" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article_Card",
  data() {
    return {

    }
  },
  props:["data"],
  methods: {},
  created(){
    console.log(this.data);
  }
}
</script>

<style scoped lang="less">
#card {
  width: 85vw;
  height: 70vh;
  background-color: rgba(255, 255, 255);
  border-radius: 26px;
  box-shadow: 3px 5px 6px rgb(152, 151, 151) inset;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0 !important
  }

  .content {
    margin: 25px 25px 65px;

    .img {
      margin-bottom: 10px;
      height: 90vw - 20px;

      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
        border-radius: 30px;
      }
    }

    .likeShare {
      position: fixed;
      background-color: #fff;
      bottom: 0;
      left: 0;
      width: 85vw;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 12px;
      padding-bottom: 8px;
      box-shadow: 3px -6px 6px rgb(152, 151, 151) inset;
      border-top: 1px dashed #f8f2f2;
      .van-icon {
        margin-right: 30px;
      }
    }
  }
}
</style>