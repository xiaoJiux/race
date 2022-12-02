<template>
  <div id="experienceList">
    <header>
      <p>心得体会</p>
      <div class="select">
        <img src="../../../public/other_icon/back-icon.png" @click="$router.back()">
      </div>
    </header>
    <div class="article">
      <div v-for="item in data" class="art-item" @click="$router.push({
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
          <van-image
            fit="cover"
            height="200px"
            :src="item.img"
            width="100%"
          />
          <div class="box-bottom">
            <article>
              {{item.name}}
            </article>
            <div class="card-bottom" @click.stop>
              <div class="left">
                <p><img src="../../../public/navbar/ly.png" style="padding-right: 5px"> {{ item.savaCOUNT }}</p>
                <p style="margin-left: 20px" :class="'color'+item.id">
                  <van-icon @click="like(item.id)"  name="good-job-o" size="18" style="padding-right: 5px"/>
                  {{ item.likeCOUNT }}
                </p>
              </div>
              <div class="right">{{ item.date?item.date.split(' ')[0]:'' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { clickGood } from "@/utils/articleLike";

export default {
  name: "ExperienceList",
  data() {
    return {
      data:null
    }
  },
  computed:{...mapState(['userData'])},
  methods: {
    async getData(){
      let {data} = await this.$axios({
        url:'/posting/getAllUser',
        method:'get'
      })
      this.data = data.data.reverse()
    },
    async like(posting){
      await clickGood(this.userData.id,posting)
      await this.getData()
      let doc = document.getElementsByClassName(`color${posting}`)[0]
      doc.style.color = 'rgba(0,245,225)'
    }
  },
  async mounted(){
    await this.getData()
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
