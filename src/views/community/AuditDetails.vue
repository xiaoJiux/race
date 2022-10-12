<template>
  <div id="">
    <Header :title="$route.meta.title"></Header>
    <div class="all" style="margin: 15px 20px;">
      <h3 style="color: rgb(6,215,180)">申请人({{ waitPeople?waitPeople.length:0 }})</h3>
      <div class="container">
        <ul>
          <li v-for="item in waitPeople">
            <van-image
              fit="cover"
              height="50"
              radius="50"
              :src="item.userImg"
              width="50"
            />
            <div class="info">
              <p>姓名：{{ item.userName }}</p>
              <p>学院：{{ item.userInstitute }}</p>
            </div>
            <div class="pass">
              <van-icon color="#35e0bd" name="checked" size="35px" style="margin-right: 10px" @click="isAgree(item.id)"/>
              <van-icon color="#ff636f" name="clear" size="35px" @click="isReject(item.id)"/>
            </div>
          </li>
        </ul>
      </div>
      <h4 style="color: rgb(6,215,180)">已通过({{ passPeople?passPeople.length:0 }})</h4>
      <div class="pass reviewed">
        <img v-for="item in passPeople" alt="" :src="item.userImg">
      </div>
      <h4 style="color: rgb(6,215,180)">未通过({{ falsePeople?falsePeople.length:0 }})</h4>
      <div class="pass reviewed">
        <img v-for="item in falsePeople" alt="" :src="item.userImg">
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { Toast } from "vant";

export default {
  name: "AuditDetails",
  components: {Header},

  data() {
    return {
      audit:null,
      waitPeople:null,
      passPeople:null,
      falsePeople:null
    }
  },
  methods: {
    // 同意
    async isAgree(id) {
      let {data} =await this.$axios({
        url:'/join/updateExamineById',
        method:'post',
        params:{
          joinId:id
        }
      })
      if(data.code === 0){
        await this.getWaitPeople()
        await this.getPassPeople()
        await this.getFalsePeople()
        Toast.success('已同意!')
      }
    },
    // 拒绝
    async isReject(id) {
      let {data} =await this.$axios({
        url:'/join/updateExamine3ById',
        method:'post',
        params:{
          joinId:id
        }
      })
      if(data.code === 0){
        await this.getWaitPeople()
        await this.getPassPeople()
        await this.getFalsePeople()
        Toast.success('已拒绝!')
      }
    },
    //待审核人
    async getWaitPeople(){
      let {data} =await this.$axios({
        url:'/join/findActivityJoin',
        method:'post',
        params:{
          activityId:this.audit
        }
      })
      this.waitPeople = data.data
    },
    //通过的人
    async getPassPeople(){
      let {data} =await this.$axios({
        url:'/join/findActivityJoinPass',
        method:'post',
        params:{
          activityId:this.audit
        }
      })
      this.passPeople = data.data
    },
    //不通过的人
    async getFalsePeople(){
      let {data} =await this.$axios({
        url:'/join/findActivityJoinFailed',
        method:'post',
        params:{
          activityId:this.audit
        }
      })
      this.falsePeople = data.data
    },
  },
  async mounted(){
    await this.getWaitPeople()
    await this.getPassPeople()
    await this.getFalsePeople()
  },
  created() {
    this.audit = this.$route.params.id
  }

}
</script>

<style lang="less" scoped>
.container {
  ul {
    max-height: 40vh;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-height: 40vh;
      overflow: hidden;

      .info {
        margin: 15px 20vw 15px 20px;

        p {
          margin: 2px 0;
          font-size: 12px;
        }
      }
    }
  }

}

.reviewed {
  display: grid;
  grid-template-columns: repeat(5, 20%);

  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
    box-sizing: border-box;
    margin: 5px;
  }
}
</style>
