<template>
  <div>
    <Header :title="$route.meta.title"></Header>
    <van-image
        width="100%"
        height="62vw"
        fit="cover"
        :src="this.dingbuimg"
    />
    <div class="CaiSewai" v-if="pointD">
      <div class="CaiSe">
        <div class="CaiSezi1">积分商城</div>
        <div class="CaiSezi2">我的积分:{{this.pointD.sumNumber}}</div>
      </div>
      <div class="CaiSe2">
        <div class="CaiSezi3">积分记录</div>
        <div class="CaiSezi4">最近记录：积分+{{pointD.number}}</div>
      </div>
    </div>
    <div class="list-btn">
      <div v-for="(item,index) in check" :key="index" :class="native===item.value?'native':''"
           class="btn" @click="onChange(item.value)">{{ item.name }}
      </div>
    </div>
    <div :class="{'bb':aa}" class="b" >
        <div class="rc" v-for="(item, index) in points" v-if="aa===false" :key="index" >
          <span>{{item.info}}</span>
          <span>{{item.number}}</span>
        </div>
    </div>
  </div>
</template>

<script>

import Header from "@/components/Header";
import { mapState } from "vuex";
export default {
  name: "PointDetail",
  components:{Header},
  data(){
    return{
      dingbuimg:require('../../assets/user/point.png'),
      opacity:0,
      aa:false,
      native: 1,
      check: [{
        name: "明细",
        value: 1
      }, {
        name: "成就任务",
        value: 2
      },],
      points:null,
      pointD:null
    }
  },
  computed: { ...mapState(["userData"]) },
  methods: {
    //切换
    onChange(index) {
      this.native = index;
      this.aa = this.native !== 1;
    },
    //获取用户总积分
    async getPoint(){
      let {data} = await this.$axios({
        url:'/points/findById',
        method:'post',
        params:{
          userId:this.userData.id
        }
      })
      this.pointD = data.data[0]
    },
    async getPointDetail(){
      let {data} = await this.$axios({
        url:'/points/findByUserId',
        method:'post',
        params:{
          userId:this.userData.id
        }
      })
      this.points = data.data
    }
  },
  async mounted(){
    await this.getPoint()
    await this.getPointDetail()
  }
}
</script>

<style lang="less" scoped>
.list-btn {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  .native {
    background-color: rgb(96, 217, 212) ;
    color: white !important;
  }

  .btn {
    color: #cccccc;
    //background-color: rgba(247, 247, 247);
    padding: 5px 12px;
    margin-right: 15px;
    font-size: 14px;
    border-radius: 20px;
  }
}
.b{
  display:block;
}
.bb{
  display: none;
}
.rc{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 25px;

}
.t_header {
  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 18px;
  color: rgb(96, 217, 212);
  max-height: 6vh;
}
.t_header span {


  font-weight: 600;
}
header {
  background-color: #fff;
  padding: 10px 0;
}
.container{
  border: 1px solid #38ada9;
}
.CaiSewai{
  display: flex;
  padding: 15px 15px;
  justify-content:space-between;
  .CaiSe{
    box-sizing: border-box;
    width: 43vw;
    background-color: #e8f2f1;
    border-radius: 10px;
    padding: 15px 15px 10px 10px;

    .CaiSezi1{
      font-size: 20px;
      color: #80e1db;
    }
    .CaiSezi2{
      color: #80e1db;
    }
  }
  .CaiSe2{
    width: 43vw;
    box-sizing: border-box;
    background-color: #eaedff;
    border-radius: 10px;
    padding: 15px 15px 10px 10px;
    .CaiSezi3{
      font-size: 20px;
      color: #9e9ad9;
    }
    .CaiSezi4{
      color: #9e9ad9;
    }
  }
}
</style>
