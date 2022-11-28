<template>
  <div id="app">
<!--    <router-view/>-->
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <AppNavbar  v-if="$route.meta.showTabBar"/>
  </div>
</template>
<script>
import AppNavbar from "@/components/AppNavbar";
import PopUp from "@/components/Pop-up";


export default {
  components: {AppNavbar, PopUp},
  data() {
    return {
      show: localStorage.getItem("token"),
    }
  },
  methods: {
  },
  created() {
    if (localStorage.getItem("token") === null) {
      localStorage.clear()
      this.$router.replace({
        path: "/login"
      })
    }
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
