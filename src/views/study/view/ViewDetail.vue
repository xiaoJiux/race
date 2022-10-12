<template>
  <div id="">
    <Header :title="$route.meta.title"></Header>
    <van-image
      v-if="data"
      width="74vw"
      height="60vh"
      style="margin: 15px auto;display: block"
      :src="data.content"
    />
    <div class="chart-list">
      <p style="padding: 10px 20px;font-size: 18px;font-weight: 600;margin: 0;">热门探索</p>

      <div class="item" v-for="item in chartData" :key="item.id">
        <van-image
          radius="50%"
          :src="item.userImg"
          width="55px"
          height="55px"
        />
        <div class="content" >
          <div class="left">
            <p style="font-weight: 600;font-size: 16px">{{item.userName}}</p>
            <p style="font-size: 12px">{{item.say}}</p>
          </div>
          <div class="right" style="display: flex;align-items: center">
            <van-icon @click="onLike(item.id)" name="good-job-o" />
            <span style="font-size: 12px;padding-left: 10px">{{item.likeCOUNT}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapState } from "vuex";

export default {
  name: "ViewDetail",
  components:{Header},
  data () {
    return {
      vID:null,
      data:null,
      chartData:null
    }
  },
  computed:{...mapState(['userData'])},
  methods: {
    async getData(){
      let {data} = await this.$axios({
        url:'/vision/findById',
        method:'post',
        params:{
          id:this.vID
        }
      })
      this.data = data.data[0]
    },
    async getChart(){
      let {data} = await this.$axios({
        url:'/vision/findByVisionSayVisionId',
        method:'post',
        params:{
          visionId:this.vID
        }
      })
      this.chartData = data.data
    },
    async onLike(studySay){
      let {data} = await this.$axios({
        url:'/studySayLike/save',
        method:'post',
        data:{
          user:this.userData.id,studySay
        }
      })

      if(data.code === 0){
        await this.getChart()
      }
    },
  },
  async mounted(){
    await this.getData()
    await this.getChart()
  },
  created () {
    this.vID = this.$route.query.id
  }
}
</script>

<style scoped lang="less">
.item{
  display: flex;
  padding: 10px 20px;
  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding-left: 8px;
    p{
      margin: 0;
    }
  }
}
</style>
