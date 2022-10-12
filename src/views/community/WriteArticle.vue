<template>
  <div class="writeArticle">
    <header>
      <van-icon class="icon" color="black" name="cross" size="20" @click.stop="$router.back()"/>
      <van-button size="mini" type="primary" @click="sendMsg">发布</van-button>
    </header>
    <div class="content">
      <van-form ref="submit" @submit="onSubmit">
        <van-field
          v-model="message"
          autosize
          maxlength="200"
          name="message"
          placeholder="说点什么或@TA"
          rows="2"
          show-word-limit
          type="textarea"
        />
        <van-uploader v-model="uploader" :after-read="afterRead" multiple/>

      </van-form>

    </div>

  </div>
</template>

<script>
import { Toast } from "vant";
import { mapState } from "vuex";

export default {
  name: "WriteArticle",
  data() {
    return {
      fileList: [],
      message: "",
      uploader: [],
      img:null,
    };
  },
  computed: {...mapState(["userData"])},
  methods: {
    //内容提交
    async onSubmit(value) {

      try {
        if(this.img){
          let obj = {
            name:value.message,
            user:this.userData.id,
            img:this.img,
            opacity:2,
            content:value.message,
            level:2
          }

          let {data} = await this.$axios({
            url:'/posting/save',
            method:'post',
            data:obj
          })
          if(data.code === 0){
            await this.$router.replace ({
              path: '/'
            })
          }
        }
      } catch (e) {
        console.log(e);
        Toast.fail('对不起,出错啦!')
      }
    },
    async afterRead(file){
      file = file.file
      let {data} = await this.$axios({
        url:'/files/upload',
        method:'post',
        headers:{
          'Content-Type':'multipart/form-data'
        },
        data:{
          file
        }
      })
      this.img = data.data
    },
    sendMsg() {
      this.$refs.submit.submit()
    }
  }
}
</script>

<style lang="less" scoped>
.writeArticle {
  header {
    font-size: 18px;
    padding: .8rem 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(250, 250, 250);

    &:deep(.van-button--primary) {
      font-size: 14px;
      //background-color: rgba(255, 221, 0);
      background: linear-gradient(to right, rgb(0, 217, 180), rgb(4, 210, 231));
      padding: 7px 16px;
      border-radius: 8px;
      border: none;
      color: black;
      height: initial;
    }

    .send-out {
      font-size: 14px;
      background-color: rgba(255, 221, 0);
      padding: 5px 12px;
      border-radius: 8px;
    }
  }
}
</style>
