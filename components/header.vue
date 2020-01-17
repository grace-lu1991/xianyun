<template>
  <div class="header">
    <el-row type="flex" justify="space-between;">
      <!-- logo -->
      <div class="logo">
        <img src="/logo.jpg" alt />
      </div>
      <!-- tab栏的制作 -->
      <div class="navs">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </div>
      <!-- 右边的登陆注册 -->
      <div v-if="!$store.state.user.userInfo.token">
        <nuxt-link to="/user/login">登录/注册</nuxt-link>
      </div>
        <el-dropdown v-else>
          <span class="el-dropdown-link">
            <img :src="$axios.defaults.baseUrl+$store.state.user.userInfo.user.defaultAvatar" alt="">
            {{$store.state.user.userInfo.user.nickname}}
    <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人中心</el-dropdown-item>
    <el-dropdown-item>退出</el-dropdown-item>
  </el-dropdown-menu>
        </el-dropdown>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang='less' scoped>
.header {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px #ddd solid;
  box-shadow: 0 3px 0 #f5f5f5;
  // .main {
  //   height: 60px;
  //   width: 1000px;
  //   margin: 0 auto;
  // }
  /deep/.el-row {
    height: 60px;
  }
  .nuxt-link-exact-active {
    background: #409eff;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
.logo {
  width: 156px;
  padding-top: 8px;

  img {
    display: block;
    width: 100%;
  }
}
.navs {
  display: flex;
  padding: 0 20px;
  flex: 1;
  a {
    display: block;
    box-sizing: border-box;
    padding: 0 20px;
    &:hover {
      border-bottom: 5px #409eff solid;
      color: #409eff;
    }
  }
}
</style>