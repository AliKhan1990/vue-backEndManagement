<template>
<div class="userInfo">
  <div class="avatar">
    <img src="./5.png" alt="">
  </div>
  <h4 class="username">Diana Walen</h4>
  <div class="share">
    <a href="javascript:void(0);"><i class="iconfont icon-3"></i></a>
    <a href="javascript:void(0);"><i class="iconfont icon-weixin"></i></a>
    <a href="javascript:void(0);"><i class="iconfont icon-weibo"></i></a>
    <a href="javascript:void(0);"><i class="iconfont icon-ins"></i></a>
  </div>
</div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="less" rel="stylesheet/less">
  .userInfo{
    text-align: center;
    .avatar{
      padding-top: 1rem;
      img{
        width: 90px;
      }
    }
    .username{
      font-family: Zapfino;
      font-size: .2rem;
      margin: .1rem;
    }
    .share{
      a{
        color:#31c27c;
        outline: 0;
        text-decoration: none;
        margin: .3rem .2rem;
      }
      margin-bottom: .3rem;
    }
  }
</style>
