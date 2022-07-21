<template>
  <div id="container" @click.stop></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  name: "Activity_card",
  data(){
    return{
      map:null,
    }
  },
  props:['EndXY'],
  methods:{
    initMap(){
      AMapLoader.load({
        key:"b611977761cf4936cb279a515c3edce6",             // 申请好的Web端开发者Key，首次调用 load 时必填
        version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins:['AMap.Scale','AMap.Marker'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap)=>{
        this.map = new AMap.Map("container",{  //设置地图容器id
          viewMode:"3D",    //是否为3D地图模式
          zoom:20,           //初始化地图级别
          center:[this.EndXY.lng,this.EndXY.lat], //初始化地图中心点位置
          mapStyle: 'amap://styles/normal', //设置地图的显示样式
        });
        this.map.addControl(new AMap.Scale())
        let marker = new AMap.Marker({
          position:new AMap.LngLat(this.EndXY.lng,this.EndXY.lat)
        })
        this.map.add(marker)
      }).catch(e=>{
        console.log(e);
      })
    },
  },
  mounted() {
    this.initMap()
  },
  created() {

  }
}
</script>

<style scoped >
#container{
  //padding:0;
  //margin: 0;
  width: 100%;
  height: 100%;

}
</style>