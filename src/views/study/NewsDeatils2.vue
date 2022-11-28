<template>
  <div id="news">
    <header>
      <p>资讯详情</p>
      <div class="select">
        <img src="../../../public/other_icon/back-icon.png" @click="$router.back()">
      </div>
    </header>
    <div class="body" v-if="nData">
      <!--      //富文本-->
      <div v-html="nData.content" class="content"></div>

      <div class="collect-like">
        <div class="item">
          <div class="left">
            收藏 <span>{{nData.saveCOUNT}}</span>
          </div>
          <van-icon :color="col?'rgb(96, 217, 212)':''"  name="like-o" size="18" @click="collect" />
        </div>
        <div class="item">
          <div class="left" >
            点赞 <span>{{ nData.likeCOUNT }}</span>
          </div>
          <van-icon :color="lik?'rgb(96, 217, 212)':''" name="good-job-o" size="18" @click="like" />
        </div>
      </div>
    </div>
    <CommentArea :chart="chartList" :nID="nID" @send="sendMsg"></CommentArea>
  </div>
</template>

<script>
import CommentArea from "@/components/CommentArea";
import { fmtTime } from "@/utils/getTime";
import { Toast } from "vant";
import { mapState } from "vuex";
import { joinNewLike } from "@/utils/joinNewLike";
import { joinHotLike } from "@/utils/joinHotLike";

export default {
  name: "NewsDeatils",
  components: {CommentArea},

  data() {
    return {
      nID:null,
      nData:null,
      chartList:null,
      col:false,
      lik:false
    }
  },
  computed:{...mapState(["userData"])},
  methods: {
    //详情信息
    async getNews(){
      let { data } =await this.$axios({
        url:'/headlines/findById',
        method:'post',
        params:{
          id:this.nID
        }
      })
      this.nData = data.data[0]
    },
    //获取评论
    async getChart(){
      let { data } =await this.$axios({
        url:'/headlinesSay/findByHeadlinesId',
        method:'post',
        params:{
          headlinesId:this.nID
        }
      })
      this.chartList = data.data
    },
    //发送评论
    async sendMsg(val){
      let {data} =await this.$axios({
        url:'/headlinesSay/save',
        method:'POST',
        data:{
          say:val.say,
          headlines:this.nID,
          date:fmtTime(),
          user:this.userData.id
        }
      })
      if(data.code ===0){
        Toast.success('评论成功')
        await this.getChart()
      }
    },
    //点赞
    async like(){
      await joinHotLike(this.userData.id,this.nID,1)
      await this.getNews()
      this.lik = true

    },
    //收藏
    async collect(){
      await joinHotLike(this.userData.id,this.nID,2)
      await this.getNews()
      this.col = true
    }
  },
  async created() {
    this.nID = this.$route.query.id
    await this.getNews()
    await this.getChart()
  }

}
</script>

<style lang="less" scoped>
#news {
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

  .body {
    padding: 10px 20px;
    .content{
     :deep(img){
       max-width: 100%;
     }
    }

    .collect-like {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 15px;
        background-color: rgb(242, 242, 242);
        flex-grow: 1;

        &:nth-child(1) {
          margin-right: 20px;
        }

        .left {
          font-size: 12px;
          color: #818181;
        }
      }
    }
  }
}
</style>
