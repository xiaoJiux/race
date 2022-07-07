<template>
  <van-sticky>
    <div id="header">
      <van-icon @click.stop="$router.back()" name="arrow-left"
                size="26" color="#fff" style="float: left;position: absolute;left: 20px;" class="icon"/>
      {{title}}
    </div>
  </van-sticky>

</template>

<script>
export default {
  name: "Header",
  props: ["title"]
}
</script>

<style scoped lang="less">
#header{
  text-align: center;
  color: #fff;
  padding: 0.8rem;
  background: linear-gradient(to bottom right,rgba(113,235,214), rgb(103, 217, 214));
  font-size: 18px;
  box-sizing: border-box;
  position: relative;
}
</style>