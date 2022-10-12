<template>
  <div id="audit">
    <Header :title="$route.meta.title"></Header>
    <article>
      <div v-for="(item,index) in list"
           :key="index"
           style="padding: 0 15px 5px;border: 1px solid #eeeeee;" @click="$router.push({
           name:'AuditDetails',
           params:{
             id:item.id
           }
           })"
      >
        <p style="margin: 15px 0;font-size: 14px">{{ item.name }}</p>
        <div style="display: flex;align-items: center">
          <van-icon color="rgba(160,160,160,1)" name="location"/>
          <p style="max-width: 70vw;font-size: 12px;margin: 0 0 0 15px;color: #abaaaa">{{ item.location }}</p>
        </div>
        <div style="font-size: 12px;margin-top: 15px;">
          <span style="padding-right: 20px">活动总人数 ：{{ item.nowNum }} / {{ item.needNum }}</span>
          <span>待审核 ：{{ item.duserSum }}人</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapState } from "vuex";

export default {
  name: "Audit",
  components: {Header},
  data() {
    return {
      list: null
    }
  },
  computed: { ...mapState(["userData"]) },
  methods: {
    async getAcitivity(){
      let {data} = await this.$axios({
        url:'/activity/findByUserId',
        method:'post',
        params:{
          userId:this.userData.id
        }
      })
      this.list = data.data
    }
  },
  async mounted () {
    await this.getAcitivity()
  }

}
</script>

<style lang="less" scoped>
#audit {
  &:deep(.van-popup) {
    border-radius: 10px;

    &::-webkit-scrollbar {
      display: none
    }
  }

  .select {
    padding: 15px;
    width: 70vw;
    height: 60vh;

    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      .left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;

        .info {
          margin-left: 10px;

          p {
            margin: 0;

            &:nth-child(1) {
              font-size: 14px;
              margin-bottom: 5px;
            }

            &:nth-child(2) {
              font-size: 10px;
            }
          }


        }
      }

      .btn {
        :deep(.van-button) {
          width: 26px;
          height: 26px;

          .van-button__icon {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
