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
          <span>待审核 ：{{ 10 }}人</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Audit",
  components: {Header},
  data() {
    return {
      list: [{
        people: [{//参加活动的的用户
          id: 1,
          img: '',//头像
          name: '',
        }],//参加活动的人
        id: 1,//活动id
        nowNum: 5,//已经参加人数
        needNum: 10,//最大人数
        name: '个人成长图书会',//活动名称
        img: 'https://img01.yzcdn.cn/vant/cat.jpeg',//现场图片
        phone: '18858444327',//主办人手机号
        start: '2020.08.16 ',//报名开始时间
        end: '2020.08.17',//报名结束时间
        userName: '张三',
        unit: "服务小分队",//举办单位
        //活动详情
        content: "通过 round 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。",
        time: '',//活动开始时间
        overTime: '',//活动开始时间
        location: '宁波市镇海区庄市街道街道核酸采样综合服务点',//地址
        claim: '当天下午提前半小时到达',//志愿者要求
      }]
    }
  },
  methods: {}

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
