<template>
  <div id="">
    <van-swipe class="my-swipe" indicator-color="white" v-if="list[0]">
      <van-swipe-item>
        <van-image
          :src='list[0]'
          width="100vw"
          height="100vh"
        />
      </van-swipe-item><van-swipe-item >
        <van-image
          :src='list[1]'
          width="100vw"
          height="100vh"
        />
      </van-swipe-item><van-swipe-item>
        <van-image
          :src='list[2]'
          width="100vw"
          height="100vh"
        />
      </van-swipe-item><van-swipe-item>
        <van-image
          :src='list[3]'
          width="100vw"
          height="100vh"
          @click="$router.push({
          path:'/'
          })"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
  data () {
    return {
      list:[
        require('../assets/first/1.jpg'),
        require('../assets/first/2.jpg'),
        require('../assets/first/3.jpg'),
        require('../assets/first/4.jpg'),
      ]
    }
  },
  methods: {

  }

}
</script>

<style scoped lang="less">
:deep(.van-swipe__indicators){
  display: none;
}
</style>
