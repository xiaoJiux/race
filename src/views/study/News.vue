<template>
<div class="news">
  <Header :title="$route.meta.title"></Header>
</div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "News",
  components: {Header}

}
</script>

<style scoped lang="less">

</style>