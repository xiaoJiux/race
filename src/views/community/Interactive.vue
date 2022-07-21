<template>
<div id="interactive">
  <img class="badge" @click="$router.push({
  name:'chatroom'
  })"  src="../../../public/other_icon/dun.png" alt="">
  <header>
    <van-icon @click.stop="$router.back()" name="arrow-left"
              size="26" color="#fff" style="float: left;margin-top: 4px" class="icon"/>
    <span>警民互动</span>
    <img src="../../../public/other_icon/postman.png" alt="">
  </header>
  <div class="search_header">
    <div class="search">
      <input type="text" >
      <div class="icon">
        <img src="../../../public/other_icon/search.png" alt="">
      </div>
    </div>
  </div>
  <div class="list">
    <p>2022年7月1日</p>
    <div class="card">
      <van-image
        width="40vw"
        height="25vw"
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        style="border-radius: 20px;overflow: hidden;box-sizing: border-box"
      />
      <article>
        2022年3月,医务人员王某被QQ好友拉入一个QQ群,群里有一个“老师”经常进行荐股和行情分析,
      </article>
    </div>
    <div class="card">
      <van-image
        width="40vw"
        height="25vw"
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        style="border-radius: 20px;overflow: hidden;box-sizing: border-box;box-shadow: 2px 3px 3px #a8a4a4"
      />
      <article>
        2022年3月,医务人员王某被QQ好友拉入一个QQ群,群里有一个“老师”经常进行荐股和行情分析,
      </article>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Interactive",
  data(){
    return {
      list:[
        {
          timeDay:'',
          listCard:[{

          }]
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.badge{
  width: 50px;
  height: 50px;
  position: fixed;
  z-index: 101;
  right: 10px;
  top: 70%;
}
header {
  color: #fff;
  font-size: 1.4rem;
  padding: 0.8rem;
  background: linear-gradient(to bottom right,rgba(113,235,214), rgb(103, 217, 214));
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    font-size: 18px;
  }
  img{
    width: 36px;
    height: 36px;
  }
}
#interactive{
  .search_header{
    //搜索框背景图
    background-image: url("../../assets/tesImg/w.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 26vh;
    display: flex;

    .search{
      display: flex;
      margin: auto;
      border-radius: 15px;
      background-color: white;
      overflow: hidden;
      input{
        border: none;
        padding-left: 20px;
        font-size: 20px;
      }
      .icon{
        width: 32px;
        height: 32px;
        background-color: rgb(186,239,237);
        padding: 6px 12px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .list{
    padding: 15px;
    .card{
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      article{
        width: 50vw;
        max-height: 25vw;
        margin-left: 10px;
        line-height: 24px;
        overflow: hidden;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      }
    }
  }
}
</style>