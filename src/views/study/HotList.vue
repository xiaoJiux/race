<template>
  <div id="">
    <Header :title="$route.meta.title"></Header>
    <div class="box">
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
            <Home_page @onLike="like" @click.stop :chatData="item"></Home_page>
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
  </div>
</template>

<script>
import Header from "@/components/Header";
import Home_page from "@/components/home_page";
import { joinHotLike } from "@/utils/joinHotLike";
import { mapState } from "vuex";

export default {
  name: "HotList",
  components:{Header,Home_page},
  computed:{...mapState(["userData"])},
  data () {
    return {
      hotList: null,
    }
  },

  methods: {
    async getHot(){
      let {data} = await this.$axios({
        url:'/headlines/getAllUser',
        method:'get'
      })
      this.hotList = data.data
    },
    async like(val){
      await joinHotLike(this.userData.id,val.id,1)
      await this.getHot()
    }
  },
  async mounted(){
    await this.getHot()
  }

}
</script>

<style scoped lang="less">
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
