<template>
  <div id="XT">
    <header>
      <div class="t_header">
        安全学堂
      </div>
    </header>
    <div class="din-d">
      <div class="din-zi">
        <span style="color: #6ec9b9; border-bottom:3px solid #6ec9b9;">主题</span>
        <span @click="$router.push({
        path: '/video'
        })">视频</span>
        <span @click="$router.push({
        path:'/view'
        })">视觉探索</span>
      </div>
      <!--    搜索框on-->
      <div class="search_header">
        <input placeholder="" style="background-color: transparent;border: none;width: 30vw; " type="text"/>
        <van-icon color="rgb(96, 217, 212)" name="search" size="22" style="padding-right: 8px;"/>
      </div>
      <!--   搜索框end-->
    </div>
    <!--轮播-->
    <Slider/>
    <div style="margin-top: -35px">
      <van-tabs @change="change" v-model="active" animated color="rgb(96, 217, 212)">
        <van-tab title="··推荐··">
          <!--        1-->
          <div v-for="(item,index) in recommendList" v-if="recommendList" class="kuan" :key="index">
            <div class="kuan-1">
              <div class="kuan-nei" @click="$router.push({
              path:'/NewDetails',
              query:{
                id:item.id
              }
              })">
                <img alt="" :src="item.img">
                <div class="vv">{{ item.name }}<span>{{ item.date.split (' ')[0] }}</span></div>
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
        </van-tab>
        <van-tab title="心里防线">
          <div v-for="(item,index) in list" v-if="list" class="kuan" :key="index">
            <div class="kuan-1">
              <div class="kuan-nei" @click="$router.push({
              path:'/NewDetails',
              query:{
                id:item.id
              }
              })">
                <img alt="" :src="item.img">
                <div class="vv">{{ item.name }}<span>{{ item.date.split (' ')[0] }}</span></div>
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
        </van-tab>
        <van-tab title="信息安全">
          <div v-for="(item,index) in list" v-if="list" class="kuan" :key="index">
            <div class="kuan-1">
              <div class="kuan-nei" @click="$router.push({
              path:'/NewDetails',
              query:{
                id:item.id
              }
              })">
                <img alt="" :src="item.img">
                <div class="vv">{{ item.name }}<span>{{ item.date.split (' ')[0] }}</span></div>
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

        </van-tab>
        <van-tab title="身边案例">
          <div v-for="(item,index) in list" v-if="list" class="kuan" :key="index">
            <div class="kuan-1">
              <div class="kuan-nei" @click="$router.push({
              path:'/NewDetails',
              query:{
                id:item.id
              }
              })">
                <img alt="" :src="item.img">
                <div class="vv">{{ item.name }}<span>{{ item.date.split (' ')[0] }}</span></div>
                <!--              点赞分享-->
                <home-page @onLike="like"  @click.stop :chatData="item"></home-page>
                <!--              点赞分享-->
              </div>
              <div style="padding-bottom: 20px; background-color: white">
                &nbsp
                <div>&nbsp</div>
                <div>&nbsp</div>
              </div>
            </div>
          </div>

        </van-tab>
        <van-tab title="健康上网">
          <div v-for="(item,index) in list" v-if="list" class="kuan" :key="index">
            <div class="kuan-1">
              <div class="kuan-nei" @click="$router.push({
              path:'/NewDetails',
              query:{
                id:item.id
              }
              })">
                <img alt="" :src="item.img">
                <div class="vv">{{ item.name }}<span>{{ item.date.split (' ')[0] }}</span></div>
                <!--              点赞分享-->
                <home-page @onLike="like"  :chatData="item"></home-page>
                <!--              点赞分享-->
              </div>
              <div style="padding-bottom: 20px; background-color: white">
                &nbsp
                <div>&nbsp</div>
                <div>&nbsp</div>
              </div>
            </div>
          </div>

        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>

import Slider from "@/components/Slider";
import HomePage from "@/components/home_page";
import { Dialog } from "vant";
import { joinNewLike } from "@/utils/joinNewLike";
import { mapState } from "vuex";

export default {
  name: "Study",
  components: { HomePage, Slider },
  data () {
    return {
      active: 0,
      recommendList: null,
      list: null
    }
  },
  computed:{...mapState(["userData"])},
  methods: {
    async getRecommendList () {
      let { data } = await this.$axios ({
        method: "get",
        url: "/study/getAllUserOR"
      })
      console.log (data)
      this.recommendList = data.data
    },
    //change触发
    change (name) {
      this.list = this.recommendList.filter ((item) => {
        if ( item.type === name ) {
          return true
        } else if ( name === 4 && item.type === 7 ) {
          return true
        }
      })
    },
    async like(val){
      await joinNewLike(this.userData.id,val.id,1)
      await this.getRecommendList()
    }
  },
  async mounted () {
    await this.getRecommendList ()
  },
}
</script>

<style lang="less" scoped>
#XT {
  position: relative;
}

header {
  background-color: #fff;
  padding: 10px 0;
}

:deep(.van-tabs__content) {
  margin-bottom: 70px;
}

.t_header {
  text-align: center;
  font-size: 18px;
  color: rgb(96, 217, 212);
  line-height: 32px;
  font-weight: 600;
}


.din-d {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.din-zi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  span:nth-child(2) {
    margin: 0 10px;
  }

}

.search_header {
  width: 40vw;
  background-color: #eaeaea;
  margin: 0;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 100vw;
  border-radius: 6px;

}

.search_header input {
  max-width: 60vw;
  /* flex-grow: 1; */
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
