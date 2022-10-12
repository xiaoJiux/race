<template>
  <div id="">
    <Header :title="$route.meta.title"></Header>
    <div class="change">
      <span @click="num>0?num--:''">上一幅</span>
      <span @click="num++">下一幅</span>
    </div>
    <van-image
      v-if="data"
      width="90vw"
      height="72vh"
      style="margin: 0 auto;display: block"
      :src="data[num].content"
    />
    <div class="btn-list">
      <van-button type="primary" @click="showPopup">发表我的探索</van-button>
      <van-button type="primary" @click="$router.push({
      path:'/viewDetail',
      query:{
        id:data[num].id
      }
      })">查看热门探索</van-button>
    </div>
    <van-popup v-model="show">
      <div class="box" style="width: 80vw;  min-height: 20vh;position: relative">
        <van-field
          v-model="msg"
          rows="1"
          autosize
          type="textarea"
          placeholder="说点什么吧"
        />
        <van-button @click="sendMsg" color="linear-gradient(to right, rgb(1,215,183), rgb(2,193,212))" type="primary" style="padding: 4px 10px;position: absolute;right: 10px;bottom: 10px;" round size="mini">发布</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapState } from "vuex";
import { fmtTime } from "@/utils/getTime";
import { Toast } from "vant";

export default {
  name: "ViewPage",
  components:{Header},
  data () {
    return {
      data:null,
      num:0,
      show: false,
      msg:''
    }
  },
  computed:{...mapState(['userData'])},
  methods: {
    showPopup() {
      this.show = true;
    },
    async getData(){
      let {data} = await this.$axios({
        url:'/vision/getAllUser',
        method:'get'
      })
      this.data = data.data
    },
    async sendMsg(){
      if(!this.msg){
        return null
      }
      let {data} = await this.$axios({
        url:'/studySay/save',
        method:'post',
        data:{
          say:this.msg,
          date:fmtTime(),
          study:this.data[this.num].id,
          user:this.userData.id
        }
      })
      if(data.code === 0){
        this.show = false
        Toast.success('发表成功!')
        this.msg = ''
      }
    }
  },
  async mounted(){
    await this.getData()
  }

}
</script>

<style scoped lang="less">
.change{
  color:rgba(8,195,212);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  margin: 20px 10px;
}
.btn-list{
  display:flex;
  justify-content: space-between;
  padding: 25px 30px;
  :deep(.van-button--primary){
    background-color: rgba(0,212,168);
    border: 1px solid rgba(0,212,168);
    width: 45%;
  }
}
:deep(.van-popup){
  border-radius: 15px;
  padding: 6px 0;
}
</style>
