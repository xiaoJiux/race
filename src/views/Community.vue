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
      :src="img"
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
      <div v-for="(item,index) in activityList " :key="index">
        <img alt="" :src="item.img" @click="$router.push({
        path:`/activity/${item.id}`,
        params: {
          id:item.id
        }
        })">
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
    <div v-if="articleList" v-for="item in articleList" class="art-item" :key="item.id" @click="$router.push({
        path: '/article',
        query: {
          id:item.id
        }
      })">
      <van-image
        fit="cover"
        height="50px"
        round
        :src="item.userImg"
        style="position: absolute;top: -20px;left: 25px;padding: 5px;border-radius: 50%;background-color: rgba(202,244,243)"
        width="50px"
      />
      <p class="name">{{item.userName}}</p>
      <div class="card">
        <img :src="item.img" style="height: 150px;width: 100%;object-fit: cover" alt="">
        <div class="box-bottom">
          <article>
            {{item.name}}
          </article>
          <div class="card-bottom">
            <div class="left">
              <p><img alt="" src="../../public/navbar/ly.png" style="padding-right: 5px"> {{ item.saveCOUNT }}</p>
              <p style="margin-left: 20px">
                <van-icon name="good-job-o" size="18" style="padding-right: 5px"/>
                {{ item.likeCOUNT }}
              </p>
            </div>
            <div class="right">{{ item.date?item.date.split(' ')[0] : '' }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sqbiaoti">
      <div class="sqbiaoti-item">
        <span class="kuang" style="background-color:rgb(96, 217, 212);">&nbsp;</span>
        <span>反诈资讯</span>
      </div>
      <div class="sqbiaoti-item2" @click="$router.push({
      path:'/hot'
      })">
        查看更多&nbsp;<van-icon name="arrow"/>
      </div>
    </div>
    <div v-for="(item,index) in hotList" v-if="hotList" class="kuan" :key="index">
      <div class="kuan-1">
        <div class="kuan-nei" @click="$router.push({
              path:'/NewDetails2',
              query:{
                id:item.id
              }
              })">
          <img alt="" :src="item.img">
          <div class="vv">{{ item.name }}<span>{{item.date? item.date.split (' ')[0]:'' }}</span></div>
          <!--              点赞分享-->
          <home-page @onLike="like" @click.stop :chatData="item"></home-page>
          <!--              点赞分享-->
        </div>
        <div style="padding-bottom: 20px; background-color: white">
          &nbsp
          <div>&nbsp</div>
          <div>&nbsp</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import HomePage from "@/components/home_page";
import { mapState } from "vuex";
import { joinHotLike } from "@/utils/joinHotLike";

export default {
  name: "community",
  components: { HomePage },
  computed:{...mapState(["userData"])},
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
      img:require('../assets/community/1.png'),
      activityList:null,
      articleList:null,
      hotList: null,
    }
  },
  methods:{
    async getActivity(){
      let {data} = await this.$axios({
        method:'get',
        url:'/activity/getAllUser'
      })
      this.activityList = data.data
    },
    async getArticle(){
      let {data} = await this.$axios({
        method:'get',
        url:'/posting/getAllForIndex'
      })
      this.articleList = data.data
      console.log (this.articleList);
    },
    async getRecommendList () {
      let { data } = await this.$axios ({
        method: "get",
        url: "/headlines/getAllUser"
      })
      this.hotList = []
      this.hotList.push(data.data[0])
    },
    async like(val){
      await joinHotLike(this.userData.id,val.id,1)
      await this.getRecommendList()
    }
  },
  async created() {
    await this.getActivity()
    await this.getArticle()
    await this.getRecommendList()
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
.kuan {
  margin: 20px 15px 0px 15px;
  padding: 10px 10px 15px 40px;
  background-color: rgba(96, 217, 212, 0.3);
  //height: 200px;
  .kuan-1 {
    padding-top: 15px;
    background: linear-gradient(to left, #12bbd1, #00cfc2, #1ad5b7);
  }

  .kuan-nei {
    width: 105%;
    margin: 0px 0px -75px -27px;
    font-size: 14px;
    color: #a8a4a4;
    background-color: white;

    img {
      width: 100%;
      height: 80%;
    }

    .vv {
      padding: 8px 10px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      background-color: white
    }
  }
}

</style>
