<template>
  <div id="experienceList">
    <header>
      <p>心得体会</p>
      <div class="select">
        <img src="../../../../public/other_icon/back-icon.png" @click="$router.back()">
        <div :class="active===1?'active-item':''" class="select-item" @click="active=1"><i/><i/>推荐<i/><i/></div>
        <div :class="active===2?'active-item':''" class="select-item" @click="active=2"><i/><i/>最新<i/><i/></div>
        <div :class="active===3?'active-item':''" class="select-item" @click="active=3"><i/><i/>热门<i/><i/></div>
      </div>
    </header>
    <div class="article">
      <div v-for="item in 2" class="art-item" @click="$router.push({
        path: '/article',
        params: {

        }
      })">
        <van-image
          fit="cover"
          height="50px"
          round
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          style="position: absolute;top: -20px;left: 25px;padding: 5px;border-radius: 50%;background-color: rgba(202,244,243)"
          width="50px"
        />
        <p class="name">花鸟市场</p>
        <div class="card">
          <van-image
            fit="cover"
            height="200px"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            width="100%"
          />
          <div class="box-bottom">
            <article>
              太美艾克酸苦罗斯福号收款方哈萨克发货
            </article>
            <div class="card-bottom">
              <div class="left">
                <p><img src="../../../../public/navbar/ly.png" style="padding-right: 5px"> {{ 100 }}</p>
                <p style="margin-left: 20px">
                  <van-icon name="good-job-o" size="18" style="padding-right: 5px"/>
                  {{ 100 }}
                </p>
              </div>
              <div class="right">{{ '2022-08-19' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceList",
  data() {
    return {
      active: 1,
    }
  },
  methods: {

    //点赞
    clickGood() {

    }
  }

}
</script>

<style lang="less" scoped>
#experienceList {
  margin-bottom: 10vh;

  &::-webkit-scrollbar {
    display: none;
  }

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

  .article {
    .art-item {
      background-color: rgba(202, 244, 243);
      margin: 30px 15px 15px;
      padding: 0 10px 15px;
      position: relative;
      border-radius: 15px;

      .name {
        padding: 15px 15px 15px 24vw;
        margin: 0;
        font-size: 16px;
      }

      .box-bottom {
        background-color: white;
      }

      article {
        font-size: 14px;
        margin-top: 10px;
        padding: 12px 10px;
      }

      .card-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;

        .right {
          font-size: 12px;
          color: #8e8b8b;
        }

        .left {
          justify-content: space-between;
          align-items: center;
          display: flex;

          p {
            font-size: 12px;
            display: flex;
            align-items: center;

            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
