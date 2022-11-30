<template>
  <div id="reboot">
    <Header :title="$route.meta.title"></Header>
    <div class="content" ref="content">
      <div class="first" style="display: flex;">
        <div style="width: 45px;height: 45px;background-color: rgba(0,210,169);display: inline-block;border-radius: 50%;padding: 4px;box-sizing: border-box">
          <img style="width: 100%;height: 100%;" src="../../assets/home/robot.png" alt="">
        </div>
        <ul style="background-color: white;padding: 15px;margin-left: 10px;border-radius: 0 12px 12px 12px;margin-top: 15px">
          <li style="margin: 4px 0;" v-for="(item,index) in firstR" :key="item.id">{{index + 1}}、{{item.keyword}}</li>
        </ul>
      </div>
      <div class="authentic">
        <ul>
          <li v-for="(item,index) in chartList" :key="index" :class="item.user?'user':''" style="display: flex">
            <div :class="item.user?'u-img':'r-img'" style="">
              <img style="width: 100%;height: 100%;" :src="item.user?userData.img:rImg" alt="">
            </div>
            <div :class="item.user?'u-content':'r-content'"
                 style="">
              {{item.lock}}
            </div>
          </li>

        </ul>
      </div>
    </div>
    <div class="bottom-input" style="display: flex;justify-content: space-around;">
      <van-field style="max-width: 65vw" v-model="msg"  placeholder="发送" />
      <van-button @click="sendMsg"  color="linear-gradient(to right,rgba(77,223,201) , rgba(78,209,221))" style="" type="primary" size="small">发送</van-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header";

export default {
  name: "Reboot",
  computed: { ...mapState(["userData"]) },
  components:{Header},
  data () {
    return {
      firstR:null,
      chartList:[],
      msg:'',
      rImg:require('../../assets/home/robot.png')
    }
  },
  methods: {
    async getFirstM(){
      let {data} = await this.$axios({
        url:'/machine/findAll',
        method:"post"
      })
      this.firstR = data.data
    },
    async sendMsg(){
      let {data} = await this.$axios({
        url:'machine/findKeyAll',
        method:"post",
        params:{
          id:this.msg
        }
      })
      if(data.code === 0){
        this.chartList.push({
          user:true,
          lock:this.msg
        })
        this.chartList.push(data.data[0])
        this.msg = ''
        console.log (this.chartList)
        this.$nextTick(()=>{
          this.gotoBottom()
        })
      }
    },
    gotoBottom(){
      let clientHeight = this.$refs.content.clientHeight
      let scrollHeight = this.$refs.content.scrollHeight
      this.$refs.content.scrollTop = scrollHeight - clientHeight
    }

  },
  async mounted(){
    await this.getFirstM()
  }
}
</script>

<style scoped lang="less">
#reboot{
  background-color: rgba(237,237,237);
  height: 100vh;
  .content{
    height: calc(100vh - 100px);
    box-sizing: border-box;
    padding:20px 10px;
    overflow: scroll;
  }
  :deep(.van-cell){
    padding: 6px 16px;
  }
  :deep(.van-button--small){
    padding: 0 18px;
  }
  .bottom-input{
    position: fixed;
    bottom: 0;
    width: 100vw;
    padding-bottom: 8px;
  }
  .user{
    flex-direction: row-reverse
  }
  .r-img{
    width: 45px;height: 45px;background-color: rgba(0,210,169);display: inline-block;border-radius: 50%;padding: 4px;box-sizing: border-box
  }
  .u-img{
    width: 45px;height: 45px;background-color: rgba(0,210,169);display: inline-block;border-radius: 50%;
  }
  .r-content{
    max-width: 70vw;background-color: white;padding: 15px;border-radius: 0 12px 12px 12px;margin: 15px 0 4px 10px;
  }
  .u-content{
    max-width: 70vw;background-color: white;padding: 15px;border-radius:  12px 0 12px 12px;margin: 15px 10px 4px 0;
  }
}
</style>
