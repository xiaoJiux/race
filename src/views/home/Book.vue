<template>
  <div ref="article" class="Book" @scroll="getBook()">
    <div  class="article-body" >
      <article  >
        <p class="title">第一章 序章</p>
        <div style="height: 25px"></div>
        <p class="content">{{test}}</p>
        <div style="height: 50px"></div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  data(){
    return {
      page:1,
      chapter:[],//章节
      test:'青岛，别称岛城、琴岛、胶澳，山东省辖地级市、副省级市、计划单列市 [1]  、特大城市， [151]  国务院批复确定的中国沿海重要中心城市和滨海度假旅游城市、国际性港口城市 [2]  。截至2019年，全市下辖7个区、代管3个县级市，建成区面积758.16平方千米。区域总面积11293平方千米 [23]  。根据第七次人口普查数据，截至2020年11月1日零时，青岛市常住人口为10071722人。 [143]  2021年，全市实现地区生产总值14136.46亿元。 [163] \n' +
        '青岛地处中国华东地区、山东半岛东南、东濒黄海，位于东经119°30′—121°00′、北纬35°35′—37°09′之间。是山东省经济中心、国家重要的现代海洋产业发展先行区、东北亚国际航运枢纽、海上体育运动基地 [4]  ， 一带一路新亚欧大陆桥经济走廊主要节点城市和海上合作战略支点。 [5] \n' +
        '青岛是国家历史文化名城、中国道教发祥地。 [6]  因树木繁多，四季常青而得名。 [7]  1891年清政府驻兵建制， [6]  青岛是2008北京奥运会和第13届残奥会帆船比赛举办城市，是中国帆船之都， [8]  亚洲最佳航海城， [5]  世界啤酒之城、联合国“电影之都” [9]  、全国首批沿海开放城市、全国文明城市、 [10]  中国最具幸福感城市。被誉为“东方瑞士” [11]  、中国品牌之都。2020年9月2日，被交通运输部评为国家公交都市建设示范城市。 [12] \n' +
        '青岛是国际海洋科研教育中心，驻有山东大学（青岛）、北京航空航天大学青岛校区、 [13]  中国海洋大学等高校26所，引入清华大学、北京大学等29所高校。 [14-16]  青岛的异域建筑种类繁多，被称作“万国建筑博览会”。八大关建筑群荣膺“中国最美城区”称号。',
      bookData:{
        bookName: "反诈指南",//书名
        chapterName: ["序章","开始", "准备"],//章节名
      }
    }
  },
  methods: {
    //请求章节内容
    async getBook(){
      let scrollTop = this.$refs.article.scrollTop//滚动距离
      let clientHeight = this.$refs.article.clientHeight//固定容器高度
      let scrollHeight = this.$refs.article.scrollHeight

      if(scrollTop + clientHeight >= scrollHeight){
        console.log('已到底部');
        console.log(this.page);
        ++this.page
        await setTimeout(() => {
          this.$refs.article.scrollTop = 0
          console.log('获取到了数据')
          this.getBook()
        },1000  )
      }
      // let {data} =await this.$axios({
      //  url:'',
      //  method:'POST',
      //  params: {page:this.page}
      // })


    }
  },
  mounted() {
    // console.log(this.$route.query);
  }
}
</script>

<style lang="less" scoped>
.Book {
  background-color: #eee0b4;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    width: 0;
  }
  .article-body{
    padding: 10px;
    article{
      .title{
        font-size: 20px;
      }
      .content{
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 3px;
      }
    }
  }
}

</style>