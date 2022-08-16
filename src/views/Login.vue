<template>
  <div id="login">
    <div class="topImg">
      <img alt="" src="../../public/user/login-img.jpg" style="object-fit: cover;
      width: 100vw;">
      <div class="logo">
        <img alt="" src="../../public/user/logo.png">
      </div>
    </div>
    <van-form style="margin: 0 25px;" @submit="onSubmit">
      <van-field
        v-model="numID"
        :rules="[{ required: true, message: '请填写账号' }]"
        label="用户名"
        name="numID"
        placeholder="账号"
        style="margin-bottom: 15px;"
      />
      <van-field
        v-model="password"
        :rules="[{ required: true, message: '请填写密码' }]"
        label="密码"
        name="password"
        placeholder="密码"
        type="password"
      />
      <div style="margin: 16px;">
        <van-button block color="linear-gradient(to right, rgb(0,218,185),rgb(59,185,199))" native-type="submit"
                    style="margin: 20vh 0;font-size: 20px"
                    type="info">登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>

import {LocalStorage} from "@/utils/localStorage";
import {Toast} from "vant";

export default {
  name: "Login",
  data() {
    return {
      numID: '2020009025',
      password: '1234567',
    };
  },
  methods: {
    //信息填写错误
    onFailed(fail) {
      console.log(fail);
      Toast("请输入的账号或密码")
    },
    //登录
    async onSubmit(values) {
      console.log(values);
      let {data} = await this.$axios({
        method: 'POST',
        url: '/user/findUserByNameAndPassword',
        params: values
      })

      console.log(data);
      if (data.code === 20000) {
        LocalStorage(data.token.token, data.data[0])
        const toast = Toast.loading({
          duration: 0,
          forbidClick: true,
          message: '登陆中'
        })
        let second = 2;
        const timer = setInterval(() => {
          second--;
          if (second === 0) {
            clearInterval(timer);
            // 手动清除 Toast
            Toast.clear();
            this.$router.replace({
              path: '/'
            })
          }
        }, 1000);

      } else {
        Toast("您输入的账号或密码错误")
      }
    },
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
#login {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .topImg {
    position: relative;

    .logo {
      width: 110px;
      display: block;
      box-sizing: border-box;
      position: relative;
      margin: 0 auto;
      text-align: center;
      top: -55px;
      background-color: white;
      border-radius: 50%;
      padding: 15px;
      box-shadow: 0 3px 4px #cccccc;

      img {
        width: 100%;
        object-fit: cover;

      }
    }
  }

  :deep(.van-cell__title) {
    span {
      font-size: 16px;
      color: #cccccc;
    }
  }
}
</style>
