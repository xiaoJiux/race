<template>
  <div id="enter">
    <Header :title="$route.meta.title"></Header>
    <van-tabs v-model="active" animated title-active-color="rgb(143,235,221)">
      <van-tab v-for="(item1,index1) in list" :key="index1" :title="item1.title">
        <div class="content-list">
          <div v-for="(item,index) in list[index1].aList" :key="index" class="van-hairline--bottom item" @click="$router.push({
      name:'ActivityDetails',
      params: {
        id:item.id,
        item
      }
      })">
            <van-image
              :src="item.img"
              fit="cover"
              height="25vh"
              width="88vw"
            />
            <p class="title" style="border-left: 6px solid rgb(3,204,198);padding-left: 3px">{{ item.name }}</p>
            <p style="font-size: 10px;color: #cccccc">
              <span style="margin-right: 12vw;padding-left: 9px">地区 ：{{ item.location.split('区')[0] + '区' }}</span>
              <span>人数 ：{{ item.nowNum }}/{{ item.needNum }}人</span>
            </p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Header from "@/components/Header";
import {mapState} from "vuex";

export default {
  name: "EnterActivity",
  components: {Header},
  data() {
    return {
      active: 0,
      list: [
        {
          title: '全部',
          aList: []
        },
        {
          title: '审核中',
          aList: []
        }, {
          title: '已通过',
          aList: []

        }, {
          title: '未通过',
          aList: []
        }, {
          title: '已结束',
          aList: []
        },
      ],

    }
  },
  computed: {...mapState(['userData'])},
  methods: {
    //获取数据
    async getData() {
      let {data} = await this.$axios({
        url: '/join/findByUser',
        method: 'post',
        params: {
          userId: this.userData.id
        }
      })
      console.log(data);
      let atlArr = []//保存活动id
      if (data.code === 0) {
        data.data.forEach(function (item) {
          if (atlArr.indexOf(item.activity) === -1) {
            atlArr.push(item.activity)
          }
        })
      }
      console.log(atlArr);
      let obj = []
      for (let value of atlArr) {
        let {data} = await this.$axios({
          method: 'POST',
          url: '/activity/findById',
          params: {
            id: value
          }
        })

        obj.push(data.data[0])
      }
      console.log(obj);
      if (this.list) {
        this.list[0].aList = [...obj]
      }
    }
  },
  async mounted() {
    await this.getData()
  }
}
</script>

<style lang="less" scoped>
#enter {
  &:deep(.van-tabs__line) {
    background-color: rgb(6, 192, 206);
  }

  :deep(.van-tab) {
    color: rgb(160, 160, 160);
  }

  :deep(.van-tab--active) {
    font-size: 18px;
    font-weight: 600;
  }

  :deep(.van-dropdown-menu__title::after) {
    border-color: transparent transparent rgb(1, 202, 205) rgb(1, 202, 205);
  }

  :deep(.van-image) {
    border-radius: 15px;
    overflow: hidden;
  }

  .content-list {
    padding: 25px 6vw;

    .item {
      margin: 0 auto;
      padding-bottom: 15px;

      .title {
        font-size: 14px;
      }
    }
  }
}
</style>
