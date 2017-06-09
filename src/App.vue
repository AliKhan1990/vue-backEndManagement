<template>
  <div id="app">
    <indexPage></indexPage>
  </div>
</template>

<script>
  import indexPage from 'components/indexPage/indexPage';
  export default {
    name: 'app',
    components: {
      indexPage
    }
  };
</script>

<style>
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
