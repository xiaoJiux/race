<template>
  <div id="">
    <Header :title="$route.meta.title"></Header>
    <div class="all" style="margin: 15px 20px;">
      <h3 style="color: rgb(6,215,180)">申请人({{ 15 }})</h3>
      <div class="container">
        <ul>
          <li v-for="item in 6">
            <van-image
              fit="cover"
              height="50"
              radius="50"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
              width="50"
            />
            <div class="info">
              <p>姓名：{{ '张三' }}</p>
              <p>班级：{{ '张三' }}</p>
              <p>学院：{{ '张三' }}</p>
            </div>
            <div class="pass">
              <van-icon color="#35e0bd" name="checked" size="35px" style="margin-right: 10px" @click="isAgree"/>
              <van-icon color="#ff636f" name="clear" size="35px" @click="isReject"/>
            </div>
          </li>
        </ul>
      </div>
      <h4 style="color: rgb(6,215,180)">已通过({{ 5 }})</h4>
      <div class="pass reviewed">
        <img v-for="item in 10" alt="" src="https://img01.yzcdn.cn/vant/cat.jpeg">
      </div>
      <h4 style="color: rgb(6,215,180)">未通过({{ 5 }})</h4>
      <div class="pass reviewed">
        <img v-for="item in 10" alt="" src="https://img01.yzcdn.cn/vant/cat.jpeg">
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "AuditDetails",
  components: {Header},

  data() {
    return {}
  },
  methods: {
    // 同意
    isAgree(id, aid) {

    },
    // 拒绝
    isReject(id, aid) {

    }
  },
  created() {
    console.log(this.$route.params)
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
