<template>
  <div id="setInfo">
    <Header :title="$route.meta.title"></Header>
    <ul>
      <li class="van-hairline--bottom">
        <span class="line-name">
          头像
        </span>
        <div class="line-content" >
          <img :src="userData.img" alt="" style="width: 55px;height: 55px;border-radius: 50%">
          <van-icon name="arrow" />
        </div>
      </li>
      <li class="van-hairline--bottom">
        <span class="line-name">
          账号
        </span>
        <div class="line-content" >
          {{userData.number}}
        </div>
      </li>
      <li class="van-hairline--bottom">
        <span class="line-name">
          姓名
        </span>
        <div class="line-content" >
          {{userData.name}}
        </div>
      </li>
      <li class="van-hairline--bottom">
        <span class="line-name">
          性别
        </span>
        <div class="line-content" >
          {{userData.sex === 1 ? '男' :'女' }}
        </div>
      </li>
      <li class="van-hairline--bottom">
        <span class="line-name">
          学院
        </span>
        <div class="line-content" >
          {{userData.instituteString}}
        </div>
      </li>
      <li class="van-hairline--bottom">
        <span class="line-name">
          手机号
        </span>
        <div class="line-content" >
          {{userData.phone}}
        </div>
      </li>
      <li class="van-hairline--bottom">
        <span class="line-name">
          密码
        </span>
        <div class="line-content" >
          <van-icon name="arrow" />
        </div>
      </li>

    </ul>
  </div>
</template>

<script>

import Header from "@/components/Header";
import { mapState } from "vuex";
export default {
  name: "SetInfo",
  components: { Header },
  computed:{...mapState(["userData"])},
  data () {
    return {}
  },
  methods: {},
  mounted () {
    console.log (this.userData)
  }
}
</script>

<style scoped lang="less">
#setInfo{
  ul>li{
    display: flex;
    justify-content: space-between;
    padding:16px;
    align-items: center;
    .line-content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      i{
        padding-left: 8px;
      }
    }
  }
}
</style>
