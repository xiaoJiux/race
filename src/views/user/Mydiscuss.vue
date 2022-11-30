<template>
  <div id="">
    <Header :title="$route.meta.title"></Header>
    <van-tabs v-model="active">
      <van-tab title="文章">
        <div class="box">
          <div class="box-item" v-for="(item,index) in artList" :key="index" @click="$router.push({
              path:'/NewDetails',
              query:{
                id:item.study
              }
              })">
            <div class="left">
              <p>{{item.studyName}}</p>
              <p style="font-size: 12px">{{item.date}}</p>
            </div>
            <div class="right">
              <img :src="item.studyImg" alt="">
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="头条">
        <div class="box-item" v-for="(item,index) in hotList" :key="index" @click="$router.push({
              path:'/NewDetails2',
              query:{
                id:item.headlines
              }
              })">
          <div class="left">
            <p>{{item.headlinesName}}</p>
            <p style="font-size: 12px">{{item.date}}</p>
          </div>
          <div class="right">
            <img :src="item.headlinesImg" alt="">
          </div>
        </div>
      </van-tab>
      <van-tab title="贴子">暂无</van-tab>
      <van-tab title="视频">暂无</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header";

export default {
  name: "Mydiscuss",
  components:{Header},
  data () {
    return {
      artList:null,//文章
      hotList:null,//头条
      active:0
    }
  },
  computed: { ...mapState(["userData"]) },
  methods: {
    //文章
    async getAdiscuss(){
      let {data} = await this.$axios({
        url:'/studySay/findByUserId',
        method:'post',
        params:{
          userId:this.userData.id
        }
      })
      this.artList = data.data
    },
    //头条
    async getHot(){
      let {data} = await this.$axios({
        url:'/headlinesSay/findByUserId',
        method:'post',
        params:{
          userId:this.userData.id
        }
      })
      this.hotList = data.data
    }
  },
  async mounted () {
    await this.getAdiscuss()
    await this.getHot()
  }

}
</script>

<style scoped lang="less">
.box-item{
  display: flex;
  justify-content: space-between;
  .left{}
  .right{
    img{
      width: 120px;
      height: 80px;
      object-fit: cover;
      border-radius: 15px;
      border: 2px solid #d5d5d5;
    }
  }
}
:deep(.van-tabs__line){
  background-color: #35e0bd;
}
:deep(.van-tabs__content){
  padding: 15px 25px;
}
</style>
