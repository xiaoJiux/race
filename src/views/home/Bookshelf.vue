<template>
<div class="bookshelf">
  <header>
    <van-icon color="white" name="arrow-left" size="25" @click="$router.back()" />
    <span>书架</span>
    <van-icon color="white" name="search" size="25" @click="$router.back()" />
  </header>
  <div class="book-list">
    <div v-for="(item,index) in book" :key="index" class="book-item">
      <van-image
        :src="item.coverImg"
        fit="cover"
        width="28vw"
        @click="$router.push({
        path: '/book',
        query: {
          id:item.id
        }
        })"
      />
      <p>天书</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Bookshelf",
  data(){
    return {
      book: [{
        id:1,
        coverImg:require('../../../public/home/R-C.jpg'),//封面图片
        name:'天书'
      },{
        id:2,
        coverImg:require('../../../public/home/R-C.jpg'),//封面图片
        name:'天书'
      },{
        id:3,
        coverImg:require('../../../public/home/R-C.jpg'),//封面图片
        name:'天书'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding:10px 20px;
  background-color: rgb(119,224,220);
  span{
    font-size: 20px;
  }
}
.book-list{
  display: flex;
  justify-content: space-around;
  padding: 15px 5px;
  .book-item{
    p{
      text-align: center;
      margin: 0;
    }
  }
}
</style>