<template>
  <el-col class="header">
    <el-col :md="5" :xs="12" v-show="!toggleGate">
      <h5 class="title">吉林市食药监业务审批系统</h5>
    </el-col>
    <el-col :md="toggleGate ? 24 : 19" :xs="toggleGate ? 24 : 12" class="control">
      <div class="bar">
        <a @click="toggleClick" href="javascript:void(0);"><img src="./bar.png"></a>
      </div>
      <div class="worktable">
        <a href="javascript:void(0);">
          <img src="./calender.png">
          <div class="info">日历</div>
        </a>
        <a href="javascript:void(0);">
          <img src="./work.png">
          <div class="info">工作台</div>
        </a>
        <a href="javascript:void(0);">
          <img src="./note.png">
          <div class="info">便签</div>
        </a>
        <a href="javascript:void(0);">
          <img src="./say.png">
          <div class="info">通知</div>
        </a>
      </div>
    </el-col>
  </el-col>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'ctrlheader',
    props: {
      toggleTurn: {
        type: Boolean
      }
    },
    methods: {
      toggleClick() {
        this.$emit('turn', event.target);
      }
    },
    computed: {
      toggleGate() {
        console.log(this.toggleTurn);
        return this.toggleTurn;
      }
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  .header {
    @media screen and (max-width: 768px ) {
      .worktable {
        img {
          display: none;
        }
      }
    }
    .control {
      display: flex;
      justify-content: space-between;
    }

    height: 1rem;

    .title {
      font-size: .2rem;
      background: #f4f2f5;
      padding-left: .5rem;
      margin: 0;
      line-height: 1rem;
    }
  }
</style>
