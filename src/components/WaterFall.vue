<!-- web瀑布流(网络图片) -->
<template>
  <div class="flow-box">
    <!--    <van-overlay :show="show" @click="show = false" >-->
    <van-popup v-model="show" @click="show = false" style="border-radius: 25px">
      <div class="wrapper">
        <Article_Card :data="passCard"/>
      </div>
    </van-popup>

    <!--    </van-overlay>-->
    <!-- 列表 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="min-height: 100vh;"
                      :success-duration="800" success-text="加载成功" loading-text="加载中...">
      <van-list v-if="haveData===2" v-model="loading" :finished="finished"
                finished-text="没有更多了" @load="onBottomLoad" :offset="150" :immediate-check="false">
        <div class="data-list-box" id="data-list-box">
          <div class="data-item" v-for="(item, index) in dataList"
               :style="{width: boxWidth + 'px'}" :key="index"
               @click="passData(item)"
          >
            <img class="data-cover" :src="item.img"
                 :style="{width: '100%', height: item.imgHeight + 'px'}" alt=""/>
            <div class="data-name">{{ item.title }}</div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import Article_Card from "@/components/Article_Card";

export default {
  name: 'WaterFall',
  components: {Article_Card},
  data() {
    return {
      dataList: [], //列表数据
      haveData: 0, //是否有数据，1=无，2=有，0=页面还未初始化
      pageIndex: 1, //页码
      pageSize: 8, //每页加载数据数量
      isLoading: false,  //下拉刷新进行中，请求开始true, 请求完成false，用于下拉刷新组件van-pull-refresh
      loading: false,  //上拉加载更多中，上拉触底时自动变成true, 请求完成设置为false, 用于列表组件van-list
      finished: false, //上拉加载是否加载完最后一页数，用于组件van-list
      itemCount: 0, //上一次加载完成后的瀑布流item个数
      lastRowHeights: [0, 0], //最后一行标签的顶部间距+高度，2列

      boxMargin: 15, //每个item之间的边距
      boxWidth: 165, //每个item宽度

      show: false,//遮盖层是否显示
      passCard: {}//传递给Article_card数据
    }
  },
  created() {
    this.$toast.loading({
      message: '加载中...',
      duration: 0
    });
    //当前瀑布流设置为两列，计算瀑布流每个item和图片的宽度
    let screenWidth = document.body.offsetWidth; //屏幕宽度
    this.boxWidth = (screenWidth - this.boxMargin * 3) / 2; //每个item的宽度
    this.onRefresh(); //刷新数据
  },
  methods: {
    //传数据到卡片
    passData(passData) {
      this.show = true
      this.passCard = passData
      console.log(1);
    },
    changeType(index) { //切换类型
      if (this.typeIndex === index) return;

      this.$toast.loading({
        message: '加载中...',
        duration: 0
      });
      this.typeIndex = index;
      this.onRefresh();
    },
    onRefresh() { //下拉刷新

      // if (this.isLoading) return; //还在请求中，返回

      this.pageIndex = 1; //重置第一页
      this.isLoading = true; //开始加载
      this.finished = false; //上拉加载"所有数据已经完成"标识 重置为false

      //接口请求
      this.getDataList();0
    },
    onBottomLoad() { //上拉加载更多
      if (this.finished) return; //说明所有数据已经加载完毕，返回

      this.getDataList(); //下一页数据请求中
    },
    //数据请求
    async getDataList() {
      let {data} = await this.$axios({
        method: 'get',
        url: '/test.json'
      })
      let list = data.data ? data.data : []
      this.$toast.clear();
      this.isLoading = false; //下拉刷新请求完成
      this.loading = false; //上拉加载更多请求完成
      if (list.length > 0) {
        //从list中取pageSize条数据出来
        let tempList = [];
        for (let i = 0; i < this.pageSize; i++) {
          if (list.length > 0) {
            let tempIndex = parseInt(Math.random() * 1000) % list.length;
            tempList.push(list[tempIndex]);
            list.splice(tempIndex, 1);
          }
        }
        this.loadImagesHeight(tempList); //模拟预加载图片，获取图片高度
      } else {
        this.loadImagesHeight(list); //处理数据
      }

      // {
      //   this.$axios.get("/test.json").then((res) => {
      //
      //     let list = res.data.data ? res.data.data : [];
      //     if (list.length > 0) {
      //       //从list中取pageSize条数据出来
      //       var tempList = [];
      //       for (let i = 0; i < this.pageSize; i++) {
      //         if (list.length > 0) {
      //           let tempIndex = parseInt(Math.random() * 1000) % list.length;
      //           tempList.push(list[tempIndex]);
      //           list.splice(tempIndex, 1);
      //         }
      //       }
      //       this.loadImagesHeight(tempList); //模拟预加载图片，获取图片高度
      //     } else {
      //       this.loadImagesHeight(list); //处理数据
      //     }
      //   }).catch((res) => {
      //     console.log("..fail: ", res);
      //     this.$toast.clear();
      //     this.isLoading = false; //下拉刷新请求完成
      //     this.loading = false; //上拉加载更多请求完成
      //   })
      // }
    },
    loadImagesHeight(list) {
      var count = 0; //用来计数，表示是否所有图片高度已经获取
      list.forEach((item, index) => {
        //创建图片对象，加载图片，计算图片高度
        var img = new Image();
        img.src = item.img;
        img.onload = img.onerror = (e) => {
          count++;
          if (e.type === 'load') { //图片加载成功
            //计算图片缩放后的高度：图片原高度/原宽度 = 缩放后高度/缩放后宽度
            list[index].imgHeight = Math.round(img.height * this.boxWidth / img.width);
            // console.log('index: ', index, ', load suc, imgHeiht: ', list[index].imgHeight);
          } else { //图片加载失败，给一个默认高度50
            list[index].imgHeight = 50;
            // console.log("index： ", index, "， 加载报错：", e);
          }

          //加载完成最后一个图片高度，开始下一步数据处理
          if (count === list.length) {
            this.resolveDataList(list);
          }
        }
      })
    },
    resolveDataList(list) { //处理数据
      //下拉刷新，清空原数据
      if (this.pageIndex <= 1) {
        this.itemCount = 0;
        this.dataList = [];
        this.lastRowHeights = [0, 0]; //存储每列的最后一行高度清0
      }

      if (list.length >= this.pageSize) {
        this.pageIndex++;  //还有下一页
      } else {
        this.finished = true; //当前tab类型下所有数据已经加载完成
      }

      //合并新老两个数组数据
      this.dataList = [...this.dataList, ...list];
      //判断页面是否有数据
      this.haveData = this.dataList.length > 0 ? 2 : 1;
      this.isLoading = false; //下拉刷新请求完成
      this.loading = false; //上拉加载更多请求完成

      console.log("...datalist: ", this.dataList);
      console.log("...this.isLoading: ", this.isLoading)

      this.$nextTick(() => {
        setTimeout(() => {
          //渲染完成，计算每个item宽高，设置标签坐标定位
          this.setItemElementPosition();
          this.isLoading = false; //下拉刷新请求完成
          this.loading = false; //上拉加载更多请求完成
        }, 1000)
      });
    },
    //获取每个item标签高度，设置item的定位
    setItemElementPosition() {
      let parentEle = document.getElementById('data-list-box');
      let boxEles = parentEle.getElementsByClassName("data-item");

      for (let i = this.itemCount; i < boxEles.length; i++) {
        let tempEle = boxEles[i];
        //上一个标签最小高度的列索引
        let curColIndex = this.getMinHeightIndex(this.lastRowHeights);
        let boxTop = this.lastRowHeights[curColIndex] + this.boxMargin;
        let boxLeft = curColIndex * (this.boxWidth + this.boxMargin) + this.boxMargin;
        tempEle.style.left = boxLeft + 'px';
        tempEle.style.top = boxTop + 'px';
        this.lastRowHeights[curColIndex] = boxTop + tempEle.offsetHeight;

        // console.log('i = ', i, ', boxTop: ', boxTop, ', eleHeight: ', tempEle.offsetHeight);
      }

      this.itemCount = boxEles.length;

      //修改父级标签的高度
      let maxHeight = Math.max.apply(null, this.lastRowHeights);
      parentEle.style.height = maxHeight + 'px';

      this.$toast.clear();
      // console.log("...boxEles: ", boxEles.length, ", maxH: ", maxHeight);
    },
    //获取数组中最小值的索引
    getMinHeightIndex(arr) {
      var minHeight = Math.min.apply(null, arr);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === minHeight) {
          return i;
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
.flow-box {
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;

  .wrapper {
    display: flex;
    margin: auto;
    height: 100%;
  }

}


/* 列表数据样式 */
@keyframes data-item-ani {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

.flow-box .data-list-box {
  position: relative;
  //margin-height: 100vh;
  //margin-top: 40px;
}

.data-list-box .data-item {
  height: auto;
  position: absolute;
  background-color: #ffffff;
  left: -1000px;
  animation: data-item-ani 0.4s;
  transition: left 0.6s, top 0.6s;
  transition-delay: 0.1s;
}

.data-item .data-cover {
  display: block;
  border-radius: 25px;
}

.data-item .data-name {
  font-size: 14px;
  margin: 5px 10px;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

</style>