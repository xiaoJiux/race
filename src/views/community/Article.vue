<template>
<div id="article">
  <header>
    <van-icon class="icon" color="#fff"
              name="arrow-left" size="18" style="position:absolute;left: 10px;margin-top: 4px" @click.stop="$router.back()"/>
    {{$route.meta.title}}
  </header>
  <div class="a_container">
    <div v-for="(item,index) in artList" :key="index" class="article_card" @click="$router.push({
    path:`/article/${item.id}`,
    params: {
      id: item.id,
      artList
    }
    })">
      <van-image
        :src="item.img"
        fit="cover"
        height="32vw"
        width="38vw"
      />
      <div class="word_content">
        <p>{{ item.content }}</p>
        <div class="xx_content">
          <span class="out_name">{{ item.name }}</span>
          <span class="time">{{item.time}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from "@/components/Header";
import WaterFall from "@/components/WaterFall";

//下拉刷新

export default {
  name: "Articles",
  components:{Header,WaterFall},
  data(){
    return {
      artList:[
        // {
        //   id:1,
        //   name:'xxx',
        //   img:'https://img01.yzcdn.cn/vant/cat.jpeg',
        //   content: 'hahahahahahahahahaha',
        //   time:'2022-07-08 17:51'
        // }
      ]
    }
  },
  mounted() {
    this.getArticle()
  },
  methods:{
    async getArticle(){
      let {data} =await this.$axios({
        method: "GET",
        url:'/posting/getAllUser'
      })
      console.log(data)
      this.artList = data
    }
  }
}
</script>

<style lang="less" scoped>
#article{
  position: relative;
  header{
    position: relative;
    height: 22vh;
    background: linear-gradient(to bottom right,rgb(114,235,214),rgb(103,215,212));
    box-shadow: 0 2px 6px rgb(103,215,212);
    text-align: center;
    color: #ffffff;
    font-size: 18px;
    padding: 0.8rem;
    box-sizing: border-box;
  }
  .a_container{
    position: absolute;
    top: 12vh;
    margin:0 15px;
    box-sizing: border-box;
    .article_card{
      box-shadow: 1px 1px 4px rgb(183, 192, 191);
      border-radius: 15px;
      background-color: white;
      padding: 10px;
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 20px;

      .van-image{
        border-radius: 12px;
        overflow: hidden;
      }
      .word_content{
        width: 46vw;
        margin-left: 15px;
        position: relative;
        p{
          margin: 3px 0 0;
          font-size: 14px;
          color: #656161;
          overflow: hidden;
          text-overflow:ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .xx_content{
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          width: 46vw;
          span{
            color: rgb(113,233,214);
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
