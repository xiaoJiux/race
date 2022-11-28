<template>
  <div id="article">
    <header>
      <p>心得体会</p>
      <div class="select">
        <img src="../../../public/other_icon/back-icon.png" @click="$router.back()">
        <div class="select-item">详情</div>
      </div>
    </header>
    <div class="list" v-if="artData">
      <div class="van-hairline--bottom art-item">
        <div class="box-header">
          <div class="left">
            <van-image
              fit="cover"
              height="45px"
              round
              :src="artData.userImg"
              width="45px"
            />
            <div class="nameTime">
              <p style="font-size: 16px">{{artData.userName}}</p>
              <p class="time" style="font-size:12px;color: #cccccc">{{artData.date}}</p>
            </div>
          </div>
        </div>
        <div class="body">
          <p class="content" style="font-size: 14px" v-html="artData.content"></p>
          <van-image
            fit="cover"
            height="150px"
            radius="10"
            :src="artData.img"
            width="100%"
          />
          <ul>
            <li>
              <img src="../../../public/navbar/ly.png" style="padding-right: 5px;width: 20px;
              height: 20px;">
              <span> </span>
            </li>
            <li @click="clickGood()">
              <van-icon :color="color?'rgba(0,245,225)':'rgba(176,176,176)'" name="good-job" size="18"/>
              <span>{{artData.likeCOUNT}}</span>
            </li>

          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import Commentarea from "@/components/CommentArea";
import { mapState } from "vuex";
import { clickGood } from "@/utils/articleLike";

export default {
  name: "Articles",
  components: {Commentarea},
  data() {
    return {
      artData: null,
      aID:null,
      color:false
    }
  },
  async mounted() {
    await this.getArticle()
  },
  computed:{...mapState(['userData'])},
  methods: {
    async getArticle() {
      let {data} = await this.$axios({
        method: "post",
        url: '/posting/findById',
        params:{
          id:this.aID
        }
      })
      this.artData = data.data[0]
      console.log (this.artData);
    },
    async clickGood(){
     await clickGood(this.userData.id,this.aID)
      await this.getArticle()
      this.color = true
    }
  },
  created () {
    this.aID = this.$route.query.id
    console.log (this.aID)
  }
}
</script>

<style lang="less" scoped>
#article {
  position: relative;

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

      .select-item {
        color: rgb(96, 217, 212);
        border-bottom: 2px solid rgb(96, 217, 212);
        font-weight: 600;

      }
    }
  }

  .art-item {
    background-color: white;
    padding: 20px 20px 10px;
    margin-bottom: 15px;

    .box-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;


      .left {
        display: flex;
        justify-content: space-between;
        align-items: center;


        .nameTime {
          margin-left: 15px;


          p {
            margin: 4px 0;


          }
        }
      }

    }

    .body {
      .content {
        margin: 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        letter-spacing: 1.5px;
      }
    }

    ul {
      display: flex;
      //justify-content: space-between;
      align-items: center;
      padding: 10px 20px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:nth-child(1) {
          margin-right: 30px;
        }

        .content {
          // 两行显示，超出隐藏
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: (2);

        }

        span {
          padding-left: 5px;
        }
      }
    }


  }

}
</style>
