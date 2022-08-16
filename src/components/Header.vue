<template>
  <van-sticky>
    <div id="header" class="van-hairline--bottom">
      <van-icon class="icon" color="#cccccc" name="arrow-left" @click.stop="$router.back()"/>
      <span>{{ title }}</span>
      <div style="width: 18px;height: 18px;">
        <slot name="send"></slot>
      </div>
    </div>
  </van-sticky>

</template>

<script>
export default {
  name: "Header",
  props: ["title"]
}
</script>

<style lang="less" scoped>
#header {
  text-align: center;
  //color: #fff;
  padding: 0.8rem;
  //background: linear-gradient(to bottom right,rgba(113,235,214), rgb(103, 217, 214));
  background-color: white;
  font-size: 18px;
  font-weight: 600;
  color: #35e0bd;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
