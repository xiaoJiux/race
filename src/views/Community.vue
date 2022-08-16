<template>
  <div style="padding-bottom: 65px">
    <header>
      <div class="t_header">
        社区
      </div>
    </header>
    <van-image
      fit="cover"
      height="62vw"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
      width="100%"
    />
    <div class="sqbiaoti">
      <div class="sqbiaoti-item">
        <span class="kuang" style="background-color:rgb(96, 217, 212);">&nbsp;</span>
        <span>反诈行动</span>
      </div>
      <div class="sqbiaoti-item2" @click="$router.push({
      path:'/activity'
      })">
        查看更多&nbsp;<van-icon name="arrow"/>
      </div>
    </div>
    <div class="community">
      <div v-for="(item,index) in act " :key="index">
        <img :src="item.actimg">
      </div>
    </div>
    <div class="sqbiaoti">
      <div class="sqbiaoti-item">
        <span class="kuang" style="background-color:rgb(96, 217, 212);">&nbsp;</span>
        <span>心得体会</span>
      </div>
      <div class="sqbiaoti-item2" @click="$router.push({
      path:'/ExperienceList'
      })">
        查看更多&nbsp;<van-icon name="arrow"/>
      </div>
    </div>
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
          height="150px"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          width="100%"
        />
        <div class="box-bottom">
          <article>
            太美艾克酸苦罗斯福号收款方哈萨克发货
          </article>
          <div class="card-bottom">
            <div class="left">
              <p><img alt="" src="../../public/navbar/ly.png" style="padding-right: 5px"> {{ 100 }}</p>
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
    <div class="sqbiaoti">
      <div class="sqbiaoti-item">
        <span class="kuang" style="background-color:rgb(96, 217, 212);">&nbsp;</span>
        <span>反诈资讯</span>
      </div>
      <div class="sqbiaoti-item2">
        查看更多&nbsp;<van-icon name="arrow"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "community",
  data() {
    return {
      act: [
        {
          id: '',
          actimg: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        },
        {
          id: '',
          actimg: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        },
        {
          id: '',
          actimg: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        },
      ],
    }
  },
  async created() {


  }
}
</script>

<style lang="less" scoped>
header {
  background-color: #fff;
  padding: 10px 0;

  .t_header {
    text-align: center;
    font-size: 18px;
    color: rgb(96, 217, 212);
    line-height: 32px;
    font-weight: 600;
  }
}

.community {
  display: flex;
  overflow: auto;
  padding-left: 15px;

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    height: 34vw;

    img {
      object-fit: cover;
      width: 75vw;
      height: 100%;
      border-radius: 20px;
      margin-right: 15px;
    }
  }

}

.t_header {

  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  color: rgb(96, 217, 212);
  max-height: 6vh;
}

.t_header span {

  padding-right: 20px;
  font-weight: 600;
}

header {
  background-color: #fff;
  padding: 10px 0;
}

.sqbiaoti {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: flex-end;
  margin-left: 15px;
  margin-right: 15px;
  justify-content: space-between;

  .sqbiaoti-item {
    display: flex;
    font-size: 18px;
    color: rgb(96, 217, 212);
    align-items: center;

    .kuang {
      border-radius: 20px;
      max-height: 100%;
      margin-right: 5px;
    }
  }

  .sqbiaoti-item2 {
    font-size: 13px;
    color: #8a8a8a;
    font-weight: 400;
  }
}

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
</style>
