<template>
  <div id="app">
    <router-view />
    <AppNavbar  v-if="$route.meta.showTabBar" />
  </div>
</template>
<script>
import AppNavbar from "@/components/AppNavbar";

export default {
  components:{AppNavbar},
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
