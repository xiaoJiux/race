<template>
<div id="study">
  <header>
    <div class="t_header">
      <p>Logo</p>
      <span>安全学堂</span>
      <img src="../../public/other_icon/search.png" alt="">
    </div>
  </header>
  <div>
    <van-image
      fit="cover"
      src="http://rekph2v9n.hn-bkt.clouddn.com/study_show.png"
    />
  </div>
<!--  推荐-->
  <div class="recommend">
    <div class="title">
      <img src="../../public/other_icon/study/commd.png" style="width: 22px;" alt="">
      为您推荐
    </div>
    <div class="list-icon">
      <div>
        <img src="../../public/other_icon/study/anli-5.png" style="width: 55px;" alt="">
        <p>诈骗案例</p>
      </div>
      <div>
        <img src="../../public/other_icon/study/dingwei.png" style="width: 55px;" alt="">
        <p>诈骗案例</p>
      </div>
      <div>
        <img src="../../public/other_icon/study/zixun.png" style="width: 55px;" alt="">
        <p>诈骗案例</p>
      </div>

    </div>
  </div>
<!--  身边故事-->


</div>
</template>

<script>
export default {
  name: "Study"
}
</script>

<style scoped lang="less">
#study{
  header {
    background-color: rgb(96, 217, 212);
    .t_header {
      box-sizing: border-box;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      font-size: 1.3rem;
      color: rgb(238, 251, 250);
      max-height: 6vh;

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
  .recommend{
    padding: 15px;
    .title{
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: bolder;
      margin-bottom: 20px;
      img{
        margin-right: 10px;
      }
    }
    .list-icon{
      display: flex;
      justify-content: space-around;
      text-align: center;
      p{
        text-align: center;
        margin: 0;
      }
    }
  }

}
</style>