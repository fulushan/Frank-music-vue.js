<template>
  <div id="app">
    <m-header></m-header>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from '/m-header/m-header'
  import Tab from '/tab/tab'

  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style>
</style>
