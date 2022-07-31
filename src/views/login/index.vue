<template>
  <div class="login_box">
    <div class="login_main">
      <div class="logo">
        <img src="../../assets/login_img/logo.595745bd.png" alt="" />
      </div>
      <div class="login_form">
        <el-form>
          <el-form-item>
            <el-input
              v-model="zh"
              prefix-icon="el-icon-mobile-phone"
              placeholder="请输入账号"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              prefix-icon="el-icon-lock"
              show-password
              placeholder="请输入密码"
              v-model="mm"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              class="yzm"
              prefix-icon="iconfont icon-anquan"
              placeholder="请输入验证码"
              v-model="yzm"
            >
            </el-input>
            <span class="yzmwz"></span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zh: "",
      mm: "",
      yzm: "",
    };
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="less">
.login_box {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../../assets/login_img/background.be4fae7d.png") no-repeat;
  background-size: cover;
  .login_main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 518px;
    height: 388px;
    background-color: #fff;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 76px 35px 0;
    .logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -50px;
      width: 96px;
      height: 96px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login_form {
      width: 448px;
      height: 280px;
      /deep/ .el-input__inner {
        height: 52px;
      }
      /deep/ .el-form-item__content {
        display: flex;
        caret-color: #999999;
      }
      .yzm {
        flex: 2;
      }
      .yzmwz {
        flex: 1;
        border: 1px solid #85a06a;
      }
      /deep/ .el-input__icon {
        font-size: 20px;
        margin-top: 2px;
      }
      .el-button--primary {
        background-color: #6578ed;
        width: 100%;
        height: 52px;
        border-color: #6578ed;
        font-size: 14px;
      }
    }
  }
}
</style>
