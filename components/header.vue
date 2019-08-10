<template>
  <div class="header">
    <div class="box">
      <el-row type="flex" justify="space-between">
        <!-- logo -->
        <div class="logo">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </div>
        <!-- 菜单栏 -->
        <el-row type="flex" class="navs">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/post">旅游攻略</nuxt-link>
          <nuxt-link to="/hotel">酒店</nuxt-link>
          <nuxt-link to="/air">国内机票</nuxt-link>
        </el-row>
        <!-- 注册 -->
        <div v-if="!$store.state.user.userInfo.token">
          <nuxt-link to="/user/login">登录注册</nuxt-link>
        </div>
        <!-- 登录之后的布局 -->
        <div v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img class="imgs" src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
              {{$store.state.user.userInfo.user.nickname}}
              <i
                class="el-icon-arrow-down el-icon--right"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="handleLogout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$store.state.user.userInfo.user.nickname);
    // 清除用户信息,退出登录
  },
  methods: {
    handleLogout() {
      this.$store.commit("user/clearUserInfo");
    }
  }
};
</script>
<style lang="less" scoped>
.imgs {
  vertical-align: middle;
  width: 36px;
  height: 36px;
}
.header {
  border-bottom: 1px solid #ccc;
  height: 60px;
  line-height: 60px;
  box-shadow: 0 3px 3px #eee;
}
.logo {
  margin-top: 9px;
  img {
    width: 156px;
    height: 42px;
    display: block;
  }
}
.box {
  width: 1000px;
  margin: 0 auto;
}
.navs {
  flex: 1;
  margin-left: 20px;

  a {
    padding: 0 20px;
    line-height: 60px;
    height: 60px;
    box-sizing: border-box;
    display: block;
    &:hover {
      color: #409eff;
      border-bottom: 3px solid #409eff;
    }
  }

  .nuxt-link-exact-active {
    background: #409eff;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
.el-dropdown-link {
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
  }
}
</style>
