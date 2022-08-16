<template>
  <div id="activation">
    <img alt="" src="../../public/user/logo.png"
         style="display: flex;margin: 10vh auto 0;width: 160px;height: 160px; ">
    <div class="form" style="margin: 10vh 10vw;">
      <van-form @failed="onFailed" @submit="onSubmit">
        <van-field
          v-model="phone"
          :rules="[{ required: true, message: '请填写账号' }]"
          label="账号"
          name="phone"
          style="background-color:transparent;font-size: 16px;"
        />
        <van-field
          v-model="password"
          :rules="[{ required: true, message: '请填写密码' }]"
          label="密码"
          name="password"
          style="background-color:transparent;font-size: 16px;padding: 15px 18px;"
          type="password"
        />
        <van-field
          v-model="numID"
          :rules="[{ required: true, message: '请输入学号' }]"
          label="学号"
          name="numID"
          style="background-color:transparent;font-size: 16px;padding: 15px 18px;"
        />
        <van-field
          v-model="password2"
          :rules="[{ required: true, message: '请填写密码' }]"
          label="修改密码"
          name="password2"
          style="background-color:transparent;font-size: 16px;padding: 15px 18px;"
        />
        <van-field
          v-model="password2"
          :rules="[{ required: true, message: '请填写密码' }]"
          label="确认密码"
          name="password2"
          style="background-color:transparent;font-size: 16px;padding: 15px 18px;"
        />
        <div style="margin: 10vh 25px 16px;">
          <van-button block color="rgb(112,218,214)" native-type="submit" style="color: white;font-size: 18px"
                      type="info">
            激活
          </van-button>
        </div>
      </van-form>

    </div>

  </div>
</template>

<script>
import {areaList} from '@vant/area-data';
import {Toast} from "vant";

export default {
  name: "Activation",
  data() {
    return {
      areaList: areaList,
      phone: '',//学院
      password: '', //年级
      password1: '', //
      password2: '',//专业
      numID: '',//学生id
    }
  },
  methods: {
    // 认证提交
    onSubmit: async function (formData) {
      let {data} = await this.$axios({
        method: 'POST',
        url: '/user/findUserByNameAndPassword',
        params: {
          name: formData.numID,
          password: formData.password
        }
      })
      if (data.code === 20000) {
        localStorage.clear()
        const toast = Toast.loading({
          duration: 0,
          forbidClick: true,
          message: '激活成功即将跳转至登录页面'
        })
        let second = 1;
        const timer = setInterval(() => {
          second--;
          if (second === 0) {
            clearInterval(timer);
            // 手动清除 Toast
            Toast.clear();
            this.$router.replace({
              path: '/login'
            })
          }
        }, 1000);
      }
    },
    //错误信息
    onFailed(fail) {
      console.log(fail);
    },
    // 跳转登录
    toLogin() {
      this.$router.replace({
        path: '/login',
      })
    }
  }
}
</script>

<style lang="less" scoped>
#activation {
  position: relative;

  :deep(input) {
    ::-webkit-input-placeholder {
      color: #757070;
    }
  }

  :deep(span) {
    color: #2c3e50;
  }

  //&::after {
  //  background-image: url("../../public/login/login-bg.jpg");
  //  background-size: 100vw 100vh;
  //  background-repeat: no-repeat;
  //  content: "";
  //  opacity: .8;
  //  position: fixed;
  //  top: 0;
  //  left: 0;
  //  bottom: 0;
  //  right: 0;
  //  z-index: -1;
  //}
}
</style>
