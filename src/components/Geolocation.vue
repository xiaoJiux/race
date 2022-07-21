<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  name: "Geolocation",
  data() {
    return {
      map: null,
      lat: 0,
      lng: 0,
      address:'',
      key:'b611977761cf4936cb279a515c3edce6'
    }
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "b611977761cf4936cb279a515c3edce6",             // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Geolocation', 'AMap.Marker','AMap.Scale','AMap.Geocoder'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map("container", {  //设置地图容器id
          viewMode: "3D",    //是否为3D地图模式
          zoom: 20,           //初始化地图级别
          center:[120.1551,30.2741], //初始化地图中心点位置
          mapStyle: 'amap://styles/normal', //设置地图的显示样式
        });
        let geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 15000,
          // 定位按钮的停靠位置的偏移量
          // offset: [10, 20],
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          position: 'RB'
        })
        const Geocoder = new AMap.Geocoder();

        geolocation.getCurrentPosition( (status, result) => {
          if (status === 'complete') {
            // console.log('result',result)
            onComplete(result)
          } else {
            onError(result)
          }
        });


        let onComplete =async (data) => {
          // console.log('data',data);
          // data是具体的定位信息
          this.lat =await data.position.lat
          this.lng =await data.position.lng
          let marker =await new AMap.Marker({
            position:new AMap.LngLat(this.lng,this.lat)
          })
          this.map.addControl(marker)
          let Info =await this.$axios({
            url:'https://restapi.amap.com/v3/geocode/regeo',
            method:'get',
            params:{
              key:'ea0c4e602dd26b2f36db5876c9042bd6',
              location:this.lng+','+this.lat,
              batch:true,
            }
          })
          this.address = Info.data.regeocodes[0].formatted_address
          this.$emit('giveAddress',this.address)
          // console.log(Info.data.regeocodes[0].formatted_address);
        }


        function onError(data) {
          // 定位出错
          console.log('err', data);
        }
        this.map.addControl(new AMap.Scale())


      }).catch(e => {
        console.log(e);
      })
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  }
}
</script>

<style scoped lang="less">
#container {
  width: 100%;
  height: 100%;
}
</style>