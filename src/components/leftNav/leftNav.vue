<template>
  <transition name="navZa">
    <el-col class="nav" :md="5" :xs="12" v-show="!toggleGate">
      <el-col :span="24">
        <userAvatar></userAvatar>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="" @close="">
          <el-submenu index="1">
            <template slot="title">文件档案</template>
            <el-menu-item-group default-active="1-1">
              <el-menu-item index="1-1"><i class="iconfont icon-renshidangan"></i>人事档案</el-menu-item>
              <el-menu-item index="1-2"><i class="iconfont icon-wangluo"></i>网络档案</el-menu-item>
              <el-menu-item index="1-3"><i class="iconfont icon-meeting"></i>会议文件</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">政务管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1"><i class="iconfont icon-qingdan"></i>权力清单</el-menu-item>
              <el-menu-item index="2-2"><i class="iconfont icon-zhengcefagui"></i>政策法规</el-menu-item>
              <el-menu-item index="2-3"><i class="iconfont icon-dating"></i>政务大厅</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">部门工作</template>
            <el-menu-item-group>
              <el-menu-item index="3-1"><i class="iconfont icon-48copy9"></i>部门需求</el-menu-item>
              <el-menu-item index="3-2"><i class="iconfont icon-lingdao"></i>工作领导小组</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col class="copyright">
        隐私权政策 - 服务条款 <br>
        ©2017 Infohold
      </el-col>
    </el-col>
  </transition>
</template>

<script type="text/ecmascript-6">
  import userAvatar from 'components/userAvatar/userAvatar';
  export default{
    name: 'leftNav',
    props: {
      toggleTurn: {
        type: Boolean,
        default(){
          return false;
        }
      }
    },
    components: {
      userAvatar
    },
    computed: {
      toggleGate(){
        return this.toggleTurn;
      }
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  @media screen and (max-device-width: 768px) {
    .nav {
      position: fixed;
      z-index: 70;
      margin-top: 1rem;
    }
  }

  .copyright {
    font-size: .2rem;
    padding: 1rem 0 .5rem;
  }

  .nav {
    .el-menu {
      background: #f4f2f5;
      .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
        color: #fff;
        background: #31c27c;
      }
      .el-submenu {
        text-align: left;
      }
    }
    background: #f4f2f5;
  }

  /*animation*/
  .navZa-enter-active {
    transition: all .3s cubic-bezier(.1, .74, .94, .24);
  }

  .navZa-leave-active {
    transition: all .3s cubic-bezier(.1, .74, .94, .24);
  }

  .navZa-enter, .navZa-leave-active {
    transform: translateX(-10px);
    opacity: 0;
  }
</style>
