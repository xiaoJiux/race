<template>
  <div id="issuanceActivity">
    <Header :title="$route.meta.title"></Header>
    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        :rules="[{ required: true, message: '请填写标题' }]"
        label="标题"
        name="name"
      />
      <van-field
        v-model="content"
        :max-date="maxDate"
        :min-date="minDate"
        :rules="[{ required: true, message: '请输入活动内容' }]"
        autosize
        label="内容"
        name="content"
        type="textarea"
      />
      <van-field
        v-model="location"
        :rules="[{ required: true, message: '请填写活动地点' }]"
        label="地点"
        name="location"
      />
      <van-field
        v-model="claim"
        :rules="[{ required: true, message: '请填写参加志愿者要求' }]"
        label="地点"
        name="claim"
      />
      <van-field
        v-model="unit"
        :rules="[{ required: true, message: '请填写单位' }]"
        label="单位"
        name="unit"
      />
      <van-field
        v-model="number"
        :rules="[{ required: true, message: '参加人员数目' }]"
        label="人数"
        name="number"
      />
      <van-field
        v-model="unit"
        :rules="[{ required: true, message: '请填写单位' }]"
        label="单位"
        name="claim"
      />

      <van-field
        :rules="[{ required: true, message: '请选择时间' }]"
        :value="start"
        clickable
        label="活动开始时间"
        name="end"
        placeholder="点击选择时间"
        readonly
        @click="showStart = true"
      />
      <van-popup v-model="showStart" position="bottom">
        <van-datetime-picker
          :max-date="maxDate"
          :min-date="minDate"
          title="选择完整时间"
          type="datetime"
          @cancel="showStart = false"
          @confirm="StartTime"
        />
      </van-popup>
      <van-field
        :rules="[{ required: true, message: '请选择时间' }]"

        :value="end"
        clickable
        label="活动结束时间"
        name="start"
        placeholder="点击选择时间"
        readonly
        @click="showEnd = true"
      />
      <van-popup v-model="showEnd" position="bottom">
        <van-datetime-picker
          title="选择完整时间"
          type="datetime"
          @cancel="showEnd = false"
          @confirm="EndTime"
        />
      </van-popup>
      <van-field
        :rules="[{ required: true, message: '请选择时间' }]"
        :value="time"
        clickable
        label="报名开始时间"
        name="time"
        placeholder="点击选择时间"
        readonly
        @click="showTime = true"
      />
      <van-popup v-model="showTime" position="bottom">
        <van-datetime-picker
          title="选择完整时间"
          type="datetime"
          @cancel="showTime = false"
          @confirm="timeA"
        />
      </van-popup>
      <van-field
        :rules="[{ required: true, message: '请选择时间' }]"
        :value="overTime"
        clickable
        label="报名结束时间"
        name="overTime"
        placeholder="点击选择时间"
        readonly
        @click="showOver = true"
      />
      <van-popup v-model="showOver" position="bottom">
        <van-datetime-picker
          title="选择完整时间"
          type="datetime"
          @cancel="showEnd = false"
          @confirm="overtime"
        />
      </van-popup>
      <van-field :rules="[{ required: true, message: '请上传一张活动地点图片' }]" label="文件上传" name="uploader">
        <template #input>
          <van-uploader v-model="uploader" max-count="1"/>
        </template>
      </van-field>
      <div style="margin: 16px 35px;">
        <van-button block native-type="submit" round type="info">提交</van-button>
      </div>
    </van-form>
  </div>

</template>

<script>
import Header from "@/components/Header";
import {Toast} from "vant";

export default {
  name: "IssuanceActivity",
  components: {Header},
  data() {
    return {
      uploader: [],
      showStart: false,//是否显示选择器
      showEnd: false,//是否显示选择器
      showTime: false,//是否显示选择器
      showOver: false,//是否显示选择器
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      name: '111',//活动名字
      location: '宁波市镇海区庄市街道宁大一村',//地点
      start: '',//活动开始时间
      end: '',//活动结束
      img: '',//活动地点图片
      content: '去和川宝碰一个',//活动内容
      number: '15',//人数
      claim: '无',//要求
      unit: '学校',//单位
      time: '',//报名开始
      overTime: '',//报名结束
    }
  },
  methods: {
    //格式化日期
    p(s) {
      return s < 10 ? '0' + s : s
    },
    setTime(time) {
      const resDate = time.getFullYear() + '-' + this.p((time.getMonth() + 1)) + '-' + this.p(time.getDate())
      const resTime = this.p(time.getHours()) + ':' + this.p(time.getMinutes()) + ':' + this.p(time.getSeconds())
      return resDate + ' ' + resTime
    },
    async onSubmit(value) {
      console.log(value);
      // console.log(value.uploader[0].file);
      try {
        value.uploader = value.uploader[0].file
        console.log(value)
        // let {data} = await this.$axios({})
      } catch (e) {
        console.log(e);
        Toast.fail('对不起,出错啦!')
      }
    },
    StartTime(time) {
      this.start = this.setTime(time);
      this.showStart = false;
    },
    EndTime(time) {
      this.end = this.setTime(time);
      this.showEnd = false;
    },
    overtime(time) {
      this.overTime = this.setTime(time);
      this.showOver = false;
    },
    timeA(time) {
      this.time = this.setTime(time);
      this.showTime = false;
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.van-button) {
  background-color: rgb(0, 217, 182);
  border-color: rgb(0, 217, 182);
  font-size: 18px;
}
</style>
