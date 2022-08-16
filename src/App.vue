<template>
  <div id="app">
    <router-view/>
    <AppNavbar v-if="$route.meta.showTabBar"/>
    <PopUp v-if="show === true" @myEvent="destroyPopup"></PopUp>
  </div>
</template>
<script>
import AppNavbar from "@/components/AppNavbar";
import PopUp from "@/components/Pop-up";
import {clear} from "@/utils/localStorage";
import axios from "axios";
import {mapState} from "vuex";

export default {
  components: {AppNavbar, PopUp},
  data() {
    return {
      show: localStorage.getItem("token"),
    }
  },
  methods: {
    destroyPopup() {
      this.show = false
    }
  },
  created() {
    // if (localStorage.getItem("token") === null) {
    //   localStorage.clear()
    //   this.$router.replace({
    //     path: "/login"
    //   })
    // }
    // if (localStorage.getItem("token")!==null) {
    //   this.show = true
    // }
  }

}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;

}


</style>
