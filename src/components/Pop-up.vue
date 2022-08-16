<template>
<div id="popup" ref="popup" class="" @scroll.prevent.stop>
  <div class="box">
    <img alt="" class="close" src="../../src/assets/close.png" @click="close()" />
  </div>
</div>
</template>

<script>
export default {
  name: "Pop-up",
  data(){
    return{

    }
  },
  methods:{
    close: function(){
      this.$emit("myEvent")
    }
  }
}
</script>

<style lang="less" scoped>
#popup{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: rgba(0,0,0,.45);
  .box{
    background-image: url("../../public/home/R-C.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left:50%;
    top:46%;
    transform: translate(-50%, -50%);
    width: 64vw;
    height: 56vh;
    .close{
      width: 45px;
      height: 45px;
      position: absolute;
      bottom: -100px;
      left: 50%;
      transform: translate(-50%, -50%);

    }
  }
}
</style>
