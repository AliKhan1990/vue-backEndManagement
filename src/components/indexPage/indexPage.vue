<template>
  <el-row class="main">
    <ctrlheader @turn="toggleZa" :toggle-turn="toggleTurn"></ctrlheader>
    <leftNav :toggle-turn="toggleTurn" ref="nav"></leftNav>
    <router-view :toggle-turn="toggleTurn"></router-view>
  </el-row>
</template>

<script type="text/ecmascript-6">
  import leftNav from 'components/leftNav/leftNav';
  import ctrlheader from 'components/ctrlheader/ctrlheader';
  import {row, col} from 'element-ui';
  export default{
    name: 'indexPage',
    data(){
      return {
        toggleTurn: false
      };
    },
    methods: {
      toggleZa(){
        setTimeout(() => {
          this.toggleTurn = !this.toggleTurn;
        }, 300);
      }
    },
    components: {
      leftNav,
      ctrlheader
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  a {
    font-size: .15rem;
    color: #333;
    text-decoration: none;
    &:hover {
      color: #31c27c;
    }
  }
</style>
