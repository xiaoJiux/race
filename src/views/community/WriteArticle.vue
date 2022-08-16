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
        <van-uploader v-model="fileList" :after-read="afterRead" multiple/>

      </van-form>

    </div>

  </div>
</template>

<script>
export default {
  name: "WriteArticle",
  data() {
    return {
      fileList: [],
      message: "",
      formData: new FormData()
    };
  },
  methods: {
    //内容提交
    onSubmit(values) {

    },
    afterRead(file) {
      this.formData.append(file.file.name, file.file);
      console.log(this.formData);
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
